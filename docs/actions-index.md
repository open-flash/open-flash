# Actions Index

## Alphabetical

- [Add][add]
- [Add2][add2]
- [And][and]
- [AsciiToChar][ascii-to-char]
- [BitAnd][bit-and]
- [BitLShift][bit-l-shift]
- [BitOr][bit-or]
- [BitRShift][bit-r-shift]
- [BitURShift][bit-u-r-shift]
- [BitXor][bit-xor]
- [Call][call]
- [CallFunction][call-function]
- [CallMethod][call-method]
- [CastOp][cast-op]
- [CharToAscii][char-to-ascii]
- [CloneSprite][clone-sprite]
- [ConstantPool][constant-pool]
- [Decrement][decrement]
- [DefineFunction][define-function]
- [DefineFunction2][define-function2]
- [DefineLocal][define-local]
- [DefineLocal2][define-local2]
- [Delete][delete]
- [Delete2][delete2]
- [Divide][divide]
- [EndDrag][end-drag]
- [Enumerate][enumerate]
- [Enumerate2][enumerate2]
- [Equals][equals]
- [Equals2][equals2]
- [Extends][extends]
- [FsCommand2][fs-command2]
- [GetMember][get-member]
- [GetProperty][get-property]
- [GetTime][get-time]
- [GetUrl][get-url]
- [GetUrl2][get-url2]
- [GetVariable][get-variable]
- [GotoFrame][goto-frame]
- [GotoFrame2][goto-frame2]
- [GotoLabel][goto-label]
- [Greater][greater]
- [If][if]
- [ImplementsOp][implements-op]
- [Increment][increment]
- [InitArray][init-array]
- [InitObject][init-object]
- [InstanceOf][instance-of]
- [Jump][jump]
- [Less][less]
- [Less2][less2]
- [MbAsciiToChar][mb-ascii-to-char]
- [MbCharToAscii][mb-char-to-ascii]
- [MbStringExtract][mb-string-extract]
- [MbStringLength][mb-string-length]
- [Modulo][modulo]
- [Multiply][multiply]
- [NewMethod][new-method]
- [NewObject][new-object]
- [NextFrame][next-frame]
- [Not][not]
- [Or][or]
- [Play][play]
- [Pop][pop]
- [PreviousFrame][previous-frame]
- [Push][push]
- [PushDuplicate][push-duplicate]
- [RandomNumber][random-number]
- [RemoveSprite][remove-sprite]
- [Return][return]
- [SetMember][set-member]
- [SetProperty][set-property]
- [SetTarget][set-target]
- [SetTarget2][set-target2]
- [SetVariable][set-variable]
- [StackSwap][stack-swap]
- [StartDrag][start-drag]
- [Stop][stop]
- [StopSounds][stop-sounds]
- [StoreRegister][store-register]
- [StrictEquals][strict-equals]
- [StrictMode][strict-mode]
- [StringAdd][string-add]
- [StringEquals][string-equals]
- [StringExtract][string-extract]
- [StringGreater][string-greater]
- [StringLength][string-length]
- [StringLess][string-less]
- [Subtract][subtract]
- [TargetPath][target-path]
- [Throw][throw]
- [ToggleQuality][toggle-quality]
- [ToInteger][to-integer]
- [ToNumber][to-number]
- [ToString][to-string]
- [Trace][trace]
- [Try][try]
- [TypeOf][type-of]
- [WaitForFrame][wait-for-frame]
- [WaitForFrame2][wait-for-frame2]
- [With][with]

## Action Codes

