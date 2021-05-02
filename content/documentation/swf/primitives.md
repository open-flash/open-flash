+++
title = "Primitives"
description = "Primitive definition"
template = "page-documentation.html"
+++

# PADDING

Any sequence of bytes, including nothing. `PADDING` mostly used after
useful date to reach the expected size. There is no value associated with
padding itself.

When emitting SWF data, `PADDING` should be minimized: use no padding at all
or the shortest allowed padding. If padding is required, it should be filled with
zeros.

# UINT8

Unsigned 8-bit integer.

# LE_UINT16

Unsigned 16-bit integer in little-endian representation.
This is the main type used for 16-bit values.

# BE_UINT16

Unsigned 16-bit integer in big-endian representation.
This type is only rarely used for 16-bit values.

# LE_UINT32

Unsigned 32-bit integer in little-endian representation.

# NUL_UTF8

An unbounded nul-terminated UTF-8 buffer.

Buffers containing encoding errors are invalid.

This encodes a string as a sequence of unicode codepoints, except for the codepoint `0`.

# LE_FLOAT32

Little-endian representation for a floating-point IEE-754 binary32.

Based on the documentation of the modulo action, Adobe uses `0x7FC00000` as the canonical NaN representation.

# LE32_FLOAT64

Mixed-endian representation for a floating-point IEE-754 binary64.

The endianness here is different from the regular "little-endian" or "big-endian".
We chose to call it the "Little-Endian 32-bit invariant endianness", or _LE-32_.
This name is inspired by [ARM's legacy _BE-32_ endianness](https://developer.arm.com/documentation/ddi0290/g/unaligned-and-mixed-endian-data-access-support/mixed-endian-access-support/differences-between-be-32-and-be-8-buses).

In LE-32, each word of 4 bytes uses LE for its bits, but groups of multiple
words (such as the 8 bytes for a float64) store the words themselves in BE.

Assume we have a floating number interpreted as a `Uint64` named `x`.
The floating point can then be decoded with the following masks:
- Sign: `(x >> 63) & 1`
- Exponent: `(x >> 52) & ((1 << 11) - 1)`
- Mantissa: `x & ((1 << 52) - 1)`

When writing this number `x` to a buffer of 8 bytes, the following table
describes the bits in each byte depending on the endianness.

|          | Little Endian | Big Endian | LE-32 |
|----------|---------------|------------|-------|
| bytes[0] | 0:7           | 56:63      | 32:39 |
| bytes[1] | 8:15          | 48:55      | 40:47 |
| bytes[2] | 16:23         | 40:47      | 48:55 |
| bytes[3] | 24:31         | 32:39      | 56:63 |
| bytes[4] | 32:39         | 24:31      | 0:7   |
| bytes[5] | 40:47         | 16:23      | 8:15  |
| bytes[6] | 48:55         | 8:15       | 16:23 |
| bytes[7] | 56:63         | 0:7        | 24:31 |
