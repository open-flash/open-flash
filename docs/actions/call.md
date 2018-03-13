# Call

```
[frame] → []
```

- Action Code: `0x9e`
- Stack: `1 → 0`
- SWF version: `4`

## Original documentation

### ActionCall

ActionCall calls a subroutine.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionCall         | ACTIONRECORDHEADER | ActionCode = 0x9E |

ActionCall does the following:
1. Pops a value off the stack. This value should be either a string that matches a frame label, or a number
   that indicates a frame number. The value can be prefixed by a target string that identifies the movie clip
   that contains the frame being called.
2. If the frame is successfully located, the actions in the target frame are executed. After the actions in the
   target frame are executed, execution resumes at the instruction after the ActionCall instruction.
3. If the frame cannot be found, nothing happens.
