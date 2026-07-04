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
    title: 'Agencia Digital en Perú | Desarrollo Web Personalizado | NeoWeb'
  },
  {
    path: 'servicios/:slug',
    loadComponent: () => import('./features/servicios/servicio.component').then(m => m.ServicioComponent)
  },
  {
    path: 'portafolio',
    loadComponent: () => import('./features/portafolio/portafolio.component').then(m => m.PortafolioComponent),
    title: 'Portafolio - NeoWeb | Nuestros Proyectos'
  },
  {
    path: 'portafolio/:id',
    loadComponent: () => import('./features/portafolio-seleccionado/portafolio-seleccionado.component').then(m => m.PortafolioSeleccionadoComponent),
    title: 'Proyecto - NeoWeb | Detalles del Proyecto'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/nosotros/nosotros.component').then(m => m.NosotrosComponent),
    title: 'Nosotros - Agencia Digital NeoWeb | Equipo de Desarrollo Web en Perú'
  },
  {
    path: 'blog/:slug',
    redirectTo: '/404',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    redirectTo: '/404',
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contacto - Agencia Digital NeoWeb | Lima, Perú'
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
