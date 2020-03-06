+++
title = "Trivia"
description = "Trivia"
template = "page-documentation.html"
+++

Trivia represents white space and comments.

There 2 kinds of white space:
- Space separator: inline white space
- Line terminator: newline sequence or end of file

There are 3 kinds of comments:
- TrailingComment: Comment starting with `//`.
- MultiLineComment: Comment between `/*` and `*/` **containing a line terminator**.
- InlineComment: Comment between `/*` and `*/` **without a line terminator**.

# Trivia

In most cases, syntax rules are not sensible to the presence or not of _LineTerminator_ in their white space and comments. The `Trivia` node represents trivia for these cases.

> **<sup>Syntax</sup>**\
> _Trivia_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[MultilineTrivia]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[UnilineTrivia]_\
> &nbsp;&nbsp; }

# Multiline&#8288;Trivia

The `MultilineTrivia` represents trivia containing a _LineTerminator_.

> **<sup>Syntax</sup>**\
> _MultiLineTrivia_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _LineTerminator_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _TrailingComment_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _MultilineComment_\
> &nbsp;&nbsp; }

# Uniline&#8288;Trivia

The `UnilineTrivia` node represents trivia that can't contain a _LineTerminator_. This is used for some syntax rules such as the one for `return` statements.

> **<sup>Syntax</sup>**\
> _UnilineTrivia_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _SpaceSeparator_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _InlineComment_\
> &nbsp;&nbsp; }

# Space Separator

Space separators represents uniline white space.

TODO: Include all legal space separators.

| Code Point | Name                 |
|------------|----------------------|
| **U+0009** | CHARACTER TABULATION |
| **U+0020** | SPACE                |

> **<sup>Syntax</sup>**\
> _LineTerminator_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; **U+0009**\
> &nbsp;&nbsp; &nbsp;&nbsp; | **U+0020**\
> &nbsp;&nbsp; }

# Line Terminator

A line terminator represents a newline sequence or _the end of the file_.

Trivia syntax node are classified based on if they contain a line terminator or not: as uniline trivia or multiline trivia.

TODO: Include all legal line terminators.

| Code Point | Name                 |
|------------|----------------------|
| **U+000A** | LINE FEED            |

> **<sup>Syntax</sup>**\
> _LineTerminator_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; **U+000A**\
> &nbsp;&nbsp; &nbsp;&nbsp; | **END_OF_FILE**\
> &nbsp;&nbsp; }

# Comments

## Trailing&#8288;Comment

Trailing comments represent comments after `//`.

> **<sup>Syntax</sup>**\
> _TrailingComment_ :\
> &nbsp;&nbsp; `//` _trailingCommentChar_* _LineTerminator_
>
> _trailingCommentChar_ :\
> &nbsp;&nbsp; any Unicode code point but not _LineTerminator_

## Multiline&#8288;Comment

Multiline comments represent comments between `/*` and `*/`. They _must_ contain at least one line terminator. They can't contain `*/`. `InlineComment` corresponds to the version without line terminators.

> **<sup>Syntax</sup>**\
> _MultilineComment_ :\
> &nbsp;&nbsp; `/*` _MultilineCommentChars_? _LineTerminator_ _MultilineCommentChars_? `*/`
>
> _MultilineCommentChars_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _MultilineCommentCharNoAsterisk_ _MultilineCommentChars_?\
> &nbsp;&nbsp; &nbsp;&nbsp; | `*` _PostAsteriskMultilineCommentChars_\
> &nbsp;&nbsp; }
>
> _PostAsteriskMultilineCommentChars_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _MultilineCommentCharNoAsteriskNoSlash_ _MultilineCommentChars_?\
> &nbsp;&nbsp; &nbsp;&nbsp; | `*` _PostAsteriskMultilineCommentChars_\
> &nbsp;&nbsp; }
>
> _MultilineCommentCharNoAsterisk_ :\
> &nbsp;&nbsp; any Unicode code point but not `*`
>
> _MultilineCommentCharNoAsteriskNoSlash_ :\
> &nbsp;&nbsp; any Unicode code point but not one of `*` or `/`

## Inline&#8288;Comment

Inline comments represent comments between `/*` and `*/`. They can't contain `*/` or a line terminator. `MultilineComment` corresponds to the version with line terminators.

> **<sup>Syntax</sup>**\
> _InlineComment_ :\
> &nbsp;&nbsp; `/*` _InlineCommentChars_? `*/`
>
> _InlineCommentChars_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _InlineCommentCharNoAsterisk_ _InlineCommentChars_?\
> &nbsp;&nbsp; &nbsp;&nbsp; | `*` _PostAsteriskInlineCommentChars_\
> &nbsp;&nbsp; }
>
> _PostAsteriskInlineCommentChars_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _InlineCommentCharsNoAsteriskNoSlash_ _InlineCommentChars_?\
> &nbsp;&nbsp; &nbsp;&nbsp; | `*` _PostAsteriskInlineCommentChars_\
> &nbsp;&nbsp; }
>
> _InlineCommentCharNoAsterisk_ :\
> &nbsp;&nbsp; any Unicode code point but not `*` or _LineTerminator_
>
> _InlineCommentCharsNoAsteriskNoSlash_ :\
> &nbsp;&nbsp; any Unicode code point but not one of `*`, `/` or _LineTerminator_

[MultilineTrivia]: @/documentation/as2/trivia.md#multiline-trivia
[UnilineTrivia]: @/documentation/as2/trivia.md#uniline-trivia
