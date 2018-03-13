# StartDrag

```
[constrain, lockcenter, target] → []
[x1, y1, x2, y2, constrain, lockcenter, target] → []
```

- Action Code: `0x27`
- Stack: `3 → 0` or `7 → 0`
- SWF version: `4`

## Original documentation

### ActionStartDrag

ActionStartDrag starts dragging a movie clip.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionStartDrag    | ACTIONRECORDHEADER | ActionCode = 0x27 |

ActionStartDrag does the following:
1. Pops a target off the stack; target identifies the movie clip to be dragged.
2. Pops lockcenter off the stack. If lockcenter evaluates to a nonzero value, the center of the dragged
movie clip is locked to the mouse position. Otherwise, the movie clip moves relative to the mouse
position when the drag started.
3. Pops constrain off the stack.
4. If constrain evaluates to a nonzero value:
   - Pops y2 off the stack.
   - Pops x2 off the stack.
   - Pops y1 off the stack.
   - Pops x1 off the stack.
