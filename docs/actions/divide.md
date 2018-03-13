# Divide

```
[arg2, arg1] → [arg2 / arg1]
```

- Action Code: `0x0c`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionDivide

ActionDivide divides two numbers and pushes the result back to the stack.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionDivide      | ACTIONRECORDHEADER | ActionCode = 0x0D              |

ActionDivide does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. Divides B by A.
5. Pushes the result, B/A, to the stack.
6. If A is zero, the result NaN, Infinity, or -Infinity is pushed to the stack in SWF 5 and later. In SWF 4, the
   result is the string #ERROR#.
