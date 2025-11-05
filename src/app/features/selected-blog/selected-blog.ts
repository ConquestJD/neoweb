import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  sections: {
    title: string;
    content: string[];
    imageUrl?: string;
  }[];
}

@Component({
  selector: 'app-selected-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './selected-blog.html',
  styleUrl: './selected-blog.css'
})
export class SelectedBlog implements OnInit {
  article: BlogArticle | null = null;
  relatedArticles: BlogArticle[] = [];

  articles: BlogArticle[] = [
    {
      id: 1,
      slug: 'por-que-tu-negocio-necesita-una-pagina-web',
      title: '¿Por qué tu negocio necesita una página web en 2025?',
      excerpt: 'Descubre cómo una presencia digital profesional puede transformar tu negocio y aumentar tus ventas.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      category: 'Negocios Digitales',
      author: 'Equipo NeoWeb',
      date: '28 Oct 2025',
      readTime: '8 min',
      content: [
        'En el mundo actual, tener una página web ya no es un lujo, es una necesidad. El 97% de los consumidores buscan productos y servicios en línea antes de realizar una compra.',
        'Si tu negocio no está en internet, simplemente no existes para millones de clientes potenciales que buscan lo que ofreces cada día.',
        'Una página web profesional es tu mejor vendedor: trabaja 24/7, nunca se cansa y puede atender a múltiples clientes simultáneamente.'
      ],
      sections: [
        {
          title: 'Credibilidad y Confianza',
          content: [
            'Una página web profesional le dice a tus clientes que eres un negocio serio y confiable. El 75% de los usuarios juzgan la credibilidad de una empresa basándose en el diseño de su sitio web.',
            'Los clientes esperan encontrarte en línea. Si no tienes presencia digital, pueden pensar que tu negocio ya no está operando o que no eres profesional.'
          ]
        },
        {
          title: 'Alcance Sin Límites',
          content: [
            'Tu tienda física tiene horarios y un alcance geográfico limitado. Tu página web está abierta 24/7 y puede llegar a clientes en cualquier parte del mundo.',
            'Mientras duermes, tu sitio web puede estar generando clientes potenciales, respondiendo preguntas frecuentes y cerrando ventas.'
          ]
        },
        {
          title: 'Marketing Rentable',
          content: [
            'Comparado con publicidad tradicional (radio, TV, vallas), una página web es increíblemente económica y tiene un retorno de inversión mucho mayor.',
            'Puedes actualizar tu información, promociones y catálogo de productos instantáneamente, sin costos adicionales de impresión o distribución.'
          ]
        },
        {
          title: 'Ventaja Competitiva',
          content: [
            'Si tu competencia tiene página web y tú no, estás perdiendo clientes. Es así de simple.',
            'Una buena página web te diferencia de tu competencia y muestra por qué los clientes deberían elegirte a ti.'
          ]
        }
      ]
    },
    {
      id: 2,
      slug: 'como-una-pagina-web-puede-triplicar-tus-ventas',
      title: 'Cómo una página web puede triplicar tus ventas',
      excerpt: 'Estrategias comprobadas para convertir visitantes en clientes y aumentar significativamente tus ingresos.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      category: 'Ventas Online',
      author: 'Equipo NeoWeb',
      date: '25 Oct 2025',
      readTime: '10 min',
      content: [
        'Una página web bien diseñada no es solo una tarjeta de presentación digital, es una máquina de ventas que trabaja para ti las 24 horas del día.',
        'Negocios que implementan estrategias digitales efectivas reportan aumentos de hasta 300% en sus ventas en el primer año.'
      ],
      sections: [
        {
          title: 'Generación de Clientes Potenciales Automática',
          content: [
            'Tu página web puede captar información de clientes interesados automáticamente mediante formularios, chats en vivo y llamadas a la acción estratégicamente ubicadas.',
            'Cada visitante es una oportunidad de venta. Con las herramientas correctas, puedes convertir visitantes casuales en clientes que pagan.'
          ]
        },
        {
          title: 'Catálogo Digital 24/7',
          content: [
            'Los clientes pueden ver todos tus productos o servicios, comparar opciones y tomar decisiones de compra a cualquier hora, incluso cuando tu negocio está cerrado.',
            'Las imágenes de alta calidad, descripciones detalladas y precios claros eliminan barreras y aceleran el proceso de compra.'
          ]
        },
        {
          title: 'Testimonios y Prueba Social',
          content: [
            'Mostrar testimonios reales de clientes satisfechos aumenta la confianza y puede incrementar tus conversiones en un 34%.',
            'Las reseñas positivas, casos de éxito y certificaciones en tu web eliminan dudas y aceleran la decisión de compra.'
          ]
        },
        {
          title: 'Remarketing y Seguimiento',
          content: [
            'No todos compran en la primera visita. Tu página web te permite "seguir" a los visitantes interesados con anuncios relevantes que los traen de vuelta.',
            'El seguimiento por email automático de carritos abandonados puede recuperar hasta el 30% de ventas perdidas.'
          ]
        },
        {
          title: 'Análisis y Optimización',
          content: [
            'A diferencia de una tienda física, puedes medir exactamente qué funciona y qué no en tu página web.',
            'Datos sobre visitas, clics, tiempo de permanencia y conversiones te permiten mejorar continuamente y vender más cada mes.'
          ]
        }
      ]
    },
    {
      id: 3,
      slug: 'landing-page-vs-sitio-web-que-necesita-tu-negocio',
      title: 'Landing Page vs Sitio Web: ¿Qué necesita tu negocio?',
      excerpt: 'Guía completa para elegir la mejor solución digital según tus objetivos de negocio y presupuesto.',
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop',
      category: 'Decisiones Digitales',
      author: 'Equipo NeoWeb',
      date: '20 Oct 2025',
      readTime: '7 min',
      content: [
        'Una de las decisiones más importantes al iniciar tu presencia digital es elegir entre una Landing Page o un Sitio Web completo.',
        'La respuesta depende de tus objetivos, presupuesto y etapa de negocio. Ambas opciones tienen ventajas específicas.'
      ],
      sections: [
        {
          title: '¿Qué es una Landing Page?',
          content: [
            'Una Landing Page (página de aterrizaje) es una página única diseñada con un objetivo específico: conseguir que el visitante realice UNA acción concreta.',
            'Es ideal para: lanzar un producto, captar leads, promocionar un evento, ofrecer un servicio específico o campañas publicitarias.',
            'Ventajas: Rápida de crear, económica, altamente enfocada, perfecta para pruebas de mercado y genera conversiones altas.'
          ]
        },
        {
          title: '¿Qué es un Sitio Web Completo?',
          content: [
            'Un sitio web completo tiene múltiples páginas (inicio, servicios, nosotros, contacto, blog, etc.) y ofrece información completa sobre tu negocio.',
            'Es ideal para: empresas establecidas, negocios con múltiples servicios, crear autoridad y confianza, SEO a largo plazo.',
            'Ventajas: Mayor credibilidad, mejor posicionamiento en Google, más información para los clientes, espacio para crecer.'
          ]
        },
        {
          title: '¿Cuándo elegir una Landing Page?',
          content: [
            '- Estás comenzando y tienes presupuesto limitado',
            '- Quieres probar una idea de negocio rápidamente',
            '- Tienes un producto o servicio específico que promocionar',
            '- Necesitas resultados rápidos (en semanas, no meses)',
            '- Vas a invertir en publicidad digital y necesitas un destino optimizado'
          ]
        },
        {
          title: '¿Cuándo elegir un Sitio Web Completo?',
          content: [
            '- Tu negocio ya está establecido y quieres construir presencia digital sólida',
            '- Ofreces múltiples productos o servicios',
            '- Quieres posicionarte como experto en tu industria',
            '- Necesitas atraer tráfico orgánico de Google a largo plazo',
            '- Buscas transmitir máxima profesionalidad y confianza'
          ]
        },
        {
          title: 'La Estrategia Ideal',
          content: [
            'Muchos negocios exitosos combinan ambas: un sitio web completo como base y landing pages específicas para campañas.',
            'Puedes empezar con una landing page para validar tu idea y luego expandir a un sitio web completo cuando el negocio crezca.'
          ]
        }
      ]
    },
    {
      id: 4,
      slug: 'diseno-responsive-por-que-tu-web-debe-verse-bien-en-moviles',
      title: 'Diseño Responsive: Por qué tu web DEBE verse bien en móviles',
      excerpt: 'El 60% de las búsquedas se realizan desde móviles. Si tu web no es responsive, estás perdiendo más de la mitad de tus clientes.',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
      category: 'Diseño Web',
      author: 'Equipo NeoWeb',
      date: '15 Oct 2025',
      readTime: '6 min',
      content: [
        'Si tu página web no se ve bien en teléfonos móviles, estás literalmente rechazando a más de la mitad de tus clientes potenciales.',
        'El 60% de todas las búsquedas en internet se realizan desde dispositivos móviles, y este número sigue creciendo cada año.'
      ],
      sections: [
        {
          title: '¿Qué es el Diseño Responsive?',
          content: [
            'Diseño responsive significa que tu página web se adapta automáticamente al tamaño de pantalla del dispositivo que se está usando.',
            'Ya sea un smartphone, tablet, laptop o monitor de escritorio, tu web se ve perfecta y es fácil de usar en todos ellos.',
            'No es opcional: es obligatorio en 2025. Google penaliza en sus resultados de búsqueda a las páginas que no son mobile-friendly.'
          ]
        },
        {
          title: 'Por qué importa tanto',
          content: [
            'El 57% de los usuarios no recomendaría un negocio con una web mal diseñada para móviles.',
            'El 40% de las personas visitará el sitio de un competidor si tu web no carga bien en su teléfono.',
            'Google prioriza sitios móviles en sus resultados de búsqueda (Mobile-First Indexing), así que afecta directamente tu visibilidad.'
          ]
        },
        {
          title: 'Elementos clave del diseño móvil',
          content: [
            'Texto legible sin necesidad de hacer zoom',
            'Botones y enlaces suficientemente grandes para tocar con el dedo',
            'Menús de navegación simplificados y accesibles',
            'Imágenes optimizadas que cargan rápidamente',
            'Formularios fáciles de completar en pantallas pequeñas'
          ]
        },
        {
          title: 'El impacto en tu negocio',
          content: [
            'Una web responsive aumenta el tiempo que los visitantes permanecen en tu sitio.',
            'Mejora la experiencia del usuario, lo que se traduce en más contactos y ventas.',
            'Reduce la tasa de rebote (personas que abandonan tu sitio inmediatamente).',
            'Proyecta profesionalismo y muestra que te preocupas por la experiencia de tus clientes.'
          ]
        },
        {
          title: 'Cómo saber si tu web es responsive',
          content: [
            'Prueba abrirla en tu teléfono: ¿se ve bien? ¿puedes leer todo? ¿es fácil navegar?',
            'Si tienes que hacer zoom para leer o los botones son difíciles de presionar, tienes un problema.',
            'Herramientas como Google Mobile-Friendly Test pueden darte un diagnóstico gratuito.'
          ]
        }
      ]
    },
    {
      id: 5,
      slug: 'seo-para-principiantes-como-hacer-que-tus-clientes-te-encuentren',
      title: 'SEO para Principiantes: Cómo hacer que tus clientes te encuentren en Google',
      excerpt: 'Estrategias simples y efectivas para aparecer en los primeros resultados cuando tus clientes buscan lo que ofreces.',
      imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=600&fit=crop',
      category: 'Marketing Digital',
      author: 'Equipo NeoWeb',
      date: '10 Oct 2025',
      readTime: '9 min',
      content: [
        'SEO (Search Engine Optimization) suena técnico, pero en realidad es simple: es hacer que tu negocio aparezca cuando alguien busca tus productos o servicios en Google.',
        'El 75% de las personas nunca pasa de la primera página de resultados de Google. Si no estás ahí, eres invisible.'
      ],
      sections: [
        {
          title: '¿Qué es SEO en palabras simples?',
          content: [
            'SEO es el conjunto de técnicas para que Google entienda de qué trata tu negocio y lo muestre a personas que buscan lo que ofreces.',
            'No es magia ni suerte: es seguir las reglas que Google prefiere para decidir qué sitios merecen aparecer primero.',
            'La buena noticia: no necesitas ser experto en tecnología. Hay acciones simples que cualquiera puede implementar.'
          ]
        },
        {
          title: 'Palabras Clave: El Corazón del SEO',
          content: [
            'Las palabras clave son los términos que tus clientes escriben en Google cuando buscan lo que vendes.',
            'Ejemplo: Si vendes pasteles en Lima, tus palabras clave podrían ser "pasteles Lima", "tortas para cumpleaños Lima", "repostería Lima".',
            'Tu web debe incluir estas palabras naturalmente en títulos, descripciones y contenido.',
            'Herramientas gratuitas como Google Keyword Planner te muestran qué busca la gente y cuánto.'
          ]
        },
        {
          title: 'Google My Business: Tu Arma Secreta Local',
          content: [
            'Si tienes un negocio local, Google My Business es GRATIS y súper poderoso.',
            'Te permite aparecer en el mapa cuando alguien cerca busca tus servicios.',
            'Incluye fotos, horarios, reseñas y hasta un botón de contacto directo.',
            'Es una de las formas más rápidas de conseguir visibilidad local en Google.'
          ]
        },
        {
          title: 'Contenido de Calidad',
          content: [
            'Google premia sitios que ofrecen información útil y relevante.',
            'No se trata de cantidad, sino de responder las preguntas que tus clientes realmente tienen.',
            'Un blog con artículos útiles (como este) puede atraer visitantes y posicionarte como experto.',
            'Contenido fresco y actualizado le dice a Google que tu sitio está activo y es relevante.'
          ]
        },
        {
          title: 'Velocidad y Experiencia del Usuario',
          content: [
            'Google favorece sitios que cargan rápido. Los usuarios abandonan páginas lentas.',
            'Tu sitio debe ser fácil de navegar y encontrar información rápidamente.',
            'Cada segundo de retraso en carga puede reducir conversiones en 7%.',
            'Un buen diseño web profesional ya incorpora estas optimizaciones.'
          ]
        },
        {
          title: 'Resultados: Paciencia y Constancia',
          content: [
            'SEO no es instantáneo. Los resultados usualmente se ven en 3-6 meses.',
            'Pero una vez que alcanzas buenas posiciones, el tráfico "gratis" de Google puede transformar tu negocio.',
            'Es inversión a largo plazo con retornos compuestos: cada mes puedes estar mejor posicionado.'
          ]
        }
      ]
    },
    {
      id: 6,
      slug: 'tendencias-diseno-web-2025-que-necesitas-saber',
      title: 'Tendencias en Diseño Web 2025: Lo que Necesitas Saber',
      excerpt: 'Descubre las tendencias de diseño web que están dominando 2025 y cómo pueden transformar la presencia digital de tu negocio.',
      imageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=600&fit=crop',
      category: 'Diseño Web',
      author: 'Equipo NeoWeb',
      date: '30 Oct 2025',
      readTime: '12 min',
      content: [
        'El diseño web evoluciona constantemente, y 2025 trae consigo tendencias que no solo son visualmente impactantes, sino que mejoran significativamente la experiencia del usuario y los resultados de negocio.',
        'Las empresas que adoptan estas tendencias modernas ven aumentos del 40% en engagement y conversiones comparado con sitios web con diseños obsoletos.',
        'No se trata solo de seguir modas: cada tendencia responde a necesidades reales de los usuarios y a los cambios en cómo consumimos contenido digital.'
      ],
      sections: [
        {
          title: 'Diseño Minimalista y Espacios en Blanco',
          imageUrl: 'https://www.staffdigital.pe/blog/wp-content/uploads/dise%C3%B1o-web-espacio-blanco-3-1024x574.png',
          content: [
            'El minimalismo sigue siendo una tendencia fuerte en 2025, pero ahora con un enfoque más inteligente en el uso del espacio.',
            'Los espacios en blanco no son "desperdicio", son herramientas poderosas que guían la atención del usuario hacia lo que realmente importa: tu mensaje y tus llamados a la acción.',
            'Los sitios minimalistas cargan más rápido, son más fáciles de navegar y proyectan profesionalismo y sofisticación.',
            'Esta tendencia se combina con tipografías grandes y audaces que crean jerarquía visual clara sin saturar al visitante.'
          ]
        },
        {
          title: 'Microinteracciones y Animaciones Sutiles',
          imageUrl: 'https://assets.justinmind.com/wp-content/uploads/2024/10/micro-interactions-header-768x492.png',
          content: [
            'Las microinteracciones son pequeñas animaciones que responden a las acciones del usuario: un botón que cambia al pasar el mouse, un ícono que se anima al hacer clic, o un formulario que valida en tiempo real.',
            'Estas animaciones hacen que tu sitio se sienta vivo, moderno y profesional, mejorando significativamente la experiencia del usuario.',
            'No se trata de animaciones excesivas que distraen, sino de toques sutiles que proporcionan feedback visual y hacen la navegación más intuitiva.',
            'Los sitios con microinteracciones bien diseñadas reportan un 25% más de tiempo de permanencia y mejor retención de usuarios.'
          ]
        },
        {
          title: 'Gradientes y Efectos de Glassmorphism',
          imageUrl: 'https://img.freepik.com/vector-premium/diseno-gradiente-abstracto-fondo-efecto-glassmorphism-pagina-aterrizaje-sitio-web_683971-178.jpg',
          content: [
            'Los gradientes modernos han vuelto con fuerza, pero ahora son más sofisticados: gradientes suaves, de múltiples colores y con efectos de profundidad.',
            'El glassmorphism (diseño con efecto de vidrio) crea interfaces modernas con elementos semi-transparentes que dan sensación de profundidad y capas.',
            'Estos efectos visuales hacen que tu sitio destaque de la competencia y transmita innovación y modernidad.',
            'Cuando se usan correctamente, los gradientes y efectos de vidrio pueden aumentar la percepción de calidad de tu marca en un 30%.'
          ]
        },
        {
          title: 'Tipografía Variable y Personalizada',
          imageUrl: 'https://weandthecolor-21f52.kxcdn.com/wp-content/uploads/2021/09/Flexible-Variable-font-family-by-Art-Grootfontein.jpg',
          content: [
            'Las tipografías variables permiten ajustar el peso, ancho y estilo de una fuente de forma fluida, creando una identidad visual única.',
            'En 2025, las marcas buscan tipografías personalizadas que reflejen su personalidad, moviéndose más allá de las fuentes genéricas.',
            'Una tipografía bien elegida puede mejorar la legibilidad, aumentar el tiempo de lectura y fortalecer el reconocimiento de marca.',
            'Los sitios con tipografías personalizadas y bien implementadas generan una conexión emocional más fuerte con los visitantes.'
          ]
        },
        {
          title: 'Diseño Oscuro (Dark Mode)',
          imageUrl: 'https://torresburriel.com/wp-content/uploads/2024/04/diseno-de-modo-oscuro-en-interfaces-ux.jpg',
          content: [
            'El modo oscuro ya no es una opción, es una expectativa. Más del 80% de los usuarios prefieren sitios que ofrezcan esta opción.',
            'Reduce la fatiga visual, especialmente en dispositivos móviles, y puede mejorar la duración de la batería en pantallas OLED.',
            'El diseño oscuro también proyecta modernidad y sofisticación, atrayendo especialmente a audiencias jóvenes y tecnológicas.',
            'Implementar dark mode puede aumentar el tiempo de sesión en un 20% y mejorar la percepción de calidad de tu marca.'
          ]
        },
        {
          title: 'Cómo Aplicar Estas Tendencias a Tu Negocio',
          imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
          content: [
            'No necesitas implementar todas las tendencias a la vez. Elige las que mejor se alineen con tu marca y objetivos de negocio.',
            'Prioriza las tendencias que mejoran la experiencia del usuario y las conversiones sobre las que son puramente estéticas.',
            'Un rediseño profesional que incorpora estas tendencias puede aumentar tus conversiones en un 40-60% en los primeros meses.',
            'Lo más importante: estas tendencias funcionan mejor cuando están al servicio de tus objetivos de negocio, no solo como decoración.'
          ]
        }
      ]
    },

  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el slug del artículo de la ruta
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.article = this.articles.find(a => a.slug === slug) || this.articles[0];
        this.loadRelatedArticles();
      } else {
        // Si no hay slug, mostrar el primer artículo
        this.article = this.articles[0];
        this.loadRelatedArticles();
      }
      
      // Scroll to top
      window.scrollTo(0, 0);
    });
  }

  loadRelatedArticles() {
    if (this.article) {
      // Obtener 3 artículos relacionados (excluyendo el actual)
      this.relatedArticles = this.articles
        .filter(a => a.id !== this.article!.id)
        .slice(0, 3);
    }
  }
}
