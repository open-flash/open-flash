# GetUrl2

```
[url, target] → []
```

- Action Code: `0x9a`
- Stack: `2 → 0`
- SWF version: `4`

## Original documentation

### ActionGetURL2

ActionGetURL2 gets a URL and is stack based.

<table>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Comment</th>
</tr>
<tr>
  <td>ActionGetURL2</td>
  <td>ACTIONRECORDHEADER</td>
  <td>
    ActionCode = 0x9A<br />
    Length is always 1
  </td>
</tr>
<tr>
  <td>SendVarsMethod</td>
  <td>UB[2]</td>
  <td>
    0 = None; 1 = GET<br />
    2 = POST
  </td>
</tr>
<tr>
  <td>Reserved</td>
  <td>UB[4]</td>
  <td>Always 0</td>
</tr>
<tr>
  <td>LoadTargetFlag</td>
  <td>UB[1]</td>
  <td>
    0 = Target is a browser window<br />
    1 = Target is a path to a sprite
  </td>
</tr>
<tr>
  <td>LoadVariablesFlag</td>
  <td>UB[1]</td>
  <td>
    0 = No variables to load<br />
    1 = Load variables
  </td>
</tr>
<table>

ActionGetURL2 does the following:
1. Pops target off the stack.
   - A LoadTargetFlag value of 0 indicates that the target is a window. The target can be an empty string
     to indicate the current window.
   - A LoadTargetFlag value of 1 indicates that the target is a path to a sprite. The target path can be in
     slash or dot syntax.
2. Pops a URL off the stack; the URL specifies the URL to be retrieved.
3. SendVarsMethod specifies the method to use for the HTTP request.
   - A SendVarsMethod value of 0 indicates that this is not a form request, so the movie clip’s variables
     should not be encoded and submitted.
   - A SendVarsMethod value of 1 specifies a HTTP GET request.
   - A SendVarsMethod value of 2 specifies a HTTP POST request.
4. If the SendVarsMethod value is 1 (GET) or 2 (POST), the variables in the current movie clip are submitted
   to the URL by using the standard x-www-form-urlencoded encoding and the HTTP request method
   specified by method.

If the LoadVariablesFlag is set, the server is expected to respond with a MIME type of application/x-www-form-
urlencoded and a body in the format var1=value1&var2=value2&...&varx=valuex. This response is used to
populate ActionScript variables rather than display a document. The variables populated can be in a timeline (if
LoadTargetFlag is 0) or in the specified sprite (if LoadTargetFlag is 1).

If the LoadTargetFlag is specified without the LoadVariablesFlag, the server is expected to respond with a MIME
type of application/x-shockwave-flash and a body that consists of a SWF file. This response is used to load a
subfile into the specified sprite rather than to display an HTML document.
