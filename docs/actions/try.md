# Try

```
[] → []
```

- Action Code: `0x8f`
- Stack: `0 → 0`
- SWF version: `7`

## Notes

This action defines "soft" regions. You can freely jump or fall-through at the
end of each block and continue execution. The `finally` block or actions beyond
the `Try` actions are not executed automatically: you have to jump or
fall-through there manually. (TODO: I don't remember exactly how it behaves
around `return`).
When you first enter the `try` region, the throw checks are enabled. They are
disabled once you leave the `try` region. They are not re-enabled if you jump
out and then back in the `try` region. If an exception is thrown and the checks
are enabled, then the recovery is triggered, moving the instruction pointer
to the `catch` region (or `finally` region if there is no `catch`).
If there is no `catch` or `finally`, the recovery does not happen: the error
bubbles up, the instruction pointer is not moved after the `Try` action.

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
