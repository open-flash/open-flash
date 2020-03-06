+++
title = "Update Expression"
description = "Update Expression"
template = "page-documentation.html"
+++

# Update&#8288;Expression

Expression applying a unary operator.

> **<sup>Syntax</sup>**\
> _PostfixExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[MemberExpression]_\
> &nbsp;&nbsp; |  _[MemberExpression]_ _[UnilineTrivia]_? _postfixOperator_
>
> _postfixOperator_ :\
> &nbsp;&nbsp; `++` | `--`

[Trivia]: @/documentation/as2/trivia.md#trivia
[UnilineTrivia]: @/documentation/as2/trivia.md#uniline-trivia
[MemberExpression]: @/documentation/as2/expressions/member-expression.md#member-expression
[PostfixExpression]: @/documentation/as2/expressions/postfix-expression.md#postfix-expression
[avm1-pop]: @/documentation/avm1/actions/pop.md
