+++
title = "Abstract Push"
description = "Abstract Push"
template = "page-documentation.html"
+++

Pushes a value on the AVM1 stack.

# Example

```
@push("Hello, World!");
trace(@pop());
```

# Syntax

TODO

# Abstract type

TODO

```
{
  type: "OpTrace";
  value: Expression;
}
```

[Expression]: @/documentation/as2/expression.md
[TRIVIA]: @/documentation/as2/trivia.md
[avm1-trace]: @/documentation/avm1/actions/trace.md
