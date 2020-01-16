+++
title = "FileAttributes"
description = "FileAttributes"
template = "page-documentation.html"
+++

Sets the global file attributes.

The attribute `useNetwork` corresponds to the "local file system XOR network"
policy: a movie can either access the local file system or the network but not
both. This policy is intended to prevent the exfiltration of local files.

# Type

> **<sup>Type</sup>**\
> _FileAttributes_ {\
> &nbsp;&nbsp; useNetwork: _Boolean_\
> &nbsp;&nbsp; useRelativeUrls: _Boolean_\
> &nbsp;&nbsp; useRelativeUrls: _Boolean_\
> &nbsp;&nbsp; noCrossDomainCaching: _Boolean_\
> &nbsp;&nbsp; useAs3: _Boolean_\
> &nbsp;&nbsp; hasMetadata: _Boolean_\
> &nbsp;&nbsp; useGpu: _Boolean_\
> &nbsp;&nbsp; useDirectBlit: _Boolean_\
> }

<details>
<summary>
Implementations
</summary>

- [Rust](https://docs.rs/swf-types/0.10.0/swf_types/tags/struct.FileAttributes.html)
- [TypeScript](https://github.com/open-flash/swf-types/blob/master/ts/src/lib/tags/file-attributes.ts)

</details>

# Syntax

> **<sup>Syntax</sup>**\
> _FileAttributes_ :\
> &nbsp;&nbsp; _flags_ [PADDING]
>
> _flags_ :\
> &nbsp;&nbsp; [LE_UINT32]

Interpretation of `flags`:

| Mask     | Comment                |
|----------|------------------------|
| `1 << 0` | `useNetwork`           |
| `1 << 1` | `useRelativeUrls`      |
| `1 << 2` | `noCrossDomainCaching` |
| `1 << 3` | `useAs3`               |
| `1 << 4` | `hasMetadata`          |
| `1 << 5` | `useGpu`               |
| `1 << 6` | `useDirectBlit`        |


[LE_UINT32]: @/documentation/swf/primitives.md#le-uint32
[PADDING]: @/documentation/swf/primitives.md#padding
