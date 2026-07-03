$path = "e:\Proyectos\NeoWeb\src\app\features\nosotros\nosotros.component.css"
$lines = Get-Content -Path $path -Encoding UTF8

$darkRanges = @(
  @{start=585; end=869}   # Valores section (586-870 in 1-index)
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
}

foreach ($key in $hexMap.Keys) {
  $content = [System.Text.RegularExpressions.Regex]::Replace($content, [System.Text.RegularExpressions.Regex]::Escape($key), $hexMap[$key], [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
}

Set-Content -Path $path -Value $content -Encoding UTF8 -NoNewline
Write-Host "Done"
