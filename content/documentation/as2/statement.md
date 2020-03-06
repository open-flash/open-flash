+++
title = "Statement"
description = "Statement"
template = "page-documentation.html"
+++

> **<sup>Syntax</sup>**\
> _Statement_ :\
> &nbsp;&nbsp; TODO

> **<sup>Syntax</sup>**\
> _StatementList_ :\
> &nbsp;&nbsp; _statement_ { _statementSeparator_ _StatementList_ }?
>
> _statementSeparator_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Trivia]_? `;`\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[MultilineTrivia]_\
> &nbsp;&nbsp; }

[Expression]: @/documentation/as2/expression.md
[StringLiteral]: @/documentation/as2/literals.md#string-literal

[Trivia]: @/documentation/as2/trivia.md#trivia
[MultilineTrivia]: @/documentation/as2/trivia.md#multiline-trivia
[UnilineTrivia]: @/documentation/as2/trivia.md#uniline-trivia
