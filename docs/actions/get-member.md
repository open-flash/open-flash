# GetMember

```
[object, name] → [object[name]]
```

- Action Code: `0x4e`
- Stack: `2 → 1`
- SWF version: `5`

## Original documentation

### ActionGetMember

ActionGetMember retrieves a named property from an object, and pushes the value of the property onto the
stack.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionGetMember | ACTIONRECORDHEADER | ActionCode = 0x4E |

ActionGetMember does the following:

1. Pops the name of the member function.
2. Pops the ScriptObject object off of the stack.
3. Pushes the value of the property on to the stack.

For example, assume obj is an object, and it is assigned a property, foo, as follows:
```as2
obj.foo = 3;
```

Then, ActionGetMember with object set to obj and name set to foo pushes 3 onto the stack. If the specified
property does not exist, undefined is pushed to the stack.

The object parameter cannot actually be of type Object. If the object parameter is a primitive type such as
number, Boolean, or string, it is converted automatically to a temporary wrapper object of class Number,
Boolean, or String. Thus, methods of wrapper objects can be invoked on values of primitive types. For example,
the following correctly prints 5:

```as2
var x = "Hello";
trace (x.length);
```

In this case, the variable, x, contains the primitive string, "Hello". When x.length is retrieved, a temporary
wrapper object for x is created by using the String type, which has a length property.
