+++
title = "Expressions"
description = "ActionScript 2 expressions"
template = "section-documentation.html"
+++

<table>
<thead>
<tr>
  <th>Syntax</th>
  <th>Operators</th>
  <th>Precedence</th>
  <th>Associativity</th>
</tr>
</thead>
<tbody>
<tr>
  <td>SequenceExpression</td>
  <td>

  `,`

  </td>
  <td>0</td>
  <td>Left</td>
</tr>
<tr>
  <td>AssignmentExpression</td>
  <td>

  `=`, `*=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, `|=`

  </td>
  <td>1</td>
  <td>Right</td>
</tr>
<tr>
  <td>ConditionalExpression</td>
  <td>

  `● ? ● : ●`

  </td>
  <td>2</td>
  <td>Right</td>
</tr>
<tr>
  <td>LogicalOrExpression</td>
  <td>

  `||`

  </td>
  <td>3</td>
  <td>Left</td>
</tr>
<tr>
  <td>LogicalAndExpression</td>
  <td>

  `&&`

  </td>
  <td>4</td>
  <td>Left</td>
</tr>
<tr>
  <td>BitwiseOrExpression</td>
  <td>

  `|`

  </td>
  <td>5</td>
  <td>Left</td>
</tr>
<tr>
  <td>BitwiseXorExpression</td>
  <td>

  `^`

  </td>
  <td>6</td>
  <td>Left</td>
</tr>
<tr>
  <td>BitwiseAndExpression</td>
  <td>

  `&`

  </td>
  <td>7</td>
  <td>Left</td>
</tr>
<tr>
  <td>EqualityExpression</td>
  <td>

  `==`, `!=`, `===`, `!==`

  </td>
  <td>8</td>
  <td>Left</td>
</tr>
<tr>
  <td>RelationalExpression</td>
  <td>

  `<`, `>`, `<=`, `>=`, `instanceof`, `in`

  </td>
  <td>9</td>
  <td>Left</td>
</tr>
<tr>
  <td>ShiftExpression</td>
  <td>

  `<<`, `>>`, `>>>`

  </td>
  <td>10</td>
  <td>Left</td>
</tr>
<tr>
  <td>AdditiveExpression</td>
  <td>

  `+`, `-`, `add`

  </td>
  <td>11</td>
  <td>Left</td>
</tr>
<tr>
  <td>MultiplicativeExpression</td>
  <td>

  `*`, `/`, `%`

  </td>
  <td>12</td>
  <td>Left</td>
</tr>
<tr>
  <td>PrefixExpression</td>
  <td>

  `delete`, `void`, `typeof`, `+`, `-`, `~`, `!`, `++●`, `--●`

  </td>
  <td>13</td>
  <td></td>
</tr>
<tr>
  <td>PostfixExpression</td>
  <td>

  `●++`, `●--`

  </td>
  <td>14</td>
  <td></td>
</tr>
<tr>
  <td>MemberExpression</td>
  <td>

  `new ●`, `new ●(●)`, `●(●)`, `●.●`, `●[●]`

  </td>
  <td>15</td>
  <td></td>
</tr>
<tr>
  <td>ParenthesizedExpression</td>
  <td>

  `(●)`

  </td>
  <td>16</td>
  <td></td>
</tr>
<tr>
  <td>PrimaryExpression</td>
  <td></td>
  <td>17</td>
  <td></td>
</tr>
</tbody>
</table>
