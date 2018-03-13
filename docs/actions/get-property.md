# GetProperty

```
[target, index] → [target[getPropertyname(index)]]
```

- Action Code: `0x22`
- Stack: `2 → 1`
- SWF version: `4`

## Original documentation

### ActionGetProperty

ActionGetProperty gets a file property.

| Field             | Type               | Comment           |
|-------------------|--------------------|-------------------|
| ActionGetProperty | ACTIONRECORDHEADER | ActionCode = 0x22 |

ActionGetProperty does the following:
1. Pops index off the stack.
2. Pops target off the stack.
3. Retrieves the value of the property enumerated as index from the movie clip with target path target and
pushes the value to the stack.
The following table lists property index values. The _quality, _xmouse and _ymouse properties are available in
SWF 5 and later.


| Property          | Value              |
|-------------------|--------------------|
| _X                | 0                  |
| _Y                | 1                  |
| _xscale           | 2                  |
| _yscale           | 3                  |
| _currentframe     | 4                  |
| _totalframes      | 5                  |
| _alpha            | 6                  |
| _visible          | 7                  |
| _width            | 8                  |
| _height           | 9                  |
| _rotation         | 10                 |
| _target           | 11                 |
| _framesloaded     | 12                 |
| _name             | 13                 |
| _droptarget       | 14                 |
| _url              | 15                 |
| _highquality      | 16                 |
| _focusrect        | 17                 |
| _soundbuftime     | 18                 |
| _quality          | 19                 |
| _xmouse           | 20                 |
| _ymouse           | 21                 |
