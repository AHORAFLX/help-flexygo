# Add a unit test

## 1. Define the product name

Put the product name here so that names are updated automatically and you only have to copy and paste them:

<fh-namepropagator selector="propagated-projectname" placeholder="AhoraFlexy"></fh-namepropagator>

## 2. Add a test project

Add a new project named <fh-copy><span class="propagated-projectname"></span>UnitTest</fh-copy>

![](../docs_assets/images/Installation/CreatingUnitaryTest/2_1.png)

![](../docs_assets/images/Installation/CreatingUnitaryTest/2_2.png)

## 3. Add references

Add the required references.

Add **System.Web** from the assemblies, and the rest from the Flexygo NuGet package.

![](../docs_assets/images/Installation/CreatingUnitaryTest/3.png)

## 4. Configure

Add the required configuration data.

![](../docs_assets/images/Installation/CreatingUnitaryTest/4_1.png)

If Visual Studio adds a namespace to the connection string name, remove it.

![](../docs_assets/images/Installation/CreatingUnitaryTest/4_2.png)

## 5. Add the code

Add the test code to the class.

```vbnet
Imports FLEXYGO.Configuration.Tokens
Imports FLEXYGO.Objects
Imports FLEXYGO.Objects.Settings
Imports FLEXYGO.Security
Imports FLEXYGO.Data
Imports FLEXYGO.Web
Imports FLEXYGO.Mocks

<TestClass()> Public Class UnitTest1

    ''' <summary>
    ''' The User name
    ''' </summary>
    Friend UserName As String = My.Settings.UserName
    ''' <summary>
    ''' The configuration connection string
    ''' </summary>
    Friend ConfConnString As String = My.Settings.ConfConnectionString
    ''' <summary>
    ''' The data cons string
    ''' </summary>
    Friend DataConsString As String = My.Settings.DataConnectionString
    ''' <summary>
    ''' The user group
    ''' </summary>
    Friend UserGroup As String = My.Settings.UserGroup

    ''' <summary>
    ''' The Settings database connection
    ''' </summary>
    Friend ConfDBConnection As New UserConnection("ConfConnectionString", ConfConnString, 0)
    ''' <summary>
    ''' The data database connection
    ''' </summary>
    Friend DataDBConnection As New UserConnection("DataConnectionString", DataConsString, 0)

    ''' <summary>
    ''' The User Connection Strings
    ''' </summary>
    Friend _ConnectionStrings As New UserConnectionCollection(ConfDBConnection, DataDBConnection)

    ''' <summary>
    ''' The configuration token
    ''' </summary>
    Friend _conftoken As New ConfToken(New UserConnectionCollection("ConfConnectionString", "DataConnectionString"), UserName)
    ''' <summary>
    ''' The User security Configuration
    ''' </summary>
    Friend _ConfUserSecurity As UserSecurityConfig = _conftoken.UserSecurity


    Public Sub New()
        If System.Web.HttpContext.Current Is Nothing Then
            HttpContextManager.SetCurrentContext(MockHelper.GetMockedHttpContext, UserName)
        End If
    End Sub

    Public Sub SetConfToken(lConfToken As ConfToken, Optional HTMLFormat As Boolean = False)
        Me.UserName = lConfToken.UserSecurity.UserName
        Me.ConfConnString = lConfToken.ConfConnString
        Me.DataConsString = lConfToken.UserSecurity.ConnectionStrings.MainDataConnString
        Me.UserGroup = My.Settings.UserGroup
        Me.ConfDBConnection = New UserConnection("ConfConnectionString", ConfConnString, 0)
        Me.DataDBConnection = New UserConnection("DataConnectionString", DataConsString, 0)
        Me._ConnectionStrings = New UserConnectionCollection(ConfDBConnection, DataDBConnection)
        Me._conftoken = lConfToken
        Me._ConfUserSecurity = lConfToken.UserSecurity
    End Sub

    <TestMethod()> Public Sub TestImageController()


        If Not MySession.Contains("ConfToken") Then
            GlobalVars.SetConfToken(_conftoken)
        End If
        Try

            Dim ctl As New AhoraFlexy.Controllers.CarouselController

            Dim res As List(Of FLEXYGO.Utilities.General.BaseCollection) = ctl.ReadImages()

            For Each itm As FLEXYGO.Utilities.General.BaseCollection In res

                Dim File As String = itm("File").ToString.Replace("~", My.Settings.Path).Replace("/", "\")

                If Not System.IO.File.Exists(File) Then
                    Assert.Fail(String.Format("File {0} not found", File))
                End If

            Next


        Catch ex As Exception
            Assert.Fail("Error in TestEntityController:" + vbCrLf + ex.Message)
        End Try
    End Sub

End Class
```

## 6. Verification

Open the **Test Explorer** and run the tests to verify that everything is OK.

![](../docs_assets/images/Installation/CreatingUnitaryTest/6.png)