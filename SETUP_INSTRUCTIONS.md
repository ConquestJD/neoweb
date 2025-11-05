# 🎯 Instrucciones de Configuración - NeoWeb

## ✅ Lo que YA está configurado

El proyecto está **100% funcional** con:
- ✅ Angular 20 configurado
- ✅ TailwindCSS instalado y funcionando
- ✅ Angular Material instalado
- ✅ Todas las páginas creadas
- ✅ Todos los componentes compartidos
- ✅ Rutas con lazy loading configuradas
- ✅ Estilos globales con glassmorphism y gradientes
- ✅ Diseño responsive completo
- ✅ Navbar y Footer funcionales

## 🚀 Cómo ejecutar el proyecto

```bash
# 1. Instalar dependencias (si aún no lo hiciste)
npm install

# 2. Iniciar servidor de desarrollo
npm start

# 3. Abrir en el navegador
# http://localhost:4200
```

## 🎬 Integración de Spline 3D (IMPORTANTE)

### Paso 1: Crear tu escena 3D
1. Ve a [https://spline.design/](https://spline.design/)
2. Crea una cuenta gratuita
3. Diseña tu escena 3D o usa una plantilla
4. Exporta tu proyecto y obtén la URL de publicación

### Paso 2: Integrar en el proyecto
Abre el archivo `src/app/features/home/home.component.html` y busca esta línea (aproximadamente línea 7):

```html
<app-hero
  [showSpline]="true"
  title="Creamos páginas web que impulsan tu negocio al siguiente nivel."
  subtitle="Diseños potentes, modernos y optimizados para atraer clientes."
  [showButtons]="true"
  splineUrl="https://my.spline.design/untitled-d3e2585c5b29f37372d9b8abf55c2c7c/">
</app-hero>
```

Reemplaza el `splineUrl` con la URL de tu escena de Spline.

**Ejemplo de URLs válidas de Spline:**
```
https://my.spline.design/untitled-d3e2585c5b29f37372d9b8abf55c2c7c/
https://prod.spline.design/abc123def456/scene.splinecode
```

### Nota sobre Spline
- La integración de Spline **SOLO está en la página de Inicio (Home)**
- Es la única página con modelo 3D, como solicitaste
- Si no tienes una escena de Spline aún, el sitio mostrará un placeholder

## 🎨 Personalización de Colores

### Opción 1: Editar variables CSS
Archivo: `src/styles.css` (líneas 10-14)

```css
:root {
  --neo-blue: #004CFF;      /* Cambia este azul */
  --neo-violet: #7A5AF8;    /* Cambia este violeta */
  --neo-light: #CFE2FF;     /* Cambia este celeste */
  --neo-dark: #1C1C1C;      /* Cambia este gris oscuro */
}
```

### Opción 2: Editar configuración de Tailwind
Archivo: `tailwind.config.js` (líneas 8-13)

```javascript
colors: {
  'neo-blue': '#004CFF',
  'neo-violet': '#7A5AF8',
  'neo-light': '#CFE2FF',
  'neo-dark': '#1C1C1C',
}
```

## 📝 Contenido que debes personalizar

### 1. Información de Contacto
**Archivo:** `src/app/shared/components/footer/footer.component.ts`

```typescript
socialLinks = [
  { 
    name: 'Facebook', 
    url: 'https://facebook.com/neoweb',  // ← Cambia esto
    icon: 'facebook'
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/neoweb', // ← Cambia esto
    icon: 'instagram'
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/51999999999',    // ← Cambia esto
    icon: 'whatsapp'
  }
];
```

**También en:** `src/app/features/contacto/contacto.component.ts`

### 2. Precios de Servicios
**Archivo:** `src/app/shared/components/pricing-table/pricing-table.component.ts`

Ajusta los precios según tus tarifas:
```typescript
{
  name: 'Landing Page',
  price: 'S/400',  // ← Cambia el precio
  ...
}
```

### 3. Proyectos del Portafolio
**Archivo:** `src/app/features/portafolio/portafolio.component.ts`

Reemplaza los proyectos de ejemplo con tus proyectos reales:
```typescript
projects = [
  {
    title: 'Tu Proyecto',
    category: 'E-commerce',
    imageUrl: 'URL_DE_TU_IMAGEN',
    description: 'Descripción del proyecto',
    technologies: ['Angular', 'TailwindCSS']
  }
]
```

### 4. Artículos del Blog
**Archivo:** `src/app/features/blog/blog.component.ts`

Agrega tus artículos reales.

### 5. Información del Equipo
**Archivo:** `src/app/features/nosotros/nosotros.component.ts`

Actualiza la información del equipo con datos reales.

## 🖼️ Imágenes y Assets

### Imágenes de ejemplo
Actualmente el proyecto usa imágenes de Unsplash. Para usar tus propias imágenes:

1. Coloca tus imágenes en `public/images/`
2. Reemplaza las URLs en los componentes:

```typescript
// Antes
imageUrl: 'https://images.unsplash.com/photo-...'

// Después
imageUrl: '/images/tu-imagen.jpg'
```

### Favicon
Reemplaza el archivo `public/favicon.ico` con tu propio favicon.

## 🔧 Configuraciones Opcionales

### Google Analytics
Para agregar Google Analytics, edita `src/index.html` y agrega antes del cierre de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Meta Tags Adicionales
Para mejorar SEO, puedes agregar más meta tags en `src/index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tudominio.com/">
<meta property="og:title" content="NeoWeb - Desarrollo Web">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="https://tudominio.com/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://tudominio.com/">
<meta property="twitter:title" content="NeoWeb - Desarrollo Web">
<meta property="twitter:description" content="Tu descripción">
<meta property="twitter:image" content="https://tudominio.com/twitter-image.jpg">
```

## 🚀 Build para Producción

```bash
# Build optimizado para producción
npm run build

# Los archivos se generarán en la carpeta dist/
# Sube el contenido de dist/ a tu servidor
```

### Servicios de Hosting Recomendados
- **Vercel** - Deploy automático con Git
- **Netlify** - Fácil configuración
- **Firebase Hosting** - Incluye CDN
- **AWS S3 + CloudFront** - Escalable

## 📱 Testing en Diferentes Dispositivos

```bash
# Para acceder desde otros dispositivos en tu red local
npm start -- --host 0.0.0.0

# Luego accede desde tu móvil/tablet usando:
# http://TU_IP_LOCAL:4200
```

## ⚠️ Problemas Comunes

### TailwindCSS no aplica estilos
```bash
# Asegúrate de que el archivo tailwind.config.js esté en la raíz
# Verifica que src/styles.css tenga las directivas @tailwind
# Reinicia el servidor de desarrollo
```

### Material Icons no aparecen
Verifica que en `src/index.html` esté esta línea:
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

### Errores de compilación
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

## 📞 Soporte

Si encuentras algún problema o tienes dudas:
1. Revisa la documentación de Angular: [https://angular.dev](https://angular.dev)
2. Consulta la documentación de TailwindCSS: [https://tailwindcss.com](https://tailwindcss.com)
3. Revisa este archivo de instrucciones

## 🎉 ¡Listo para Producción!

Tu sitio web está **completamente funcional** y listo para ser personalizado con tu contenido real. Solo necesitas:

1. ✅ Agregar tu escena de Spline 3D
2. ✅ Personalizar colores (opcional)
3. ✅ Actualizar información de contacto
4. ✅ Agregar tus proyectos reales
5. ✅ Reemplazar imágenes de ejemplo
6. ✅ Build y deploy

---

**¡Disfruta tu nuevo sitio web profesional! 🚀**

