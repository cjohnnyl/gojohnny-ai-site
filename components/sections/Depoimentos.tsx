'use client'

import { motion } from 'framer-motion'

const CARDS = [
  {
    quote:
      'Finalmente um plano que respeita que eu trabalho 10h por dia. O GoJohnny não me manda fazer o que não consigo — ele adapta.',
    name: 'Mariana T.',
    local: 'São Paulo, SP · 29 anos',
  },
  {
    quote:
      'R$39,90 é o que eu pagava de taxa de inscrição numa corrida. Agora esse dinheiro me prepara pra correr melhor.',
    name: 'Felipe R.',
    local: 'Belo Horizonte, MG · 34 anos',
  },
  {
    quote:
      'Achei estranho confiar num AI pra treinar. Testei 2 semanas e já estava correndo mais do que no ano passado inteiro.',
    name: 'Camila S.',
    local: 'Curitiba, PR · 26 anos',
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#DAFF00" aria-hidden="true">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.77l-3.09 1.74.59-3.44L2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-bg-dark py-24">
      <div className="max-w-site mx-auto px-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#888] mb-4 text-center block"
        >
          Depoimentos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.05 }}
          className="font-display font-bold text-text-light text-[clamp(28px,4vw,44px)] leading-[1.05] mb-3 text-center"
        >
          O que nossos primeiros atletas dizem.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.08 }}
          className="text-center text-muted text-sm mb-10 font-mono"
        >
          Produto em acesso antecipado — depoimentos serão publicados após o lançamento oficial.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.48, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-[#16181A] rounded-2xl border border-white/[0.06] px-7 py-7 flex flex-col
                hover:border-white/[0.12] transition-colors duration-300"
            >
              <StarRow />

              <blockquote className="flex-1 text-[#D0D0D0] text-[15px] leading-[1.7] mb-6 font-body not-italic">
                &ldquo;{card.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-display font-bold text-text-light text-sm">{card.name}</div>
                  <div className="text-muted text-[12px] font-mono mt-0.5">{card.local}</div>
                </div>
                {/* Ilustrativo badge */}
                <span
                  className="shrink-0 font-mono text-[10px] text-[#555] border border-[#2a2a2a]
                    px-2 py-1 rounded-md uppercase tracking-wider"
                  title="Este depoimento é ilustrativo — ainda não temos usuários reais"
                >
                  ilustrativo
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
