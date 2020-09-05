+++
title = "Assignment Expression"
description = "Assignment Expression"
template = "page-documentation.html"
+++

# Example

TODO

# Syntax

> **<sup>Syntax</sup>**\
> _AssignmentExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[ConditionalExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[Pattern]_ _[Trivia]_? _assignmentOperator_ _[Trivia]_? _[AssignmentExpression]_\
> &nbsp;&nbsp; }
>
> _assignmentOperator_ :\
> &nbsp;&nbsp; `=` | `*=` | `/=` | `%=` | `+=` | `-=` | `<<=` | `>>=` | `>>>=` | `&=` | `^=` | `|=`

# Abstract type

TODO

[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[ConditionalExpression]: @/documentation/as2/expressions/conditional-expression.md
[Pattern]: @/documentation/as2/pattern.md
[Trivia]: @/documentation/as2/trivia.md#trivia
[avm1-pop]: @/documentation/avm1/actions/pop.md