- `0x00` EndOfActions
- `0x01` - `0x03` INVALID
- [`0x04` NextFrame][next-frame]
- [`0x05` PreviousFrame][previous-frame]
- [`0x06` Play][play]
- [`0x07` Stop][stop]
- [`0x08` ToggleQuality][toggle-quality]
- [`0x09` StopSounds][stop-sounds]
- [`0x0a` Add][add]
- [`0x0b` Subtract][subtract]
- [`0x0c` Multiply][multiply]
- [`0x0d` Divide][divide]
- [`0x0e` Equals][equals]
- [`0x0f` Less][less]
- [`0x10` And][and]
- [`0x11` Or][or]
- [`0x12` Not][not]
- [`0x13` StringEquals][string-equals]
- [`0x14` StringLength][string-length]
- [`0x15` StringExtract][string-extract]
- `0x16` INVALID
- [`0x17` Pop][pop]
- [`0x18` ToInteger][to-integer]
- `0x19` - `0x1b` INVALID
- [`0x1c` GetVariable][get-variable]
- [`0x1d` SetVariable][set-variable]
- `0x1e` - `0x1f` INVALID
- [`0x20` SetTarget2][set-target2]
- [`0x21` StringAdd][string-add]
- [`0x22` GetProperty][get-property]
- [`0x23` SetProperty][set-property]
- [`0x24` CloneSprite][clone-sprite]
- [`0x25` RemoveSprite][remove-sprite]
- [`0x26` Trace][trace]
- [`0x27` StartDrag][start-drag]
- [`0x28` EndDrag][end-drag]
- [`0x29` StringLess][string-less]
- [`0x2a` Throw][throw]
- [`0x2b` CastOp][cast-op]
- [`0x2c` ImplementsOp][implements-op]
- [`0x2d` FsCommand2][fs-command2]
- `0x2e` - `0x2f` INVALID
- [`0x30` RandomNumber][random-number]
- [`0x31` MbStringLength][mb-string-length]
- [`0x32` CharToAscii][char-to-ascii]
- [`0x33` AsciiToChar][ascii-to-char]
- [`0x34` GetTime][get-time]
- [`0x35` MbStringExtract][mb-string-extract]
- [`0x36` MbCharToAscii][mb-char-to-ascii]
- [`0x37` MbAsciiToChar][mb-ascii-to-char]
- `0x38` - `0x39` INVALID
- [`0x3a` Delete][delete]
- [`0x3b` Delete2][delete2]
- [`0x3c` DefineLocal][define-local]
- [`0x3d` CallFunction][call-function]
- [`0x3e` Return][return]
- [`0x3f` Modulo][modulo]
- [`0x40` NewObject][new-object]
- [`0x41` DefineLocal2][define-local2]
- [`0x42` InitArray][init-array]
- [`0x43` InitObject][init-object]
- [`0x44` TypeOf][type-of]
- [`0x45` TargetPath][target-path]
- [`0x46` Enumerate][enumerate]
- [`0x47` Add2][add2]
- [`0x48` Less2][less2]
- [`0x49` Equals2][equals2]
- [`0x4a` ToNumber][to-number]
- [`0x4b` ToString][to-string]
- [`0x4c` PushDuplicate][push-duplicate]
- [`0x4d` StackSwap][stack-swap]
- [`0x4e` GetMember][get-member]
- [`0x4f` SetMember][set-member]
- [`0x50` Increment][increment]
- [`0x51` Decrement][decrement]
- [`0x52` CallMethod][call-method]
- [`0x53` NewMethod][new-method]
- [`0x54` InstanceOf][instance-of]
- [`0x55` Enumerate2][enumerate2]
- `0x56` - `0x5f` INVALID
- [`0x60` BitAnd][bit-and]
- [`0x61` BitOr][bit-or]
- [`0x62` BitXor][bit-xor]
- [`0x63` BitLShift][bit-l-shift]
- [`0x64` BitRShift][bit-r-shift]
- [`0x65` BitURShift][bit-u-r-shift]
- [`0x66` StrictEquals][strict-equals]
- [`0x67` Greater][greater]
- [`0x68` StringGreater][string-greater]
- [`0x69` Extends][extends]
- `0x6a` - `0x80` INVALID
- [`0x81` GotoFrame][goto-frame]
- `0x82` INVALID
- [`0x83` GetUrl][get-url]
- `0x84` - `0x86` INVALID
- [`0x87` StoreRegister][store-register]
- [`0x88` ConstantPool][constant-pool]
- [`0x89` StrictMode][strict-mode]
- [`0x8a` WaitForFrame][wait-for-frame]
- [`0x8b` SetTarget][set-target]
- [`0x8c` GotoLabel][goto-label]
- [`0x8d` WaitForFrame2][wait-for-frame2]
- [`0x8e` DefineFunction2][define-function2]
- [`0x8f` Try][try]
- `0x90` - `0x93` INVALID
- [`0x94` With][with]
- `0x95` INVALID
- [`0x96` Push][push]
- `0x97` - `0x98` INVALID
- [`0x99` Jump][jump]
- [`0x9a` GetUrl2][get-url2]
- [`0x9b` DefineFunction][define-function]
- `0x9c` INVALID
- [`0x9d` If][if]
- [`0x9e` Call][call]
- [`0x9f` GotoFrame2][goto-frame2]


