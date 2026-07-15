'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TONES = [
  {
    id: 'acolhedor',
    label: 'Acolhedor',
    desc: 'Motivação com gentileza',
    answer:
      'Entendo. Dia difícil acontece, e tudo bem não treinar hoje. Vamos ajustar a semana pra você não perder o ritmo — que tal uma rodagem leve amanhã, sem pressão?',
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

const TYPING_DELAY_MS = 900

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3.5 py-3 bg-[#1F2C34] rounded-[4px_12px_12px_12px] w-fit">
      <span className="typing-dot w-2 h-2 rounded-full bg-[#8FA98A]" />
      <span className="typing-dot w-2 h-2 rounded-full bg-[#8FA98A]" style={{ animationDelay: '0.2s' }} />
      <span className="typing-dot w-2 h-2 rounded-full bg-[#8FA98A]" style={{ animationDelay: '0.4s' }} />
    </div>
  )
}

function WaPreviewPanel({ displayedTone, isTyping }: { displayedTone: number; isTyping: boolean }) {
  const now = new Date()
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

  return (
    <div className="bg-[#0B141A] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
      {/* WA Header */}
      <div className="flex items-center gap-2.5 px-5 py-3.5 bg-[#0B141A] border-b border-white/[0.06]">
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-display font-bold text-text-dark text-[11px] shrink-0">
          GJ
        </div>
        <div>
          <div className="text-white text-[13px] font-semibold leading-none">GoJohnny AI</div>
          <div className="text-[#8FA98A] text-[11px] font-mono mt-0.5">
            {isTyping ? 'digitando...' : 'online'}
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        className="px-4 py-4 min-h-[200px] flex flex-col gap-3"
        style={{ background: 'linear-gradient(180deg, #0D1B22 0%, #0B141A 100%)' }}
      >
        {/* User message — right aligned */}
        <div className="flex justify-end">
          <div className="bg-[#005C4B] text-[#E9EDEF] px-3.5 py-2.5 rounded-[12px_4px_12px_12px]
            text-[13px] leading-[1.5] max-w-[85%]">
            Oi Johnny, não consegui treinar hoje, tive um dia difícil.
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[10px] text-[#8FA98A] font-mono">{timeStr}</span>
              {/* double checkmarks */}
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                <path d="M1 4L3.5 6.5L8.5 1" stroke="#53BDEB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 4L7.5 6.5L12.5 1" stroke="#53BDEB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Coach response — left aligned */}
        <div className="flex items-end gap-2">
          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center font-display font-bold text-text-dark text-[9px] shrink-0 mb-0.5">
            GJ
          </div>
          <AnimatePresence mode="wait">
            {isTyping ? (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.95 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                <TypingDots />
              </motion.div>
            ) : (
              <motion.div
                key={`response-${displayedTone}`}
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.26, ease: 'easeOut' }}
                className="bg-[#1F2C34] text-[#E9EDEF] px-3.5 py-2.5
                  rounded-[4px_12px_12px_12px] text-[13.5px] leading-[1.55] max-w-[85%]"
                aria-live="polite"
              >
                {TONES[displayedTone].answer}
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="text-[10px] text-[#8FA98A] font-mono">{timeStr}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default function ToneSelector() {
  const [selected, setSelected] = useState(0)
  const [displayedTone, setDisplayedTone] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const optRefs = useRef<(HTMLButtonElement | null)[]>([])
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSelect = (index: number) => {
    if (index === selected) return

    setSelected(index)

    // Cancel any pending transition
    if (typingTimer.current) clearTimeout(typingTimer.current)

    // Show typing indicator, then switch response
    setIsTyping(true)
    typingTimer.current = setTimeout(() => {
      setDisplayedTone(index)
      setIsTyping(false)
    }, TYPING_DELAY_MS)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current)
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      next = (index + 1) % TONES.length
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      next = (index + TONES.length - 1) % TONES.length
    } else {
      return
    }
    handleSelect(next)
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
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#C2410C] mb-4 block"
        >
          O que nenhum concorrente faz
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
          Outros apps de treino com IA te dão o mesmo plano genérico, não importa quem você é.
          O GoJohnny ajusta até o{' '}
          <strong className="text-text-dark">jeito de falar com você.</strong>{' '}
          Veja ao vivo:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.44, ease: 'easeOut', delay: 0.15 }}
          className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 items-start"
        >
          {/* Tone selector */}
          <div
            role="radiogroup"
            aria-label="Escolha o tom do coach"
            className="flex flex-col gap-3"
          >
            {TONES.map((tone, i) => (
              <button
                key={tone.id}
                ref={(el) => { optRefs.current[i] = el }}
                role="radio"
                aria-checked={selected === i}
                tabIndex={selected === i ? 0 : -1}
                onClick={() => handleSelect(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={[
                  'flex items-center gap-3 text-left px-[18px] py-4 rounded-[10px] cursor-pointer border-2',
                  'transition-[border-color,background,transform,box-shadow] duration-200',
                  selected === i
                    ? 'border-accent bg-[rgba(255,90,31,0.08)] shadow-[0_4px_16px_rgba(255,90,31,0.12)] translate-x-1'
                    : 'border-transparent bg-white hover:translate-x-1 hover:border-[#e0e0e0]',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
                ].join(' ')}
              >
                {/* Radio dot */}
                <span
                  className={[
                    'w-3.5 h-3.5 rounded-full border-2 shrink-0 relative transition-colors duration-200',
                    selected === i ? 'border-accent' : 'border-muted',
                  ].join(' ')}
                >
                  {selected === i && (
                    <motion.span
                      layoutId="radio-fill"
                      className="absolute inset-[2px] rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 600, damping: 35 }}
                    />
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
              Você escolhe o tom quando começa. Pode trocar quando quiser — direto no WhatsApp.
            </p>
          </div>

          {/* WhatsApp-style preview */}
          <WaPreviewPanel displayedTone={displayedTone} isTyping={isTyping} />
        </motion.div>
      </div>
    </section>
  )
}
