# Gemini CLI Context Menu Setup Script
# Run this script as Administrator to add "Open Gemini CLI Here" to your right-click menu.

$ActionName = "Open Gemini CLI Here"
$IconPath = "C:\Program Files\nodejs\node.exe" # Using node icon as a placeholder
$Command = "cmd.exe /K `"gemini`""

# For background (inside a folder)
$RegistryPath1 = "HKCU:\Software\Classes\directory\Background\shell\GeminiCLI"
if (!(Test-Path $RegistryPath1)) { New-Item -Path $RegistryPath1 -Force }
Set-ItemProperty -Path $RegistryPath1 -Name "(Default)" -Value $ActionName
Set-ItemProperty -Path $RegistryPath1 -Name "Icon" -Value $IconPath
$CommandPath1 = "$RegistryPath1\command"
if (!(Test-Path $CommandPath1)) { New-Item -Path $CommandPath1 -Force }
Set-ItemProperty -Path $CommandPath1 -Name "(Default)" -Value $Command

# For folder selection
$RegistryPath2 = "HKCU:\Software\Classes\directory\shell\GeminiCLI"
if (!(Test-Path $RegistryPath2)) { New-Item -Path $RegistryPath2 -Force }
Set-ItemProperty -Path $RegistryPath2 -Name "(Default)" -Value $ActionName
Set-ItemProperty -Path $RegistryPath2 -Name "Icon" -Value $IconPath
$CommandPath2 = "$RegistryPath2\command"
if (!(Test-Path $CommandPath2)) { New-Item -Path $CommandPath2 -Force }
$FolderCommand = "cmd.exe /K `"cd /d \`"%1\`" && gemini`""
Set-ItemProperty -Path $CommandPath2 -Name "(Default)" -Value $FolderCommand

Write-Host "Gemini CLI context menu has been added successfully!" -ForegroundColor Green
Write-Host "Now you can right-click any folder and select 'Open Gemini CLI Here'."
