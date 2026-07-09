param(
    [Parameter(Position = 0)]
    [string]$Title = (Get-Date -Format "yyyy-MM-dd")
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
    Write-Host "변경된 내용이 없어 업로드하지 않았습니다."
    return
}

git add .
git commit -m $Title

git push origin main
