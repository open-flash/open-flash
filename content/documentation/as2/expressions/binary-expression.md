+++
title = "Binary Expression"
description = "Binary Expression"
template = "page-documentation.html"
+++

# Binary&#8288;Expression

> **<sup>Syntax</sup>**\
> _BinaryExpression_ :\
> &nbsp;&nbsp; _[BitwiseOrExpression]_

# Bitwise&#8288;Or&#8288;Expression

> **<sup>Syntax</sup>**\
> _BitwiseOrExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[BitwiseXorExpression]_\
> &nbsp;&nbsp; | _[BitwiseOrExpression]_ _[Trivia]_? `|` _[Trivia]_? _[BitwiseXorExpression]_

# Bitwise&#8288;Xor&#8288;Expression

> **<sup>Syntax</sup>**\
> _BitwiseXorExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[BitwiseAndExpression]_\
> &nbsp;&nbsp; | _[BitwiseXorExpression]_ _[Trivia]_? `^` _[Trivia]_? _[BitwiseAndExpression]_

# Bitwise&#8288;And&#8288;Expression

> **<sup>Syntax</sup>**\
> _BitwiseAndExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[EqualityExpression]_\
> &nbsp;&nbsp; | _[BitwiseAndExpression]_ _[Trivia]_? `&` _[Trivia]_? _[EqualityExpression]_

# Equality&#8288;Expression

> **<sup>Syntax</sup>**\
> _EqualityExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[RelationalExpression]_\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[EqualityExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _equalityOperator_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _[RelationalExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; }
>
> _equalityOperator_ :\
> &nbsp;&nbsp; `==` | `!=` | `===` | `!==`

# Relational&#8288;Expression

> **<sup>Syntax</sup>**\
> _RelationalExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[ShiftExpression]_\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[RelationalExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _relationalOperator_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _[ShiftExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; }
>
> _relationalOperator_ :\
> &nbsp;&nbsp; `<` | `>` | `<=` | `>=` | `instanceof` | `in`

# Shift&#8288;Expression

> **<sup>Syntax</sup>**\
> _ShiftExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[AdditiveExpression]_\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[ShiftExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _shiftOperator_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _[AdditiveExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; }
>
> _shiftOperator_ :\
> &nbsp;&nbsp; `<<` | `>>` | `>>>`

# Additive&#8288;Expression

> **<sup>Syntax</sup>**\
> _AdditiveExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[MultiplicativeExpression]_\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[AdditiveExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _additiveOperator_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _[MultiplicativeExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; }
>
> _additiveOperator_ :\
> &nbsp;&nbsp; `+` | `-` | `add`

# Multiplicative&#8288;Expression

> **<sup>Syntax</sup>**\
> _MultiplicativeExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[UnaryExpression]_\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[MultiplicativeExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _multiplicativeOperator_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _[UnaryExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; }
>
> _multiplicativeOperator_ :\
> &nbsp;&nbsp; `*` | `/` | `%`


[Trivia]: @/documentation/as2/trivia.md#trivia
[BitwiseExpression]: @/documentation/as2/expressions/binary-expression.md#bitwise-expression
[BitwiseOrExpression]: @/documentation/as2/expressions/binary-expression.md#bitwise-or-expression
[BitwiseXorExpression]: @/documentation/as2/expressions/binary-expression.md#bitwise-xor-expression
[BitwiseAndExpression]: @/documentation/as2/expressions/binary-expression.md#bitwise-and-expression
[EqualityExpression]: @/documentation/as2/expressions/binary-expression.md#equality-expression
[RelationalExpression]: @/documentation/as2/expressions/binary-expression.md#relational-expression
[ShiftExpression]: @/documentation/as2/expressions/binary-expression.md#shift-expression
[AdditiveExpression]: @/documentation/as2/expressions/binary-expression.md#additive-expression
[MultiplicativeExpression]: @/documentation/as2/expressions/binary-expression.md#multiplicative-expression
[UnaryExpression]: @/documentation/as2/expressions/unary-expression.md#unary-expression
