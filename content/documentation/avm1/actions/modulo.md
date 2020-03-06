+++
title = "Modulo"
description = "Modulo"
template = "page-documentation.html"
+++

- Action Code: `0x3f`
- Stack: `1 → 1`
- SWF version: `5`

**Note**: A better name would be `remainder` instead of `modulo`, due to sign-sensibility.

# Abstract AS2

```
@t0 = @pop();
@push(@pop() % @t0);
```

## Adobe documentation

### ActionModulo

ActionModulo calculates x modulo y. If y is 0, then NaN (0x7FC00000) is pushed to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionModulo      | ACTIONRECORDHEADER | ActionCode = 0x3F              |

ActionModulo does the following:
1. Pops x then y off of the stack.
2. Pushes the value x % y on to the stack.
