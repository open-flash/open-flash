# StringEquals

```
[b, a] → [String(b) === String(a)]
```

- Action Code: `0x13`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionStringEquals

ActionStringEquals tests two strings for equality.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionStringEquals | ACTIONRECORDHEADER | ActionCode = 0x13 |

ActionStringEquals does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Compares A and B as strings.( The comparison is case-sensitive)
4. If the strings are equal, true is pushed to the stack for SWF 5 and later (SWF 4 pushes 1).
5. Otherwise, false is pushed to the stack for SWF 5 and later (SWF 4 pushes 0).
