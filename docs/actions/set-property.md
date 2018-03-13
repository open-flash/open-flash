# SetProperty

```
[target, index, target] → []
```

- Action Code: `0x23`
- Stack: `3 → 0`
- SWF version: `4`

## Original documentation

### ActionSetProperty

ActionSetProperty sets a file property.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionSetProperty | ACTIONRECORDHEADER | ActionCode = 0x23 |

ActionSetProperty does the following:
1. Pops a value off the stack.
2. Pops an index off the stack.
3. Pops a target off the stack.
4. Sets the property enumerated as index in the movie clip with the target path target to the value value.
