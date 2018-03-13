# InstanceOf

```
[object, class] → [object instanceof class]
```

- Action Code: `0x54`
- Stack: `2 → 1`
- SWF version: `6`

## Original documentation

### ActionInstanceOf

ActionInstanceOf implements the ActionScript instanceof() operator. This is a Boolean operator that indicates
whether the left operand (typically an object) is an instance of the class represented by a constructor function
passed as the right operand.

Additionally, with SWF 7 or later, ActionInstanceOf also supports with interfaces. If the right operand
constructor is a reference to an interface object, and the left operand implements this interface,
ActionInstanceOf accurately reports that the left operand is an instance of the right operand.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionInstanceOf   | ACTIONRECORDHEADER | ActionCode = 0x54 |

ActionInstanceOf does the following:
1. Pops constr then obj off of the stack.
2. Determines if obj is an instance of constr.
3. Pushes the return value (a Boolean value) onto the stack.
