# Design Plan — GoJohnny AI

## Identidade visual

### Conceito criativo

"Editorial de treino, não app de treino." O nicho inteiro (Pacer, AI Runner, Zyla,
Strava, Nike Run Club — ver `market-research.md`) usa a mesma linguagem visual de
app esportivo: verde/laranja/azul vibrante, ícones arredondados, gradientes de
energia. GoJohnny AI se posiciona como um produto com **opinião** (metodologia
opinativa, coach com personalidade e 5 níveis de firmeza — o próprio diferencial
que a pesquisa de mercado identificou como o único espaço em branco real do nicho).
A direção visual segue essa opinião: preto editorial + tipografia grande, quase
um "manifesto" de marca, não um dashboard fitness.

### Personalidade da marca

Direto, confiante, um pouco provocador — mas nunca frio. É o oposto de "app
fofinho de bem-estar". Fala como o coach que a copy descreve: "acolhedor mas
firme" (do brief), nunca genérico.

### Paleta HEX

| Token | Valor | Uso |
|---|---|---|
| `--color-bg-dark` | `#0D0D0D` | Fundos escuros (hero, stats, depoimentos, footer) |
| `--color-bg-light` | `#F4F2EE` | Fundos claros (seções alternadas) |
| `--color-accent` | `#DAFF00` | CTA, números grandes, sublinhados, seletor de tom |
| `--color-text-dark` | `#0D0D0D` | Texto sobre fundo claro |
| `--color-text-light` | `#F4F2EE` | Texto sobre fundo escuro |
| `--color-muted` | `#6B6B6B` | Labels, microcopy, texto secundário |
| `--color-disabled` | `#2A2A2A` | Coluna "coach humano" no comparativo |

**Esquema de cor:** acromático (preto/off-white, ambos de saturação ~0) + 1 acento
isolado saturado (amarelo-ácido) — um dos 7 esquemas descritos em
`penpot-teoria-de-cor-web-design` (cerebro), aplicado com a regra 60-30-10 de
`uxpin-como-escolher-paleta-de-cores`: ~60% preto/off-white alternando por seção,
~30% texto/componentes neutros, ~10% amarelo-ácido restrito a CTA, números de
destaque e sublinhados ativos — nunca em área grande. Contraste `#DAFF00` sobre
`#0D0D0D` = 14:1 (WCAG AAA); `#F4F2EE` sobre `#0D0D0D` = 18:1. `#DAFF00` sobre
`#F4F2EE` ≈ 4.2:1 — aprovado AA só para texto grande (≥18px bold), nunca em corpo
de texto pequeno sobre fundo claro (ver `ixdf-como-desenhar-formularios-ui-2026`
sobre contraste mínimo 4.5:1 para elementos de interação).

**Por que essa direção e não a "paleta de app esportivo":** aplica a direção nº11
do `DESIGN-CATALOG.md` ("inversão deliberada do padrão do nicho") — se todo
concorrente direto usa cor vibrante tipo Strava, o preto editorial com um único
acento ácido comunica "isso não é só mais um app de corrida" antes mesmo da
primeira frase ser lida.

### Tipografia

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Display / Headlines | Space Grotesk | 700–800 | H1, H2, números grandes |
| Labels / dados técnicos | Space Mono | 400 | Stats, labels, microcopy técnico |
| Corpo de texto | Inter | 400–500 | Parágrafos, bullets, copy de seção |

**Par escolhido:** monoespaçada como acento + sans humanista no corpo — opção 4
do `DESIGN-CATALOG.md` (categoria tipografia), fundamentado em
`ixdf-como-parear-fontes-guia-pratico` pelo princípio de contexto: o produto é
literalmente "IA + WhatsApp", então usar uma monoespaçada nos dados/labels
comunica "técnico/preciso" sem precisar de ícone de robô ou qualquer clichê visual
de IA. Space Grotesk (display) e Inter (corpo) somam contraste de peso suficiente
sem competir — validado contra o checklist de `figma-39-pares-de-fontes`. Fontes
via Google Fonts, `preconnect` no `<head>`, `font-display: swap` (ver
`web.dev` performance na biblioteca cerebro).

### Estilo de componentes

- **Botões:** cantos levemente arredondados (`8px`), nunca pill-shape (evita
  "app fofinho"). Primário: fundo `#DAFF00`, texto `#0D0D0D`, sombra colorida
  (`box-shadow` em `#DAFF00` a 40% opacidade) em vez de sombra cinza genérica.
- **Cards:** bordas finas (`1px`, `rgba` sutil), sem sombra pesada por padrão —
  ganham elevação só no hover.
- **Ícones:** line icons finos (não preenchidos, não emoji) — mantém o tom
  editorial, evita parecer app consumer genérico.
- **Imagens:** nenhuma foto real (produto pré-lançamento). Mockup de conversa
  WhatsApp em SVG/CSS puro — nunca screenshot real do app (violação dos T&C do
  Meta/WhatsApp).
- **O que evitar:** ícones 3D/gradiente tipo "IA genérica" (cérebro brilhante,
  robô, partículas flutuantes) — clichê de produto de IA que a pesquisa de
  mercado não encontrou em nenhum concorrente sério do nicho; gradiente
  verde-para-azul tipo app fitness; qualquer emoji no lugar de ícone.

### Movimento e interação

Aplicando `nngroup-microinteracoes-em-ux` (cada microinteração precisa de uma
função clara — engajamento, status do sistema, prevenção de erro ou comunicação
de marca) e os 5 princípios de `framer-11-exemplos-one-page-website` (hero
específico, narrativa via scroll, separação clara entre seções):

