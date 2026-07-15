# Reskin "Corrida de Rua" — GoJohnny AI Landing

## Contexto

O site institucional do GoJohnny AI (`site-motor/projetos/gojohnny-ai-landing/`)
está no ar com uma identidade dark + verde-limão (`#DAFF00`), toda animada com
Framer Motion. Numa sessão anterior, a seção "Como funciona" já foi migrada
para GSAP + ScrollTrigger (scroll storytelling pinado). O usuário pediu uma
"turbinada" visual mais ampla: fotos, animação 3D, menu animado e reskin com
temática de corrida de rua — usando as libs de animação recém-documentadas no
cofre `cerebro` (GSAP, react-spring, anime.js, Motion).

Este documento cobre só o **próximo incremento**: identidade visual, hero 3D,
fotos via Unsplash e navegação. Não inclui as demais seções (Comparativo,
Preço, Formulário, Footer, Depoimentos, Stats, ToneSelector) — ficam como
estão.

## Objetivo

Dar ao site uma identidade visual reconhecível como "corrida de rua" (hoje é
genérica-tech), com um showpiece 3D no hero, fotos reais de apoio e navegação
mais rica — sem comprometer performance/Lighthouse nem quebrar o que já
funciona (formulário, Supabase, SEO).

## 1. Identidade visual — paleta e tipografia

Direção escolhida: **Asfalto + laranja sinalizador**.

| Token | Valor | Uso |
|---|---|---|
| `bg-dark` | `#0D0D0D` → `#141414` | mantém a base escura atual (asfalto) |
| `accent` (novo) | `#FF5A1F` | laranja sinalizador — substitui `#DAFF00` em CTAs, links ativos, destaques, bordas de foco |
| `accent-chalk` (novo) | `#F5F3EE` | branco-giz quente, para textos de alto contraste sobre `bg-dark` |
| `accent-legacy` (`#DAFF00`) | mantido só como cor de apoio pontual (ex.: badge "online" do WhatsApp mockup, que já é verde por convenção do próprio WhatsApp — não é o acento da marca) |

Implementação: os tokens de cor vivem em `tailwind.config.ts` (`colors.accent`
etc.) e são referenciados via classes utilitárias (`text-accent`,
`bg-accent`, `border-accent`) em todos os componentes — trocar o valor no
config já propaga a mudança sem tocar em cada `.tsx`. Onde um componente usa
hex cru inline (ex.: `rgba(218,255,0,0.4)` em `ComoFunciona.tsx`,
`rgba(218,255,0,0.08)` em `ToneSelector.tsx`), substituir pelo hex novo
equivalente em opacidade.

Motivos de corrida (sutis, sem virar clichê visual):

- **Textura de asfalto**: grain sutil via CSS (`background-image` com SVG
  noise inline, baixíssima opacidade) aplicado ao `bg-dark` do `body` —
  substitui o fundo chapado sem pesar no bundle (SVG inline, não imagem).
- **Numerais "número de peito"**: o padrão que `Stats.tsx`/`ComoFunciona.tsx`
  já usam (`font-mono font-bold text-accent`) ganha uma moldura fina
  (`border` fino, cantos levemente arredondados) lembrando um bib number —
  aplicado nos números do `Stats` e nos círculos de etapa do `ComoFunciona`.
- **Divisores tracejados**: onde hoje há `border` sólida entre seções/linhas
  de tabela (`Comparativo.tsx`), trocar por `border-dashed` sutil (lembra
  faixa de pista) — mudança de 1 classe Tailwind, sem novo componente.

Fora de escopo: não redesenhar tipografia (mantém `font-display`/`font-mono`
atuais), não tocar em copy.

## 2. Hero — showpiece 3D

**Lib**: React Three Fiber + `@react-three/drei`, registry `threecn.dev`
instalado via CLI do shadcn (ver `SDD-MOTOR.md` categoria 9).

**Objeto**: tênis de corrida estilizado em wireframe/low-poly, cor de linha
`accent` (`#FF5A1F`) sobre fundo transparente, posicionado no hero ao lado
(ou atrás, com leve profundidade) do mockup WhatsApp existente — não
substitui o mockup, que é a prova social/funcional do produto.

