# MbCharToAscii

```
[a] → [String(a).charCodeAt(0)]
```

- Action Code: `0x36`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionMbCharToAscii

ActionMBCharToAscii converts character code to ASCII and is multi-byte aware.

| Field               | Type               | Comment           |
|---------------------|--------------------|-------------------|
| ActionMbCharToAscii | ACTIONRECORDHEADER | ActionCode = 0x36 |

ActionMBCharToAscii does the following:
1. Pops a value off the stack.
2. Converts the first character of the value to a numeric character code.
If the first character of the value is a double-byte character, a 16-bit value is constructed with the first
byte as the high-order byte and the second byte as the low-order byte.
3. Pushes the resulting character code to the stack.
