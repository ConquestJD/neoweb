$path = "e:\Proyectos\NeoWeb\src\app\features\portafolio-seleccionado\portafolio-seleccionado.component.css"
$lines = Get-Content -Path $path -Encoding UTF8

$darkRanges = @(
  @{start=130; end=352},   # Hero (131-353 in 1-index)
  @{start=639; end=691},   # Business impact (640-692 in 1-index)
  @{start=1141; end=1214}  # CTA final (1142-1215 in 1-index)
)

function InDarkRange($idx) {
  foreach ($r in $darkRanges) {
    if ($idx -ge $r.start -and $idx -le $r.end) { return $true }
  }
  return $false
}

$rgbaFamilies = @('139,\s*92,\s*246', '107,\s*70,\s*193', '124,\s*58,\s*237', '99,\s*102,\s*241', '196,\s*181,\s*253', '167,\s*139,\s*250', '168,\s*85,\s*247', '76,\s*29,\s*149', '15,\s*10,\s*40')

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
  '#1e1b4b' = '#27272a'
  '#2e1065' = '#18181b'
  '#3b0764' = '#0a0a0b'
  '#4c1d95' = '#18181b'
  '#0f0a28' = '#111113'
  '#ddd6fe' = '#e4e4e7'
  '#c4b5fd' = '#d4d4d8'
  '#a78bfa' = '#a1a1aa'
  '#c7d2fe' = '#e4e4e7'
  '#6d28d9' = '#27272a'
  '#8b5cf6' = '#52525b'
  '#7c3aed' = '#3f3f46'
  '#4338ca' = '#18181b'
  '#faf9ff' = '#f5f5f5'
  '#f3eefe' = '#f0f0f0'
  '#f7f5fc' = '#f5f5f5'
  '#f5f3ff' = '#f4f4f5'
  '#ede9fe' = '#f4f4f5'
}

foreach ($key in $hexMap.Keys) {
  $content = [System.Text.RegularExpressions.Regex]::Replace($content, [System.Text.RegularExpressions.Regex]::Escape($key), $hexMap[$key], [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
}

Set-Content -Path $path -Value $content -Encoding UTF8 -NoNewline
Write-Host "Done"
