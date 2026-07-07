'use client'

import { motion } from 'framer-motion'

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
          className="font-display font-bold text-text-light text-[clamp(28px,4vw,44px)] leading-[1.05] mb-6 text-center"
        >
          O que nossos atletas dizem.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.44, ease: 'easeOut', delay: 0.1 }}
          className="max-w-[560px] mx-auto"
        >
          <div className="bg-[#16181A] rounded-2xl border border-white/[0.06] px-8 py-12 text-center">
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="font-display font-bold text-[#F4F2EE] text-lg mb-2">
              Em breve depoimentos reais de atletas.
            </p>
            <p className="text-[#666] text-sm font-mono leading-relaxed">
              Estamos no período de acesso antecipado.<br />
              Os primeiros relatos serão publicados após o lançamento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
