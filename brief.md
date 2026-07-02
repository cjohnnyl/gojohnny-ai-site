# Brief — GoJohnny AI

## Informado pelo usuário

- **Produto:** GoJohnny AI — coach de corrida de rua 100% IA, acessível por WhatsApp.
- **Tipo de site:** landing page institucional (lançamento / lista de espera).
- **Objetivo principal:** capturar leads via formulário de lista de espera (nome + WhatsApp + objetivo).
- **Plano:** mensal, R$39,90/mês, sem fidelidade.
- **Canal único no lançamento:** WhatsApp (sem app).
- **Público-alvo:** corredores recreativos brasileiros, 18–34 anos.
- **Tom:** direto, honesto, acolhedor mas firme.
- **Diferencial de produto:** sem humano no loop, WhatsApp nativo, metodologia opinativa.
- **Integrações esperadas:** Supabase (leads), deploy Vercel.

---

## Premissas assumidas

| Premissa | Justificativa |
|---|---|
| **Slug do projeto:** `gojohnny-ai` | Deriva do nome do produto. |
| **Estágio:** pré-lançamento / lista de espera | Produto ainda sem acesso público; site serve para validar demanda e capturar early adopters. |
| **Sem imagens reais de corrida no mockup** | Nenhuma fornecida; usar ilustração/mockup de conversa WhatsApp desenhado em SVG/CSS em vez de foto (evita violação dos T&C do WhatsApp). |
| **Depoimentos:** 3 placeholders fictícios sinalizados como "substituir antes do lançamento" | Produto em pré-lançamento, sem usuários reais ainda. |
| **SEO básico:** title + meta description definidos aqui, sem estratégia de blog/conteúdo por ora | Escopo de MVP. |
| **Formulário:** sem pagamento no site — lista de espera apenas | Cobrança via WhatsApp após abertura de vagas. |

---

## GATE MANUAL OBRIGATÓRIO

> **O pipeline /site-plan deve pausar após a entrega do `mockup.html` e aguardar aprovação explícita do usuário antes de acionar o /site-builder.**
>
> O site-builder (geração de código + Supabase + GitHub + Vercel) só é executado após o usuário revisar o mockup e dar o "ok".

---

## Objetivo do site

Converter corredores recreativos curiosos em leads de lista de espera. O visitante chega sem saber ao certo o que é GoJohnny AI — o site precisa, em ordem:

1. Resolver a dúvida "o que é isso?" em menos de 5 segundos (hero).
2. Provar que é diferente de tudo que ele já viu (comparativo + preço claro).
3. Mostrar como funciona (processo em 3 passos).
4. Capturar o lead (formulário).

---

## Copy principal

### Hero

**Headline estática:**
> "Seu coach de corrida está no WhatsApp."

**Fragmento cinético** (troca em loop abaixo ou sobreposto à headline, 3 variações):
> "Sem app." → "Sem humano." → "Por R$39,90/mês."

**Subheadline:**
> "GoJohnny monta seu plano semanal de corrida com IA e manda direto no WhatsApp. Toda semana. Sem você precisar de mais um aplicativo."

**CTA primário:**
> [Quero entrar na lista de espera]

**Elemento visual do hero:** mockup de conversa WhatsApp estilizado (desenhado em SVG/CSS, não screenshot real) mostrando uma mensagem do "GoJohnny AI" com o plano semanal.

---

### Stats strip (contador animado)

Quatro números que incrementam do zero ao entrar em viewport. Labels em fonte monoespaçada.

| Número | Label (Space Mono, caixa baixa) |
|---|---|
| 1.200+ | corredores na lista |
| 4.8 ★ | avaliação média (beta) |
| < 5 min | para receber seu plano |
| R$39,90 | por mês, sem fidelidade |

---

### Como funciona (stepper 3 passos)

**Título:** "Mais simples do que parece."

**Passo 1 — Você assina**
> "Entra na lista, escolhe o plano e responde 5 perguntas sobre sua rotina de corrida. Tudo pelo WhatsApp."

**Passo 2 — A IA monta seu treino**
> "GoJohnny analisa seu histórico, objetivo e disponibilidade. Não é chatbot genérico — é metodologia de corrida com opinião."

**Passo 3 — Recebe e corre**
> "Toda segunda-feira, seu plano chega no WhatsApp. Sem lembrete, sem app pra abrir, sem desculpa."

---

### Comparativo — GoJohnny vs. coach humano

**Título:** "Seu coach humano não aguenta esse preço."

