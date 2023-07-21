---
id: 6
title: simple and minimalistic windows terminal configuration
description: null
date: Jul 20, 2023
preview: ""
draft: false
tags:
  - windows
  - terminal
  - cmd
categories:
  - programming
author: Rizki Aprita
slug: simple-and-minimalistic-windows-terminal
thumbnailUrl: /images/post/terminal.png
thumbnailAlt: simple minimalist windows terminal configuration
---
its awesome right?

here is how to get them.

1. open windows terminal
2. type `notepad $PROFILE` and hit enter
3. paste this into the newly opened notepad
```
function prompt {
$currentLocation = Get-Location
$homeLocation = (Get-Item -Path ~).FullName
if ($currentLocation.Path -eq $homeLocation) {
Write-Host -NoNewline '~' -ForegroundColor Yellow
' '
}
else {
Write-Host -NoNewline $currentLocation -ForegroundColor Green
' '
}
}
```
save the notepad
close the terminal and re open it.
enjoy