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

## Publishing new version

To deploy a new version you need mike installed, if you don't have it use the follwoing command:

```shell
py -m pip install mike
```

Once you've got mike, you'll just need to run this two commands, the first line will add the new version to the docs, and the second one will just set it as the default one so when the user enters to the website it shows this version.

Version will always be a big version to avoid getingg a version for every month, so for example the version 8 will always be 8.x and not 8.1, 8.2, 8.3...

```shell
py -m mike deploy x.0 latest
py -m mike set-default x.0
```

## Updating version

If instead of creating a new version you just need to update one, it will work with executing this command.

```shell
py -m mike deploy --update x.0
```