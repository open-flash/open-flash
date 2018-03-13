# Increment

```
[value] → [Number(value) + 1]
```

- Action Code: `0x50`
- Stack: `1 → 1`
- SWF version: `5`

## Original documentation

### ActionIncrement

ActionIncrement pops a value from the stack, converts it to number type, increments it by 1, and pushes it back
to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionIncrement   | ACTIONRECORDHEADER | ActionCode = 0x50              |

ActionIncrement does the following:
1. Pops the number off of the stack.
2. Pushes the result on to the stack.
