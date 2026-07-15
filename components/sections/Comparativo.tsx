'use client'

import { motion } from 'framer-motion'

const ROWS = [
  { attr: 'Preço', human: 'R$300–800/mês', gj: 'R$39,90/mês' },
  { attr: 'Disponibilidade', human: 'Horário comercial', gj: '24h, 7 dias' },
  { attr: 'Plano semanal', human: 'Com sorte, na terça', gj: 'Toda segunda, sem falta' },
  {
    attr: 'Canal',
    human: 'App próprio, e-mail, WhatsApp — depende',
    gj: 'WhatsApp. Só.',
  },
  { attr: 'Metodologia', human: 'Depende do dia dele', gj: 'Sempre a mesma — e melhorando' },
  { attr: 'Personalidade', human: 'Depende de quem calhou', gj: 'Você escolhe o tom' },
  { attr: 'Feedback', human: 'Agenda uma sessão', gj: 'Manda uma mensagem' },
]

export default function Comparativo() {
  return (
    <section id="comparativo" className="bg-bg-dark py-24">
      <div className="max-w-site mx-auto px-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-accent mb-4 block"
        >
          Comparativo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.05 }}
          className="font-display font-bold text-text-light text-[clamp(28px,4vw,44px)] leading-[1.05] mb-8"
        >
          Seu coach humano não aguenta esse preço.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.44, ease: 'easeOut', delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse text-[14.5px]">
            <thead>
              <tr>
                <th className="font-mono text-[12px] uppercase tracking-[0.04em] text-[#9a9a9a] px-[18px] py-4 text-left w-[22%]">
                  &nbsp;
                </th>
                <th className="font-mono text-[12px] uppercase tracking-[0.04em] text-[#9a9a9a] px-[18px] py-4 text-left">
                  Coach humano
                </th>
                <th className="font-mono text-[12px] uppercase tracking-[0.04em] text-accent px-[18px] py-4 text-left">
                  GoJohnny AI
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <motion.tr
                  key={row.attr}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.38, ease: 'easeOut', delay: i * 0.06 }}
                  className="border-b border-dashed border-white/[0.15] hover:bg-[rgba(255,90,31,0.06)] transition-colors duration-200"
                >
                  <td className="px-[18px] py-4 text-text-light font-medium text-[14px]">
                    {row.attr}
                  </td>
                  <td className="px-[18px] py-4 text-[#7a7a7a]">{row.human}</td>
                  <td className="px-[18px] py-4 text-accent font-semibold">{row.gj}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          className="mt-5 text-[#999] text-[13.5px] max-w-[560px] leading-relaxed"
        >
          Não é para substituir coaching de elite. É para o corredor que treina sério mas não quer
          pagar R$300–800/mês por um plano genérico.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 bg-accent text-text-dark font-display font-bold
              text-base px-7 py-4 rounded-[8px] no-underline shadow-[0_8px_24px_rgba(255,90,31,0.25)]
              hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(255,90,31,0.4)]
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
