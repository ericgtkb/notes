---
layout: default_math
title: Python Packaging
nav_order: 1
grand_parent: Technology
parent: Python
---

# Python Packaging
As of 2020 ([PEP 621](https://peps.python.org/pep-0621/)), the standard way
of packging a python project is by using `pyproject.toml` file. The use of
`setup.py` or `setup.cfg` for building a python project is deprecated.


Below is a minimum `pyproject.toml` file for packaging a python project


```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "my_project"
```


The `[build-system]` section is required, and there are many build-backends
available. In the `requires` key, we should specify all the dependencies
required at **build time**. If we are simply running `pip install` in
non-editable mode these build dependencies will be install in an isolated
build environment.  For the `build-backend` field we specify module to be
called to build the project.

