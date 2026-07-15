'use client'

import { motion } from 'framer-motion'

const BULLETS = [
  'Plano semanal personalizado toda segunda',
  'Ajuste por lesão, viagem ou semana difícil',
  'Suporte via chat quando precisar',
  'Relatório mensal de evolução',
]

function ShowcaseMockup() {
  return (
    <div className="bg-[#0B141A] rounded-[20px] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.35)] max-w-[340px] w-full mx-auto">
      <div className="flex items-center gap-2.5 pb-3.5 border-b border-white/[0.08] mb-3.5">
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-display font-bold text-text-dark text-xs shrink-0">
          GJ
        </div>
        <div>
          <div className="text-white text-sm font-semibold">GoJohnny AI</div>
          <div className="text-[#8FA98A] text-[11px] font-mono">online</div>
        </div>
      </div>
      {[
        {
          content: <>Semana passada: 3 de 3 treinos concluídos 🔥</>,
          delay: '150ms',
        },
        {
          content: (
            <>
              <strong className="text-accent">Quinta:</strong> tiro 6×800m, pace 5:20
              <br />
              <strong className="text-accent">Sábado:</strong> longão 12km
            </>
          ),
          delay: '500ms',
        },
        {
          content: <>Dica da semana: hidrate 500ml 2h antes do longão.</>,
          delay: '850ms',
        },
      ].map((bubble, i) => (
        <div
          key={i}
          className="wa-bubble-animate bg-[#1F2C34] text-[#E9EDEF] px-3.5 py-3
            rounded-[4px_12px_12px_12px] text-[13.5px] leading-[1.5] max-w-[88%] mb-2.5"
          style={{ animationDelay: bubble.delay }}
        >
          {bubble.content}
        </div>
      ))}
    </div>
  )
}

export default function Showcase() {
  return (
    <section id="showcase" className="bg-bg-light py-24">
      <div className="max-w-site mx-auto px-5">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          {/* Text side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#C2410C] mb-4 block"
            >
              Na prática
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, ease: 'easeOut', delay: 0.05 }}
              className="font-display font-bold text-text-dark text-[clamp(28px,4vw,44px)] leading-[1.05] mb-4"
            >
              É assim que chega.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, ease: 'easeOut', delay: 0.08 }}
              className="text-muted text-lg mb-8 leading-relaxed max-w-[440px]"
            >
              Um plano real, não um template. Semana a semana, ajustado ao seu momento.
            </motion.p>

            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {BULLETS.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.08 }}
                  className="flex gap-3 text-[15px] text-text-dark items-start"
                >
                  <span className="text-accent font-display font-bold text-lg leading-[1.3] shrink-0">
                    /
                  </span>
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mockup side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <ShowcaseMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
