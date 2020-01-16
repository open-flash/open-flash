+++
title = "SetBackgroundColor"
description = "SetBackgroundColor"
template = "page-documentation.html"
+++

Sets the opaque background of the player.

The default background is white. When encountering this flag for the first time,
the background color is updated. Only the first occurrence is applied, if there
are multiple `SetBackgroundColor` tags the subsequent ones are ignored.

Open Questions:
- It seems likely that this tag is only applied if it is in the tags of the root
movie itself and not any sprite or sub movie clip. Despite being likely, there
are no tests yet for this behavior.

# Type

```
SetBackgroundColor {
  color: SRgb8;
}
```

<details>
<summary>
Implementations
</summary>

- [Rust](https://docs.rs/swf-types/0.10.0/swf_types/tags/struct.SetBackgroundColor.html)
- [TypeScript](https://github.com/open-flash/swf-types/blob/master/ts/src/lib/tags/set-background-color.ts)

</details>

# Syntax

- **Code**: `0x0009`

> **<sup>Syntax</sup>**\
> _SetBackgroundColor_ :\
> &nbsp;&nbsp; _color_ [PADDING][PADDING]
>
> _color_ :\
> &nbsp;&nbsp; [SRgb8]

[SRgb8]: @/documentation/swf/base.md#s-rgb8
[PADDING]: @/documentation/swf/primitives.md#padding
