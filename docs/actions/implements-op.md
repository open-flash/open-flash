# ImplementsOp

```
[...interfaces, count, class] → []
```

- Action Code: `0x2c`
- Stack: `2+ → 0`
- SWF version: `7`

Does something like `class.__implementedInterfaces = interfaces`.

## Original documentation

### ActionImplementsOp

ActionImplementsOp implements the ActionScript implements keyword. The ActionImplementsOp action
specifies the interfaces that a class implements, for use by ActionCastOp. ActionImplementsOp can also specify
the interfaces that an interface implements, as interfaces can extend other interfaces.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionImplementsOp | ACTIONRECORDHEADER | ActionCode = 0x2C |

ActionImplementsOp does the following:
1. Pops the constructor function off the stack. The constructor function represents the class that will
implement the interfaces. The constructor function must have a prototype property.
2. Pops the count of implemented interfaces off the stack.
3. For each interface count, pops a constructor function off of the stack. The constructor function
represents an interface.
4. Sets the constructor function’s list of interfaces to the array collected in the previous step, and sets the
count of interfaces to the count popped in step 2.