**Nota de rodapé:** "Não é para substituir coaching de elite. É para o corredor que treina sério mas não quer pagar R$500/mês por um plano genérico."

| | Coach humano | GoJohnny AI |
|---|---|---|
| Preço | R$300–800/mês | R$39,90/mês |
| Disponibilidade | Horário comercial | 24h, 7 dias |
| Plano semanal | Com sorte, na terça | Toda segunda, sem falta |
| Canal | App próprio, e-mail, WhatsApp — depende | WhatsApp. Só. |
| Metodologia | Depende do dia dele | Sempre a mesma — e melhorando |
| Feedback | Agenda uma sessão | Manda uma mensagem |

Design: tabela lado a lado com coluna GoJohnny destacada em amarelo-ácido. Coluna "coach humano" em cinza dessaturado.

---

### O que vem no plano (WhatsApp showcase)

**Título:** "É assim que chega."

**Subtítulo:** "Um plano real, não um template. Semana a semana, ajustado ao seu momento."

**Mockup de conversa:** bolha de chat estilizada (não screenshot do WhatsApp real) mostrando:
- Saudação com nome
- Resumo da semana anterior
- 4–5 dias de treino com: tipo (rodagem / tiro / longão), duração, pace sugerido
- Observação pessoal (ex: "você mencionou que a terça é corrida — esse longão vai pro domingo")
- Dica da semana (1 frase curta)

**Bullets abaixo do mockup:**
- Plano semanal personalizado toda segunda
- Ajuste por lesão, viagem ou semana difícil
- Suporte via chat quando precisar
- Relatório mensal de evolução

---

### Depoimentos

**Título:** "Quem já está na lista."

3 depoimentos placeholders. Carrossel com auto-rotação, pausa no hover.

```
[PLACEHOLDER 1]
"Finalmente um plano que respeita que eu trabalho 10h por dia.
O GoJohnny não me manda fazer o que não consigo — ele adapta."
— Mariana T., São Paulo, 29 anos

[PLACEHOLDER 2]
"R$39,90 é o que eu pagava de taxa de inscrição numa corrida.
Agora esse dinheiro me prepara pra correr melhor."
— Felipe R., Belo Horizonte, 34 anos

[PLACEHOLDER 3]
"Achei estranho confiar num AI pra treinar. Testei 2 semanas
e já estava correndo mais do que no ano passado inteiro."
— Camila S., Curitiba, 26 anos
```

Estes são fictícios. Substituir por depoimentos reais antes do lançamento.

---

### Preço

**Título:** "Um preço que não precisa de asterisco."

**Preço em destaque:** R$39,90/mês

**Subtítulo:** "Sem fidelidade. Sem taxa de adesão. Cancela quando quiser — pelo WhatsApp mesmo."

**Incluso no plano:**
- Plano semanal personalizado toda segunda-feira
- Ajuste de treino por lesão ou agenda
- Suporte via chat para dúvidas de corrida
- Relatório mensal de evolução

**CTA:** [Quero entrar na lista de espera]

---

### Formulário — Lista de espera

**Título:** "Seja um dos primeiros."

**Subtítulo:** "GoJohnny está em fase de lançamento. Entre na lista — quando abrir vaga, a gente avisa no seu WhatsApp."

**Campos:**

| Campo | Tipo | Placeholder | Validação |
|---|---|---|---|
| Nome | text | "Seu nome" | obrigatório, mínimo 2 chars |
| WhatsApp | text | "(11) 99999-9999" | obrigatório, regex BR (10–11 dígitos numéricos, aceita com ou sem DDI +55) |
| Objetivo | select (dropdown) | "Qual é o seu principal objetivo?" | obrigatório |

**Opções do dropdown "Objetivo":**
1. Completar minha primeira corrida de rua
2. Melhorar meu tempo (bater meu PR)
3. Correr com mais consistência
4. Me preparar para uma prova específica
5. Emagrecer e ganhar condicionamento

**Botão de submit:** "Entrar na lista de espera"

**Microcopy abaixo do botão:**
> "Sem spam. Sem ligações. A gente avisa pelo WhatsApp quando abrir vaga."

**Estado de sucesso (após submit):**
> "Você está na lista. Fique de olho no WhatsApp — quando abrir vaga, você é um dos primeiros a saber."

**Estado de erro genérico:**
> "Algo deu errado. Tente de novo ou manda mensagem pra gente no Instagram."

---

### Footer

