# PER5 — Contexto Completo para Desenvolvimento do Site
> Documento de referência para desenvolvimento por IA externa. Contém arquitetura, conteúdo, marca e diretrizes de animação.
> Última atualização: Maio 2026

---

## 1. IDENTIDADE DA EMPRESA

**Razão Social:** PER5 Projetos e Consultoria  
**Segmento:** Engenharia Civil de Infraestrutura  
**Sede:** Campinas, SP — Brasil  
**Atuação:** Projetos remotos para todo o Brasil + atendimento presencial na região de Campinas  
**Registro:** CREA-SP  
**Contato:** guilherme@per5.com.br | WhatsApp (19) 99150-8664 | per5.com.br  

**Posicionamento central:**  
PER5 é uma **facilitadora de engenharia civil** — não é construtora, não é empreiteira, não executa obras. Entrega projetos técnicos de alto desempenho com agilidade, acesso direto ao engenheiro responsável e metodologia moderna.

**Tagline:** *Engenharia que facilita.*  
**H1 do site:** *Projetos de Infraestrutura Civil com Alto Desempenho Técnico.*

---

## 2. PALETA DE CORES

| Nome       | Hex       | Uso principal                          |
|------------|-----------|----------------------------------------|
| Âmbar      | `#C08459` | Cor primária, CTAs, destaques          |
| Âmbar Light| `#D4A07A` | Hover states, gradientes suaves        |
| Âmbar Dark | `#96653E` | Pressed states, bordas de ênfase       |
| Terra      | `#1A1310` | Background principal (dark)            |
| Madeira    | `#3E3632` | Cards, superfícies secundárias         |
| Areia      | `#F4EDE6` | Textos sobre fundos escuros, elementos claros |

