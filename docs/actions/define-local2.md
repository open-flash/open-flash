# DefineLocal2

```
[name] → []
```

- Action Code: `0x41`
- Stack: `1 → 0`
- SWF version: `5`

## Original documentation

### ActionDefineLocal2

ActionDefineLocal2 defines a local variable without setting its value. If the variable already exists, nothing
happens. The initial value of the local variable is undefined.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionAnd       | ACTIONRECORDHEADER | ActionCode = 0x41 |

ActionDefineLocal2 pops name off the stack.
