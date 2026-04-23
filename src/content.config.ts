import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    titulo: z.string(),
    cliente: z.string(),
    categoria: z.enum(['site', 'app', 'sistema', 'consultoria']),
    ano: z.number(),
    stack: z.array(z.string()),
    resumo: z.string(),
    destaque: z.boolean().default(false),
    capa: z.string().optional(),
  }),
});

const caderno = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/caderno' }),
  schema: z.object({
    titulo: z.string(),
    data: z.date(),
    resumo: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { cases, caderno };
