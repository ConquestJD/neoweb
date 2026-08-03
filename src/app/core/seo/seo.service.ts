import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  PORTFOLIO_PROJECTS,
  ROUTE_LABELS,
  SITE_HREFLANG,
  SITE_SERVICES,
  SITE_URL
} from './site.config';

interface BreadcrumbItem {
  name: string;
  item: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);

  updateForUrl(rawUrl: string): void {
    const path = this.normalizePath(rawUrl);
    const canonicalUrl = `${SITE_URL}${path}`;

    this.setCanonical(canonicalUrl);
    this.setRobots(path);
    this.setHreflang(path);
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:url', content: canonicalUrl });
    this.setBreadcrumbSchema(path);
    this.setServiceSchema(path);
  }

  private normalizePath(rawUrl: string): string {
    const path = (rawUrl.split('?')[0] || '/').split('#')[0];
    if (path === '/' || path === '') {
      return '/inicio';
    }
    return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  }

  private setCanonical(url: string): void {
    this.upsertLink('canonical', url);
  }

  private setRobots(path: string): void {
    const noIndex =
      path === '/404' ||
      path.startsWith('/blog');

    const content = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    this.meta.updateTag({ name: 'robots', content });
    this.meta.updateTag({ name: 'googlebot', content });
  }

  /**
   * Solo emite hreflang si hay idiomas alternativos configurados.
   * Hoy el sitio es solo español: no se publican alternates inventados.
   */
  private setHreflang(path: string): void {
    this.removeLinks('alternate');

    if (SITE_HREFLANG.length === 0) {
      return;
    }

    this.upsertLink('alternate', `${SITE_URL}${path}`, { hreflang: 'es' });
    this.upsertLink('alternate', `${SITE_URL}${path}`, { hreflang: 'x-default' });

    for (const alt of SITE_HREFLANG) {
      const href = `${SITE_URL}${alt.pathPrefix}${path === '/inicio' ? '' : path}`;
      this.upsertLink('alternate', href, { hreflang: alt.lang });
    }
  }

  private setBreadcrumbSchema(path: string): void {
    if (path === '/404') {
      this.removeJsonLd('schema-breadcrumb');
      return;
    }

    const items = this.buildBreadcrumbs(path);
    if (items.length === 0) {
      this.removeJsonLd('schema-breadcrumb');
      return;
    }

    this.setJsonLd('schema-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item
      }))
    });
  }

  private setServiceSchema(path: string): void {
    if (!path.startsWith('/servicios/')) {
      this.removeJsonLd('schema-service');
      return;
    }

    const slug = path.replace('/servicios/', '');
    const service = SITE_SERVICES.find((item) => item.slug === slug);
    if (!service) {
      this.removeJsonLd('schema-service');
      return;
    }

    this.setJsonLd('schema-service', {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/servicios/${service.slug}#service`,
      name: service.name,
      description: service.description,
      url: `${SITE_URL}/servicios/${service.slug}`,
      serviceType: service.name,
      provider: {
        '@id': `${SITE_URL}/#organization`
      },
      areaServed: {
        '@type': 'Country',
        name: 'Perú'
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${SITE_URL}/contacto`,
        availableLanguage: 'Spanish'
      }
    });
  }

  private buildBreadcrumbs(path: string): BreadcrumbItem[] {
    const crumbs: BreadcrumbItem[] = [
      { name: 'Inicio', item: `${SITE_URL}/inicio` }
    ];

    if (path === '/inicio') {
      return crumbs;
    }

    const serviceMatch = path.match(/^\/servicios\/([^/]+)$/);
    if (serviceMatch) {
      const slug = serviceMatch[1];
      const service = SITE_SERVICES.find((item) => item.slug === slug);
      crumbs.push({
        name: service?.name ?? this.humanize(slug),
        item: `${SITE_URL}${path}`
      });
      return crumbs;
    }

    const portfolioMatch = path.match(/^\/portafolio\/([^/]+)$/);
    if (portfolioMatch) {
      const id = portfolioMatch[1];
      crumbs.push({
        name: 'Portafolio',
        item: `${SITE_URL}/portafolio`
      });
      crumbs.push({
        name: PORTFOLIO_PROJECTS[id] ?? this.humanize(id),
        item: `${SITE_URL}${path}`
      });
      return crumbs;
    }

    const segment = path.replace(/^\//, '');
    crumbs.push({
      name: ROUTE_LABELS[segment] ?? this.humanize(segment),
      item: `${SITE_URL}${path}`
    });
    return crumbs;
  }

  private humanize(value: string): string {
    return value
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  private upsertLink(rel: string, href: string, attrs: Record<string, string> = {}): void {
    const attrSelector = Object.entries(attrs)
      .map(([key, value]) => `[${key}="${value}"]`)
      .join('');
    const selector = `link[rel="${rel}"]${attrSelector}`;

    let link = this.document.head.querySelector(selector) as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      for (const [key, value] of Object.entries(attrs)) {
        link.setAttribute(key, value);
      }
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', href);
  }

  private removeLinks(rel: string): void {
    this.document.head
      .querySelectorAll(`link[rel="${rel}"]`)
      .forEach((node) => node.remove());
  }

  private setJsonLd(id: string, data: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  private removeJsonLd(id: string): void {
    this.document.getElementById(id)?.remove();
  }
}
