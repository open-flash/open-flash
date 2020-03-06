+++
title = "Abstract Stack Array"
description = "Abstract Stack Array"
template = "page-documentation.html"
+++

Creates an array by reading entries from the stack.

# Examples

```
@push("foo");
@push(2);
@push(null);

var obj = @stackArray(3);
// [
//   "foo",
//   2,
//   null,
// ]
```

# Syntax

> **<sup>Syntax</sup>**\
> _AbstractStackArray_ :\
> &nbsp;&nbsp; `@stackArray` _[Trivia]_? `(` _[Trivia]_? _[AssignmentExpression]_ _[Trivia]_? `)`

# Abstract type

TODO

```
{
  type: "AbstractStackArray";
  size: Expression;
}
```

[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[Trivia]: @/documentation/as2/trivia.md#trivia
