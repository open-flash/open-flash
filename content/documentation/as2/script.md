+++
title = "Script"
description = "Script"
template = "page-documentation.html"
+++

The `Script` node represents the root of an ActionScript 2 file.

# Script

> **<sup>Syntax</sup>**\
> _Script_ :\
> &nbsp;&nbsp; _[TRIVIA]_? _ScriptItemList_ _[TRIVIA]_?
>
> _ScriptItemList_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _ScriptItem_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _ScriptItem_ _ScriptItemList_\
> &nbsp;&nbsp; }
>
> _ScriptItem_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[Directive]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[Statement]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[Declaration]_\
> &nbsp;&nbsp; }


# Directive

> **<sup>Syntax</sup>**\
> _Directive_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[IncludeDirective]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[InitDirective]_\
> &nbsp;&nbsp; }

# Include&#8288;Directive

Compile-time textual inclusion of a file content.

> **<sup>Syntax</sup>**\
> _IncludeDirective_ :\
> &nbsp;&nbsp; `#include` _[TRIVIA]_ _[StringLiteral]_ _[TRIVIA]_? `\n`

## Example

```
#include "lib.as"
```

## Adobe documentation

- [#include Directive](/mirrors/as2-language-reference/directives.html##include())

# Init&#8288;Directive

Block of initialization actions.

> **<sup>Syntax</sup>**\
> _InitDirective_ :\
> &nbsp;&nbsp; `#initclip` _[TRIVIA]_ _[StringLiteral]_ _[TRIVIA]_? `\n`\
> &nbsp;&nbsp; `#endinitclip` _[TRIVIA]_ _[StringLiteral]_ _[TRIVIA]_? `\n`

## Adobe documentation

- [#initclip Directive](/mirrors/as2-language-reference/directives.html##initclip())
- [#endinitclip Directive](/mirrors/as2-language-reference/directives.html##endinitclip())


[StringLiteral]: @/documentation/as2/literals.md#string-literal
[Declaration]: @/documentation/as2/declaration.md
[Statement]: @/documentation/as2/statement.md
[Directive]: @/documentation/as2/script.md#directive
[IncludeDirective]: @/documentation/as2/script.md#include-directive
[InitDirective]: @/documentation/as2/script.md#init-directive
[TRIVIA]: @/documentation/as2/trivia.md
