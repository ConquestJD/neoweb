# Guía de Optimización de Imágenes

## Problema Actual
Lighthouse reporta que puedes ahorrar **522 KiB** optimizando las imágenes:
- Las imágenes reason-1 a reason-4 son demasiado grandes (1536x1024)
- La imagen hero.png es grande (1024x1024)
- El favicon neoweb.ico también es grande (253 KiB)

## Soluciones Implementadas en Código

✅ **Preload de hero.png:** Agregado en index.html
✅ **fetchpriority="high":** Agregado a la imagen hero
✅ **loading="eager":** Para la imagen principal
✅ **width/height:** Definidos para evitar CLS
✅ **Caché mejorada:** Configurada en .htaccess

## Optimizaciones Manuales Requeridas

### 1. Convertir PNG a WebP

**Imágenes a optimizar:**
- `assets/reason-1.png` (1536x1024 → 100-150 KiB)
- `assets/reason-2.png` (1536x1024 → 100-150 KiB)
- `assets/reason-3.png` (1536x1024 → 100-150 KiB)
- `assets/reason-4.png` (1536x1024 → 100-150 KiB)
- `assets/hero.png` (1024x1024 → 30-40 KiB)
- `neoweb.ico` (256x256 → ~10 KiB)

**Herramientas recomendadas:**
1. **Squoosh.app** (https://squoosh.app/) - Online, gratis
2. **ImageOptim** - Mac
3. **TinyPNG** (https://tinypng.com/) - Online

### 2. Proceso de Optimización

**Para Squoosh.app:**
1. Sube la imagen
2. Selecciona formato **WebP** (calidad 75-85)
3. Descarga la imagen optimizada
4. Renombra a `.webp`
5. Reemplaza en el proyecto

**Ejemplo:**
```bash
reason-1.png (196 KiB) → reason-1.webp (30-50 KiB)
reason-2.png (159 KiB) → reason-2.webp (25-45 KiB)
reason-3.png (80 KiB) → reason-3.webp (20-35 KiB)
reason-4.png (159 KiB) → reason-4.webp (25-45 KiB)
hero.png (73 KiB) → hero.webp (20-30 KiB)
neoweb.ico (253 KiB) → neoweb.ico (10 KiB)
```

### 3. Actualizar Referencias en el Código

**Archivos a actualizar:**
- `src/app/features/home/home.component.html`
- `src/app/features/servicios/servicios.component.html`
- Referencias en TypeScript (si existen)

**Cambiar:**
```html
<img src="assets/reason-1.png">
```
**Por:**
```html
<img src="assets/reason-1.webp">
```

**Para soporte múltiple (fallback):**
```html
<picture>
  <source srcset="assets/reason-1.webp" type="image/webp">
  <img src="assets/reason-1.png" alt="Description">
</picture>
```

### 4. Optimizar Favicon

**Herramienta:** https://favicon.io/favicon-converter/

**Proceso:**
1. Sube tu logo actual
2. Descarga el paquete generado
3. Reemplaza `neoweb.ico` en `public/` y `src/`

## Beneficios Esperados

### Antes:
- Total imágenes: ~820 KiB
- LCP: 1.7s
- Rendimiento: 87

### Después:
- Total imágenes: ~180-250 KiB (ahorro de ~570 KiB)
- LCP: ~1.2s (mejora de 0.5s)
- Rendimiento: 90+ ⭐

## Prioridad de Optimización

### Alta Prioridad (Impacto en LCP):
1. ✅ `hero.png` - Ya optimizado en código
2. `reason-1.png` a `reason-4.png` - Optimizar a WebP

### Media Prioridad:
3. `neoweb.ico` - Reducir tamaño
4. Otras imágenes de servicios

### Opcional:
5. Imágenes del portafolio
6. Imágenes del blog

## Verificación

Después de optimizar:
1. **Construir:** `ng build --configuration=production`
2. **Ejecutar Lighthouse:** Probar `/inicio`
3. **Verificar métricas:**
   - LCP debería bajar a ~1.2s
   - Tamaño total de imágenes < 250 KiB
   - Rendimiento debería subir a 90+

## Herramientas Adicionales

- **Chrome DevTools:** Network tab para ver tamaños
- **Lighthouse CI:** Para automatizar pruebas
- **WebPageTest:** Para análisis profundo
- **PageSpeed Insights:** Google oficial

## Notas Importantes

1. **WebP no es universal:** Usa `<picture>` con fallback PNG
2. **Calidad vs. Tamaño:** Prueba diferentes calidades (70-90)
3. **Responsive:** Considera usar imágenes responsivas con `srcset`
4. **Caché:** Las optimizaciones ya están en .htaccess

## Script de Conversión Rápida

Si tienes ImageMagick instalado:
```bash
convert assets/reason-1.png -quality 80 assets/reason-1.webp
convert assets/hero.png -quality 80 assets/hero.webp
```

## Resultado Final

Con estas optimizaciones podrás:
- ✅ Pasar el score de Lighthouse de 87 a 90+
- ✅ Mejorar el LCP de 1.7s a ~1.2s
- ✅ Reducir el peso total en ~570 KiB
- ✅ Mejorar la experiencia del usuario
