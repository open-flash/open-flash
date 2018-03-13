# AsciiToChar

```
[a] → [asciiToChar(a)]
```

- Action Code: `0x33`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionAsciiToChar

ActionAsciiToChar converts a value to an ASCII character code.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionAsciiToChar | ACTIONRECORDHEADER | ActionCode = 0x33 |

ActionAsciiToChar does the following:
1. Pops a value off the stack.
2. Converts the value from a number to the corresponding ASCII character.
3. Pushes the resulting character to the stack.