**Comportamento**:
- Rotação contínua lenta (auto-rotate).
- Parallax leve seguindo a posição do mouse (desktop apenas).
- Fade-in atrasado, entrando depois do hero de texto (respeitando a
  sequência de delays já coreografada em `Hero.tsx`).

**Fallback / responsividade** (regra do `DESIGN-CATALOG.md` categoria 9,
"3D real só quando o segmento pedir de verdade" + custo em mobile):
- **Mobile (`< 768px`)**: sem Three.js — renderiza um SVG estático do mesmo
  tênis wireframe (sem animação 3D), carregado só nesse breakpoint via
  `matchMedia`/CSS, para não pagar o custo de WebGL em conexão/CPU mobile.
- **`prefers-reduced-motion`**: desliga o auto-rotate, mantém o modelo
  estático.
- **Erro de WebGL/contexto indisponível**: `<Canvas>` do R3F já lida com
  isso via error boundary do drei; fallback é o mesmo SVG estático do
  mobile.

**Performance**: modelo simples (poucos milhares de triângulos, sem
texturas pesadas — só linhas/wireframe), `dpr` limitado (`[1, 1.5]`),
`frameloop="demand"` do R3F quando parado fora do viewport
(`IntersectionObserver` pausando o loop de render).

## 3. Fotos — Unsplash

Dois pontos de integração via `next/image` (já com `remotePatterns` do
Unsplash liberado em `next.config.js`):

1. **Hero** (`Hero.tsx`): foto de corredor(a) ao amanhecer/rua urbana como
   camada de fundo da seção, com overlay escuro em gradiente
   (`bg-gradient-to-b from-black/80 via-black/60 to-bg-dark`) por trás do
   texto/mockup/3D, mantendo contraste AA para o texto.
2. **Showcase / "Na prática"** (`Showcase.tsx`): foto de corredor consultando
   o celular substitui o espaço vazio ao lado do mockup WhatsApp (hoje o
   grid é só texto + mockup; a foto entra como terceiro elemento ou substitui
   o peso visual do lado do mockup em telas largas).

Busca de foto: usar a API pública do Unsplash Source/`unsplash.com` com
termos como `"street running sunrise"`, `"runner urban morning"` — escolher
imagens horizontais, com espaço negativo à esquerda/direita para não brigar
com o texto. Créditos de autor não são exigidos para uso via URL direta do
Unsplash (licença Unsplash), mas o `alt` de cada `<Image>` descreve a cena
(acessibilidade), não o nome do autor.

Não mexe nas demais seções (Depoimentos continua com "ilustrativo" no card,
Comparativo/Preço continuam sem foto).

## 4. Navegação

### Desktop (`Navbar.tsx`, reimplementado com GSAP)

Mantém exatamente o comportamento atual (shrink ao rolar, pill ativo por
seção, auto-hide ao rolar pra baixo, progress bar no topo, CTA flutuante),
mas a transição de estado `solid`/`transparent` do header e o slide do pill
ativo passam de CSS transition/Framer `layoutId` para uma timeline GSAP
curta (`gsap.to`), aproveitando o `useGSAP` já usado no `ComoFunciona.tsx` —
consistência de padrão dentro do projeto, não introduz lib nova (GSAP já é
dependência).

### Mobile — menu hambúrguer novo

Hoje não existe nenhuma navegação por link no mobile (só logo + CTA). Novo
componente:

- Ícone hambúrguer (3 linhas → X) no lugar de onde os links ficariam.
- Ao abrir: painel fullscreen (`fixed inset-0`) desliza/fade sobre a página,
  bloqueia scroll do body enquanto aberto.
- Links (`Como funciona`, `Comparativo`, `Preço`) com stagger de entrada via
  GSAP timeline (cada link entra com leve delay incremental).
- Fecha ao: tocar num link (navega + fecha), tocar fora do painel, ou tocar
  no X.
- Acessibilidade: `aria-expanded` no botão hambúrguer, foco preso dentro do
  painel enquanto aberto (`focus trap` simples), `Escape` fecha.

## Arquivos afetados

