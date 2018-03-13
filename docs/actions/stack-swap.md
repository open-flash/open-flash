# StackSwap

```
[item2, item1] → [item1, item2]
```

- Action Code: `0x4d`
- Stack: `2 → 2`
- SWF version: `5`

## Original documentation

### ActionStackSwap

ActionStackSwap swaps the top two ScriptAtoms on the stack.

| Field               | Type               | Comment                        |
|---------------------|--------------------|--------------------------------|
| ActionStackSwap     | ACTIONRECORDHEADER | ActionCode = 0x4D              |

ActionStackSwap does the following:
1. Pops Item1 and then Item2 off of the stack.
2. Pushes Item1 and then Item2 back to the stack.
