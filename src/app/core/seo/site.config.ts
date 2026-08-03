export const SITE_URL = 'https://neoweb.website';
export const SITE_NAME = 'NeoWeb';
export const SITE_PHONE = '+51942820836';
export const SITE_PHONE_DISPLAY = '+51 942 820 836';
export const SITE_EMAIL = 'contacto@neoweb.website';
export const SITE_LOGO = `${SITE_URL}/nuevo-logo-morado.png`;

/** Redes sociales reales usadas en el sitio */
export const SITE_SAME_AS = [
  'https://www.facebook.com/profile.php?id=61583086977279',
  'https://www.instagram.com/neoweb.agency/',
  'https://wa.me/51942820836'
] as const;

/**
 * hreflang: el sitio solo tiene versión en español.
 * Cuando existan otras lenguas, agregar aquí las URLs alternativas.
 */
export const SITE_HREFLANG: ReadonlyArray<{ lang: string; pathPrefix: string }> = [
  // Ejemplo futuro:
  // { lang: 'en', pathPrefix: '/en' },
];

export const SITE_SERVICES = [
  {
    slug: 'pagina-web',
    name: 'Desarrollo de Páginas Web',
    description: 'Sitios web corporativos desarrollados desde cero con código a medida, SEO y diseño orientado a conversión.'
  },
  {
    slug: 'tienda-virtual',
    name: 'Tienda Online / E-commerce',
    description: 'Tiendas online completas con catálogo, pasarelas de pago y experiencia de compra optimizada.'
  },
  {
    slug: 'marketing-digital',
    name: 'Marketing Digital',
    description: 'Estrategias de marketing digital, SEO y publicidad para atraer clientes y hacer crecer tu negocio.'
  },
  {
    slug: 'rediseno-paginas-web',
    name: 'Rediseño de Páginas Web',
    description: 'Modernización de sitios existentes para mejorar diseño, velocidad, SEO y conversión.'
  },
  {
    slug: 'aplicaciones-moviles',
    name: 'Aplicaciones Móviles',
    description: 'Desarrollo de aplicaciones móviles iOS y Android adaptadas a tu negocio.'
  },
  {
    slug: 'digitalizacion-procesos',
    name: 'Software a Medida / Digitalización',
    description: 'Sistemas a medida para digitalizar y automatizar procesos internos de tu empresa.'
  }
] as const;

export const PORTFOLIO_PROJECTS: Record<string, string> = {
  liceum: 'LICEUM',
  omed: 'OMED',
  'omed-financial': 'Gestión Financiera OMED',
  'sml-web': 'Santa María Laura',
  'sml-portal': 'Portal SML',
  'hombre-universal': 'Hombre Universal',
  yachaytambo: 'Yachay Tambo'
};

export const ROUTE_LABELS: Record<string, string> = {
  inicio: 'Inicio',
  servicios: 'Servicios',
  portafolio: 'Portafolio',
  nosotros: 'Nosotros',
  contacto: 'Contacto',
  'politica-privacidad': 'Política de Privacidad',
  'terminos-condiciones': 'Términos y Condiciones'
};
