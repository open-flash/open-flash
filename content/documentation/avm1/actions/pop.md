+++
title = "Pop"
description = "Pop"
template = "page-documentation.html"
+++

- Action Code: `0x17`
- Stack: `1 → 0`
- SWF version: `4`

# Abstract AS2

```
void @pop();
```

# Adobe documentation

## ActionPop

ActionPop pops a value from the stack and discards it.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionPop          | ACTIONRECORDHEADER | ActionCode = 0x17 |

ActionPop pops a value off the stack and discards the value.
