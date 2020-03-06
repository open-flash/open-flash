+++
title = "Abstract Pop"
description = "Abstract Pop"
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
> _AbstractPop_ :\
> &nbsp;&nbsp; `@pop` _[Trivia]_? `(` _[Trivia]_? `)`

# Abstract type

TODO

```
{
  type: "OpPop";
}
```

[Trivia]: @/documentation/as2/trivia.md#trivia
[avm1-pop]: @/documentation/avm1/actions/pop.md
