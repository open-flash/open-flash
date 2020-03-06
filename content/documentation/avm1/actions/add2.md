+++
title = "Add2"
description = "Add2"
template = "page-documentation.html"
+++

- Action Code: `0x47`
- Stack: `2 → 1`
- SWF version: `5`

ECMA-262 addition operator.

# Abstract AS2

```
@t0 = @pop();
@push(@pop() + @t0);
```

## Adobe documentation

### ActionAdd2

ActionAdd2 is similar to ActionAdd, but performs the addition differently, according to the data types of the
arguments. The addition operator algorithm in ECMA-262 Section 11.6.1 is used. If string concatenation is
applied, the concatenated string is arg2 followed by arg1.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionAdd2        | ACTIONRECORDHEADER | ActionCode = 0x47              |

ActionAdd2 does the following:
1. Pops arg1 off of the stack.
2. Pops arg2 off of the stack.
3. Pushes the result back to the stack.
