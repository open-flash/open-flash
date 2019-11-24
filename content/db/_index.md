+++
title = "Database"
description = "Open Flash Database"
+++

Open Flash maintains a database with a wide range of test samples available at
the [open-flash-db GitHub organization][gh-ofldb]: standalone movies, AVM1
bytecode, shapes, etc.

These tests are freely available for Open Source projects. The recommended
method to add these tests to a project is to use Git submodules.

## Movies

Standalone SWF files movies.

## AVM1

Standalone AVM1 byte code with expected output, parsed control flow graph,
textual assembly.

These samples do not depend on SWF bindings, only the core language runtime.
They can be used to test AVM implementations.

## Tags

Binary files containing SWF tags and their corresponding parsed data as JSON.

## Various

Contains miscellaneous data structures from the SWF grammar. For each element,
it provides binary data, the corresponding parsed data and an expected
normalized binary output (when different from the input). Can be used to check
parsers and emitters.

## Registry

The registry is a list of SWF files publicly available on the internet.

[gh-ofldb]: https://github.com/open-flash-db
