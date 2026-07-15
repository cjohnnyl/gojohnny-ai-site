'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona', sectionId: 'como-funciona' },
  { href: '#comparativo', label: 'Comparativo', sectionId: 'comparativo' },
  { href: '#preco', label: 'Preço', sectionId: 'preco' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [showFloating, setShowFloating] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastY = useRef(0)

  const headerRef = useRef<HTMLElement>(null)
  const pillRef = useRef<HTMLSpanElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const floatingRef = useRef<HTMLAnchorElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelLinkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const wasOpenRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 40)

      if (y > lastY.current && y > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = y

      const hero = document.getElementById('hero')
      if (hero) {
        setShowFloating(y > hero.offsetHeight * 0.8)
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0)

      const viewportThreshold = y + window.innerHeight * 0.35
      let current: string | null = null
      for (const { sectionId } of NAV_LINKS) {
        const el = document.getElementById(sectionId)
        if (el && el.offsetTop <= viewportThreshold) {
          current = sectionId
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useGSAP(() => {
    if (!headerRef.current) return
    gsap.to(headerRef.current, {
      backgroundColor: solid ? 'rgba(13,13,13,0.92)' : 'rgba(13,13,13,0)',
      paddingTop: solid ? 14 : 20,
      paddingBottom: solid ? 14 : 20,
      boxShadow: solid ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0)',
      duration: 0.28,
      ease: 'power2.out',
    })
  }, [solid])

  useGSAP(() => {
    if (!headerRef.current) return
    gsap.to(headerRef.current, {
      yPercent: hidden ? -100 : 0,
      duration: 0.32,
      ease: 'power2.inOut',
    })
  }, [hidden])

  useGSAP(() => {
    const index = NAV_LINKS.findIndex((l) => l.sectionId === activeSection)
    const pill = pillRef.current
    if (!pill) return

    if (index === -1) {
      gsap.to(pill, { autoAlpha: 0, duration: 0.2 })
      return
    }

    const link = linkRefs.current[index]
    const navList = link?.closest('ul')
    if (!link || !navList) return

    const linkRect = link.getBoundingClientRect()
    const navRect = navList.getBoundingClientRect()

    gsap.to(pill, {
      autoAlpha: 1,
      x: linkRect.left - navRect.left,
      width: linkRect.width,
      duration: 0.32,
      ease: 'power3.out',
    })
  }, [activeSection])

  useGSAP(() => {
    if (!floatingRef.current) return
    gsap.to(floatingRef.current, {
      autoAlpha: showFloating ? 1 : 0,
      y: showFloating ? 0 : 20,
      scale: showFloating ? 1 : 0.9,
      duration: 0.26,
      ease: 'power2.out',
      pointerEvents: showFloating ? 'auto' : 'none',
    })
  }, [showFloating])

  useGSAP(() => {
    if (!panelRef.current) return

    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      gsap.set(panelRef.current, { display: 'flex' })
      gsap.fromTo(panelRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.22, ease: 'power2.out' })
      gsap.fromTo(
        panelLinkRefs.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.34, ease: 'power2.out', stagger: 0.06, delay: 0.08 }
      )
      wasOpenRef.current = true
    } else if (wasOpenRef.current) {
      document.body.style.overflow = ''
      gsap.to(panelRef.current, {
        autoAlpha: 0,
        duration: 0.18,
        ease: 'power1.in',
        onComplete: () => gsap.set(panelRef.current, { display: 'none' }),
      })
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen || !panelRef.current) return
    const focusable = panelRef.current.querySelectorAll<HTMLElement>('a, button')
    focusable[0]?.focus()

    const onTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onTrap)
    return () => document.removeEventListener('keydown', onTrap)
  }, [mobileOpen])

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-accent pointer-events-none"
        style={{ width: `${scrollProgress}%`, transition: 'width 80ms linear' }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de leitura da página"
      />

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 py-5"
        style={{ backgroundColor: 'rgba(13,13,13,0)' }}
      >
        <nav className="max-w-site mx-auto px-5 flex items-center justify-between relative">
          <a
            href="#hero"
            className="font-display font-bold text-xl text-text-light no-underline leading-none"
          >
            GoJohnny<span className="text-accent">AI</span>
          </a>

          <ul className="hidden md:flex gap-7 list-none m-0 p-0 relative">
            <span
              ref={pillRef}
              className="absolute left-0 bottom-0 h-[2px] bg-accent rounded-full pointer-events-none"
              style={{ opacity: 0, width: 0 }}
            />
            {NAV_LINKS.map(({ href, label, sectionId }, i) => {
              const isActive = activeSection === sectionId
              return (
                <li key={href} className="relative pb-1">
                  <a
                    ref={(el) => {
                      linkRefs.current[i] = el
                    }}
                    href={href}
                    aria-current={isActive ? 'location' : undefined}
                    className={[
                      'text-sm font-mono no-underline transition-colors duration-200 block',
                      isActive ? 'text-text-light' : 'text-[#ccc] hover:text-text-light',
                    ].join(' ')}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <span
              className={`block h-[2px] w-6 bg-text-light transition-transform duration-200 ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-text-light transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-text-light transition-transform duration-200 ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>

          <a
            href="#formulario"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-text-dark font-mono font-bold text-[13px] px-[18px] py-[10px]
              rounded-md no-underline hover:scale-[1.03] transition-transform duration-200
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Entrar na lista
          </a>
        </nav>
      </header>

      <div
        ref={panelRef}
        id="mobile-menu-panel"
        className="fixed inset-0 z-[55] bg-bg-dark flex-col items-center justify-center gap-8 md:hidden"
        style={{ display: 'none', opacity: 0 }}
        onClick={(e) => {
          if (e.target === panelRef.current) setMobileOpen(false)
        }}
      >
        {NAV_LINKS.map(({ href, label }, i) => (
          <a
            key={href}
            ref={(el) => {
              panelLinkRefs.current[i] = el
            }}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="font-display font-bold text-text-light text-3xl no-underline"
          >
            {label}
          </a>
        ))}
        <a
          ref={(el) => {
            panelLinkRefs.current[NAV_LINKS.length] = el
          }}
          href="#formulario"
          onClick={() => setMobileOpen(false)}
          className="mt-4 bg-accent text-text-dark font-mono font-bold text-base px-7 py-3 rounded-md no-underline"
        >
          Entrar na lista
        </a>
      </div>

      <a
        ref={floatingRef}
        href="#formulario"
        className="fixed bottom-6 right-6 z-50 bg-accent text-text-dark font-display font-bold
          text-[15px] px-6 py-4 rounded-lg shadow-[0_8px_24px_rgba(255,90,31,0.35)]
          hover:shadow-[0_12px_32px_rgba(255,90,31,0.5)] hover:scale-[1.03]
          transition-[transform,box-shadow] duration-220 no-underline flex items-center gap-2"
        style={{ opacity: 0, pointerEvents: 'none' }}
        aria-label="Quero entrar na lista de espera"
      >
        Quero entrar →
      </a>
    </>
  )
}
