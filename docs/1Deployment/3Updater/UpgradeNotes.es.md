# Qué tener en cuenta al actualizar <span class="fh-version-tag" title="Disponible desde la versión 10">10.0+</span>

La versión 10 trae muchas funciones nuevas que no cambian nada de lo que ya tenías: están en las notas de versión. Esta página recoge lo contrario: **lo que ya existía y ahora funciona de otra manera**, y lo que conviene revisar antes o justo después de actualizar una aplicación.

Está ordenada por quién lo nota. Si solo tienes un minuto, empieza por la lista de comprobación.

## Lista de comprobación

| | Revisa | Si… |
|---|---|---|
| ☐ | [SQL Server 2022 o superior](#3-configuracion-y-despliegue) | el servidor SQL es anterior a SQL Server 2022 |
| ☐ | [Llamadas a procesos por la WebAPI](#1-integraciones-por-la-webapi) | tienes integraciones que ejecutan procesos con `/webapi/exec` |
| ☐ | [Columnas que lee una integración](#solo-se-sirven-las-propiedades-definidas) | una integración lee columnas que no son propiedad del objeto |
| ☐ | [Proxy inverso y bloqueo de IP](#bloqueo-de-ip-por-intentos-fallidos-de-token) | la aplicación está detrás de un proxy o un balanceador |
| ☐ | [Páginas propias de administración](#seguridad-de-nodo-y-seguridad-de-pagina) | creaste páginas que solo debe ver un administrador |
| ☐ | [Hojas, interfaz y logo propios](#4-pasar-un-perfil-de-flexy2022-a-skin2026) | vas a pasar usuarios de flexy2022 a skin2026 |
| ☐ | [Código propio sobre calendarios, formularios o iconos](#5-para-quien-desarrolla-producto) | tu producto tiene JavaScript o CSS a medida |

---

## 1. Integraciones por la WebAPI

### Los procesos de un objeto se llaman con su objeto

Un proceso definido sobre un objeto se ejecuta **siempre a través de ese objeto**: `POST /webapi/exec/{Proceso}/{Objeto}/{id}`, o `POST /webapi/exec/{Proceso}/{Objeto}?filter=…` para la colección. Llamado sin objeto, responde `400`; una colección sin `filter` también. Los procesos que no cuelgan de ningún objeto se llaman igual que antes.

Las negativas tienen ahora su estado (`403` por rol, `404` si el registro no existe, `409` si su estado no lo permite) en lugar de un `500` o de un `200` con el error dentro. El detalle y la tabla de «antes y ahora» están en [Seguridad de la WebAPI](../../Help/Programming/WebAPISecurity.md).

!!! warning "Si generas el cliente desde el OpenAPI"
    El OpenAPI de cada token solo anuncia lo que su rol puede ver o ejecutar, la paginación es desde 0 y las operaciones tienen nombre propio. **Regenera el cliente** tras actualizar.

### Solo se sirven las propiedades definidas

El ajuste **`WebAPI_OnlyDefinedProperties`** viene **activado** (también si falta en la tabla de ajustes): la WebAPI y el servidor MCP devuelven solo las **propiedades definidas** del objeto y sus claves, en listas, registros, esquemas de alta y OpenAPI. Antes devolvían todas las columnas de la tabla, fueran propiedad o no.

Si una integración lee una columna que no es propiedad, defínela como propiedad del objeto o, si no hay más remedio, pon el ajuste a `false`.

### Bloqueo de IP por intentos fallidos de token

**50 intentos fallidos de `POST /token` en 60 segundos** desde la misma dirección la bloquean, **en toda la aplicación** (también la pantalla de entrada) y **sin fecha de fin**: sigue bloqueada hasta que un administrador quita la fila en **IP Lockouts**. Cuentan el usuario que no existe, la contraseña mala y el `refresh_token` inválido. Cada fallo queda en el log de la WebAPI.

| Ajuste | Por defecto | `0` |
|---|---|---|
| `WebAPI_MaxFailedTokenAttempts` | `50` | apaga el bloqueo |
| `WebAPI_FailedTokenInterval` | `60` (segundos) | apaga el bloqueo |

!!! danger "Detrás de un proxy, declara el proxy"
    Si la aplicación está detrás de un proxy inverso o un balanceador que no está en `ForwardedHeaders:KnownProxies`, todas las peticiones llegan con **la IP del proxy**: una integración con la contraseña caducada bloquea a **todos los usuarios**. Configúralo como se explica en [Despliegue tras un proxy inverso](../6ReverseProxy/index.md).

    Y si el Frontend y el Backend están en máquinas distintas, los dos necesitan la misma `JwtSettings:SecretKey`: el Frontend firma con ella la IP real del cliente.

### Otros cambios que nota un integrador

- **Filtros validados.** Un `filter` con comentarios (`--`), `;` o paréntesis o comillas sin cerrar responde `400`. El filtro de colección de un rol se aplica siempre a las filas; si no puede aplicarse, la petición falla en lugar de servirse sin filtro.
- **Fechas.** Las altas y ediciones por la WebAPI leen y escriben la fecha tal como está en la base, sin conversión de zona horaria. `GET /webapi/context` dice la zona del servidor (`serverTimeZone`, `serverUtcOffset`). Revisa los clientes que compensaban la zona.
- **Procesos *OnChange*.** En un alta por la WebAPI, el proceso de cambio de una propiedad se ejecuta aunque la propiedad no tenga dependientes.
- **Licencia.** Las operaciones de datos de la WebAPI exigen una licencia válida.

---

## 2. Seguridad y accesos

### Seguridad de nodo y seguridad de página

La seguridad de un **nodo** del menú solo decide si se **ve el acceso**: la página que abre sigue abriéndose escribiendo su dirección. Para que una página propia de administración no la vea nadie más, pon también **seguridad de página** (`allUsers` sin permiso). Administradores y diseñadores se saltan esa comprobación.

### Pantallas solo para administradores

**Cambiar perfil** del menú de usuario solo lo ven los administradores, y el modo desarrollo, los roles diseñadores. La búsqueda global en objetos del sistema (objetos, páginas, procesos…) solo se ofrece a administradores y diseñadores: lo que deba buscar un usuario normal se configura en sus búsquedas.

### Seguridad de procesos

Una regla de objeto y proceso sobre un objeto al que el proceso **no está vinculado** deja de aplicarse: se usa la regla general del proceso.

Las reglas **generales** son nuevas: se ponen por proceso (por rol, usuario o facultad) y protegen también los procesos que no cuelgan de ningún objeto. Sin reglas generales, cada proceso se comporta como antes.

### Otros cambios

- **Los cambios de rol y permisos** se aplican en unos segundos, sin que el usuario vuelva a entrar.
- **El proceso de después de entrar** (`AfterLoginProcess`) se ejecuta una sola vez y, si falla, el usuario entra igualmente y ve el error. Si contabas con él para impedir la entrada, revísalo.
- **Bloqueo de cuenta**: se configura con `UserLockoutMaxFailedAttempts` y `UserLockoutMinutes` (5 y 5). La propiedad `LockoutEndDateUtc` del usuario pasa a llamarse **`LockoutEnd`**: cámbiala en plantillas o código propio.
- **Avisos en vivo de altas y cambios**: un objeto con `InsertTriggerEvent`, `UpdateTriggerEvent` o `DeleteTriggerEvent` activos **empieza a avisar**; antes esas columnas no tenían efecto.
- **Una condición de seguridad de módulo que falla** ya no deja la página en blanco: el módulo se oculta y el error queda en el log.

---

## 3. Configuración y despliegue

| Qué | Ahora | Qué hacer |
|---|---|---|
| Servidor SQL | El requisito mínimo es **SQL Server 2022** o superior | Actualiza el servidor SQL antes de actualizar la aplicación. Ver [Requisitos del sistema](../SystemRequirements.md) |
| Fichero de configuración | Se carga `appsettings.{Environment}.json`; `appsettings.Development.json` no se publica | Comprueba en qué fichero está tu configuración |
| Paquetes del actualizador | En `C:\ProgramData\Flexygo\Packages` (manda `FLEXYGO_PACKAGES_ROOT` si existe) | Permisos y espacio en la ruta nueva |
| Modo mantenimiento | Se activa desde el panel de la aplicación y deja fuera a todos salvo al administrador que lo activó. Se retiran los procesos de sistema `EnableMaintenanceMode` y `DisableMaintenanceMode` | Si los llamabas desde un botón o una integración, usa el panel |
| Tamaño de subida | Hasta 2 GB en Kestrel, IIS y `web.config` | Revisa el límite del proxy, si lo hay |
| Recursos estáticos | Comprimidos y con caché larga; la dirección cambia con el contenido | Revisa la caché de un CDN o proxy |
| Novedades en la pantalla de entrada | Se consultan a un servicio externo | Sin salida a internet, pon `DisableNews` a `true` |

**Tareas programadas nuevas.** La actualización añade tres tareas que se ponen en marcha solas:

- **Envío de webhooks** (`flxWebhookDispatcher`, cada minuto): envía los avisos a sistemas externos que estén pendientes y reintenta los que fallaron. Solo hace algo si has configurado webhooks de salida.
- **Escalado de tareas** (`flxTaskEscalation`, cada 5 minutos): las tareas de aprobación que pasan de su plazo se escalan a la persona indicada; si no indican a nadie, caducan.
- **Vigilancia de salud** (`HealthWatch`, cada 15 minutos): revisa lo mismo que el panel de salud (máquina, SQL Server, bases de datos, copias de seguridad, Frontend…) y, si algo está en alarma o en advertencia, avisa a los administradores en la campana. Las alarmas, además, por correo, si hay una cuenta de correo configurada. Cada aviso se manda una sola vez y no se repite hasta pasada una semana.

Revisa que la cuenta de correo esté configurada si quieres recibir las alarmas.

---

## 4. Pasar un perfil de flexy2022 a skin2026

Actualizar **no cambia la piel** de nadie: cada usuario sigue con su perfil. Las **instalaciones nuevas** empiezan en skin2026, y un usuario nuevo hereda la piel de quien lo crea. Cuando decidas pasar un perfil a skin2026, revisa esto:

1. **Hojas propias.** Las hojas que diste de alta para la piel flexy2022 en **Skins_Css** no se cargan en skin2026, y no hay aviso. Lo que deba verse en las dos pieles va a **Plugins** como CSS (tipo `1`).
2. **Interfaz propio.** skin2026 usa sus propios menús (*Main Menu 2026*, *Work Area 2026*) y no tiene logo ni script propios. Lo cómodo es crear un interfaz 2026 copiado del de fábrica y llevar a él tus **nodos**, tu **logo**, tu **script** (las funciones globales que llaman tus plantillas) y tu **estilo**.
3. **Logo.** Con el lateral plegado, skin2026 busca junto a tu logo un `<nombre>-mini.<ext>`; si no lo encuentra, usa el logo reducido. La variante oscura se busca como `<nombre>-dark.<ext>`.
4. **CSS anidado.** Una hoja propia con anidamiento (`&`) funciona, pero se sirve **sin minificar**. Si importa el peso, escríbela sin anidar.

### Lo que también cambia en flexy2022

Algunas piezas se arreglaron en las dos pieles y ahora traen de serie lo que quizá ya te habías hecho a mano en tus hojas. Si ves un borde o un efecto duplicado, **quita tu parche**:

| Pieza | Qué cambió |
|---|---|
| Easy info | Estructura común de tarjeta; la tarjeta se pide con `mode="card"` en los parámetros del módulo, y los valores se muestran como texto (el HTML que devuelva el SQL ya no se interpreta). Ver [Easy info](../../Help/Modules/EasyInfo.md#0-al-actualizar-un-producto) |
| Calendarios | FullCalendar 6, con un aspecto parecido al anterior. Ver [Calendarios con FullCalendar 6](../../Help/Modules/SchedulerCalendarV10.md) |
| Listas | Agrupar por cualquier columna; la columna de acciones sigue delante |
| Fichas por defecto | Arriba, la tarjeta de decisión pendiente, solo cuando el registro tiene alguna |

!!! danger "Easy info: el HTML que devuelve el SQL ya no se interpreta"
    Los valores de un easy info se escriben como **texto**. Si el SQL de un easy info existente devuelve HTML (etiquetas, estilos, iconos), ahora se verá el código en lugar del formato, y la tarjeta puede quedar rota. Revisa los SQL de tus easy info antes de actualizar: qué cambia y qué hacer, en [Easy info · Al actualizar un producto](../../Help/Modules/EasyInfo.md#0-al-actualizar-un-producto).

---

## 5. Para quien desarrolla producto

- **Calendarios**: pasan a FullCalendar 6. Qué cambia y cómo migrar el código propio, con ejemplos, en [Calendarios con FullCalendar 6](../../Help/Modules/SchedulerCalendarV10.md#0-al-actualizar-un-producto).
- **Gráficas:** el módulo con ECharts es el que se recomienda a partir de ahora. Pasa a él tus gráficas siguiendo [Gráficas con ECharts](../../Help/Modules/ECharts.md#0-al-actualizar-un-producto); el módulo antiguo puede retirarse en una versión futura.

| Qué | Antes | Ahora | Qué hacer |
|---|---|---|---|
| Formularios (solo código propio que toque su rejilla) | gridstack 0.2.5 (`data-gs-*`, `$(…).gridstack()`) | gridstack 12 (`gs-x`, `gs-y`, `gs-w`, `gs-h`, `GridStack.init`). Los formularios configurados se adaptan solos; por debajo de 768 px pasan a una columna | Si tu código toca la rejilla del formulario, busca `data-gs-`, `.gridstack(` y `gridstack-flexygo` |
| Font Awesome | 4.5 | 7 con compatibilidad v4: `fa fa-*` sigue funcionando | Revisa el CSS que ajusta anchos de icono (ahora tienen ancho fijo) |
| `flexygo.debug` | Llegaba a todos | Solo a diseñadores | Comprueba que existe antes de usarlo: `if (flexygo.debug && flexygo.debug.isDevelopMode())` |

---

## 6. Exportar como proyecto

**Exportar como proyecto** (nuevo, solo para administradores) genera desde la aplicación instalada un zip con todo lo necesario para seguir desarrollándola como proyecto: configuración, ficheros estáticos y DLL viajan siempre.

- **Carpeta `custom`:** eliges qué carpetas y ficheros se incluyen, viendo el tamaño de cada uno. Salen desmarcados de entrada los repositorios de documentos e imágenes, las carpetas que la aplicación escribe mientras funciona y todo lo que pase de 100 MB.
- **Espacio en disco:** el zip se escribe en el disco del servidor, y antes se comprueba que haya sitio.

Revisa la selección de `custom` antes de pulsar **Export**. La guía completa está en [Exportar la aplicación como proyecto](../../2ProductDevelopment/8ExportProject/2Reference.md).
