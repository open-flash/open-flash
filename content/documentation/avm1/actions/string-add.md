+++
title = "StringAdd"
description = "StringAdd"
template = "page-documentation.html"
+++

```
[b, a] → [String(b) + String(a)]
```

- Action Code: `0x21`
- Stack: `2 → 1`
- SWF version: `4`

## Adobe documentation

### ActionStringAdd

ActionStringAdd concatenates two strings.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionStringAdd    | ACTIONRECORDHEADER | ActionCode = 0x21 |

ActionStringAdd does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Pushes the concatenation BA to the stack.
