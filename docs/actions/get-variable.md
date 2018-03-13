# GetVariable

```
[name] → [eval(name)]
```

- Action Code: `0x1c`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionGetVariable

ActionGetVariable gets a variable’s value.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionGetVariable | ACTIONRECORDHEADER | ActionCode = 0x1C |

ActionGetVariable does the following:
1. Pops a name off the stack, a string that names is the variable to get.
2. Pushes the value of the variable to the stack.
A variable in another execution context can be referenced by prefixing the variable name with the target path
and a colon. For example: /A/B:FOO references variable FOO in a movie clip with a target path of /A/B.
