+++
title = "Abstract Stack Call"
description = "Abstract Stack Call"
template = "page-documentation.html"
+++

Calls a function by reading the arguments from the stack.

# Examples

```
function hello(name) {
  trace("Hello, " + name + "!);
}

@push("OpenFlash");
@stackCall(trace, 1);
```

```
function makeArray() {
  var array = [];
  for (var i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  return array;
}

var argCount;
if (Math.random() < 0.5) {
  @push("foo");
  @push("bar");
  argCount = 2;
} else {
  @push("baz");
  argCount = 1;
}

var strings = @stackCall(makeArray, argCount);
```

# Syntax

> **<sup>Syntax</sup>**\
> _AbstractStackCall_ :\
> &nbsp;&nbsp; `@stackCall` _[TRIVIA]_?\
> &nbsp;&nbsp; `(` _[TRIVIA]_?\
> &nbsp;&nbsp; _[AssignmentExpression]_ _[TRIVIA]_?\
> &nbsp;&nbsp; `,` _[TRIVIA]_?\
> &nbsp;&nbsp; _[AssignmentExpression]_ _[TRIVIA]_?\
> &nbsp;&nbsp; `)`

# Abstract type

TODO

```
{
  type: "OpStackCall";
  callee: Expression;
  argumentCount: Expression;
}
```

[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[Trivia]: @/documentation/as2/trivia.md#trivia
