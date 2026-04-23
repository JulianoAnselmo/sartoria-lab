import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('caderno');
  return rss({
    title: 'Sartoria Lab — Caderno',
    description: 'Notas técnicas do estúdio.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.titulo,
      pubDate: p.data.data,
      description: p.data.resumo,
      link: `/caderno/${p.id}/`,
    })),
  });
}
