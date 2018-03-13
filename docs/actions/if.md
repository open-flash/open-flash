# If

```
[condition] → []
```

- Action Code: `0x9d`
- Stack: `1 → 0`
- SWF version: `4`

## Original documentation

### ActionIf

ActionIf creates a conditional test and branch.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionIf           | ACTIONRECORDHEADER | ActionCode = 0x9D |
| BranchOffset       | SI16               | Offset            |

ActionIf does the following:
1. Pops Condition, a number, off the stack.
2. Converts Condition to a Boolean value.
3. Tests if Condition is true. If Condition is true, BranchOffset bytes are added to the instruction pointer in
   the execution stream.

**Note**: When playing a SWF 4 file, Condition is not converted to a Boolean value and is instead compared to 0,
not true.

The offset is a signed quantity, enabling branches from –32768 bytes to 32767 bytes. An offset of 0 points to the
action directly after the ActionIf action.
