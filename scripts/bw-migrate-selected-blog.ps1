$path = "e:\Proyectos\NeoWeb\src\app\features\selected-blog\selected-blog.css"
$lines = Get-Content -Path $path -Encoding UTF8

$darkRanges = @(
  @{start=260; end=283},   # article-cta (261-284 in 1-index)
  @{start=1061; end=1400}  # cta-final-section (1062-1401 in 1-index)
)

function InDarkRange($idx) {
  foreach ($r in $darkRanges) {
    if ($idx -ge $r.start -and $idx -le $r.end) { return $true }
  }
  return $false
}

$rgbaFamilies = @('139,\s*92,\s*246', '107,\s*70,\s*193', '124,\s*58,\s*237', '99,\s*102,\s*241', '196,\s*181,\s*253')

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
  '#6b46c1' = '#27272a'
  '#8b5cf6' = '#52525b'
  '#cfe2ff' = '#e4e4e7'
}

foreach ($key in $hexMap.Keys) {
  $content = [System.Text.RegularExpressions.Regex]::Replace($content, [System.Text.RegularExpressions.Regex]::Escape($key), $hexMap[$key], [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
}

$content = $content -replace 'var\(--neo-blue\)', '#27272a'
$content = $content -replace 'var\(--neo-violet\)', '#52525b'
$content = $content -replace 'rgba\(0,\s*76,\s*255,\s*0\.2\)', 'rgba(255, 255, 255, 0.2)'
$content = $content -replace 'rgba\(0,\s*76,\s*255,\s*0\.4\)', 'rgba(0, 0, 0, 0.3)'

Set-Content -Path $path -Value $content -Encoding UTF8 -NoNewline
Write-Host "Done"
