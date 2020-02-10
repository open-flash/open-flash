+++
title = "zlib"
description = "Open Flash - zlib"
template = "page-documentation.html"
+++

The `zlib` data compressed format is one of the main compression algorithms used by SWF files.

It is defined in [RFC 1950](https://www.rfc-editor.org/info/rfc1950).

# Implementations

- [zlib](https://www.zlib.net/) is the canonical C implementation.
- [pako](https://nodeca.github.io/pako/) is a JS port of the C implementation. Used by Open Flash for TypeScript.
- [inflate](https://docs.rs/inflate/0.4.5/inflate/) is a Rust crate with zlib support. Used by Open Flash for Rust.
