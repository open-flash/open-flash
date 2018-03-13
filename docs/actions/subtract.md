# Subtract

```
[arg2, arg1] → [arg2 - arg1]
```

- Action Code: `0x0b`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionAdd

ActionSubtract subtracts two numbers and pushes the result back to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionSubtract    | ACTIONRECORDHEADER | ActionCode = 0x0B              |

ActionSubtract does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. Subtracts A from B.
5. Pushes the result, B-A, to the stack.