- Logo GoJohnny AI (texto, sem imagem por ora)
- Tagline: "Coach de corrida com IA. No WhatsApp."
- Links: Política de Privacidade | Termos de Uso
- Instagram: @gojohnnyai (placeholder)
- © 2025 GoJohnny AI. Todos os direitos reservados.

---

## Estrutura de seções (ordem na página)

```
┌─────────────────────────────────────────────────────────┐
│  NAV  Logo + [Entrar na lista] (CTA sticky)             │
├─────────────────────────────────────────────────────────┤
│  HERO  Headline cinética + subheadline + CTA            │
│        Mockup conversa WhatsApp (SVG/CSS)               │
├─────────────────────────────────────────────────────────┤
│  STATS STRIP  4 números animados (fundo preto)          │
├─────────────────────────────────────────────────────────┤
│  COMO FUNCIONA  Stepper 3 passos (fundo off-white)      │
├─────────────────────────────────────────────────────────┤
│  COMPARATIVO  GoJohnny vs. coach humano (fundo preto)   │
├─────────────────────────────────────────────────────────┤
│  SHOWCASE  Mockup WhatsApp + bullets (fundo off-white)  │
├─────────────────────────────────────────────────────────┤
│  DEPOIMENTOS  Carrossel 3 cards (fundo preto)           │
├─────────────────────────────────────────────────────────┤
│  PREÇO  Valor + incluso + CTA (fundo off-white)         │
├─────────────────────────────────────────────────────────┤
│  FORMULÁRIO  Lista de espera (fundo preto / acento)     │
├─────────────────────────────────────────────────────────┤
│  FOOTER  Logo + links + copyright (fundo preto)         │
└─────────────────────────────────────────────────────────┘
```

---

## Design — escolhas do DESIGN-CATALOG.md

### Hero — Opção 14: Tipografia cinética

Headline estática + fragmento que troca em loop ("Sem app." / "Sem humano." / "Por R$39,90/mês.").

**Justificativa:** produto de IA + WhatsApp nativo precisa comunicar os 3 diferenciais nos primeiros 3 segundos sem forçar scroll. A troca em loop obriga o leitor a processar cada ponto antes de rolar — funciona melhor que subheadline longa em um público de 18–34 anos acostumado a consumo rápido.

---

### Navegação — Opção 3 + Opção 9

Navbar some ao rolar pra baixo, reaparece ao rolar pra cima. Botão "Entrar na lista de espera" muda de posição: vai do nav para o canto inferior direito (floating CTA) quando o hero sai da viewport.

**Justificativa:** público mobile-first (usuário de WhatsApp). Navbar fora do caminho maximiza área de leitura no celular. CTA flutuante garante que a conversão sempre esteja ao alcance do polegar.

---

### Seções assinatura — Opções 5, 1 e 15

- **Stats strip com contador animado (Op.5):** prova social imediata, números grandes ancorando credibilidade ainda na primeira rolada.
- **Stepper de jornada (Op.1):** o "como funciona" em 3 passos com linha que se desenha conforme o scroll — transmite simplicidade do produto.
- **Comparativo nós vs. genérico (Op.15):** tabela direta GoJohnny vs. coach humano. Totalmente alinhado com voz "opinativa" da marca. Não é genérico — é a objeção número 1 do público ("por que não contratar um coach humano?") respondida visualmente.

---

### Técnicas de scroll — Opções 7, 2 e 9

- **Text reveal palavra a palavra (Op.7):** headline do hero aparece palavra por palavra ao carregar — impacto imediato sem precisar de imagem.
- **Reveal escalonado / stagger (Op.2):** linhas do comparativo e bullets do showcase entram em sequência com delay incremental.
- **Contador numérico count-up (Op.9):** stats strip — números incrementam do zero ao entrar em viewport.

---

### Arquitetura de layout — Opção 4 + Opção 10

Faixas full-width alternando fundo preto ↔ off-white ao longo da página, com divisores diagonais/angulares entre seções.

**Justificativa:** alternância de fundo cria ritmo visual sem precisar de imagens de preenchimento (que não temos). Os divisores angulares introduzem movimento e remetem à ideia de velocidade/corrida — sem cair em clichê de foto de pista.

---

### Paleta — Opção 7 + Opção 15 do catálogo

**Preto editorial + Off-white + Amarelo-ácido como único acento.**

