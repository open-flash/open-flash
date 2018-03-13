# CastOp

```
[constructor, scriptObject] → [scriptObject instanceof constructor ? scriptObject : null]
```

- Action Code: `0x2b`
- Stack: `2 → 1`
- SWF version: `7`

## Original documentation

### ActionCastOp

ActionCastOp implements the ActionScript cast operator, which allows the casting from one data type to
another. ActionCastOp pops an object off the stack and attempts to convert the object to an instance of the
class or to the interface represented by the constructor function.


| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionCastOp       | ACTIONRECORDHEADER | ActionCode = 0x2B |

ActionCastOp does the following:
1. Pops the ScriptObject to cast off the stack.
2. Pops the constructor function off the stack.
3. Determines if object is an instance of constructor (doing the same comparison as ActionInstanceOf).
4. If the object is an instance of constructor, the popped ScriptObject is pushed onto the stack.
If the object is not an instance of constructor, a null value is pushed onto the stack.
