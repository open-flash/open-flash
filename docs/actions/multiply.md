# Multiply

```
[arg2, arg1] → [arg2 * arg1]
```

- Action Code: `0x0c`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionMultiply

ActionMultiply multiplies two numbers and pushes the result back to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionMultiply    | ACTIONRECORDHEADER | ActionCode = 0x0C              |

ActionMultiply does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. Multiplies A times B.
5. Pushes the result, A*B, to the stack.
