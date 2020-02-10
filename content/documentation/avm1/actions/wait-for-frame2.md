+++
title = "WaitForFrame2"
description = "WaitForFrame2"
template = "page-documentation.html"
+++

```
[frame] → []
```

- Action Code: `0x82`
- Stack: `1 → 0`
- SWF version: `4`

## Notes

The original documentation is wrong. It should read "If the frame is _not_
loaded [...]". If the frame is loaded, the following actions are executed.
If the frame is not loaded, the following actions are skipped.

The `SkipCount` uses actions, not bytes. The actions are skipped using syntax
only: it skips the linear sequence of actions following immediately the current
action. The current action is not part of the count.

## Adobe documentation

### ActionWaitForFrame2

ActionWaitForFrame2 waits for a frame to be loaded and is stack based.

| Field               | Type               | Comment                               |
|---------------------|--------------------|---------------------------------------|
| ActionWaitForFrame2 | ACTIONRECORDHEADER | ActionCode = 0x8D; Length is always 1 |
| SkipCount           | UI8                | The number of actions to skip         |

ActionWaitForFrame2 does the following:
1. Pops a frame off the stack.
2. If the frame is loaded, skip the next n actions that follow the current action, where n is indicated by
   SkipCount.

The frame is evaluated in the same way as ActionGotoFrame2.
