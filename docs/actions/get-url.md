# GetUrl

```
[] → []
```

- Action Code: `0x83`
- Stack: `0 → 0`
- SWF version: `3`

## Original documentation

### ActionGetURL

ActionGetURL instructs Flash Player to get the URL that UrlString specifies. The URL can be of any type, including
an HTML file, an image or another SWF file. If the file is playing in a browser, the URL is displayed in the frame
that TargetString specifies. The "_level0" and "_level1" special target names are used to load another SWF file
into levels 0 and 1 respectively.

| Field           | Type               | Comment           |
|-----------------|--------------------|-------------------|
| ActionGetURL    | ACTIONRECORDHEADER | ActionCode = 0x83 |
| UrlString       | STRING             | Target URL string |
| TargetString    | STRING             | Target string     |
