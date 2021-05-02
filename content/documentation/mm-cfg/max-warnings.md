+++
title = "MaxWarnings"
description = "MaxWarnings"
template = "page-documentation.html"
+++

- Parameter Name: `MaxWarnings`
- Type: `UnsignedInteger`
- Default: `100`

## Description

It seems that on the latest Flash Player versions, `MaxWarnings = 0` is
equivalent to `MaxWarnings = 1`. This may be a bug: this is a fairly late
change as this parameter worked as documented in spring 2020.

# Adobe documentation

Sets the number of warnings to log before stopping.

The default value of the `MaxWarnings` property is 100. After 100 messages, the debugger version of Flash Player writes a message to the file stating that further error messages will be suppressed.

Set the `MaxWarnings` property to override the default message limit. For example, you can set it to 500 to capture 500 error messages.

Set the `MaxWarnings` property to 0 to remove the limit so that all error messages are recorded.

# Examples

```
MaxWarnings = 0
```

```
MaxWarnings = 1
```
