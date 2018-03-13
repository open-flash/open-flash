# BitAnd

```
[arg2, arg1] → [arg2 & arg1]
```

- Action Code: `0x60`
- Stack: `1 → 1`
- SWF version: `5`

**Note**: There is an issue with the formatting of the table in the official documentation.

## Original documentation

### ActionBitAnd

ActionBitAnd pops two numbers off of the stack, performs a bitwise AND, and pushes an S32 number to the
stack. The arguments are converted to 32-bit unsigned integers before performing the bitwise operation. The
result is a SIGNED 32-bit integer.

| Field             | Type                                 | Comment |
|-------------------|--------------------------------------|---------|
| ActionBitAnd      | ACTIONRECORDHEADER ActionCode = 0x60 |         |

ActionBitAnd does the following:
1. Pops arg1 then arg2 off of the stack.
2. Pushes the result to the stack.
