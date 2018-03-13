# StringExtract

```
[string, index, count] → [String(string).substr(index, count)]
```

- Action Code: `0x35`
- Stack: `3 → 1`
- SWF version: `4`

## Original documentation

### ActionMBStringExtract

ActionMBStringExtract extracts a substring from a string and is multi-byte aware.

| Field                 | Type               | Comment           |
|-----------------------|--------------------|-------------------|
| ActionMBStringExtract | ACTIONRECORDHEADER | ActionCode = 0x35 |

It does the following:
1. Pops the number count off the stack.
2. Pops the number index off the stack.
3. Pops the string string off the stack.
4. Pushes the substring of string starting at the index’th character and count characters in length to the
stack.
Note: If either index or count do not evaluate to integers, the result is the empty string.
This is a multi-byte aware version of ActionStringExtract. Index and count are treated as character indexes,
counting double-byte characters as single characters.
