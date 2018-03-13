# SetMember

```
[object] → [targetPath]
```

- Action Code: `0x45`
- Stack: `1 → 1`
- SWF version: `5`

## Original documentation

### ActionTargetPath

If the object in the stack is of type MovieClip, the object’s target path is pushed on the stack in dot notation. If
the object is not a MovieClip, the result is undefined rather than the movie clip target path.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionTargetPath  | ACTIONRECORDHEADER | ActionCode = 0x45 |

ActionTargetPath does the following:
1. Pops the object off the stack.
2. Pushes the target path onto the stack.
