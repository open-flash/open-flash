# With

```
[context] → []
```

- Action Code: `0x94`
- Stack: `1 → 0`
- SWF version: `5`

## Original documentation

### ActionWith

Defines a With block of script.

| Field             | Type               | Comment                        |
|-------------------|--------------------|--------------------------------|
| ActionTargetPath  | ACTIONRECORDHEADER | ActionCode = 0x94              |
| Size              | UI16               | # of bytes of code that follow |

ActionWith does the following:
1. Pops the object involved with the With.
2. Parses the size (body length) of the With block from the ActionWith tag.
3. Checks to see if the depth of calls exceeds the maximum depth, which is 16 for SWF 6 and later, and 8
   for SWF 5. If the With depth exceeds the maximum depth, the next Size bytes of data are skipped rather
   than executed.
4. After the ActionWith tag, the next Size bytes of action codes are considered to be the body of the With
   block.
5. Adds the With block to the scope chain.
