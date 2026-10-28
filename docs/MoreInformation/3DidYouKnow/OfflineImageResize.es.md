# ¿Sabías que puedes redimensionar las imágenes provenientes del offline?

Desde la versión 4.6.0.1 de Flexygo puedes configurar la compresión de las imágenes de un objeto, para que las fotos que llegan desde la app offline no se guarden con tamaños excesivos.

## Pasos para configurar la compresión

En la skin 2026, con el modo desarrollo encendido:

1. Abre la configuración del objeto que guarda las imágenes. Lo más rápido es **Acceso rápido** (**Ctrl Espacio**) → **Config. adicional**.
2. En **Config. adicional**, elige **Imágenes** en el selector de arriba a la derecha (junto a Documentos, Chatter y Correo).
3. En el apartado **Compresión**, rellena:
    * **Compresión**: *Nothing*, *Low*, *Medium* o *High*. Las tres últimas reducen el tamaño, pero también la calidad.
    * **Anchura máxima** y **Altura máxima**: el tamaño máximo de la imagen. Se mantienen las proporciones sin pasar de esos valores.
4. Pulsa **Guardar**.

<figure markdown="span">
  ![Configuración de imágenes del objeto](../../docs_assets/images/DidYouKnow/OfflineImageResize/object-setup-images-2026.png)
  <figcaption><b>Config. adicional</b> → <b>Imágenes</b>, con el apartado <b>Compresión</b> abajo</figcaption>
</figure>

En la skin flexy2022 se llega desde el asistente del objeto: en el último paso, **Configuración de imágenes**.

La aplicación redimensiona así automáticamente las imágenes capturadas en modo offline y ocupan menos en la base de datos.
