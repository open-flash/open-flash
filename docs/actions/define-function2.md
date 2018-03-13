# DefineFunction2

```
[] → [function]
```

- Action Code: `0x8e`
- Stack: `0 → 1`
- SWF version: `7` (`6.65`)

## Original documentation

### ActionDefineFunction2

ActionDefineFunction2 is similar to ActionDefineFunction, with additional features that can help speed up the
execution of function calls by preventing the creation of unused variables in the function’s activation object and
by enabling the replacement of local variables with a variable number of registers. With ActionDefineFunction2,
a function can allocate its own private set of up to 256 registers. Parameters or local variables can be replaced
with a register, which is loaded with the value instead of the value being stored in the function’s activation
object. (The activation object is an implicit local scope that contains named arguments and local variables. For
further description of the activation object, see the ECMA-262 standard.)

ActionDefineFunction2 also includes six flags to instruct Flash Player to preload variables, and three flags to
suppress variables. By setting PreloadParentFlag, PreloadRootFlag, PreloadSuperFlag, PreloadArgumentsFlag,
PreloadThisFlag, or PreloadGlobalFlag, common variables can be preloaded into registers before the function
executes (_parent, _root, super, arguments, this, or _global, respectively). With flags SuppressSuper,
SuppressArguments, and SuppressThis, common variables super, arguments, and this are not created. By using
suppress flags, Flash Player avoids pre- evaluating variables, thus saving time and improving performance.

No suppress flags are provided for _parent, _root, or _global because Flash Player always evaluates these
variables as needed; no time is ever wasted on pre-evaluating these variables.

Specifying both the preload flag and the suppress flag for any variable is not allowed.

The body of the function that ActionDefineFunction2 specifies should use ActionPush and ActionStoreRegister
for local variables that are assigned to registers. ActionGetVariable and ActionSetVariable cannot be used for
variables assigned to registers.

Flash Player 6 release 65 and later supports ActionDefineFunction2.

<table>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Comment</th>
</tr>
<tr>
  <td>ActionDefineFunction2</td>
  <td>ACTIONRECORDHEADER</td>
  <td>ActionCode = 0x8E</td>
</tr>
<tr>
  <td>FunctionName</td>
  <td>STRING</td>
  <td>Name of function, empty if anonymous</td>
</tr>
<tr>
  <td>NumParams</td>
  <td>UI16</td>
  <td># of parameters</td>
</tr>
<tr>
  <td>RegisterCount</td>
  <td>UI8</td>
  <td>
    Number of registers to allocate, (from 0 to 254) up to 255 registers
  </td>
</tr>
<tr>
  <td>PreloadParentFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Don’t preload _parent into register<br />
    1 = Preload _parent into register
  </td>
</tr>
<tr>
  <td>PreloadRootFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Don’t preload _root into register<br />
    1 = Preload _root into register
  </td>
</tr>
<tr>
  <td>SuppressSuperFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Create super variable<br />
    1 = Don't create super variable
  </td>
</tr>
<tr>
  <td>PreloadSuperFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Don’t preload super into register<br />
    1 = Preload super into register
  </td>
</tr>
<tr>
  <td>SuppressArgumentsFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Create arguments variable<br />
    1 = Don't create arguments variable
  </td>
</tr>
<tr>
  <td>PreloadArgumentsFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Don’t preload arguments into register<br />
    1 = Preload arguments into register
  </td>
</tr>
<tr>
  <td>SuppressThisFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Create this variable<br />
    1 = Don't create this variable
  </td>
</tr>
<tr>
  <td>PreloadThisFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Don’t preload this into register<br />
    1 = Preload this into register
  </td>
</tr>
<tr>
  <td>Reserved</td>
  <td>UB[7]</td>
  <td>Always 0</td>
</tr>
<tr>
  <td>PreloadGlobalFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Don’t preload _global into register<br />
    1 = Preload _global into register
  </td>
</tr>
<tr>
  <td>Parameters</td>
  <td>REGISTERPARAM[NumParams]</td>
  <td>See REGISTERPARAM, following</td>
</tr>
<tr>
  <td>codeSize</td>
  <td>UI16</td>
  <td># of bytes of code that follow</td>
</tr>
<table>

REGISTERPARAM is defined as follows:

<table>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Comment</th>
</tr>
<tr>
  <td>Register</td>
  <td>UI8</td>
  <td>
    For each parameter to the function, a register can be specified. If the
    register specified is zero, the parameter is created as a variable named
    ParamName in the activation object, which can be referenced with
    ActionGetVariable and ActionSetVariable. If the register specified is
    nonzero, the parameter is copied into the register, and it can be
    referenced with ActionPush and ActionStoreRegister, and no variable is
    created in the activation object.
  </td>
</tr>
<tr>
  <td>ParamName</td>
  <td>STRING</td>
  <td>Parameter name</td>
</tr>
<table>

The function body following an ActionDefineFunction2 consists of further action codes, just as for
ActionDefineFunction.

Flash Player selects register numbers by first copying each argument into the register specified in the
corresponding REGISTERPARAM record. Next, the preloaded variables are copied into registers starting at 1, and
in the order this, arguments, super, _root, _parent, and _global, skipping any that are not to be preloaded. (The
SWF file must accurately specify which registers will be used by preloaded variables and ensure that no
parameter uses a register number that falls within this range, or else that parameter is overwritten by a
preloaded variable.)

The value of NumParams should equal the number of parameter registers. The value of RegisterCount should
equal NumParams plus the number of preloaded variables and the number of local variable registers desired.

For example, if NumParams is 2, RegisterCount is 6, PreloadThisFlag is 1, and PreloadRootFlag is 1, the
REGISTERPARAM records will probably specify registers 3 and 4. Register 1 will be this, register 2 will be _root,
registers 3 and 4 will be the first and second parameters, and registers 5 and 6 will be for local variables.
