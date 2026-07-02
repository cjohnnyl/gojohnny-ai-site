# UX Plan — GoJohnny AI

## Jornada esperada

Visitante chega (tráfego pago/orgânico/indicação) sem saber ao certo o que é
GoJohnny AI. Ele já pode conhecer Pacer, AI Runner ou Zyla (ver
`market-research.md`) — a jornada precisa, nos primeiros segundos, sinalizar que
isto não é "mais um clone", sem nunca citar concorrentes pelo nome.

1. **Primeira impressão (0–5s):** hero resolve "o que é isso" via headline
   cinética + mockup de WhatsApp. Nenhuma explicação longa antes disso.
2. **Diferenciação (5–20s, stats strip + seletor de tom):** em vez de just
   provar volume ("1.200+ na lista"), a seção de seletor de tom deixa o
   visitante *experimentar* a personalidade do coach — é aqui que a jornada
   se separa de "só mais um app de treino por IA".
3. **Como funciona (stepper):** processo em 3 passos, remove incerteza de
   "como eu recebo isso".
4. **Quebra de objeção de preço (comparativo):** ataca a objeção real
   ("por que não contratar um coach humano" — validada pela pesquisa),
   não uma objeção contra concorrentes diretos (que têm o mesmo preço).
5. **Prova de produto (showcase WhatsApp):** mostra o artefato real que a
   pessoa vai receber — reduz abstração.
6. **Confiança (depoimentos):** sinalizados como placeholder fictício
   (produto pré-lançamento, sem depoimento real ainda — registrado como
   pendência explícita, não inventado como se fosse real, conforme
   `ui-patterns-social-proof`/`mailerlite-social-proof-landing-pages`).
7. **Conversão (preço + formulário):** CTA único repetido, formulário de
   3 campos.

## Ação principal e secundária

- **Principal:** submeter o formulário de lista de espera (evento `form_submit`).
- **Secundária:** nenhuma — deliberadamente não há CTA concorrente (ex.: "ver
  demo", "saiba mais") disputando atenção, conforme
  `lovable-landing-page-best-practices-2026` (1 CTA principal repetido).

## Ordem das seções, objetivo e CTA de cada uma

| # | Seção | Objetivo | CTA |
|---|---|---|---|
| 1 | Nav | Orientação + acesso rápido ao CTA | "Entrar na lista" (secundário até virar flutuante) |
| 2 | Hero | Resolver "o que é isso" em 5s | "Quero entrar na lista de espera" |
| 3 | Stats strip | Prova social agregada rápida | — |
| 4 | Seletor de tom (nova) | Demonstrar diferenciação real (personalidade) | — |
| 5 | Como funciona | Remover incerteza de processo | — |
| 6 | Comparativo | Quebrar objeção de preço vs. coach humano | "Quero entrar na lista de espera" |
| 7 | Showcase WhatsApp | Tornar o produto concreto | — |
| 8 | Depoimentos | Confiança (placeholder sinalizado) | — |
| 9 | Preço | Remover ambiguidade de custo | "Quero entrar na lista de espera" |
| 10 | Formulário | Conversão | "Entrar na lista de espera" |
| 11 | Footer | Navegação secundária, compliance | Links de política/termos |

## Pontos de confiança

- Preço explícito sem asterisco (objeção comum em produtos de assinatura).
- Comparativo transparente com números reais de mercado (validado na pesquisa
  — assessoria humana no patamar de R$300-800/mês é factual, não exagero).
- Ausência de promessa irreal ("evolução garantida", "sem lesão nunca") —
  copy deve manter tom "acolhedor mas firme", nunca hype vazio.
- Transparência de estágio: "lista de espera" é comunicado como tal, não
  disfarçado de produto já disponível.

## Quebra de objeções (da pesquisa de mercado)

| Objeção | Onde é respondida |
|---|---|
| "Já existe Pacer/AI Runner, isso é só mais um clone" (implícita — nunca dita) | Seletor de tom (seção 4) — mostra personalidade que nenhum concorrente comunica |
| "IA não entende minha rotina de verdade" | Stepper "Como funciona" (passo 2 explicita análise de histórico/objetivo/disponibilidade) |
| "Treino genérico pode me machucar" | Bullet de "ajuste por lesão, viagem ou semana difícil" no showcase — reforçado por dado real da pesquisa (55% dos corredores recreacionais com lesão recente) |
| "R$300-800/mês de coach humano é caro" | Comparativo (seção 6) |
| "Vou virar só mais um número" | Copy do coach com "observação pessoal" no mockup WhatsApp (showcase) |
| "É golpe/lista de espera fake" | Microcopy do formulário ("sem spam, sem ligações") + estado de sucesso específico |

## Comportamento mobile vs. desktop

- **Mobile (público é usuário nativo de WhatsApp, maioria do tráfego):**
  seções empilhadas, hero com mockup abaixo do texto (não lado a lado),
  seletor de tom vira toggle de toque em vez de slider arrastável, sem
  parallax, CTA flutuante sempre visível no canto inferior.
- **Desktop:** hero lado a lado, parallax leve no mockup do hero, hover
  states mais elaborados (cards, linhas do comparativo), navbar com
  indicador de seção ativa.

## Acessibilidade básica

- Contraste mínimo 4.5:1 em todo texto interativo (validado na paleta —
  ver `design-plan.md`).
- Todos os CTAs com texto descritivo (nunca só "clique aqui").
- Formulário com labels associados (`<label for>`), `type="tel"` no campo
  WhatsApp para teclado numérico mobile, mensagens de erro anunciadas via
  `aria-live` (ver `smashingmagazine-ux-contact-forms` e
  `ixdf-como-desenhar-formularios-ui-2026` na biblioteca cerebro).
- Seletor de tom (novo componente interativo) precisa de alternativa
  acessível: `role="radiogroup"` com 3 opções nomeadas, não só um slider
  visual sem semântica — usuário de teclado/screen reader deve conseguir
  trocar de posição e ouvir o texto correspondente.
- Sem animação que dependa só de `:hover` para revelar conteúdo essencial
  (tudo acessível também por foco/toque).
