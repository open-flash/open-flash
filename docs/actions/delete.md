# Delete

```
[object, name] → []
```

- Action Code: `0x3a`
- Stack: `2 → 0`
- SWF version: `5`

## Original documentation

### ActionDelete

ActionDelete deletes a named property from a ScriptObject.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionDelete    | ACTIONRECORDHEADER | ActionCode = 0x3A |

ActionDelete does the following:
1. Pops the name of the property to delete off the stack.
2. Pops the object to delete the property from.
