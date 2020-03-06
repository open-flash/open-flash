+++
title = "Abstract Temporary"
description = "Abstract Temporary"
template = "page-documentation.html"
+++

Reads a temporary value.

TODO: Link description of temporary values

# Example

```
@t0 = "foo";
trace(@t0);
@t25 = 42;
trace(@t25);
```

# Syntax

> **<sup>Syntax</sup>**\
> _AbstractTemporary_ :\
> &nbsp;&nbsp; `@t` _DECIMAL_+

# Abstract type

TODO

```
{
  type: "AbstractTemporary";
  id: u32;
}
```

[avm1-pop]: @/documentation/avm1/actions/pop.md
