# Guía de Configuración de Vistas Previas para Redes Sociales

## Problema Resuelto
Al compartir tu página web en WhatsApp, Facebook, Twitter u otras redes sociales, ahora aparecerá una vista previa con imagen, título y descripción.

## Meta Tags Agregadas

### ✅ Open Graph (Facebook, WhatsApp, LinkedIn)
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://neoweb.website/">
<meta property="og:title" content="NeoWeb - Desarrollo de Páginas Web Profesionales">
<meta property="og:description" content="...">
<meta property="og:image" content="https://neoweb.website/assets/hero.png">
```

### ✅ Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:image" content="...">
```

## Cómo Probar

### 1. WhatsApp Desktop/Web
1. Comparte tu URL en un chat
2. Deberías ver la vista previa con imagen y descripción

### 2. Facebook
1. Ve a: https://developers.facebook.com/tools/debug/
2. Pega tu URL y haz clic en "Debug"
3. Verifica que aparezca la imagen correcta

### 3. Twitter
1. Ve a: https://cards-dev.twitter.com/validator
2. Pega tu URL y valida
3. Verás cómo se verá la preview

### 4. LinkedIn
1. Comparte tu URL en LinkedIn
2. La preview debería aparecer automáticamente

## Requisitos de la Imagen

### Tamaños Recomendados:
- **WhatsApp/Facebook**: 1200x630 píxeles
- **Twitter**: 1200x675 píxeles
- **LinkedIn**: 1200x627 píxeles

### Formato:
- JPG, PNG o WebP
- Tamaño máximo: 8MB
- Tamaño recomendado: < 300KB

### Actualmente usando:
- `assets/hero.png` - Imagen principal del hero

## Personalización

### Cambiar la URL de la imagen:
```html
<!-- Edita esta línea en index.html -->
<meta property="og:image" content="https://neoweb.website/assets/hero.png">
```

### Crear una imagen OG dedicada (Recomendado):
1. Crea una imagen de 1200x630px con:
   - Logo de NeoWeb
   - Texto descriptivo
   - Colores de tu marca
2. Guárdala como `og-image.png` en `public/assets/`
3. Actualiza la meta tag:
```html
<meta property="og:image" content="https://neoweb.website/assets/og-image.png">
```

## Consejos

### ✅ Mejores Prácticas:
1. **Usa imagen específica para OG**: No uses la misma imagen del hero
2. **Texto legible**: Incluye tu mensaje principal en la imagen
3. **Colores de marca**: Usa los colores de tu identidad visual
4. **Calls to Action**: Incluye un CTA visual en la imagen
5. **Tamaño optimizado**: Comprime la imagen para carga rápida

### ❌ Evita:
- Imágenes muy pequeñas
- Texto ilegible en vista previa
- Imágenes genéricas sin branding
- Archivos muy pesados

## Herramientas Útiles

### Para crear imágenes OG:
1. **Canva**: https://www.canva.com/create/facebook-cover/
2. **PosterMyWall**: https://www.postermywall.com/
3. **Banner Maker**: https://bannermaker.com/

### Para verificar:
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Comandos Útiles

### Limpiar caché de Facebook:
Si ya compartiste la URL antes, Facebook puede tener caché:
1. Ve a Facebook Debugger
2. Pega tu URL
3. Haz clic en "Scrape Again"

### Actualizar preview:
```bash
# Después de hacer cambios:
ng build --configuration=production
# Sube los archivos a Hostinger
```

## Verificación Final

Después del deployment:
1. ✅ Construir: `ng build --configuration=production`
2. ✅ Subir a Hostinger
3. ✅ Probar compartiendo en WhatsApp
4. ✅ Verificar en Facebook Debugger
5. ✅ Validar en Twitter Card Validator

## Resultado Esperado

Cuando compartas tu URL, deberías ver:
- 🖼️ Imagen atractiva de tu marca
- 📝 Título descriptivo
- 📄 Descripción clara del servicio
- 🔗 URL visible
- 🏢 Nombre del sitio

## Nota Importante

**Actualiza la URL**: En las meta tags, reemplaza `https://neoweb.website/` por tu dominio real si es diferente.
