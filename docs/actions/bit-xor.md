# BitXor

```
[arg2, arg1] → [arg2 ^ arg1]
```

- Action Code: `0x62`
- Stack: `1 → 1`
- SWF version: `5`

## Original documentation

### ActionBitXor

ActionBitXor pops two numbers off of the stack, performs a bitwise XOR, and pushes an S32 number to the
stack.

The arguments are converted to 32-bit unsigned integers before performing the bitwise operation. The result is
a SIGNED 32-bit integer.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionBitXor      | ACTIONRECORDHEADER | ActionCode = 0x62              |

ActionBitXor does the following:
1. Pops arg1 and arg2 off of the stack.
2. Pushes the result back to the stack.
