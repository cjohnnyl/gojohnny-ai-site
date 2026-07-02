# Site Spec — GoJohnny AI

## 1. Resumo executivo

Landing page one-page de pré-lançamento (lista de espera) para o GoJohnny AI,
coach de corrida 100% IA que atua via WhatsApp, R$39,90/mês. Objetivo único:
converter corredores recreativos curiosos em leads (nome + WhatsApp + objetivo)
via formulário — sem pagamento, sem app, sem admin/agendamento (diferente do
padrão default do `SDD-MOTOR.md`, que assume negócio local com agenda — ver
seção 12). A pesquisa de mercado revelou concorrentes diretos quase idênticos
em canal e preço (Pacer, AI Runner); a estratégia central desta spec é puxar a
diferenciação para o único espaço que nenhum concorrente pesquisado comunica:
personalidade/tom adaptativo do coach — materializada numa seção interativa
nova (seletor de tom), não apenas em texto.

## 2. Brief recebido

Ver `brief.md` (pasta deste projeto) — já continha a maior parte das decisões
de copy/design/estrutura, escritas antes desta etapa formal de `/site-plan`.
Esta spec preserva o que já estava bem fundamentado e ajusta o que a pesquisa
de mercado real (feita nesta etapa, `market-research.md`) revelou como ponto
cego: o brief original vendia "sem app, no WhatsApp, R$39,90" como diferencial
único — a pesquisa mostrou que isso é paridade de categoria com o Pacer
(preço idêntico), não diferenciação.

**Premissas assumidas** (já registradas no `brief.md`, mantidas): slug
`gojohnny-ai`; estágio pré-lançamento/lista de espera; sem imagens reais
(mockup WhatsApp em SVG/CSS); 3 depoimentos placeholder sinalizados;
formulário sem pagamento no site.

**Premissa nova desta etapa:** número de WhatsApp oficial de contato do site
ainda não existe (produto em setup operacional — ver checkpoints de infra do
projeto principal `C:\Projetos\gojohnny-ai\`) — tratado como pendência no
`brief-gojohnny-ai.yaml`, não bloqueia a construção da landing page (o
formulário não depende de um número wa.me para funcionar).

## 3. Pesquisa de mercado

Ver `market-research.md` (completo, com fontes). Resumo do achado crítico:
**Pacer** (pacerrun.com) e **AI Runner** (airunner.com.br) são concorrentes
diretos quase idênticos — coach de corrida por IA 100% via WhatsApp, mesmo
preço (R$39,90/mês no caso do Pacer). **Zyla** (zyla.fit) é o líder de
mercado (200→84 mil alunos em 1 ano) mas via app + 90% da base vem de
benefício corporativo (Wellhub), não aquisição direta B2C — modelo de
distribuição diferente do GoJohnny.

Dor real validada: 55% dos corredores recreativos brasileiros relatam lesão
musculoesquelética no último ano (fonte: estudo SciELO) — reforça o peso do
bullet "ajuste por lesão" no showcase, que no brief original era secundário.

Nenhum concorrente pesquisado comunica personalidade/tom adaptativo do coach
— todos vendem "IA que ajusta o treino" de forma genérica. Esse é o espaço em
branco real e a base da seção assinatura nova desta spec (seletor de tom).

## 4. Estratégia do site

- **Objetivo primário:** conversão em lead de lista de espera (`form_submit`).
- **Objetivo secundário:** nenhum — 1 CTA único repetido, sem CTA concorrente
  (ver `lovable-landing-page-best-practices-2026`).
- **Ângulo central:** "coach com opinião e personalidade", não "app de IA que
  ajusta seu treino" (fórmula já ocupada por 3 concorrentes diretos).
- **Tom:** direto, honesto, acolhedor mas firme (do brief original — validado
  como coerente com a personalidade "Direto"/"Exigente" do próprio produto).

## 5. Identidade visual

Ver `design-plan.md` (completo — paleta, tipografia, componentes, movimento).
Resumo:

- **Paleta:** acromático (preto `#0D0D0D` + off-white `#F4F2EE`) + acento
  isolado amarelo-ácido `#DAFF00` — inversão deliberada do padrão "app
  esportivo colorido" do nicho (ver `DESIGN-CATALOG.md`, direção de paleta
  nº11), fundamentada em `penpot-teoria-de-cor-web-design` (esquema
  acromático) e `uxpin-como-escolher-paleta-de-cores` (regra 60-30-10).
- **Tipografia:** Space Grotesk (display) + Space Mono (labels/dados
  técnicos) + Inter (corpo) — par monoespaçada-como-acento + sans humanista,
  fundamentado em `ixdf-como-parear-fontes-guia-pratico`.
