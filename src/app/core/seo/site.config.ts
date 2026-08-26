export const SITE_URL = 'https://neoweb.website';
export const SITE_NAME = 'NeoWeb';
export const SITE_PHONE = '+51942820836';
export const SITE_PHONE_DISPLAY = '+51 942 820 836';
export const SITE_EMAIL = 'contacto@neoweb.website';
export const SITE_LOGO = `${SITE_URL}/icon-512.png`;

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
    description: 'Una sola página para que te escriban, o un sitio de 5 páginas con menú. Hecho a medida, sin plantillas.'
  },
  {
    slug: 'tienda-virtual',
    name: 'Tienda Online / E-commerce',
    description: 'Empezar a cobrar, vender más con descuentos y anuncios, o que un empleado vea pedidos. Un tipo de pago: Yape o tarjeta.'
  },
  {
    slug: 'marketing-digital',
    name: 'Marketing Digital',
    description: 'Gestión de Facebook e Instagram: presencia, contenido hacia tu web o captación con Meta Ads. La pauta no está incluida en el fee.'
  },
  {
    slug: 'rediseno-paginas-web',
    name: 'Rediseño de Páginas Web',
    description: 'Ya tienes web: cara nueva, otro camino para que te escriban, o la armo de nuevo y conservo tu dirección.'
  },
  {
    slug: 'aplicaciones-moviles',
    name: 'Aplicaciones Móviles',
    description: 'App sin cuentas o con usuarios en Android, o una extra cotizada (iPhone, cobrar, empleado u otro programa).'
  },
  {
    slug: 'digitalizacion-procesos',
    name: 'Software a Medida / Digitalización',
    description: 'Sistema interno: el equipo registra el día a día, ves ingresos y gastos, o ampliamos lo que falte (otra sede, módulo o programa).'
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
