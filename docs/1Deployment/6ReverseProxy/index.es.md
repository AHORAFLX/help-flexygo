# Despliegue tras un proxy inverso

Es habitual colocar un proxy inverso delante de Flexygo —nginx, ARR de IIS, Cloudflare o un balanceador— para terminar el TLS, publicar varias aplicaciones bajo un mismo dominio o repartir carga. Es compatible con los dos modos de despliegue, IIS y Kestrel, pero **exige configurar el proxy**: sin ello la aplicación no puede saber cómo era la petición original y se comporta como si todo el tráfico llegara sin cifrar.

---

## Qué tiene que reenviar el proxy

Con un proxy delante, quien abre la conexión contra Flexygo es el proxy y no el navegador. Para la aplicación, **todas las peticiones llegan de la misma dirección y siempre por `http`**, aunque el usuario esté navegando por `https`. El proxy conserva esa información en dos cabeceras, y las dos son necesarias:

| Cabecera | Qué transporta | Qué ocurre si falta |
|----------|----------------|---------------------|
| `X-Forwarded-Proto` | El esquema que usó el navegador (`https`) | **Bucle infinito de redirecciones.** La aplicación cree que la petición es insegura y redirige a `https`; el proxy la vuelve a entregar por `http`, y el ciclo no termina |
| `X-Forwarded-For` | La dirección IP real del cliente | La auditoría de accesos y las restricciones de IP por usuario ven la dirección del proxy en lugar de la del usuario |

### nginx

Dentro del bloque `location` que hace de proxy:

```nginx
proxy_set_header Host              $host;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
```

El ejemplo completo para un despliegue con Kestrel en Linux está en [Despliegue con Kestrel](../5Kestrel/index.md#reverse-proxy-con-nginx).

### ARR de IIS

ARR reenvía `X-Forwarded-For` por su cuenta, pero **no añade `X-Forwarded-Proto`**. Hay que crear una regla de reescritura entrante que establezca esa cabecera a partir de la variable de servidor `HTTPS`.

### Cloudflare y balanceadores gestionados

Envían las dos cabeceras sin configuración adicional.

---

## Proxies de confianza

Las cabeceras `X-Forwarded-*` son texto que puede enviar cualquiera, así que Flexygo **sólo acepta la dirección IP reenviada si la petición procede de un proxy declarado**. De lo contrario, alguien capaz de alcanzar el servidor sin pasar por el proxy podría atribuirse cualquier dirección y saltarse las restricciones de acceso por IP.

- Si el proxy corre **en la misma máquina** que Flexygo, no hay que declarar nada: las direcciones locales se aceptan de fábrica.
- Si el proxy corre **en otra máquina**, hay que indicar su dirección en el `appsettings.json` de Frontend y Backend:

```json
{
  "ForwardedHeaders": {
    "KnownProxies": [ "192.168.1.10" ]
  }
}
```

!!! warning "Es la dirección que ve Flexygo, no la pública"
    No se trata de la IP pública del sitio, sino de aquella desde la que el proxy abre la conexión contra el servidor. En IIS se lee en el campo `c-ip` del log del sitio, bajo `C:\inetpub\logs\LogFiles`.

Sin esa clave el despliegue funciona igual, pero la dirección registrada en la auditoría de accesos será la del proxy.

---

## Redirección a HTTPS

Cuando el TLS lo termina el proxy, el borde ya obliga a `https` y la redirección que hace la aplicación es redundante. Puede desactivarse en el `appsettings.json` del Frontend:

```json
{
  "HttpsRedirection": false
}
```

Viene activada por defecto y **conviene dejarla así** si el servidor es accesible directamente por `http`: la cookie de sesión se emite como segura, de modo que un usuario que entrara por `http` no podría iniciar sesión.

---

## Comprobación

Una vez configurado el proxy, la aplicación debe responder por su URL pública sin redirecciones repetidas. Si sigue habiendo un bucle, consulta [Solución de problemas: despliegue](../../4Troubleshooting/1Deployment.md).
