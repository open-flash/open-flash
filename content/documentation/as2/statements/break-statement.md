+++
title = "Break Statement"
description = "Break Statement"
template = "page-documentation.html"
+++

Jumps out of a loop.

# Example

```
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
}
```

```
outer:
for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
    if (x === 5 && y === 5) {
      break outer;
    }
  }
}
```

# Syntax

> **<sup>Syntax</sup>**\
> _BreakStatement_ :\
> &nbsp;&nbsp; `break`  { _[UnilineTrivia]_ _LabelIdentifier_ }?

# Abstract type

TODO

```
{
  type: "BreakStatement";
  label: LabelIdentifier | null;
}
```

[Trivia]: @/documentation/as2/trivia.md#trivia
[MultilineTrivia]: @/documentation/as2/trivia.md#multiline-trivia
[UnilineTrivia]: @/documentation/as2/trivia.md#uniline-trivia