- **Movimento:** hero com tipografia cinética + reveal palavra a palavra;
  navbar hide-on-scroll com indicador de seção ativa; seção assinatura nova
  "seletor de tom" (interativa, adicionada ao `DESIGN-CATALOG.md` nesta
  sessão); stats count-up; scroll reveal com stagger; layout em faixas
  full-width alternadas com divisores diagonais.

## 6. UX

Ver `ux-plan.md` (completo — jornada, ordem de seções, quebra de objeções por
seção, comportamento mobile/desktop, acessibilidade). Ordem das 11 seções:
Nav → Hero → Stats → **Seletor de tom** → Como funciona → Comparativo →
Showcase WhatsApp → Depoimentos (placeholder sinalizado) → Preço → Formulário
→ Footer.

Prova social: os 3 depoimentos são explicitamente fictícios (produto
pré-lançamento, sem base de usuários real) — sinalizado em copy e no mockup
com etiqueta visível "depoimento ilustrativo", conforme
`ui-patterns-social-proof`. Não devem ser tratados como reais no código final;
substituir antes do go-live é pendência explícita (ver seção 13).

## 7. UI e design responsivo

Ver `design-plan.md` seção "UI e design responsivo". Breakpoint único em
`768px` (mobile-first, deliberado para MVP). Grid 12 colunas desktop / coluna
única mobile. Seletor de tom vira toggle de toque em mobile (sem drag de
slider). Sem parallax em mobile (performance/jank em touch).

## 8. Estrutura da one page

```
┌─────────────────────────────────────────────────────────┐
│  NAV     Logo + links de seção + CTA sticky              │
├─────────────────────────────────────────────────────────┤
│  HERO    Headline cinética + subheadline + CTA            │
│          Mockup conversa WhatsApp (SVG/CSS)               │
├─────────────────────────────────────────────────────────┤
│  STATS STRIP   4 números animados (fundo preto)           │
├─────────────────────────────────────────────────────────┤
│  SELETOR DE TOM   3 posições, resposta muda ao vivo        │
│                    (fundo off-white) — seção nova          │
├─────────────────────────────────────────────────────────┤
│  COMO FUNCIONA   Stepper 3 passos (fundo preto)            │
├─────────────────────────────────────────────────────────┤
│  COMPARATIVO   GoJohnny vs. coach humano (fundo preto)     │
├─────────────────────────────────────────────────────────┤
│  SHOWCASE   Mockup WhatsApp + bullets (fundo off-white)    │
├─────────────────────────────────────────────────────────┤
│  DEPOIMENTOS   Carrossel 3 cards, sinalizado (fundo preto) │
├─────────────────────────────────────────────────────────┤
│  PREÇO   Valor + incluso + CTA (fundo off-white)           │
├─────────────────────────────────────────────────────────┤
│  FORMULÁRIO   Lista de espera (fundo preto)                │
├─────────────────────────────────────────────────────────┤
│  FOOTER   Logo + links + LGPD + copyright (fundo preto)    │
└─────────────────────────────────────────────────────────┘
```

## 9. Copy

Ver `copy.md` (completo — todos os textos, incluindo os 3 exemplos de
resposta do seletor de tom e o texto de nota sobre a ausência deliberada de
FAQ dedicada).

## 10. SEO

- **Title tag:** `GoJohnny AI — Coach de corrida com IA no WhatsApp | R$39,90/mês`
- **Meta description:** `Plano semanal de corrida personalizado por IA, direto no WhatsApp. Sem app, sem humano, sem enrolação. R$39,90/mês. Entre na lista de espera.`
- **Keywords:** coach de corrida ia, treino de corrida whatsapp, plano de corrida personalizado, assessoria de corrida online, app de corrida com ia
- **H1:** "Seu coach de corrida está no WhatsApp." (hero)
- **H2s:** um por seção (títulos de `copy.md`)
- **Open Graph:** `opengraph-image` 1200×630 — headline "Seu coach de corrida
  está no WhatsApp." + logo sobre fundo `#0D0D0D`, texto em `#F4F2EE`/`#DAFF00`
  (ver `nextjs-metadata-og-images-guide`/`nextjs-opengraph-image-twitter-image-reference`
  na biblioteca cerebro — nunca placeholder genérico).
- **SEO local:** não aplicável — produto 100% remoto, sem endereço físico, sem
  Google Business Profile. Nenhum JSON-LD `LocalBusiness`. Considerar, se
  fizer sentido no futuro, JSON-LD `Product`/`SoftwareApplication` para o
  serviço — fora do escopo desta spec (MVP é captura de lead, não catálogo).

## 11. Integrações

