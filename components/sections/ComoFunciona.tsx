'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Você assina',
    body: 'Entra na lista, escolhe o plano e responde 5 perguntas sobre sua rotina de corrida. Tudo pelo WhatsApp.',
  },
  {
    num: '02',
    title: 'A IA monta seu treino',
    body: 'GoJohnny analisa seu histórico, objetivo e disponibilidade. Não é chatbot genérico — é metodologia de corrida com opinião.',
  },
  {
    num: '03',
    title: 'Recebe e corre',
    body: 'Toda segunda-feira, seu plano chega no WhatsApp. Sem lembrete, sem app pra abrir, sem desculpa.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-bg-dark py-24">
      <div className="max-w-site mx-auto px-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-accent mb-4 block"
        >
          Como funciona
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.05 }}
          className="font-display font-bold text-text-light text-[clamp(28px,4vw,44px)] leading-[1.05] mb-12"
        >
          Mais simples do que parece.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[22px] left-[8%] right-[8%] h-[2px] bg-[#222]" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, ease: 'easeOut', delay: i * 0.08 }}
              className="relative"
            >
              <div
                className="w-11 h-11 rounded-full bg-[#1A1A1A] border border-[#333] text-accent
                  font-mono font-bold flex items-center justify-center mb-5 relative z-10"
              >
                {step.num}
              </div>
              <h3 className="font-display font-bold text-text-light text-xl mb-2.5">
                {step.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
