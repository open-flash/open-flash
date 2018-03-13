# Jump

```
[] → []
```

- Action Code: `0x99`
- Stack: `0 → 0`
- SWF version: `4`

## Original documentation

### ActionJump

ActionJump creates an unconditional branch.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionJump         | ACTIONRECORDHEADER | ActionCode = 0x99 |
| BranchOffset       | SI16               | Offset            |

ActionJump adds BranchOffset bytes to the instruction pointer in the execution stream. The offset is a signed
quantity, enabling branches from –32,768 bytes to 32,767 bytes. An offset of 0 points to the action directly after
the ActionJump action.
