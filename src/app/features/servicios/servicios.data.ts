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
        "price": "S/ 700",
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
        "price": "S/ 1,200",
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
        "price": "S/ 2,000",
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
    "plansSubtitle": "No es más publicaciones por más plata. Cada plan resuelve un trabajo distinto: verse profesional, traer consultas a tu web, o captar con anuncios.",
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
        "price": "S/ 600",
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
        "price": "S/ 1,200",
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
        "price": "S/ 1,800",
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
