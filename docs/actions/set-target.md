# SetTarget

```
[] → []
```

- Action Code: `0x8b`
- Stack: `0 → 0`
- SWF version: `3`

## Original documentation

### ActionSetTarget

ActionSetTarget instructs Flash Player to change the context of subsequent actions, so they apply to a named
object (TargetName) rather than the current file.

For example, the SetTarget action can be used to control the Timeline of a sprite object. The following sequence
of actions sends a sprite called "spinner" to the first frame in its Timeline:

1. SetTarget "spinner"
2. GotoFrame zero
3. SetTarget "" (empty string)
4. End of actions. (Action code = 0)

All actions following SetTarget “spinner” apply to the spinner object until SetTarget “”, which sets the action
context back to the current file. For a complete discussion of target names see DefineSprite.

| Field              | Type               | Comment                 |
|--------------------|--------------------|-------------------------|
| ActionSetTarget    | ACTIONRECORDHEADER | ActionCode = 0x8B       |
| TargetName         | STRING             | Target of action target |