[add]: ./actions/add.md
[add2]: ./actions/add2.md
[and]: ./actions/and.md
[ascii-to-char]: ./actions/ascii-to-char.md
[bit-and]: ./actions/bit-and.md
[bit-l-shift]: ./actions/bit-l-shift.md
[bit-or]: ./actions/bit-or.md
[bit-r-shift]: ./actions/bit-r-shift.md
[bit-u-r-shift]: ./actions/bit-u-r-shift.md
[bit-xor]: ./actions/bit-xor.md
[call]: ./actions/call.md
[call-function]: ./actions/call-function.md
[call-method]: ./actions/call-method.md
[cast-op]: ./actions/cast-op.md
[char-to-ascii]: ./actions/char-to-ascii.md
[clone-sprite]: ./actions/clone-sprite.md
[constant-pool]: ./actions/constant-pool.md
[decrement]: ./actions/decrement.md
[define-function]: ./actions/define-function.md
[define-function2]: ./actions/define-function2.md
[define-local]: ./actions/define-local.md
[define-local2]: ./actions/define-local2.md
[delete]: ./actions/delete.md
[delete2]: ./actions/delete2.md
[divide]: ./actions/divide.md
[end-drag]: ./actions/end-drag.md
[enumerate]: ./actions/enumerate.md
[enumerate2]: ./actions/enumerate2.md
[equals]: ./actions/equals.md
[equals2]: ./actions/equals2.md
[extends]: ./actions/extends.md
[fs-command2]: ./actions/fs-command2.md
[get-member]: ./actions/get-member.md
[get-property]: ./actions/get-property.md
[get-time]: ./actions/get-time.md
[get-url]: ./actions/get-url.md
[get-url2]: ./actions/get-url2.md
[get-variable]: ./actions/get-variable.md
[goto-frame]: ./actions/goto-frame.md
[goto-frame2]: ./actions/goto-frame2.md
[goto-label]: ./actions/goto-label.md
[greater]: ./actions/greater.md
[if]: ./actions/if.md
[implements-op]: ./actions/implements-op.md
[increment]: ./actions/increment.md
[init-array]: ./actions/init-array.md
[init-object]: ./actions/init-object.md
[instance-of]: ./actions/instance-of.md
[jump]: ./actions/jump.md
[less]: ./actions/less.md
[less2]: ./actions/less2.md
[mb-ascii-to-char]: ./actions/mb-ascii-to-char.md
[mb-char-to-ascii]: ./actions/mb-char-to-ascii.md
[mb-string-extract]: ./actions/mb-string-extract.md
[mb-string-length]: ./actions/mb-string-length.md
[modulo]: ./actions/modulo.md
[multiply]: ./actions/multiply.md
[new-method]: ./actions/new-method.md
[new-object]: ./actions/new-object.md
[next-frame]: ./actions/next-frame.md
[not]: ./actions/not.md
[or]: ./actions/or.md
[play]: ./actions/play.md
[pop]: ./actions/pop.md
[previous-frame]: ./actions/previous-frame.md
[push]: ./actions/push.md
[push-duplicate]: ./actions/push-duplicate.md
[random-number]: ./actions/random-number.md
[remove-sprite]: ./actions/remove-sprite.md
[return]: ./actions/return.md
[set-member]: ./actions/set-member.md
[set-property]: ./actions/set-property.md
[set-target]: ./actions/set-target.md
[set-target2]: ./actions/set-target2.md
[set-variable]: ./actions/set-variable.md
[stack-swap]: ./actions/stack-swap.md
[start-drag]: ./actions/start-drag.md
[stop]: ./actions/stop.md
[stop-sounds]: ./actions/stop-sounds.md
[store-register]: ./actions/store-register.md
[strict-equals]: ./actions/strict-equals.md
[strict-mode]: ./actions/strict-mode.md
[string-add]: ./actions/string-add.md
[string-equals]: ./actions/string-equals.md
[string-extract]: ./actions/string-extract.md
[string-greater]: ./actions/string-greater.md
[string-length]: ./actions/string-length.md
[string-less]: ./actions/string-less.md
[subtract]: ./actions/subtract.md
[target-path]: ./actions/target-path.md
[throw]: ./actions/throw.md
[toggle-quality]: ./actions/toggle-quality.md
[to-integer]: ./actions/to-integer.md
[to-number]: ./actions/to-number.md
[to-string]: ./actions/to-string.md
[trace]: ./actions/trace.md
[try]: ./actions/try.md
[type-of]: ./actions/type-of.md
[wait-for-frame]: ./actions/wait-for-frame.md
[wait-for-frame2]: ./actions/wait-for-frame2.md
[with]: ./actions/with.md

