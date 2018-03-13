# InitArray

```
[...items, itemCount] → [array]
```

- Action Code: `0x42`
- Stack: `1+ → 1`
- SWF version: `5`

## Original documentation

### ActionInitArray

ActionInitArray initializes an array in a ScriptObject and is similar to ActionInitObject. The newly created object is
pushed to the stack. The stack is the only existing reference to the newly created object. A subsequent
SetVariable or SetMember action can store the newly created object in a variable.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionInitArray | ACTIONRECORDHEADER | ActionCode = 0x42 |

ActionInitArray pops elems and then [arg1, arg2, ..., argn] off the stack. ActionInitArray does the following:

1. Gets the number of arguments (or elements) from the stack.
2. If arguments are present, ActionInitArray initializes an array object with the right number of elements.
3. Initializes the array as a ScriptObject.
4. Sets the object type to Array.
5. Populates the array with initial elements by popping the values off of the stack.

For all of the call actions (ActionCallMethod, ActionNewMethod, ActionNewObject, and ActionCallFunction) and
initialization actions (ActionInitObject and ActionInitArray), the arguments of the function are pushed onto the
stack in reverse order, with the rightmost argument first and the leftmost argument last. The arguments are
subsequently popped off in order (first to last).
