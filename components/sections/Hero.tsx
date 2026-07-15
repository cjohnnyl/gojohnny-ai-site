'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Image from 'next/image'
import HeroShowpiece from '@/components/three/HeroShowpiece'

const HERO_WORDS = 'Seu coach de corrida está no WhatsApp.'.split(' ')
const KINETIC_ITEMS = ['Com personalidade.', 'Sem app.', 'Sem humano.', 'Por R$39,90/mês.']

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
}
const wordVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.46, ease: 'easeOut' as const } },
}

function WaBubble({
  children,
  delayMs,
}: {
  children: React.ReactNode
  delayMs: number
}) {
  return (
    <div
      className="wa-bubble-animate bg-[#1F2C34] text-[#E9EDEF] px-3.5 py-3
        rounded-[4px_12px_12px_12px] text-[13.5px] leading-[1.5] max-w-[88%] mb-2.5"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

function WhatsAppMockup() {
  return (
    <div className="bg-[#0B141A] rounded-[20px] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-[380px] w-full mx-auto">
      <div className="flex items-center gap-2.5 pb-3.5 border-b border-white/[0.08] mb-3.5">
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-display font-bold text-text-dark text-xs shrink-0">
          GJ
        </div>
        <div>
          <div className="text-white text-sm font-semibold">GoJohnny AI</div>
          <div className="text-[#8FA98A] text-[11px] font-mono">online</div>
        </div>
      </div>
      <WaBubble delayMs={200}>Bom dia, João! Aqui está seu plano da semana 🏃</WaBubble>
      <WaBubble delayMs={700}>
        <strong className="text-accent">Segunda:</strong> rodagem 6km, pace 6:10/km
        <br />
        <strong className="text-accent">Quarta:</strong> tiros 8×400m
      </WaBubble>
      <WaBubble delayMs={1200}>
        Você mencionou que terça é corrida em grupo — movi seu longão pro domingo.
      </WaBubble>
    </div>
  )
}

export default function Hero() {
  const [kineticIndex, setKineticIndex] = useState(0)
  const mockupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setKineticIndex((i) => (i + 1) % KINETIC_ITEMS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!mockupRef.current) return
      const hero = document.getElementById('hero')
      if (!hero) return
      const y = window.scrollY
      if (y < hero.offsetHeight) {
        mockupRef.current.style.transform = `translateY(${y * 0.15}px)`
      }
    }
    const mq = window.matchMedia('(min-width: 768px)')
    if (mq.matches) {
      window.addEventListener('scroll', onScroll, { passive: true })
    }
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="bg-bg-dark min-h-screen flex items-center pt-[120px] pb-16 md:pb-24 relative"
    >
      <Image
        src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0"
        alt="Corredor em asfalto urbano, luz de início de manhã"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-bg-dark" />

      <div className="max-w-site mx-auto px-5 w-full relative z-10">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Text */}
          <div>
            <motion.h1
              className="font-display font-bold text-text-light text-[clamp(34px,5.4vw,62px)] leading-[1.05]"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              aria-label="Seu coach de corrida está no WhatsApp."
            >
              {HERO_WORDS.map((word, i) => (
                <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.25em]">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Kinetic loop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-4 font-display font-bold text-[clamp(20px,3vw,28px)] h-[1.4em] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={kineticIndex}
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: '-100%' }}
                  transition={{ duration: 0.42, ease: 'easeOut' }}
                  className="absolute inset-0 text-accent"
                >
                  {KINETIC_ITEMS[kineticIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.46, ease: 'easeOut' }}
              className="text-[#C9C9C9] text-lg max-w-[480px] mt-6 mb-8 leading-relaxed"
            >
              GoJohnny monta seu plano semanal de corrida com IA e manda direto no WhatsApp. Toda
              semana. Sem você precisar de mais um aplicativo.
            </motion.p>

            <motion.a
              href="#formulario"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.46, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 32px rgba(255,90,31,0.4)' }}
              className="inline-flex items-center gap-2 bg-accent text-text-dark font-display font-bold
                text-base px-7 py-4 rounded-[8px] no-underline shadow-[0_8px_24px_rgba(255,90,31,0.25)]
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[3px]"
            >
              Quero entrar na lista de espera
            </motion.a>
          </div>

          {/* Mockup + showpiece 3D — right column, desktop only */}
          <motion.div
            ref={mockupRef}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            className="hidden md:flex md:flex-col md:items-center md:gap-4"
          >
            <HeroShowpiece />
            <WhatsAppMockup />
          </motion.div>
        </div>

        {/* Mockup below text on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5, ease: 'easeOut' }}
          className="mt-12 md:hidden"
        >
          <WhatsAppMockup />
        </motion.div>
      </div>

      {/* Scroll cue — bouncing chevron at bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#555]">rolar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#555"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
