# Tratamiento de datos en IA Flexygo

En Flexygo, la herramienta de AHORA, se han implementado sistemas avanzados de inteligencia artificial para optimizar la gestión y consulta de información. Entre estos destacan los sistemas RAG (Retrieval-Augmented Generation) y SQL Live Data, ambos diseñados para facilitar la interacción inteligente con los datos almacenados en la herramienta. Ambos sistemas garantizan la privacidad y confidencialidad, manteniendo los datos bajo control estricto dentro del entorno privado de Flexygo.

## Funcionamiento del sistema RAG

El sistema RAG en Flexygo permite gestionar y consultar información de documentos previamente subidos al sistema mediante los siguientes pasos:

* **Subida de documentos:** los usuarios cargan documentos directamente en la herramienta Flexygo. Solo se admiten documentos en formato PDF, TXT y DOCX (Word) para ser procesados mediante el sistema RAG.
* **Vectorización de documentos:** los documentos se dividen automáticamente en fragmentos manejables (generalmente párrafos). Estos fragmentos específicos se envían individualmente a la API de OpenAI, que convierte el texto en vectores numéricos capaces de capturar el significado semántico del texto, facilitando búsquedas posteriores por similitud. Es importante destacar que OpenAI no tiene acceso completo ni público al documento, únicamente recibe fragmentos específicos.
* **Almacenamiento en SQL Server:** los fragmentos vectorizados se almacenan exclusivamente en una base de datos SQL Server propiedad de Flexygo, asegurando un acceso eficiente y seguro.
* **Interacción mediante el chat:** al realizar consultas en el chat, estas también son vectorizadas mediante la API de OpenAI. El sistema compara la consulta vectorizada con los fragmentos almacenados, enviando únicamente los fragmentos relevantes como contexto específico para generar las respuestas.

## Funcionamiento del sistema SQL Live Data

El sistema SQL Live Data permite al chat generar respuestas a partir de consultas directas a la base de datos mediante instrucciones T-SQL generadas por OpenAI. El funcionamiento incluye:

* **Generación segura de consultas:** la API de OpenAI no tiene acceso real ni directo a la base de datos. En cambio, crea consultas T-SQL específicas que luego se ejecutan en Flexygo.
* **Privacidad en las consultas:** las consultas generadas por OpenAI son estrictamente de lectura, lo que imposibilita modificaciones en la base de datos. Al chat solo se envían los resultados específicos y limitados de dichas consultas, garantizando así la privacidad. Estos resultados aislados carecen de contexto completo, lo que incrementa aún más la protección de los datos —por ejemplo, proporcionando solo un dato aislado como "32" sin contexto adicional—. Los usuarios también pueden visualizar las consultas ejecutadas por el chat para asegurar la transparencia y la confianza en el proceso.

## Política de privacidad de OpenAI

Toda la comunicación y el envío de datos a la API de OpenAI desde Flexygo se realiza conforme a la [política de privacidad de OpenAI](https://openai.com/es-ES/policies/row-privacy-policy).
