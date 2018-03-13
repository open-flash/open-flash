# Try

```
[] → []
```

- Action Code: `0x8f`
- Stack: `0 → 0`
- SWF version: `7`

## Original documentation

### ActionTry

ActionTry defines handlers for exceptional conditions, implementing the ActionScript try, catch, and finally
keywords.

<table>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Comment</th>
</tr>
<tr>
  <td>ActionTry</td>
  <td>ACTIONRECORDHEADER</td>
  <td>ActionCode = 0x8F</td>
</tr>
<tr>
  <td>Reserved</td>
  <td>UB[5]</td>
  <td>Always zero</td>
</tr>
<tr>
  <td>CatchInRegisterFlag</td>
  <td>UB[1]</td>
  <td>
    0 - Do not put caught object into register (insteadstore in named variable)<br />
    1 - Put caught object into register (do not store in named variable)
  </td>
</tr>
<tr>
  <td>FinallyBlockFlag</td>
  <td>UB[1]</td>
  <td>
    0 - No finally block<br />
    1 - Has finally block
  </td>
</tr>
<tr>
  <td>CatchBlockFlag</td>
  <td>UB[1]</td>
  <td>
    0 - No catch block<br />
    1 - Has catch block
  </td>
</tr>
<tr>
  <td>TrySize</td>
  <td>UI16</td>
  <td>Length of the try block</td>
</tr>
<tr>
  <td>CatchSize</td>
  <td>UI16</td>
  <td>Length of the catch block</td>
</tr>
<tr>
  <td>FinallySize</td>
  <td>UI16</td>
  <td>Length of the finally block</td>
</tr>
<tr>
  <td>CatchName</td>
  <td>If CatchInRegisterFlag = 0, STRING</td>
  <td>Name of the catch variable</td>
</tr>
<tr>
  <td>CatchRegister</td>
  <td>If CatchInRegisterFlag = 1, UI8</td>
  <td>Register to catch into</td>
</tr>
<tr>
  <td>TryBody</td>
  <td>UI8[TrySize]</td>
  <td>Body of the try block</td>
</tr>
<tr>
  <td>CatchBody</td>
  <td>UI8[CatchSize]</td>
  <td>Body of the catch block, if any</td>
</tr>
<tr>
  <td>FinallyBody</td>
  <td>UI8[FinallySize]</td>
  <td>Body of the finally block, if any</td>
</tr>
<table>

The CatchSize and FinallySize fields always exist, whether or not the CatchBlockFlag or FinallyBlockFlag settings
are 1.
The try, catch, and finally blocks do not use end tags to mark the end of their respective blocks. Instead, the
length of a block is set by the TrySize, CatchSize, and FinallySize values.
