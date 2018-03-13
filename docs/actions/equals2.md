# Equals2

```
[arg2, arg1] → [arg2 == arg1]
```

- Action Code: `0x49`
- Stack: `2 → 1`
- SWF version: `5`

## Original documentation

### ActionEquals2

ActionEquals2 is similar to ActionEquals, but ActionEquals2 knows about types. The equality comparison
algorithm from ECMA-262 Section 11.9.3 is applied.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionEquals2   | ACTIONRECORDHEADER | ActionCode = 0x49 |

ActionEquals2 does the following:
1. Pops arg1 off the stack.
2. Pops arg2 off the stack.
3. Pushes the return value to the stack.
