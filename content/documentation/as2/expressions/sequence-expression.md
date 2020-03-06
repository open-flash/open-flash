+++
title = "Sequence Expression"
description = "Sequence Expression"
template = "page-documentation.html"
+++

# Example

```
var a = 1;
var b = 1, 2;
trace(a);
trace(b);
```

# Syntax

> **<sup>Syntax</sup>**\
> _SequenceExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[AssignmentExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[SequenceExpression]_ _[Trivia]_? `,` _[Trivia]_? _[AssignmentExpression]_\
> &nbsp;&nbsp; }

# Abstract type

TODO

[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[SequenceExpression]: @/documentation/as2/expressions/sequence-expression.md
[Trivia]: @/documentation/as2/trivia.md#trivia
[avm1-pop]: @/documentation/avm1/actions/pop.md
