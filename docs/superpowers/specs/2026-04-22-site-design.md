# Sartoria Lab — Site v1 (design)

**Data:** 2026-04-22
**Fase:** 2 (pós identidade de marca)
**Status:** aprovado pelo fundador

## Contexto

Fase 1 entregou identidade de marca completa (paleta Sartoria Clássica, logo chevron+costura, tagline "Tecnologia sob medida.", tom de voz, catálogo de serviços). Site é o próximo passo — canal principal de aquisição para um estúdio solo que atende de profissionais liberais a grandes empresas em projetos sob medida.

Objetivo: site institucional + portfólio que transmita o universo da marca (editorial, artesanal, tech), gere leads qualificados via formulário de briefing, e sirva como prova viva do ofício (o próprio site é uma "peça" da Sartoria Lab).

## Stack

- **Astro 4** — static-first, zero-JS por padrão, ótimo pra sites editoriais
- **Tailwind CSS** — utilitários rápidos, com tokens da paleta definidos em `tailwind.config`
- **Content Collections** — cases e caderno como Markdown com frontmatter tipado
- **Google Fonts** (v1) — Cormorant Garamond (display serifa) + Inter (UI sans) + JetBrains Mono (código/meta). Substituir por fontes premium pagas (PP Editorial New / Canela) depois da validação inicial.
- **Deploy:** Vercel
- **Formulário:** Formspree (mais simples) ou Resend API + Vercel serverless (se quiser controle). Decisão no scaffold — padrão Formspree.

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — hero editorial centralizado, 3 pilares, 2-3 cases em destaque, CTA final |
| `/oficio` | Sobre — narrativa do nome, método (6 etapas), quem é o artesão |
| `/pecas` | Índice de cases em grid |
| `/pecas/[slug]` | Case individual — ficha técnica + narrativa + imagens |
| `/medida` | Formulário de briefing + expectativa de retorno |
| `/caderno` | Índice de posts (opcional v1 — stub pronto, esconder da nav se vazio) |
| `/caderno/[slug]` | Post individual |

## Componentes

`src/components/`:
- `Header.astro` — nav editorial (logo + links) + linha divisória
- `Footer.astro` — contato, redes, colofon
- `Hero.astro` — bloco hero reusável (com variante home vs interior)
- `Pilar.astro` — card de pilar (número + título + texto)
- `CaseCard.astro` — thumbnail + metadados (categoria, ano, stack)
- `MetodoEtapa.astro` — linha do método (Medida → Ajustes)
- `BriefingForm.astro` — formulário de contato
- `MonoMeta.astro` — metadados em mono (categoria, data, tags)

## Design tokens (Tailwind)

```js
theme: {
  extend: {
    colors: {
      papel:   '#F5F2EC',
      carvao:  '#1A1A1A',
      giz:     '#D9CFC0',
      linha:   '#A83232'
    },
    fontFamily: {
      display: ['Cormorant Garamond', 'Georgia', 'serif'],
      sans:    ['Inter', 'system-ui', 'sans-serif'],
      mono:    ['JetBrains Mono', 'ui-monospace', 'monospace']
    }
  }
}
```

## Content collections

```ts
// src/content/config.ts
const cases = defineCollection({
  schema: z.object({
    titulo: z.string(),
    cliente: z.string(),
    categoria: z.enum(['site','app','sistema','consultoria']),
    ano: z.number(),
    stack: z.array(z.string()),
    resumo: z.string(),
    destaque: z.boolean().default(false),
    capa: z.string().optional()
  })
});

const caderno = defineCollection({
  schema: z.object({
    titulo: z.string(),
    data: z.date(),
    resumo: z.string(),
    tags: z.array(z.string()).default([])
  })
});
```

## Home — estrutura (layout A editorial centralizado)

1. **Header** fixo minimalista
2. **Hero** centralizado: "Est. 2026" (micro-label) + tagline em serifa grande + divisor vermelho + one-liner + CTA "Agende uma medida"
3. **Três pilares** (Sob medida real · Ofício + laboratório · Relação direta com o artesão)
4. **Peças em destaque** (2-3 cases com `destaque: true`)
5. **Bloco "Ofício"** — teaser do método com link para `/oficio`
6. **CTA final** — "Pronto pra tirar as medidas do seu projeto?"
7. **Footer**

## SEO + meta

- `astro-sitemap` integração automática
- `<Head>` com OG tags padrão (title, description, og:image do logo)
- RSS do caderno (`@astrojs/rss`)
- Favicon do símbolo SVG (brand/logo/sartoria-lab-simbolo.svg)
- `robots.txt` permissivo

## Performance

- Zero JS no path crítico (Astro static)
- Fontes com `font-display: swap`
- Imagens via `<Image>` do Astro (otimização automática)
- Lighthouse ≥ 95 em todas categorias como meta

## Acessibilidade

- Contraste AA mínimo (a paleta passa — carvão sobre papel é ~13:1)
- HTML semântico (`<article>`, `<nav>`, `<main>`, `<section>`)
- Foco visível customizado (outline vermelho linha)
- `alt` obrigatório em imagens (enforçado pelo schema das content collections quando possível)

## Fora do escopo v1

- CMS (ficar em Markdown até ter volume)
- i18n (só pt-BR por enquanto)
- Analytics (adicionar Plausible na v1.1 se quiser)
- Blog/caderno populado (stub só)
- Dark mode (a paleta é intencionalmente clara)
- Autenticação / área cliente

## Verificação (como saber que v1 está pronto)

- [ ] `pnpm dev` sobe sem erro
- [ ] Lighthouse ≥ 95 em todas categorias na home
- [ ] 1 case seed funcionando em `/pecas/[slug]`
- [ ] Formulário `/medida` envia email pro endereço de destino
- [ ] Build de produção funciona (`pnpm build` sem erro)
- [ ] Deploy Vercel acessível via URL temporária
- [ ] Nav funciona nas 5 rotas principais
- [ ] Tipografia + cores batem com especificação visual
- [ ] Logo SVG renderiza nítido em header + favicon