- **Supabase:** tabela `leads` com colunas `id` (uuid, pk), `nome` (text),
  `whatsapp` (text), `objetivo` (text), `created_at` (timestamptz, default
  now()). RLS: `insert` aberto para role `anon` (sem auth — é formulário
  público), `select` restrito (só service role/dashboard). Sem tabela de
  agendamento, sem tabela de serviços — este projeto não usa o padrão
  `agendamento` do `SDD-MOTOR.md` (ver seção 12).
- **WhatsApp:** **não há CTA `wa.me`/click-to-chat nesta landing page.** O
  WhatsApp aqui é o canal do produto (pós-cadastro), não um botão de contato
  do site — a conversão acontece via formulário, não via clique para
  conversar. Se o cliente decidir adicionar um botão de contato direto no
  futuro, seguir o formato exato de `qualimero-como-criar-link-whatsapp-wame`
  (sem `+`, sem zero à esquerda, mensagem pré-preenchida com URL encoding) —
  não necessário para este MVP.
- **Vercel:** env vars `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **GitHub:** repositório sugerido `gojohnny-ai-site` (o código deste site
  fica na mesma pasta `site-motor/projetos/gojohnny-ai/`, mas o repositório
  Git é próprio do site, separado do repositório do backend em
  `C:\Projetos\gojohnny-ai\` — são dois códigos diferentes com o mesmo nome
  de produto).
- **LGPD:** aviso curto no footer + link para política de privacidade (texto
  em `copy.md`) — obrigatório por coletar nome/WhatsApp via formulário, ver
  `gabrieldosite-checklist-lgpd-sites-institucionais`/`dataguide-lgpd-para-pmes`.
  Página de política de privacidade e termos de uso: **placeholder** —
  registrado como pendência (seção 13), o motor deve gerar uma versão básica,
  não deixar link quebrado.

## 12. Requisitos técnicos para o motor

**Este projeto se desvia do padrão default do `SDD-MOTOR.md` (que assume
negócio local com agendamento) — leia com atenção antes de implementar:**

- **NÃO construir `/admin` nem `/admin/login`.** Não há painel de dono, não
  há agendamento. Este é um site de captura de lead, ponto.
- **NÃO construir rota de API de agendamento.** A única rota de API necessária
  é o insert de lead (pode ser via Supabase client direto do formulário, sem
  precisar de rota própria, dado que o insert é público via RLS — mais simples
  que criar uma API route só para isso).
- **Construir apenas:** `/` (one-page pública, todas as seções da seção 8).
- Framework: Next.js (App Router), conforme padrão do motor. Animações via
  Framer Motion (não CSS/JS vanilla do `mockup.html` — o mockup é descartável,
  não deve ser reaproveitado como código, conforme `PLANNING-ENGINE.md`).
- Formulário com validação client-side equivalente à do `mockup.html` (nome
  ≥2 chars, WhatsApp 10-11 dígitos, objetivo obrigatório) + insert real no
  Supabase.
- Seletor de tom: implementar como componente controlado (React state),
  com `role="radiogroup"` acessível (não só slider visual) — ver `ux-plan.md`
  seção de acessibilidade.
- Testemunhos: renderizar com badge visível "depoimento ilustrativo" (mesmo
  texto do `mockup.html`) até serem substituídos por dados reais.
- Sem página de agendamento/serviços — os "serviços" deste YAML (seção
  seguinte) representam o único plano de assinatura, não uma lista de
  serviços agendáveis.

## 13. Critérios de aceite

- [ ] Todas as 11 seções da estrutura (seção 8) implementadas na ordem exata.
- [ ] Seletor de tom funcional (3 posições, texto muda, acessível via teclado).
- [ ] Formulário insere de verdade na tabela `leads` do Supabase (RLS
      configurada — insert público, select restrito).
- [ ] Nenhuma rota `/admin` ou de agendamento criada.
- [ ] Contraste de cor conforme `design-plan.md` (mínimo 4.5:1 em elementos
      interativos).
- [ ] Responsivo real nos 2 breakpoints (mobile <768px / desktop ≥768px).
- [ ] Deploy publicado na Vercel, repositório no GitHub, URL retornada.
- [ ] **Pendências explícitas para o usuário resolver antes do go-live**
      (não bloqueiam o build/deploy do MVP, mas devem ficar visíveis):
  - Substituir os 3 depoimentos placeholder por depoimentos reais.
  - Definir e preencher o número de WhatsApp oficial do produto (contato/
    suporte — não é CTA do site, mas deve constar em algum lugar de
    compliance/institucional se o cliente decidir mais tarde).
  - Gerar/revisar o conteúdo real das páginas de Política de Privacidade e
    Termos de Uso (hoje placeholder).
  - Gerar `opengraph-image` real 1200×630 (hoje spec apenas descreve o
    conteúdo esperado, motor deve gerar um artboard simples ou o cliente
    fornecer um definitivo depois).
