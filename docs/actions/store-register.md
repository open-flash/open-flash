# StoreRegister

```
[value] → [value]
```

- Action Code: `0x87`
- Stack: `1 → 1`
- SWF version: `5`

## Original documentation

### ActionStoreRegister

ActionStoreRegister reads the next object from the stack (without popping it) and stores it in one of four
registers. If ActionDefineFunction2 is used, up to 256 registers are available.

| Field               | Type               | Comment                        |
|---------------------|--------------------|--------------------------------|
| ActionStoreRegister | ACTIONRECORDHEADER | ActionCode = 0x87              |
| RegisterNumber      | UI8                |                                |

ActionStoreRegister parses register number from the StoreRegister tag.
