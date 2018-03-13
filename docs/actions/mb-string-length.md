# MbStringLength

```
[a] → [String(a).length]
```

- Action Code: `0x31`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionMBStringLength

ActionMBStringLength computes the length of a string and is multi-byte aware.

| Field                | Type               | Comment           |
|----------------------|--------------------|-------------------|
| ActionMBStringLength | ACTIONRECORDHEADER | ActionCode = 0x31 |

ActionMBStringLength does the following:
1. Pops a string off the stack.
2. Calculates the length of the string in characters and pushes it to the stack.

This is a multi-byte aware version of ActionStringLength. On systems with double-byte support, a double-byte
character is counted as a single character.
