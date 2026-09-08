# SITE_REVIEW — per5.com.br

Arquivo de status da skill `revisao-site`. É a fonte de verdade do que já foi
auditado e do que continua pendente — ler antes de reauditar, reescrever ao fim
de cada passada.

- **Última passada:** 2026-09-08
- **Escopo desta passada:** SEO técnico, AEO/GEO e a leva de conteúdo novo
  (Sala Técnica + 4 páginas de cidade). LGPD e performance **não** foram
  auditadas nesta passada.
- **Ambiente verificado:** `localhost:8080` (Vite dev) e `dist/` de produção.
  Nada foi verificado no domínio publicado.

> ⚠️ O painel do navegador esteve oculto durante a sessão, o que impede
> verificação visual real. Tudo marcado abaixo foi verificado por inspeção de
> DOM, do HTML gerado ou do código — não por leitura de tela renderizada.

---

## 1. Legal — LGPD / ANPD / ISO

**Status: não auditado nesta passada. Lacuna real e conhecida.**

- [ ] Política de privacidade (art. 9º LGPD) — **não existe** nenhuma página ou
      documento de política no site. Verificado por busca no código em 2026-09-08.
- [ ] Identificação do controlador (razão social + CNPJ) — o rodapé traz nome
      fantasia e localidade, mas não razão social nem CNPJ.
- [ ] Contato do encarregado/DPO (Res. CD/ANPD nº 18/2024) — não informado.
- [ ] Direitos do titular (art. 18) listados e canal para exercê-los — não existe.
- [ ] Base legal e finalidade por tratamento — não documentado.
- [x] Banner de cookies — **não é exigido hoje**: verificado em 2026-09-08 que o
      site não carrega analytics, pixel ou qualquer cookie não essencial
      (nenhum gtag/GA/Meta/Hotjar/Clarity no código). O único `document.cookie`
      está em `src/components/ui/sidebar.tsx`, componente shadcn não utilizado.
      **Se algum dia entrar analytics, o banner passa a ser obrigatório.**

**Risco atual:** o formulário em `#orcamento` coleta nome, e-mail, telefone e
empresa e envia ao Formspree (terceiro, fora do Brasil). Isso é tratamento de
dado pessoal com transferência internacional e hoje está coberto apenas pela
frase curta abaixo do formulário. Falta política de privacidade formal.

**Próximo passo:** redigir política de privacidade cobrindo finalidade,
retenção, compartilhamento (Formspree, GitHub Pages), direitos do titular e
contato do encarregado. Claude pode redigir o rascunho, mas **texto jurídico
precisa de revisão de advogado antes de publicar** — não subir como pronto.

---

## 2. Acessibilidade — WCAG 2.1/2.2 (meta: AA)

**Status: parcial. Convenções seguidas no código novo; sem validação real.**

- [x] Um único H1 por página — verificado por DOM em 2026-09-08 nas páginas
      Sala Técnica, cidades, hub e 404 (`document.querySelectorAll('h1').length === 1`).
- [x] Hierarquia de headings sem pular nível — verificado nas páginas novas.
- [x] Ícones decorativos com `aria-hidden="true"` — padrão seguido no código novo.
- [x] Alvos de toque (SC 2.5.8, mínimo AA de 24×24px) — medido em 375×812 em
      2026-09-08. `min-h-11` aplicado nos links novos do rodapé, do Para Quem e
      do glossário. Links de breadcrumb e da linha "Veja também" têm 15px de
      altura, mas são **links inline dentro de texto corrido**, cobertos pela
      exceção do próprio SC 2.5.8.
- [ ] `.btn-amber` e `.btn-outline-amber` medem **42px** de altura, não 44px —
      passam no mínimo AA de 24px, mas ficam abaixo dos 44px que o QA de 19/05
      registra como meta. É **pré-existente e vale para o site inteiro**
      (padding definido em `.btn-amber`, `src/index.css`), não só para as
      páginas novas. Não alterado nesta passada porque mexe em todos os botões
      do site — decisão de design, não correção pontual.
- [x] Sem overflow horizontal — medido em 375×812 nas páginas nova (home, Sala
      Técnica, hub, cidade, glossário): `scrollWidth === clientWidth` em todas.
