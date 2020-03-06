+++
title = "Prefix Expression"
description = "Prefix Expression"
template = "page-documentation.html"
+++

# Prefix&#8288;Expression

Expression applying a prefix unary operator.

> **<sup>Syntax</sup>**\
> _PrefixExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[PostfixExpression]_\
> &nbsp;&nbsp; | _prefixOperator_ _[Trivia]_? _[PrefixExpression]_
>
> _prefixOperator_ :\
> &nbsp;&nbsp; `delete` | `void` | `typeof` | `+` | `-` | `~` | `!` | `++` | `--`

<!--
# Unary&#8288;Plus&#8288;Expression

Converts its argument to a number.

## Example

```
trace(+3);
trace(+true);
trace(+"");
trace(+"3");
trace(+null);
```

## Syntax

> **<sup>Syntax</sup>**\
> _UnaryPlusExpression_ :\
> &nbsp;&nbsp; `+` _[Trivia]_? _UnaryExpression_

## Abstract type

TODO

```
{
  type: "UnaryExpression";
  operator: "+";
  argument: Expression;
}
```
-->

[Trivia]: @/documentation/as2/trivia.md#trivia
[PrefixExpression]: @/documentation/as2/expressions/prefix-expression.md#prefix-expression
[PostfixExpression]: @/documentation/as2/expressions/postfix-expression.md#postfix-expression
[avm1-pop]: @/documentation/avm1/actions/pop.md
