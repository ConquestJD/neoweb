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
    path: 'servicios',
    loadComponent: () => import('./features/servicios/servicios.component').then(m => m.ServiciosComponent),
    title: 'Servicios - NeoWeb | Soluciones Web Profesionales'
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
