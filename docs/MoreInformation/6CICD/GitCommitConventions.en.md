# How do I develop in GIT?

![](../../docs_assets/images/CICD/GitCommitConventions/1.png)

## Commit prefixes for the release notes

The subject of every commit starts with a prefix. With it, the commit's text is automatically included in the release notes of the version (in the application, the help and the NuGet package):

* **FT:** marks a new feature or an improvement users can see
* **FIX:** marks the fix of an identified issue; describe the symptom users saw
* **HL:** marks one of the highlights of the version (only a few per version). Besides the note, it opens the summary and the news article of the version and generates a help page
* **DEP:** marks features that become deprecated or discontinued, and what to use instead
* **INT:** internal work (refactors, build, tests, tooling, internal documentation). It **never** appears in the release notes

The notes are written only from the subject and body of the commit, never from the code: describe what changes **for the user**, not which classes were touched.

### Rules the repository checks

The `commit-msg` hook of the Flexygo repository (`.githooks/commit-msg`) rejects the commit if it breaks them:

* The subject **starts with one of the prefixes** above (merges and reverts are exempt).
* The subject is **longer than 50 characters** (better keep it at most about 72).
* No line contains `...` as filler.
* An `HL:` commit **adds at least one image** (`.png`, `.jpg`, `.jpeg` or `.gif`) under `release-notes/images/`.

### HL: commits

The body of an `HL:` follows a fixed structure, because the highlighted note, the news article and the help page are written from it (and from its screenshot):

```
HL: Update Flexygo from a guided wizard with automatic rollback

What: A wizard updates the frontend, the backend and the database in one go, checks the
requirements and the locks first, and rolls the update back when it does not finish.
Where: Admin > Maintenance > Versions, button "Update".
How:
1. Open the Versions page and choose the version to install.
2. Review the requirements and the locks the wizard detects.
3. Start the update and follow its progress; the log can be filtered.
Settings: Repository and credentials of the packages in the updater settings.
Permissions: Administrators only.
Help: Maintenance and updates
```

* `What`, `Where` and `How` are mandatory; `Settings`, `Permissions` and `Help` only when they apply.
* The screenshot is **mandatory** and goes in the same commit, under `release-notes/images/`, with a descriptive kebab-case name (`update-wizard.png`).
