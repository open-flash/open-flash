# SetTarget2

```
[target] → []
```

- Action Code: `0x20`
- Stack: `1 → 0`
- SWF version: `4`

## Original documentation

### ActionSetTarget2

ActionSetTarget2 sets the current context and is stack based.

| Field            | Type               | Comment           |
|------------------|--------------------|-------------------|
| ActionSetTarget2 | ACTIONRECORDHEADER | ActionCode = 0x20 |

ActionSetTarget2 pops the target off the stack and makes it the current active context.
This action behaves exactly like ActionSetTarget but is stack based to enable the target path to be the result of
expression evaluation.
