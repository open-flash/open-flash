# Less2

```
[arg2, arg1] → [arg2 < arg1]
```

- Action Code: `0x48`
- Stack: `1 → 1`
- SWF version: `5`

## Original documentation

### ActionAdd2

ActionLess2 calculates whether arg1 is less than arg2 and pushes a Boolean return value to the stack. This action
is similar to ActionLess, but performs the comparison differently according to the data types of the arguments.
The abstract relational comparison algorithm in ECMA-262 Section 11.8.5 is used.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionLess2       | ACTIONRECORDHEADER | ActionCode = 0x48              |

ActionLess2 does the following:
1. Pops arg1 off of the stack.
2. Pops arg2 off of the stack.
3. Compares arg2 < arg1.
4. Pushes the return value (a Boolean value) onto the stack.
