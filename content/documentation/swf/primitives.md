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

# LE_UINT32

Unsigned 32-bit integer in little-endian representation.
