'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ShoeMesh() {
  const group = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const onMove = (e: PointerEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return
    if (!reducedMotion.current) {
      g.rotation.y += delta * 0.35
    }
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, mouse.current.y * 0.15, 0.05)
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -mouse.current.x * 0.1, 0.05)
  })

  return (
    <group ref={group}>
      {/* Sola */}
      <mesh position={[0, -0.5, 0]}>
        <capsuleGeometry args={[0.55, 1.8, 4, 12]} />
        <meshBasicMaterial color="#FF5A1F" wireframe />
      </mesh>
      {/* Cabedal (arco) */}
      <mesh position={[0, 0.15, 0]} rotation={[0.15, 0, 0]}>
        <sphereGeometry args={[0.7, 12, 8, 0, Math.PI * 1.4]} />
        <meshBasicMaterial color="#FF5A1F" wireframe />
      </mesh>
      {/* Cadarços */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 0.45 + i * 0.18, 0.35 - i * 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.9, 6]} />
          <meshBasicMaterial color="#F5F3EE" wireframe />
        </mesh>
      ))}
    </group>
  )
}

export default function RunnerShoe3D() {
  const [inView, setInView] = useState(true)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.1,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className="w-full h-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ShoeMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
