# GPS

Esta sección recopila funciones relacionadas con el GPS que pueden utilizarse en distintas partes de la aplicación.  
Incluye funcionalidades para solicitar permisos de GPS, activar el GPS y obtener las coordenadas actuales del dispositivo.

## Funciones

### getCoords()

```ts { .no-language }
getCoords(timeout, maximum_age): Promise<Position>
```

Obtiene las coordenadas actuales del dispositivo.

#### Parámetros

| Parámetro | Tipo | Valor por defecto | Descripción |
| --------- | ----- | ---------------- | ----------- |
| `timeout` | `number` | `10000` | Tiempo máximo (en milisegundos) para esperar la respuesta del GPS (por defecto: 10000). |
| `maximum_age` | `number` | `10` | Edad máxima aceptada de una lectura de GPS almacenada en caché. |

#### Devuelve

`Promise<Position>`


Una promesa que se resuelve con la [posición](https://capacitorjs.com/docs/apis/geolocation#position) actual del dispositivo.

---

### requestGPSStatus()

```ts { .no-language }
requestGPSStatus(): Promise<any>
```

Solicita permisos de GPS y devuelve el estado tras la interacción del usuario.

#### Devuelve

`Promise<any>`


Posibles valores:  
**GRANTED**, **DENIED**, **DENIED_ONCE**, **NOT_REQUESTED**, **DENIED_ALWAYS**, **RESTRICTED**, **GRANTED_WHEN_IN_USE**

---

### requestGPSPermission()

```ts { .no-language }
requestGPSPermission(): Promise<boolean>
```

Solicita permisos de GPS.  
Si el usuario ha seleccionado “denegar siempre”, se le redirige a los ajustes de la aplicación.

#### Devuelve

`Promise<boolean>`


`true` si el GPS ha sido concedido, `false` si no.

---

### requestGPSActivation()

```ts { .no-language }
requestGPSActivation(): Promise<boolean>
```

Solicita al usuario activar el GPS del dispositivo.

#### Devuelve

`Promise<boolean>`


`true` si el GPS está activado, `false` si no lo está.

---

### isGPSOff()

```ts { .no-language }
isGPSOff(): Promise<boolean>
```

Comprueba si el GPS está apagado (no evalúa permisos, solo si está activo).

#### Devuelve

`Promise<boolean>`


`true` si el GPS está apagado, `false` si está encendido.
