+++
title = "SWF Reference"
description = "SWF File format reference"
+++

# File Structure

The _[Swf]_ container is at the root of an SWF file. This container has an 8-byte _[SwfSignature]_
followed by a compressed _[SwfPayload]_. After decompression, the payload yields a _[Movie]_ with
the actual content: a header with global properties and a _[Tag]_ stream describing how to play the
movie.

The general structure of an SWF file can be de described with the following diagram:

```
      +--------------+---------------------------------------------------------+
 Swf  | SwfSignature |                       SwfPayload                        |
      +--------------+----------------------------+----------------------------+
                                                  |
                                                  | decompress
                                                  |
                                                  v
                     +-------------+-----+-----+-------------------------------+
              Movie  | MovieHeader | Tag | Tag | Tag |  ...  | Tag | EndOfTags |
                     +-------------+-----+-----+-------------------------------+
```


# Swf

The _Swf_ element is the root of the file.

OpenFlash has no type representing the _Swf_ element itself. As it is a container for a _Movie_,
its value is the value of the _Movie_ it contains.

> **<sup>Syntax</sup>**\
> _Swf_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[SwfSignature]_<sub>(Compression=Simple)</sub> _[SwfPayload]_<sub>(Compression=Simple)</sub>\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[SwfSignature]_<sub>(Compression=Deflate)</sub> _[SwfPayload]_<sub>(Compression=Deflate)</sub>\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[SwfSignature]_<sub>(Compression=Lzma)</sub> _[SwfPayload]_<sub>(Compression=Lzma)</sub>\
> &nbsp;&nbsp; }

# Swf&#8288;Signature

The SWF signature is always 8 bytes long. It describes how to interpret the
SWF payload.

> **<sup>Syntax</sup>**\
> _SwfSignature_<sub>(Compression)</sub> :\
> &nbsp;&nbsp; _CompressionMethod_<sub>(Compression)</sub> _SwfVersion_ _UncompressedSize_
>
> _CompressionMethod_<sub>(Compression=Simple)</sub> :\
> &nbsp;&nbsp; `0x46` `0x57` `0x53`\
> _CompressionMethod_<sub>(Compression=Deflate)</sub> :\
> &nbsp;&nbsp; `0x43` `0x57` `0x53`\
> _CompressionMethod_<sub>(Compression=Lzma)</sub> :\
> &nbsp;&nbsp; `0x5a` `0x57` `0x53`
>
> _SwfVersion_ :\
> &nbsp;&nbsp; [UINT8]
>
> _UncompressedSize_ :\
> &nbsp;&nbsp; [LE_UINT32]

The SWF compression method identifies the file as an SWF file, and how the
payload is compressed.

- `0x46 0x57 0x53` (ASCII: `FWS`): Uncompressed payload
- `0x43 0x57 0x53` (ASCII: `CWS`): Compressed payload, using `deflate`.
- `0x5a 0x57 0x53` (ASCII: `ZWS`): Compressed payload, using `lzma`.

Any other value indicates that the file is _not_ an SWF file.

The SWF version indicates the version used for the file. The interpretation of
some tags depends on this version.

The `UncompressedSize` corresponds to the sum of the size of the SWF signature and of
th uncompressed _[Movie]_.

# Swf&#8288;Payload

The payload contains the compressed content of the movie. It must be
uncompressed first before being parsed. It consists in a header followed by a
sequence of tags. Each tag acts as an instruction describing how to play the
movie.

> **<sup>Syntax</sup>**\
> _SwfPayload_<sub>(Compression=Simple)</sub> :\
> &nbsp;&nbsp; _Movie_\
> _SwfPayload_<sub>(Compression=Deflate)</sub> :\
> &nbsp;&nbsp; compressWithDeflate(_Movie_)\
> _SwfPayload_<sub>(Compression=Lzma)</sub> :\
> &nbsp;&nbsp; compressWithLzma(_Movie_)

# Movie

Where _[Swf]_ is a container, _Movie_ is the actual content of the file.
It has a header defining global properties and a stream of tags. Each tag
represents an update to the runtime movie state, such as defining sprites or
running ActionScript bytecode.

> **<sup>Syntax</sup>**\
> _Movie_<sub>(SwfVersion)</sub> :\
> &nbsp;&nbsp; _MovieHeader_ _Tag_<sub>(SwfVersion)</sub><sup>*</sup> _EndOfTags_

# Movie&#8288;Header

> **<sup>Syntax</sup>**\
> _MovieHeader_ :\
> &nbsp;&nbsp; _frameSize_ _frameRate_ _frameCount_
>
> _frameSize_ :\
> &nbsp;&nbsp; _Rect_
>
> _frameRate_ :\
> &nbsp;&nbsp; LE_UFIXED8_P8
>
> _frameCount_ :\
> &nbsp;&nbsp; LE_UINT16

# Tag

See the [Tag index](@/documentation/swf/tags/_index.md).

> **<sup>Syntax</sup>**\
> _Tag_<sub>(SwfVersion)</sub> :\
> &nbsp;&nbsp; _ShortTag_ | _LongTag_\
> _ShortTag_<sub>(SwfVersion)</sub> :\
> &nbsp;&nbsp; _TagHeader_(code, tagSize)<sub>(code, tagSize)</sub> _TagBody(code)<sub>[size: `tagSize`]</sub>_\
> _LongTag_<sub>(SwfVersion)</sub> :\
> &nbsp;&nbsp; _TagHeader_(code, tagSize)<sub>(code, tagSize)</sub> _TagBody(code)<sub>[size: `tagSize`]</sub>_

# Tag&#8288;Header

A tag header defines the tag code and tag body size.

The **tag code** is an unsigned 10-bit integer identifying the action corresponding to the tag.

The **tag body size** is the size in bytes of the tag body following this header. It does not count
the size of the tag header itself, only of the tag body. The body size is allowed to be `0`.

There are two representations for the tag header: the short form (`ShortTagHeader`) and long form
(`LongTagHeader`). The short form is compat but only allows to describe tags with a body size of
62 bytes or less. The short form is recommended when the tag type allows it and the body size
fits.

⚠ Many tag types allow both forms, but not all. In particular bitmap definition
tags require a long form header even if the body size is 62 bytes long or shorter.

> **<sup>Syntax</sup>**\
> _ShortTagHeader_(code, bodySize)<sub>[where: `bodySize < 63`]</sub> :\
> &nbsp;&nbsp; _codeAndSize_(code, bodySize)
>
> _LongTagHeader_(code, bodySize) :\
> &nbsp;&nbsp; _codeAndSize_(code, 63) _size_<sub>[value: `bodySize`]</sub>
>
> _codeAndSize_(code, size)<sub>[where: `size < 64`]</sub> :\
> &nbsp;&nbsp; LE_UINT16<sub>[value: `code * 64 + size`]</sub>
>
> _size_ :\
> &nbsp;&nbsp; LE_UINT32

[Adobe Reference: Tag format](/mirrors/swf-spec-19.pdf#page=29)

# Tag&#8288;Body

The body of the tag depends on its type. The type can be derived from the code in the tag header.

Open Flash allows a single type to correspond to multiple codes when the semantics are the same
and only the syntax changes.



[UINT8]: @/documentation/swf/primitives.md#uint8
[LE_UINT32]: @/documentation/swf/primitives.md#le-uint32
[SwfSignature]: #swf-signature
[SwfPayload]: #swf-payload
[Swf]: #swf
[SwfSignature]: #swf-signature
[SwfPayload]: #swf-payload
[Movie]: #movie
[Tag]: #tag
