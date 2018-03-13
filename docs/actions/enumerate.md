# Enumerate

```
[objectName] → [null, ...propertieNames]
```

- Action Code: `0x46`
- Stack: `1 → 1+`
- SWF version: `5`

## Original documentation

### ActionDelete2

ActionEnumerate obtains the names of all “slots” in use in an ActionScript object—that is, for an object obj, all
names X that could be retrieved with the syntax obj.X. ActionEnumerate is used to implement the for..in
statement in ActionScript.

**Note**: Certain special slot names are omitted; for a list of these, search for the term DontEnum in the ECMA-262
standard.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionEnumerate | ACTIONRECORDHEADER | ActionCode = 0x46 |

ActionEnumerate does the following:

1. Pops the name of the object variable (which can include slash-path or dot-path syntax) off of the stack.
2. Pushes a null value onto the stack to indicate the end of the slot names.
3. Pushes each slot name (a string) onto the stack.

The order in which slot names are pushed is undefined.
