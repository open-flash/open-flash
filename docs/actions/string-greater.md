# Greater

```
[arg2, arg1] → [stringLess(arg2, arg1)]
```

- Action Code: `0x68`
- Stack: `2 → 1`
- SWF version: `6`

## Original documentation

### ActionStringGreater

ActionStringGreater is the exact opposite of ActionStringLess. This action code was added for the same reasons
as ActionGreater.

| Field               | Type               | Comment           |
|---------------------|--------------------|-------------------|
| ActionStringGreater | ACTIONRECORDHEADER | ActionCode = 0x68 |

ActionStringGreater does the following:
1. Pops arg1 and then arg2 off of the stack.
2. Compares if arg2 > arg1, using byte-by-byte comparison.
3. Pushes the return value, a Boolean value, onto the stack.
