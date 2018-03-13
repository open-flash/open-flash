# BitURShift

```
[arg2, arg1] → [arg2 >>> arg1]
```

- Action Code: `0x65`
- Stack: `1 → 1`
- SWF version: `5`

## Original documentation

### ActionBitURShift

ActionBitURShift pops the value and shift count arguments from the stack. The value argument is converted to
32-bit signed integer and only the least significant 5 bits are used as the shift count.

The bits in the arg value are shifted to the right by the shift count. ActionBitURShift pushes a UI32 number to the
stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionBitURShift  | ACTIONRECORDHEADER | ActionCode = 0x65              |

ActionBitURShift does the following:
1. Pops the shift count from the stack.
2. Pops the value to shift from the stack.
3. Pushes the result to the stack.
