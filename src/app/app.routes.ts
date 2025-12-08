import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio - NeoWeb | Desarrollo de Páginas Web'
  },
  {
    path: 'servicios/pagina-web',
    loadComponent: () => import('./features/servicios/pagina-web/pagina-web.component').then(m => m.PaginaWebComponent),
    title: 'Página Web - NeoWeb | Desarrollo Web Profesional'
  },
  {
    path: 'servicios/landing-page',
    loadComponent: () => import('./features/servicios/landing-page/landing-page.component').then(m => m.LandingPageComponent),
    title: 'Landing Page - NeoWeb | Páginas de Alto Rendimiento'
  },
  {
    path: 'servicios/tienda-virtual',
    loadComponent: () => import('./features/servicios/tienda-virtual/tienda-virtual.component').then(m => m.TiendaVirtualComponent),
    title: 'Tienda Virtual - NeoWeb | E-commerce Completo'
  },
  {
    path: 'servicios/google-ads',
    loadComponent: () => import('./features/servicios/google-ads/google-ads.component').then(m => m.GoogleAdsComponent),
    title: 'Google Ads - NeoWeb | Publicidad en Google'
  },
  {
    path: 'servicios/marketing-digital',
    loadComponent: () => import('./features/servicios/marketing-digital/marketing-digital.component').then(m => m.MarketingDigitalComponent),
    title: 'Marketing Digital - NeoWeb | Estrategias Digitales'
  },
  {
    path: 'servicios/rediseno-paginas-web',
    loadComponent: () => import('./features/servicios/rediseno-paginas-web/rediseno-paginas-web.component').then(m => m.RedisenoPaginasWebComponent),
    title: 'Rediseño de Páginas Web - NeoWeb | Modernización Web'
  },
  {
    path: 'servicios/aplicaciones-moviles',
    loadComponent: () => import('./features/servicios/aplicaciones-moviles/aplicaciones-moviles.component').then(m => m.AplicacionesMovilesComponent),
    title: 'Aplicaciones Móviles - NeoWeb | Apps iOS y Android'
  },
  {
    path: 'servicios/consultoria-seo',
    loadComponent: () => import('./features/servicios/consultoria-seo/consultoria-seo.component').then(m => m.ConsultoriaSeoComponent),
    title: 'Consultoría SEO - NeoWeb | Posicionamiento en Google'
  },
  {
    path: 'servicios/digitalizacion-procesos',
    loadComponent: () => import('./features/servicios/digitalizacion-procesos/digitalizacion-procesos.component').then(m => m.DigitalizacionProcesosComponent),
    title: 'Digitalización de Procesos - NeoWeb | Automatización'
  },
  {
    path: 'portafolio',
    loadComponent: () => import('./features/portafolio/portafolio.component').then(m => m.PortafolioComponent),
    title: 'Portafolio - NeoWeb | Nuestros Proyectos'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/nosotros/nosotros.component').then(m => m.NosotrosComponent),
    title: 'Nosotros - NeoWeb | Conoce Nuestro Equipo'
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent),
    title: 'Blog - NeoWeb | Artículos y Tutoriales'
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./features/selected-blog/selected-blog').then(m => m.SelectedBlog),
    title: 'Artículo - NeoWeb | Blog'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contacto - NeoWeb | Contáctanos'
  },
  {
    path: 'politica-privacidad',
    loadComponent: () => import('./features/politica-privacidad/politica-privacidad').then(m => m.PoliticaPrivacidad),
    title: 'Política de Privacidad - NeoWeb'
  },
  {
    path: 'terminos-condiciones',
    loadComponent: () => import('./features/terminos-condiciones/terminos-condiciones').then(m => m.TerminosCondiciones),
    title: 'Términos y Condiciones - NeoWeb'
  },
  {
    path: '404',
    loadComponent: () => import('./features/error404/error404.component').then(m => m.Error404Component),
    title: '404 - Página no encontrada | NeoWeb'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
