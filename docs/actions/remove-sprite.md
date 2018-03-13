# CloneSprite

```
[target] → []
```

- Action Code: `0x25`
- Stack: `1 → 0`
- SWF version: `4`

## Original documentation

### ActionRemoveSprite

ActionRemoveSprite removes a clone sprite.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionRemoveSprite | ACTIONRECORDHEADER | ActionCode = 0x25 |

ActionRemoveSprite does the following:
1. Pops a target off the stack.
2. Removes the clone movie clip that the target path target identifies.
