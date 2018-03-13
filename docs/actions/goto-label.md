# GotoLabel

```
[] → []
```

- Action Code: `0x8c`
- Stack: `0 → 0`
- SWF version: `3`

## Original documentation

### ActionGoToLabel

ActionGoToLabel instructs Flash Player to go to the frame associated with the specified label. You can attach a
label to a frame with the FrameLabel tag.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionGoToLabel | ACTIONRECORDHEADER | ActionCode = 0x8C |
| Label           | STRING             | Frame label       |
