'use client'

import { motion } from 'framer-motion'

const INCLUDES = [
  'Plano semanal personalizado toda segunda-feira',
  'Ajuste de treino por lesão ou agenda',
  'Suporte via chat para dúvidas de corrida',
  'Relatório mensal de evolução',
  'Escolha do tom do coach',
]

export default function Preco() {
  return (
    <section id="preco" className="bg-bg-light py-24">
      <div className="max-w-site mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
          className="font-display font-bold text-text-dark text-[clamp(28px,4vw,44px)] leading-[1.05] mb-10 text-center"
        >
          Um preço que não precisa de asterisco.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.48, ease: 'easeOut', delay: 0.1 }}
          className="max-w-[460px] mx-auto bg-white rounded-[20px] p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
        >
          <div className="font-display font-bold text-text-dark text-[52px] leading-none">
            R$39,90
            <span className="text-[18px] text-muted font-medium">/mês</span>
          </div>
          <p className="text-muted text-sm mt-3 leading-relaxed">
            Sem fidelidade. Sem taxa de adesão. Cancela quando quiser — pelo WhatsApp mesmo.
          </p>

          <ul className="list-none p-0 m-0 mt-7 mb-8 flex flex-col gap-3 text-left">
            {INCLUDES.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-text-dark">
                <span className="w-[18px] h-[18px] rounded-full bg-bg-dark flex items-center justify-center shrink-0 mt-[1px]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#FF5A1F"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#formulario"
            className="flex items-center justify-center gap-2 bg-accent text-text-dark font-display font-bold
              text-base px-7 py-4 rounded-[8px] no-underline w-full
              shadow-[0_8px_24px_rgba(255,90,31,0.25)] hover:scale-[1.03]
              hover:shadow-[0_12px_32px_rgba(255,90,31,0.4)]
              transition-[transform,box-shadow] duration-220
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[3px]"
          >
            Quero entrar na lista de espera
          </a>
        </motion.div>
      </div>
    </section>
  )
}