- **Herói — Opção 14 (tipografia cinética):** headline estática ("Seu coach de
  corrida está no WhatsApp.") + fragmento que troca em loop ("Sem app." → "Sem
  humano." → "Por R$39,90/mês."), combinado com **texto reveal palavra a
  palavra** (técnica nº7) na entrada da página. Função: comunicação de marca —
  força o visitante a processar os 3 diferenciais nos primeiros 3 segundos, sem
  depender de imagem (não há fotos reais ainda).
- **Navegação — Opções 3 + 9:** navbar transparente sobre o hero, ganha fundo
  sólido (`#0D0D0D`, sombra sutil) e some ao rolar pra baixo / reaparece ao
  rolar pra cima (`220ms ease-out`). O CTA "Entrar na lista" muda de posição: do
  nav para um botão flutuante no canto inferior direito quando o hero sai da
  viewport — mobile-first (público é usuário de WhatsApp no celular), maximiza
  área de leitura e mantém a conversão sempre ao alcance do polegar. Função:
  status do sistema (onde estou na página) + prevenção de fricção (CTA nunca
  fora de alcance).
- **Seção assinatura primária — Opção 26 (seletor de tom/personalidade),
  adicionada ao `DESIGN-CATALOG.md` nesta sessão:** um slider de 3 posições
  ("Acolhedor" / "Direto" / "Exigente") que reescreve, em tempo real, a mesma
  mensagem de coach de exemplo — ex. resposta a "não consegui treinar hoje".
  Isso demonstra ao vivo o diferencial real identificado na pesquisa de mercado
  (nenhum concorrente comunica personalidade adaptativa, só "IA que ajusta o
  treino"). Função: comunicação de marca direta — o visitante *sente* a
  diferença em vez de ler um bullet a mais.
- **Seção assinatura secundária — Opção 5 (stats strip) + Opção 15
  (comparativo "nós vs. genérico"):** mantidas do brief original — o
  comparativo preço/disponibilidade continua válido porque a pesquisa confirmou
  que a objeção "R$300-800/mês de coach humano" é real e não resolvida pelos
  concorrentes diretos (eles competem entre si no mesmo preço, não contra
  assessoria humana).
- **Scroll reveal — Opções 2 + 9:** stagger (`80ms` entre irmãos) nas linhas do
  comparativo e bullets do showcase; contador count-up nos 4 números da stats
  strip ao entrar em viewport (`IntersectionObserver`).
- **Microinterações:** CTA primário com leve escala (`1.02`) + sombra `#DAFF00`
  que acompanha o cursor sutilmente (não magnetic-button literal). Linhas do
  comparativo: hover destaca a linha inteira com fundo `rgba(218,255,0,0.06)`.
- **Layout — Opções 4 + 10:** faixas full-width alternando `#0D0D0D`/`#F4F2EE`
  por seção, com divisores diagonais entre elas (remete a movimento/velocidade
  sem clichê de foto de pista).

### O que evitar (consolidado)

Gradiente esportivo genérico; ícones 3D de "IA"; fotos de banco de imagem de
corredores sorrindo; pill-shaped buttons; qualquer paleta verde/laranja/azul
saturada (assinatura visual de todo concorrente direto pesquisado); mais de 1 CTA
competindo por atenção na mesma dobra (ver `lovable-landing-page-best-practices-2026`
— 1 CTA principal repetido, não múltiplos).

## UI e design responsivo

### Grid

- **Desktop (≥1024px):** container máx. `1200px`, grid de 12 colunas, gutter `24px`.
- **Tablet (768–1023px):** grid de 8 colunas, gutter `20px`.
- **Mobile (<768px):** coluna única, padding lateral `20px`. Breakpoint único em
  `768px` (conforme brief original — simplicidade deliberada para MVP).

### Espaçamento

Escala base `8px` (`8/16/24/32/48/64/96px`). Seções full-width: padding vertical
`96px` desktop / `64px` mobile.

### Componentes principais

- Navbar (comportamento descrito acima).
- Hero com headline cinética + mockup WhatsApp SVG.
- Stats strip (4 números).
- Stepper "Como funciona" (3 passos).
- Seletor de tom (slider interativo, nova seção assinatura).
- Comparativo GoJohnny vs. coach humano (tabela).
- Showcase WhatsApp (mockup de conversa + bullets).
- Carrossel de depoimentos (3 cards, placeholders sinalizados).
- Bloco de preço.
- Formulário de lista de espera.
- Footer.

### Estados visuais

- **Foco de input:** outline `2px` sólido em `#DAFF00`, nunca o azul padrão do
  navegador — contraste mínimo 4.5:1 (`ixdf-como-desenhar-formularios-ui-2026`).
- **Hover de botão:** escala `1.02` + sombra `#DAFF00` 40%.
- **Erro de formulário:** borda `#DAFF00`... **não** — usar vermelho de alerta
  dedicado (`#FF4D4D`) para erro, reservando `#DAFF00` só para estados positivos/
  neutros (não sobrecarregar o acento com dois significados opostos).
- **Sucesso de formulário:** ícone de check + mensagem, fundo `rgba(218,255,0,0.1)`.

### Regras por breakpoint (movimento)

- **Desktop:** parallax leve permitido no hero (mockup WhatsApp desloca `0.3x`
  a velocidade do scroll); hover com profundidade em cards/comparativo.
- **Mobile:** sem parallax (custo de performance/jank em scroll touch); scroll
  reveal mantido mas com `translateY` menor (`12px` em vez de `16px`, transições
  mais curtas); seletor de tom vira toggle de toque (tap para trocar, não drag
  de slider) — mais confiável em touch do que arrastar um slider fino.
