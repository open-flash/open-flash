# DefineFunction

```
[] → [function]
```

- Action Code: `0x9b`
- Stack: `0 → 1`
- SWF version: `5`

## Original documentation

### ActionDefineFunction

**Note**: ActionDefineFunction is rarely used as of SWF 7 and later; it was superseded by ActionDefineFunction2.

ActionDefineFunction defines a function with a given name and body size.

<table>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Comment</th>
</tr>
<tr>
  <td>ActionDefineFunction</td>
  <td>ACTIONRECORDHEADER</td>
  <td>ActionCode = 0x9B</td>
</tr>
<tr>
  <td>FunctionName</td>
  <td>STRING</td>
  <td>Function name, empty if anonymous</td>
</tr>
<tr>
  <td>NumParams</td>
  <td>UI16</td>
  <td># of parameters</td>
</tr>
<tr>
  <td>param 1</td>
  <td>STRING</td>
  <td>Parameter name 1</td>
</tr>
<tr>
  <td>param 2</td>
  <td>STRING</td>
  <td>Parameter name 2</td>
</tr>
<tr>
  <td>...</td>
  <td><td>
  <td></td>
</tr>
<tr>
  <td>param N</td>
  <td>STRING</td>
  <td>Parameter name N</td>
</tr>
<tr>
  <td>codeSize</td>
  <td>UI16</td>
  <td># of bytes of code that follow</td>
</tr>
<table>

ActionDefineFunction parses (in order) FunctionName, NumParams, [param1, param2, ..., param N] and then
code size.

ActionDefineFunction does the following:

1. Parses the name of the function (name) from the action tag.
2. Skips the parameters in the tag.
3. Parses the code size from the tag. After the DefineFunction tag, the next codeSize bytes of action data are
   considered to be the body of the function.
4. Gets the code for the function.

ActionDefineFunction can be used in the following ways:

Usage 1 Pushes an anonymous function on the stack that does not persist. This function is a function literal that
is declared in an expression instead of a statement. An anonymous function can be used to define a function,
return its value, and assign it to a variable in one expression, as in the following ActionScript:
```as2
area = (function () {return Math.PI * radius *radius;})(5);
```

Usage 2 Sets a variable with a given FunctionName and a given function definition. This is the more
conventional function definition. For example, in ActionScript:
```as2
function Circle(radius) {
  this.radius = radius;
  this.area = Math.PI * radius * radius;
}
```
