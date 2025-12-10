import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  // Categorías del blog
  categories = ['Todos', 'Negocios Digitales', 'Ventas Online', 'Decisiones Digitales', 'Diseño Web', 'Marketing Digital'];
  selectedCategory = 'Todos';

  // Posts del blog
  posts: BlogPost[] = [
    {
      id: 1,
      slug: 'por-que-tu-negocio-necesita-una-pagina-web',
      title: '¿Por qué tu negocio necesita una página web en 2025?',
      excerpt: 'Descubre cómo una presencia digital profesional puede transformar tu negocio y aumentar tus ventas.',
      content: '',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      category: 'Negocios Digitales',
      author: 'Equipo NeoWeb',
      date: '28 Oct 2025',
      readTime: '8 min'
    },
    {
      id: 2,
      slug: 'como-una-pagina-web-puede-triplicar-tus-ventas',
      title: 'Cómo una página web puede triplicar tus ventas',
      excerpt: 'Estrategias comprobadas para convertir visitantes en clientes y aumentar significativamente tus ingresos.',
      content: '',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: 'Ventas Online',
      author: 'Equipo NeoWeb',
      date: '25 Oct 2025',
      readTime: '10 min'
    },
    {
      id: 3,
      slug: 'landing-page-vs-sitio-web-que-necesita-tu-negocio',
      title: 'Landing Page vs Sitio Web: ¿Qué necesita tu negocio?',
      excerpt: 'Guía completa para elegir la mejor solución digital según tus objetivos de negocio y presupuesto.',
      content: '',
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
      category: 'Decisiones Digitales',
      author: 'Equipo NeoWeb',
      date: '20 Oct 2025',
      readTime: '7 min'
    },
    {
      id: 4,
      slug: 'diseno-responsive-por-que-tu-web-debe-verse-bien-en-moviles',
      title: 'Diseño Responsive: Por qué tu web DEBE verse bien en móviles',
      excerpt: 'El 60% de las búsquedas se realizan desde móviles. Si tu web no es responsive, estás perdiendo más de la mitad de tus clientes.',
      content: '',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
      category: 'Diseño Web',
      author: 'Equipo NeoWeb',
      date: '15 Oct 2025',
      readTime: '6 min'
    },
    {
      id: 5,
      slug: 'seo-para-principiantes-como-hacer-que-tus-clientes-te-encuentren',
      title: 'SEO para Principiantes: Cómo hacer que tus clientes te encuentren en Google',
      excerpt: 'Estrategias simples y efectivas para aparecer en los primeros resultados cuando tus clientes buscan lo que ofreces.',
      content: '',
      imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop',
      category: 'Marketing Digital',
      author: 'Equipo NeoWeb',
      date: '10 Oct 2025',
      readTime: '9 min'
    },
    {
      id: 6,
      slug: 'tendencias-diseno-web-2025-que-necesitas-saber',
      title: 'Tendencias en Diseño Web 2025: Lo que Necesitas Saber',
      excerpt: 'Descubre las tendencias de diseño web que están dominando 2025 y cómo pueden transformar la presencia digital de tu negocio.',
      content: '',
      imageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=500&fit=crop',
      category: 'Diseño Web',
      author: 'Equipo NeoWeb',
      date: '30 Oct 2025',
      readTime: '12 min'
    },

  ];

  // Filtrar posts
  filterPosts(category: string) {
    this.selectedCategory = category;
  }

  // Obtener posts filtrados
  get filteredPosts() {
    if (this.selectedCategory === 'Todos') {
      return this.posts;
    }
    return this.posts.filter(p => p.category === this.selectedCategory);
  }

  // Obtener icono para categoría
  getCategoryIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      'Todos': 'apps',
      'Negocios Digitales': 'business',
      'Ventas Online': 'shopping_cart',
      'Decisiones Digitales': 'lightbulb',
      'Diseño Web': 'palette',
      'Marketing Digital': 'trending_up'
    };
    return iconMap[category] || 'article';
  }

  // Scroll a los posts
  scrollToPosts() {
    const element = document.getElementById('blog-filters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

