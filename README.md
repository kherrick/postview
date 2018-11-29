# postview

An adventure in C# on Linux, using Visual Studio Code and Blazor.

# requirements

* [bash](https://www.gnu.org/software/bash/)
* [.NET Core 2.1.500 or later](https://go.microsoft.com/fwlink/?linkid=873092)

# develop

```bash
dotnet run
```

# initially bootstrapped with the following

```bash
#!/usr/bin/env bash

readonly APP_NAME='postview'

dotnet new -i Microsoft.AspNetCore.Blazor.Templates \
 && dotnet new blazorserverside -o "$APP_NAME" \
 && cd "$APP_NAME/$APP_NAME.Server" || exit 1

dotnet run
```
