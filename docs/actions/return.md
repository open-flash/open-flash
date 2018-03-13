# Return

```
[value] → []
```

- Action Code: `0x3e`
- Stack: `1 → 0`
- SWF version: `5`

## Original documentation

### ActionReturn

ActionReturn forces the return item to be pushed off the stack and returned. If a return is not appropriate, the
return item is discarded.

| Field               | Type               | Comment                        |
|---------------------|--------------------|--------------------------------|
| ActionReturn        | ACTIONRECORDHEADER | ActionCode = 0x3E              |

ActionReturn pops a value off the stack.
