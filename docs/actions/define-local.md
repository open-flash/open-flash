# DefineLocal

```
[name, value] → []
```

- Action Code: `0x3c`
- Stack: `2 → 0`
- SWF version: `5`

## Original documentation

### ActionDefineLocal

ActionDefineLocal defines a local variable and sets its value. If the variable already exists, the value is set to the
newly specified value.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionAnd       | ACTIONRECORDHEADER | ActionCode = 0x3C |

ActionDefineLocal does the following:
1. Pops a value off the stack.
2. Pops a name off the stack.
