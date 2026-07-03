# Checkpoint — Site institucional GoJohnny AI

**Data:** 2026-07-02
**Status:** Publicado em produção, QA concluído, achados prioritários corrigidos e redeployados.

## Pipeline executado

1. `/site-plan gojohnny-ai` — pesquisa de mercado real (WebSearch), design/UX/copy
   fundamentados na biblioteca `cerebro`, mockup interativo validado (sintaxe/tags),
   `site-spec.md` + `brief-gojohnny-ai.yaml` gerados. Achado que mudou a estratégia:
   Pacer e AI Runner já ocupam "coach de corrida IA 100% WhatsApp" no mesmo preço
   (R$39,90/mês) — diferenciação reposicionada para personalidade do coach, via
   seção nova "seletor de tom" (adicionada ao `DESIGN-CATALOG.md` do site-motor).
2. Gate manual — usuário aprovou a spec ("pode executar").
3. `/site-builder gojohnny-ai` → `/orq` → `frontend` construiu o Next.js 14 completo
   (11 seções, TypeScript, Tailwind, Framer Motion, `@supabase/supabase-js`) —
   build e `tsc --noEmit` limpos.
4. Tabela `leads` criada diretamente no Supabase real "GoJohnny"
   (`ttkrewcsbyhmtoodjppc`, reaproveitado — decisão registrada para não duplicar
   custo de infra) com RLS correta desde a criação (insert público anon, sem
   policy de select).
5. GitHub CLI e Vercel CLI instalados nesta sessão (não existiam no ambiente).
   Usuário autenticou `gh auth login` interativamente. Repositório criado:
   `https://github.com/cjohnnyl/gojohnny-ai-site` (público, decisão do usuário).
6. Deploy de produção via `vercel --prod`: **https://gojohnny-ai-site.vercel.app**
   (env vars `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`
   configuradas no projeto Vercel, produção confirmada pelo usuário antes do deploy).
7. `qa` rodou smoke test da URL real + revisão de código — **aprovado com ressalvas**.
   Achados prioritários corrigidos na hora e redeployados:
   - `metadataBase` apontava para `https://gojohnny.ai` (domínio que não existe
     ainda) — quebrava preview de compartilhamento social (OG image/Twitter
     card). Corrigido para usar `NEXT_PUBLIC_SITE_URL` com fallback pra URL
     real da Vercel.
   - Stats ("1.200+ corredores na lista", "4.8 ★") exibidos sem indicação de
     que são números de lançamento/estimados — risco de propaganda enganosa
     pra produto pré-lançamento sem base de usuário confirmada. Adicionado
     disclaimer visível abaixo do stats strip.
   - `ToneSelector.tsx` tinha 3x `useRef` dentro de array literal, violando
     Rules of Hooks do React (funcionava, mas era dívida técnica real).
     Corrigido para `useRef<(HTMLButtonElement|null)[]>([])`.
   - Riscos menores registrados mas não corrigidos agora (backlog, não
     bloqueiam MVP): `console.error` expõe erro do Supabase no console do
     browser; formulário público sem rate limiting/CAPTCHA; menção a
     Instagram no erro genérico sem link direto.
   Segundo deploy: mesma URL (`vercel --prod` sobrescreve o alias de produção).

## Pendências herdadas da spec (não bloqueiam o deploy, mas precisam de dono antes do lançamento real)

- Substituir os 3 depoimentos placeholder por reais.
- Definir e preencher o número de WhatsApp oficial do produto (ver também
  pendência equivalente no projeto backend, `C:\Projetos\gojohnny-ai\` —
  instância Evolution "gojohnny" já criada, QR ainda não escaneado).
- Revisar/completar conteúdo de `/privacidade` e `/termos` (hoje placeholder).
- Gerar imagem de Open Graph definitiva (hoje via `next/og` dinâmico, funcional
  mas não validado visualmente).
- Next.js 14.2.29 tem advisory de segurança conhecido (dez/2025) — considerar
  upgrade para 14.2.30+ antes de tráfego real.
- Conectar o repositório GitHub ao projeto Vercel para deploy automático em
  push (a conexão automática falhou durante `vercel link`; hoje o deploy é
  manual via `vercel --prod`) — resolver via dashboard Vercel se for útil.

## Observação de ambiente (para sessões futuras)

`gh` e `vercel` CLI não existiam nesta máquina antes desta sessão — agora estão
instalados globalmente (`C:\Program Files\GitHub CLI\`, npm global). Autenticação
de ambos já configurada (`cjohnnyl` no GitHub, `johnnynfdor-5028` na Vercel) —
sessões futuras não devem precisar reinstalar nem reautenticar, só usar direto.
