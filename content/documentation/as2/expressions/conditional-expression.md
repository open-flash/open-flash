+++
title = "Conditional Expression"
description = "Conditional Expression"
template = "page-documentation.html"
+++

# Example

TODO

# Syntax

> **<sup>Syntax</sup>**\
> _ConditionalExpression_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _[LogicalExpression]_\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[LogicalExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? `?`\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _[AssignmentExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? `:`\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? _[AssignmentExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; }

# Abstract type

TODO

[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[ConditionalExpression]: @/documentation/as2/expressions/conditional-expression.md
[LogicalExpression]: @/documentation/as2/expressions/logical-expression.md#logical-expression
[Trivia]: @/documentation/as2/trivia.md#trivia
[avm1-pop]: @/documentation/avm1/actions/pop.md
