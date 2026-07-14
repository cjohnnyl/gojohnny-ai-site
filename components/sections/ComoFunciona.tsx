'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

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
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      // Reveal do cabeçalho (header) — trigger simples, sem scrub.
      gsap.from('[data-header]', {
        opacity: 0,
        y: 12,
        duration: 0.42,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      // Scroll storytelling: desktop pina a seção e escrubba a timeline
      // (linha se desenha + cada etapa acende) junto com o scroll real —
      // mais controle de timing que IntersectionObserver/whileInView para
      // uma sequência de 3+ estágios.
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top+=80',
            end: '+=900',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })

        tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 1 })

        STEPS.forEach((_, i) => {
          tl.fromTo(
            stepRefs.current[i],
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, ease: 'power1.out', duration: 0.6 },
            i === 0 ? '<0.1' : '<0.5'
          ).fromTo(
            circleRefs.current[i],
            { borderColor: '#333' },
            { borderColor: 'rgba(218,255,0,0.4)', duration: 0.4 },
            '<'
          )
        })

        return () => {
          tl.kill()
        }
      })

      // Mobile: sem pin, reveal simples ao entrar na viewport (mais toque,
      // menos storytelling de scroll travado — ver ux-plan.md).
      mm.add('(max-width: 767px)', () => {
        gsap.set(lineRef.current, { scaleX: 1 })

        STEPS.forEach((_, i) => {
          gsap.set(circleRefs.current[i], { borderColor: 'rgba(218,255,0,0.4)' })
          gsap.from(stepRefs.current[i], {
            opacity: 0,
            y: 20,
            duration: 0.48,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: stepRefs.current[i],
              start: 'top 85%',
            },
          })
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="bg-bg-dark py-24 overflow-hidden"
    >
      <div className="max-w-site mx-auto px-5">
        <span
          data-header
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-accent mb-4 block"
        >
          Como funciona
        </span>

        <h2
          data-header
          className="font-display font-bold text-text-light text-[clamp(28px,4vw,44px)] leading-[1.05] mb-12"
        >
          Mais simples do que parece.
        </h2>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connecting line — desktop only, desenhada pela timeline do GSAP */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-[22px] left-[8%] right-[8%] h-[2px] origin-left"
            style={{
              background: 'linear-gradient(90deg, rgba(218,255,0,0.5) 0%, rgba(218,255,0,0.08) 100%)',
              transform: 'scaleX(0)',
            }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => {
                stepRefs.current[i] = el
              }}
              className="relative"
              style={{ opacity: 0 }}
            >
              <div
                ref={(el) => {
                  circleRefs.current[i] = el
                }}
                className="w-11 h-11 rounded-full border flex items-center justify-center mb-5 relative z-10 bg-[#1A1A1A]"
                style={{ borderColor: '#333' }}
              >
                <span className="font-mono font-bold text-accent text-sm">{step.num}</span>
              </div>
              <h3 className="font-display font-bold text-text-light text-xl mb-2.5">
                {step.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
