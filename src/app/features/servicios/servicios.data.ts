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
    "pageTitle": "Páginas Web en Perú | Una página o un sitio con menú | NeoWeb",
    "metaDescription": "Elige lo que recibes: una sola página para que te escriban, un sitio de 5 páginas, o un sitio con página por servicio. Hecho a medida. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "web",
      "badgeText": "Desarrollo web · Perú",
      "titleLine1": "Páginas web",
      "titleHighlight": "fáciles de elegir",
      "description": "Dime qué necesita tu cliente al entrar. ¿Solo escribirte? ¿Conocer la empresa? ¿Ver un servicio en concreto? Cada plan entrega una cosa distinta, hecha a medida, sin plantillas."
    },
    "plansSubtitle": "Landing: una página. Sitio: cinco páginas con menú. Sitio Pro: eso más páginas sueltas para tus servicios. En los tres va el nombre de tu web y el alojamiento los primeros 6 meses.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Qué recibes",
      "titleLine1": "Así se",
      "titleHighlight": "entiende",
      "subtitle": "Mira qué llega a tu negocio con cada plan. No es la misma web “un poco más grande”."
    },
    "includes": [
      {
        "icon": "web_asset",
        "title": "Landing: una página",
        "description": "Todo está en una sola pantalla al bajar: qué ofreces, por qué tú, y un botón para escribirte. Sirve para un anuncio o para pasar el link por WhatsApp."
      },
      {
        "icon": "menu",
        "title": "Sitio: 5 páginas",
        "description": "Arriba hay un menú: Inicio, Nosotros, Servicios, Preguntas y Contacto. Sirve para que te conozcan, no solo para un anuncio."
      },
      {
        "icon": "layers",
        "title": "Sitio Pro: páginas por servicio",
        "description": "Lo mismo que el Sitio, y además hasta 4 páginas extra (por ejemplo “Ortodoncia”, “El equipo” o “Nuestra sede”). Ves cuánta gente entra."
      },
      {
        "icon": "code",
        "title": "En los tres planes",
        "description": "Diseño hecho para ti, se ve bien en el celular, botón para escribirte, nombre de tu web y alojamiento 6 meses."
      }
    ],
    "showBenefitsSection": true,
    "benefits": [
      {
        "icon": "code",
        "title": "Sin plantillas",
        "description": "Cada proyecto se programa a medida. No usamos Wix, WordPress ni temas genéricos."
      },
      {
        "icon": "devices",
        "title": "Se ve bien en el celular",
        "description": "Diseño adaptado a móvil, tablet y computadora."
      },
      {
        "icon": "chat",
        "title": "WhatsApp y contacto",
        "description": "El visitante puede escribirte sin adivinar cómo."
      },
      {
        "icon": "https",
        "title": "Nombre de tu web 6 meses",
        "description": "El nombre (ej. tunegocio.pe) y el lugar donde se guarda la web van incluidos medio año. Después puedes seguir conmigo o llevarla a otro lado."
      },
      {
        "icon": "search",
        "title": "Google puede encontrarla",
        "description": "La web queda preparada para aparecer cuando alguien busca tu negocio. No significa salir en el puesto número 1."
      },
      {
        "icon": "support_agent",
        "title": "Soporte al lanzar",
        "description": "Acompañamiento para publicar y corregir ajustes menores después de la entrega."
      }
    ],
    "processSection": {
      "titleLine1": "Método de",
      "titleHighlight": "trabajo",
      "subtitle": "Primero cerramos qué entra. Después diseño, armado, pruebas y la subimos."
    },
    "fullcodeSection": {
      "badgeText": "Full Code",
      "titleLine1": "Código propio y",
      "titleHighlight": "optimizado",
      "subtitle": "Hecha a medida, sin plantillas, para que cargue rápido y se pueda ampliar después."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Una página o",
      "titleHighlight": "un sitio?",
      "description": "Si solo quieres que te escriban, Landing. Si quieren conocerte, Sitio. Si cada servicio merece su propia página, Sitio Pro."
    },
    "features": [
      {
        "icon": "code",
        "title": "Sin plantillas",
        "description": "Cada proyecto se programa a medida. No usamos Wix, WordPress ni temas genéricos."
      },
      {
        "icon": "devices",
        "title": "Se ve bien en el celular",
        "description": "Diseño adaptado a móvil, tablet y computadora."
      },
      {
        "icon": "chat",
        "title": "WhatsApp y contacto",
        "description": "El visitante puede escribirte sin adivinar cómo."
      },
      {
        "icon": "https",
        "title": "Nombre de tu web 6 meses",
        "description": "El nombre (ej. tunegocio.pe) y el lugar donde se guarda la web van incluidos medio año. Después puedes seguir conmigo o llevarla a otro lado."
      },
      {
        "icon": "search",
        "title": "Google puede encontrarla",
        "description": "La web queda preparada para aparecer cuando alguien busca tu negocio. No significa salir en el puesto número 1."
      },
      {
        "icon": "support_agent",
        "title": "Soporte al lanzar",
        "description": "Acompañamiento para publicar y corregir ajustes menores después de la entrega."
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Hablamos y cerramos qué entra",
        "description": "Antes de diseñar, queda claro si recibes una página, cinco páginas o páginas extra. Así no hay sorpresas a mitad de camino.",
        "icon": "assessment"
      },
      {
        "step": "02",
        "title": "Diseño",
        "description": "Te muestro cómo se va a ver: una página larga, o un sitio con menú, según el plan.",
        "icon": "palette"
      },
      {
        "step": "03",
        "title": "Armado",
        "description": "Lo programo desde cero, a la medida de tu negocio. No uso plantillas de Wix ni WordPress.",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Revisión",
        "description": "Probamos en el celular, el botón de WhatsApp y que todo cargue bien, antes de publicarla.",
        "icon": "speed"
      },
      {
        "step": "05",
        "title": "Al aire",
        "description": "La subo con tu nombre de web. Queda lista para compartir el link o para que te busquen.",
        "icon": "launch"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "flag",
        "title": "Sabes qué estás comprando",
        "description": "Landing, Sitio y Sitio Pro no son “más de lo mismo”. Cada uno te entrega un tipo de web distinto."
      },
      {
        "icon": "code",
        "title": "Hecha para ti, no con un molde",
        "description": "Se programa a medida. Se ve y funciona distinto a una web armada con plantilla."
      },
      {
        "icon": "view_agenda",
        "title": "Páginas de verdad",
        "description": "En el Sitio, Inicio y Nosotros son páginas distintas, con el menú arriba. En la Landing todo está en una sola página al bajar."
      },
      {
        "icon": "https",
        "title": "Nombre de web 6 meses",
        "description": "El .pe o .com y el alojamiento van en el precio al inicio. Luego decides si sigues con mantenimiento o te la llevas."
      },
      {
        "icon": "tune",
        "title": "Se puede ampliar después",
        "description": "Puedes empezar con Landing y más adelante pasar a Sitio. Un panel para que tú edites textos se cotiza aparte."
      },
      {
        "icon": "support_agent",
        "title": "Hablas con quien la hace",
        "description": "Sin pasar por una cuenta de agencia ni cambiar de persona a mitad del proyecto."
      }
    ],

    "plans": [
      {
        "name": "LANDING",
        "price": "S/ 600",
        "icon": "star",
        "color": "from-blue-500 to-cyan-500",
        "tagline": "Recibes una sola página web. Quien abre el link baja y te escribe. No hay menú con más páginas.",
        "benefit": "Ideal para un anuncio, un lanzamiento o para pasar el link por WhatsApp.",
        "features": [
          "Una página: todo se ve al bajar, como un folleto digital",
          "Portada con tu oferta y un botón para contactarte",
          "Por qué elegirte, preguntas frecuentes y datos de contacto",
          "Se ve bien en el celular",
          "Botón de WhatsApp o formulario para que te escriban",
          "Nombre de tu web (ej. tunegocio.pe) y alojamiento 6 meses",
          "Lista en aproximadamente 1 semana"
        ],
        "note": "No incluye páginas aparte de Nosotros o Servicios. Si la gente necesita recorrer tu empresa, elige Sitio."
      },
      {
        "name": "SITIO",
        "price": "S/ 1,000",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "tagline": "Recibes un sitio con 5 páginas y un menú arriba para pasar de una a otra.",
        "benefit": "Quien llega entiende quién eres, qué ofreces y cómo escribirte.",
        "features": [
          "Página Inicio: lo esencial de tu negocio (aquí también va por qué elegirte)",
          "Página Nosotros: tu historia o tu equipo",
          "Página Servicios: todo lo que ofreces en una sola lista",
          "Página de preguntas frecuentes",
          "Página Contacto: formulario y WhatsApp",
          "Se ve bien en el celular",
          "Nombre de tu web y alojamiento 6 meses",
          "Lista en 1 a 2 semanas"
        ],
        "note": "Tus servicios están juntos en una página. Si “Ortodoncia” o “Delivery” necesitan su propia página, elige Sitio Pro."
      },
      {
        "name": "SITIO PRO",
        "price": "S/ 1,500",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Recibes el Sitio y hasta 4 páginas extra que tú eliges, por ejemplo un servicio, el equipo o una sede.",
        "benefit": "La persona puede abrir una página concreta (“Limpieza”, “Cusco”) en vez de una lista larga.",
        "features": [
          "Las 5 páginas del Sitio",
          "Hasta 4 páginas extra a tu elección (un servicio, equipo, sede, casos o cómo trabajas)",
          "Ves cuánta gente entra a tu web y desde dónde",
          "Cada página extra queda pensada para que te encuentren al buscar ese servicio",
          "Enlaces a tu Facebook o Instagram",
          "Lista en 2 a 3 semanas"
        ],
        "note": "Tú no editas la web solo: cada cambio me lo pides. Un panel para publicar tú, o conectar el formulario a otra herramienta, se cotiza aparte."
      }
    ],
    "plansHighlightsTitle": "En los tres planes va incluido",
    "plansHighlights": [
      "Diseño hecho para tu negocio, no con plantilla",
      "Se ve bien en el celular",
      "Botón para escribirte (WhatsApp o formulario)",
      "Candado de seguridad al abrir la web",
      "Nombre de tu web y alojamiento 6 meses"
    ],
    "plansBenefitsTitle": "Esto no entra en el precio (se cotiza)",
    "plansBenefits": [
      "Un panel para que tú cambies textos o fotos sin pedirme un cambio",
      "Que el formulario llegue a tu sistema de clientes u otra herramienta",
      "Otra página tipo anuncio si ya tienes un Sitio conmigo"
    ],
    "plansGuaranteeLabel": "Después de publicarla",
    "plansGuarantee": "Los primeros 30 días te ayudo a corregir fallas y detalles chicos que entren en el plan, sin costo extra.",
    "plansComparisonHeaders": {
      "start": "Landing",
      "pro": "Sitio",
      "premium": "Sitio Pro"
    },
    "plansComparisonIntro": "Lee la primera fila: ahí está lo que te llevas a casa. El resto son detalles.",
    "plansComparison": [
      {
        "label": "Qué te entrego",
        "start": "1 página (bajas y listo)",
        "pro": "5 páginas con menú",
        "premium": "Esas 5 + hasta 4 más"
      },
      {
        "label": "Para qué sirve",
        "start": "Que te escriban",
        "pro": "Que te conozcan",
        "premium": "Que elijan un servicio"
      },
      {
        "label": "¿Hay menú para cambiar de página?",
        "start": "No",
        "pro": "Sí",
        "premium": "Sí"
      },
      {
        "label": "¿Un servicio puede tener su propia página?",
        "start": "No",
        "pro": "No (van en una lista)",
        "premium": "Sí, hasta 4"
      },
      {
        "label": "¿Ves cuánta gente entra?",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "¿Sirve para un anuncio?",
        "start": "Sí, es su uso principal",
        "pro": "Puede, pero no es el foco",
        "premium": "Puede, pero no es el foco"
      },
      {
        "label": "¿Tú editas la web solo?",
        "start": "No",
        "pro": "No",
        "premium": "No (se cotiza aparte)"
      },
      {
        "label": "Cuándo está lista",
        "start": "Unos 7 días",
        "pro": "1 a 2 semanas",
        "premium": "2 a 3 semanas"
      }
    ]
  },
  "tienda-virtual": {
    "slug": "tienda-virtual",
    "heroImage": "/assets/services/tienda online.jpg",
    "pageTitle": "Tienda Online en Perú | Empezar a vender o vender más | NeoWeb",
    "metaDescription": "Tienda a medida en Perú: empezar a cobrar, vender más con descuentos y anuncios, o que la usen varias personas. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "shopping_cart",
      "badgeText": "Tienda online · Perú",
      "titleLine1": "Tienda online",
      "titleHighlight": "fácil de elegir",
      "description": "Tres planes. Emprende: el cliente paga y tú ves el pedido. Crece: talla, descuentos y anuncios. Escala: si venden varios en el equipo o el pedido tiene que llegar a otro programa que ya usas."
    },
    "plansSubtitle": "Emprende es para empezar a cobrar. Crece es si hay talla o color, cupones o anuncios. Escala es si no eres solo tú: un empleado también ve pedidos, o cada compra se copia a otro programa. El nombre de tu web va 6 meses en todos.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Qué recibes",
      "titleLine1": "Así se",
      "titleHighlight": "entiende",
      "subtitle": "No es la misma tienda “con más productos”. Cada plan sirve para un momento distinto."
    },
    "includes": [
      {
        "icon": "storefront",
        "title": "Emprende: empezar a vender",
        "description": "El cliente elige, paga y te llega el pedido. Productos de un solo tipo (un frasco, un pack). Tú y nadie más en la pantalla de pedidos."
      },
      {
        "icon": "trending_up",
        "title": "Crece: vender más",
        "description": "Lo mismo, y además talla o color, cupones, un aviso si dejan la compra a medias, y la tienda lista para anuncios de Facebook e Instagram."
      },
      {
        "icon": "groups",
        "title": "Escala: ya no vendes solo",
        "description": "Lo de Crece, más una de estas dos cosas (la eliges al cotizar): que un empleado también entre a ver pedidos, o que cada compra se copie al programa que ya usas (por ejemplo un Excel o el sistema de tu local)."
      },
      {
        "icon": "payments",
        "title": "En los tres planes",
        "description": "Carrito, un tipo de pago que acordamos (Yape o tarjeta), WhatsApp al comprar, pantalla para productos y pedidos, se ve en el celular, nombre de tu web 6 meses."
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "trabajo",
      "subtitle": "Primero vemos cómo vendes. Después diseño, armado, el pago y la subimos."
    },
    "fullcodeSection": {
      "badgeText": "A medida",
      "titleLine1": "Tienda hecha",
      "titleHighlight": "para ti",
      "subtitle": "No es una plantilla de Shopify ni WordPress. Entra lo del plan que eliges, no “cualquier programa”."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Cuál tienda",
      "titleHighlight": "necesitas?",
      "description": "¿Solo cobrar? Emprende. ¿Talla, cupones o anuncios? Crece. ¿Un empleado también ve pedidos, o el pedido llega a otro programa? Escala, te armo el precio."
    },
    "features": [
      {
        "icon": "storefront",
        "title": "Emprende: empezar a vender",
        "description": "El cliente elige, paga y te llega el pedido. Productos de un solo tipo (un frasco, un pack). Tú y nadie más en la pantalla de pedidos."
      },
      {
        "icon": "trending_up",
        "title": "Crece: vender más",
        "description": "Lo mismo, y además talla o color, cupones, un aviso si dejan la compra a medias, y la tienda lista para anuncios de Facebook e Instagram."
      },
      {
        "icon": "groups",
        "title": "Escala: ya no vendes solo",
        "description": "Lo de Crece, más una de estas dos cosas (la eliges al cotizar): que un empleado también entre a ver pedidos, o que cada compra se copie al programa que ya usas (por ejemplo un Excel o el sistema de tu local)."
      },
      {
        "icon": "payments",
        "title": "En los tres planes",
        "description": "Carrito, un tipo de pago que acordamos (Yape o tarjeta), WhatsApp al comprar, pantalla para productos y pedidos, se ve en el celular, nombre de tu web 6 meses."
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Cómo vendes",
        "description": "¿El producto es uno solo o tiene talla? ¿Vas a hacer anuncios? ¿Alguien más va a ver los pedidos? Con eso sale el plan.",
        "icon": "inventory"
      },
      {
        "step": "02",
        "title": "Cómo se compra",
        "description": "Diseño el camino: ver productos, carrito, pagar y el mensaje de “ya recibí tu pedido”.",
        "icon": "shopping_cart"
      },
      {
        "step": "03",
        "title": "Armado",
        "description": "Hago la tienda desde cero, para tu negocio. Sin plantilla.",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Pagos",
        "description": "Dejamos un tipo de pago (Yape o tarjeta) y hacemos una compra de prueba.",
        "icon": "payment"
      },
      {
        "step": "05",
        "title": "Al aire",
        "description": "Subo la tienda, te muestro dónde ves productos y pedidos, y cargo 20 productos para que arranques.",
        "icon": "dashboard"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "flag",
        "title": "Sabes qué estás comprando",
        "description": "Emprende, Crece y Escala no son “más productos”. Cada uno sirve para un momento distinto de tu negocio."
      },
      {
        "icon": "code",
        "title": "Hecha para ti, no con un molde",
        "description": "Se arma a medida. No es una tienda genérica copiada de internet."
      },
      {
        "icon": "payments",
        "title": "Pagas como en Perú",
        "description": "Elegimos Yape o tarjeta. Si más adelante quieres los dos, se cotiza el segundo."
      },
      {
        "icon": "inventory_2",
        "title": "Tú ves los pedidos",
        "description": "Tienes una pantalla para productos y pedidos. No es un Excel suelto ni solo WhatsApp."
      },
      {
        "icon": "tune",
        "title": "Se puede ampliar después",
        "description": "Puedes empezar en Emprende. Talla, cupones o anuncios van en Crece. Un empleado extra o otro programa, en Escala."
      },
      {
        "icon": "support_agent",
        "title": "Hablas con quien la hace",
        "description": "Sin pasar por una secretaria de agencia ni cambiar de persona a mitad del proyecto."
      }
    ],
    "plans": [
      {
        "name": "EMPRENDE",
        "price": "S/ 2,000",
        "icon": "star",
        "color": "from-gray-700 to-gray-900",
        "tagline": "Recibes una tienda para empezar a cobrar: el cliente elige, paga y tú ves el pedido.",
        "benefit": "Para productos simples (un frasco, un curso, un pack). Sin talla ni color.",
        "features": [
          "Catálogo, carrito y pago en la misma tienda",
          "Un tipo de pago: Yape o tarjeta (lo acordamos)",
          "Tú ves los pedidos en una pantalla",
          "WhatsApp y correo cuando alguien compra",
          "Subo 20 productos para arrancar; el resto los cargas tú",
          "Te enseño a usar esa pantalla",
          "Se ve bien en el celular",
          "Nombre de tu web 6 meses"
        ],
        "note": "Si cada producto tiene talla o color, o quieres cupones y anuncios, el plan es Crece. No es “tengo 60 productos”: es cómo vendes."
      },
      {
        "name": "CRECE",
        "price": "S/ 3,000",
        "icon": "rocket_launch",
        "color": "from-blue-500 to-cyan-500",
        "featured": true,
        "tagline": "Recibes la tienda de Emprende más lo que hace falta para cerrar más ventas: no “más productos por capricho”.",
        "benefit": "Talla o color, cupones, aviso si dejan la compra, y lista para anuncios de Facebook e Instagram.",
        "features": [
          "Todo lo de Emprende",
          "Talla, color u otra opción",
          "Cupones de descuento",
          "Aviso si alguien deja la compra a medias",
          "Ves cuánta gente entra a la tienda",
          "Lista para anuncios de Facebook e Instagram",
          "Nombre de tu web 6 meses"
        ],
        "note": "El salto no es “puedo tener 300 productos”. Es que la tienda ayuda a vender. Lista de deseos, blog u otro tipo de pago se cotizan aparte."
      },
      {
        "name": "ESCALA",
        "price": "Desde S/ 4,500",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Recibes lo de Crece más una cosa extra que eliges al cotizar: un empleado ve pedidos, o cada compra se copia al programa que ya usas.",
        "benefit": "Para cuando ya no vendes solo: hay un empleado, o los pedidos tienen que verse en otro programa.",
        "features": [
          "Todo lo de Crece",
          "Eliges UNA de estas dos al cotizar",
          "Opción 1: un empleado también entra a ver pedidos",
          "Opción 2: cada compra se copia al programa que ya usas (un Excel o el sistema de tu local)",
          "S/ 4,500 es el piso; si pides las dos cosas o algo más, se cotiza extra",
          "Nombre de tu web 6 meses"
        ],
        "note": "Si vendes solo tú y no necesitas copiar pedidos a otro programa, quédate en Crece. Envíos con courier, puntos de cliente u otro programa extra se cotizan aparte."
      }
    ],
    "plansHighlightsTitle": "En los tres planes va incluido",
    "plansHighlights": [
      "Carrito y pedidos",
      "Un tipo de pago: Yape o tarjeta",
      "Pantalla para productos y pedidos",
      "WhatsApp al comprar",
      "20 productos cargados para arrancar",
      "Se ve bien en el celular",
      "Te enseño a usar la pantalla de pedidos",
      "Nombre de tu web 6 meses"
    ],
    "plansBenefitsTitle": "Esto se cotiza aparte",
    "plansBenefits": [
      "Un segundo tipo de pago (Yape y tarjeta)",
      "Cálculo de envíos con un courier (Olva, Shalom u otro)",
      "Lista de deseos, blog o “clientes también compraron”",
      "Una segunda cosa extra (otro empleado, otro programa…)"
    ],
    "plansGuaranteeLabel": "Después de publicarla",
    "plansGuarantee": "Los primeros 30 días te ayudo a corregir fallas y detalles chicos que entren en el plan, sin costo extra.",
    "plansComparisonHeaders": {
      "start": "Emprende",
      "pro": "Crece",
      "premium": "Escala"
    },
    "plansComparisonIntro": "Lee la primera fila: ahí está el trabajo. Escala no es “más productos”: es si hay equipo o otro programa.",
    "plansComparison": [
      {
        "label": "Para qué sirve",
        "start": "Empezar a cobrar",
        "pro": "Vender más",
        "premium": "Ya no vendes solo"
      },
      {
        "label": "Qué te entrego",
        "start": "Tienda que cobra y toma pedidos",
        "pro": "Eso + talla, cupones y anuncios",
        "premium": "Eso + una de las dos extras"
      },
      {
        "label": "¿Productos con talla o color?",
        "start": "No",
        "pro": "Sí",
        "premium": "Sí"
      },
      {
        "label": "Cupones",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Aviso si dejan la compra a medias",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Ves cuánta gente entra?",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Sirve para anuncios de Facebook e Instagram?",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Otra persona puede entrar a ver pedidos?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "¿El pedido puede ir a otro programa?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "Precio",
        "start": "S/ 2,000",
        "pro": "S/ 3,000",
        "premium": "Desde S/ 4,500"
      }
    ]
  },
  "marketing-digital": {
    "slug": "marketing-digital",
    "heroImage": "/assets/services/marketing.jpg",
    "pageTitle": "Marketing Digital en Perú | Redes, Contenido y Meta Ads | NeoWeb",
    "metaDescription": "Gestión de redes en Perú: presencia, contenido hacia tu web o captación con Meta Ads. Facebook e Instagram. La pauta no está en el fee. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "trending_up",
      "badgeText": "Marketing digital · Perú",
      "titleLine1": "Marketing digital",
      "titleHighlight": "con un objetivo claro",
      "description": "Tres planes distintos: presencia en redes, contenido que lleva gente a tu web, o captación con Meta Ads. Facebook e Instagram. La pauta, si la hay, la inviertes tú."
    },
    "plansSubtitle": "No es más publicaciones por más dinero. Cada plan resuelve un trabajo distinto: verse profesional, traer consultas a tu web, o captar con anuncios.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Alcance",
      "titleLine1": "Qué hace",
      "titleHighlight": "cada plan",
      "subtitle": "Start mantiene tu marca visible. Pro dirige el contenido a tu web o WhatsApp. Premium suma anuncios en Meta."
    },
    "includes": [
      {
        "icon": "share",
        "title": "Presencia en redes",
        "description": "Facebook e Instagram activas, con diseño y textos profesionales. El trabajo de Start."
      },
      {
        "icon": "ads_click",
        "title": "Contenido con destino",
        "description": "Publicaciones y reels pensados para generar consultas o visitas a tu web. El trabajo de Pro."
      },
      {
        "icon": "campaign",
        "title": "Meta Ads",
        "description": "Campañas pagadas solo en Premium. El fee es por gestionarlas; la pauta la pones tú."
      },
      {
        "icon": "analytics",
        "title": "Reporte según el plan",
        "description": "Start: lo publicado. Pro: clics y consultas. Premium: costo por consulta o lead."
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "trabajo",
      "subtitle": "Un mes para entender el negocio y armar el calendario. Los siguientes, para publicar, medir y ajustar."
    },
    "fullcodeSection": {
      "badgeText": "Claridad",
      "titleLine1": "Lo que sí",
      "titleHighlight": "medimos",
      "subtitle": "Métricas que coinciden con el plan que contratas. Sin promesas de canales que no están incluidos."
    },
    "ctaSection": {
      "theme": "light",
      "titleLine1": "¿Cuál plan",
      "titleHighlight": "te queda?",
      "description": "Cuéntame si necesitas presencia, más consultas o anuncios. Te digo el plan sin rodeos."
    },
    "features": [
      {
        "icon": "share",
        "title": "Presencia en redes",
        "description": "Facebook e Instagram activas, con diseño y textos profesionales. El trabajo de Start."
      },
      {
        "icon": "ads_click",
        "title": "Contenido con destino",
        "description": "Publicaciones y reels pensados para generar consultas o visitas a tu web. El trabajo de Pro."
      },
      {
        "icon": "campaign",
        "title": "Meta Ads",
        "description": "Campañas pagadas solo en Premium. El fee es por gestionarlas; la pauta la pones tú."
      },
      {
        "icon": "analytics",
        "title": "Reporte según el plan",
        "description": "Start: lo publicado. Pro: clics y consultas. Premium: costo por consulta o lead."
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Diagnóstico",
        "description": "Reviso tu marca, oferta, redes actuales y si tu web o WhatsApp están listos para recibir consultas.",
        "icon": "person_search"
      },
      {
        "step": "02",
        "title": "Calendario y piezas",
        "description": "Defino el objetivo del mes, armo el calendario y diseño cada publicación con su texto.",
        "icon": "content_copy"
      },
      {
        "step": "03",
        "title": "Publicación",
        "description": "Publico en Facebook e Instagram. Si el plan es Premium, también armo y optimizo las campañas en Meta Ads.",
        "icon": "campaign"
      },
      {
        "step": "04",
        "title": "Revisión mensual",
        "description": "Te entrego el reporte del plan contratado y acordamos qué ajustar el mes siguiente.",
        "icon": "analytics"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "flag",
        "title": "Un trabajo por plan",
        "description": "Start, Pro y Premium no son la misma cosa con más posts. Cada uno resuelve un problema distinto."
      },
      {
        "icon": "share",
        "title": "Facebook e Instagram",
        "description": "Esos son los canales incluidos. TikTok u otras redes se cotizan aparte, no se dan por sentadas."
      },
      {
        "icon": "language",
        "title": "Pensado para tu web",
        "description": "Pro y Premium dirigen el tráfico a tu sitio o WhatsApp. Si la web no convierte, primero hay que arreglarla."
      },
      {
        "icon": "payments",
        "title": "La pauta no está en el fee",
        "description": "El mensual cubre gestión y contenido. El dinero de los anuncios lo inviertes tú, y solo aplica en Premium."
      },
      {
        "icon": "analytics",
        "title": "Reporte que se entiende",
        "description": "No llenamos el informe de métricas vanidosas. Medimos lo que el plan promete: presencia, consultas o costo por lead."
      },
      {
        "icon": "support_agent",
        "title": "Trato directo",
        "description": "Hablas con quien ejecuta el plan. Sin cuenta de agencia ni cambios de community cada mes."
      }
    ],
    "plans": [
      {
        "name": "START",
        "price": "S/ 500",
        "period": "/mes",
        "icon": "star",
        "color": "from-orange-500 to-red-500",
        "tagline": "Ideal si necesitas presencia constante y profesional, sin pauta.",
        "benefit": "Tus redes dejan de verse abandonadas.",
        "features": [
          "8 publicaciones al mes",
          "Diseño y textos para cada pieza",
          "Calendario de publicación",
          "Gestión de Facebook e Instagram",
          "Reporte mensual de lo publicado"
        ],
        "note": "Este plan no incluye publicidad paga. Si quieres anuncios, el plan es Premium."
      },
      {
        "name": "PRO",
        "price": "S/ 900",
        "period": "/mes",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "tagline": "Ideal si ya tienes web o WhatsApp de ventas y quieres contenido con un objetivo.",
        "benefit": "Más consultas desde redes, no solo más likes.",
        "features": [
          "Todo lo incluido en Start",
          "12 publicaciones al mes",
          "2 reels mensuales",
          "Objetivo mensual: consultas o visitas a tu web",
          "Optimización de perfiles",
          "Revisión de competencia",
          "Reporte de clics y consultas",
          "Reunión mensual de 30 minutos"
        ],
        "note": "Este plan no incluye publicidad paga. Si quieres anuncios, el plan es Premium."
      },
      {
        "name": "PREMIUM",
        "price": "S/ 1,400",
        "period": "/mes",
        "icon": "diamond",
        "color": "from-blue-500 to-cyan-500",
        "tagline": "Ideal si tienes presupuesto de anuncios y una web lista para convertir.",
        "benefit": "Tráfico pago a tu web o WhatsApp, con seguimiento mensual.",
        "features": [
          "Todo lo incluido en Pro",
          "16 publicaciones al mes",
          "4 reels mensuales",
          "Gestión de campañas en Meta Ads",
          "Optimización de anuncios durante el mes",
          "Informe de costo por consulta o lead",
          "Reunión mensual para contenido y pauta",
          "Respuesta prioritaria"
        ],
        "note": "El fee cubre la gestión y optimización. El presupuesto de anuncios lo inviertes tú en Meta. Recomendamos desde S/ 300 a S/ 500 al mes de pauta. Sin pauta, este plan no tiene sentido: elige Pro."
      }
    ],
    "plansHighlightsTitle": "Todos los planes incluyen",
    "plansHighlights": [
      "Facebook e Instagram",
      "Diseño de cada pieza",
      "Textos para redes",
      "Calendario mensual",
      "Publicación en tus perfiles"
    ],
    "plansBenefitsTitle": "Puedes sumar después",
    "plansBenefits": [
      "Piezas extra sobre el cupo del plan",
      "Más reels o contenido para TikTok",
      "Gestión de anuncios cotizada aparte si estás en Start o Pro"
    ],
    "plansGuaranteeLabel": "Antes de elegir",
    "plansGuarantee": "Recomendamos un mínimo de 3 meses: el primer mes es diagnóstico y calendario, no un milagro. El fee nunca incluye el presupuesto de anuncios. Ads solo existen en Premium. Si tu web no convierte, Premium no es el siguiente paso: primero hay que mejorar la web.",
    "plansComparisonHeaders": {
      "start": "Start",
      "pro": "Pro",
      "premium": "Premium"
    },
    "plansComparisonIntro": "La diferencia no es la cantidad de posts. Es el trabajo que cada plan hace para tu negocio.",
    "plansComparison": [
      {
        "label": "Enfoque",
        "start": "Presencia",
        "pro": "Consultas a tu web",
        "premium": "Captación con pauta"
      },
      {
        "label": "Publicaciones al mes",
        "start": "8",
        "pro": "12",
        "premium": "16"
      },
      {
        "label": "Reels mensuales",
        "start": false,
        "pro": "2",
        "premium": "4"
      },
      {
        "label": "Objetivo mensual",
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
        "label": "Revisión de competencia",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "Reunión mensual",
        "start": false,
        "pro": "30 min",
        "premium": "Contenido y pauta"
      },
      {
        "label": "Meta Ads",
        "start": false,
        "pro": false,
        "premium": "Gestión (pauta aparte)"
      },
      {
        "label": "Qué mide el reporte",
        "start": "Lo publicado",
        "pro": "Clics y consultas",
        "premium": "Costo por consulta"
      },
      {
        "label": "Respuesta prioritaria",
        "start": false,
        "pro": false,
        "premium": true
      }
    ]
  },
  "rediseno-paginas-web": {
    "slug": "rediseno-paginas-web",
    "heroImage": "/assets/services/rediseño.jpg",
    "pageTitle": "Rediseño Web en Perú | Cara nueva, otro camino o de nuevo | NeoWeb",
    "metaDescription": "Ya tienes web: la hago verse nueva, cambio el camino para que te escriban, o la armo de nuevo y muevo lo que sirve. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "refresh",
      "badgeText": "Rediseño web · Perú",
      "titleLine1": "Rediseño",
      "titleHighlight": "fácil de elegir",
      "description": "Tres trabajos. Actualiza: misma web, cara nueva. Evoluciona: además cambio qué ven primero para que te escriban. Transforma: la armo de nuevo y conservo tu dirección. Si no tienes web, eso es Páginas web."
    },
    "plansSubtitle": "Actualiza es si te da vergüenza mandar el link. Evoluciona es si se ve, pero nadie llama. Transforma es si la web actual ya no se puede tocar. El nombre de tu web va 6 meses en todos.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Qué recibes",
      "titleLine1": "Así se",
      "titleHighlight": "entiende",
      "subtitle": "No es “más rediseño”. Cada plan hace una cosa distinta con la web que ya tienes."
    },
    "includes": [
      {
        "icon": "palette",
        "title": "Actualiza: cara nueva",
        "description": "Conservas tus páginas y textos. Cambio cómo se ve: colores, fotos y que se lea bien en el celular. Para cuando te da vergüenza mandar el link."
      },
      {
        "icon": "alt_route",
        "title": "Evoluciona: otro camino",
        "description": "Lo de Actualiza, y además cambio qué ven primero y el botón para escribirte. Para cuando se ve más o menos, pero nadie llama."
      },
      {
        "icon": "restart_alt",
        "title": "Transforma: hecha de nuevo",
        "description": "La programo de cero y paso textos y fotos. Conservo tu dirección (tunegocio.pe). Para web lenta, insegura o hecha en plantilla que ya no se deja tocar."
      },
      {
        "icon": "language",
        "title": "En los tres planes",
        "description": "Este servicio es si ya tienes un sitio. Se ve en el celular. Conservas tu dirección si la tienes. Nombre de tu web 6 meses."
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "trabajo",
      "subtitle": "Primero vemos qué se puede salvar de tu web. Después el plan, el diseño y la publicación."
    },
    "fullcodeSection": {
      "badgeText": "A medida",
      "titleLine1": "Según",
      "titleHighlight": "el plan",
      "subtitle": "No siempre la hago de nuevo. A veces solo cambio la cara. Otras, el recorrido. Otras, el código."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Qué necesita",
      "titleHighlight": "tu web?",
      "description": "Si te da vergüenza cómo se ve, Actualiza. Si no te escriben, Evoluciona. Si ya no da para más, Transforma. Si no tienes web, Páginas web."
    },
    "features": [
      {
        "icon": "palette",
        "title": "Actualiza: cara nueva",
        "description": "Conservas tus páginas y textos. Cambio cómo se ve: colores, fotos y que se lea bien en el celular. Para cuando te da vergüenza mandar el link."
      },
      {
        "icon": "alt_route",
        "title": "Evoluciona: otro camino",
        "description": "Lo de Actualiza, y además cambio qué ven primero y el botón para escribirte. Para cuando se ve más o menos, pero nadie llama."
      },
      {
        "icon": "restart_alt",
        "title": "Transforma: hecha de nuevo",
        "description": "La programo de cero y paso textos y fotos. Conservo tu dirección (tunegocio.pe). Para web lenta, insegura o hecha en plantilla que ya no se deja tocar."
      },
      {
        "icon": "language",
        "title": "En los tres planes",
        "description": "Este servicio es si ya tienes un sitio. Se ve en el celular. Conservas tu dirección si la tienes. Nombre de tu web 6 meses."
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Cómo está tu web",
        "description": "¿Solo se ve vieja? ¿Nadie te escribe? ¿Ya no se puede tocar? Con eso sale el plan. Si no tienes web, el servicio es Páginas web.",
        "icon": "assessment"
      },
      {
        "step": "02",
        "title": "Te muestro",
        "description": "Ves cómo va a quedar: misma estructura con otra cara, otro recorrido, o hecha de nuevo.",
        "icon": "palette"
      },
      {
        "step": "03",
        "title": "El trabajo",
        "description": "Según el plan: actualizo lo que hay, cambio el recorrido, o la programo de nuevo y paso tu contenido.",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Tu dirección se queda",
        "description": "Si ya tienes tunegocio.pe, se conserva. No partes de cero en Google por cambiar de look.",
        "icon": "language"
      },
      {
        "step": "05",
        "title": "Al aire",
        "description": "La publico y te muestro cómo quedó. Los cambios de textos después me los pides; un panel para editar tú se cotiza aparte.",
        "icon": "launch"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "flag",
        "title": "Sabes qué estás comprando",
        "description": "Actualiza, Evoluciona y Transforma no son “más rediseño”. Cada uno hace un trabajo distinto con la web que ya tienes."
      },
      {
        "icon": "palette",
        "title": "No siempre la hago de nuevo",
        "description": "Si solo se ve vieja, cambio la cara. Si nadie escribe, cambio el camino. Si ya no se puede tocar, sí la armo de cero."
      },
      {
        "icon": "language",
        "title": "Conservas tu dirección",
        "description": "Si ya tienes tunegocio.pe, se queda. El rediseño no es “cambiar de nombre y empezar de cero”."
      },
      {
        "icon": "devices",
        "title": "Se ve bien en el celular",
        "description": "En los tres planes queda legible en el teléfono. No es un extra del plan más caro."
      },
      {
        "icon": "tune",
        "title": "Se puede ampliar después",
        "description": "Puedes empezar en Actualiza. Si más adelante nadie escribe, pasamos a Evoluciona. Si el código no da, Transforma."
      },
      {
        "icon": "support_agent",
        "title": "Hablas con quien la hace",
        "description": "Sin pasar por una secretaria de agencia ni cambiar de persona a mitad del proyecto."
      }
    ],
    "plans": [
      {
        "name": "ACTUALIZA",
        "price": "S/ 600",
        "icon": "star",
        "color": "from-gray-600 to-gray-800",
        "tagline": "Recibes la misma web con cara nueva: colores, fotos y que se lea en el celular. Conservas páginas y textos.",
        "benefit": "Para cuando te da vergüenza mandar el link, pero el contenido está bien.",
        "features": [
          "Tus páginas se quedan; cambio cómo se ven",
          "Colores, tipografía y fotos alineadas a tu negocio",
          "Se ve bien en el celular",
          "Conservas tu dirección si ya la tienes (tunegocio.pe)",
          "Nombre de tu web y alojamiento 6 meses",
          "Lista en aproximadamente 1 semana"
        ],
        "note": "Si nadie te escribe, o las páginas están mal armadas, el plan es Evoluciona. Si está en Wix o WordPress y ya no se deja tocar, Transforma."
      },
      {
        "name": "EVOLUCIONA",
        "price": "S/ 1,000",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "tagline": "Recibes la cara nueva y un recorrido distinto: qué ven primero y un botón claro para escribirte.",
        "benefit": "Para cuando se ve más o menos, pero nadie llama.",
        "features": [
          "Todo lo de Actualiza",
          "Cambio el orden: qué ven primero y cómo te piden información",
          "Botón de WhatsApp o formulario a la vista",
          "Servicios y textos más claros, sin páginas de más",
          "Se ve bien en el celular",
          "Nombre de tu web y alojamiento 6 meses",
          "Lista en 1 a 2 semanas"
        ],
        "note": "Si el código o la plantilla no se puede salvar, el plan es Transforma. Si no tienes web todavía, elige Páginas web."
      },
      {
        "name": "TRANSFORMA",
        "price": "S/ 1,500",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Recibes la web hecha de nuevo. Paso textos y fotos. Conservo tu dirección para que no arranques de cero.",
        "benefit": "Para web lenta, insegura o hecha en plantilla que ya no se deja tocar.",
        "features": [
          "Todo lo de Evoluciona",
          "La programo de cero, a medida, sin plantilla",
          "Paso los textos y fotos que sirven",
          "Conservas tunegocio.pe (o el nombre que ya usas)",
          "Ves cuánta gente entra a tu web",
          "Nombre de tu web y alojamiento 6 meses",
          "Lista en 2 a 3 semanas"
        ],
        "note": "Este plan es porque ya tienes sitio. Si partes de cero, elige Páginas web (Landing, Sitio o Sitio Pro)."
      }
    ],
    "plansHighlightsTitle": "En los tres planes va incluido",
    "plansHighlights": [
      "Este servicio es si ya tienes un sitio",
      "Se ve bien en el celular",
      "Conservas tu dirección si ya la tienes",
      "Nombre de tu web y alojamiento 6 meses"
    ],
    "plansBenefitsTitle": "Esto se cotiza aparte",
    "plansBenefits": [
      "Un panel para que tú cambies textos o fotos sin pedirme un cambio",
      "Páginas que tu sitio actual no tenía",
      "Si no tienes web: eso es el servicio Páginas web, no rediseño"
    ],
    "plansGuaranteeLabel": "Después de publicarla",
    "plansGuarantee": "Los primeros 30 días te ayudo a corregir fallas y detalles chicos que entren en el plan, sin costo extra.",
    "plansComparisonHeaders": {
      "start": "Actualiza",
      "pro": "Evoluciona",
      "premium": "Transforma"
    },
    "plansComparisonIntro": "Lee la primera fila: ahí está el trabajo. Si no tienes web, este servicio no aplica.",
    "plansComparison": [
      {
        "label": "Para qué sirve",
        "start": "Verse profesional",
        "pro": "Que te escriban",
        "premium": "La actual ya no sirve"
      },
      {
        "label": "Qué te entrego",
        "start": "Misma web, cara nueva",
        "pro": "Cara nueva + otro camino",
        "premium": "Hecha de nuevo + tu contenido"
      },
      {
        "label": "¿Se conservan tus páginas?",
        "start": "Sí, las mismas",
        "pro": "Sí, las reordeno",
        "premium": "Las que sirvan"
      },
      {
        "label": "¿Cambio qué ven primero?",
        "start": "No",
        "pro": "Sí",
        "premium": "Sí"
      },
      {
        "label": "¿La armo de nuevo?",
        "start": "No",
        "pro": "No",
        "premium": "Sí"
      },
      {
        "label": "¿Paso textos y fotos a código nuevo?",
        "start": "No hace falta",
        "pro": "No hace falta",
        "premium": "Sí"
      },
      {
        "label": "¿Ves cuánta gente entra?",
        "start": false,
        "pro": false,
        "premium": true
      },
      {
        "label": "Si no tienes web",
        "start": "No es este servicio",
        "pro": "No es este servicio",
        "premium": "No es este servicio"
      },
      {
        "label": "Precio",
        "start": "S/ 600",
        "pro": "S/ 1,000",
        "premium": "S/ 1,500"
      }
    ]
  },
  "aplicaciones-moviles": {
    "slug": "aplicaciones-moviles",
    "heroImage": "/assets/services/app movil.jpg",
    "pageTitle": "Apps Móviles en Perú | Sin cuentas, con usuarios o cotizada | NeoWeb",
    "metaDescription": "App a medida en Perú: sin cuentas o con usuarios en Android, o una extra cotizada (iPhone, cobrar, empleado u otro programa). Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "phone_android",
      "badgeText": "Apps móviles · Perú",
      "titleLine1": "Apps",
      "titleHighlight": "fáciles de elegir",
      "description": "Tres trabajos. Lanzamiento: abren la app, ven lo que ofreces y te escriben. Crecimiento: se registran y les llega un aviso, en Android. Escala: iPhone, cobrar, un empleado u otro programa, se cotiza. Si con la web en el celular basta, es Páginas web."
    },
    "plansSubtitle": "Lanzamiento es app sin cuentas, solo Android. Crecimiento es con usuarios, también solo Android. iPhone, cobrar, un empleado u otro programa se cotizan en Escala.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Qué recibes",
      "titleLine1": "Así se",
      "titleHighlight": "entiende",
      "subtitle": "No es “más pantallas”. Cada plan sirve para un uso distinto del celular."
    },
    "includes": [
      {
        "icon": "phone_android",
        "title": "Lanzamiento: sin cuentas",
        "description": "La persona abre la app, ve lo que ofreces y te escribe por WhatsApp. Solo Android (Google Play). Para catálogo, carta o directorio."
      },
      {
        "icon": "person",
        "title": "Crecimiento: con usuarios",
        "description": "La gente se registra, ve lo suyo y le llega un aviso al celular. Solo Android (Google Play). Para citas, socios o alumnos."
      },
      {
        "icon": "tune",
        "title": "Escala: una extra",
        "description": "Lo de Crecimiento, más una de estas (la eliges al cotizar): publicarla también en iPhone, cobrar dentro de la app, que un empleado también entre, o que los datos se copien al programa que ya usas."
      },
      {
        "icon": "storefront",
        "title": "En los tres planes",
        "description": "Diseño para tu negocio, pruebas en celular antes de publicar, y te muestro cómo usarla. La publicación en tiendas entra según el plan."
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "trabajo",
      "subtitle": "Primero vemos quién abre la app y para qué. Después diseño, armado, pruebas y la tienda que toque."
    },
    "fullcodeSection": {
      "badgeText": "A medida",
      "titleLine1": "Hecha",
      "titleHighlight": "para ti",
      "subtitle": "Entra lo del plan que eliges. No “cualquier sistema” ni las dos tiendas si el plan es Lanzamiento."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿Qué app",
      "titleHighlight": "necesitas?",
      "description": "¿Solo verte y escribirte? Lanzamiento. ¿Cuentas y avisos en Android? Crecimiento. ¿iPhone, cobrar, un empleado u otro programa? Escala, te armo el precio. Si es para la oficina, Software a medida."
    },
    "features": [
      {
        "icon": "phone_android",
        "title": "Lanzamiento: sin cuentas",
        "description": "La persona abre la app, ve lo que ofreces y te escribe por WhatsApp. Solo Android (Google Play). Para catálogo, carta o directorio."
      },
      {
        "icon": "person",
        "title": "Crecimiento: con usuarios",
        "description": "La gente se registra, ve lo suyo y le llega un aviso al celular. Solo Android (Google Play). Para citas, socios o alumnos."
      },
      {
        "icon": "tune",
        "title": "Escala: una extra",
        "description": "Lo de Crecimiento, más una de estas (la eliges al cotizar): publicarla también en iPhone, cobrar dentro de la app, que un empleado también entre, o que los datos se copien al programa que ya usas."
      },
      {
        "icon": "storefront",
        "title": "En los tres planes",
        "description": "Diseño para tu negocio, pruebas en celular antes de publicar, y te muestro cómo usarla. La publicación en tiendas entra según el plan."
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Quién la abre",
        "description": "¿Solo quieren verte y escribirte? ¿Necesitan cuenta? ¿Hay que cobrar o un empleado? Con eso sale el plan. Si con la web en el celular basta, es Páginas web.",
        "icon": "phone_android"
      },
      {
        "step": "02",
        "title": "Te muestro",
        "description": "Ves cómo se va a ver en el teléfono: sin cuentas, con login, o con la extra que cotizamos.",
        "icon": "design_services"
      },
      {
        "step": "03",
        "title": "Armado",
        "description": "La programo a medida, con el alcance del plan. Sin plantilla de una tienda de apps genérica.",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Pruebas",
        "description": "La pruebo en celular antes de publicarla. Si hay cuentas, hacemos un registro de prueba.",
        "icon": "bug_report"
      },
      {
        "step": "05",
        "title": "A la tienda",
        "description": "Lanzamiento y Crecimiento: Google Play. iPhone (App Store) se cotiza en Escala. Te muestro cómo usarla. Si eliges iPhone, la cuenta de Apple la pagas tú.",
        "icon": "publish"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "flag",
        "title": "Sabes qué estás comprando",
        "description": "Lanzamiento, Crecimiento y Escala no son “más pantallas”. Cada uno sirve para un uso distinto."
      },
      {
        "icon": "phone_android",
        "title": "No siempre van las dos tiendas",
        "description": "Lanzamiento y Crecimiento son Android. iPhone se cotiza en Escala, porque publicar en Apple es otro trabajo y otra cuenta anual."
      },
      {
        "icon": "person",
        "title": "Cuentas solo cuando hacen falta",
        "description": "Si nadie necesita entrar con usuario, no las cobramos. Eso es Lanzamiento."
      },
      {
        "icon": "tune",
        "title": "Se puede ampliar después",
        "description": "Puedes empezar en Lanzamiento. Cuentas y avisos van en Crecimiento. iPhone, cobrar, un empleado u otro programa, en Escala."
      },
      {
        "icon": "language",
        "title": "A veces no necesitas app",
        "description": "Si con abrir el link en el celular basta, el servicio es Páginas web. Si es para la oficina, Software a medida."
      },
      {
        "icon": "support_agent",
        "title": "Hablas con quien la hace",
        "description": "Sin pasar por una secretaria de agencia ni cambiar de persona a mitad del proyecto."
      }
    ],
    "plans": [
      {
        "name": "LANZAMIENTO",
        "price": "S/ 2,500",
        "icon": "star",
        "color": "from-teal-500 to-cyan-500",
        "tagline": "Recibes una app sin cuentas: abren, ven lo que ofreces y te escriben por WhatsApp. Solo Android.",
        "benefit": "Para catálogo, carta o directorio. No es para “mis clientes entran con usuario”.",
        "features": [
          "Solo Android (Google Play)",
          "Ven lo que ofreces y un botón para escribirte por WhatsApp",
          "Sin registro ni contraseña",
          "Diseño para tu negocio, no una plantilla genérica",
          "Pruebas en celular antes de publicarla",
          "Te muestro cómo usarla",
          "Lista en 3 a 4 semanas"
        ],
        "note": "Si la gente necesita cuenta y avisos, el plan es Crecimiento. Si también la quieren en iPhone, Escala. Si con abrir el link en el celular basta, elige Páginas web: sale menos y llega igual."
      },
      {
        "name": "CRECIMIENTO",
        "price": "S/ 4,500",
        "icon": "rocket_launch",
        "color": "from-gray-700 to-gray-900",
        "featured": true,
        "tagline": "Recibes una app con usuarios: se registran, ven lo suyo y les llega un aviso. Solo Android.",
        "benefit": "Para citas, socios o alumnos. No es para iPhone, cobrar dentro de la app ni empleados con otro acceso.",
        "features": [
          "Todo lo de Lanzamiento, y además cuentas",
          "Solo Android (Google Play)",
          "Registro, entrada y recuperar contraseña",
          "Les llega un aviso al celular",
          "Tú ves quién se registró en una pantalla simple",
          "Lista en 2 a 3 meses"
        ],
        "note": "Si la necesitan en iPhone, hay que cobrar, un empleado debe entrar, o hay que copiar datos a otro programa, el plan es Escala."
      },
      {
        "name": "ESCALA",
        "price": "Desde S/ 6,500",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Recibes lo de Crecimiento más una extra que eliges al cotizar: iPhone, cobrar, un empleado, o copiar datos a otro programa.",
        "benefit": "Para cuando Android con cuentas no alcanza: iPhone, cobro, equipo u otro sistema.",
        "features": [
          "Todo lo de Crecimiento (Android, cuentas y avisos)",
          "Eliges UNA de estas al cotizar",
          "Opción 1: publicarla también en iPhone (App Store)",
          "Opción 2: cobrar dentro de la app (Yape o tarjeta, lo acordamos)",
          "Opción 3: un empleado también entra, con su propio acceso",
          "Opción 4: los datos se copian al programa que ya usas",
          "S/ 6,500 es el piso; si pides dos cosas o algo más, se cotiza extra"
        ],
        "note": "Si solo necesitas cuentas y avisos en Android, quédate en Crecimiento. Si eliges iPhone, la cuenta de Apple (~USD 99 al año) la pagas tú. Chat o mapa se cotizan aparte. Si el trabajo es para la oficina, no el celular, elige Software a medida."
      }
    ],
    "plansHighlightsTitle": "En los tres planes va incluido",
    "plansHighlights": [
      "Diseño para tu negocio, no una plantilla genérica",
      "Pruebas en celular antes de publicarla",
      "Te muestro cómo usarla",
      "Los primeros 30 días te ayudo con fallas chicas del plan"
    ],
    "plansBenefitsTitle": "Esto se cotiza aparte",
    "plansBenefits": [
      "La cuenta de Google Play (pago único) la pagas tú; la de Apple, solo si eliges iPhone en Escala",
      "Chat, mapa u otra función que no esté en el plan",
      "Una segunda extra en Escala (la primera se acuerda al cotizar)",
      "Si con la web en el celular basta: eso es Páginas web, no app"
    ],
    "plansGuaranteeLabel": "Después de publicarla",
    "plansGuarantee": "Los primeros 30 días te ayudo a corregir fallas y detalles chicos que entren en el plan, sin costo extra.",
    "plansComparisonHeaders": {
      "start": "Lanzamiento",
      "pro": "Crecimiento",
      "premium": "Escala"
    },
    "plansComparisonIntro": "Lee la primera fila: ahí está el trabajo. Escala no es “más pantallas”: es una extra cotizada.",
    "plansComparison": [
      {
        "label": "Para qué sirve",
        "start": "Verte y escribirte",
        "pro": "Entrar con cuenta",
        "premium": "iPhone, cobrar, equipo u otro programa"
      },
      {
        "label": "Qué te entrego",
        "start": "App sin cuentas",
        "pro": "App con usuarios y avisos",
        "premium": "Eso + una extra"
      },
      {
        "label": "Android (Google Play)",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "iPhone (App Store)",
        "start": false,
        "pro": false,
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "¿Hay cuentas?",
        "start": "No",
        "pro": "Sí",
        "premium": "Sí"
      },
      {
        "label": "¿Les llega un aviso al celular?",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Se cobra dentro de la app?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "¿Un empleado puede entrar?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "¿Los datos van a otro programa?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "Cuenta de Apple",
        "start": "No aplica",
        "pro": "No aplica",
        "premium": "La pagas tú si eliges iPhone"
      },
      {
        "label": "Precio",
        "start": "S/ 2,500",
        "pro": "S/ 4,500",
        "premium": "Desde S/ 6,500"
      }
    ]
  },
  "digitalizacion-procesos": {
    "slug": "digitalizacion-procesos",
    "heroImage": "/assets/services/software a medida.jpg",
    "pageTitle": "Software a Medida en Perú | El día a día, las finanzas o se cotiza | NeoWeb",
    "metaDescription": "Sistema interno para tu empresa: el equipo registra el día a día, ves ingresos y gastos, o ampliamos lo que falte. Cotiza con NeoWeb.",
    "hero": {
      "badgeIcon": "settings",
      "badgeText": "Software a medida · Perú",
      "titleLine1": "El mismo sistema,",
      "titleHighlight": "en tres fases",
      "description": "No es una web ni una tienda. Es el sistema con el que tu equipo trabaja. Diario: registran el día a día y lo consultan. Control: eso, y ves ingresos y gastos. Amplía: otra sede, otro módulo u otro programa, se cotiza."
    },
    "plansSubtitle": "Diario es el trabajo de cada día. Control suma ingresos y gastos. Amplía es una extra cotizada. En los tres el equipo entra con usuario. Si lo que quieres es una web o una tienda, esos son otros servicios.",
    "includesSection": {
      "badgeIcon": "check_circle",
      "badgeText": "Qué recibes",
      "titleLine1": "Así se",
      "titleHighlight": "entiende",
      "subtitle": "Tres fases del mismo sistema. No es “más pantallas”: es qué parte de la empresa ya corre adentro."
    },
    "includes": [
      {
        "icon": "event_note",
        "title": "Diario: el día a día",
        "description": "Tu equipo entra, registra lo que hacen todos los días y lo puede buscar después. Un reporte de ese trabajo. El sistema ya se usa, no es un formulario suelto."
      },
      {
        "icon": "payments",
        "title": "Control: el día a día y las finanzas",
        "description": "Lo de Diario, y además ingresos, gastos y un reporte que tú abres para ver cómo va el dinero."
      },
      {
        "icon": "tune",
        "title": "Amplía: lo que falte",
        "description": "Lo de Control, más una extra que eliges al cotizar: otra sede, otro módulo, o que los datos se copien a un programa que ya usas."
      },
      {
        "icon": "groups",
        "title": "En las tres fases",
        "description": "Sistema interno, hecho para tu negocio. El equipo entra con usuario. Te enseño a usarlo. No es una página pública ni una tienda."
      }
    ],
    "showBenefitsSection": false,
    "processSection": {
      "titleLine1": "Cómo",
      "titleHighlight": "trabajo",
      "subtitle": "Primero vemos qué registran hoy en Excel o en cuadernos. Después el sistema, las pruebas y te lo dejo andando."
    },
    "fullcodeSection": {
      "badgeText": "A medida",
      "titleLine1": "Hecho",
      "titleHighlight": "para tu operación",
      "subtitle": "Entra lo de la fase que contratas. No “cualquier sistema del mercado”."
    },
    "ctaSection": {
      "theme": "dark",
      "titleLine1": "¿En qué fase",
      "titleHighlight": "empiezas?",
      "description": "¿Que el equipo deje el Excel? Diario. ¿También ver ingresos y gastos? Control. ¿Otra sede, otro módulo u otro programa? Amplía, te armo el precio. Si es web o tienda, esos son otros servicios."
    },
    "features": [
      {
        "icon": "event_note",
        "title": "Diario: el día a día",
        "description": "Tu equipo entra, registra lo que hacen todos los días y lo puede buscar después. Un reporte de ese trabajo. El sistema ya se usa, no es un formulario suelto."
      },
      {
        "icon": "payments",
        "title": "Control: el día a día y las finanzas",
        "description": "Lo de Diario, y además ingresos, gastos y un reporte que tú abres para ver cómo va el dinero."
      },
      {
        "icon": "tune",
        "title": "Amplía: lo que falte",
        "description": "Lo de Control, más una extra que eliges al cotizar: otra sede, otro módulo, o que los datos se copien a un programa que ya usas."
      },
      {
        "icon": "groups",
        "title": "En las tres fases",
        "description": "Sistema interno, hecho para tu negocio. El equipo entra con usuario. Te enseño a usarlo. No es una página pública ni una tienda."
      }
    ],
    "methodology": [
      {
        "step": "01",
        "title": "Qué registran hoy",
        "description": "Vemos qué está en Excel, cuadernos o WhatsApp. Con eso sale si empiezas en Diario, Control o Amplía. Si es una web o una tienda, te mando a ese servicio.",
        "icon": "assessment"
      },
      {
        "step": "02",
        "title": "Te muestro",
        "description": "Ves cómo va a quedar: el registro del día, la consulta y, si el plan lo incluye, ingresos y gastos.",
        "icon": "design_services"
      },
      {
        "step": "03",
        "title": "Armado",
        "description": "Programo el sistema a medida, con lo de la fase que contrataste. Sin un programa genérico de internet.",
        "icon": "code"
      },
      {
        "step": "04",
        "title": "Pruebas con tu equipo",
        "description": "Registramos datos de prueba y vemos que se pueda buscar y que el reporte salga bien.",
        "icon": "bug_report"
      },
      {
        "step": "05",
        "title": "Lo dejan andando",
        "description": "Te lo dejo en el aire y te enseño a usarlo. Los cambios de después me los pides; un módulo extra se cotiza en Amplía.",
        "icon": "launch"
      }
    ],
    "fullCodeBenefits": [
      {
        "icon": "flag",
        "title": "Sabes qué estás comprando",
        "description": "Diario, Control y Amplía no son “más software”. Son el mismo sistema, en tres momentos."
      },
      {
        "icon": "event_note",
        "title": "El primero ya es un sistema",
        "description": "Diario no es un formulario. Tu equipo ya trabaja ahí: registra, busca y ve un reporte."
      },
      {
        "icon": "payments",
        "title": "Ingresos y gastos, cuando los pides",
        "description": "Ingresos y gastos no se inventan en Diario. Están en Control, para que el precio coincida con lo que ves."
      },
      {
        "icon": "tune",
        "title": "Se puede ampliar después",
        "description": "Puedes empezar en Diario. Ingresos y gastos van en Control. Otra sede, otro módulo u otro programa, en Amplía."
      },
      {
        "icon": "storefront",
        "title": "No es web ni tienda",
        "description": "Si tus clientes tienen que verte en internet, es Páginas web. Si tienen que pagarte online, es Tienda. Esto es para adentro de la empresa."
      },
      {
        "icon": "support_agent",
        "title": "Hablas con quien lo hace",
        "description": "Sin pasar por una secretaria de agencia ni cambiar de persona a mitad del proyecto."
      }
    ],
    "plans": [
      {
        "name": "DIARIO",
        "price": "S/ 2,000",
        "icon": "star",
        "color": "from-gray-600 to-gray-800",
        "tagline": "Recibes el sistema del día a día: tu equipo entra, registra el trabajo y lo puede consultar después.",
        "benefit": "Para dejar el Excel o el cuaderno en lo que hacen todos los días. No incluye ingresos ni gastos.",
        "features": [
          "El equipo entra con usuario",
          "Registran lo que hacen cada día (citas, pedidos, lo que sea tu operación)",
          "Lo pueden buscar y ver después",
          "Un reporte de ese trabajo",
          "Te enseño a usarlo",
          "Lista en 4 a 6 semanas"
        ],
        "note": "Si el dueño necesita ver ingresos y gastos, el plan es Control. Si lo que quieres es una web o una tienda, esos son otros servicios."
      },
      {
        "name": "CONTROL",
        "price": "S/ 3,500",
        "icon": "rocket_launch",
        "color": "from-blue-500 to-cyan-500",
        "featured": true,
        "tagline": "Recibes el día a día más ingresos y gastos, y un reporte para ver cómo va el dinero.",
        "benefit": "Para cuando el sistema también tiene que mostrar si el negocio está cuadrando.",
        "features": [
          "Todo lo de Diario",
          "Registro de ingresos y gastos",
          "Un reporte que tú abres para ver ingresos y gastos",
          "El equipo sigue registrando el día a día",
          "Te enseño a usarlo",
          "Lista en 2 a 3 meses"
        ],
        "note": "Si necesitas otra sede, otro módulo o que los datos vayan a un programa que ya usas, el plan es Amplía. Una app o una tienda pública no entran aquí."
      },
      {
        "name": "AMPLÍA",
        "price": "Desde S/ 5,000",
        "icon": "diamond",
        "color": "from-orange-500 to-red-500",
        "tagline": "Recibes lo de Control más una extra que eliges al cotizar: otra sede, otro módulo, o copiar datos a otro programa.",
        "benefit": "Para cuando el día a día y las finanzas no alcanzan: hay otra sucursal, otra parte del negocio u otro sistema.",
        "features": [
          "Todo lo de Control",
          "Eliges UNA de estas al cotizar",
          "Opción 1: otra sede en el mismo sistema",
          "Opción 2: otro módulo (otra parte de la operación)",
          "Opción 3: los datos se copian a un programa que ya usas",
          "S/ 5,000 es el piso; si pides dos cosas o algo más, se cotiza extra"
        ],
        "note": "Si con el día a día y las finanzas te alcanza, quédate en Control. Chat, app o una tienda para clientes se cotizan en esos servicios, no aquí."
      }
    ],
    "plansHighlightsTitle": "En las tres fases va incluido",
    "plansHighlights": [
      "Sistema interno, no una web pública",
      "El equipo entra con usuario",
      "Hecho para tu negocio, no un programa genérico",
      "Te enseño a usarlo"
    ],
    "plansBenefitsTitle": "Esto se cotiza aparte",
    "plansBenefits": [
      "Una segunda extra en Amplía (la primera se acuerda al cotizar)",
      "App en el celular: eso es el servicio de Apps",
      "Tienda para que te paguen online: eso es Tienda online",
      "Una web para que te encuentren: eso es Páginas web"
    ],
    "plansGuaranteeLabel": "Después de entregarlo",
    "plansGuarantee": "Los primeros 30 días te ayudo a corregir fallas y detalles chicos que entren en la fase, sin costo extra.",
    "plansComparisonHeaders": {
      "start": "Diario",
      "pro": "Control",
      "premium": "Amplía"
    },
    "plansComparisonIntro": "Lee la primera fila: es el mismo sistema, en tres fases. Amplía no es “más de todo”: es una extra cotizada.",
    "plansComparison": [
      {
        "label": "Para qué sirve",
        "start": "Dejar el Excel del día",
        "pro": "Ver también las finanzas",
        "premium": "Otra sede, módulo o programa"
      },
      {
        "label": "Qué te entrego",
        "start": "Sistema del día a día",
        "pro": "Día a día + ingresos y gastos",
        "premium": "Eso + una extra"
      },
      {
        "label": "¿El equipo registra el trabajo del día?",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Pueden buscarlo después?",
        "start": true,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Hay ingresos y gastos?",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Tú ves un reporte de ingresos y gastos?",
        "start": false,
        "pro": true,
        "premium": true
      },
      {
        "label": "¿Otra sede?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "¿Otro módulo?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "¿Los datos van a otro programa?",
        "start": "No",
        "pro": "No",
        "premium": "Si lo eliges al cotizar"
      },
      {
        "label": "Precio",
        "start": "S/ 2,000",
        "pro": "S/ 3,500",
        "premium": "Desde S/ 5,000"
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
