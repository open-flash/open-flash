# Equals

```
[arg2, arg1] → [equals(arg2, arg1)]
```

- Action Code: `0x0e`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionEquals

ActionEquals tests two numbers for equality.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionEquals    | ACTIONRECORDHEADER | ActionCode = 0x0E |

ActionEquals does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. Compares the numbers for equality.
5. If the numbers are equal, true is pushed to the stack for SWF 5 and later.
6. For SWF 4, 1 is pushed to the stack.
7. Otherwise, false is pushed to the stack for SWF 5 and later. (For SWF 4, 0 is pushed to the stack.)
