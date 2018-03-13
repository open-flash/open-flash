# CharToAscii

```
[a] → [charToAscii(a)]
```

- Action Code: `0x32`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionCharToAscii

ActionCharToAscii converts character code to ASCII.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionCharToAscii | ACTIONRECORDHEADER | ActionCode = 0x32 |

ActionCharToAscii does the following:
1. Pops a value off the stack.
2. Converts the first character of the value to a numeric ASCII character code.
3. Pushes the resulting character code to the stack.
