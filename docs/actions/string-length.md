# StringLength

```
[a] → [String(a).length]
```

- Action Code: `0x13`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionStringLength

ActionStringLength computes the length of a string.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionStringLength | ACTIONRECORDHEADER | ActionCode = 0x14 |

ActionStringLength does the following:
1. Pops a string off the stack.
2. Calculates the length of the string and pushes it to the stack.
