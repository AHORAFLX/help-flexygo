# Flexygo Docs

## Installing required components

First of all you'll need to install [python](https://www.python.org/downloads/) for it to work, as mkdocs is a python library.

Once you've got python installed you will need to install mkdocs material and its dependencies with this command:

```shell
py -m pip install mkdocs mkdocs-material mkdocs-static-i18n mkdocs-glightbox pymdown-extensions
```

With this you've got everything needed for it to run.

## Debugging

To test changes you may use the following command, which will loadthe docs in localhost.

```shell
py -m mkdocs serve
```

## Publishing 

We have made it easier to publish with custom commands, but for them to work you'll first need mike installed, if you don't have it just use the following command:

```shell
py -m pip install mike
```

### Realising a new version

With mike installed you'll just need to run the following command, replacing the x by the new version number (always an int like 8, 9, 10 because we will only update to avoid overloading help with versions).

This command will automatically create a commit in your git gh-pages with the new version added to the docs folder. After checking the commit changes you'll need to upload so teamcity gets the new version.

```shell
npm run docs:publish -- x
```

### Updating a version

With mike installed you'll just need to run the following command, replacing the x by the new version number (always an int like 8, 9, 10 because we will only update to avoid overloading help with versions).

This command will automatically create a commit in your git gh-pages with the version selected getting the changes that has been done made like an html to the version docs folder. After checking the commit changes you'll need to upload so teamcity gets the version updated.

```shell
npm run docs:update -- x
```