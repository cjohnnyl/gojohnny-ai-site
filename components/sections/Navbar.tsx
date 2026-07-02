'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [showFloating, setShowFloating] = useState(false)
  const lastY = useRef(0)

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
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        style={{
          transition:
            'background 280ms ease, box-shadow 280ms ease, padding 280ms ease, transform 320ms ease',
        }}
        className={[
          'fixed top-0 left-0 right-0 z-50',
          solid
            ? 'bg-[rgba(13,13,13,0.92)] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-3.5'
            : 'bg-transparent py-5',
          hidden ? '-translate-y-full' : 'translate-y-0',
        ].join(' ')}
      >
        <nav className="max-w-site mx-auto px-5 flex items-center justify-between">
          <a
            href="#hero"
            className="font-display font-bold text-xl text-text-light no-underline leading-none"
          >
            GoJohnny<span className="text-accent">AI</span>
          </a>

          <ul className="hidden md:flex gap-7 list-none m-0 p-0">
            {[
              { href: '#como-funciona', label: 'Como funciona' },
              { href: '#comparativo', label: 'Comparativo' },
              { href: '#preco', label: 'Preço' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#ccc] no-underline text-sm font-mono relative pb-1
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:h-0.5 after:w-0 after:bg-accent
                    after:transition-all after:duration-200
                    hover:after:w-full hover:text-text-light transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#formulario"
            className="bg-accent text-text-dark font-mono font-bold text-[13px] px-[18px] py-[10px]
              rounded-md no-underline hover:scale-[1.03] transition-transform duration-200
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Entrar na lista
          </a>
        </nav>
      </header>

      <AnimatePresence>
        {showFloating && (
          <motion.a
            href="#formulario"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.26, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 bg-accent text-text-dark font-display font-bold
              text-[15px] px-6 py-4 rounded-lg shadow-[0_8px_24px_rgba(218,255,0,0.35)]
              hover:shadow-[0_12px_32px_rgba(218,255,0,0.5)] hover:scale-[1.03]
              transition-[transform,box-shadow] duration-220 no-underline flex items-center gap-2"
            aria-label="Quero entrar na lista de espera"
          >
            Quero entrar →
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
