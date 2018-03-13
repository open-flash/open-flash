# WaitForFrame

```
[] → []
```

- Action Code: `0x8a`
- Stack: `0 → 0`
- SWF version: `3`

## Original documentation

### ActionWaitForFrame

ActionWaitForFrame instructs Flash Player to wait until the specified frame; otherwise skips the specified
number of actions.

| Field              | Type               | Comment                                          |
|--------------------|--------------------|--------------------------------------------------|
| ActionWaitForFrame | ACTIONRECORDHEADER | ActionCode = 0x8A; Length is always 3            |
| Frame              | UI16               | Frame to wait for                                |
| SkipCount          | UI8                | Number of actions to skip if frame is not loaded |
