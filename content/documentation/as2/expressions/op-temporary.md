+++
title = "OpTemporary"
description = "OpTemporary"
template = "page-documentation.html"
+++

Reads a temporary value.

TODO: Link descrption of temporary values

# Example

```
@t0 = "foo";
trace(@t0);
@t25 = 42;
trace(@t25);
```

# Syntax

> **<sup>Syntax</sup>**\
> _OpTemporary_ :\
> &nbsp;&nbsp; `@t` _DECIMAL_+

# Abstract type

TODO

```
{
  type: "OpTemporary";
  id: u32;
}
```

[avm1-pop]: @/documentation/avm1/actions/pop.md
