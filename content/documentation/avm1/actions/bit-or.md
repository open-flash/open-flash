+++
title = "BitOr"
description = "BitOr"
template = "page-documentation.html"
+++

- Action Code: `0x61`
- Stack: `1 → 1`
- SWF version: `5`

# Operational AS2

```
@t0 = @pop();
@push(@pop() | @t0);
```

# Adobe documentation

### ActionBitOr

ActionBitOr pops two numbers off of the stack, performs a bitwise OR, and pushes an S32 number to the stack.
The arguments are converted to 32-bit unsigned integers before performing the bitwise operation. The result is
a SIGNED 32-bit integer.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionBitOr       | ACTIONRECORDHEADER | ActionCode = 0x61              |

ActionBitOr does the following:
1. Pops arg1 then arg2 off of the stack.
2. Pushes the result to the stack.
