'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TONES = [
  {
    id: 'acolhedor',
    label: 'Acolhedor',
    desc: 'Motivação com gentileza',
    answer:
      'Entendo. Dia difícil acontece, e tudo bem não treinar hoje. Vamos ajustar a semana pra você não perder o ritmo — que tal um rodagem leve amanhã, sem pressão?',
  },
  {
    id: 'direto',
    label: 'Direto',
    desc: 'Sem enrolação, sem drama',
    answer:
      'Beleza, anotado. Sem culpa — dia ruim é dia ruim. Amanhã a gente retoma: rodagem de 5km, pace tranquilo. Bora.',
  },
  {
    id: 'exigente',
    label: 'Exigente',
    desc: 'Cobra consistência',
    answer:
      'Tudo bem, um dia perdido não define a semana — mas não vira hábito. Amanhã o treino continua de pé, sem desconto. Te espero.',
  },
]

export default function ToneSelector() {
  const [selected, setSelected] = useState(0)
  const optRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      next = (index + 1) % TONES.length
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      next = (index + 2) % TONES.length
    } else {
      return
    }
    setSelected(next)
    optRefs.current[next]?.focus()
  }

  return (
    <section id="tom" className="bg-bg-light py-24">
      <div className="max-w-site mx-auto px-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#8a9c00] mb-4 block"
        >
          Diferencial real
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.05 }}
          className="font-display font-bold text-text-dark text-[clamp(28px,4vw,44px)] leading-[1.05] mb-4"
        >
          O GoJohnny tem personalidade. Escolhe a sua.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.1 }}
          className="text-muted text-lg max-w-[620px] mb-12 leading-relaxed"
        >
          A maioria dos apps de treino com IA te dá o mesmo plano genérico, não importa quem você
          é. O GoJohnny ajusta até o{' '}
          <strong className="text-text-dark">jeito de falar com você.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.44, ease: 'easeOut', delay: 0.15 }}
          className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start"
        >
          {/* Selector */}
          <div
            role="radiogroup"
            aria-label="Escolha o tom do coach"
            className="flex flex-col gap-3"
          >
            {TONES.map((tone, i) => (
              <button
                key={tone.id}
                ref={(el) => {
                  optRefs.current[i] = el
                }}
                role="radio"
                aria-checked={selected === i}
                tabIndex={selected === i ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={[
                  'flex items-center gap-3 text-left px-[18px] py-4 rounded-[10px] cursor-pointer border-2',
                  'transition-[border-color,background,transform] duration-200',
                  'hover:translate-x-1',
                  selected === i
                    ? 'border-accent bg-[rgba(218,255,0,0.08)]'
                    : 'border-transparent bg-white',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
                ].join(' ')}
              >
                {/* Radio dot */}
                <span
                  className={[
                    'w-3.5 h-3.5 rounded-full border-2 shrink-0 relative',
                    selected === i ? 'border-accent' : 'border-muted',
                  ].join(' ')}
                >
                  {selected === i && (
                    <span className="absolute inset-[2px] rounded-full bg-accent" />
                  )}
                </span>
                <span>
                  <strong className="block font-display font-bold text-text-dark text-base">
                    {tone.label}
                  </strong>
                  <span className="text-muted text-[13px]">{tone.desc}</span>
                </span>
              </button>
            ))}

            <p className="text-muted text-sm mt-4 leading-relaxed">
              Você escolhe o tom quando começa. Pode trocar quando quiser, direto no WhatsApp.
            </p>
          </div>

          {/* Preview panel */}
          <div className="bg-bg-dark rounded-2xl p-7 min-h-[220px] flex flex-col justify-center">
            <p className="font-mono text-[12px] text-[#8FA98A] mb-4">
              &ldquo;Oi Johnny, não consegui treinar hoje, tive um dia difícil.&rdquo;
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="text-text-light text-[17px] leading-[1.6]"
                aria-live="polite"
              >
                {TONES[selected].answer}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
