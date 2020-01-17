+++
title = "DefineButton"
description = "DefineButton"
template = "page-documentation.html"
+++

# Type

> **<sup>Type</sup>**\
> _DefineButton_ {\
> &nbsp;&nbsp; id: _Uint16_\
> &nbsp;&nbsp; trackAsMenu: _Boolean_\
> &nbsp;&nbsp; records: _ButtonRecord_[]\
> &nbsp;&nbsp; actions: _ButtonCondAction_[]\
> }

<details>
<summary>
Implementations
</summary>

- [Rust](https://docs.rs/swf-types/0.10.0/swf_types/tags/struct.DefineButton.html)
- [TypeScript](https://github.com/open-flash/swf-types/blob/master/ts/src/lib/tags/define-button.ts)

</details>

# Syntax

ℹ _DefineButton_ and _DefineButton2_ do not end with padding.

> **<sup>Syntax</sup>**\
> _DefineButton_ :\
> &nbsp;&nbsp; _buttonId_ _recordList_ _avm1Buffer_
>
> _DefineButton2_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _buttonId_ _button2Flags_ _nextAction_<sub>[value: `0`]</sub> _recordList_ [PADDING]\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _buttonId_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _button2Flags_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _nextAction_<sub>[value: `size(this.nextAction) + size(this.recordList)`]</sub>\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _recordList_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _condActionList_\
> &nbsp;&nbsp; &nbsp;&nbsp; }
>
> _buttonId_ :\
> &nbsp;&nbsp; [LE_UINT16]
>
> _avm1Buffer_ :\
> &nbsp;&nbsp; [UINT8]*
>
> _buttonFlags_ :\
> &nbsp;&nbsp; [UINT8]
>
> _recordList_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _recordFlags<sub>[value: `0`]</sub>_\
> &nbsp;&nbsp; | _record_ _recordList_
>
> _record_<sub>(Version=Button1)</sub> :\
> &nbsp;&nbsp; _recordFlags_<sub>[`value != 0`]</sub> _charcterId_ _depth_ _[Matrix]_\
> _record_<sub>(Version=Button2)</sub> :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; _recordFlags_<sub>[`value != 0`]</sub>\
> &nbsp;&nbsp; &nbsp;&nbsp; _charcterId_\
> &nbsp;&nbsp; &nbsp;&nbsp; _depth_\
> &nbsp;&nbsp; &nbsp;&nbsp; _[Matrix]_\
> &nbsp;&nbsp; &nbsp;&nbsp; _[ColorTransformWithAlpha]_\
> &nbsp;&nbsp; &nbsp;&nbsp; _[FilterList]_<sub>[if: `recordFlags.hasFilters`]</sub>\
> &nbsp;&nbsp; &nbsp;&nbsp; _[BlendMode]_<sub>[if: `recordFlags.hasBlendMode`]</sub>\
> &nbsp;&nbsp; }
>
> _recordFlags_ :\
> &nbsp;&nbsp; [UINT8]
>
> _nextAction_ :\
> &nbsp;&nbsp; [LE_UINT16]
>
> _condActionList_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; _nextAction_<sub>[value: `0`]</sub> _condAction_\
> &nbsp;&nbsp; | {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _nextAction_<sub>[value: `size(this.nextAction) + size(this.condAction)`]</sub>\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _condAction_\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _condActionList_\
> &nbsp;&nbsp; &nbsp;&nbsp; }
>
> _condAction_ :\
> &nbsp;&nbsp; _condActionflags_ _avm1Buffer_

Interpretation of `buttonFlags`:

| Mask     | Comment                |
|----------|------------------------|
| `1 << 0` | `trackAsMenu`          |
| `0xfe`   | Reserved               |

Interpretation of `recordFlags`:

| Mask     | Comment                |
|----------|------------------------|
| `1 << 0` | `stateUp`              |
| `1 << 1` | `stateOver`            |
| `1 << 2` | `stateDown`            |
| `1 << 3` | `stateHitTest`         |
| `1 << 4` | `hasFilters`           |
| `1 << 5` | `hasBlendMode`         |
| `0xc0`   | Reserved               |

Interpretation of `condActionFlags`:

| Mask     | Comment                                           |
|----------|---------------------------------------------------|
| `1 << 0` | `idleToOverUp`                                    |
| `1 << 1` | `overUpToIdle`                                    |
| `1 << 2` | `overUpToOverDown`                                |
| `1 << 3` | `overDownToOverUp`                                |
| `1 << 4` | `overDownToOutDown`                               |
| `1 << 5` | `outDownToOverDown`                               |
| `1 << 6` | `outDownToIdle`                                   |
| `1 << 7` | `idleToOverDown`                                  |
| `1 << 8` | `overDownToIdle`                                  |
| `0xfe00` | `keyCode = (condActionFlags >> 9) & 0x7f` (TODO)  |


[ColorTransformWithAlpha]: @/documentation/swf/base.md#color-transform-with-alpha
[Matrix]: @/documentation/swf/base.md#matrix
[BlendMode]: @/documentation/swf/control.md#blend-mode
[FilterList]: @/documentation/swf/control.md#filter-list
[UINT8]: @/documentation/swf/primitives.md#uint8
[LE_UINT16]: @/documentation/swf/primitives.md#le-uint16
[LE_UINT32]: @/documentation/swf/primitives.md#le-uint32
[PADDING]: @/documentation/swf/primitives.md#padding
