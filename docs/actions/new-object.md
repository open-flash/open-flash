# NewObject

```
[...args, argsCount, objectName] → [newObject]
```

- Action Code: `0x40`
- Stack: `2+ → 1`
- SWF version: `5`

## Original documentation

### ActionNewObject

ActionNewObject invokes a constructor function. A new object is created and passed to the constructor function
as the this keyword. In addition, arguments can optionally be specified to the constructor function on the stack.
The return value of the constructor function is discarded. The newly constructed object is pushed to the stack.
ActionNewObject is similar to ActionCallFunction and ActionNewMethod.

| Field            | Type               | Comment           |
|------------------|--------------------|-------------------|
| ActionNewObject  | ACTIONRECORDHEADER | ActionCode = 0x40 |

ActionNewObject does the following:
1. Pops the object name (STRING) this from the stack.
2. Pops numArgs (int) from the stack.
3. Pops the arguments off the stack.
4. Invokes the named object as a constructor function, passing it the specified arguments and a newly
   constructed object as the this keyword.
5. The return value of the constructor function is discarded.
6. The newly constructed object is pushed to the stack.

For all of the call actions (ActionCallMethod, ActionNewMethod, ActionNewObject, and ActionCallFunction) and
initialization actions (ActionInitObject and ActionInitArray), the arguments of the function are pushed onto the
stack in reverse order, with the rightmost argument first and the leftmost argument last. The arguments are
subsequently popped off in order (first to last).
