# WaitForFrame

```
[] → []
```

- Action Code: `0x8a`
- Stack: `0 → 0`
- SWF version: `3`

## Notes

If the frame is loaded, the following actions are executed.
If the frame is not loaded, the following actions are skipped.

The `SkipCount` uses actions, not bytes. The actions are skipped using syntax
only: it skips the linear sequence of actions following immediately the current
action. The current action is not part of the count.

## Original documentation

### ActionWaitForFrame

ActionWaitForFrame instructs Flash Player to wait until the specified frame; otherwise skips the specified
number of actions.

| Field              | Type               | Comment                                          |
|--------------------|--------------------|--------------------------------------------------|
| ActionWaitForFrame | ACTIONRECORDHEADER | ActionCode = 0x8A; Length is always 3            |
| Frame              | UI16               | Frame to wait for                                |
| SkipCount          | UI8                | Number of actions to skip if frame is not loaded |
