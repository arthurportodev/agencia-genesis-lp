const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://example.com';
const whatsappNumber = '5594991656515';
const whatsappMessage = 'Olá! Gostaria de solicitar um diagnóstico da estrutura digital do meu negócio.';

export const site = {
  name: 'Agência Gênesis',
  shortName: 'Gênesis',
  positioning: 'Estrutura de captação, mensuração e organização de leads.',
  description:
    'Landing pages estratégicas, tracking e estruturas de captação para clínicas que querem transformar atenção, visitas e anúncios em contatos mais organizados e mensuráveis.',
  seoTitle: 'Agência Gênesis | Landing Pages e Estruturas de Conversão',
  siteUrl,
  ogImage: `${siteUrl}/social-preview.png`,
  whatsappNumber,
  whatsappMessage,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  videoId: 'HMQ43VubbwQ',
  videoEmbedUrl: 'https://www.youtube.com/embed/HMQ43VubbwQ',
  gtmId: 'GTM-NCHF5FS2',
  areaServed: 'Brasil',
  footerText: 'Estrutura de captação, mensuração e organização de leads.',
  socialLinks: [] as Array<{ label: string; url: string }>,
} as const;
