+++
title = "BitLShift"
description = "BitLShift"
template = "page-documentation.html"
+++

- Action Code: `0x63`
- Stack: `1 → 1`
- SWF version: `5`

# Operational AS2

```
@t0 = @pop();
@push(@pop() << @t0);
```

# Adobe documentation

### ActionBitLShift

ActionBitLShift pops the shift count arg and then value off of the stack. The value argument is converted to 32-
bit signed integer and only the least significant 5 bits are used as the shift count. The bits in the value arg are
shifted to the left by the shift count. ActionBitLShift pushes an S32 number to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionBitLShift   | ACTIONRECORDHEADER | ActionCode = 0x63              |

ActionBitLShift does the following:
1. Pops shift count arg, then value off of the stack.
2. Pushes the result to the stack.
