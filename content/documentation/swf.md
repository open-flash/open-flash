+++
title = "SWF Reference"
description = "SWF File format reference"
+++

# SWF

An SWF file consists in a signature followed by a payload. The payload has the
(potentially compressed) content of the movie. The signature defines the SWF
version, compression method for the payload and full size after decompression.

```
Swf :
  SwfSignature SwfPayload
```

The SWF signature is always 8 bytes long. It describes how to interpret the
SWF payload.

```
SwfSignature :
  SwfCompressionMethod SwfVersion UncompressedFileSize
```

The SWF compression method identifies the file as an SWF file, and how the
payload is compressed.

- `0x46 0x57 0x53` (ASCII: `FWS`): Uncompressed payload
- `0x43 0x57 0x53` (ASCII: `CWS`): Compressed payload, using `deflate`.
- `0x5a 0x57 0x53` (ASCII: `ZWS`): Compressed payload, using `lzma`.

Any other value indicates that the file is _not_ an SWF file.

```
SwfCompressionMethod :
  0x46 0x57 0x53
  0x43 0x57 0x53
  0x5a 0x57 0x53
```

Version of the SWF file. The version controls how further data is interpreted.

```
SwfVersion :
  Uint8
```

Sum of the size of the signature (8 bytes) and uncompressed payload.

```
UncompressedFileSize :
  leUint32
```

The payload contains the compressed content of the movie. It must be
uncompressed first before being parsed. It consists in a header followed by a
sequence of tags. Each tag acts as an instruction describing how to play the
movie.

```
Movie :
  SwfPayload[SWF]
  uncompressDeflate(SwfPayload[CWF])
  uncompressLzma(SwfPayload[CWF])
  MovieHeader TagString
```

```
MovieHeader :
  Rect leUfixed8P8 leUint16 # frameSize, frameRate, frameCount
```
