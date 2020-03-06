+++
title = "Increment"
description = "Increment"
template = "page-documentation.html"
+++

- Action Code: `0x50`
- Stack: `1 → 1`
- SWF version: `5`

# Abstract AS2

```
@push(+@pop() + 1);
```

Note: The unary `+` operator is used to convert the argument to a number.

# Adobe documentation

## ActionIncrement

ActionIncrement pops a value from the stack, converts it to number type, increments it by 1, and pushes it back
to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionIncrement   | ACTIONRECORDHEADER | ActionCode = 0x50              |

ActionIncrement does the following:
1. Pops the number off of the stack.
2. Pushes the result on to the stack.
