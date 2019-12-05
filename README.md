# postview

An adventure in C# on Linux, using Visual Studio Code and Blazor.

# requirements

* [bash](https://www.gnu.org/software/bash/)
* [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1)

# develop

```bash
dotnet run
```

# initially bootstrapped with the following

```bash
#!/usr/bin/env bash

readonly APP_NAME='postview'

dotnet new -i Microsoft.AspNetCore.Blazor.Templates::3.1.0-preview4.19579.2 \
  && dotnet new blazorwasm -o "$APP_NAME" \
  && cd "$APP_NAME" || exit 1

dotnet run
```
