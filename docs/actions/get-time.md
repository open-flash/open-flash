# GetTime

```
[] → [msSinceStart()]
```

- Action Code: `0x34`
- Stack: `0 → 1`
- SWF version: `4`

## Original documentation

### ActionGetTime

ActionGetTime reports the milliseconds since Adobe Flash Player started.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionGetTime      | ACTIONRECORDHEADER | ActionCode = 0x34 |

ActionGetTime does the following:
1. Calculates as an integer the number of milliseconds since Flash Player was started.
2. Pushes the number to the stack.
