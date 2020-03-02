+++
title = "OpTrace"
description = "OpTrace"
template = "page-documentation.html"
+++

Prints a value using [the AVM1 `Trace` action][avm1-trace].

The OpTrace statement ensures that the `Trace` action is used and does not
depend on the current binding of the `trace` variable.

# Example

```
@opTrace("Hello, World!");
@opTrace(42);
var obj = {foo: "bar"};
@opTrace(obj);
```

# Syntax

Compared to a CallExpression on the `trace` variable, the OpTrace syntax has more
constraints: it requires exactly one argument and must be its own statement.

> **<sup>Syntax</sup>**\
> _OpTrace_ :\
> &nbsp;&nbsp; `@trace` _[TRIVIA]_?\
> &nbsp;&nbsp; `(` _[TRIVIA]_?\
> &nbsp;&nbsp; _[Expression]_ _[TRIVIA]_?\
> &nbsp;&nbsp; `)`

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
