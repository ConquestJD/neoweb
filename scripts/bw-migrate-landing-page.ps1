$path = "e:\Proyectos\NeoWeb\src\app\features\servicios\landing-page\landing-page.component.css"
$lines = Get-Content -Path $path -Encoding UTF8

$darkRanges = @(
  @{start=22; end=364},   # Hero
  @{start=843; end=1170}  # Features (dark navy/violet bg)
)

function InDarkRange($idx) {
  foreach ($r in $darkRanges) {
    if ($idx -ge $r.start -and $idx -le $r.end) { return $true }
  }
  return $false
}

$rgbaFamilies = @('139,\s*92,\s*246', '107,\s*70,\s*193', '124,\s*58,\s*237', '99,\s*102,\s*241', '226,\s*232,\s*240')

for ($i = 0; $i -lt $lines.Count; $i++) {
  $line = $lines[$i]
  $target = if (InDarkRange $i) { 'rgba(255, 255, 255, $1)' } else { 'rgba(0, 0, 0, $1)' }
  foreach ($fam in $rgbaFamilies) {
    $line = $line -replace "rgba\($fam,\s*([0-9.]+)\)", $target
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
  '#5b21b6' = '#18181b'
  '#faf5ff' = '#f5f5f5'
}

foreach ($key in $hexMap.Keys) {
  $content = [System.Text.RegularExpressions.Regex]::Replace($content, [System.Text.RegularExpressions.Regex]::Escape($key), $hexMap[$key], [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
}

Set-Content -Path $path -Value $content -Encoding UTF8 -NoNewline
Write-Host "Done"
