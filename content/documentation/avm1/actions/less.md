+++
title = "Less"
description = "Less"
template = "page-documentation.html"
+++

- Action Code: `0x0f`
- Stack: `2 → 1`
- SWF version: `4`

Legacy numeric less-than operator.

# Abstract AS2

```
@t0 = +@pop();
@push(+@pop() < @t0);
```

Note: The unary `+` operators are used to convert the arguments to numbers.

## Adobe documentation

### ActionLess

ActionLess tests if a number is less than another number

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionLess      | ACTIONRECORDHEADER | ActionCode = 0x0F |

ActionLess does the following:
1. Pops value A off the stack.
2. Pops value B off the stack.
3. Converts A and B to floating-point; non-numeric values evaluate to 0.
4. If B < A, true is pushed to the stack for SWF 5 and later (1 is pushed for SWF 4);
   otherwise, false is pushed to the stack for SWF 5 and later (0 is pushed for SWF 4).
