$path = "e:\Proyectos\NeoWeb\src\app\features\servicios\servicios-shared.component.css"
$lines = Get-Content -Path $path -Encoding UTF8

# 0-based inclusive ranges considered "dark background" (use white-based rgba)
$darkRanges = @(
  @{start=22; end=364},     # Hero
  @{start=823; end=1142},   # Features (dark navy/violet bg)
  @{start=1545; end=1884},  # Fullcode (dark slate bg)
  @{start=1902; end=1916},  # .cta-final-background base (defaults to dark variant)
  @{start=1936; end=1939},  # .section-dark .cta-final-pattern
  @{start=1972; end=1977},  # .section-dark .cta-final-badge
  @{start=2113; end=2116},  # .section-dark .cta-final-button-secondary
  @{start=2125; end=2127},  # .section-dark .cta-final-button-secondary:hover
  @{start=2148; end=2150},  # .section-dark .cta-final-features
  @{start=2172; end=2174},  # .section-dark .cta-final-feature .material-icons
  @{start=2190; end=2192}   # .section-dark .cta-final-feature:hover .material-icons
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
