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
  tagline?: string;
  benefit?: string;
  features: string[];
  note?: string;
}

export interface ServicioPlanComparisonRow {
  label: string;
  start: string | boolean;
  pro: string | boolean;
  premium: string | boolean;
}

export interface ServicioPlanComparisonHeaders {
  start: string;
  pro: string;
  premium: string;
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
  heroImage: string;
  pageTitle: string;
  /** Meta description SEO (~150–160 caracteres) */
  metaDescription: string;
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
  plansHighlights?: string[];
  plansHighlightsTitle?: string;
  plansBenefits?: string[];
  plansBenefitsTitle?: string;
  plansGuarantee?: string;
  plansGuaranteeLabel?: string;
  plansComparison?: ServicioPlanComparisonRow[];
  plansComparisonHeaders?: ServicioPlanComparisonHeaders;
  plansComparisonIntro?: string;
}

export const SERVICIOS: Record<string, ServicioConfig> = {
  "pagina-web": {
    "slug": "pagina-web",
    "heroImage": "/assets/services/pagina web.jpg",
    "pageTitle": "Páginas Web Profesionales en Perú | Desarrollo Web a Medida | NeoWeb",
    "metaDescription": "Diseño y desarrollo de páginas web profesionales en Perú. Sitios rápidos, responsive y optimizados para SEO que generan consultas y ventas. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "web",
      "badgeText": "Desarrollo web · Perú",
      "titleLine1": "Páginas web",
      "titleHighlight": "profesionales",
      "description": "Diseño y desarrollo de páginas web a medida en Perú. Sitios corporativos rápidos, responsive y optimizados para Google, pensados para generar confianza, leads y ventas."
    },
    "plansSubtitle": "Sitios web profesionales desde S/ 500. Hosting y dominio incluidos durante los primeros 6 meses. Posteriormente, el mantenimiento es opcional y se adapta a las necesidades de cada proyecto.",
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
        "name": "ESENCIAL",
        "price": "S/ 500",
        "icon": "star",
        "color": "from-blue-500 to-cyan-500",
        "tagline": "Ideal para emprendedores y pequeños negocios que necesitan una presencia digital profesional.",
        "features": [
          "Diseño profesional y moderno",
          "Hasta 6 secciones",
          "Inicio, Nosotros, Servicios, Beneficios, FAQ y Contacto",
          "Formulario de contacto",
          "Botón de WhatsApp integrado",
          "Adaptada para celulares, tablets y computadoras",
          "Configuración básica para aparecer en Google",
          "Certificado SSL",
          "Hosting y dominio incluidos durante 6 meses",
          "Entrega en aproximadamente 1 semana"
        ]
      },
      {
        "name": "PROFESIONAL",
        "price": "S/ 900",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "tagline": "Ideal para empresas que buscan fortalecer su presencia digital y transmitir mayor confianza.",
        "features": [
          "Todo lo incluido en Esencial",
          "Hasta 10 secciones",
          "Diseño completamente personalizado",
          "Integración con redes sociales",
          "Google Analytics",
          "Optimización de velocidad",
          "SEO avanzado",
          "Investigación básica de palabras clave",
          "Entrega en 1 a 2 semanas"
        ]
      },
      {
        "name": "EMPRESARIAL",
        "price": "S/ 1,500",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Ideal para empresas que necesitan una solución web más robusta, escalable y adaptada a sus procesos.",
        "features": [
          "Todo lo incluido en Profesional",
          "Hasta 15 secciones",
          "Diseño UI/UX avanzado",
          "Portafolio dinámico",
          "Formularios avanzados",
          "Integraciones con CRM y herramientas externas",
          "SEO completo",
          "Optimización Premium de velocidad",
          "CTAs personalizados",
          "Prioridad de soporte",
          "Posibilidad de incorporar un panel de administración según el alcance del proyecto",
          "Entrega en 2 a 3 semanas"
        ]
      }
    ],
    "plansHighlights": [
      "Diseño profesional",
      "Responsive para móviles",
      "WhatsApp integrado",
      "Certificado SSL",
      "Optimización SEO",
      "Hosting y dominio incluidos por 6 meses"
    ],
    "plansComparisonHeaders": {
      "start": "Esencial",
      "pro": "Profesional",
      "premium": "Empresarial"
    },
    "plansComparisonIntro": "Compara alcance, entregables y tiempos para elegir el sitio que mejor impulsa tu negocio.",
    "plansComparison": [
      {
        "label": "Secciones incluidas",
        "start": "Hasta 6",
        "pro": "Hasta 10",
        "premium": "Hasta 15"
      },
      {
        "label": "Diseño",
        "start": "Profesional",
        "pro": "Completamente personalizado",
        "premium": "UI/UX avanzado"
      },
      {
        "label": "Formulario de contacto",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "WhatsApp integrado",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Responsive (móvil, tablet, desktop)",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "SEO",
        "start": "Básico",
        "pro": "Avanzado",
        "premium": "Completo"
      },
      {
        "label": "Certificado SSL",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Hosting y dominio (6 meses)",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Integración con redes sociales",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Google Analytics",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Optimización de velocidad",
        "start": false,
        "pro": true,
        "premium": "Premium"
      },
      {
        "label": "Investigación de palabras clave",
        "start": false,
        "pro": "Básica",
        "premium": true
      },
      {
        "label": "Portafolio dinámico",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Formularios avanzados",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Integraciones CRM / externas",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Panel de administración",
        "start": false,
        "pro": false,
        "premium": "Según alcance"
      },
      {
        "label": "CTAs personalizados",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Soporte prioritario",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Tiempo de entrega",
        "start": "Aprox. 1 semana",
        "pro": "1–2 semanas",
        "premium": "2–3 semanas"
      }
    ]
  },
  "tienda-virtual": {
    "slug": "tienda-virtual",
    "heroImage": "/assets/services/tienda online.jpg",
    "pageTitle": "Tienda Online en Perú | Desarrollo de E-commerce | NeoWeb",
    "metaDescription": "Creamos tiendas online y e-commerce en Perú con catálogo, pagos y envíos. Listas para vender 24/7, atraer clientes y escalar tus ventas. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "shopping_cart",
      "badgeText": "E-commerce · Perú",
      "titleLine1": "Tienda online",
      "titleHighlight": "que vende",
      "description": "Desarrollo de tiendas online y e-commerce en Perú. Catálogo, pasarelas de pago, envíos y panel de gestión listos para vender 24/7 y convertir más visitas en pedidos."
    },
    "plansSubtitle": "Creamos tiendas online preparadas para vender, automatizar procesos y acompañar el crecimiento de tu negocio. Hosting y dominio incluidos durante los primeros 6 meses. Posteriormente, el mantenimiento es opcional y se adapta a las necesidades de cada proyecto.",
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
        "name": "EMPRENDE",
        "price": "S/ 2,000",
        "icon": "star",
        "color": "from-gray-700 to-gray-900",
        "tagline": "Ideal para emprendedores y pequeños negocios que quieren comenzar a vender por internet.",
        "benefit": "Empieza a vender online con una tienda profesional desde el primer día.",
        "features": [
          "Tienda virtual profesional lista para vender",
          "Hasta 50 productos",
          "Carrito de compras",
          "Checkout seguro",
          "Integración con métodos de pago",
          "Gestión básica de inventario",
          "Gestión de pedidos",
          "Integración con WhatsApp Business",
          "Correos automáticos de confirmación de compra",
          "Carga inicial de productos (20 productos)",
          "Capacitación personalizada de uso",
          "Diseño responsive para móviles",
          "Certificado SSL",
          "Soporte inicial post-lanzamiento",
          "Hosting y dominio incluidos por 6 meses"
        ]
      },
      {
        "name": "CRECE",
        "price": "S/ 3,000",
        "icon": "rocket_launch",
        "color": "from-blue-500 to-cyan-500",
        "featured": true,
        "tagline": "Ideal para negocios con catálogo consolidado que buscan aumentar ventas y optimizar la experiencia de compra.",
        "benefit": "Convierte más visitantes en clientes y aumenta tus ventas.",
        "features": [
          "Todo lo incluido en Emprende",
          "Hasta 300 productos",
          "Variantes y filtros avanzados",
          "Cupones de descuento",
          "Promociones automáticas",
          "Recuperación de carritos abandonados",
          "Productos relacionados",
          "Ventas cruzadas (“Clientes también compraron”)",
          "Lista de deseos (Wishlist)",
          "Panel de estadísticas",
          "Integración con Facebook Catalog",
          "Configuración de Meta Pixel",
          "Google Analytics 4 configurado",
          "Google Search Console configurado",
          "Optimización de velocidad",
          "Blog para posicionamiento de marca"
        ]
      },
      {
        "name": "ESCALA",
        "price": "Desde S/ 4,500 hasta S/ 7,000",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Ideal para empresas que necesitan automatización, personalización e integración con otros sistemas.",
        "benefit": "Automatiza tu operación y lleva tu negocio al siguiente nivel.",
        "features": [
          "Todo lo incluido en Crece",
          "Productos ilimitados",
          "Panel administrativo personalizado",
          "Dashboard ejecutivo",
          "Multiusuario con roles y permisos",
          "CRM integrado",
          "Integraciones ERP",
          "APIs personalizadas",
          "Automatización de procesos",
          "Automatización de correos de marketing",
          "Segmentación de clientes",
          "Programa de fidelización",
          "Sistema de cotizaciones",
          "Integración con operadores logísticos",
          "Flujos de aprobación",
          "Diseño UI/UX a medida",
          "Arquitectura preparada para escalar"
        ]
      }
    ],
    "plansHighlightsTitle": "Todas nuestras tiendas virtuales incluyen",
    "plansHighlights": [
      "Diseño profesional",
      "Panel administrativo",
      "Carrito de compras",
      "Certificado SSL",
      "WhatsApp integrado",
      "Adaptación móvil",
      "Capacitación inicial",
      "Soporte post-lanzamiento",
      "Hosting y dominio incluidos por 6 meses"
    ],
    "plansGuarantee": "Te acompañamos durante los primeros 30 días después del lanzamiento para resolver incidencias y realizar ajustes menores sin costo adicional.",
    "plansComparisonHeaders": {
      "start": "Emprende",
      "pro": "Crece",
      "premium": "Escala"
    },
    "plansComparisonIntro": "Compara herramientas de venta, automatización y control para elegir el nivel que tu negocio necesita.",
    "plansComparison": [
      {
        "label": "Productos",
        "start": "Hasta 50",
        "pro": "Hasta 300",
        "premium": "Ilimitados"
      },
      {
        "label": "Gestión de pedidos",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Inventario",
        "start": "Básico",
        "pro": true,
        "premium": true
      },
      {
        "label": "WhatsApp",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Carrito de compras",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Métodos de pago",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Carga inicial de productos",
        "start": "20",
        "pro": "20",
        "premium": "20"
      },
      {
        "label": "Capacitación",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Cupones",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Recuperación de carritos",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Wishlist",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Facebook Catalog",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Meta Pixel",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Google Analytics",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "CRM",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "ERP",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "APIs",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Automatizaciones",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Programa de fidelización",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Dashboard ejecutivo",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Soporte prioritario",
        "start": false,
        "pro": false,
        "premium": true
      }
    ]
  },
  "marketing-digital": {
    "slug": "marketing-digital",
    "heroImage": "/assets/services/marketing.jpg",
    "pageTitle": "Agencia de Marketing Digital en Perú | Redes, SEO y Ads | NeoWeb",
    "metaDescription": "Agencia de marketing digital en Perú: gestión de redes, contenido, SEO y publicidad digital para atraer clientes y hacer crecer tu marca. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "trending_up",
      "badgeText": "Marketing digital · Perú",
      "titleLine1": "Marketing digital",
      "titleHighlight": "que convierte",
      "description": "Estrategias de marketing digital en Perú para atraer clientes reales: redes sociales, contenido, SEO y campañas publicitarias orientadas a resultados medibles."
    },
    "plansSubtitle": "Gestión profesional de redes, contenido y crecimiento. Elige el plan según el nivel de estrategia y ejecución que tu marca necesita.",
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
          "8 publicaciones profesionales",
          "Diseño visual para redes sociales",
          "Copywriting persuasivo",
          "Calendario de contenido mensual",
          "Gestión de Facebook e Instagram",
          "Reporte mensual básico"
        ],
        "note": "El presupuesto publicitario es invertido directamente por el cliente. NeoWeb gestiona y optimiza las campañas."
      },
      {
        "name": "PRO",
        "price": "S/ 1,200",
        "period": "/mes",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "features": [
          "12 publicaciones profesionales",
          "2 reels mensuales",
          "Diseño premium personalizado",
          "Estrategia de contenido mensual",
          "Optimización de perfiles",
          "Investigación de competencia",
          "Reporte detallado",
          "Reunión mensual"
        ],
        "note": "El presupuesto publicitario es invertido directamente por el cliente. NeoWeb gestiona y optimiza las campañas."
      },
      {
        "name": "PREMIUM",
        "price": "S/ 1,800",
        "period": "/mes",
        "icon": "diamond",
        "color": "from-blue-500 to-cyan-500",
        "features": [
          "16 publicaciones profesionales",
          "4 reels mensuales",
          "Branding visual avanzado",
          "Gestión profesional de Meta Ads",
          "Optimización continua de campañas",
          "Estrategia de crecimiento",
          "Informes completos",
          "Reunión estratégica mensual",
          "Soporte prioritario"
        ],
        "note": "El presupuesto publicitario es invertido directamente por el cliente. NeoWeb gestiona y optimiza las campañas."
      }
    ],
    "plansHighlights": [
      "Facebook",
      "Instagram",
      "Copywriting",
      "Calendario de contenido",
      "Diseño profesional"
    ],
    "plansComparisonHeaders": {
      "start": "Start",
      "pro": "Pro",
      "premium": "Premium"
    },
    "plansComparison": [
      {
        "label": "Publicaciones profesionales",
        "start": "8 / mes",
        "pro": "12 / mes",
        "premium": "16 / mes"
      },
      {
        "label": "Reels mensuales",
        "start": false,
        "pro": "2",
        "premium": "4"
      },
      {
        "label": "Diseño visual",
        "start": "Profesional",
        "pro": "Premium",
        "premium": "Branding avanzado"
      },
      {
        "label": "Copywriting persuasivo",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Calendario de contenido",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Gestión Facebook e Instagram",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Estrategia de contenido",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Optimización de perfiles",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Investigación de competencia",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Gestión de Meta Ads",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Optimización de campañas",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Reporte",
        "start": "Básico",
        "pro": "Detallado",
        "premium": "Completo"
      },
      {
        "label": "Reunión mensual",
        "start": false,
        "pro": true,
        "premium": "Estratégica"
      },
      {
        "label": "Soporte prioritario",
        "start": false,
        "pro": false,
        "premium": true
      }
    ]
  },
  "rediseno-paginas-web": {
    "slug": "rediseno-paginas-web",
    "heroImage": "/assets/services/rediseño.jpg",
    "pageTitle": "Rediseño de Páginas Web en Perú | Moderniza tu Sitio | NeoWeb",
    "metaDescription": "Rediseño de páginas web en Perú: renovamos diseño, velocidad y SEO técnico para que tu sitio inspire confianza y consiga más clientes. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "refresh",
      "badgeText": "Rediseño web · Perú",
      "titleLine1": "Rediseño de",
      "titleHighlight": "páginas web",
      "description": "Modernizamos páginas web desactualizadas en Perú. Mejoramos diseño, velocidad, experiencia móvil y SEO técnico para que tu sitio genere más confianza y conversiones."
    },
    "plansSubtitle": "Transformamos sitios web desactualizados en herramientas modernas que generan confianza, mejoran la experiencia del usuario y ayudan a conseguir más clientes. Hosting y dominio incluidos durante los primeros 6 meses. Posteriormente, el mantenimiento es opcional y se adapta a las necesidades de cada proyecto.",
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
        "name": "ACTUALIZA",
        "price": "S/ 700",
        "icon": "star",
        "color": "from-gray-600 to-gray-800",
        "tagline": "Ideal para negocios que necesitan renovar su imagen online sin empezar de cero.",
        "benefit": "Una web más profesional que genera confianza desde la primera visita.",
        "features": [
          "Modernización visual del sitio actual",
          "Mejora de jerarquía y claridad de mensajes",
          "Ajustes de contenido orientados a conversión",
          "Mejora de estructura de navegación",
          "Adaptación responsive refinada",
          "Optimización básica de velocidad",
          "Hosting y dominio incluidos por 6 meses"
        ]
      },
      {
        "name": "EVOLUCIONA",
        "price": "S/ 1,200",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "tagline": "Ideal para empresas que buscan una experiencia de usuario moderna y más conversiones.",
        "benefit": "Una web más rápida, clara y persuasiva para captar más clientes.",
        "features": [
          "Todo lo incluido en Actualiza",
          "Rediseño completo de la interfaz",
          "Mejora de experiencia de usuario (UX)",
          "Nuevas animaciones y microinteracciones",
          "Optimización de velocidad avanzada",
          "SEO on-page para mejor posicionamiento",
          "CTAs y formularios orientados a captación",
          "Hosting y dominio incluidos por 6 meses"
        ]
      },
      {
        "name": "TRANSFORMA",
        "price": "S/ 2,000",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Ideal para marcas que necesitan una reconstrucción total y máximo rendimiento.",
        "benefit": "Una presencia digital renovada lista para competir y convertir.",
        "features": [
          "Todo lo incluido en Evoluciona",
          "Reconstrucción total del sitio",
          "Diseño UI/UX a medida",
          "Optimización Premium de velocidad",
          "SEO técnico completo",
          "Migración profesional sin pérdida de información",
          "Arquitectura preparada para escalar",
          "Prioridad de soporte",
          "Hosting y dominio incluidos por 6 meses"
        ]
      }
    ],
    "plansHighlightsTitle": "Todos nuestros rediseños incluyen",
    "plansHighlights": [
      "Imagen profesional",
      "Mejor experiencia de usuario",
      "Mayor velocidad",
      "Mejor posicionamiento",
      "Enfoque en conversiones",
      "Hosting y dominio incluidos por 6 meses"
    ],
    "plansComparisonHeaders": {
      "start": "Actualiza",
      "pro": "Evoluciona",
      "premium": "Transforma"
    },
    "plansComparisonIntro": "Compara el nivel de renovación para elegir el rediseño que mejor impulsa tu negocio.",
    "plansComparison": [
      {
        "label": "Modernización visual",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Mejora de estructura",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Responsive",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Rediseño completo de interfaz",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Mejora de UX",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Optimización de velocidad",
        "start": "Básica",
        "pro": "Avanzada",
        "premium": "Premium"
      },
      {
        "label": "SEO",
        "start": false,
        "pro": "On-page",
        "premium": "Técnico completo"
      },
      {
        "label": "CTAs orientados a captación",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Reconstrucción total",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Diseño UI/UX a medida",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Migración profesional",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Soporte prioritario",
        "start": false,
        "pro": false,
        "premium": true
      }
    ]
  },
  "aplicaciones-moviles": {
    "slug": "aplicaciones-moviles",
    "heroImage": "/assets/services/app movil.jpg",
    "pageTitle": "Desarrollo de Apps Móviles en Perú | iOS y Android | NeoWeb",
    "metaDescription": "Desarrollo de aplicaciones móviles en Perú para iOS y Android. Apps a medida, rápidas y seguras para digitalizar tu negocio. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "phone_android",
      "badgeText": "Apps móviles · Perú",
      "titleLine1": "Aplicaciones móviles",
      "titleHighlight": "iOS y Android",
      "description": "Desarrollo de aplicaciones móviles a medida en Perú. Apps para iOS y Android con buena experiencia de usuario, rendimiento y seguridad, listas para escalar tu negocio."
    },
    "plansSubtitle": "Aplicaciones móviles que digitalizan tu negocio, mejoran la experiencia de tus usuarios y abren nuevas oportunidades de crecimiento. Planes pensados para startups, emprendedores y empresas en expansión.",
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
        "name": "LANZAMIENTO",
        "price": "S/ 3,000",
        "icon": "star",
        "color": "from-teal-500 to-cyan-500",
        "tagline": "Ideal para emprendedores y startups que desean validar una idea de negocio o digitalizar un proceso básico.",
        "benefit": "Lanza tu aplicación rápidamente y valida tu idea sin realizar una gran inversión.",
        "features": [
          "Aplicación Android",
          "Hasta 6 pantallas",
          "Diseño moderno y profesional",
          "Formulario de contacto",
          "Integración con WhatsApp",
          "Navegación intuitiva",
          "Publicación en Google Play Store",
          "Capacitación básica de uso",
          "Pruebas antes del lanzamiento",
          "Soporte inicial post-lanzamiento"
        ]
      },
      {
        "name": "CRECIMIENTO",
        "price": "S/ 5,500",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "tagline": "Ideal para negocios que necesitan gestionar usuarios y ofrecer una experiencia más completa.",
        "benefit": "Escala tu aplicación y gestiona usuarios de forma profesional.",
        "features": [
          "Todo lo incluido en Lanzamiento",
          "Android e iOS",
          "Registro de usuarios",
          "Inicio de sesión",
          "Recuperación de contraseña",
          "Datos sincronizados en la nube",
          "Notificaciones Push",
          "Panel administrativo básico",
          "Gestión de usuarios",
          "Analítica básica",
          "Publicación en Google Play y App Store",
          "Capacitación personalizada"
        ]
      },
      {
        "name": "ESCALA",
        "price": "Desde S/ 8,000",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Ideal para empresas que requieren una plataforma móvil completa y preparada para crecer.",
        "benefit": "Convierte tu aplicación en una plataforma profesional preparada para crecer junto a tu negocio.",
        "features": [
          "Todo lo incluido en Crecimiento",
          "Dashboard administrativo avanzado",
          "Conexión con sistemas externos",
          "Pasarelas de pago",
          "Roles y permisos",
          "Reportes personalizados",
          "Automatizaciones",
          "Geolocalización",
          "Chat interno",
          "Integración con CRM",
          "Integración con ERP",
          "Preparado para escalar con tu negocio",
          "Diseño UI/UX personalizado",
          "Soporte prioritario",
          "Consultoría técnica"
        ]
      }
    ],
    "plansHighlightsTitle": "Todas nuestras aplicaciones incluyen",
    "plansHighlights": [
      "Diseño profesional",
      "Pruebas antes del lanzamiento",
      "Código escalable",
      "Capacitación inicial",
      "Soporte post-lanzamiento",
      "Publicación en tiendas",
      "Optimización para dispositivos móviles",
      "Asesoría durante el desarrollo"
    ],
    "plansGuarantee": "Te acompañamos durante los primeros 30 días después del lanzamiento para resolver incidencias y realizar ajustes menores sin costo adicional.",
    "plansComparisonHeaders": {
      "start": "Lanzamiento",
      "pro": "Crecimiento",
      "premium": "Escala"
    },
    "plansComparisonIntro": "Compara alcance, plataformas y capacidades para elegir el plan que mejor acompaña el crecimiento de tu negocio.",
    "plansComparison": [
      {
        "label": "Android",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "iOS",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Publicación en tiendas",
        "start": "Google Play",
        "pro": "Play + App Store",
        "premium": "Play + App Store"
      },
      {
        "label": "Registro de usuarios",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Datos en la nube",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Notificaciones Push",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Panel administrativo",
        "start": false,
        "pro": "Básico",
        "premium": "Avanzado"
      },
      {
        "label": "Analítica",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Conexión con sistemas externos",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Pagos online",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Geolocalización",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Chat",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "CRM",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "ERP",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Roles y permisos",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Automatizaciones",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Dashboard avanzado",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Soporte prioritario",
        "start": false,
        "pro": false,
        "premium": true
      }
    ]
  },
  "digitalizacion-procesos": {
    "slug": "digitalizacion-procesos",
    "heroImage": "/assets/services/software a medida.jpg",
    "pageTitle": "Software a Medida en Perú | Digitalización de Procesos | NeoWeb",
    "metaDescription": "Software a medida y digitalización de procesos en Perú. Sistemas que automatizan operaciones, reducen errores y dan control total a tu empresa. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "settings",
      "badgeText": "Software a medida · Perú",
      "titleLine1": "Software a medida",
      "titleHighlight": "para empresas",
      "description": "Desarrollo de software a medida y digitalización de procesos en Perú. Sistemas personalizados que automatizan operaciones, reducen costos y dan visibilidad a tu negocio."
    },
    "plansSubtitle": "Software a medida para automatizar operaciones, reducir errores y dar control total a tu negocio. Digitaliza procesos, optimiza tu operación o transforma tu empresa completa.",
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
        "name": "DIGITALIZA",
        "price": "S/ 1,500",
        "icon": "star",
        "color": "from-gray-600 to-gray-800",
        "tagline": "Ideal para empresas que aún utilizan procesos manuales, Excel o documentos físicos.",
        "benefit": "Reduce tareas manuales y organiza tu información en un solo lugar.",
        "features": [
          "Digitalización de un proceso específico",
          "Formularios personalizados",
          "Organización centralizada de información",
          "Panel de gestión simple",
          "Automatización básica",
          "Registro y consulta de información",
          "Diseño intuitivo",
          "Capacitación inicial",
          "Soporte post-entrega"
        ]
      },
      {
        "name": "OPTIMIZA",
        "price": "S/ 3,500",
        "icon": "rocket_launch",
        "color": "from-blue-500 to-cyan-500",
        "featured": true,
        "tagline": "Ideal para empresas que necesitan controlar mejor sus operaciones y centralizar información.",
        "benefit": "Centraliza la operación de tu negocio y mejora el control de tus procesos.",
        "features": [
          "Todo lo incluido en Digitaliza",
          "Hasta 5 procesos digitalizados",
          "Panel administrativo",
          "Gestión de usuarios",
          "Roles y permisos",
          "Reportes básicos",
          "Integraciones esenciales",
          "Flujo de trabajo personalizado",
          "Historial de actividades",
          "Capacitación para el equipo",
          "Soporte ampliado"
        ]
      },
      {
        "name": "TRANSFORMA",
        "price": "Desde S/ 6,000",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Ideal para empresas que buscan una transformación digital completa.",
        "benefit": "Transforma procesos manuales en un sistema inteligente que escala junto con tu empresa.",
        "features": [
          "Todo lo incluido en Optimiza",
          "Sistema completamente personalizado",
          "Automatizaciones avanzadas",
          "Dashboard ejecutivo",
          "Reportes en tiempo real",
          "Conexión con sistemas externos",
          "Integración con CRM",
          "Integración con ERP",
          "Múltiples módulos",
          "Gestión avanzada de usuarios",
          "Preparado para crecer con tu empresa",
          "Flujos complejos de negocio",
          "Capacitación completa",
          "Consultoría estratégica",
          "Soporte prioritario"
        ]
      }
    ],
    "plansHighlightsTitle": "¿Qué puedes digitalizar?",
    "plansHighlights": [
      "Gestión de pacientes",
      "Inventarios",
      "Ventas",
      "Compras",
      "Recursos humanos",
      "Reservas",
      "Producción",
      "Logística",
      "Seguimiento de clientes",
      "Reportes empresariales"
    ],
    "plansBenefitsTitle": "Beneficios de implementar software a medida",
    "plansBenefits": [
      "Menos trabajo manual",
      "Menos errores operativos",
      "Mayor control del negocio",
      "Información centralizada",
      "Procesos más rápidos",
      "Mejor toma de decisiones",
      "Escalabilidad",
      "Ahorro de tiempo"
    ],
    "plansGuaranteeLabel": "Garantía de implementación",
    "plansGuarantee": "Te acompañamos durante los primeros 30 días posteriores a la entrega para resolver incidencias y realizar ajustes menores sin costo adicional.",
    "plansComparisonHeaders": {
      "start": "Digitaliza",
      "pro": "Optimiza",
      "premium": "Transforma"
    },
    "plansComparisonIntro": "Compara el nivel de transformación digital para elegir la solución que tu operación necesita.",
    "plansComparison": [
      {
        "label": "Procesos digitalizados",
        "start": "1",
        "pro": "Hasta 5",
        "premium": "Ilimitados / a medida"
      },
      {
        "label": "Información centralizada",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "Panel administrativo",
        "start": "Simple",
        "pro": true,
        "premium": "Avanzado"
      },
      {
        "label": "Gestión de usuarios",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Roles y permisos",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Automatizaciones",
        "start": "Básicas",
        "pro": true,
        "premium": "Avanzadas"
      },
      {
        "label": "Reportes",
        "start": false,
        "pro": "Básicos",
        "premium": "Tiempo real"
      },
      {
        "label": "Dashboard ejecutivo",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Conexión con sistemas externos",
        "start": false,
        "pro": "Esenciales",
        "premium": true
      },
      {
        "label": "Integración CRM",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Integración ERP",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Capacitación",
        "start": "Inicial",
        "pro": "Equipo",
        "premium": "Completa"
      },
      {
        "label": "Soporte prioritario",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Escalable con tu empresa",
        "start": false,
        "pro": false,
        "premium": true
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