**Direção visual:** Dark theme dominante. Âmbar como acento quente e premium. Evitar branco puro — usar Areia (#F4EDE6) como substituto.

---

## 3. TIPOGRAFIA

| Fonte               | Peso       | Uso                            |
|---------------------|------------|--------------------------------|
| Barlow Condensed    | 700 / 600  | Títulos, H1, H2, display       |
| Instrument Sans     | 400 / 500  | Corpo de texto, parágrafos, UI |

Ambas via Google Fonts.  
Títulos em caixa alta ou capitalização forte. Nunca Inter, Roboto ou Arial.

---

## 4. VOZ E TOM

- **Técnico, mas acessível** — sem jargões desnecessários
- **Direto** — sem rodeios, sem promessas vagas
- **Confiante** — não comparar com "grandes escritórios", não depreciar concorrentes
- **Facilitador** — o discurso é sempre "a gente resolve isso pra você"
- Evitar: "gestão de obras", "Civil 3D", comparações por tamanho de cliente

---

## 5. PÚBLICO-ALVO (fase de teste / tiro no escuro)

Em ordem de prioridade estimada (a validar com métricas):
1. Construtoras e Incorporadoras
2. Indústrias e Empresas Privadas
3. Loteadoras e Empreendedores
4. Escritórios de Arquitetura e Engenharia

> O site deve ser genérico o suficiente para falar com todos, mas técnico o suficiente para filtrar leads qualificados.

---

## 6. ESTRUTURA DO SITE (arquitetura de seções)

### Seção 1 — Hero
- H1: *Projetos de Infraestrutura Civil com Alto Desempenho Técnico.*
- Subtítulo: texto curto reforçando a ideia de facilitadora (ver copy abaixo)
- CTA primário: **Fale com um engenheiro** → WhatsApp ou formulário
- CTA secundário: **Conheça nossos serviços** → ancora para Seção 2
- Visual: fundo dark, tipografia grande, elemento gráfico ou vídeo técnico de fundo (mapa topográfico, mesh, ou similar)

**Copy sugerido para subtítulo Hero:**
> "A PER5 entrega projetos de terraplenagem, drenagem, pavimentação e urbanismo com rigor técnico e agilidade. Você fala diretamente com o engenheiro responsável — sem intermediários."

---

### Seção 2 — Serviços Prioritários (destaques técnicos)
Cards individuais para cada serviço verde (alta escalabilidade, foco de captação):

#### 2.1 Projeto de Terraplenagem
- Volumetria, seção de corte, mancha de corte/aterro, seções transversais, perfis longitudinais
- Aplicação: loteamentos, indústrias, obras viárias, grandes terrenos

#### 2.2 Projeto de Drenagem Horizontal
- Drenagem pluvial externa (não hidrossanitário vertical)
- Obras de arte, sistema de esgoto em áreas externas, emissários, lançamento de esgoto
- Aplicação: condomínios, loteamentos, parques industriais

#### 2.3 Projeto Urbanístico
- Loteamentos, condomínios, projetos geométricos rodoviários
- Implantação de infraestrutura urbana completa

#### 2.4 Projeto de Pavimentação
- **Rígida:** piso de concreto (externo e interno)
- **Flexível:** asfalto
- **Semirrígida (Intertravado):** Paver
- **Permeável:** pavimento permeável sustentável
- Aplicação: vias internas, estacionamentos, pátios industriais, acessos

**SERVIÇOS ADICIONAIS DE INFRAESTRUTURA:**
- Projeto de Gabião e Contenção / Muro de Arrimo
- Projeto de Offtracking (raio de manobra de veículos pesados)

---

### Seção 3 — Serviços Complementares
Apresentação mais compacta (lista ou grid simples), sem cards grandes:

- **Topografia** *(atuação regional — Campinas e região)*
  - Locação de obra, levantamento planialtimétrico, retificação de área, desmembramento
  - Drone como diferencial técnico
  - *Sem exibição de valores*

- **Estudos e Planos**
  - Estudos de viabilidade
  - EIV — Estudo de Impacto de Vizinhança
  - RIT — Relatório de Impacto no Trânsito

- **Regularização de Construções**
  - Habite-se, Alvará de Obra, Alvará de Demolição
  - Regularização na Receita Federal e em Cartório

- **Patologias**
  - Diagnóstico e relatório técnico de patologias construtivas

---

### Seção 4 — Diferenciais / Metodologia
Reforço de posicionamento. Sugestão de 3–4 pilares:

1. **Acesso direto ao engenheiro** — sem camadas, sem terceirizações
2. **Projetos para todo o Brasil** — atendimento remoto estruturado
3. **Agilidade sem perder o rigor** — entregas estruturadas e documentadas
4. **Capacidade OpenBIM / IFC** — metodologia moderna, prontos quando o mercado exigir

> OpenBIM aparece aqui como **credencial técnica** com selo/logo da associação — não como serviço principal. Posicionamento: *"Quando o projeto exige IFC, a gente entrega."*

---

### Seção 5 — Portfólio
- Exibir imagens reais em carrossel contínuo e infinito, sem filtros visíveis por categoria.
- Cards com moldura quadrada padronizada, imagem sem corte e banner descritivo sobreposto.
- Aguardando novas pranchas técnicas para ampliar o acervo quando necessário.

---

### Seção 6 — Sobre a PER5
- O que é a PER5 (facilitadora, não construtora)
- Quem está por trás (engenheiro responsável, CREA-SP)
- Forma de trabalho: briefing → proposta → projeto → entrega

**Copy sugerido:**
> "A PER5 não é uma construtora. Somos uma facilitadora de engenharia civil — nosso trabalho é transformar complexidade técnica em projetos claros, viáveis e prontos para execução. Atuamos remotamente em todo o Brasil com a mesma qualidade de uma equipe local."

---

### Seção 7 — CTA Final + Contato
- Título: *Pronto para começar seu projeto?*
- Subtítulo: *Fale com a gente e receba uma proposta personalizada.*
- CTA: **Entrar em contato via WhatsApp** + formulário simples (Nome, Empresa, Tipo de projeto, Mensagem)
- Rodapé: logo PER5, links de navegação, credencial visual buildingSMART, e-mail, endereço (Campinas, SP)

---

## 7. DIRETRIZES DE ANIMAÇÃO

### Princípios gerais
- Site deve ter aparência **viva e técnica** — não estática, não lúdica
- Animações reforçam credibilidade e sofisticação, nunca distração
- Scroll é o gatilho principal (IntersectionObserver)
- **Zero dependências externas** — sem GSAP, AOS, Framer Motion. CSS puro + Vanilla JS
- Animar apenas `opacity`, `transform` e `filter` — nunca propriedades que causam reflow (`width`, `height`, `top`, `left`)

---

### 7.1 Sistema de Reveal ao Scroll (base de tudo)

Todos os elementos animáveis recebem `.reveal`. O JS adiciona `.visible` via IntersectionObserver.

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: var(--reveal-delay, 0ms);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger de elementos irmãos** — incrementos de 80ms via inline style:
```html
<div class="reveal" style="--reveal-delay: 0ms">...</div>
<div class="reveal" style="--reveal-delay: 80ms">...</div>
<div class="reveal" style="--reveal-delay: 160ms">...</div>
<div class="reveal" style="--reveal-delay: 240ms">...</div>
```

**JS do IntersectionObserver:**
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // anima só uma vez
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

---

### 7.2 Header com Backdrop Blur

Header fixo que transiciona de transparente → semitransparente com blur ao scrollar.

```css
header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  backdrop-filter: blur(24px);
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

header.scrolled {
  background-color: rgba(26, 19, 16, 0.88); /* Terra com alpha */
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
```

```js
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 40);
});
```

---

### 7.3 Hero — Gold Glow de Fundo

Elemento decorativo posicionado no canto (direita/inferior ou direita/superior do hero). Cria "calor" visual sem interferir na leitura.

```css
.gold-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  pointer-events: none;
  opacity: 0.75;
  background: radial-gradient(circle, rgba(192, 132, 89, 0.28) 0%, transparent 68%);
  right: -100px;
  bottom: -100px;
}
```

---

### 7.4 Scroll Indicator (Hero)

Seta flutuante no rodapé do hero, animação infinita para baixo.

```css
.scroll-indicator {
  animation: floatDown 2.8s ease-in-out infinite;
}

@keyframes floatDown {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50%       { transform: translateY(8px); opacity: 1; }
}
```

---

### 7.5 Cards de Serviço — Hover Lift

```css
.service-card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(192, 132, 89, 0.14), transparent 50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(192, 132, 89, 0.4);
  box-shadow: 0 8px 28px rgba(0,0,0,0.35);
}

.service-card:hover::before {
  opacity: 1;
}
```

---

### 7.6 Botões Primários — Sombra Âmbar

```css
.btn-primary {
  box-shadow: 0 14px 32px rgba(192, 132, 89, 0.22);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 38px rgba(192, 132, 89, 0.34);
}
```

Botão secundário (ghost): sem background, com `→` que aparece no hover via `transition: opacity`.

---

### 7.7 Texto Ghost / Decorativo de Fundo

Palavra gigante em baixíssima opacidade como profundidade visual em seções específicas (ex: CTA final, seção de metodologia).

```css
.ghost-word {
  font-size: clamp(80px, 14vw, 180px);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  color: var(--color-amber);
  opacity: 0.07;
  position: absolute;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  bottom: 0;
  left: 0;
  line-height: 0.85;
  text-transform: uppercase;
}
```

Exemplos de palavras: `"INFRAESTRUTURA"`, `"PROJETOS"`, `"PER5"`.

---

### 7.8 Eyebrow Labels (Labels de Seção)

Padrão recorrente antes de títulos de seção:

```html
<div class="eyebrow">
  <span class="eyebrow-line"></span>
  <span class="eyebrow-text">NOSSOS SERVIÇOS</span>
</div>
```

```css
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
}

.eyebrow-line {
  display: block;
  height: 1px;
  width: 32px;
  background-color: var(--color-amber);
}

.eyebrow-text {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.26em;
  color: var(--color-amber);
}
```

---

### 7.9 Counters Animados (Números Estatísticos)

Disparo via IntersectionObserver. Contador sobe de 0 ao valor final.

```js
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};
```

```html
<span class="counter" data-target="150" data-suffix="+">0+</span>
```

---

### 7.10 Dropdown de Navegação (menu Serviços)

Usa `visibility` (não `display:none`) para permitir transição de opacidade.

```css
.dropdown {
  visibility: hidden;
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
  position: absolute;
  top: 100%;
  left: 50%;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
}

.nav-item:hover .dropdown,
.nav-item:focus-within .dropdown {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
```

---

### 7.11 Links de Navegação

```css
.nav-link {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: rgba(244, 237, 230, 0.7); /* Areia com alpha */
  transition: color 0.3s;
}

.nav-link:hover {
  color: #F4EDE6; /* Areia full */
}
```

---

### 7.12 Tabela de Timing & Easing

| Contexto | Duração | Easing |
|----------|---------|--------|
| Reveal ao scroll | 0.7s | ease |
| Hover de card | 0.3s | cubic-bezier(0.4, 0, 0.2, 1) |
| Botões CTA | 0.3s | cubic-bezier(0.4, 0, 0.2, 1) |
| Dropdown nav | 0.3s | ease |
| Scroll indicator | 2.8s | ease-in-out (infinite) |
| Counters | 1.8s | ease-out cubic (JS) |

---

## 8. SEO — REQUISITOS E IMPLEMENTAÇÃO

### 8.1 Meta tags obrigatórias (por página/seção)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PER5 — Projetos de Infraestrutura Civil | Campinas, SP</title>
<meta name="description" content="Empresa de engenharia civil especializada em projetos de terraplenagem, drenagem, pavimentação e urbanismo. Atendimento remoto em todo o Brasil. CREA-SP.">
<meta name="keywords" content="projeto de terraplenagem, projeto de drenagem, projeto de pavimentação, projeto urbanístico, engenharia civil Campinas, topografia Campinas, regularização de obras">
<link rel="canonical" href="https://per5.com.br/">
```

### 8.2 Open Graph (compartilhamento social)

```html
<meta property="og:title" content="PER5 — Engenharia que facilita.">
<meta property="og:description" content="Projetos de infraestrutura civil com alto desempenho técnico. Terraplenagem, drenagem, pavimentação, urbanismo.">
<meta property="og:image" content="https://per5.com.br/og-image.jpg"> <!-- 1200x630px -->
<meta property="og:url" content="https://per5.com.br/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

### 8.3 Schema.org (JSON-LD) — Obrigatório

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PER5 Projetos e Consultoria",
  "description": "Facilitadora de engenharia civil especializada em projetos de infraestrutura: terraplenagem, drenagem, pavimentação e urbanismo.",
  "url": "https://per5.com.br",
  "telephone": "+55-19-99150-8664",
  "email": "guilherme@per5.com.br",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Campinas",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "areaServed": "BR",
  "hasCredential": "CREA-SP",
  "serviceType": [
    "Projeto de Terraplenagem",
    "Projeto de Drenagem",
    "Projeto de Pavimentação",
    "Projeto Urbanístico",
    "Topografia",
    "Regularização de Construções",
    "Patologias",
    "Estudo de Viabilidade"
  ]
}
</script>
```

### 8.4 Hierarquia de headings (H1–H3)

- **1 único H1 por página:** `Projetos de Infraestrutura Civil com Alto Desempenho Técnico`
- **H2 por seção principal:** `Nossos Serviços`, `Serviços Complementares`, `Nossa Metodologia`, `Sobre a PER5`, `Contato`
- **H3 por card/item:** `Projeto de Terraplenagem`, `Projeto de Drenagem`, etc.
- Nunca pular nível de heading

### 8.5 Palavras-chave por serviço (para copy e alt texts)

| Serviço | Keywords principais |
|---------|-------------------|
| Terraplenagem | projeto de terraplenagem, volumetria, corte e aterro, terraplenagem SP |
| Drenagem | projeto de drenagem pluvial, drenagem horizontal, sistema de esgoto externo |
| Pavimentação | projeto de pavimentação, piso de concreto, asfalto, paver, intertravado |
| Urbanístico | projeto urbanístico, loteamento, condomínio, geometria viária |
| Topografia | topografia Campinas, levantamento planialtimétrico, locação de obra, drone topografia |
| Regularização | habite-se, alvará de obra, regularização de imóvel, CREA-SP |
| Patologias | patologia construtiva, diagnóstico estrutural, relatório técnico |

### 8.6 Imagens — boas práticas SEO

- Atributo `alt` descritivo em todas as imagens: `alt="Projeto de terraplenagem desenvolvido pela PER5 em Campinas"`
- Formato: WebP prioritário, fallback JPEG
- Lazy loading nativo: `loading="lazy"` em todas exceto hero
- Hero image: `loading="eager"` + `fetchpriority="high"`

---

## 9. PERFORMANCE — REQUISITOS

### 9.1 Metas de Core Web Vitals

| Métrica | Meta |
|---------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |

### 9.2 Carregamento de fontes

```html
<!-- Preconnect obrigatório -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Carregar apenas os pesos usados -->
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Instrument+Sans:wght@400;500&display=swap" rel="stylesheet">
```

### 9.3 Regras gerais de performance

- CSS crítico (above-the-fold) inline no `<head>`
- JS não-crítico com `defer` ou `async`
- Imagens com dimensões explícitas (`width` e `height`) para evitar CLS
- Sem bibliotecas de animação externas (zero GSAP, AOS, jQuery)
- Minificar CSS e JS antes do deploy
- Usar `will-change: transform` com parcimônia — apenas nos elementos que realmente animam
- `preload` no hero image: `<link rel="preload" as="image" href="hero.webp">`

---

## 10. STACK TÉCNICA

- HTML5 semântico + CSS3 + Vanilla JS
- Google Fonts (Barlow Condensed 600/700 + Instrument Sans 400/500)
- CSS Custom Properties para todos os tokens de cor e tipografia
- IntersectionObserver API para scroll triggers
- Sem frameworks, sem dependências externas
- Mobile-first, totalmente responsivo
- Estrutura de arquivos sugerida:
  ```
  /
  ├── index.html
  ├── css/
  │   ├── tokens.css      (variáveis: cores, fontes, espaçamentos)
  │   ├── base.css        (reset, tipografia global)
  │   ├── animations.css  (reveal, keyframes)
  │   └── components.css  (cards, botões, header, footer)
  ├── js/
  │   ├── scroll.js       (IntersectionObserver + header)
  │   └── counters.js     (animação de números)
  └── assets/
      ├── images/
      └── icons/
  ```

---

## 11. REGRAS DE CONTEÚDO E RESTRIÇÕES

| ✅ Fazer | ❌ Não fazer |
|---------|-------------|
| Falar de "facilitadora de engenharia civil" | Mencionar "gestão de obras" |
| Citar "softwares modernos em padrão OpenBIM" | Mencionar "Civil 3D" especificamente |
| Reforçar agilidade e acesso direto ao engenheiro | Comparar com "grandes escritórios" |
| Destacar atuação remota em todo o Brasil | Segmentar por tamanho de cliente |
| Exibir topografia como serviço complementar regional | Expor valores/preços publicamente |
| Usar OpenBIM como credencial de metodologia | Vender OpenBIM como serviço principal isolado |
| Usar "Areia" (#F4EDE6) no lugar de branco puro | Usar branco puro (#FFFFFF) nos textos |

---

## 12. PRÓXIMOS ENTREGÁVEIS (roadmap)

| Ordem | Entregável | Status |
|-------|-----------|--------|
| 1 | **Site** | 🔄 Em desenvolvimento |
| 2 | **Apresentação Comercial (PPT)** | ⏳ Texto a aprovar antes da arte |
| 3 | **Email de Prospecção** | ⏳ Aguarda apresentação pronta (será o anexo) |
| 4 | **Instagram / LinkedIn** | ⏳ Espelha identidade do site — fase final |

---

## Edições 19/05

- Removido o termo "Carro-chefe" do card de Terraplenagem; substituído por **"Destaque:"** para um tom mais profissional.
- Título do bloco secundário de infraestrutura alterado para **"SERVIÇOS ADICIONAIS DE INFRAESTRUTURA:"**.
- Seção **"Empresas que confiam na PER5"** removida do site, junto com o marquee de clientes fictícios.
- Seção **"Dúvidas frequentes / FAQ"** removida completamente da página.
- Diferencial de confidencialidade atualizado para cobrir **parceiros B2B e B2C**.
- Seção **"Como trabalhamos / Nosso Processo"** formalizada com etapas de primeiro contato, conversa técnica, entendimento de requisitos, contexto do negócio, estrutura de orçamento, projeto e acompanhamento.
- Formulário de orçamento mantido com envio via Formspree (`https://formspree.io/f/xlgonzzz`). Para garantir que as mensagens caiam em `guilherme@per5.com.br`, o destinatário precisa estar confirmado/configurado na conta Formspree vinculada a esse endpoint. O frontend também envia `destinatario_preferencial=guilherme@per5.com.br` como metadado.
- CTA de WhatsApp adicionado junto ao bloco do formulário para usuários que preferem contato direto.
- Versão em inglês revisada para evitar traduções literais como "All of Brazil"; adotado "Nationwide service in Brazil" e ajustes de gramática nas áreas principais.

