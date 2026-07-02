'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'

interface StatItemProps {
  num: number
  decimal?: number
  suffix: string
  label: string
  isStatic?: boolean
  staticText?: string
  index: number
}

function StatItem({ num, decimal = 0, suffix, label, isStatic, staticText, index }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(isStatic ? (staticText ?? '') : '0')

  useEffect(() => {
    if (isStatic || !isInView) return

    const duration = 1400
    const start = performance.now()
    const target = num

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = target * eased
      setDisplay(value.toFixed(decimal) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, isStatic, num, decimal, suffix])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.42, ease: 'easeOut', delay: index * 0.08 }}
      className="text-center"
    >
      <div className="font-display font-bold text-accent text-[clamp(32px,4vw,48px)] leading-tight">
        {display}
      </div>
      <div className="font-mono text-xs text-[#B8B8B8] mt-2 lowercase">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="bg-bg-dark py-12">
      <div className="max-w-site mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem index={0} num={1200} suffix="+" label="corredores na lista" />
          <StatItem index={1} num={4.8} decimal={1} suffix=" ★" label="avaliação média (beta)" />
          <StatItem
            index={2}
            num={0}
            suffix=""
            label="para receber seu plano"
            isStatic
            staticText="< 5 min"
          />
          <StatItem
            index={3}
            num={0}
            suffix=""
            label="por mês, sem fidelidade"
            isStatic
            staticText="R$39,90"
          />
        </div>
      </div>
    </section>
  )
}
