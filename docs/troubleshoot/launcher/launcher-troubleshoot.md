# Troubleshooting Zowe Launcher

The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior using Zowe&trade; Launcher.

Issues and development of the Zowe Launcher is managed in GitHub. When you troubleshoot a problem, you can check whether a GitHub issue (open or closed) that covers the problem already exists. For a list of issues, see the [launcher repo](https://github.com/zowe/launcher).

[**Error Message Codes**](launcher-error-codes.md)
## Enable Zowe Launcher Debug Mode

Use debug mode to display additional debug messages for Zowe Launcher.

**Important:** We highly recommend that you enable debug mode only when you want to troubleshoot issues.
Disable debug mode when you are not troubleshooting. Running Zowe Launcher in debug mode can adversely affect its performance and consume a large amount of spool space.

**Follow these steps:**

1. Open the PROCLIB member ZWESLSTC

2. Find STDENV DD inline statements

3. Add a new line
  
  ```
  ZLDEBUG=ON
  ```
  By default debug mode is disabled, so the `ZLDEBUG` is set to `OFF`. To disable debug mode remove the line or set `ZLDEBUG` to `OFF`.
   
3. Restart ZWESLSTC Started Task.

## Enable Zowe Secure Services (zss) Debug Mode

To collect all available additional debug information about the Zowe Secure Services (zss) server component, the following lines can be added to `zowe.yaml`.  Each of the `logLevels:` entries represents a different piece of zss data that can be logged and you can include as many of these as you need to collect additional log data for.  

```
components:
    zss:
        logLevels:
            _zss.mvdserver: 5
            _zss.ctds: 5
            _zss.security: 5
            _zss.unixfile: 5
            _zss.dataservice: 5
            _zss.apimlstorage: 5
            _zss.jwk: 5
            _zss.traceLevel: 5
            _zss.fileTrace: 5
            _zss.socketTrace: 5
            _zss.httpParseTrace: 5
            _zss.httpHeadersTrace: 5
            _zss.httpSocketTrace: 5
            _zss.httpCloseConversationTrace: 5
            _zss.httpAuthTrace: 5
```