## QA Mobile 19/05

- Teste executado em emulação mobile de iPhone 14/15 (`390x844`, DPR 3) e iPhone 15 Pro Max (`430x932`, DPR 3).
- Ajustados alvos de toque para mínimo de **44px** nos controles mobile do header, menu, botões de orçamento dos cards, tabs de público, links sociais/rodapé e campos de formulário.
- Corrigido overflow horizontal causado por animações laterais na seção de diferenciais técnicos; seção passou a recortar o deslocamento visual.
- Inputs e selects do formulário receberam altura mínima de 44px para melhorar toque em mobile.
- Validação final: `scrollWidth` igual ao `clientWidth` nos dois viewports, sem overflow horizontal; menu mobile abre; item "Serviços" ancora corretamente; botão "Solicitar Orçamento" ancora no formulário; campos Nome, Email, Telefone e Descrição recebem foco por toque.
- Observação: micro-labels complementares em 10px permanecem apenas como etiquetas curtas de apoio ("Campinas e região", "Documentação" etc.); textos principais e CTAs estão legíveis no mobile.
- Correção complementar: seção **Como trabalhamos / Nosso Processo** passou a usar o gatilho de scroll reveal corretamente e agora exibe cards completos com descrição e bullets por etapa.
- Rodapé atualizado: texto **"OpenBIM / IFC"** da área Credenciais substituído pela imagem `/public/buildingsmart.png`; item **CREA-SP** removido do rodapé.
- Portfólio atualizado com imagens reais da pasta `/public/portfolio`, mapeadas por categoria: Terraplenagem, Drenagem, Pavimentação, Urbanístico, Topografia e Regularização. Os placeholders foram substituídos por imagens com `alt` descritivo.
- Portfólio convertido de grid para **carrossel animado contínuo**, sem setas, indicadores ou filtros visíveis. O hover zoom foi removido. Todas as imagens são exibidas em moldura quadrada padronizada com `object-contain`, sem corte e sem distorção.
- Portfólio ajustado para remover a linha **"Status: Imagem disponível"**. O nome/descrição de cada imagem agora aparece como banner sobreposto na imagem, com fundo preto em aproximadamente 60% de opacidade.
- Removido o bloco inferior repetido dos cards do portfólio; a descrição passa a existir apenas no banner sobreposto à imagem.
- Carrossel do portfólio alterado para movimento lateral contínuo sem parada: sequência duplicada em trilho linear infinito, sem setas, sem indicadores e sem pausa no hover.
- Filtros visíveis do portfólio removidos completamente; a seção agora apresenta apenas o carrossel infinito com todos os projetos.
- Removido o selo **"EM ATUALIZAÇÃO"** do cabeçalho do portfólio e ajustada a mensagem para não tratar a seção como status temporário.
- Rodapé atualizado para exibir a imagem buildingSMART ao lado do link textual **"Buildingsmart"** apontando para `https://www.buildingsmart.org/`.
- Ajustado o bloco de credenciais do rodapé para impedir overflow do texto **"Buildingsmart"**: grid do rodapé revisado nos breakpoints, logo compactado e link com quebra segura dentro do card.

