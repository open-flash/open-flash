# SetVariable

```
[name, value] → []
```

- Action Code: `0x1d`
- Stack: `2 → 0`
- SWF version: `4`

This is equivalent to the expression `void (name = value)` or the statement `name = value;`.

## Original documentation

### ActionSetVariable

ActionSetVariable sets a variable.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionSetVariable | ACTIONRECORDHEADER | ActionCode = 0x1D |

ActionSetVariable does the following:
1. Pops the value off the stack.
2. Pops the name off the stack, a string which names the variable to set.
3. Sets the variable name in the current execution context to value.
A variable in another execution context can be referenced by prefixing the variable name with the target path
and a colon. For example: /A/B:FOO references the FOO variable in the movie clip with a target path of /A/B.
