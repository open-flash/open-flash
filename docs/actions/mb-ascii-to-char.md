# MbAsciiToChar

```
[a] → [String.fromCharCode(Number(a))]
```

- Action Code: `0x37`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionMbAsciiToChar

ActionMBAsciiToChar converts ASCII to character code and is multi-byte aware.

| Field               | Type               | Comment           |
|---------------------|--------------------|-------------------|
| ActionMbAsciiToChar | ACTIONRECORDHEADER | ActionCode = 0x37 |

ActionMBAsciiToChar does the following:
1. Pops a value off the stack.
2. Converts the value from a number to the corresponding character. If the character is a 16-bit value (>=
256), a double-byte character is constructed with the first byte containing the high-order byte, and the
second byte containing the low-order byte.
3. Pushes the resulting character to the stack.
