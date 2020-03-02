+++
title = "OpPop"
description = "OpPop"
template = "page-documentation.html"
+++

Pops the value at the top of the AVM1 stack.

Corresponds to [the AVM1 `Pop` action][avm1-pop].

# Example

```
function main() {
  @push("Hello, World");
  trace(@pop()); // `Hello, World!`
  trace(@pop()); // `undefined`
}

main();
```

# Syntax

> **<sup>Syntax</sup>**\
> _OpPop_ :\
> &nbsp;&nbsp; `@opPop` _[TRIVIA]_? `(` _[TRIVIA]_? `)`

# Abstract type

TODO

```
{
  type: "OpPop";
}
```

[TRIVIA]: @/documentation/as2/trivia.md
[avm1-pop]: @/documentation/avm1/actions/pop.md
