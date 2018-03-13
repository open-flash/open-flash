# InitObject

```
[...(value, name), itemCount] → [object]
```

- Action Code: `0x43`
- Stack: `2k + 1 → 1`
- SWF version: `5`

## Original documentation

### ActionInitObject

ActionInitObject initializes an object and is similar to ActionInitArray. The newly created object is pushed to the
stack. The stack is the only existing reference to the newly created object. A subsequent SetVariable or
SetMember action can store the newly created object in a variable.

| Field            | Type               | Comment           |
|------------------|--------------------|-------------------|
| ActionInitObject | ACTIONRECORDHEADER | ActionCode = 0x43 |

ActionInitObject pops elems off of the stack. Pops [value1, name1, ..., valueN, nameN] off the stack.

ActionInitObject does the following:
1. Pops the number of initial properties from the stack.
2. Initializes the object as a ScriptObject.
3. Sets the object type to Object.
4. Pops each initial property off the stack.
   For each initial property, the value of the property is popped off the stack, then the name of the
   property is popped off the stack. The name of the property is converted to a string. The value can be of
   any type.

For all of the call actions (ActionCallMethod, ActionNewMethod, ActionNewObject, and ActionCallFunction) and
initialization actions (ActionInitObject and ActionInitArray), the arguments of the function are pushed onto the
stack in reverse order, with the rightmost argument first and the leftmost argument last. The arguments are
subsequently popped off in order (first to last).
