# How do I generate a RELEASE?

## 1. Create the release in SourceTree

Start from the `develop` branch, clean and with no pending changes.

* Click the Git-Flow button

![](../../docs_assets/images/CICD/GenerateRelease/1.png)

* Confirm the popup screen with OK

![](../../docs_assets/images/CICD/GenerateRelease/2.png)

* Click Git-Flow again

![](../../docs_assets/images/CICD/GenerateRelease/3.png)

* Select **Start New Release** and enter a name such as `RELEASE_4_11_0_1`

A new branch is created from `develop`. Run tests and fix any issues on it through normal commits until it's validated.

* Click Git-Flow again and select **Finish Release**

![](../../docs_assets/images/CICD/GenerateRelease/4.png)

* Confirm the merge into `master` and `develop`, including the corresponding tag

![](../../docs_assets/images/CICD/GenerateRelease/5.png)

!!! warning "Before pushing"
    Before pushing, the next step on TeamCity must be completed.

## 2. Update the version number in TeamCity

* Go to the `develop` branch project → **Edit settings**

![](../../docs_assets/images/CICD/GenerateRelease/6.png)

* Change the first two numbers of the **Build Number format** (e.g. from `4.10` to `4.11`) and reset the **Build Counter** to `1`

![](../../docs_assets/images/CICD/GenerateRelease/7.png)

* Repeat the same process on the `master` branch project → **Edit settings**

![](../../docs_assets/images/CICD/GenerateRelease/8.png)

* Change the format (e.g. from `4.10.0` to `4.11.0`) and reset the counter

## 3. Back in SourceTree

* Push the pending merges
* Verify that TeamCity builds and publishes correctly
