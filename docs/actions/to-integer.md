# ToInteger

```
[a] → [~~Number(a)]
```

- Action Code: `0x18`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionToInteger

ActionToInteger converts a value to an integer.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionToInteger | ACTIONRECORDHEADER | ActionCode = 0x18 |

ActionToInteger does the following:
1. Pops a value off the stack.
2. Converts the value to a number.
3. Discards any digits after the decimal point, resulting in an integer.
4. Pushes the resulting integer to the stack.
