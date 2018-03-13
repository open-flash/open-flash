# GotoFrame2

```
[] → []
```

- Action Code: `0x9f`
- Stack: `0 → 0`
- SWF version: `4`

## Original documentation

### ActionGotoFrame2

ActionGotoFrame2 goes to a frame and is stack based.

<table>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Comment</th>
</tr>
<tr>
  <td>ActionGotoFrame2</td>
  <td>ACTIONRECORDHEADER</td>
  <td>ActionCode = 0x9F</td>
</tr>
<tr>
  <td>Reserved</td>
  <td>UB[6]</td>
  <td>Always 0</td>
</tr>
<tr>
  <td>SceneBiasFlag</td>
  <td>UB[1]</td>
  <td>Scene bias flag</td>
</tr>
<tr>
  <td>Play flag</td>
  <td>UB[1]</td>
  <td>
    0 = Go to frame and stop<br />
    1 = Go to frame and play
  </td>
</tr>
<tr>
  <td>SceneBias</td>
  <td>If SceneBiasFlag = 1, UI16</td>
  <td> Number to be added to frame determined by stack argument</td>
</tr>
<table>

ActionGotoFrame2 does the following:
1. Pops a frame off the stack.
   - If the frame is a number, n, the next frame of the movie to be displayed is the nth frame in the
     current movie clip.
   - If the frame is a string, frame is treated as a frame label. If the specified label exists in the current
     movie clip, the labeled frame will become the current frame. Otherwise, the action is ignored.
2. Either a frame or a number can be prefixed by a target path, for example, /MovieClip:3 or
   /MovieClip:FrameLabel.
3. If the Play flag is set, the action goes to the specified frame and begins playing the enclosing movie clip.
   Otherwise, the action goes to the specified frame and stops.
