# Trace

```
[value] → []
```

- Action Code: `0x26`
- Stack: `1 → 0`
- SWF version: `4`

## Original documentation

### ActionWaitForFrame2

ActionTrace sends a debugging output string.

| Field               | Type               | Comment                               |
|---------------------|--------------------|---------------------------------------|
| ActionTrace         | ACTIONRECORDHEADER | ActionCode = 0x26                     |

ActionTrace does the following:
1. Pops a value off the stack.
2. In the Test Movie mode of the Adobe Flash editor, ActionTrace appends a value to the output window if
the debugging level is not set to None.
In Adobe Flash Player, nothing happens.
