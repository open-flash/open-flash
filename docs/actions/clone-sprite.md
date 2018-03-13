# CloneSprite

```
[source, target, depth] → []
```

- Action Code: `0x24`
- Stack: `3 → 0`
- SWF version: `4`

## Original documentation

### ActionCloneSprite

ActionCloneSprite clones a sprite.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionCloneSprite | ACTIONRECORDHEADER | ActionCode = 0x24 |

ActionCloneSprite does the following:
1. Pops a depth off the stack.
2. Pops a target off the stack.
3. Pops a source off the stack.
4. Duplicates the movie clip source, giving the new instance the name target, at z-order depth
