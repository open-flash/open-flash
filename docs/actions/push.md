# Push

```
[] → [value*]
```

- Action Code: `0x96`
- Stack: `0 → n`
- SWF version: `4`

## Original documentation

### ActionPush

ActionPush pushes one or more values to the stack.

<table>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Comment</th>
</tr>
<tr>
  <td>ActionPush</td>
  <td>ACTIONRECORDHEADER</td>
  <td>ActionCode = 0x96</td>
</tr>
<tr>
  <td>Type</td>
  <td>UI8</td>
  <td><p>0 = string literal<br />
  1 = floating-point literal</p><p>
  The following types are available in SWF, 5 and later:<br />
  2 = null<br />
  3 = undefined<br />
  4 = register<br />
  5 = boolean<br />
  6 = double<br />
  7 = integer<br />
  8 = constant 8<br />
  9 = constant 16</p></td>
</tr>
<tr>
  <td>String</td>
  <td>If Type = 0, STRING</td>
  <td>Null-terminated character string</td>
</tr>
<tr>
  <td>Float</td>
  <td>If Type = 1, FLOAT</td>
  <td>32-bit IEEE single-precision little-endian floating-point value</td>
</tr>
<tr>
  <td>RegisterNumber</td>
  <td>If Type = 4, UI8</td>
  <td>Register number</td>
</tr>
<tr>
  <td>Boolean</td>
  <td>If Type = 5, UI8</td>
  <td>Boolean value</td>
</tr>
<tr>
  <td>Double</td>
  <td>If Type = 6, DOUBLE</td>
  <td>64-bit IEEE double-precision little-endian double value</td>
</tr>
<tr>
  <td>Integer</td>
  <td>If Type = 7, UI32</td>
  <td>32-bit little-endian integer</td>
</tr>
<tr>
  <td>Constant8</td>
  <td>If Type = 8, UI8</td>
  <td>Constant pool index (for indexes < 256) (see ActionConstantPool)</td>
</tr>
<tr>
  <td>Constant16</td>
  <td>If Type = 9, UI16</td>
  <td>Constant pool index (for indexes >= 256) (see ActionConstantPool)</td>
</tr>
<table>

ActionPush pushes one or more values onto the stack. The Type field specifies the type of the value to be
pushed.

If Type = 1, the value to be pushed is specified as a 32-bit IEEE single-precision little-endian floating-point value.
PropertyIds are pushed as FLOATs. ActionGetProperty and ActionSetProperty use PropertyIds to access the
properties of named objects.

If Type = 4, the value to be pushed is a register number. Flash Player supports up to 4 registers. With the use of
ActionDefineFunction2, up to 256 registers can be used.

In the first field of ActionPush, the length in ACTIONRECORD defines the total number of Type and value bytes
that follow the ACTIONRECORD itself. More than one set of Type and value fields may follow the first field,
depending on the number of bytes that the length in ACTIONRECORD specifies.
ActionPop
