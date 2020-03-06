+++
title = "And"
description = "And"
template = "page-documentation.html"
+++

- Action Code: `0x10`
- Stack: `2 → 1`
- SWF version: `4`

Low-level logical and operator.

The short-circuiting semantics of the ActionScript operator `&&` mus be handled during compilation.

# Abstract AS2

```
@t0 = @pop();
@push(!!(@pop() && @t0));
```

# Notes

- There is a typo in the official documentation. "ActionAdd" (after the table) should be "ActionAnd".

# Adobe documentation

## ActionAnd

ActionAnd performs a logical AND of two numbers.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionAnd       | ACTIONRECORDHEADER | ActionCode = 0x10 |

ActionAdd does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. If both numbers are nonzero, true is pushed to the stack for SWF 5 and later (1 is pushed for SWF 4);
otherwise, false is pushed to the stack for SWF 5 and later (0 is pushed for SWF 4).
