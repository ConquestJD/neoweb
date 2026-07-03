$path = "e:\Proyectos\NeoWeb\src\app\features\blog\blog.component.css"
$lines = Get-Content -Path $path -Encoding UTF8

$darkRanges = @(
  @{start=22; end=308},    # Hero (23-309 in 1-index)
  @{start=874; end=1237}   # CTA (875-1238 in 1-index)
)

function InDarkRange($idx) {
  foreach ($r in $darkRanges) {
    if ($idx -ge $r.start -and $idx -le $r.end) { return $true }
  }
  return $false
}

for ($i = 0; $i -lt $lines.Count; $i++) {
  $line = $lines[$i]
  if (InDarkRange $i) {
    $line = $line -replace 'rgba\(139,\s*92,\s*246,\s*([0-9.]+)\)', 'rgba(255, 255, 255, $1)'
    $line = $line -replace 'rgba\(107,\s*70,\s*193,\s*([0-9.]+)\)', 'rgba(255, 255, 255, $1)'
    $line = $line -replace 'rgba\(124,\s*58,\s*237,\s*([0-9.]+)\)', 'rgba(255, 255, 255, $1)'
    $line = $line -replace 'rgba\(99,\s*102,\s*241,\s*([0-9.]+)\)', 'rgba(255, 255, 255, $1)'
  } else {
    $line = $line -replace 'rgba\(139,\s*92,\s*246,\s*([0-9.]+)\)', 'rgba(0, 0, 0, $1)'
    $line = $line -replace 'rgba\(107,\s*70,\s*193,\s*([0-9.]+)\)', 'rgba(0, 0, 0, $1)'
    $line = $line -replace 'rgba\(124,\s*58,\s*237,\s*([0-9.]+)\)', 'rgba(0, 0, 0, $1)'
    $line = $line -replace 'rgba\(99,\s*102,\s*241,\s*([0-9.]+)\)', 'rgba(0, 0, 0, $1)'
  }
  $lines[$i] = $line
}

$content = $lines -join "`n"

$hexMap = [ordered]@{
  '#1e1b4b' = '#111113'
  '#312e81' = '#27272a'
  '#4c1d95' = '#18181b'
  '#6b21a8' = '#000000'
  '#9d6af7' = '#71717a'
  '#8b4ef0' = '#3f3f46'
  '#6b46c1' = '#27272a'
  '#7c3aed' = '#3f3f46'
  '#8b5cf6' = '#52525b'
  '#a78bfa' = '#a1a1aa'
  '#c4b5fd' = '#d4d4d8'
  '#ddd6fe' = '#e4e4e7'
  '#ede9fe' = '#f4f4f5'
  '#e9d5ff' = '#e4e4e7'
  '#faf9ff' = '#f5f5f5'
  '#e2e0eb' = '#e5e5ea'
  '#60a5fa' = '#ffffff'
  '#3b82f6' = '#d4d4d8'
  '#2563eb' = '#a1a1aa'
  '#a855f7' = '#52525b'
  '#9333ea' = '#27272a'
  '#6366f1' = '#71717a'
  '#4f46e5' = '#3f3f46'
}

foreach ($key in $hexMap.Keys) {
  $content = [System.Text.RegularExpressions.Regex]::Replace($content, [System.Text.RegularExpressions.Regex]::Escape($key), $hexMap[$key], [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
}

Set-Content -Path $path -Value $content -Encoding UTF8 -NoNewline
Write-Host "Done"
