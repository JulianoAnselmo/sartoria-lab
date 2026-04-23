# Identidade visual — Sartoria Lab

## Princípio estético

Papel e tecnologia. Editorial e técnico. Tipografia que respira, espaço generoso, detalhes de ofício (linha, giz, risco, costura) como pontuação — nunca como ornamento.

A régua é: **se parecer com site de agência genérica, está errado.**

---

## Paleta — definida: Sartoria Clássica

| Nome | Hex | Uso |
|------|-----|-----|
| Papel | `#F5F2EC` | Fundo principal |
| Carvão | `#1A1A1A` | Texto, títulos, traço principal |
| Giz | `#D9CFC0` | Divisórias, backgrounds secundários, detalhes |
| Linha vermelha | `#A83232` | Acento raro — costura, link ativo, destaque único |

**Regra de uso da linha vermelha:** no máximo 1 elemento vermelho por tela. É o ponto de costura que fecha a peça — se tem muito, perde força.

**Sensação:** caderno de alfaiate, papel de corte, risca de giz sobre tecido claro.

### Paletas alternativas (descartadas)
- **Lab Escuro** — breu + branco cru + terracota. Descartada por ser mais próxima do visual de estúdio tech padrão.
- **Papel-Risco** — creme + grafite + tinta azul. Descartada por ser menos distintiva.

---

## Tipografia

Par serifa + sans é a expressão direta da dupla metáfora (ofício + lab).

### Títulos / Display — Serifa editorial
Candidatas (por ordem de preferência):
1. **PP Editorial New** (Pangram Pangram) — elegante, contemporânea, com caráter.
2. **GT Sectra** (Grilli Type) — caligráfica, distinta, alto padrão.
3. **Canela** (Commercial Type) — clássica, forte.
4. **Cormorant Garamond** (grátis, Google Fonts) — opção inicial acessível.

### Corpo / UI — Sans geométrica
Candidatas:
1. **Inter** (grátis) — padrão do mercado, impecável em UI.
2. **General Sans** (Fontshare, grátis) — um pouco mais de caráter.
3. **Söhne** (Klim) — premium, se o orçamento permitir.

### Código / Números — Mono
- **JetBrains Mono** (grátis) — acento "lab", para trechos de código, números, metadados.

### Hierarquia sugerida
- **Display XL:** serifa, 72-96px, peso regular
- **H1:** serifa, 48-56px
- **H2:** serifa, 32-36px
- **H3:** sans, 20-24px, semibold
- **Corpo:** sans, 16-18px, regular, line-height 1.6
- **Caption/meta:** mono, 13-14px

---

## Logo — definido: chevron + costura

### Conceito
Brackets de código `<` e `/>` em traço forte (carvão), com linha de costura tracejada em vermelho entre eles. Híbrido tech + sartoria: sintaxe de código como forma, costura como alma.

### Arquivos
- `brand/logo/sartoria-lab-logo.svg` — lockup horizontal (símbolo + wordmark)
- `brand/logo/sartoria-lab-simbolo.svg` — símbolo isolado (favicon, avatar, stamp)

### Especificação do símbolo
- **Chevron esquerdo:** `<` em traço 2px, carvão `#1A1A1A`, stroke-linecap round, linejoin round.
- **Chevron direito:** `/>` em traço 2px, carvão, mesmo acabamento.
- **Costura central:** curva senoidal em 3 ondas, stroke 1.5px, vermelho `#A83232`, stroke-dasharray `3 2`.
- **Proporção mínima:** 16px de altura (favicon). Legibilidade garantida até 12px reduzindo stroke.

### Lockup (símbolo + nome)
- Símbolo à esquerda, wordmark à direita.
- Wordmark "Sartoria Lab" em serifa editorial (Georgia fallback; em produção trocar por PP Editorial New ou equivalente).
- Espaço entre símbolo e wordmark ≥ altura do símbolo ÷ 2.

### Variações permitidas
- Monocromático preto (sem vermelho na costura) — para impressão 1 cor, contextos delicados.
- Monocromático sobre fundo escuro — inverter carvão para papel `#F5F2EC`.
- Apenas símbolo — favicon, avatar social, stamp em PDFs.
- Apenas wordmark — em documentos longos, rodapés, assinaturas.

### Proibido
- Trocar cores (exceto variações acima).
- Adicionar efeitos (sombra, gradiente, outline).
- Inclinar, deformar, rotacionar.
- Colocar sobre fundo que não seja papel/carvão/branco puro.
- Trocar a serifa do wordmark por sans-serif.

---

## Elementos gráficos

- **Linha/fio** — divisórias finas (1px), como linha de costura sobre papel. Usar com parcimônia.
- **Rótulo/etiqueta** — retângulo com metadados (categoria, ano, tecnologia), inspirado em etiqueta de alfaiataria.
- **Risco a giz** — para títulos de seção especiais, um sublinhado texturizado (SVG com trama irregular), nunca uniforme.
- **Grid 12 colunas + muito espaço em branco.** Respirar é parte da identidade.

## Fotografia / imagem

- **Detalhes, não cenas.** Textura de tecido, linha, costura, teclado, código em tela, papel com anotação.
- **Macro > panorâmica.**
- **Luz natural, sombra presente.**
- **Zero estoque corporativo** (pessoas de terno sorrindo apontando pra monitor — banido).

## O que evitar

- Gradientes coloridos (azul → roxo → rosa) — é o visual de todo SaaS genérico.
- Ilustrações "flat" estilo Corporate Memphis.
- Ícones de linha genéricos da Heroicons/Feather usados sem edição.
- Cores neon / cyberpunk.
- Serifa "clássica demais" (Times, Garamond puro) sem ajuste — vira cartório.
