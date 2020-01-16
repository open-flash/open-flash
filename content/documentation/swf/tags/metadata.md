+++
title = "Metadata"
description = "Metadata"
template = "page-documentation.html"
+++

Adds a metadata string describing the movie.

The metadata strings are not interpreted by the player but can be used by other
tools to store and retrieve information about the movie.
For example, the Flash editing tools uses it to add an RPC XML document
describing the project.

# Type

> **<sup>Type</sup>**\
> _Metadata_ {\
> &nbsp;&nbsp; metadata: _String_\
> }

<details>
<summary>
Implementations
</summary>

- [Rust](https://docs.rs/swf-types/0.10.0/swf_types/tags/struct.Metadata.html)
- [TypeScript](https://github.com/open-flash/swf-types/blob/master/ts/src/lib/tags/metadata.ts)

</details>

# Syntax

- **Code**: `0x004d`

> **<sup>Syntax</sup>**\
> _Metadata_ :\
> &nbsp;&nbsp; _metadata_ [PADDING]
>
> _metadata_ :\
> &nbsp;&nbsp; [NUL_UTF8]

[NUL_UTF8]: @/documentation/swf/primitives.md#nul-utf8
[PADDING]: @/documentation/swf/primitives.md#padding
