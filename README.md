# 🚀 NeoWeb - Sitio Web Profesional

Sitio web moderno y profesional para **NeoWeb**, empresa dedicada al desarrollo de páginas web para PyMES y negocios. Construido con **Angular 20**, **TailwindCSS** y **Angular Material**.

## ✨ Características Principales

- 🎨 **Diseño Bento UI** - Layout moderno con bloques visuales dinámicos
- 💎 **Glassmorphism** - Efectos de transparencia y blur elegantes
- 🌈 **Gradientes Animados** - Transiciones suaves entre azul, violeta y celeste
- 🎭 **Animaciones Fluidas** - Transiciones y efectos hover en 3D
- 📱 **100% Responsive** - Optimizado para mobile, tablet, desktop y 1920x1080
- ⚡ **Lazy Loading** - Carga optimizada de módulos por ruta
- 🎯 **SEO Optimizado** - Títulos y metadatos configurados
- 🎬 **Integración Spline 3D** - Escena 3D interactiva en Home (sin zoom en scroll)
- 🔄 **Carrusel Infinito** - Movimiento constante con animación CSS
- 📜 **Scroll Animations** - Elementos que aparecen al hacer scroll

## 🏗️ Estructura del Proyecto

```
src/app/
├── core/                      # Servicios globales y configuración
├── shared/                    # Componentes reutilizables
│   └── components/
│       ├── navbar/           # Barra de navegación
│       ├── footer/           # Pie de página
│       ├── hero/             # Hero con soporte Spline 3D
│       ├── card-service/     # Tarjeta de servicio
│       ├── card-project/     # Tarjeta de proyecto
│       ├── testimonial/      # Tarjeta de testimonio
│       ├── bento-layout/     # Layout tipo Bento
│       ├── pricing-table/    # Tabla de precios
│       └── contact-links/    # Enlaces de contacto
└── features/                  # Páginas del sitio
    ├── home/                 # Página principal (con Spline 3D)
    ├── servicios/            # Servicios y precios
    ├── portafolio/           # Proyectos realizados
    ├── nosotros/             # Sobre la empresa
    ├── blog/                 # Blog y artículos
    ├── contacto/             # Contacto (sin formulario)
    └── error404/             # Página de error 404
```

## 🎨 Paleta de Colores

- **Azul Principal**: `#004CFF`
- **Violeta Secundario**: `#7A5AF8`
- **Celeste Claro**: `#CFE2FF`
- **Gris Oscuro**: `#1C1C1C`

## 📄 Páginas del Sitio

### 1. **Inicio** (`/inicio`) - **REDISEÑADO** ⭐
- Hero principal con **Spline 3D interactivo** (sin zoom en scroll)
- Narrativa "Por qué tu negocio necesita una web" con scroll animations
- **Carrusel infinito** de portafolio en movimiento constante
- Presentación de NeoWeb como nueva agencia
- **Ofertas de lanzamiento** con descuentos del 33%
- CTA final con redes sociales grandes

### 2. **Servicios** (`/servicios`)
- 4 planes principales:
  - Landing Page (desde S/400)
  - Sitio Web Profesional (desde S/1,000)
  - E-commerce (desde S/2,000)
  - Full Digital (desde S/4,000)
- Tabla de precios detallada
- Tabla comparativa de planes

### 3. **Portafolio** (`/portafolio`)
- Grid de proyectos con filtros por categoría
- Efecto hover en tarjetas
- Estadísticas de la empresa

### 4. **Nosotros** (`/nosotros`)
- Historia de la empresa
- Misión y Visión
- Valores corporativos
- Equipo de trabajo
- Tecnologías utilizadas

### 5. **Blog** (`/blog`)
- Artículos y tutoriales
- Filtros por categoría
- Newsletter integrado

### 6. **Contacto** (`/contacto`)
- Enlaces a redes sociales (Facebook, Instagram, WhatsApp)
- Información de contacto
- Horarios de atención
- FAQ rápido

### 7. **Error 404** (`/404`)
- Página de error personalizada
- Enlaces útiles

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd NeoWeb

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Comandos Disponibles

```bash
# Desarrollo
npm start           # Inicia servidor de desarrollo

# Construcción
npm run build      # Build de producción

# Testing
npm test           # Ejecuta pruebas unitarias

# Watch mode
npm run watch      # Build en modo watch
```

## 🎭 Integración de Spline 3D

Para agregar tu escena de Spline 3D en la página de inicio:

1. Ve a [Spline](https://spline.design/)
2. Crea o importa tu escena 3D
3. Exporta y obtén la URL de tu escena
4. En `src/app/features/home/home.component.ts`, actualiza la propiedad del HeroComponent:

```typescript
<app-hero
  [showSpline]="true"
  splineUrl="TU_URL_DE_SPLINE_AQUI"
  ...
</app-hero>
```

## 🎨 Personalización de Estilos

### Modificar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  'neo-blue': '#004CFF',      // Tu azul
  'neo-violet': '#7A5AF8',    // Tu violeta
  'neo-light': '#CFE2FF',     // Tu celeste
  'neo-dark': '#1C1C1C',      // Tu gris oscuro
}
```

### Modificar Fuentes

Las fuentes se importan desde Google Fonts en `src/styles.css`. Para cambiarlas:

1. Actualiza la URL de importación
2. Modifica las clases en `tailwind.config.js`

## 🔧 Tecnologías Utilizadas

- **Angular 20** - Framework principal
- **TailwindCSS** - Estilos y diseño
- **Angular Material** - Componentes UI
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **Angular Router** - Navegación con lazy loading

## 📱 Características Responsive

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🎯 SEO y Performance

- ✅ Títulos optimizados por página
- ✅ Meta descripciones
- ✅ Lazy loading de rutas
- ✅ Imágenes optimizadas
- ✅ Smooth scroll
- ✅ Scrollbar personalizado

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Importantes

### Glassmorphism
Los efectos de glassmorphism están definidos en `src/styles.css`:
- `.glass` - Efecto básico
- `.glass-card` - Tarjetas con efecto glass y hover

### Animaciones
Las animaciones personalizadas están en:
- `src/styles.css` - Globales
- Archivos CSS de cada componente - Específicas

### Bento Layout
El sistema de grillas Bento está configurado en:
- `src/app/shared/components/bento-layout/`
- Clase `.bento-grid` en `src/styles.css`

## 📞 Soporte

Para soporte o consultas:
- 📧 Email: hola@neoweb.com
- 📱 WhatsApp: +51 999 999 999
- 🌐 Web: [www.neoweb.com](https://neoweb.com)

## 📄 Licencia

Este proyecto es propiedad de NeoWeb. Todos los derechos reservados.

---

Desarrollado con ❤️ por el equipo de **NeoWeb**
