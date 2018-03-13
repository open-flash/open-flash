# Or

```
[b, a] → [b || a]
```

- Action Code: `0x11`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionOr

ActionOr performs a logical OR of two numbers.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionOr        | ACTIONRECORDHEADER | ActionCode = 0x11 |

ActionOr does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. If either of the numbers is nonzero, true is pushed to the stack for SWF 5 and later (1 is pushed for SWF
4); otherwise, false is pushed to the stack for SWF 5 and later (0 is pushed for SWF 4).
