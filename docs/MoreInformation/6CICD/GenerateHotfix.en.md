# How do I generate a HOTFIX?

![](../../docs_assets/images/CICD/GenerateHotfix/1.png)

## Full procedure

Before starting the hotfix, we pull `develop` and `master` and make sure we're up to date:

![](../../docs_assets/images/CICD/GenerateHotfix/2.png)

We click **GitFlow > Start new hotfix**

![](../../docs_assets/images/CICD/GenerateHotfix/3.png)

We name the branch starting with `HOTFIX_` (uppercase) followed by a short description that identifies it. We click OK.

![](../../docs_assets/images/CICD/GenerateHotfix/4.png)

We publish the project's databases, set the correct origin, make the fix and download the changes, the same way we would for a new feature.

We review the pending changes and mark the ones that belong to the fix.

![](../../docs_assets/images/CICD/GenerateHotfix/5.png)

We make a commit starting the message with the `HOTFIX:` tag, followed by the description of the fix.

![](../../docs_assets/images/CICD/GenerateHotfix/6.png)

We fetch and check that we have no pending pulls; if we do, we switch to the corresponding branch, pull, and go back to the hotfix branch.

![](../../docs_assets/images/CICD/GenerateHotfix/7.png)

We click **Git Flow > Finish Hotfix**

![](../../docs_assets/images/CICD/GenerateHotfix/8.png)

We push `develop`, switch to `master` and push `master` as well.

![](../../docs_assets/images/CICD/GenerateHotfix/9.png)