- [x] Tabelas semânticas com `<caption>` (sr-only), `th[scope=col]` e
      `th[scope=row]` — `src/components/seo/DataTable.tsx`.
- [x] Tabelas com `overflow-x: auto` próprio, sem estourar a página.
- [x] `prefers-reduced-motion` — herdado do bloco global em `src/index.css`;
      o código novo usa apenas classes `.anim-*`, cobertas por ele.
- [x] Breadcrumb com `<nav aria-label="Breadcrumb">`.
- [ ] **Contraste ≥4.5:1 medido** — não medido. Os tokens usados são os mesmos
      já existentes no site, mas as combinações novas (texto em tabela sobre
      `--s-dark-card`, chips âmbar) não foram aferidas.
- [ ] **Navegação por teclado percorrida de ponta a ponta** — não testada.
- [ ] **Teste com leitor de tela real (NVDA/VoiceOver)** — não feito.
      Automação cobre só ~30-40% da WCAG; este item não pode ser inferido.
- [ ] Foco nunca escondido atrás do header sticky (SC 2.4.11) — não verificado
      nas páginas novas.

---

## 3. Técnico

**SEO técnico — status: bom.**

- [x] `title` e `meta description` únicos por página — 2026-09-08. Agora também
      no HTML estático, não só via JS (`scripts/build-seo.mts`).
- [x] `sitemap.xml` gerado a partir do registro de rotas (`src/data/seoRoutes.ts`),
      21 URLs, `lastmod` real. Antes era mantido à mão e era o único canal de
      descoberta das páginas ocultas — esquecer uma entrada publicava página invisível.
- [x] `robots.txt` sem bloqueio de produção, com `Sitemap:` e diretivas por bot.
- [x] `canonical` correto por rota, estático e via `useSEO`.
- [x] Schema.org por tipo de página: `Service`, `FAQPage`, `BreadcrumbList`,
      `CollectionPage`/`ItemList` (hub), `DefinedTermSet` (glossário), e um
      `@graph` estático com `ProfessionalService` + `WebSite` + `WebPage`.
- [x] `meta robots` gerenciado por rota — o 404 emite `noindex, follow`.
- [x] Sem página órfã: as 20 páginas fora do menu recebem link do rodapé em
      todas as páginas do site, mais links no corpo da home e no hub de cidades.
- [ ] Sitemap submetido no Search Console — **pendente, ação do usuário.**
- [ ] Cobertura no Search Console sem erro — não verificável daqui.

**Branding — status: ok.**

- [x] 404 customizada com identidade da marca, em português, com `noindex` e
      links para o cluster (`src/pages/NotFound.tsx`, reescrita em 2026-09-08).
- [x] Favicon presente (`public/favicon.ico`).
- [x] OG/Twitter com imagem própria (`public/og-image.png`, 1200x630), agora
      também por rota no HTML estático.
- [ ] Rodapé com razão social e CNPJ — ausente (ver categoria 1).

**Infra — não auditado nesta passada.**

- [ ] HTTPS, redirect canônico (com/sem www), SPF/DKIM/DMARC — não verificados.
- [ ] Comportamento de barra final (`/path` → `/path/`) no GitHub Pages após a
      geração de `dist/<rota>/index.html` — **verificar com `curl -I` no primeiro
      deploy.** Se houver 301, alinhar canonical e sitemap à forma com barra.
- [ ] Dois alvos de deploy coexistem (workflow do GitHub Pages e `vercel.json`).
      `vercel.json` foi ajustado para `npm run build` em 2026-09-08, para que o
      `postbuild` também rode lá. Confirmar qual host é o autoritativo.

**Performance — não auditada nesta passada.**

- [ ] Lighthouse/PageSpeed mobile, LCP, INP, CLS — não medidos.
- [ ] Bundle de 594 kB (168 kB gzip) em chunk único, com aviso do Vite. Sem
      code splitting. Vale medir antes de decidir se é problema real.

---

## 4. Funcional

**Status: não auditado nesta passada.**

