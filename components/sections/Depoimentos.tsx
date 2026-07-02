'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    text: 'Finalmente um plano que respeita que eu trabalho 10h por dia. O GoJohnny não me manda fazer o que não consigo — ele adapta.',
    author: 'Mariana T., São Paulo, 29 anos',
  },
  {
    text: 'R$39,90 é o que eu pagava de taxa de inscrição numa corrida. Agora esse dinheiro me prepara pra correr melhor.',
    author: 'Felipe R., Belo Horizonte, 34 anos',
  },
  {
    text: 'Achei estranho confiar num AI pra treinar. Testei 2 semanas e já estava correndo mais do que no ano passado inteiro.',
    author: 'Camila S., Curitiba, 26 anos',
  },
]

export default function Depoimentos() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  const goTo = (index: number) => {
    setCurrent(index)
  }

  const next = () => goTo((current + 1) % TESTIMONIALS.length)

  const startTimer = () => {
    stopTimer()
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 4500)
  }

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  useEffect(() => {
    startTimer()
    return stopTimer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goTo((current + 1) % TESTIMONIALS.length)
      } else {
        goTo((current + TESTIMONIALS.length - 1) % TESTIMONIALS.length)
      }
    }
  }

  return (
    <section id="depoimentos" className="bg-bg-dark py-24">
      <div className="max-w-site mx-auto px-5">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-accent mb-4 text-center block"
        >
          Confiança
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.05 }}
          className="font-display font-bold text-text-light text-[clamp(28px,4vw,44px)] leading-[1.05] mb-3 text-center"
        >
          Quem já está na lista.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.38, ease: 'easeOut', delay: 0.1 }}
          className="text-center text-[#888] text-xs font-mono mb-10"
        >
          *depoimentos ilustrativos — produto em pré-lançamento, substituir por reais antes do
          go-live
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.44, ease: 'easeOut', delay: 0.15 }}
          className="max-w-[640px] mx-auto"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[ease]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="min-w-full p-1">
                  <div className="bg-[#16181A] rounded-2xl p-8 border border-white/[0.06]">
                    <p className="text-[#E4E4E4] text-base leading-[1.7] mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <footer className="font-mono text-[12.5px] text-accent">{t.author}</footer>
                    <span className="font-mono text-[10.5px] text-[#777] mt-1.5 block">
                      depoimento ilustrativo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-5" role="tablist" aria-label="Depoimentos">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Depoimento ${i + 1}`}
                onClick={() => { goTo(i); stopTimer(); startTimer() }}
                className={[
                  'h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-200',
                  i === current ? 'bg-accent w-[22px]' : 'bg-[#444] w-2',
                ].join(' ')}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