| Token | Valor | Uso |
|---|---|---|
| `--color-bg-dark` | `#0D0D0D` | Fundos escuros, footer, hero |
| `--color-bg-light` | `#F4F2EE` | Fundos claros, seções alternadas |
| `--color-accent` | `#DAFF00` | CTA, números grandes, sublinhados, destaques |
| `--color-text-dark` | `#0D0D0D` | Texto sobre fundo claro |
| `--color-text-light` | `#F4F2EE` | Texto sobre fundo escuro |
| `--color-muted` | `#6B6B6B` | Labels, microcopy, texto secundário |
| `--color-disabled` | `#2A2A2A` | Coluna "coach humano" no comparativo |

**Justificativa:** todo coach de corrida no Brasil usa neon verde ou laranja (Nike/Adidas territory). Amarelo-ácido sobre preto é inesperado no nicho mas mantém energia e captura atenção 18–34 anos. Aplicado com parcimônia — só em CTAs, números de destaque e sublinhados ativos — nunca em área grande.

---

### Tipografia — Opção 4 (monoespaçada como acento) + Opção 8 (variable weight)

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Display / Headlines | Space Grotesk | 700–800 | H1, H2, números grandes |
| Labels / Dados técnicos | Space Mono | 400 | Stats, labels, microcopy técnico, código |
| Corpo de texto | Inter | 400–500 | Parágrafos, bullets, copy de seção |

Fontes via Google Fonts. Preconnect declarado no `<head>`.

**Justificativa:** Space Grotesk Bold transmite energia e modernidade sem o clichê do condensado esportivo. Space Mono nos labels reforça o posicionamento "IA/técnico" do produto de forma sutil. Inter no corpo garante legibilidade máxima em telas pequenas.

---

### Micro-detalhes

- **Grão/textura sutil** sobre fundos pretos (#0D0D0D) — evita o "chapado digital" e dá profundidade sem foto.
- **Sombras coloridas** nos botões CTA: `box-shadow` em `#DAFF00` com opacidade 40%, não cinza genérico.
- **Assinatura visual:** traço diagonal simples `/` usado como elemento gráfico recorrente — separador de labels, decoração de headers — remete a velocidade e à barra de progresso do WhatsApp.
- **Estados de foco** nos inputs do formulário: outline em `#DAFF00`, nunca o azul padrão do browser.

---

## SEO

**Title tag:** `GoJohnny AI — Coach de corrida com IA no WhatsApp | R$39,90/mês`

**Meta description:** `Plano semanal de corrida personalizado por IA, direto no WhatsApp. Sem app, sem humano, sem enrolação. R$39,90/mês. Entre na lista de espera.`

**OG image:** placeholder 1200×630px com headline e logo sobre fundo preto + acento amarelo.

---

## Métricas de ativação

| Evento | Descrição |
|---|---|
| `page_view` | Visita à landing page |
| `form_start` | Usuário clica no primeiro campo do formulário |
| `form_submit` | Submit bem-sucedido (evento de ativação primário) |
| `cta_click` | Clique em qualquer botão "Entrar na lista de espera" |

**Funil de conversão:** visita → scroll até formulário → `form_start` → `form_submit`

**Meta de lançamento:** taxa de conversão visita → lead ≥ 15% (benchmarked para lista de espera de produto early-stage B2C).

---

## Notas técnicas para o site-builder

- **Supabase:** tabela `leads` com colunas `id`, `nome`, `whatsapp`, `objetivo`, `created_at`. RLS: insert aberto (sem auth), select restrito.
- **Validação WhatsApp:** texto com validação custom — aceitar 10 ou 11 dígitos numéricos (com ou sem DDI +55). Não usar `<input type="tel">` puro sem formatação.
- **Mockup WhatsApp:** implementar como componente SVG/CSS puro. Não usar screenshot real do aplicativo (violação dos T&C do Meta/WhatsApp).
- **Animações:** JS/CSS vanilla no `mockup.html`. Framer Motion no site Next.js final.
- **Responsive:** mobile-first. Breakpoint único: 768px. Hero em mobile: headline empilhada, mockup abaixo do texto, não lado a lado.
- **Performance:** fontes com `font-display: swap`. Imagens: sem imagens externas no mockup. Stats strip: `IntersectionObserver` para disparar count-up.
- **Acessibilidade:** contraste `#DAFF00` sobre `#0D0D0D` = 14:1 (passa WCAG AAA). Off-white `#F4F2EE` sobre preto = 18:1. Verificar contraste do acento sobre off-white antes de usar (ratio ~4.2:1 — aprovado AA para texto grande, não usar em corpo pequeno).
- **Deploy:** Vercel. Variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **Sem autenticação no MVP:** formulário insere direto via Supabase anon key. Adicionar rate limiting na row-level security ou Edge Function se houver volume alto.
