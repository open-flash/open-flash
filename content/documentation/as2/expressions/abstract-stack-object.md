+++
title = "Abstract Stack Object"
description = "Abstract Stack Object"
template = "page-documentation.html"
+++

Creates an object by reading entries from the stack.

# Examples

```
@push("foo");
@push(1);
@push("bar");
@push(3);

var obj = @stackObject(2);
// {
//   "foo": 1,
//   "bar": 3
// }
```

# Syntax

> **<sup>Syntax</sup>**\
> _AbstractStackObject_ :\
> &nbsp;&nbsp; `@stackObject` _[Trivia]_? `(` _[Trivia]_? _[AssignmentExpression]_ _[Trivia]_? `)`

# Abstract type

TODO

```
{
  type: "AbstractStackObject";
  size: Expression;
}
```

[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[Trivia]: @/documentation/as2/trivia.md#trivia
