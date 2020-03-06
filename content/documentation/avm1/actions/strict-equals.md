+++
title = "StrictEquals"
description = "StrictEquals"
template = "page-documentation.html"
+++

- Action Code: `0x66`
- Stack: `2 → 1`
- SWF version: `6`

# Abstract AS2

```
@t0 = @pop();
@push(@pop() === @t0);
```

# Adobe documentation

## ActionStrictEquals

ActionStrictEquals is similar to ActionEquals2, but the two arguments must be of the same type in order to be
considered equal. Implements the ‘===’ operator from the ActionScript language.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionStrictEquals | ACTIONRECORDHEADER | ActionCode = 0x66 |

ActionStrictEquals does the following:
1. Pops arg1 then arg2 off the stack.
2. Pushes the return value, a Boolean value, to the stack.
