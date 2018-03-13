# RandomNumber

```
[max] → [randomInt(0, max)]
```

- Action Code: `0x30`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionRandomNumber

ActionRandomNumber calculates a random number.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionRandomNumber | ACTIONRECORDHEADER | ActionCode = 0x30 |

ActionRandomNumber does the following:
1. Pops the maximum off the stack.
2. Calculates a random number as an integer in the range 0...(maximum-1).
3. Pushes the random number to the stack.
