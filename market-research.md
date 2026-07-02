# Pesquisa de mercado — GoJohnny AI

## Achado crítico: o posicionamento do brief original colide com concorrentes diretos

O `brief.md` original vende "sem app, sem humano, por WhatsApp, R$39,90/mês" como
diferencial de categoria. A pesquisa mostra que **isso já é a norma do nicho, não
uma novidade**:

| Produto | Canal | Preço mensal | Posicionamento |
|---|---|---|---|
| **Pacer** ([pacerrun.com](https://pacerrun.com/)) | 100% WhatsApp (app opcional, só pra ver gráficos) | R$39,90 (ou R$24,90/mês no anual) | "Coach de corrida com IA no WhatsApp" — acesso a Strava/Garmin, treino evolui com o atleta, trial de 14 dias |
| **AI Runner** ([airunner.com.br](https://airunner.com.br/)) | Onboarding por quiz no WhatsApp, treino diário no WhatsApp | "menos de R$1/dia" (~R$30/mês) | Treino diário no WhatsApp com motivação personalizada, ajuste automático por feedback, trial de 7 dias |
| **Zyla** ([zyla.fit](https://www.zyla.fit/)) | App (não WhatsApp-first) | R$39,90/mês (mesmo preço) | Foi de 200 a 84 mil alunos em 1 ano — [Exame](https://exame.com/negocios/com-ia-a-assessoria-de-corrida-deles-foi-de-200-a-84-mil-alunos-em-um-ano-e-agora-lidera-o-pais/). 90%+ da base vem do Wellhub (B2B via benefício corporativo), não aquisição direta B2C |
| **GoJohnny AI** (este projeto) | 100% WhatsApp | R$39,90/mês | Brief original: "sem app, sem humano" como diferencial único |

**Implicação direta para a spec:** "sem app, no WhatsApp, R$39,90" não é mais um
gancho defensável sozinho — é paridade de categoria com o Pacer, inclusive no preço
exato. Se o site vender isso como *o* diferencial, o visitante que já conhece Pacer
ou Zyla lê como "mais um clone". A landing page precisa puxar a diferenciação para
onde o brief já tem matéria-prima real e o Pacer/AI Runner não têm nome explícito:
**metodologia opinativa e leitura comportamental** (o `kb/` do GoJohnny já documenta
5 níveis de firmeza, leitura comportamental e memória de contexto — isso não aparece
no posicionamento público de nenhum concorrente pesquisado). Recomendação aplicada
nesta spec: manter preço e canal como estava (não é hora de mudar modelo de negócio
neste projeto — decisão de produto, não de site), mas **rebalancear o peso da copy**
do comparativo "GoJohnny vs. coach humano" (objeção que o Pacer também já resolve)
para um comparativo que também sinalize "não é só mais um WhatsApp bot de treino" —
ver seção de copy/comparativo revisada abaixo.

## Como o nicho se comunica (padrão observado nos 3 concorrentes diretos)

- Todos abrem com a promessa "treino personalizado, no WhatsApp, sem precisar de app".
- Todos oferecem trial gratuito (7–14 dias) — o GoJohnny AI está em pré-lançamento
  com lista de espera, então o equivalente aqui é reduzir fricção de entrada na
  lista (poucos campos, resposta imediata via WhatsApp confirmando a posição).
- Nenhum dos três é explícito sobre "metodologia com opinião" ou personalidade do
  coach — todos comunicam adaptação algorítmica genérica ("IA ajusta seu treino").
  Isso confirma que o ângulo de "coach com personalidade, não chatbot genérico" do
  brief original é o espaço em branco real do nicho.

## Dores e objeções do público (corredor recreativo brasileiro)

Fonte: [estudo SciELO sobre corredores recreacionais](https://www.scielo.br/j/rbfis/a/zHPpWL94SGkJSbLvgVx4RpP/?lang=pt)
e conteúdo de mercado (Sport Life, Ativo.com).

- **Lesão é a dor #1 real, não só motivação.** O estudo aponta 55% dos corredores
  recreacionais com histórico de lesão musculoesquelética nos últimos 12 meses
  (tendinopatias e lesões musculares as mais comuns), frequentemente associadas a
  volume/carga mal ajustados. Isso reforça o ângulo "ajuste de treino por lesão ou
  semana difícil" já presente no brief — deveria ganhar mais destaque, não ficar
  como um bullet secundário.
- **Objeção "app genérico que não entende minha rotina".** Conteúdo de mercado
  (Ativo.com, Sport Life) recorrentemente vende "app entende sua rotina" como gancho
  — competir nisso sozinho é replicar a mesma promessa de todo mundo.
  Consideração de registro (sono, dor, humor) aparece como diferencial mencionado
  em serviços do nicho — o GoJohnny já cobre isso via check-ins; vale deixar
  explícito na seção "como funciona".
- **Objeção de preço vs. assessoria tradicional** já está bem coberta no brief
  (comparativo R$300-800 vs R$39,90) — validado pelo mercado: assessoria presencial
  de corrida no Brasil (ex.: Pacefit, Runners Pacer) segue nesse patamar de preço,
  então o comparativo é factualmente correto, não exagero de copy.

## Elementos de confiança e conversão observados

Fonte: pesquisa sobre landing pages de waitlist SaaS 2026
([Flowjam](https://www.flowjam.com/blog/waitlist-landing-page-examples-10-high-converting-pre-launch-designs-how-to-build-yours),
[Waitlister](https://waitlister.me/growth-hub/guides/waitlist-landing-page-optimization-guide)).

- Página de waitlist de alta conversão = **1 CTA acima da dobra, sem nav competindo**,
  headline específica e orientada a resultado (não "o futuro de X").
  → Já alinhado com a escolha do brief (CTA sticky + headline cinética direta).
- Números reais de posição/fila ("você é o #154") convertem mais que "milhares já
  entraram". O brief atual usa "1.200+ corredores na lista" como stat estático —
  recomendação: manter o contador (é aceitável como prova social agregada), mas
  garantir que o texto de sucesso do formulário (já presente no brief) reforce
  posição/expectativa, não só confirmação genérica. O brief já faz isso bem
  ("você é um dos primeiros a saber").
- Formulário com poucos campos é decisivo — o brief já limita a 3 campos
  (nome, WhatsApp, objetivo), dentro do recomendado para não-B2B.
- Nav some no scroll + CTA flutuante = alinhado com "hide nav melhora conversão
  10-15%" encontrado na pesquisa.

## Fontes

- [Pacer — Coach de corrida com IA no WhatsApp](https://pacerrun.com/)
- [AI Runner — Treinos Personalizados para Evoluir na Corrida](https://airunner.com.br/)
- [Zyla — Assessoria de Corrida Movida por IA](https://www.zyla.fit/)
- [Exame — Com IA, a assessoria de corrida deles foi de 200 a 84 mil alunos em um ano](https://exame.com/negocios/com-ia-a-assessoria-de-corrida-deles-foi-de-200-a-84-mil-alunos-em-um-ano-e-agora-lidera-o-pais/)
- [SciELO — Perfil das características do treinamento e associação com lesões musculoesqueléticas em corredores recreacionais](https://www.scielo.br/j/rbfis/a/zHPpWL94SGkJSbLvgVx4RpP/?lang=pt)
- [Flowjam — Waitlist Landing Page Examples That Convert (2026)](https://www.flowjam.com/blog/waitlist-landing-page-examples-10-high-converting-pre-launch-designs-how-to-build-yours)
- [Waitlister — Waitlist Landing Page Optimization Guide](https://waitlister.me/growth-hub/guides/waitlist-landing-page-optimization-guide)
