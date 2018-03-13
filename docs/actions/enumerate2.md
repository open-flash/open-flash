# Enumerate2

```
[object] → [null, ...propertieNames]
```

- Action Code: `0x46`
- Stack: `1 → 1+`
- SWF version: `6`

## Original documentation

### ActionEnumerate2

ActionEnumerate2 is similar to ActionEnumerate, but uses a stack argument of object type rather than using a
string to specify its name.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionEnumerate2   | ACTIONRECORDHEADER | ActionCode = 0x55 |

ActionEnumerate2 does the following:
1. Pops obj off of the stack.
2. Pushes a null value onto the stack to indicate the end of the slot names.
3. Pushes each slot name (a string) from obj onto the stack.

**Note**: The order in which slot names are pushed is undefined.
