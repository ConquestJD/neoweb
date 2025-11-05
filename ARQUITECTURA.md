# 🏗️ Arquitectura del Proyecto NeoWeb

## 📋 Tabla de Contenidos
1. [Arquitectura General](#arquitectura-general)
2. [Patrones de Diseño](#patrones-de-diseño)
3. [Estructura de Componentes](#estructura-de-componentes)
4. [Sistema de Estilos](#sistema-de-estilos)
5. [Routing y Navegación](#routing-y-navegación)
6. [Optimizaciones](#optimizaciones)

---

## 🎯 Arquitectura General

### Principios Aplicados
- **Separation of Concerns**: Separación clara entre features, shared y core
- **DRY (Don't Repeat Yourself)**: Componentes reutilizables
- **Single Responsibility**: Cada componente tiene una responsabilidad única
- **Standalone Components**: Uso de componentes standalone de Angular (nueva arquitectura)

### Estructura de Carpetas

```
src/app/
│
├── core/                     # Servicios globales (guards, interceptors, servicios)
│   └── (Preparado para futuras expansiones)
│
├── shared/                   # Componentes y utilidades compartidas
│   ├── components/          # Componentes reutilizables
│   │   ├── navbar/         # Navegación global
│   │   ├── footer/         # Footer global
│   │   ├── hero/           # Hero section (soporta Spline 3D)
│   │   ├── card-service/   # Tarjeta de servicio
│   │   ├── card-project/   # Tarjeta de proyecto
│   │   ├── testimonial/    # Componente de testimonio
│   │   ├── bento-layout/   # Layout tipo Bento
│   │   ├── pricing-table/  # Tabla de precios
│   │   └── contact-links/  # Enlaces de contacto
│   └── models/             # Interfaces y tipos (preparado)
│
└── features/                # Páginas y módulos por funcionalidad
    ├── home/               # Página principal
    ├── servicios/          # Página de servicios
    ├── portafolio/         # Página de portafolio
    ├── nosotros/           # Página sobre nosotros
    ├── blog/               # Página de blog
    ├── contacto/           # Página de contacto
    └── error404/           # Página de error 404
```

---

## 🎨 Patrones de Diseño Implementados

### 1. **Component Pattern**
Cada componente es standalone y auto-contenido:

```typescript
@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
```

### 2. **Smart & Presentational Components**

**Smart Components** (Features):
- Manejan la lógica de negocio
- Obtienen datos
- Ejemplo: `HomeComponent`, `PortafolioComponent`

**Presentational Components** (Shared):
- Solo presentan datos
- Reciben inputs y emiten outputs
- Ejemplo: `CardServiceComponent`, `TestimonialComponent`

### 3. **Input/Output Pattern**

```typescript
export class CardServiceComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = 'web';
  @Input() price = '';
  @Input() features: string[] = [];
  @Input() gradient = 'from-neo-blue to-neo-violet';
}
```

### 4. **Lazy Loading Pattern**
Carga bajo demanda para optimizar el rendimiento:

```typescript
{
  path: 'servicios',
  loadComponent: () => import('./features/servicios/servicios.component')
    .then(m => m.ServiciosComponent)
}
```

---

## 🧩 Estructura de Componentes

### Componentes Compartidos

#### NavbarComponent
**Responsabilidades:**
- Navegación global
- Menú responsive (hamburger en móvil)
- Efecto glassmorphism en scroll
- Highlights de ruta activa

**Características:**
- Sticky positioning
- Smooth transitions
- Mobile-first design

#### FooterComponent
**Responsabilidades:**
- Enlaces rápidos
- Información de contacto
- Redes sociales
- Copyright

**Características:**
- Multi-column layout responsive
- Efecto glassmorphism
- Gradiente sutil de fondo

#### HeroComponent (★ Especial)
**Responsabilidades:**
- Hero section principal
- Soporte para Spline 3D (solo en Home)
- Stats/características
- CTAs principales

**Props importantes:**
```typescript
@Input() showSpline = false;     // Solo true en Home
@Input() splineUrl = '';          // URL de Spline
@Input() title = '';
@Input() subtitle = '';
@Input() showButtons = true;
```

#### CardServiceComponent
**Responsabilidades:**
- Mostrar servicios
- Efectos hover 3D
- Glassmorphism

**Props:**
- `title`, `description`, `icon`, `price`
- `features: string[]`
- `gradient` para personalización

#### CardProjectComponent
**Responsabilidades:**
- Mostrar proyectos del portafolio
- Overlay con CTA en hover
- Tecnologías utilizadas

#### TestimonialComponent
**Responsabilidades:**
- Mostrar testimonios de clientes
- Rating con estrellas
- Avatar del cliente

#### BentoLayoutComponent
**Responsabilidades:**
- Contenedor para Bento UI
- Grid system responsive
- Proyección de contenido con `<ng-content>`

#### PricingTableComponent
**Responsabilidades:**
- Mostrar los 4 planes de servicio
- Badge "Recomendado"
- CTA por plan

#### ContactLinksComponent
**Responsabilidades:**
- Enlaces a redes sociales
- Botones grandes con iconos
- Efectos glassmorphism

---

## 🎨 Sistema de Estilos

### Arquitectura CSS

```
src/
├── styles.css              # Estilos globales
├── tailwind.config.js      # Configuración de Tailwind
└── app/
    └── components/
        └── *.css           # Estilos específicos por componente
```

### Niveles de Estilos

#### 1. **Global Styles** (`styles.css`)
- Variables CSS
- Clases utilitarias (glassmorphism, gradientes)
- Scrollbar personalizado
- Animaciones globales

#### 2. **Tailwind Utilities**
Clases utilitarias de Tailwind para:
- Layout (flex, grid)
- Spacing (margin, padding)
- Colors
- Typography
- Responsive design

#### 3. **Component Styles**
Estilos específicos que no se pueden lograr con Tailwind:
- Animaciones complejas
- Pseudo-elementos especiales
- Estados específicos

### Clases Personalizadas Principales

#### `.glass`
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

#### `.glass-card`
```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}
```

#### `.gradient-animated`
```css
.gradient-animated {
  background: linear-gradient(135deg, #004CFF, #7A5AF8, #CFE2FF, #004CFF);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
```

#### `.bento-grid`
```css
.bento-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

### Paleta de Colores

**Primarios:**
- `neo-blue`: #004CFF
- `neo-violet`: #7A5AF8

**Secundarios:**
- `neo-light`: #CFE2FF
- `neo-dark`: #1C1C1C

**Uso:**
```html
<!-- TailwindCSS -->
<div class="bg-neo-blue text-neo-light">...</div>

<!-- CSS Variables -->
<style>
  .custom {
    background-color: var(--neo-blue);
  }
</style>
```

---

## 🛣️ Routing y Navegación

### Configuración de Rutas

```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { 
    path: 'inicio',
    loadComponent: () => import('./features/home/home.component')
      .then(m => m.HomeComponent),
    title: 'Inicio - NeoWeb'
  },
  // ... más rutas
  { path: '**', redirectTo: '/404' }
];
```

### Características del Routing

1. **Lazy Loading**: Todas las rutas cargan componentes bajo demanda
2. **Títulos SEO**: Cada ruta tiene su título
3. **404 Handling**: Catch-all route al final
4. **Redirect Default**: Redirige raíz a /inicio

### Navegación Programática

```typescript
// En cualquier componente
constructor(private router: Router) {}

navigateTo(route: string) {
  this.router.navigate([route]);
}
```

---

## ⚡ Optimizaciones

### Performance

#### 1. **Lazy Loading**
- Todas las rutas usan loadComponent
- Reduce el bundle inicial
- Mejora el First Contentful Paint (FCP)

#### 2. **Standalone Components**
- No requieren NgModules
- Tree-shaking más efectivo
- Bundles más pequeños

#### 3. **OnPush Change Detection** (Preparado para implementar)
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

#### 4. **Imágenes Lazy Loading**
```html
<img loading="lazy" src="..." alt="...">
```

### SEO

#### Meta Tags
- Títulos únicos por ruta
- Meta descriptions en index.html
- Soporte para Open Graph (preparado)

#### Semantic HTML
- Uso correcto de tags: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`

#### Accessibility
- ARIA labels
- Roles semánticos
- Contraste de colores adecuado

---

## 🔄 Flujo de Datos

### Patrón Unidireccional

```
Parent Component (Smart)
    ↓ @Input()
Child Component (Presentational)
    ↓ @Output()
Parent Component (Smart)
```

### Ejemplo Real

```typescript
// Parent (PortafolioComponent)
projects = [...];

// Template
<app-card-project
  *ngFor="let project of projects"
  [title]="project.title"
  [imageUrl]="project.imageUrl">
</app-card-project>

// Child (CardProjectComponent)
@Input() title = '';
@Input() imageUrl = '';
```

---

## 🎯 Mejores Prácticas Implementadas

### Código

✅ **Tipado Fuerte**: Todo está tipado con TypeScript
✅ **Interfaces**: Tipos definidos para datos estructurados
✅ **Naming Conventions**: Nombres descriptivos y consistentes
✅ **Single Responsibility**: Un componente = una responsabilidad
✅ **DRY**: No repetir código, usar componentes reutilizables

### Estructura

✅ **Feature-based**: Organización por funcionalidad
✅ **Shared Components**: Componentes reutilizables aislados
✅ **Standalone**: Nueva arquitectura de Angular
✅ **Lazy Loading**: Optimización de carga

### Estilos

✅ **Mobile First**: Diseño pensado primero para móviles
✅ **Utility Classes**: TailwindCSS para rapidez
✅ **Component Scoping**: Estilos específicos por componente
✅ **Design System**: Paleta de colores y tokens consistentes

---

## 🚀 Próximas Mejoras Sugeridas

### Funcionalidades
- [ ] Implementar formulario de contacto real
- [ ] Agregar sistema de autenticación (si es necesario)
- [ ] Implementar CMS headless para blog
- [ ] Agregar buscador global
- [ ] Implementar PWA

### Optimizaciones
- [ ] Implementar Server-Side Rendering (SSR)
- [ ] Agregar Service Workers
- [ ] Optimizar imágenes con next-gen formats (WebP)
- [ ] Implementar cache strategies
- [ ] Agregar loading skeletons

### Testing
- [ ] Tests unitarios con Jasmine/Jest
- [ ] Tests e2e con Cypress
- [ ] Tests de accesibilidad
- [ ] Tests de performance

---

## 📚 Recursos Adicionales

### Documentación
- [Angular Docs](https://angular.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Angular Material](https://material.angular.io)

### Herramientas
- [Spline](https://spline.design) - Modelos 3D
- [Figma](https://figma.com) - Diseño UI/UX
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoría de performance

---

**Arquitectura diseñada por NeoWeb Team** 🚀

