+++
title = "Add"
description = "Add"
template = "page-documentation.html"
+++

- Action Code: `0x0a`
- Stack: `2 → 1`
- SWF version: `4`

Legacy numeric addition.

In SWF 4, it corresponded to the operator `+`.

In SWF 5, this operator is no longer available, since the semantics of `+` were changed to be the ECMA-262 addition operator. When importing an SWF 4 project in a recent Flash Pro version, the expression `left + right` is rewritten to `Number(left) + Number(right)` according to Adobe's documentation.

# Abstract AS2

```
@t0 = +@pop();
@push(+@pop() + @t0);
```

Note: The unary `+` operators are used to convert the arguments to numbers.

# Adobe documentation

## ActionAdd

ActionAdd adds two numbers and pushes the result back to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionAdd         | ACTIONRECORDHEADER | ActionCode = 0x0A              |

ActionAdd does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. Adds the numbers A and B.
5. Pushes the result, A+B, to the stack.
