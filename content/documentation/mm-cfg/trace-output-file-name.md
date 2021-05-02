+++
title = "TraceOutputFileName"
description = "TraceOutputFileName"
template = "page-documentation.html"
+++

- Parameter Name: `TraceOutputFileName`
- Type: `String`
- Default:
  - **Windows**: `C:\Users\username\AppData\Roaming\Macromedia\Flash Player\Logs\flashlog.txt`
  - **Mac**: `~/Library/Preferences/Macromedia/Flash Player/Logs/flashlog.txt`
  - **Linux**: `~/.macromedia/Flash_Player/Logs/flashlog.txt`

# Adobe documentation

Sets the location of the log file. By default, the debugger version of Flash
Player writes error messages to a file named flashlog.txt.

Set `TraceOutputFileName` to override the default name and location of the log
file by specifying a new location and name in the following form:

```
TraceOutputFileName=<fully qualified path/filename>
```

On Mac OS X, you should use colons to separate directories in the
`TraceOutputFileName` path rather than slashes.

Note: Beginning with the Flash Player 9 Update, Flash Player ignores the
`TraceOutputFileName` property and stores the flashlog.txt file in a hard-coded
location based on operating system. For more information, see the section on log
file location listed below.
