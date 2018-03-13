# Throw

```
[error] → []
```

- Action Code: `0x2a`
- Stack: `1 → 0`
- SWF version: `7`

## Original documentation

### ActionThrow

ActionThrow implements the ActionScript throw keyword. ActionThrow is used to signal, or throw, an
exceptional condition, which is handled by the exception handlers declared with ActionTry.
If any code within the try block throws an object, control passes to the catch block, if one exists, then to the
finally block, if one exists. The finally block always executes, regardless of whether an error was thrown.
If an exceptional condition occurs within a function and the function does not include a catch handler, the
function and any caller functions are exited until a catch block is found (executing all finally handlers at all
levels).
Any ActionScript data type can be thrown, though typically usage is to throw objects.

| Field              | Type               | Comment           |
|--------------------|--------------------|-------------------|
| ActionThrow        | ACTIONRECORDHEADER | ActionCode = 0x2A |

ActionThrow pops the value to be thrown off the stack.
