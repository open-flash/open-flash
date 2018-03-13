# GotoFrame

```
[] → []
```

- Action Code: `0x81`
- Stack: `0 → 0`
- SWF version: `3`

## Original documentation

### ActionGotoFrame

ActionGotoFrame instructs Flash Player to go to the specified frame in the current file.

| Field           | Type               | Comment                               |
|-----------------|--------------------|---------------------------------------|
| ActionGotoFrame | ACTIONRECORDHEADER | ActionCode = 0x81; Length is always 2 |
| Frame           | UI16               | Frame index                           |
