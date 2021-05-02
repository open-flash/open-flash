+++
title = "StrictMode"
description = "StrictMode"
template = "page-documentation.html"
+++

- Action Code: `0x89`
- Stack: `0 → 0`
- SWF version: unknown

# Syntax

> **<sup>Syntax</sup>**\
> _ActionStrictMode_ :\
> &nbsp;&nbsp; _LongActionHeader_<sub>(Code=`0x89`, Size=actionSize)</sub> _actionStrictModeBody_<sub>[size: `actionSize`]</sub>
>
> _actionStrictModeBody_ :\
> &nbsp;&nbsp; _isStrict_ [PADDING]
>
> _isStrict_ :\
> &nbsp;&nbsp; [UINT8]

The field `isStrict` corresponds to the boolean `isStrict != 0`.

**TODO**: Confirm if padding is allowed.

# Description

This AVM1 action only serves as a hint that the byte code was compiled using
"strict mode". It has no runtime effect.

I assume this corresponds that the program type-checked.
This hint was probably envisioned as a signal to improve performance by relying
on the compile-time checks and reducing runtime checks, but in practice it did
not work out: AS2 type hints are optional so passing a "strict compilation"
does not mean much.

I only found references to this action in other parsers (Gnash and Shumway), but
wasn't able to generate it myself. I looked for a "strict compilation" in the
editors "Macromedia Flash 8" and "Adobe Flash Pro CS6" but couldn't find it.

# Abstract AS2

```
@strictCompilationHint(); // Default: `true`
@strictCompilationHint(true);
@strictCompilationHint(false);
```

# Gnash documentation

[Source](https://github.com/open-flash/gnash/blob/8a11e60585db4ed6bc4eafadfbd9b3123ced45d9/libcore/vm/ASHandlers.cpp#L1661)

> Sets strict mode in the compiler.
>
> This is irrelevant for execution, but included for completeness.

[PADDING]: @/documentation/swf/primitives.md#padding
[UINT8]: @/documentation/swf/primitives.md#uint8