- [x] Rotas novas carregam sem erro de console — verificado em 2026-09-08.
- [x] Slug inválido de cidade cai no 404 correto (`/cidades/cidade-inexistente`).
- [ ] Todos os links do site clicados um a um — não feito.
- [ ] Envio real do formulário e chegada do e-mail no Formspree — não testado.
- [ ] Link do WhatsApp aberto e validado — não testado. O CTA da Sala Técnica
      usa `?text=` pré-preenchido (novidade), o que ainda não foi confirmado
      em aparelho real.
- [ ] Chrome, Safari e Firefox — não testados.
- [ ] Responsivo real em mobile/tablet — **não verificado nesta passada**, o
      painel do navegador estava oculto. A última validação mobile registrada é
      a de 19/05 em `per5_site_context05-26.md`, que não cobre as páginas novas.

---

## 5. SEO (conteúdo)

- [x] Um H1 por página, H2/H3 em ordem lógica — verificado.
- [x] Links internos entre páginas relacionadas, sem órfãs — verificado.
- [x] Conteúdo diferenciado por cidade: cada página parte de economia, relevo,
      solo, eixos e instrumentos de aprovação próprios do município. Nenhum
      parágrafo de contexto local é intercambiável entre as quatro.
- [x] Cobertura declarada de forma correta: a PER5 é sediada em Campinas e
      atende obras em todo o Brasil. As páginas de cidade descrevem o formato
      de trabalho (equipe própria, reuniões por videoconferência, visita ao
      terreno quando o projeto exige) sem enquadrar o atendimento como
      limitado a uma região.
- [ ] Indexação (`site:per5.com.br`) — **pendente, verificar após o deploy.**
- [ ] Palavras-chave batendo com intenção de busca real — sem dado de Search
      Console ainda. **Não escalar além de ~8 cidades antes de ver impressão.**

---

## 6. AEO/GEO

- [x] `llms.txt` gerado em `dist/llms.txt`, com resumo, contato, todas as URLs
      por seção e as ressalvas de escopo (não executa obra, sede em Campinas
      com atendimento nacional, sem preços publicados).
- [x] Diretivas por bot de IA no `robots.txt`: GPTBot, OAI-SearchBot,
      ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai,
      PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended,
      meta-externalagent, Amazonbot.
- [x] Resposta direta nas primeiras linhas de cada seção; cada H2 autocontido.
- [x] Tabelas e comparações nas páginas novas (Sala Técnica: 2 tabelas; cada
      cidade: 1; hub: 1) — formato com maior taxa de citação.
- [x] Delimitação explícita de escopo ("O que a Sala Técnica não faz",
      "O que exige alguém no local") — conteúdo desse tipo é citado com
      frequência desproporcional e pré-qualifica lead.
- [ ] **Corpo do texto invisível para bot que não executa JS.** Esta é a maior
      lacuna de GEO em aberto. A injeção de `<head>` estático resolveu title,
      description, canonical, OG e um JSON-LD base por URL, mas o
      `<div id="root">` continua vazio no HTML servido. Googlebot executa JS e
      indexa normalmente; ClaudeBot, GPTBot e PerplexityBot, em geral, não.
      **Decisão consciente do usuário em 2026-09-08:** fazer a versão leve
      agora e adiar o prerender completo. Enquanto isso, o schema rico
      (`FAQPage`, `Service` detalhado, `DefinedTermSet`) só existe pós-hidratação.
- [ ] Revisão de conteúdo a cada 30-60 dias — próxima revisão sugerida:
      **2026-11-08**.

---

## Pendências priorizadas

1. **Política de privacidade + identificação do controlador** (LGPD) — maior
   risco jurídico em aberto. Exige revisão de advogado.
2. **Prerender completo das rotas** — maior ganho de GEO ainda não capturado.
3. **Submeter o sitemap no Search Console** e acompanhar cobertura das 6 URLs novas.
4. **Verificar barra final no GitHub Pages** com `curl -I` no primeiro deploy.
5. **Validação de acessibilidade real**: contraste medido, teclado ponta a ponta,
   leitor de tela.
6. **QA funcional das páginas novas** em mobile real e nos três navegadores.
7. **Medir performance** antes de decidir sobre code splitting.
