'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const RunnerShoe3D = dynamic(() => import('./RunnerShoe3D'), { ssr: false })

function ShoeFallbackSVG() {
  return (
    <svg
      viewBox="0 0 200 140"
      className="w-full h-full"
      aria-hidden="true"
      stroke="#FF5A1F"
      strokeWidth="1.5"
      fill="none"
    >
      <path d="M20 100 Q20 60 60 55 L140 40 Q170 40 175 70 Q178 95 150 100 L30 110 Q18 108 20 100 Z" />
      <line x1="70" y1="50" x2="65" y2="95" />
      <line x1="90" y1="47" x2="86" y2="98" />
      <line x1="110" y1="45" x2="107" y2="100" />
      <line x1="130" y1="43" x2="128" y2="101" />
    </svg>
  )
}

export default function HeroShowpiece() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <div className="w-[220px] h-[220px] md:w-[280px] md:h-[280px]" aria-hidden="true">
      {isDesktop ? <RunnerShoe3D /> : <ShoeFallbackSVG />}
    </div>
  )
}
