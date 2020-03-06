+++
title = "SetMember"
description = "SetMember"
template = "page-documentation.html"
+++

- Action Code: `0x1d`
- Stack: `3 → 0`
- SWF version: `5`

**Note**: There is a typo in the step 2 of Adobe's documentation: "object name" should be
"property name".

# Abstract AS2

```
@t0 = @pop();
@t1 = @pop();
@pop()[@t1] = @t0;
```

## Adobe documentation

### ActionSetMember

ActionSetMember sets a property of an object. If the property does not already exist, it is created. Any existing
value in the property is overwritten.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionSetMember   | ACTIONRECORDHEADER | ActionCode = 0x45 |

ActionSetMember does the following:
1. Pops the new value off the stack.
2. Pops the object name off the stack.
3. Pops the object off of the stack.
