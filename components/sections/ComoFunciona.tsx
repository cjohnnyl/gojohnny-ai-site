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
          {/* Connecting line — desktop only, animates from left */}
          <motion.div
            className="hidden md:block absolute top-[22px] left-[8%] right-[8%] h-[2px]"
            style={{
              background: 'linear-gradient(90deg, rgba(218,255,0,0.5) 0%, rgba(218,255,0,0.08) 100%)',
              originX: 0,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.48, ease: 'easeOut', delay: i * 0.12 + 0.1 }}
              className="relative"
            >
              {/* Step number circle — accent border on whileInView */}
              <motion.div
                initial={{ borderColor: '#333', backgroundColor: '#1A1A1A' }}
                whileInView={{ borderColor: 'rgba(218,255,0,0.4)', backgroundColor: '#1A1A1A' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
                className="w-11 h-11 rounded-full border flex items-center justify-center mb-5 relative z-10"
              >
                <span className="font-mono font-bold text-accent text-sm">{step.num}</span>
              </motion.div>
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