### Correções QA 19/05

- Header ajustado para mobile/iOS com `env(safe-area-inset-top)`, altura segura e `-webkit-backdrop-filter` junto do `backdrop-filter`.
- Âncoras internas receberam `scroll-margin-top` para evitar que o header cubra o início das seções ao navegar pelo menu.
- Inputs, selects e textareas do formulário foram padronizados com fonte mínima de 16px para evitar zoom automático no iOS.
- CTAs, botões do header, links sociais e botões dos cards foram revisados para área de toque mínima de 44px.
- Formulário recebeu `aria-describedby` nos campos obrigatórios e mensagens auxiliares de obrigatoriedade/e-mail válido em PT e EN.
- Ícones decorativos receberam `aria-hidden="true"` e o H1 passou a ter `aria-label` único para leitores de tela.
- Portfólio e logo buildingSMART passaram a usar imagens WebP com fallback PNG, mantendo `alt` descritivo.
- Modo `prefers-reduced-motion` implementado para reduzir/desativar animações, carrossel, bounce/pulse e reveals.
- Contraste do rodapé foi revisado, substituindo textos muito apagados por tons de Areia/Fumo mais legíveis.
- Cabeçalhos HTTP locais adicionados no Vite para CSP, `X-Frame-Options`, `X-Content-Type-Options` e `Referrer-Policy`; no deploy, manter política equivalente no hosting.
- React Router atualizado com future flags para remover warnings de console em ambiente de desenvolvimento.
- Textos técnicos revisados: EIV e RIT expandidos na primeira menção, "E-mail" padronizado, placeholder de telefone corrigido e frase institucional ajustada para reforçar que a PER5 não executa obra.
- Conteúdo em inglês revisado novamente para remover tradução literal, padronizar ART e melhorar terminologia comercial.
- Validação QA final executada em desktop e mobile simulados: sem overflow horizontal, inputs com 16px, principais CTAs com 44px e modo de movimento reduzido ativo corretamente.

### Hotfix Deploy 19/05

- Corrigida a causa da tela branca no GitHub Pages: havia dois workflows de deploy rodando no push para `main`.
- O workflow Vite publicava corretamente o conteúdo compilado de `dist`, mas o workflow Jekyll terminava depois e sobrescrevia a publicação com a raiz do repositório, servindo o `index.html` fonte com `/src/main.tsx`.
- Workflow `.github/workflows/jekyll-gh-pages.yml` removido. O deploy oficial passa a ser apenas `.github/workflows/deploy.yml`, com `npm ci`, `npm run build`, upload de `dist` e fallback SPA `404.html`.

*Documento vivo — atualizar conforme decisões forem tomadas ao longo do projeto.*

---
