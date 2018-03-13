# ToString

```
[object] → ["" + object]
```

- Action Code: `0x4b`
- Stack: `1 → 1`
- SWF version: `5`

## Original documentation

### ActionToString

ActionToString converts the object on the top of the stack into a String, and pushes the string back to the stack.
For the Object type, the ActionScript toString() method is invoked to convert the object to the String type for
ActionToString.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionToString    | ACTIONRECORDHEADER | ActionCode = 0x4B              |

ActionToString does the following:
1. Pops the object off of the stack.
2. Pushes the string on to the stack.
