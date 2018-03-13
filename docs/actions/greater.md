# Greater

```
[arg2, arg1] → [arg2 > arg1]
```

- Action Code: `0x67`
- Stack: `2 → 1`
- SWF version: `6`

## Original documentation

### ActionGreater

ActionGreater is the exact opposite of ActionLess2. Originally there was no ActionGreater, because it can be
emulated by reversing the order of argument pushing, then performing an ActionLess followed by an ActionNot.
However, this argument reversal resulted in a reversal of the usual order of evaluation of arguments, which in a
few cases led to surprises.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionGreater      | ACTIONRECORDHEADER | ActionCode = 0x67 |

ActionGreater does the following:
1. Pops arg1 and then arg2 off of the stack.
2. Compares if arg2 > arg1.
3. Pushes the return value, a Boolean value, onto the stack.
