export interface ServicioItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServicioPlan {
  name: string;
  price: string;
  period?: string;
  icon: string;
  color: string;
  featured?: boolean;
  features: string[];
}

export interface ServicioStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicioSectionCopy {
  badgeIcon?: string;
  badgeText: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
}

export interface ServicioConfig {
  slug: string;
  pageTitle: string;
  hero: {
    badgeIcon: string;
    badgeText: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
  };
  plansSubtitle: string;
  includesSection: ServicioSectionCopy;
  includes: ServicioItem[];
  showBenefitsSection: boolean;
  benefits?: ServicioItem[];
  processSection: Omit<ServicioSectionCopy, 'badgeIcon' | 'badgeText'>;
  fullcodeSection: Omit<ServicioSectionCopy, 'badgeIcon'>;
  ctaSection: {
    theme: 'dark' | 'light';
    titleLine1: string;
    titleHighlight: string;
    description: string;
  };
  features: ServicioItem[];
  methodology: ServicioStep[];
  fullCodeBenefits: ServicioItem[];
  plans: ServicioPlan[];
}

export const SERVICIOS: Record<string, ServicioConfig> = {
  "pagina-web": {
    "slug": "pagina-web",
    "pageTitle": "Agencia de Desarrollo Web en Perú | Páginas Web Personalizadas | NeoWeb",
    "hero": {
      "badgeIcon": "web",
      "badgeText": "Página web",
      "titleLine1": "Sitio corporativo",
      "titleHighlight": "profesional",
      "description": "Autoridad, claridad y performance para tu marca. Diseño premium y base técnica lista para SEO."
    },
    "plansSubtitle": "Desde S/ 500 hasta S/ 1,200 según alcance. Dominio y hosting gratis por solo 6 meses; luego se paga un monto mensual de mantenimiento.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Secciones",
      "titleLine1": "Todo lo que",
      "titleHighlight": "incluye",
      "subtitle": "Todas las secciones y funcionalidades necesarias para un sitio web corporativo completo."
    },
    "includes": [
      {
        "icon": "rocket_launch",
        "title": "Hero y propuesta de valor",
        "description": "Mensajes claros y CTA definidos."
      },
      {
        "icon": "business",
        "title": "Servicios y diferenciales",
        "description": "Catálogo ordenado y beneficios."
      },
      {
        "icon": "folder",
        "title": "Portafolio y casos",
        "description": "Resultados y credenciales."
      },
      {
        "icon": "star",
        "title": "Testimonios y FAQ",
        "description": "Confianza y claridad."
      },
      {
        "icon": "article",
        "title": "Blog y SEO",
        "description": "Contenido optimizado y técnico listo."
      },
      {
        "icon": "mail",
        "title": "Contacto y lead gen",
        "description": "Formularios y analítica."
      }
    ],
    "showBenefitsSection": true,
    "benefits": [
      {
        "icon": "speed",
        "title": "Carga Ultra Rápida",
        "description": "Optimizada para velocidad, tu sitio carga en menos de 2 segundos"
      },
      {
        "icon": "devices",
        "title": "100% Responsive",
        "description": "Se adapta perfectamente a móviles, tablets y escritorio"
      },
      {
        "icon": "search",
        "title": "SEO Optimizado",
        "description": "Aparece en los primeros resultados de Google"
      },
      {
        "icon": "security",
        "title": "Seguridad Garantizada",
        "description": "Certificado SSL y protección contra ataques"
      },
      {
        "icon": "analytics",
        "title": "Analytics Integrado",
        "description": "Conoce el comportamiento de tus visitantes"
      },
      {
        "icon": "support_agent",
        "title": "Soporte Continuo",
        "description": "Asistencia técnica cuando la necesites"
      }
    ],
    "processSection": {
      "titleLine1": "Método de",
      "titleHighlight": "trabajo",
      "subtitle": "Un proceso estructurado y probado para garantizar resultados excepcionales."
    },
    "fullcodeSection": {
      "badgeText": "Full Code",
      "titleLine1": "Código propio y",
      "titleHighlight": "optimizado",
      "subtitle": "Desarrollo a medida, listo para escalar y posicionar."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Listo para tu",
      "titleHighlight": "sitio corporativo?",
      "description": "Construyo un sitio serio, veloz y que comunique autoridad."
    },
    "features": [
      {
        "icon": "speed",
        "title": "Carga Ultra Rápida",
        "description": "Optimizada para velocidad, tu sitio carga en menos de 2 segundos"
      },
      {
        "icon": "devices",
        "title": "100% Responsive",
        "description": "Se adapta perfectamente a móviles, tablets y escritorio"
      },
      {
        "icon": "search",
        "title": "SEO Optimizado",
        "description": "Aparece en los primeros resultados de Google"
      },
      {
        "icon": "security",
        "title": "Seguridad Garantizada",
        "description": "Certificado SSL y protección contra ataques"
      },
      {
        "icon": "analytics",
        "title": "Analytics Integrado",
        "description": "Conoce el comportamiento de tus visitantes"
      },
      {
        "icon": "support_agent",
        "title": "Soporte Continuo",
        "description": "Asistencia técnica cuando la necesites"
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Análisis y Planificación",
        "description": "Analizo tu negocio, objetivos y competencia para crear una estrategia digital personalizada",
        "icon": "assessment"
      },
      {
        "step": "02",
        "title": "Diseño y Prototipado",
        "description": "Creo diseños modernos y funcionales que reflejan la identidad de tu marca",
        "icon": "palette"
      },
      {
        "step": "03",
        "title": "Desarrollo Full Code",
        "description": "Desarrollo tu sitio web desde cero con código limpio, optimizado y escalable",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Optimización y Testing",
        "description": "Pruebo en todos los dispositivos y optimizo velocidad, SEO y experiencia de usuario",
        "icon": "speed"
      },
      {
        "step": "05",
        "title": "Lanzamiento y Soporte",
        "description": "Publico tu sitio web y te brindo soporte continuo para asegurar su éxito",
        "icon": "launch"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "code",
        "title": "Código Limpio y Optimizado",
        "description": "Desarrollo desde cero con código limpio, sin dependencias innecesarias. Tu sitio es rápido, seguro y fácil de mantener."
      },
      {
        "icon": "speed",
        "title": "Rendimiento Superior",
        "description": "Sin plantillas pesadas. Código optimizado que carga en menos de 2 segundos y ofrece una experiencia fluida."
      },
      {
        "icon": "security",
        "title": "Seguridad Total",
        "description": "Código personalizado significa menos vulnerabilidades. Tu sitio está protegido contra ataques comunes."
      },
      {
        "icon": "tune",
        "title": "Totalmente Personalizable",
        "description": "Cada línea de código está diseñada para tu negocio. Modificaciones y actualizaciones sin límites."
      },
      {
        "icon": "trending_up",
        "title": "Escalabilidad Garantizada",
        "description": "Tu sitio puede crecer sin restricciones. Agrego funcionalidades cuando las necesites."
      },
      {
        "icon": "support_agent",
        "title": "Mantenimiento Simplificado",
        "description": "Código bien estructurado facilita el mantenimiento. Actualizaciones rápidas y sin complicaciones."
      }
    ],
    "plans": [
      {
        "name": "START",
        "price": "S/ 500",
        "icon": "star",
        "color": "from-blue-500 to-cyan-500",
        "features": [
          "6 secciones: Inicio, Nosotros, Servicios, Beneficios, FAQ, Contacto",
          "Diseño moderno",
          "Responsive completo",
          "Formulario + WhatsApp",
          "SEO básico (título, descripción, etiquetas)",
          "Certificado SSL",
          "Hosting + dominio gratis por 6 meses; luego mantenimiento mensual",
          "Entrega: 1 semana"
        ]
      },
      {
        "name": "PRO",
        "price": "S/ 900",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "features": [
          "8-10 secciones: Inicio, Nosotros, Equipo, Servicios, Detalle de Servicios, Proyectos, Testimonios, Blog (activado), FAQ, Contacto",
          "Diseño personalizado",
          "Animaciones suaves (fade, slide, hover)",
          "Google Analytics + Tag Manager",
          "SEO on-page básico",
          "Optimización de velocidad ligera",
          "Hosting + dominio gratis por 6 meses; luego mantenimiento mensual",
          "Entrega: 1-2 semanas"
        ]
      },
      {
        "name": "PREMIUM",
        "price": "S/ 1,200",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "features": [
          "12-15 secciones: Hero avanzado, Inicio, Nosotros, Historia, Equipo, Servicios, Detalle de Servicios, Portafolio filtrable, Proyectos, Testimonios, Blog, FAQ, CTA personalizados, Contacto",
          "Diseño UI/UX avanzado",
          "Animaciones profesionales (scroll, parallax, microinteracciones)",
          "Integraciones API básicas (CRM, correos, etc.)",
          "SEO completo",
          "Optimización de velocidad PRO",
          "Hosting + dominio gratis por 6 meses; luego mantenimiento mensual",
          "Entrega: 2-3 semanas"
        ]
      }
    ]
  },
  "tienda-virtual": {
    "slug": "tienda-virtual",
    "pageTitle": "Tienda Online - NeoWeb | E-commerce Completo",
    "hero": {
      "badgeIcon": "shopping_cart",
      "badgeText": "eCommerce",
      "titleLine1": "Tienda online",
      "titleHighlight": "completa",
      "description": "Catálogo, pagos, envíos y analítica listos para vender 24/7. Diseño limpio y conversion-first."
    },
    "plansSubtitle": "Desde S/ 2,500 hasta S/ 8,000 según funcionalidades y catálogo. Dominio y hosting gratis por solo 6 meses; luego se paga un monto mensual de mantenimiento.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Incluye",
      "titleLine1": "Funcionalidades",
      "titleHighlight": "clave",
      "subtitle": "Todas las herramientas necesarias para gestionar y hacer crecer tu tienda online."
    },
    "includes": [
      {
        "icon": "shopping_cart",
        "title": "Carrito de Compras",
        "description": "Sistema completo de carrito con persistencia"
      },
      {
        "icon": "payment",
        "title": "Pasarelas de Pago",
        "description": "Integración con múltiples métodos de pago"
      },
      {
        "icon": "inventory",
        "title": "Gestión de Inventario",
        "description": "Control automático de stock"
      },
      {
        "icon": "local_shipping",
        "title": "Gestión de Envíos",
        "description": "Cálculo automático de costos de envío"
      },
      {
        "icon": "analytics",
        "title": "Reportes de Ventas",
        "description": "Dashboard completo de métricas"
      },
      {
        "icon": "security",
        "title": "Seguridad Avanzada",
        "description": "Protección de datos y transacciones"
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "trabajo",
      "subtitle": "Un proceso estructurado y probado para garantizar resultados excepcionales."
    },
    "fullcodeSection": {
      "badgeText": "Full Code",
      "titleLine1": "Desarrollo a",
      "titleHighlight": "medida",
      "subtitle": "Arquitectura segura, performance y SEO listos."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Listo para",
      "titleHighlight": "vender online?",
      "description": "Lanza tu tienda con catálogo, pagos y envíos listos."
    },
    "features": [
      {
        "icon": "shopping_cart",
        "title": "Carrito de Compras",
        "description": "Sistema completo de carrito con persistencia"
      },
      {
        "icon": "payment",
        "title": "Pasarelas de Pago",
        "description": "Integración con múltiples métodos de pago"
      },
      {
        "icon": "inventory",
        "title": "Gestión de Inventario",
        "description": "Control automático de stock"
      },
      {
        "icon": "local_shipping",
        "title": "Gestión de Envíos",
        "description": "Cálculo automático de costos de envío"
      },
      {
        "icon": "analytics",
        "title": "Reportes de Ventas",
        "description": "Dashboard completo de métricas"
      },
      {
        "icon": "security",
        "title": "Seguridad Avanzada",
        "description": "Protección de datos y transacciones"
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Análisis de Productos y Mercado",
        "description": "Analizo tu catálogo, competencia y estrategia de ventas para crear la mejor experiencia de compra",
        "icon": "inventory"
      },
      {
        "step": "02",
        "title": "Diseño de Experiencia de Compra",
        "description": "Diseño una experiencia de compra intuitiva que guía al cliente desde el catálogo hasta el checkout",
        "icon": "shopping_cart"
      },
      {
        "step": "03",
        "title": "Desarrollo Full Code",
        "description": "Construyo tu tienda online desde cero con código optimizado, carrito inteligente y pasarelas de pago",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Integración de Pagos y Envíos",
        "description": "Conecto métodos de pago seguros y sistemas de envío para una experiencia completa",
        "icon": "payment"
      },
      {
        "step": "05",
        "title": "Panel Admin y Lanzamiento",
        "description": "Entrego panel administrativo completo y lanzo tu tienda lista para vender",
        "icon": "dashboard"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "code",
        "title": "Código Escalable",
        "description": "Desarrollado desde cero para manejar miles de productos y transacciones sin problemas de rendimiento."
      },
      {
        "icon": "shopping_cart",
        "title": "Carrito Inteligente",
        "description": "Carrito de compras personalizado con persistencia, cálculos automáticos y experiencia fluida."
      },
      {
        "icon": "payment",
        "title": "Integraciones Flexibles",
        "description": "Conecto con cualquier pasarela de pago, sistema de envío o ERP sin limitaciones."
      },
      {
        "icon": "speed",
        "title": "Rendimiento Optimizado",
        "description": "Código optimizado que carga rápido incluso con cientos de productos. Experiencia de compra fluida."
      },
      {
        "icon": "security",
        "title": "Seguridad de Transacciones",
        "description": "Código personalizado con validaciones robustas y protección contra fraudes en cada transacción."
      },
      {
        "icon": "dashboard",
        "title": "Panel Admin Personalizado",
        "description": "Dashboard administrativo diseñado específicamente para tu negocio. Gestión intuitiva de productos y pedidos."
      }
    ],
    "plans": [
      {
        "name": "START",
        "price": "S/ 2,500",
        "icon": "star",
        "color": "from-gray-700 to-gray-900",
        "features": [
          "Hasta 50 productos",
          "Secciones: Inicio, Tienda, Categorías simples, Producto, Carrito, Checkout, Contacto",
          "Métodos de pago básicos",
          "Diseño moderno",
          "Inventario básico",
          "SEO simple"
        ]
      },
      {
        "name": "PRO",
        "price": "S/ 3,500",
        "icon": "rocket_launch",
        "color": "from-blue-500 to-cyan-500",
        "featured": true,
        "features": [
          "Hasta 300 productos",
          "Secciones: Inicio, Tienda avanzada, Categorías profesionales, Producto completo, Cuenta usuario, Políticas, Blog",
          "Variantes y filtros",
          "Cupones y reportes",
          "SEO optimizado",
          "Integración con WhatsApp"
        ]
      },
      {
        "name": "PREMIUM",
        "price": "S/ 5,000 - S/ 8,000",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "features": [
          "Productos ilimitados",
          "Panel administrativo personalizado",
          "Diseño UI/UX a medida",
          "Automatizaciones (correos, estados, alertas)",
          "Integraciones API externas",
          "SEO completo",
          "Optimización de rendimiento"
        ]
      }
    ]
  },
  "marketing-digital": {
    "slug": "marketing-digital",
    "pageTitle": "Agencia de Marketing Digital en Perú | Estrategias Digitales | NeoWeb",
    "hero": {
      "badgeIcon": "trending_up",
      "badgeText": "Marketing digital",
      "titleLine1": "Growth y performance",
      "titleHighlight": "multicanal",
      "description": "Estrategias integrales: paid, social, email y CRO para atraer, convertir y retener clientes."
    },
    "plansSubtitle": "Desde S/ 600/mes hasta S/ 1,800/mes según inversión y alcance.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Servicios",
      "titleLine1": "Cobertura",
      "titleHighlight": "completa",
      "subtitle": "Estrategias integrales de marketing digital para todos tus canales y objetivos."
    },
    "includes": [
      {
        "icon": "campaign",
        "title": "Estrategia Integral",
        "description": "Plan completo de marketing digital"
      },
      {
        "icon": "share",
        "title": "Redes Sociales",
        "description": "Gestión profesional de tus perfiles"
      },
      {
        "icon": "email",
        "title": "Email Marketing",
        "description": "Campañas automatizadas efectivas"
      },
      {
        "icon": "analytics",
        "title": "Analytics Avanzado",
        "description": "Medición y optimización continua"
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "ejecuto",
      "subtitle": "Un proceso estructurado y probado para garantizar resultados excepcionales."
    },
    "fullcodeSection": {
      "badgeText": "KPI",
      "titleLine1": "Resultados que",
      "titleHighlight": "medimos",
      "subtitle": "Métricas claras y resultados tangibles para tu estrategia de marketing."
    },
    "ctaSection": {
      "theme": "light",
      "titleLine1": "¿Listo para",
      "titleHighlight": "escalar tu marketing?",
      "description": "Diseño y ejecuto tu estrategia con foco en ROI."
    },
    "features": [
      {
        "icon": "campaign",
        "title": "Estrategia Integral",
        "description": "Plan completo de marketing digital"
      },
      {
        "icon": "share",
        "title": "Redes Sociales",
        "description": "Gestión profesional de tus perfiles"
      },
      {
        "icon": "email",
        "title": "Email Marketing",
        "description": "Campañas automatizadas efectivas"
      },
      {
        "icon": "analytics",
        "title": "Analytics Avanzado",
        "description": "Medición y optimización continua"
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Análisis de Marca y Audiencia",
        "description": "Estudio tu marca, competencia y audiencia objetivo para crear estrategias efectivas",
        "icon": "person_search"
      },
      {
        "step": "02",
        "title": "Estrategia de Contenido",
        "description": "Desarrollo calendario editorial y estrategia de contenido que conecta con tu audiencia",
        "icon": "content_copy"
      },
      {
        "step": "03",
        "title": "Ejecución Multi-Canal",
        "description": "Gestiono tus redes sociales, email marketing y campañas de forma coordinada",
        "icon": "campaign"
      },
      {
        "step": "04",
        "title": "Análisis y Optimización",
        "description": "Mido resultados, analizo métricas y optimizo continuamente para mejores resultados",
        "icon": "analytics"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "code",
        "title": "Estrategias Personalizadas",
        "description": "Cada estrategia está diseñada específicamente para tu negocio, sin plantillas genéricas."
      },
      {
        "icon": "campaign",
        "title": "Gestión Integral",
        "description": "Gestiono todos tus canales digitales de forma coordinada para máxima efectividad."
      },
      {
        "icon": "analytics",
        "title": "Métricas Accionables",
        "description": "Reportes detallados con insights claros que te ayudan a tomar mejores decisiones."
      },
      {
        "icon": "trending_up",
        "title": "ROI Medible",
        "description": "Cada estrategia está diseñada para generar resultados medibles y retorno de inversión."
      },
      {
        "icon": "auto_awesome",
        "title": "Contenido de Calidad",
        "description": "Creo contenido original y de valor que posiciona tu marca como autoridad en tu industria."
      },
      {
        "icon": "support_agent",
        "title": "Soporte Continuo",
        "description": "Gestiono personalmente tu presencia digital y respondo rápidamente a tus necesidades."
      }
    ],
    "plans": [
      {
        "name": "START",
        "price": "S/ 600",
        "period": "/mes",
        "icon": "star",
        "color": "from-orange-500 to-red-500",
        "features": [
          "8 publicaciones",
          "Diseño simple",
          "Copywriting",
          "Calendario básico",
          "Métricas simples"
        ]
      },
      {
        "name": "PRO",
        "price": "S/ 1,200",
        "period": "/mes",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "features": [
          "12 publicaciones",
          "1 reel mensual",
          "Diseño profesional",
          "Estrategia de contenido",
          "Métricas detalladas"
        ]
      },
      {
        "name": "PREMIUM",
        "price": "S/ 1,800",
        "period": "/mes",
        "icon": "diamond",
        "color": "from-blue-500 to-cyan-500",
        "features": [
          "16 publicaciones",
          "4 reels al mes",
          "Campaña publicitaria incluida (sin presupuesto)",
          "Branding visual",
          "Informes completos + reunión mensual"
        ]
      }
    ]
  },
  "rediseno-paginas-web": {
    "slug": "rediseno-paginas-web",
    "pageTitle": "Rediseño de Páginas Web - NeoWeb | Modernización Web",
    "hero": {
      "badgeIcon": "refresh",
      "badgeText": "Rediseño web",
      "titleLine1": "Moderniza tu sitio",
      "titleHighlight": "actual",
      "description": "Renuevo tu web con diseño limpio, velocidad y SEO técnico listo para competir."
    },
    "plansSubtitle": "Desde S/ 800 hasta S/ 2,500 según alcance y complejidad. Dominio y hosting gratis por solo 6 meses; luego se paga un monto mensual de mantenimiento.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Enfoque",
      "titleLine1": "Lo que",
      "titleHighlight": "mejoro",
      "subtitle": "Transformo tu sitio actual en una experiencia moderna, rápida y optimizada."
    },
    "includes": [
      {
        "icon": "refresh",
        "title": "Modernización",
        "description": "Diseño actual y profesional"
      },
      {
        "icon": "speed",
        "title": "Optimización",
        "description": "Mejora de velocidad y rendimiento"
      },
      {
        "icon": "devices",
        "title": "Responsive",
        "description": "Adaptación a todos los dispositivos"
      },
      {
        "icon": "trending_up",
        "title": "Mejores Resultados",
        "description": "Aumento de conversiones"
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo abordo el",
      "titleHighlight": "rediseño",
      "subtitle": "Un proceso estructurado y probado para garantizar resultados excepcionales."
    },
    "fullcodeSection": {
      "badgeText": "Beneficios",
      "titleLine1": "Impacto del",
      "titleHighlight": "rediseño",
      "subtitle": "Mejoras medibles en conversión, velocidad y experiencia."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Listo para",
      "titleHighlight": "modernizar tu sitio?",
      "description": "Rediseño tu web con una experiencia clara, rápida y optimizada."
    },
    "features": [
      {
        "icon": "refresh",
        "title": "Modernización",
        "description": "Diseño actual y profesional"
      },
      {
        "icon": "speed",
        "title": "Optimización",
        "description": "Mejora de velocidad y rendimiento"
      },
      {
        "icon": "devices",
        "title": "Responsive",
        "description": "Adaptación a todos los dispositivos"
      },
      {
        "icon": "trending_up",
        "title": "Mejores Resultados",
        "description": "Aumento de conversiones"
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Auditoría Completa",
        "description": "Analizo tu sitio actual, identifico problemas y oportunidades de mejora",
        "icon": "assessment"
      },
      {
        "step": "02",
        "title": "Propuesta de Rediseño",
        "description": "Presento una propuesta visual y funcional que mejora tu sitio manteniendo tu identidad",
        "icon": "palette"
      },
      {
        "step": "03",
        "title": "Desarrollo Full Code",
        "description": "Reconstruyo tu sitio desde cero con código moderno, optimizado y escalable",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Migración y Optimización",
        "description": "Migro tu contenido sin pérdida de datos y optimizo velocidad y SEO",
        "icon": "sync"
      },
      {
        "step": "05",
        "title": "Lanzamiento y Capacitación",
        "description": "Lanzo tu nuevo sitio y te capacito en el uso del nuevo panel administrativo",
        "icon": "school"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "code",
        "title": "Código Moderno y Limpio",
        "description": "Reemplazo el código obsoleto con tecnología actual. Tu sitio es más rápido, seguro y fácil de mantener."
      },
      {
        "icon": "speed",
        "title": "Rendimiento Mejorado",
        "description": "Código optimizado que reduce tiempos de carga hasta en un 70%. Mejor experiencia para tus usuarios."
      },
      {
        "icon": "security",
        "title": "Seguridad Actualizada",
        "description": "Elimino vulnerabilidades y actualizo a los últimos estándares de seguridad web."
      },
      {
        "icon": "tune",
        "title": "Totalmente Personalizable",
        "description": "Código limpio permite modificaciones y actualizaciones sin limitaciones técnicas."
      },
      {
        "icon": "trending_up",
        "title": "SEO Mejorado",
        "description": "Estructura de código optimizada para SEO que mejora tu posicionamiento en Google."
      },
      {
        "icon": "devices",
        "title": "Responsive Perfecto",
        "description": "Código moderno garantiza que tu sitio se vea perfecto en todos los dispositivos."
      }
    ],
    "plans": [
      {
        "name": "START",
        "price": "S/ 800",
        "icon": "star",
        "color": "from-gray-600 to-gray-800",
        "features": [
          "Modernización estética",
          "Ajustes de contenido",
          "Mejora de estructura"
        ]
      },
      {
        "name": "PRO",
        "price": "S/ 1,400",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "features": [
          "Rediseño completo de front-end",
          "Nuevas animaciones",
          "SEO on-page básico"
        ]
      },
      {
        "name": "PREMIUM",
        "price": "S/ 2,500",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "features": [
          "Reconstrucción total",
          "Optimización de velocidad",
          "SEO técnico completo",
          "Migración profesional"
        ]
      }
    ]
  },
  "aplicaciones-moviles": {
    "slug": "aplicaciones-moviles",
    "pageTitle": "Aplicaciones Móviles - NeoWeb | Apps iOS y Android",
    "hero": {
      "badgeIcon": "phone_android",
      "badgeText": "Apps móviles",
      "titleLine1": "Apps nativas e",
      "titleHighlight": "híbridas",
      "description": "Lleva tu producto al bolsillo de tus usuarios con UX clara, performance y seguridad."
    },
    "plansSubtitle": "Desde S/ 4,000 hasta S/ 12,000+ según alcance y plataformas.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Características",
      "titleLine1": "Lo que",
      "titleHighlight": "incluye",
      "subtitle": "Todas las funcionalidades y características necesarias para una app móvil completa."
    },
    "includes": [
      {
        "icon": "phone_android",
        "title": "iOS y Android",
        "description": "Aplicaciones nativas para ambas plataformas"
      },
      {
        "icon": "speed",
        "title": "Alto Rendimiento",
        "description": "Optimizadas para velocidad y fluidez"
      },
      {
        "icon": "design_services",
        "title": "Diseño Intuitivo",
        "description": "Interfaz moderna y fácil de usar"
      },
      {
        "icon": "cloud",
        "title": "Sincronización",
        "description": "Datos en la nube accesibles desde cualquier lugar"
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "construyo",
      "subtitle": "Un proceso estructurado y probado para garantizar resultados excepcionales."
    },
    "fullcodeSection": {
      "badgeText": "Full Code",
      "titleLine1": "Desarrollo a",
      "titleHighlight": "medida",
      "subtitle": "Arquitectura segura, escalable y lista para stores."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Listo para",
      "titleHighlight": "lanzar tu app?",
      "description": "Construyo tu app con UX clara y performance de nivel producción."
    },
    "features": [
      {
        "icon": "phone_android",
        "title": "iOS y Android",
        "description": "Aplicaciones nativas para ambas plataformas"
      },
      {
        "icon": "speed",
        "title": "Alto Rendimiento",
        "description": "Optimizadas para velocidad y fluidez"
      },
      {
        "icon": "design_services",
        "title": "Diseño Intuitivo",
        "description": "Interfaz moderna y fácil de usar"
      },
      {
        "icon": "cloud",
        "title": "Sincronización",
        "description": "Datos en la nube accesibles desde cualquier lugar"
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Análisis y Diseño UX/UI",
        "description": "Estudio tu audiencia y diseño una experiencia móvil intuitiva y atractiva",
        "icon": "phone_android"
      },
      {
        "step": "02",
        "title": "Prototipado y Validación",
        "description": "Creo prototipos interactivos para validar la experiencia antes del desarrollo",
        "icon": "design_services"
      },
      {
        "step": "03",
        "title": "Desarrollo Full Code",
        "description": "Desarrollo tu app desde cero con código nativo o híbrido optimizado para rendimiento",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Testing y Optimización",
        "description": "Pruebo en múltiples dispositivos y optimizo rendimiento y experiencia",
        "icon": "bug_report"
      },
      {
        "step": "05",
        "title": "Publicación y Mantenimiento",
        "description": "Publico en App Store y Google Play, y brindo mantenimiento continuo",
        "icon": "publish"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "code",
        "title": "Código Nativo o Híbrido",
        "description": "Desarrollo con código nativo para máximo rendimiento o híbrido para llegar a más plataformas."
      },
      {
        "icon": "speed",
        "title": "Rendimiento Superior",
        "description": "Apps optimizadas que funcionan fluidamente incluso con datos limitados o conexión lenta."
      },
      {
        "icon": "security",
        "title": "Seguridad de Datos",
        "description": "Código personalizado con encriptación y protección de datos del usuario."
      },
      {
        "icon": "integration_instructions",
        "title": "Integraciones Completas",
        "description": "Conecto con APIs, sistemas backend y servicios externos sin limitaciones."
      },
      {
        "icon": "offline_bolt",
        "title": "Funcionalidad Offline",
        "description": "Apps que funcionan sin conexión con sincronización inteligente cuando hay internet."
      },
      {
        "icon": "update",
        "title": "Actualizaciones Rápidas",
        "description": "Código bien estructurado permite actualizaciones y nuevas funcionalidades sin problemas."
      }
    ],
    "plans": [
      {
        "name": "START",
        "price": "S/ 4,000",
        "icon": "star",
        "color": "from-teal-500 to-cyan-500",
        "features": [
          "App informativa",
          "4-6 pantallas",
          "Android"
        ]
      },
      {
        "name": "PRO",
        "price": "S/ 7,500",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "features": [
          "Login + BD",
          "Notificaciones",
          "Android + iOS"
        ]
      },
      {
        "name": "PREMIUM",
        "price": "S/ 12,000+",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "features": [
          "App completa",
          "Integraciones API",
          "Dashboard admin",
          "UI/UX avanzado"
        ]
      }
    ]
  },
  "digitalizacion-procesos": {
    "slug": "digitalizacion-procesos",
    "pageTitle": "Software a Medida - NeoWeb | Desarrollo Personalizado",
    "hero": {
      "badgeIcon": "settings",
      "badgeText": "Software a medida",
      "titleLine1": "Desarrollamos",
      "titleHighlight": "software a medida",
      "description": "Sistemas a medida para aumentar eficiencia, reducir costos y dar visibilidad a tus operaciones."
    },
    "plansSubtitle": "Desde S/ 1,500 hasta S/ 20,000 según alcance y complejidad.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Funcionalidades",
      "titleLine1": "Qué",
      "titleHighlight": "resuelvo",
      "subtitle": "Sistemas personalizados para automatizar y optimizar todos tus procesos de negocio."
    },
    "includes": [
      {
        "icon": "auto_awesome",
        "title": "Automatización",
        "description": "Automatiza procesos manuales"
      },
      {
        "icon": "dashboard",
        "title": "Dashboards",
        "description": "Visualiza datos en tiempo real"
      },
      {
        "icon": "integration_instructions",
        "title": "Integraciones",
        "description": "Conecta sistemas existentes"
      },
      {
        "icon": "security",
        "title": "Seguridad",
        "description": "Protección de datos y procesos"
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "implemento",
      "subtitle": "Un proceso estructurado y probado para garantizar resultados excepcionales."
    },
    "fullcodeSection": {
      "badgeText": "Beneficios",
      "titleLine1": "Impacto del",
      "titleHighlight": "proyecto",
      "subtitle": "Transformación digital completa y resultados medibles."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Listo para tu",
      "titleHighlight": "software a medida?",
      "description": "Automatiza tareas y gana eficiencia con una solución personalizada."
    },
    "features": [
      {
        "icon": "auto_awesome",
        "title": "Automatización",
        "description": "Automatiza procesos manuales"
      },
      {
        "icon": "dashboard",
        "title": "Dashboards",
        "description": "Visualiza datos en tiempo real"
      },
      {
        "icon": "integration_instructions",
        "title": "Integraciones",
        "description": "Conecta sistemas existentes"
      },
      {
        "icon": "security",
        "title": "Seguridad",
        "description": "Protección de datos y procesos"
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Análisis de Procesos",
        "description": "Mapeo tus procesos actuales, identifico ineficiencias y oportunidades de automatización",
        "icon": "assessment"
      },
      {
        "step": "02",
        "title": "Diseño de Solución",
        "description": "Diseño la solución digital personalizada que optimiza y automatiza tus procesos",
        "icon": "design_services"
      },
      {
        "step": "03",
        "title": "Desarrollo Full Code",
        "description": "Desarrollo un sistema personalizado desde cero con código limpio y escalable",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Implementación y Migración",
        "description": "Implemento la solución, migro datos y capacito a tu equipo",
        "icon": "sync"
      },
      {
        "step": "05",
        "title": "Optimización Continua",
        "description": "Monitoreo el sistema y optimizo continuamente para mejor rendimiento",
        "icon": "trending_up"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "code",
        "title": "Sistema Personalizado",
        "description": "Desarrollado desde cero para tus procesos específicos. No adapto software genérico, creo la solución perfecta."
      },
      {
        "icon": "auto_awesome",
        "title": "Automatización Inteligente",
        "description": "Automatizo procesos complejos con lógica de negocio personalizada que se adapta a tus necesidades."
      },
      {
        "icon": "dashboard",
        "title": "Dashboard Personalizado",
        "description": "Panel de control diseñado específicamente para tu negocio con métricas y reportes relevantes."
      },
      {
        "icon": "integration_instructions",
        "title": "Integraciones Completas",
        "description": "Conecto con cualquier sistema existente: ERP, CRM, contabilidad, sin limitaciones."
      },
      {
        "icon": "security",
        "title": "Seguridad y Permisos",
        "description": "Sistema de roles y permisos personalizado que protege información sensible según tu estructura organizacional."
      },
      {
        "icon": "trending_up",
        "title": "Escalabilidad Garantizada",
        "description": "Código arquitecturado para crecer con tu negocio. Agrego funcionalidades sin reconstruir."
      }
    ],
    "plans": [
      {
        "name": "START",
        "price": "S/ 1,500",
        "icon": "star",
        "color": "from-gray-600 to-gray-800",
        "features": [
          "1 proceso digitalizado",
          "Formularios / flujos básicos"
        ]
      },
      {
        "name": "PRO",
        "price": "S/ 4,000",
        "icon": "rocket_launch",
        "color": "from-blue-500 to-cyan-500",
        "featured": true,
        "features": [
          "3-5 procesos",
          "Panel admin",
          "Roles y permisos",
          "Integraciones"
        ]
      },
      {
        "name": "PREMIUM",
        "price": "S/ 8,000 - S/ 20,000",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "features": [
          "Sistema interno completo",
          "Automatizaciones avanzadas",
          "Dashboard BI",
          "Capacitación"
        ]
      }
    ]
  }
};

export const SERVICIO_SLUGS = [
  "pagina-web",
  "tienda-virtual",
  "marketing-digital",
  "rediseno-paginas-web",
  "aplicaciones-moviles",
  "digitalizacion-procesos"
] as const;

export type ServicioSlug = typeof SERVICIO_SLUGS[number];

export function getServicioBySlug(slug: string | null | undefined): ServicioConfig | undefined {
  if (!slug) {
    return undefined;
  }
  return SERVICIOS[slug];
}