| Arquivo | Mudança |
|---|---|
| `tailwind.config.ts` | novos tokens `accent` (laranja), `accent-chalk`; mantém `accent-legacy` |
| `app/globals.css` | grain de asfalto no `body`, ajuste de hex cru remanescente |
| `components/sections/Hero.tsx` | + foto de fundo Unsplash, + showpiece 3D (import do novo componente) |
| `components/three/RunnerShoe3D.tsx` (novo) | cena R3F do tênis wireframe + fallback SVG mobile |
| `components/sections/Showcase.tsx` | + foto Unsplash |
| `components/sections/ComoFunciona.tsx` | ajuste de cor (`accent` novo), moldura "bib number" nos círculos |
| `components/sections/Stats.tsx` | moldura "bib number" nos números |
| `components/sections/Comparativo.tsx` | `border-dashed` nos divisores de linha |
| `components/sections/Navbar.tsx` | GSAP nas transições de estado + novo menu mobile |
| `components/sections/ToneSelector.tsx` | ajuste de cor (hex cru do acento legado → novo) |
| `package.json` | + `@react-three/fiber`, `@react-three/drei`, `three` |

## Dependências novas

```json
{
  "@react-three/fiber": "^8.x",
  "@react-three/drei": "^9.x",
  "three": "^0.17x"
}
```

Instaladas via npm. GSAP e `@gsap/react` já são dependência desde o
refactor anterior do `ComoFunciona.tsx` — não precisam ser reinstaladas.

## Riscos

- **Performance mobile do 3D**: mitigado pelo fallback SVG estático abaixo
  de 768px — o R3F/Three.js só carrega (via `next/dynamic` com
  `ssr: false`) no branch desktop, então o bundle mobile nem baixa a lib.
- **Contraste de texto sobre foto no Hero**: mitigado pelo overlay em
  gradiente escuro; validar com Lighthouse/contraste manual antes de
  considerar pronto.
- **Regressão visual em produção**: o site já está no ar (pré-lançamento,
  mas público); testar localmente e revisar screenshot antes de dar push,
  não pushar direto sem validação visual desta vez (a sessão anterior teve
  problema de screenshot no Browser pane — se persistir, usar verificação
  DOM/computed-style como fallback documentado, mas tentar visual primeiro).
- **`threecn.dev`**: registry externo via CLI do shadcn — se algum
  componente específico não estiver disponível/for incompatível com a
  versão do Next/React do projeto, cai para modelagem manual simples em
  R3F puro (cone/wireframe básico) em vez de bloquear a entrega.

## Fora de escopo

- Comparativo, Preço, Formulário, Footer, Depoimentos, ToneSelector (além
  do ajuste pontual de cor) não são redesenhados.
- Sem geração de imagem por IA (ferramenta indisponível neste ambiente).
- Sem mudança de copy/conteúdo.
- Sem mudança de arquitetura (continua Next.js App Router + Supabase +
  Vercel, como já documentado no `SDD-MOTOR.md`).

## Critérios de aceite

1. Build local (`npm run build`) passa sem erros.
2. Paleta laranja/asfalto aplicada de forma consistente em todos os
   componentes listados (nenhum hex verde-limão de acento remanescente,
   exceto o uso legado justificado do badge "online" do WhatsApp).
3. Hero mostra o showpiece 3D em desktop (rotação + parallax de mouse) e o
   fallback SVG estático em viewport mobile — sem erro de console em
   nenhum dos dois.
4. Fotos do Hero e Showcase carregam via `next/image`/Unsplash, com
   contraste de texto adequado sobre a foto do Hero.
5. Menu mobile abre/fecha corretamente, com stagger de entrada nos links,
   foco preso enquanto aberto, `Escape` fecha.
6. Nav desktop mantém todo o comportamento atual (shrink, pill ativo,
   auto-hide, progress bar, CTA flutuante), agora orquestrado via GSAP.
7. Nenhuma regressão nas seções fora de escopo (Comparativo, Preço,
   Formulário, Footer, Depoimentos, Stats, ToneSelector continuam
   funcionais e visualmente coerentes com a paleta nova onde a cor de
   acento aparece).
