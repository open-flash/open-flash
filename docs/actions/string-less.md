# StringLess

```
[b, a] → [stringLess(b, a)]
```

- Action Code: `0x29`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionStringLess

ActionStringAdd concatenates two strings.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionStringLess   | ACTIONRECORDHEADER | ActionCode = 0x29 |

ActionStringLess does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. If B < A using a byte-by-byte comparison, true is pushed to the stack for SWF 5 and later (SWF 4 pushes
1); otherwise, false is pushed to the stack for SWF 5 and later (SWF 4 pushes 0).
