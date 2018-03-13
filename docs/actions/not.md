# Not

```
[a] → [!a]
```

- Action Code: `0x12`
- Stack: `1 → 1`
- SWF version: `4`

## Original documentation

### ActionAnd

ActionNot performs a logical NOT of a number.

**Note**: In SWF 5 files, the ActionNot operator converts its argument to a Boolean value, and pushes a result of
type Boolean. In SWF 4 files, the argument and result are numbers.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionNot       | ACTIONRECORDHEADER | ActionCode = 0x12 |
| Result          | Boolean            |                   |

ActionNot does the following:
1. Pops a value off the stack.
2. Converts the value to floating point; non-numeric values evaluate to 0.
3. If the value is zero, true is pushed on the stack for SWF 5 and later (1 is pushed for SWF 4).
4. If the value is nonzero, false is pushed on the stack for SWF 5 and later (0 is pushed for SWF 4).
