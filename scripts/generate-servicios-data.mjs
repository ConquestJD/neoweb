import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outFile = path.join(root, 'src/app/features/servicios/servicios.data.ts');

const slugs = [
  'pagina-web',
  'tienda-virtual',
  'marketing-digital',
  'rediseno-paginas-web',
  'aplicaciones-moviles',
  'digitalizacion-procesos'
];

const folderMap = {
  'pagina-web': 'pagina-web',
  'tienda-virtual': 'tienda-virtual',
  'marketing-digital': 'marketing-digital',
  'rediseno-paginas-web': 'rediseno-paginas-web',
  'aplicaciones-moviles': 'aplicaciones-moviles',
  'digitalizacion-procesos': 'digitalizacion-procesos'
};

const pageMeta = JSON.parse(fs.readFileSync(path.join(__dirname, 'servicios-meta.json'), 'utf8'));

function extractArray(source, name) {
  const nameIndex = source.indexOf(`${name}`);
  if (nameIndex === -1) {
    throw new Error(`Could not find start of ${name}`);
  }

  const assignIndex = source.indexOf('= [', nameIndex);
  if (assignIndex === -1) {
    throw new Error(`Could not find assignment for ${name}`);
  }

  const bracketStart = assignIndex + 2;
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = bracketStart; i < source.length; i++) {
    const char = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '\'' || char === '"' || char === '`') {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === '[') {
      depth++;
    } else if (char === ']') {
      depth--;
      if (depth === 0) {
        return eval(source.slice(bracketStart, i + 1));
      }
    }
  }

  throw new Error(`Could not extract ${name}`);
}

const services = {};

for (const slug of slugs) {
  const folder = folderMap[slug];
  const tsPath = path.join(root, `src/app/features/servicios/${folder}/${folder}.component.ts`);
  const source = fs.readFileSync(tsPath, 'utf8');
  const meta = pageMeta[slug];

  const features = extractArray(source, 'features');
  const methodology = extractArray(source, 'methodology');
  const fullCodeBenefits = extractArray(source, 'fullCodeBenefits');
  const plans = extractArray(source, 'plans');

  services[slug] = {
    slug,
    pageTitle: meta.pageTitle,
    hero: meta.hero,
    plansSubtitle: meta.plansSubtitle,
    includesSection: meta.includesSection,
    includes: meta.includes ?? features,
    showBenefitsSection: meta.showBenefitsSection ?? false,
    benefits: meta.showBenefitsSection ? features : undefined,
    processSection: meta.processSection,
    fullcodeSection: meta.fullcodeSection,
    ctaSection: meta.ctaSection,
    features,
    methodology,
    fullCodeBenefits,
    plans
  };

  if (!services[slug].showBenefitsSection) {
    delete services[slug].benefits;
  }
}

const header = `export interface ServicioItem {
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

export const SERVICIOS: Record<string, ServicioConfig> = `;

const footer = `;

export const SERVICIO_SLUGS = ${JSON.stringify(slugs, null, 2)} as const;

export type ServicioSlug = typeof SERVICIO_SLUGS[number];

export function getServicioBySlug(slug: string | null | undefined): ServicioConfig | undefined {
  if (!slug) {
    return undefined;
  }
  return SERVICIOS[slug];
}
`;

fs.writeFileSync(outFile, header + JSON.stringify(services, null, 2) + footer, 'utf8');
console.log('Generated', outFile);
