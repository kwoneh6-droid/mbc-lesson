param(
    [string]$WorkspaceRoot = (Get-Location).Path
)

$ErrorActionPreference = "Stop"

$script:WorkspaceRoot = $WorkspaceRoot
$indexPath = Join-Path $script:WorkspaceRoot "index.html"

if (-not (Test-Path $indexPath)) {
    throw "루트 index.html 파일을 찾을 수 없습니다: $indexPath"
}

function Add-LinkToIndex {
    param([string]$CreatedFile)

    if ($CreatedFile -eq $indexPath) {
        return
    }

    $fileName = [System.IO.Path]::GetFileName($CreatedFile)
    if ($fileName -eq "index.html") {
        return
    }

    $relativePath = [System.IO.Path]::GetRelativePath($script:WorkspaceRoot, $CreatedFile).Replace('\\', '/')
    if ($relativePath -eq "index.html") {
        return
    }

    if ((Get-Content $indexPath -Raw) -match [regex]::Escape($relativePath)) {
        return
    }

    $title = [System.IO.Path]::GetFileNameWithoutExtension($CreatedFile)
    $title = $title -replace '-', ' '
    $title = $title.Trim()
    if ([string]::IsNullOrWhiteSpace($title)) {
        $title = "새 페이지"
    }

    $dateLabel = Get-Date -Format "MM월 dd일"
    $linkLine = "            <li><a href=\"./$relativePath\">$title▷</a></li>"

    $content = Get-Content $indexPath -Raw
    $datePattern = "<summary>$([regex]::Escape($dateLabel))</summary>\s*<ul>"

    if ($content -match $datePattern) {
        $content = [regex]::Replace($content, $datePattern, "<summary>$dateLabel</summary>`n          <ul>`, 1)
        $content = [regex]::Replace($content, "(?<prefix><summary>$([regex]::Escape($dateLabel))</summary>\s*<ul>)", "`${prefix}`n$linkLine", 1)
    }
    else {
        $marker = "<!-- HTML 개발 팁 섹션 -->"
        $newBlock = @"

        <details>
          <summary>$dateLabel</summary>
          <ul>
$linkLine
          </ul>
        </details>

"@
        $content = $content -replace [regex]::Escape($marker), "$newBlock$marker"
    }

    [System.IO.File]::WriteAllText($indexPath, $content, [System.Text.Encoding]::UTF8)
    Write-Host "연결 추가됨: $relativePath"
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $script:WorkspaceRoot
$watcher.Filter = "*.html"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

$createdEvent = Register-ObjectEvent -InputObject $watcher -EventName Created -Action {
    Start-Sleep -Milliseconds 300
    $path = $Event.SourceEventArgs.FullPath
    if (-not (Test-Path $path -PathType Leaf)) {
        return
    }

    if ($path -like "$($script:WorkspaceRoot)*") {
        Add-LinkToIndex -CreatedFile $path
    }
}

Write-Host "HTML 생성 감시 시작됨. 종료하려면 Ctrl+C를 누르세요."
while ($true) {
    Start-Sleep -Seconds 5
}
