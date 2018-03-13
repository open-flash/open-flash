# NewMethod

```
[...args, argsCount, object, methodName] → [newObject]
```

- Action Code: `0x53`
- Stack: `3+ → 1`
- SWF version: `5`

## Original documentation

### ActionNewMethod

ActionNewMethod invokes a constructor function to create a new object. A new object is constructed and
passed to the constructor function as the value of the this keyword. Arguments can be specified to the
constructor function. The return value from the constructor function is discarded. The newly constructed object
is pushed to the stack, similar to ActionCallMethod and ActionNewObject.

| Field            | Type               | Comment           |
|------------------|--------------------|-------------------|
| ActionNewMethod  | ACTIONRECORDHEADER | ActionCode = 0x53 |

ActionNewMethod does the following:
1. Pops the name of the method from the stack.
2. Pops the ScriptObject from the stack. If the name of the method is blank, the ScriptObject is treated as a
   function object that is invoked as the constructor function. If the method name is not blank, the named
   method of the ScriptObject is invoked.
3. Pops the number of arguments from the stack.
4. Executes the method call.
5. Pushes the newly constructed object to the stack. If no appropriate return value occurs (for instance, the
   function does not have a return statement), the compiler generates a push undefined and pushes it to
   the stack. The undefined return value should be popped off the stack.

For all of the call actions (ActionCallMethod, ActionNewMethod, ActionNewObject, and ActionCallFunction) and
initialization actions (ActionInitObject and ActionInitArray), the arguments of the function are pushed onto the
stack in reverse order, with the rightmost argument first and the leftmost argument last. The arguments are
subsequently popped off in order (first to last).
