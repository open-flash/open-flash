# StringExtract

```
[string, index, count] → [String(string).substr(index, count)]
```

- Action Code: `0x15`
- Stack: `3 → 1`
- SWF version: `4`

## Original documentation

### ActionStringExtract

ActionStringEquals tests two strings for equality.

| Field               | Type               | Comment           |
|---------------------|--------------------|-------------------|
| ActionStringExtract | ACTIONRECORDHEADER | ActionCode = 0x15 |

ActionStringExtract does the following:
1. Pops number count off the stack.
2. Pops number index off the stack.
3. Pops string string off the stack.
4. Pushes the substring of the string starting at the indexed character and count characters
   in length to the stack.
5. If either index or count do not evaluate to integers, the result is the empty string.
