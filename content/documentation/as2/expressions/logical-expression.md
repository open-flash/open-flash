+++
title = "Logical Expression"
description = "Logical Expression"
template = "page-documentation.html"
+++

# Logical&#8288;Expression

## Example

TODO

## Syntax

> **<sup>Syntax</sup>**\
> _LogicalExpression_ :\
> &nbsp;&nbsp; _[LogicalOrExpression]_

## Abstract type

TODO

# Logical&#8288;Or&#8288;Expression

## Example

TODO

## Syntax

> **<sup>Syntax</sup>**\
> _LogicalOrExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[LogicalAndExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[LogicalOrExpression]_ _[Trivia]_? `||` _[Trivia]_? _[LogicalAndExpression]_\
> &nbsp;&nbsp; }

## Abstract type

TODO

# Logical&#8288;And&#8288;Expression

## Example

TODO

## Syntax

> **<sup>Syntax</sup>**\
> _LogicalAndExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[BinaryExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[LogicalAndExpression]_ _[Trivia]_? `&&` _[Trivia]_? _[BinaryExpression]_\
> &nbsp;&nbsp; }

## Abstract type

TODO

[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[ConditionalExpression]: @/documentation/as2/expressions/conditional-expression.md
[BinaryExpression]: @/documentation/as2/expressions/binary-expression.md#binary-expression
[LogicalExpression]: @/documentation/as2/expressions/logical-expression.md#logical-expression
[LogicalOrExpression]: @/documentation/as2/expressions/logical-expression.md#logical-or-expression
[LogicalAndExpression]: @/documentation/as2/expressions/logical-expression.md#logical-and-expression
[Pattern]: @/documentation/as2/expressions/pattern.md
[Trivia]: @/documentation/as2/trivia.md#trivia
[avm1-pop]: @/documentation/avm1/actions/pop.md
