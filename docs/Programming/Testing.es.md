# Automatización de tests { .flx-title-with-image }

![flexygo](/docs_assets/images/FlexygoLogo.png){ .fh-image-of-title }

La Automatización de Pruebas es un valor importante al evaluar y verificar el correcto funcionamiento de nuestras aplicaciones. De hecho, las pruebas son solo pequeños programas usados para verificar que los resultados de nuestra aplicación son correctos o que no ocurre ningún tipo de mal funcionamiento. La prueba no es más que un pedazo de código que se compila en una dll y puede ser ejecutado ya sea desde el IDE del programador, una Máquina de Integración o por flexygo mismo.

Flexygo nos permite no solo tener las propias pruebas de flexygo, sino también la posibilidad de incluir cualquier dll de prueba que necesitemos para nuestros productos o soluciones. Es tan fácil como informar en la sección de pruebas la ubicación de la nueva dll de pruebas. A partir de este momento, tan pronto como ejecutemos un diagnóstico de nuestra solución, pasará tantas pruebas unitarias o de integración que estén disponibles en las diferentes dll. 

Puedes encontrar más información sobre pruebas con flexygo aquí [Test Unitario](https://docs.flexygo.com/develop/readme.html#TestUnitario).
{: .flx-warning-card }

![Dll Test management](/docs_assets/images/Custom_DLL/testing2.png "Imagen 1. Gestión de Pruebas Dll")

## Ejemplo de test

En el ejemplo vemos una prueba que recorre todas las definiciones de nodos de la aplicación y verifica que se cargan correctamente. El nodo tiene una característica que, si debería fallar durante la carga, cambia su título a **Error de Nodo**, por lo que su mal funcionamiento es muy fácil de detectar.

### Ejemplo de codificación de tset

```vbnet
''' <summary>
''' Pruebas Nodos.
''' </summary>
<TestMethod()>
Public Sub TestNodes()
  Try
    '' Los Nodos no lanzan excepciones pero pueden tener un error en la descripción
    Dim WebInterfaceMainNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.WebInterface.MainNavigationNodes
    For Each n As NavigationNode In WebInterfaceMainNavigationNodes.Values
      If n.Title = "Error de Nodo" Then
        Assert.Fail("Error en WebInterfaceMainNavigationNodes " + n.Descrip)
      End If
    Next

    Dim WebInterfaceNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.WebInterface.NavigationNodes
    For Each n As NavigationNode In WebInterfaceMainNavigationNodes.Values
      If n.Title = "Error de Nodo" Then
        Assert.Fail("Error en WebInterfaceNavigationNodes " + n.Descrip)
      End If
    Next

    Dim MobileInterfaceMainNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.MobileInterface.MainNavigationNodes
    For Each n As NavigationNode In MobileInterfaceMainNavigationNodes.Values
      If n.Title = "Error de Nodo" Then
        Assert.Fail("Error en MobileInterfaceMainNavigationNodes " + n.Descrip)
      End If
    Next

    Dim MobileInterfaceNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.MobileInterface.NavigationNodes
    For Each n As NavigationNode In MobileInterfaceMainNavigationNodes.Values
      If n.Title = "Error de Nodo" Then
        Assert.Fail("Error en MobileInterfaceNavigationNodes " + n.Descrip)
      End If
    Next

    Catch ex As Exception
    Assert.Fail("Error en la Prueba de Nodos de Navegación " + ex.Message)
  End Try
End Sub
```

## Excluir tests de flexygo

Si hay pruebas en una dll que no queremos que flexygo ejecute, podemos etiquetarlas con un atributo testCategory e informar a flexygo qué pruebas no deben ser utilizadas usando los atributos de exclusión. En el siguiente ejemplo, si no queremos ejecutar esta prueba, debemos configurar los atributos de exclusión de flexygo como **attributes = ExcludeClient**.

![Exclude dll Tests ](/docs_assets/images/Custom_DLL/testing1.png "Image 2. Exclude dll Tests ")

```vbnet
''' <summary>
''' Prueba si hay traducciones faltantes para culturas activas y originId 0
''' </summary>
<TestCategory("ExcludeClient")> <TestMethod()>
Public Sub TestMissingTranslations()
  Dim dm As New DataManager("ConfConnectionString")
  Try
    Dim msg As New System.Text.StringBuilder
    Dim cu As DataTable

    '' Leer culturas habilitadas
    cu = dm.DataTable("Select CultureId From Cultures where active=1 and cultureId!='en-gb'")

    For Each r As DataRow In cu.Rows
      '' Ver traducción pendiente para la cultura seleccionada
      Dim pl As New BaseCollection
      pl.Add("CultureId", r("CultureId").ToString)
      pl.Add("Origin", 0)
      Dim results As New DataTable
      dm.ExecuteStoredResult("pNet_TestCultureEntries", pl, results)
      If results.Rows.Count > 0 Then
        msg.AppendLine(String.Format("{0} Traducciones Pendientes para la cultura: {1}", results.Rows.Count, r("CultureId").ToString))
      End If
    Next

    If msg.Length > 0 Then
      If FormatedExceptions Then
        Assert.Fail("<ul>" + msg.ToString + "</ul>")
      Else
        Assert.Fail(msg.ToString)
      End If
    End If

    Catch ex As Exception
      If FormatedExceptions Then
        Assert.Fail("<ul>" + ex.Message + "</ul>")
      Else
        Assert.Fail(ex.Message)
      End If
    Finally
      dm.Close()
  End Try
End Sub
```