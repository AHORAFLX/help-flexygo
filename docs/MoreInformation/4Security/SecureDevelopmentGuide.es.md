# Guía de Desarrollo Seguro en Flexygo

## 1. Principio de mínimo privilegio (obligatorio)

Todo objeto, proceso o personalización debe aplicar el principio de mínimo privilegio:

* Definir explícitamente roles con permisos de lectura, escritura y eliminación
* Evitar objetos accesibles por todos los usuarios
* No confiar en la visibilidad del botón como control de seguridad
* Bloquear ejecución directa por URL si no procede
* No abrir objetos innecesarios en el API

## 2. Integración de Flexygo en un ciclo CI/CD

Flexygo debe integrarse en un pipeline de CI/CD para garantizar calidad y seguridad:

* Control de versiones mediante paquetes NuGet
* Usar repositorios centralizados (Git)
* Definir una política de Hotfix

## 3. Inclusión de tests en el CI/CD

Todo desarrollo debe incluir pruebas automatizadas:

* Tests de interfaz para garantizar funcionalidad completa y accesos
* Tests unitarios para probar DLLs o stored procedures
* Ejecución de tests nativos de Flexygo para validar estructura
* Tests de carga si se trabaja en entornos de muchos usuarios

## 4. Protección de contraseñas y secretos

**Prohibido:**

* Hardcodear contraseñas en código, SQL o configuración
* Enviar credenciales por logs o errores
* Subir contraseñas al control de código

**Obligatorio:**

* Añadir controles en el pipeline que busquen patrones de secretos
* Bloquear despliegue si se detectan credenciales
{: .flx-warning-card }

## 5. Auditoría

### 5.1 Activación de auditoría

Activar auditoría en objetos que:

* Manejen datos sensibles
* Permitan cambios críticos
* Afecten a procesos de negocio clave

## 6. Desarrollo seguro de DLLs

### 6.1 Acceso a base de datos

**Usar exclusivamente:**

* SQL parametrizado
* Stored procedures

**Prohibido:** SQL dinámico construido por concatenación.

**Ejemplo incorrecto:**

```csharp
string sql = "SELECT * FROM Clientes WHERE Id = " + id;
```

**Ejemplo correcto:**

```csharp
SqlCommand cmd = new SqlCommand("GetClienteById", conn);
cmd.CommandType = CommandType.StoredProcedure;
cmd.Parameters.AddWithValue("@Id", id);
```

## 7. Checklist de revisión previa a producción

* ☐ Se aplica mínimo privilegio en todos los objetos
* ☐ Flexygo integrado en CI/CD
* ☐ Tests ejecutados correctamente en el pipeline
* ☐ No existen contraseñas ni secretos expuestos
* ☐ Auditoría activada donde corresponde
* ☐ DLLs usan SQL parametrizado o stored procedures
