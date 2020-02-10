+++
title = "Bitmap"
description = "Open Flash Bitmaps"
template = "page-documentation.html"
+++

This _bitmap_ section describes how Flash handles raster images.

Flash supports a few different image formats: some are standard formats while others are specific to flash. Open Flash refers to theses formats using an "image type" using a MIME type format.

- Standard image types:
  - `image/jpeg`
  - `image/gif`
  - `image/png`
- SWF-specific image types:
  - `image/x-swf-partial-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in  a `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
  - `image/x-swf-jpeg3`: JPEG with alpha mask (see DefineBitsJPEG3): `x-ajpeg` :: `jpeg_size` `jpeg` `alpha`
  - `image/x-swf-jpeg4`: JPEG with alpha mask and deblocking (see DefineBitsJPEG4): `x-ajpegd` :: `jpeg_size` `deblock` `jpeg` `alpha`
  - `image/x-swf-lossless1`
  - `image/x-swf-lossless2`

# image/x-swf-lossless1

Opaque lossless SWF bitmap in the [sRGB] color space with 8-bit channel depth and dimensions up to (2¹⁶-1)×(2¹⁶-1) pixels.

This format corresponds to the one used by [_DefineBitsLossless_ in the SWF spec][swf-spec-p142].

> **<sup>Syntax</sup>**\
> _SwfBitmap_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; `0x03` _dimensions_ _colorCountMinusOne_ [zlib]\(_colorMap_)\
> &nbsp;&nbsp; &nbsp;&nbsp; | `0x04` _dimensions_ [zlib]\(_pixMap15_)\
> &nbsp;&nbsp; &nbsp;&nbsp; | `0x05` _dimensions_ [zlib]\(_pixMap24_)\
> &nbsp;&nbsp; }\
> _dimensions_ :\
> &nbsp;&nbsp; _width_ _height_\
> _width_ :\
> &nbsp;&nbsp; [LE_UINT16]\
> _height_ :\
> &nbsp;&nbsp; [LE_UINT16]

Color map encoding (code `0x03`):

> **<sup>Syntax</sup>**\
> _colorCountMinusOne_ :\
> &nbsp;&nbsp; [UINT8]\
> _colorMap_(width, height, colors) :\
> &nbsp;&nbsp; _palette_(colors) _colorMapRow_{height}\
> _palette(colors)_ :\
> &nbsp;&nbsp; _color_{colors}\
> _color_ :\
> &nbsp;&nbsp; [UINT8][UINT8] [UINT8][UINT8] [UINT8][UINT8]\
> _paddedColorMapRow_(width, colors) :\
> &nbsp;&nbsp; _colorMapRow_ [PADDING]\
> _colorMapRow_(width, colors) :\
> &nbsp;&nbsp; [UINT8]<sub>[where: `value < colors`]</sub>{width}

Pixel map 15 encoding (code `0x04`):

> **<sup>Syntax</sup>**\
> _pixMap15_ :\
> &nbsp;&nbsp; _paddedPixMap15Row_{height}\
> _paddedPixMap15Row_(width) :\
> &nbsp;&nbsp; _pixMap15Row_(width) [PADDING]\
> _pixMap15Row_(width) :\
> &nbsp;&nbsp; _pix15_{width}\
> _pix15_ :\
> &nbsp;&nbsp; [BE_UINT16]

Pixel map 24 encoding (code `0x05`):

> **<sup>Syntax</sup>**\
> _pixMap24_ :\
> &nbsp;&nbsp; _pixMap24Row_{height}\
> _pixMap24Row_(width) :\
> &nbsp;&nbsp; _pix24_{width}\
> _pix24_ :\
> &nbsp;&nbsp; `0x00` [UINT8][UINT8] [UINT8][UINT8] [UINT8][UINT8]

TODO: Check if the last row needs padding

## intCeil

The `intCeil(n, k)` function returns the smallest multiple of `k` greater than or equal to `n`.
It is used to compute sizes and offsets based on alignment.

Using mathematical notation, the function can be defined as:
```
# ⌈ x ⌉ represents the ceiling funtion
intCeil(n, k) = k × ⌈ n / k ⌉
```

It can also be defined using the modulo operator instead of division and ceiling:
```
intCeil(n, k) = n + k - 1 - ((n - 1) % k)
```

**Example**: Data rows of lossless images must be aligned on 4 bytes. This means that padding must be inserted such that the total size is a multiple of 4. The `intCeil(n, 4)` function returns this total size for `n` bytes of useful data. If we have 253 bytes of useful data, we must add 3 bytes of padding to reach 256 bytes, hence `intCeil(253, 4) == 256`.

ℹ Note: If `n` is already a multiple of `k`, the result is just `n`.

# image/x-swf-abmp

SWF bitmap with transparency (alpha channel).

[PADDING]: @/documentation/swf/primitives.md#padding
[UINT8]: @/documentation/swf/primitives.md#uint8
[LE_UINT16]: @/documentation/swf/primitives.md#le-uint16
[BE_UINT16]: @/documentation/swf/primitives.md#be-uint16
[zlib]: @/documentation/zlib.md
[sRGB]: https://en.wikipedia.org/wiki/SRGB
[swf-spec-p142]: https://open-flash.github.io/mirrors/swf-spec-19.pdf#page=142
