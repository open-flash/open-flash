# Delete

```
[name] → []
```

- Action Code: `0x3b`
- Stack: `1 → 0`
- SWF version: `5`

## Original documentation

### ActionDelete2

ActionDelete2 deletes a named property. Flash Player first looks for the property in the current scope, and if the
property cannot be found, continues to search in the encompassing scopes.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionDelete2   | ACTIONRECORDHEADER | ActionCode = 0x3B |

ActionDelete2 pops the name of the property to delete off the stack.
