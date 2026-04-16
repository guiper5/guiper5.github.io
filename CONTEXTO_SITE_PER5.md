# CONTEXTO COMPLETO — Site PER5 Projetos e Consultoria
> Versão 1.0 · Atualizado em 2026-04 · Leitura obrigatória antes de qualquer alteração no site

---

## SUMÁRIO

1. [Sobre a Empresa](#1-sobre-a-empresa)
2. [Fontes de Referência Usadas na Construção do Site](#2-fontes-de-referência-usadas-na-construção-do-site)
3. [Stack Tecnológica Completa](#3-stack-tecnológica-completa)
4. [Arquitetura de Arquivos](#4-arquitetura-de-arquivos)
5. [Design System — Paleta, Tipografia e Tokens](#5-design-system--paleta-tipografia-e-tokens)
6. [Sistema Dark / Light Mode](#6-sistema-dark--light-mode)
7. [Sistema Bilíngue PT-BR / EN](#7-sistema-bilíngue-pt-br--en)
8. [Mapa de Componentes](#8-mapa-de-componentes)
9. [Animações e Interações](#9-animações-e-interações)
10. [Formulário de Contato (Formspree)](#10-formulário-de-contato-formspree)
11. [Regras de Manutenção e Padrões](#11-regras-de-manutenção-e-padrões)
12. [Deploy e CI/CD](#12-deploy-e-cicd)
13. [Contatos e Acessos](#13-contatos-e-acessos)

---

## 1. Sobre a Empresa

### Identidade

**Nome:** PER5 Projetos e Consultoria  
**Site:** https://per5.com.br  
**Sede:** Campinas, SP — Brasil  
**Atendimento:** Todo o Brasil (presencial em Campinas, remoto no restante)  
**WhatsApp:** +55 (19) 99150-8664  
**E-mail:** guilherme@per5.com.br  
**Instagram:** @per5eng  
**LinkedIn:** linkedin.com/company/per5  
**Registro profissional:** CREA-SP  

### O que a empresa faz

A PER5 é um **escritório independente de engenharia civil especializado em projetos de infraestrutura**. Não é uma construtora — ela projeta. Os principais serviços são:

| Serviço | Descrição |
|---------|-----------|
| **Terraplenagem** (carro-chefe) | Projeto básico (PBT) e executivo (PET), movimentação de volumes, cortes, aterros, taludes, drenagem superficial, perfis, OpenBIM |
| **Drenagem Pluvial** | Micro e macrodrenagem, galerias, estudos hidrológicos |
| **Terraplenagem + Drenagem (integrado)** | Projeto conjunto, mais comum em loteamentos |
| **Pavimentação** | Asfalto, concreto, intertravado e permeável, acessos rodoviários |
| **Regularização de Imóveis / Loteamentos** | Habite-se, alvarás, registro de imóveis, desmembramentos |
| **Consultoria em Patologias** | Visitas técnicas, laudos, soluções corretivas e preventivas |
| **OpenBIM** | Projetos em IFC nativo, Scan-to-BIM, ISO 19650 |

> ⚠️ **NÃO EXISTE** serviço de "Gestão de Obras" na PER5. Se aparecer em qualquer lista ou formulário, remover imediatamente.

### Para quem

- **Construtoras e Incorporadoras** — precisam do projeto para começar a obra
- **Indústrias e Empresas Privadas** — expansão de plantas, pátios, acessos
- **Loteadoras e Empreendedores Imobiliários** — aprovação e regularização
- **Escritórios de Arquitetura e Engenharia** — backoffice técnico, subcontratação com confidencialidade garantida

### Números da empresa (usados no site)

- **100+ projetos** entregues
- **7+ anos** de especialização
- **24h** retorno ao contato (horas úteis)
- **100% ART inclusa** em todos os projetos

### Tom de voz e posicionamento

- Direto, técnico, sem rodeios
- **Não se compara a "grandes escritórios"** — esse posicionamento foi deliberadamente removido da identidade v1.0
- Tagline oficial: **"Engenharia que facilita."**
- H1 do site: "Projetos de Infraestrutura Civil com Alto Desempenho Técnico"
- Destaca: agilidade, atendimento direto ao engenheiro, OpenBIM, ART inclusa, cronograma real em contrato

---

## 2. Fontes de Referência Usadas na Construção do Site

### Documentos de origem (no repositório)

| Arquivo | Conteúdo | Impacto no site |
|---------|----------|-----------------|
| `per5-contexto-completo.md` | **Documento principal** de identidade de marca v1.0. Define posicionamento, tom de voz, serviços, segmentos, estrutura de seções, copy de cada section, regras tipográficas e de cores | É a bíblia do site — toda decisão de copy, hierarquia e estrutura vem daqui |
| `contexto_siteper5_v2.md` | Versão anterior da estratégia de conteúdo | Usada como base para os primeiros rascunhos; supersedida pelo per5-contexto-completo.md |
| `per5-design-system.css` | Paleta de cores original extraída do per5.com.br | Usada para definir os tokens de cor (`--amber`, `--terra`, `--madeira`, etc.) |

### Como ler o `per5-contexto-completo.md`

O documento está estruturado em seções numeradas correspondentes a cada bloco do site:

```
Seção 01 → Hero
Seção 02 → StatsBar
Seção 03 → Services (Serviços)
Seção 04 → Clientes (Marquee)
Seção 05 → PorQue (Por que a PER5?)
Seção 06 → ParaQuem (Para Quem Trabalhamos)
Seção 07 → Portfolio
Seção 08 → Processo (Nosso Processo)
Seção 09 → CTA (Formulário de Orçamento)
Seção 10 → FAQ
Seção 11 → Contact (Contato Direto)
Footer    → Rodapé
```

Qualquer alteração de copy **deve ser validada contra este documento** antes de ser aplicada. Se o documento de contexto for atualizado, os textos no `LanguageContext.tsx` devem ser atualizados em seguida.

---

## 3. Stack Tecnológica Completa

### Runtime e Build

| Tecnologia | Versão | Papel |
|------------|--------|-------|
| **React** | 18.3.1 | Framework de UI |
| **TypeScript** | 5.8.3 | Tipagem estática em todo o projeto |
| **Vite** | 5.4.19 | Bundler e dev server |
| **@vitejs/plugin-react-swc** | 3.11.0 | Compilação rápida com SWC (não Babel) |

### Estilização

| Tecnologia | Versão | Papel |
|------------|--------|-------|
| **Tailwind CSS** | 3.4.17 | Utility classes base |
| **tailwindcss-animate** | 1.0.7 | Animações via Tailwind |
| **class-variance-authority** | 0.7.1 | Variantes de classe para shadcn/ui |
| **clsx + tailwind-merge** | 2.1.1 / 2.6.0 | Merge de classes condicionais |

> **Atenção:** O Tailwind é suplementar. O design system principal da PER5 usa **CSS custom properties** (variáveis) declaradas em `src/index.css`, aplicadas via `style={{ ... }}` diretamente nos componentes. O Tailwind é usado para layout (grid, flex, padding, margin) e não para cores ou tipografia.

### UI Components

| Tecnologia | Papel |
|------------|-------|
| **shadcn/ui** (via Radix UI) | Componentes de UI base (accordions, toasts, tooltips, etc.) — disponíveis em `src/components/ui/` |
| **lucide-react** 0.462.0 | Ícones SVG (ArrowRight, Menu, X, Sun, Moon, MessageCircle, Mail, etc.) |
| **Radix UI** (múltiplos packages) | Primitivas acessíveis por baixo do shadcn/ui |

> Os componentes do shadcn/ui (`src/components/ui/`) estão presentes mas **pouco usados** nas seções customizadas do site. Os componentes principais (Hero, Services, CTA, etc.) são escritos do zero com HTML + CSS vars.

### Roteamento

| Tecnologia | Versão | Papel |
|------------|--------|-------|
| **react-router-dom** | 6.30.1 | SPA routing |

O site tem apenas **2 rotas**:
- `/` → `src/pages/Index.tsx` (todo o site, scroll único)
- `*` → `src/pages/NotFound.tsx` (404)

A navegação entre seções é feita via `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })` — sem rotas adicionais.

### Estado e Data

| Tecnologia | Versão | Papel |
|------------|--------|-------|
| **@tanstack/react-query** | 5.83.0 | Disponível mas não usado nas seções atuais (preparado para futuro) |
| **React Context API** | nativo | Usado para `LanguageContext` (bilíngue) |
| **localStorage** | nativo | Persiste preferência de tema (dark/light) |

### Formulário

| Tecnologia | Papel |
|------------|-------|
| **Formspree** | Serviço externo de processamento de formulários |
| **URL:** `https://formspree.io/f/xlgonzzz` | Destino: `guilherme@per5.com.br` |

O formulário usa `fetch` nativo com `FormData` — sem biblioteca de formulário (react-hook-form está disponível via shadcn mas não é usado no CTA).

### Fontes

Carregadas via Google Fonts no `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
```

| Fonte | Pesos | Uso |
|-------|-------|-----|
| **Barlow Condensed** | 400, 600, 700 | Todos os títulos (H1–H6), sempre UPPERCASE |
| **Instrument Sans** | 400, 500, itálico 400 | Todo corpo de texto, labels, botões |

### Deploy

| Tecnologia | Papel |
|------------|-------|
| **GitHub Pages** | Hospedagem estática |
| **GitHub Actions** | CI/CD automático (`.github/workflows/deploy.yml`) |
| **Repositório:** `guiper5/guiper5.github.io` | Branch `main` = produção |

---

## 4. Arquitetura de Arquivos

```
guiper5.github.io/
│
├── index.html                    # Entry point HTML — SEO, Google Fonts, Schema.org
├── vite.config.ts                # Vite config (base path para GitHub Pages)
├── tailwind.config.ts            # Tailwind com tokens PER5 (complementar ao CSS)
├── package.json                  # Dependências
├── CONTEXTO_SITE_PER5.md        # ← ESTE ARQUIVO
│
└── src/
    ├── main.tsx                  # Entry React — monta <App /> no #root
    ├── App.tsx                   # Providers globais + BrowserRouter + rotas
    ├── index.css                 # ★ Design System principal — tokens CSS, classes utilitárias
    │
    ├── pages/
    │   ├── Index.tsx             # ★ Página principal — import e ordem de todas as seções
    │   └── NotFound.tsx          # Página 404
    │
    ├── contexts/
    │   └── LanguageContext.tsx   # ★ Todas as traduções PT/EN + hook useLanguage()
    │
    ├── hooks/
    │   ├── useTheme.ts           # Dark/light mode — toggle + localStorage
    │   └── useScrollReveal.ts    # IntersectionObserver para animações de scroll
    │
    ├── components/
    │   │
    │   ├── Header.tsx            # Navbar fixa — logo, nav, dark toggle, lang toggle
    │   ├── Hero.tsx              # Seção principal — H1, sub, CTAs, badges, watermark
    │   ├── StatsBar.tsx          # Barra âmbar — 4 stats com counter animado
    │   ├── Services.tsx          # Serviços — card principal + grid 2×2
    │   ├── Clientes.tsx          # Marquee de clientes
    │   ├── PorQue.tsx            # Por que a PER5? — copy + checklist de diferenciais
    │   ├── ParaQuem.tsx          # Tabs por segmento (Construtoras|Indústrias|Loteadoras|Escritórios)
    │   ├── Portfolio.tsx         # Portfólio com filtros por categoria
    │   ├── Processo.tsx          # 4 etapas do processo + linha animada
    │   ├── CTA.tsx               # Formulário de orçamento (Formspree)
    │   ├── FAQ.tsx               # Perguntas frequentes (accordion)
    │   ├── Contact.tsx           # Canais de contato + área de atuação + horário
    │   ├── Footer.tsx            # Rodapé — links, sociais, copyright
    │   │
    │   ├── About.tsx             # ⚠️ LEGADO — não usado, pode ser deletado
    │   ├── ParaEscritorios.tsx   # ⚠️ LEGADO — não usado, pode ser deletado
    │   │
    │   └── ui/                   # Componentes shadcn/ui — não alterar manualmente
    │
    ├── assets/
    │   ├── logo.png              # Logo PER5
    │   └── hero-blueprints.png   # Foto de fundo do Hero
    │
    └── lib/
        └── utils.ts              # cn() — helper de merge de classes Tailwind
```

### Ordem das seções em `Index.tsx`

Esta ordem é **deliberada e não deve ser alterada** sem validação de negócio:

```
Header (fixo)
└── Hero           → impacto inicial, H1, CTAs
└── StatsBar       → âmbar, prova social imediata
└── Services       → o que entregamos
└── Clientes       → social proof (marquee)
└── PorQue         → diferenciação
└── ParaQuem       → segmentação por audiência (tabs)
└── Portfolio      → casos realizados
└── Processo       → como trabalhamos (4 etapas)
└── CTA            → formulário de orçamento ← principal conversão
└── FAQ            → objeções
└── Contact        → canais diretos
Footer
```

---

## 5. Design System — Paleta, Tipografia e Tokens

### Paleta de cores — tokens fixos

Declarados em `src/index.css` como variáveis CSS nativas. **Nunca devem ser alterados** — fazem parte da identidade da marca.

| Token | Hex | Nome | Uso típico |
|-------|-----|------|-----------|
| `--amber` | `#C08459` | Âmbar | Cor de acento principal, botões, destaques |
| `--amber-l` | `#D4A07A` | Âmbar claro | Texto sobre fundo escuro, hover states |
| `--amber-d` | `#96653E` | Âmbar escuro | Hover de botões, tags de badge |
| `--amber-pale` | `#F5E8D8` | Âmbar pálido | Background de tags/badges leves |
| `--terra` | `#1A1310` | Terra | Background escuro mais profundo |
| `--mid` | `#231A16` | Mid | Background intermediário escuro |
| `--madeira` | `#3E3632` | Madeira | Background escuro médio, cards dark |
| `--pedra` | `#6B5C52` | Pedra | Texto terciário, ícones |
| `--fumo` | `#8A7A6E` | Fumo | Texto secundário, nav links |
| `--areia` | `#F4EDE6` | Areia | Texto claro sobre fundo escuro |
| `--areia-d` | `#EAE0D8` | Areia escura | Backgrounds claros secundários |
| `--white` | `#FFFFFF` | Branco | Backgrounds claros primários |

### Tokens semânticos — dark/light mode

Estes tokens **mudam de valor conforme o tema ativo**. Sempre use estes em componentes de seções responsivas (que mudam entre light/dark).

| Token | Valor Light | Valor Dark | Uso |
|-------|-------------|------------|-----|
| `--s-page` | `#FFF` | `var(--terra)` | Background da página |
| `--s-1` | `var(--areia)` | `var(--mid)` | Seções neutras primárias |
| `--s-2` | `var(--areia-d)` | `#2A1F1B` | Seções neutras secundárias |
| `--s-card` | `#FFF` | `var(--madeira)` | Cards e formulários |
| `--s-dark` | `var(--madeira)` | `var(--terra)` | Seções sempre escuras |
| `--s-dark-card` | `#4E423C` | `var(--madeira)` | Cards dentro de seções escuras |
| `--s-footer` | `#2E2420` | `#120D0B` | Rodapé (sempre muito escuro) |
| `--t-h` | `var(--madeira)` | `var(--areia)` | Headings em seções responsivas |
| `--t-b` | `var(--pedra)` | `var(--fumo)` | Texto body em seções responsivas |
| `--t-m` | `var(--fumo)` | `var(--pedra)` | Texto muted em seções responsivas |
| `--bd` | `var(--areia-d)` | `rgba(244,237,230,0.08)` | Bordas padrão |
| `--bd-subtle` | `rgba(62,54,50,0.10)` | `rgba(244,237,230,0.05)` | Bordas muito sutis |

### Quando usar tokens fixos vs. semânticos

```
✅ Seção sempre escura (Hero, PorQue, Portfolio, CTA, Footer):
   → Use tokens FIXOS: var(--terra), var(--areia), var(--fumo)
   → O fundo vira var(--s-dark), mas o texto interno fica com areia/fumo fixos

✅ Seção responsiva (Services, Clientes, ParaQuem, Processo, FAQ, Contact):
   → Use tokens SEMÂNTICOS: var(--s-page), var(--t-h), var(--t-b), var(--bd)
   → O componente vai ter boa aparência em AMBOS os modos
```

### Tipografia

```css
/* Títulos — SEMPRE Barlow Condensed, SEMPRE UPPERCASE */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1.1;
}

/* Corpo — SEMPRE Instrument Sans */
body {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 15px;
  line-height: 1.65;
}
```

**Regra absoluta:** Nunca use outras fontes. Nunca coloque título em lowercase. Barlow Condensed = display/títulos. Instrument Sans = tudo o mais.

### Escala tipográfica prática

| Classe/uso | Font-size | Fonte |
|------------|-----------|-------|
| H1 (Hero) | `clamp(44px, 5.5vw, 72px)` | Barlow Condensed 700 |
| H2 seções `.text-section` | `clamp(28px, 3.5vw, 42px)` (via Tailwind) | Barlow Condensed 700 |
| H3 cards | `text-xl` a `text-2xl` | Barlow Condensed |
| Body principal | `text-base` (15–16px) | Instrument Sans |
| Labels/tags | `text-xs + tracking-widest + uppercase` | Instrument Sans 500 |
| `.eyebrow` | 11px, tracking 0.16em, uppercase | Instrument Sans 500 |

### Classes utilitárias principais (definidas em index.css)

| Classe | Descrição |
|--------|-----------|
| `.eyebrow` | Label acima de títulos — âmbar, uppercase, tracking |
| `.eyebrow-light` | Igual ao eyebrow mas cor âmbar-l (para seções escuras) |
| `.label` | Label genérico — 11px, uppercase, tracking |
| `.btn-amber` | Botão principal — fundo âmbar, texto areia |
| `.btn-ghost` | Botão secundário — transparente, borda areia (para seções escuras) |
| `.btn-outline-amber` | Botão outline — borda âmbar, texto âmbar |
| `.card-per5` | Card padrão — usa `--s-card` e `--bd` |
| `.card-featured-amber` | Card com borda-topo âmbar |
| `.input-per5` | Input de formulário — branco, borda areia-d, focus âmbar |

---

## 6. Sistema Dark / Light Mode

### Como funciona

1. O hook `useTheme` (`src/hooks/useTheme.ts`) gerencia o estado do tema
2. Ao mudar o tema, ele adiciona/remove a classe `.dark` no `<html>` via `document.documentElement.classList`
3. Os tokens semânticos em `src/index.css` têm dois conjuntos de valores: `:root` (light) e `.dark { ... }` (dark)
4. A preferência é salva em `localStorage` com a chave `per5-theme`
5. Se não houver preferência salva, respeita `prefers-color-scheme` do sistema

### Implementação nos componentes

```tsx
// Para acessar e alternar o tema:
import { useTheme } from '@/hooks/useTheme';
const { theme, toggle } = useTheme();
// theme: 'light' | 'dark'
// toggle: () => void
```

### Seções sempre escuras (não mudam entre modos)

Hero, PorQue, Portfolio, CTA, Footer e StatsBar são **always dark**. O fundo usa `--s-dark` (madeira em light, terra em dark), o que cria uma diferença visual sutil mas mantém o caráter da marca nos dois modos.

### Seções responsivas

Services, Clientes, ParaQuem, Processo, FAQ e Contact mudam completamente. Em light mode ficam com fundo branco/areia e texto escuro. Em dark mode ficam com fundo terra/madeira e texto areia.

---

## 7. Sistema Bilíngue PT-BR / EN

### Arquitetura

O arquivo `src/contexts/LanguageContext.tsx` contém:

1. **O objeto `translations`** — todas as strings do site em PT e EN, organizadas por seção
2. **`LanguageProvider`** — Provider que envolve o app em `Index.tsx`
3. **`useLanguage()`** — Hook que retorna `{ lang, t, toggle }`

```tsx
// Como usar em qualquer componente:
import { useLanguage } from '@/contexts/LanguageContext';

const MeuComponente = () => {
  const { t, lang, toggle } = useLanguage();
  // t = objeto de traduções para o idioma atual
  // lang = 'pt' | 'en'
  // toggle = alterna entre pt e en
  
  return <h2>{t.services.title}</h2>;
};
```

### Estrutura do objeto de traduções

```
translations
├── pt / en
│   ├── header       → nav labels, CTA, label do botão de idioma
│   ├── hero         → tag, h1 (array de linhas), subtitle, badges, CTAs
│   ├── stats        → array de 4 itens {value, suffix, label}
│   ├── services     → eyebrow, title, subtitle, items, secondary cards
│   ├── clientes     → label da seção
│   ├── porque       → eyebrow, title, body, stats, diferenciais
│   ├── paraquem     → eyebrow, title, 4 segmentos (tab, title, pitch, body, cta)
│   ├── portfolio    → eyebrow, title, filters, projects, labels
│   ├── processo     → eyebrow, title, 4 steps, banner
│   ├── cta          → todos os labels/placeholders/opções do formulário
│   ├── faq          → eyebrow, title, array de {q, a}
│   ├── contact      → eyebrow, title, channels, horário, área de atuação
│   └── footer       → tagline, about, links, copyright
```

### Default e persistência

- **PT-BR é sempre o idioma padrão** (`useState<Lang>('pt')`)
- A preferência de idioma **não é persistida** em localStorage — intencional. O idioma volta ao PT a cada visita nova.
- O botão no Header mostra o idioma alternativo (se PT ativo, mostra "EN"; se EN ativo, mostra "PT")

### Regra importante

Quando atualizar qualquer texto do site, **atualizar as duas línguas** (`pt` e `en`) no `LanguageContext.tsx`. O EN não é gerado automaticamente — é uma tradução curada.

---

## 8. Mapa de Componentes

### Header (`src/components/Header.tsx`)

- **Comportamento:** Fixo no topo (`position: fixed`), transição ao scroll (72px → 60px, backdrop-blur ativado após 60px de scroll)
- **Fundo:** Sempre `var(--s-dark)` = escuro em ambos os modos
- **Conteúdo:** Logo (PNG), links de navegação, toggle de tema (ícone Sun/Moon), toggle de idioma (botão "EN"/"PT"), CTA "Solicitar Orçamento →"
- **Comportamento mobile:** Hamburguer menu com drawer vertical
- **Navegação:** Scroll suave via `scrollIntoView({ behavior: 'smooth' })`

### Hero (`src/components/Hero.tsx`)

- **Fundo:** `var(--s-dark)` — sempre escuro
- **Elementos:** Foto com overlay 20% opacidade, grid técnico (linhas âmbar 4% opacidade), glow radial à direita, watermark "PER5" 4% opacidade, linha vertical âmbar (#3px) na esquerda
- **H1:** 4 linhas animadas (slideUp com delays escalonados), segunda linha em âmbar
- **Badges:** Coluna direita, só visível em desktop (lg+)
- **Animação:** Keyframe `slideUp` definido inline (`@keyframes slideUp`)

### StatsBar (`src/components/StatsBar.tsx`)

- **Fundo:** `var(--amber)` — fixo, nunca muda
- **Counters:** Animados com `requestAnimationFrame` via `useCounters()`. Usa atributos `data-counter` e `data-suffix` no `<span>`
- **Grid:** 2 colunas mobile, 4 desktop

### Services (`src/components/Services.tsx`)

- **Fundo:** `var(--s-page)` — responsivo
- **Scroll reveal:** Usa `useScrollReveal()` na section pai; `.anim-fade-up` e `.anim-scale` nos elementos filhos
- **Card principal:** `.card-per5.card-featured-amber` — borda topo âmbar
- **Grid secundário:** 2×2, cada card tem ícone de Lucide

### Clientes (`src/components/Clientes.tsx`)

- **Fundo:** `var(--s-2)` — responsivo
- **Marquee:** CSS animation `marquee` definida em index.css. Array duplicado para loop infinito. Fade nas bordas com gradiente.
- **Clientes atuais:** Placeholder ("Construtora Exemplo", etc.) — substituir por clientes reais quando disponível

### PorQue (`src/components/PorQue.tsx`)

- **Fundo:** `var(--s-dark)` — sempre escuro
- **Layout:** 2 colunas — copy + checklist de diferenciais
- **Mini stats:** 3 blocos (100+ projetos, 24h amber-highlight, 7+ anos)
- **Checklist:** `anim-fade-right` com delays escalonados

### ParaQuem (`src/components/ParaQuem.tsx`)

- **Fundo:** `var(--s-1)` — responsivo
- **Tabs:** 4 botões (Construtoras | Indústrias | Loteadoras | Escritórios). Tab ativa = fundo âmbar
- **Panel:** Grid 2 colunas (copy + número gigante). Número gigante em `var(--s-dark)`
- **Animação:** `fadeIn` (opacity + translateY) definido inline ao mudar de tab
- **Importante:** O índice do segmento é gerado pelo `active` state (0–3), não hard-coded

### Portfolio (`src/components/Portfolio.tsx`)

- **Fundo:** `var(--s-dark)` — sempre escuro
- **Filtros:** Botões de categoria. "Todos" filtra tudo, outros filtram por `p.category.includes(active)`
- **Cards de projeto:** Placeholder visual (ícone ◉) — substituir por `<img>` quando houver fotos reais
- **Badge "em breve":** Remover quando houver fotos reais

### Processo (`src/components/Processo.tsx`)

- **Fundo:** `var(--s-page)` — responsivo
- **Linha animada:** `<div id="processLine">` com `width: 0%` que vai para `100%` via classe `.active`, acionada por IntersectionObserver
- **Número highlight:** Etapa 03 (índice 2) usa `var(--amber)`, as demais usam `var(--bd)` (praticamente invisível)
- **Banner:** Usa `dangerouslySetInnerHTML` para renderizar o `<strong>` do texto traduzido

### CTA (`src/components/CTA.tsx`)

- **Fundo:** `var(--s-dark)` — sempre escuro
- **Formulário:** Formspree `https://formspree.io/f/xlgonzzz` → envia para `guilherme@per5.com.br`
- **Telefone:** Campo controlado (`useState`), aceita apenas dígitos (0-9), máximo 11 dígitos (DDD + número)
- **Feedback visual:** Contador de dígitos restantes quando < 10; ✓ verde quando ≥ 10
- **Estados do form:** `idle` | `sending` | `success` | `error`
- **Estado success:** Substitui o form por card com CheckCircle e mensagem de confirmação

### FAQ (`src/components/FAQ.tsx`)

- **Fundo:** `var(--s-2)` — responsivo
- **Accordion:** Controlado por `useState` local em cada `FAQItem`. Ícones Plus/Minus do Lucide.
- **5 perguntas** cobrindo: ART, atendimento fora de Campinas, o que inclui, prazos, backoffice para escritórios

### Contact (`src/components/Contact.tsx`)

- **Fundo:** `var(--s-2)` — responsivo
- **Layout:** 2 colunas — canais de contato + cards de info (área de atuação + horário + CREA)
- **WhatsApp:** Card destacado com borda âmbar, link direto `https://wa.me/5519991508664`
- **CREA note:** Usa `dangerouslySetInnerHTML` para o `<strong>` no texto

### Footer (`src/components/Footer.tsx`)

- **Fundo:** `var(--s-footer)` — sempre muito escuro
- **Layout:** 4 colunas — marca (logo+tagline+sociais), serviços, para quem, contato
- **Social icons:** Hover state via onMouseEnter/Leave (background vira âmbar)
- **Copyright:** Ano fixo 2026

---

## 9. Animações e Interações

### Scroll Reveal (IntersectionObserver)

Hook `useScrollReveal` observa elementos com classes de animação dentro do `ref` da seção:

```tsx
// Uso nos componentes:
const ref = useScrollReveal() as React.RefObject<HTMLElement>;
return <section ref={ref as React.RefObject<HTMLDivElement>}>
  <div className="anim-fade-up">...</div>
  <div className="anim-fade-left delay-1">...</div>
</section>;
```

**Classes disponíveis:**

| Classe | Animação inicial | Animação ativada |
|--------|-----------------|-----------------|
| `.anim-fade-up` | `opacity:0, translateY(40px)` | `opacity:1, translateY(0)` |
| `.anim-fade-left` | `opacity:0, translateX(-48px)` | `opacity:1, translateX(0)` |
| `.anim-fade-right` | `opacity:0, translateX(48px)` | `opacity:1, translateX(0)` |
| `.anim-scale` | `opacity:0, scale(0.92)` | `opacity:1, scale(1)` |
| `.anim-visible` | — | Estado final (adicionado pelo observer) |

**Delays escalonados:** `.delay-1` a `.delay-8` adicionam `transition-delay` de 0.1s a 0.8s.

**Threshold:** 0.1 (elemento 10% visível) + `rootMargin: '0px 0px -60px 0px'` (não dispara até 60px acima do viewport bottom).

### Counter Animation (StatsBar)

```
Hook: useCounters()
Trigger: IntersectionObserver com threshold 0.5
Algoritmo: requestAnimationFrame + easing cúbico (1 - (1-t)³)
Duração: 1600ms
Atributos: data-counter="100" data-suffix="+"
```

### Marquee (Clientes)

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
/* Array duplicado = loop infinito perfeito */
/* animation-play-state: paused no :hover */
```

### Process Line (Processo)

```
Elemento: #processLine (width: 0% → 100%)
Transition: 1.5s cubic-bezier(0.22, 1, 0.36, 1)
Trigger: IntersectionObserver na linha (threshold 0.3) adiciona classe .active
```

### Hero Line-by-line Animation

```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Aplicado com animationDelay escalonado por linha */
```

### ParaQuem Tab Transition

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Aplicado ao panel (key={active}) para re-triggar a cada mudança de tab */
```

---

## 10. Formulário de Contato (Formspree)

### Configuração

| Parâmetro | Valor |
|-----------|-------|
| **URL** | `https://formspree.io/f/xlgonzzz` |
| **Método** | POST |
| **Headers** | `Accept: application/json` |
| **Destino** | `guilherme@per5.com.br` |
| **Assunto padrão** | `[PER5] Novo orçamento via site` (campo hidden `_subject`) |

### Campos enviados

| Campo HTML | Label PT | Tipo | Validação |
|-----------|----------|------|-----------|
| `nome` | Nome completo | text | required |
| `email` | Email | email | required |
| `telefone` | WhatsApp / Telefone | tel | required, 10-11 dígitos numéricos |
| `empresa` | Empresa / Razão Social | text | opcional |
| `tipo_solicitante` | Você é | radio | required |
| `tipo_projeto` | Tipo de projeto | select | required |
| `localizacao` | Localização | text | required |
| `area` | Área aproximada | select | required |
| `prazo` | Prazo desejado | select | required |
| `descricao` | Descrição do projeto | textarea | opcional |
| `_replyto` | (hidden) | hidden | `guilherme@per5.com.br` |
| `_subject` | (hidden) | hidden | `[PER5] Novo orçamento via site` |

### Validação do telefone

```tsx
// Apenas dígitos, máximo 11 caracteres
const handlePhone = (e) => {
  setTelefone(e.target.value.replace(/\D/g, '').slice(0, 11));
};

// Validação de envio: mínimo 10 dígitos (DDD + número)
if (telefone.length < 10) { /* reportValidity */ }
```

### Estados do formulário

```
'idle'    → Formulário normal, botão "Enviar..."
'sending' → Botão desabilitado, texto "Enviando..."
'success' → Form substituído por card de confirmação (CheckCircle + mensagem)
'error'   → Mensagem de erro abaixo do botão, form permanece
```

---

## 11. Regras de Manutenção e Padrões

### ✅ O que SEMPRE fazer

1. **Atualizar as duas línguas** ao alterar qualquer texto — PT e EN no `LanguageContext.tsx`
2. **Usar tokens semânticos** (`--t-h`, `--t-b`, `--s-card`, etc.) em seções responsivas
3. **Usar tokens fixos** (`--areia`, `--fumo`, `--terra`) em seções sempre escuras
4. **Manter Barlow Condensed em UPPERCASE** para todos os títulos
5. **Manter Instrument Sans** para todo texto de corpo
6. **Validar contra o `per5-contexto-completo.md`** antes de alterar copy
7. **Testar em dark e light mode** após qualquer mudança visual

### ❌ O que NUNCA fazer

1. **Nunca adicionar "Gestão de Obras"** em qualquer lista de serviços
2. **Nunca usar fontes diferentes** de Barlow Condensed (títulos) e Instrument Sans (corpo)
3. **Nunca colocar título em lowercase** — sempre UPPERCASE via CSS ou `text-transform: uppercase`
4. **Nunca comparar a PER5 com "grandes escritórios"** no copy — posicionamento removido na v1.0
5. **Nunca alterar o Formspree endpoint** sem atualizar este documento e notificar o responsável
6. **Nunca usar hardcoded `var(--white)` ou `var(--areia)` como fundo** em seções responsivas — usar `var(--s-page)` ou `var(--s-1)`
7. **Nunca editar arquivos em `src/components/ui/`** manualmente — eles são do shadcn/ui

### Como adicionar um novo serviço

1. Abrir `src/contexts/LanguageContext.tsx`
2. Adicionar o serviço em `pt.services.tipoProjeto` e `en.cta.tipoProjeto` (para o select do formulário)
3. Adicionar em `pt.footer.serviceLinks` e `en.footer.serviceLinks`
4. Se for um card secundário novo, adicionar em `pt.services.secondary` e `en.services.secondary` + adicionar ícone correspondente no array `icons` em `Services.tsx`

### Como adicionar foto de projeto ao Portfolio

1. Colocar a imagem em `src/assets/portfolio/` (criar pasta)
2. Importar no `Portfolio.tsx`
3. Substituir o bloco do placeholder:
```tsx
// Antes:
<div className="text-center">
  <div style={{ color: 'var(--fumo)', fontSize: '28px' }}>◉</div>
  <div className="text-xs">Adicione a foto do projeto</div>
</div>

// Depois:
<img src={nomeImportado} alt="Descrição do projeto" className="w-full h-full object-cover" />
```
4. Remover o badge "◎ Imagens reais em breve" do Portfolio quando todas as fotos estiverem reais

### Como adicionar um novo FAQ

Em `src/contexts/LanguageContext.tsx`, adicionar em `pt.faq.items` e `en.faq.items`:
```ts
{ q: 'Pergunta?', a: 'Resposta.' }
```

### Como alterar o número de telefone/WhatsApp

O número `5519991508664` aparece em múltiplos lugares. Buscar e substituir em:
- `src/components/Contact.tsx` → link `href`
- `src/components/Footer.tsx` → link `href`
- `src/contexts/LanguageContext.tsx` → valores de `channels.wa.value`
- `index.html` → Schema.org `telephone`

### Como atualizar os stats (100+, 7+, 24h, 100%)

Em `src/contexts/LanguageContext.tsx`, atualizar `pt.stats.items` e `en.stats.items`.  
O valor `value` é o número final da animação de counter.

---

## 12. Deploy e CI/CD

### Fluxo de deploy

```
git push origin main
  └── GitHub Actions dispara (.github/workflows/deploy.yml)
      └── npm ci
      └── npm run build
          └── Vite gera /dist com base path /
      └── Publicação em GitHub Pages
          └── https://per5.com.br (domínio customizado)
```

### Comandos locais

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (hot reload)
npm run dev
# ou para acesso pela rede local:
npm run dev -- --host --port 8080

# Build de produção
npm run build

# Preview do build
npm run preview
```

### Configuração do Vite (`vite.config.ts`)

O `base` path está configurado para `/` (domínio customizado per5.com.br). Se mudar para subdiretório, atualizar o `base`.

### Variáveis de ambiente

Nenhuma variável de ambiente sensível no frontend. O endpoint do Formspree é hard-coded no `CTA.tsx` (não é um segredo — é uma URL pública).

---

## 13. Contatos e Acessos

| Recurso | Acesso |
|---------|--------|
| **Repositório GitHub** | github.com/guiper5/guiper5.github.io |
| **GitHub Pages** | https://guiper5.github.io → redireciona para per5.com.br |
| **Formspree account** | Acessar via guilherme@per5.com.br |
| **Google Fonts** | Público, sem autenticação |
| **WhatsApp business** | +55 (19) 99150-8664 |
| **E-mail principal** | guilherme@per5.com.br |
| **Instagram** | @per5eng |
| **LinkedIn** | linkedin.com/company/per5 |

---

## Apêndice — Checklist para qualquer alteração no site

Antes de fazer qualquer push para produção:

- [ ] Testado em **dark mode** e **light mode**
- [ ] Testado em **português (PT-BR)** e **inglês (EN)**
- [ ] Testado em **mobile** (< 768px) e **desktop** (>= 1024px)
- [ ] Nenhum serviço "Gestão de Obras" presente
- [ ] Todos os títulos em **Barlow Condensed + UPPERCASE**
- [ ] Todo corpo em **Instrument Sans**
- [ ] Seções responsivas usando **tokens semânticos** (`--t-h`, `--s-card`, etc.)
- [ ] Seções always-dark usando **tokens fixos** (`--areia`, `--fumo`)
- [ ] Texto atualizado em **ambos os idiomas** no LanguageContext
- [ ] `npm run build` executa sem erros

---

*Este documento deve ser atualizado sempre que houver mudança arquitetural significativa no site.*  
*Última atualização: 2026-04 — Guilherme Bim / PER5 Projetos e Consultoria*
