# **flexygo** and Test Automation

Test Automation are an important value when evaluating and verifying the correct functioning of our applications. In fact tests are just small programs used to verify that the results of our application are correct or that no type of mal function is occurring. The test is not more than a piece of code that is compiled in a dll and can be executed either from the programmers IDE, an Integration Machine or by **flexygo** itself. **flexygo** allows us not only to have **flexygo**'s own tests, but also the possibility of including any test dll that we need for our products or solutions. It's as easy as to inform in the test section of the location of the new testing dll. From this moment onwards as soon as we execute a diagnosis of our solution, it will pass as many unit or integration test that are available in the different dll.

You can find more information about testing with **flexygo** here [Test Unitario](https://nuget.flexygo.com/develop/readme.html#TestUnitario)

![Dll Test management](/assets/images/Custom_DLL/testing2.png "Image 1. Dll Test management")

Image 1. Dll Test management

## Test Example

In the example we see a test that runs through all the application nodes definition and checks that they load correctly. The node has a feature that if it should fail during the load it changes its title to **Node Error** so its malfunction is very easy to detect.

#### Test coding Example

```
''' <summary>  ''' Tests Nodes.  ''' </summary>  <TestMethod()>  Public Sub TestNodes()    Try      '' Nodes dont throw exception but can have an error in the description      Dim WebInterfaceMainNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.WebInterface.MainNavigationNodes      For Each n As NavigationNode In WebInterfaceMainNavigationNodes.Values        If n.Title = "Node Error" Then          Assert.Fail("Error in WebInterfaceMainNavigationNodes " + n.Descrip)        End If      Next        Dim WebInterfaceNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.WebInterface.NavigationNodes      For Each n As NavigationNode In WebInterfaceMainNavigationNodes.Values        If n.Title = "Node Error" Then          Assert.Fail("Error in WebInterfaceNavigationNodes " + n.Descrip)        End If      Next        Dim MobileInterfaceMainNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.MobileInterface.MainNavigationNodes      For Each n As NavigationNode In MobileInterfaceMainNavigationNodes.Values        If n.Title = "Node Error" Then          Assert.Fail("Error in MobileInterfaceMainNavigationNodes " + n.Descrip)        End If      Next        Dim MobileInterfaceNavigationNodes As NavigationNodes = _ConfUserSecurity.Profile.MobileInterface.NavigationNodes      For Each n As NavigationNode In MobileInterfaceMainNavigationNodes.Values        If n.Title = "Node Error" Then          Assert.Fail("Error in MobileInterfaceNavigationNodes " + n.Descrip)        End If      Next        Catch ex As Exception      Assert.Fail("Error in Test Navigation Nodes " + ex.Message)    End Try  End Sub
```

## Exclude tests from **flexygo**

If there are test in a dll that we do not want **flexygo** to run, we can tag them with a testCategory attribute and inform **flexygo** of which test should not be used by using the exclude attributes. In te following sample if we don't want to execute this test we should set **flexygo** exlude attributes = ExcludeClient

![Exclude dll Tests ](/assets/images/Custom_DLL/testing1.png "Image 2. Exclude dll Tests ")

Image 2. Exclude dll Tests

```
''' <summary>  ''' Tests if there are missing translations for active cultures and originId 0  ''' </summary>  <TestCategory("ExcludeClient")> <TestMethod()>  Public Sub TestMissingTranslations()    Dim dm As New DataManager("ConfConnectionString")    Try      Dim msg As New System.Text.StringBuilder      Dim cu As DataTable        '' Read enabled cultures      cu = dm.DataTable("Select CultureId From Cultures where active=1 and cultureId!='en-gb'")        For Each r As DataRow In cu.Rows        '' View pending translation for selected culture        Dim pl As New BaseCollection        pl.Add("CultureId", r("CultureId").ToString)        pl.Add("Origin", 0)        Dim results As New DataTable        dm.ExecuteStoredResult("pNet_TestCultureEntries", pl, results)        If results.Rows.Count > 0 Then          msg.AppendLine(String.Format("{0} Pending Translations for culture: {1}", results.Rows.Count, r("CultureId").ToString))        End If      Next        If msg.Length > 0 Then        If FormatedExceptions Then          Assert.Fail("<ul>" + msg.ToString + "</ul>")        Else          Assert.Fail(msg.ToString)        End If      End If        Catch ex As Exception        If FormatedExceptions Then          Assert.Fail("<ul>" + ex.Message + "</ul>")        Else          Assert.Fail(ex.Message)        End If      Finally        dm.Close()    End Try  End Sub
```