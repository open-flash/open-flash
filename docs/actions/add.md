# Add

```
[arg2, arg1] → [add(arg2, arg1)]
```

- Action Code: `0x0a`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionAdd

ActionAdd adds two numbers and pushes the result back to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionAdd         | ACTIONRECORDHEADER | ActionCode = 0x0A              |

ActionAdd does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. Adds the numbers A and B.
5. Pushes the result, A+B, to the stack.
