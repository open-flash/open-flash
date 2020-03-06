+++
title = "StringAdd"
description = "StringAdd"
template = "page-documentation.html"
+++

- Action Code: `0x21`
- Stack: `2 → 1`
- SWF version: `4`

Implements the legacy string concatenation.

In SWF 4, it corresponded to the operator `&`.

In SWF 5, it corresponds to the operator `add`, since the semantics of `&` were changed to be the ECMA Script bitwise and operator.

The arguments are converted to strings using the same function as the `Trace` action. In particular, `undefined` is converted to the empty string `""`.

# Abstract AS2

```
@t0 = @pop();
@push(@pop() add @t0);
```

# Adobe documentation

## ActionStringAdd

ActionStringAdd concatenates two strings.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionStringAdd    | ACTIONRECORDHEADER | ActionCode = 0x21 |

ActionStringAdd does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Pushes the concatenation BA to the stack.
