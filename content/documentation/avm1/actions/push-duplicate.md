+++
title = "PushDuplicate"
description = "PushDuplicate"
template = "page-documentation.html"
+++

- Action Code: `0x4c`
- Stack: `1 → 2`
- SWF version: `5`

# Abstract AS2

```
@t0 = @pop();
@push(@t0);
@push(@t0);
```

# Adobe documentation

## ActionPushDuplicate

ActionPushDuplicate pushes a duplicate of top of stack (the current return value) to the stack.

| Field               | Type               | Comment                        |
|---------------------|--------------------|--------------------------------|
| ActionPushDuplicate | ACTIONRECORDHEADER | ActionCode = 0x4C              |
