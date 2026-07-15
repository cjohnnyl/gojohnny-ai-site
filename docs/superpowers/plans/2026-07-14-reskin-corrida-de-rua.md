# Reskin "Corrida de Rua" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reskin the GoJohnny AI institutional site (`site-motor/projetos/gojohnny-ai-landing/`) with a "corrida de rua" identity (asphalt + laranja sinalizador), a 3D showpiece in the hero, real running photos, and a richer GSAP-driven navigation (including a new mobile menu).

**Architecture:** Next.js 14 App Router, Tailwind CSS for styling, GSAP (+ `@gsap/react`'s `useGSAP`) for scroll/interaction animation (already the pattern established in `ComoFunciona.tsx`), React Three Fiber for the 3D hero showpiece (desktop-only, SVG fallback elsewhere), `next/image` for Unsplash photos. Framer Motion stays in the untouched sections (Stats, ToneSelector, Depoimentos, Comparativo body copy, Preco, Formulario) — this plan does not migrate those.

**Tech Stack:** Next.js 14.2.35, React 18.3, TypeScript, Tailwind CSS 3.4, GSAP 3.15 + `@gsap/react` 2.1, `three` + `@react-three/fiber` + `@react-three/drei` (new), Unsplash CDN images via `next/image`.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-14-reskin-corrida-de-rua-design.md` — every task below implements one of its sections; re-read it if a task's intent is unclear.
- New accent color is `#FF5A1F` (rgb `255,90,31`). Every existing raw hex `#DAFF00` / rgba `218,255,0` occurrence in `components/` must be replaced — there are no legitimate remaining uses of the old lime accent (the spec's mention of an "accent-legacy" WhatsApp badge was based on a wrong assumption; the WhatsApp "online" text actually uses `#8FA98A`, a different color, untouched by this plan).
- No test runner exists in this project (`package.json` has no `jest`/`vitest`/`playwright`). Verification for every task is: `npm run build` (type-check + production build must succeed) plus, where noted, a DOM/computed-style check via the dev server (same technique used to verify the earlier `ComoFunciona.tsx` GSAP refactor) or a visual check via the Browser pane. Do not introduce a test framework as part of this plan — out of scope.
- Sections explicitly out of scope (do not touch beyond the accent-color find/replace in Task 2): `ToneSelector.tsx` interaction logic, `Depoimentos.tsx`, `Formulario.tsx` validation logic, `Footer.tsx` structure.
- **Deviation from spec, noted here explicitly:** the spec's section 2 mentions `threecn.dev` (a shadcn-CLI registry) as the source for the 3D scene. This plan does **not** use it — `threecn.dev` requires an interactive CLI install step that can't be scripted reliably into a plan (registry contents/compatibility aren't verifiable ahead of time). Task 5 instead builds the wireframe shoe directly from primitive Three.js geometries (capsule + sphere + cylinders), which satisfies the spec's actual requirement ("tênis de corrida estilizado em wireframe/low-poly") with zero external registry dependency and full control over the exact look. If a future iteration wants a more detailed/realistic model, swapping `ShoeMesh` for a `threecn.dev` component or a GLTF import is a self-contained follow-up, not a blocker here.
- Two verified Unsplash photo URLs to use exactly as given (already checked for a live 200 response):
  - Hero background: `https://images.unsplash.com/photo-1581889470536-467bdbe30cd0` (Isaac Wendland — man running on gray asphalt road)
  - Showcase: `https://images.unsplash.com/photo-1480179087180-d9f0ec044897` (Filip Mroz — woman running wearing armband)
- Working directory for all commands: `site-motor/projetos/gojohnny-ai-landing/` (relative paths below are relative to this directory).

---

### Task 1: Palette tokens + asphalt texture

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: Tailwind color tokens `accent` (`#FF5A1F`, replaces the old `#DAFF00` value) and `accent-chalk` (`#F5F3EE`) — every later task that writes `text-accent`/`bg-accent`/`border-accent` gets the new color automatically; `accent-chalk` is available as `text-accent-chalk`/`bg-accent-chalk`.

- [ ] **Step 1: Update Tailwind color tokens**

Modify `tailwind.config.ts` — replace the `colors` block:

```ts
colors: {
  accent: '#FF5A1F',
  'accent-chalk': '#F5F3EE',
  'bg-dark': '#0D0D0D',
  'bg-light': '#F4F2EE',
  'text-dark': '#0D0D0D',
  'text-light': '#F4F2EE',
  muted: '#6B6B6B',
  disabled: '#2A2A2A',
  error: '#FF4D4D',
},
```

- [ ] **Step 2: Update CSS custom properties and add asphalt grain**

Modify `app/globals.css` — replace the `:root` block and the `body` rule:

```css
:root {
  --color-bg-dark: #0D0D0D;
  --color-bg-light: #F4F2EE;
  --color-accent: #FF5A1F;
  --color-accent-chalk: #F5F3EE;
  --color-text-dark: #0D0D0D;
  --color-text-light: #F4F2EE;
  --color-muted: #6B6B6B;
  --color-disabled: #2A2A2A;
  --color-error: #FF4D4D;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background-color: #0D0D0D;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
```

- [ ] **Step 3: Update the focus-visible outline color**

Modify `app/globals.css` — the `*:focus-visible` rule:

```css
*:focus-visible {
  outline: 2px solid #FF5A1F;
  outline-offset: 3px;
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: build completes with exit code 0, no TypeScript/lint errors. The site still uses `#DAFF00` elsewhere at this point (Task 2 handles that) — that's expected, this task only changes the token definitions.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: paleta asfalto+laranja sinalizador (tokens + grain de fundo)"
```

---

### Task 2: Propagate new accent color across existing components

**Files:**
- Modify: `components/sections/Comparativo.tsx:72,106,107`
- Modify: `components/sections/ComoFunciona.tsx:80,96,143`
- Modify: `components/sections/Preco.tsx:49,65,66`
- Modify: `components/sections/Depoimentos.tsx:30`
- Modify: `components/sections/Navbar.tsx:139,140`
- Modify: `components/sections/Formulario.tsx:123,226,227`
- Modify: `components/sections/Showcase.tsx:69`
- Modify: `components/sections/Hero.tsx:149,151`
- Modify: `components/sections/ToneSelector.tsx:175,229`

**Interfaces:**
- Consumes: `accent` Tailwind token from Task 1 (already propagates via `text-accent`/`bg-accent`/`border-accent` classes with no changes needed here — this task only fixes **raw hex/rgba values** that don't go through the Tailwind token).

Every occurrence of `218,255,0` (the RGB triplet for the old `#DAFF00` lime) becomes `255,90,31` (RGB for the new `#FF5A1F` orange), same alpha. Every raw `#DAFF00` becomes `#FF5A1F`. Two occurrences of `#8a9c00` (a manually darkened lime variant used for small caption text on light backgrounds, needing AA contrast) become `#C2410C` (a dark burnt orange with equivalent contrast on `#F4F2EE`).

- [ ] **Step 1: Comparativo.tsx**

Line 72, `hover:bg-[rgba(218,255,0,0.06)]` → `hover:bg-[rgba(255,90,31,0.06)]`:

```tsx
                  className="border-b border-white/[0.07] hover:bg-[rgba(255,90,31,0.06)] transition-colors duration-200"
```

Lines 106-107:

```tsx
              text-base px-7 py-4 rounded-[8px] no-underline shadow-[0_8px_24px_rgba(255,90,31,0.25)]
              hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(255,90,31,0.4)]
```

- [ ] **Step 2: ComoFunciona.tsx**

Line 80 (desktop timeline circle border target):

```tsx
            { borderColor: 'rgba(255,90,31,0.4)', duration: 0.4 },
```

Line 96 (mobile `gsap.set` circle border):

```tsx
          gsap.set(circleRefs.current[i], { borderColor: 'rgba(255,90,31,0.4)' })
```

Line 143 (connecting line gradient):

```tsx
              background: 'linear-gradient(90deg, rgba(255,90,31,0.5) 0%, rgba(255,90,31,0.08) 100%)',
```

- [ ] **Step 3: Preco.tsx**

Line 49 (checkmark SVG stroke):

```tsx
                      stroke="#FF5A1F"
```

Lines 65-66:

```tsx
              shadow-[0_8px_24px_rgba(255,90,31,0.25)] hover:scale-[1.03]
              hover:shadow-[0_12px_32px_rgba(255,90,31,0.4)]
```

- [ ] **Step 4: Depoimentos.tsx**

Line 30 (star fill):

```tsx
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FF5A1F" aria-hidden="true">
```

- [ ] **Step 5: Navbar.tsx**

Lines 139-140 (floating CTA shadow):

```tsx
              text-[15px] px-6 py-4 rounded-lg shadow-[0_8px_24px_rgba(255,90,31,0.35)]
              hover:shadow-[0_12px_32px_rgba(255,90,31,0.5)] hover:scale-[1.03]
```

(Note: this file gets fully rewritten in Task 8 — this edit is superseded there. Apply it now anyway so the site is visually correct between tasks if the plan is executed with review checkpoints.)

- [ ] **Step 6: Formulario.tsx**

Line 123 (success message background):

```tsx
              className="text-center p-6 rounded-[10px] bg-[rgba(255,90,31,0.1)] text-accent text-[15px] leading-relaxed"
```

Lines 226-227:

```tsx
                  shadow-[0_8px_24px_rgba(255,90,31,0.25)] hover:scale-[1.02]
                  hover:shadow-[0_12px_32px_rgba(255,90,31,0.4)]
```

- [ ] **Step 7: Showcase.tsx**

Line 69 (dark-accent caption on light background):

```tsx
              className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#C2410C] mb-4 block"
```

- [ ] **Step 8: Hero.tsx**

Line 149 (hover box-shadow):

```tsx
              whileHover={{ scale: 1.03, boxShadow: '0 12px 32px rgba(255,90,31,0.4)' }}
```

Line 151:

```tsx
                text-base px-7 py-4 rounded-[8px] no-underline shadow-[0_8px_24px_rgba(255,90,31,0.25)]
```

- [ ] **Step 9: ToneSelector.tsx**

Line 175 (dark-accent caption on light background):

```tsx
          className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#C2410C] mb-4 block"
```

Line 229:

```tsx
                    ? 'border-accent bg-[rgba(255,90,31,0.08)] shadow-[0_4px_16px_rgba(255,90,31,0.12)] translate-x-1'
```

- [ ] **Step 10: Verify no lime references remain**

Run: `grep -rn "218,255,0\|DAFF00\|8a9c00" components/`
Expected: no output (empty). If anything prints, fix that occurrence before continuing.

- [ ] **Step 11: Verify build**

Run: `npm run build`
Expected: exit code 0, no errors.

- [ ] **Step 12: Commit**

```bash
git add components/sections/Comparativo.tsx components/sections/ComoFunciona.tsx components/sections/Preco.tsx components/sections/Depoimentos.tsx components/sections/Navbar.tsx components/sections/Formulario.tsx components/sections/Showcase.tsx components/sections/Hero.tsx components/sections/ToneSelector.tsx
git commit -m "fix: propaga laranja sinalizador para hex/rgba crus (substitui lime legado)"
```

---

### Task 3: "Bib number" motif + dashed dividers

**Files:**
- Modify: `components/sections/Stats.tsx`
- Modify: `components/sections/ComoFunciona.tsx`
- Modify: `components/sections/Comparativo.tsx`

**Interfaces:**
- Consumes: `accent` token (Task 1), already-orange rgba values (Task 2).

- [ ] **Step 1: Stats.tsx — bordered "bib" card around each stat**

In `components/sections/Stats.tsx`, replace the returned `motion.div` of `StatItem`:

```tsx
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.42, ease: 'easeOut', delay: index * 0.08 }}
      className="text-center border border-white/10 rounded-[4px] px-3 py-4"
    >
      <div className="font-display font-bold text-accent text-[clamp(32px,4vw,48px)] leading-tight">
        {display}
      </div>
      <div className="font-mono text-xs text-[#B8B8B8] mt-2 lowercase">{label}</div>
    </motion.div>
  )
```

(Only the `className` on the outer `motion.div` changed — added `border border-white/10 rounded-[4px] px-3 py-4`.)

- [ ] **Step 2: ComoFunciona.tsx — squarer "bib tag" step circles**

In `components/sections/ComoFunciona.tsx`, find the step-number container div (inside the `STEPS.map` render) and change `rounded-full` to `rounded-[6px]`:

```tsx
              <div
                ref={(el) => {
                  circleRefs.current[i] = el
                }}
                className="w-11 h-11 rounded-[6px] border flex items-center justify-center mb-5 relative z-10 bg-[#1A1A1A]"
                style={{ borderColor: '#333' }}
              >
```

(Only `rounded-full` → `rounded-[6px]` changed.)

- [ ] **Step 3: Comparativo.tsx — dashed row dividers**

In `components/sections/Comparativo.tsx`, line 72 (already updated in Task 2 with the orange hover color) — apply the dashed-border change on top of it:

```tsx
                  className="border-b border-dashed border-white/[0.15] hover:bg-[rgba(255,90,31,0.06)] transition-colors duration-200"
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: exit code 0.

- [ ] **Step 5: Commit**

```bash
git add components/sections/Stats.tsx components/sections/ComoFunciona.tsx components/sections/Comparativo.tsx
git commit -m "feat: motivos de corrida (moldura bib number, divisores tracejados)"
```

---

### Task 4: Install 3D dependencies + Unsplash remote pattern

**Files:**
- Modify: `package.json`
- Modify: `next.config.js`

**Interfaces:**
- Produces: `three`, `@react-three/fiber`, `@react-three/drei` available as imports for Task 5. `next/image` can load `images.unsplash.com` URLs for Tasks 6-7.

- [ ] **Step 1: Install packages**

Run: `npm install three @react-three/fiber@^8 @react-three/drei@^9 && npm install -D @types/three`
Expected: exit code 0, `package.json`/`package-lock.json` updated with the four packages (three of them under `dependencies`, `@types/three` under `devDependencies`).

- [ ] **Step 2: Configure Unsplash remote pattern**

Modify `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: exit code 0. (No component imports the new packages yet — this just confirms install + config didn't break anything.)

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json next.config.js
git commit -m "chore: instala three/@react-three (hero 3D) e libera Unsplash em next/image"
```

---

### Task 5: RunnerShoe3D + HeroShowpiece components

**Files:**
- Create: `components/three/RunnerShoe3D.tsx`
- Create: `components/three/HeroShowpiece.tsx`

**Interfaces:**
- Produces: `HeroShowpiece` — a default-export React component, no props, self-contained (renders either the R3F canvas on desktop or an inline SVG fallback on mobile/SSR). Consumed by `Hero.tsx` in Task 6 as `<HeroShowpiece />`.
- Produces: `RunnerShoe3D` — default-export, no props, must only ever be imported via `next/dynamic({ ssr: false })` (uses `window`/`IntersectionObserver` at module-evaluation-adjacent scope inside effects, not safe for SSR).

- [ ] **Step 1: Create the R3F wireframe shoe scene**

Create `components/three/RunnerShoe3D.tsx`:

```tsx
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
```

- [ ] **Step 2: Create the responsive wrapper with SVG fallback**

Create `components/three/HeroShowpiece.tsx`:

```tsx
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
```

`isDesktop` starts `false` on both server and first client render (no `window` access during render, only in the effect), so SSR and initial hydration always agree on the SVG fallback — no hydration mismatch. It swaps to the R3F canvas after mount only when the viewport is actually `≥768px`.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: exit code 0. (Components exist but aren't imported anywhere yet — this confirms they type-check and compile standalone.)

- [ ] **Step 4: Commit**

```bash
git add components/three/RunnerShoe3D.tsx components/three/HeroShowpiece.tsx
git commit -m "feat: componente 3D do hero (tenis wireframe R3F + fallback SVG mobile)"
```

---

### Task 6: Hero.tsx — background photo + 3D showpiece

**Files:**
- Modify: `components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `HeroShowpiece` from `components/three/HeroShowpiece.tsx` (Task 5).

- [ ] **Step 1: Add imports**

In `components/sections/Hero.tsx`, add after the existing `import type { Variants } from 'framer-motion'` line:

```tsx
import Image from 'next/image'
import HeroShowpiece from '@/components/three/HeroShowpiece'
```

- [ ] **Step 2: Add background photo + overlay + showpiece**

In `components/sections/Hero.tsx`, the `<section id="hero" ...>` currently opens directly into `<div className="max-w-site mx-auto px-5 w-full">`. Insert the photo layer and overlay as the first children of the section, before that div:

```tsx
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

      <div className="max-w-site mx-auto px-5 w-full">
```

(The closing `</div>` for `max-w-site` and the rest of the section body are unchanged — only these two new elements are inserted before it. The section's `relative` class already present makes `Image fill` position correctly.)

- [ ] **Step 3: Place the showpiece next to the WhatsApp mockup**

In `components/sections/Hero.tsx`, find the desktop mockup block:

```tsx
          {/* Mockup — right column, desktop only */}
          <motion.div
            ref={mockupRef}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            className="hidden md:block"
          >
            <WhatsAppMockup />
          </motion.div>
```

Replace it with (adds the showpiece above the mockup, in the same column):

```tsx
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
```

(Kept mobile untouched — the showpiece is desktop-only per the spec, and `HeroShowpiece` itself also renders the SVG fallback if somehow mounted below 768px, so this is defense in depth, not a hard requirement.)

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: exit code 0. Watch for a Next.js image-domain error — if `next.config.js` from Task 4 wasn't applied yet, `next/image` throws `Invalid src prop... hostname "images.unsplash.com" is not configured`. If that happens, stop and confirm Task 4 was completed first.

- [ ] **Step 5: Start dev server and verify no console errors**

Use the project's preview tooling to start the dev server (`gojohnny-ai-landing` launch config) and load `/`. Confirm via console messages: zero errors. Confirm via a `javascript_tool` check that `document.querySelector('#hero img')` exists and `getComputedStyle` shows `opacity` matching the fallback SVG or 3D canvas is present under `.md\:flex` (viewport-dependent) — same technique used to verify `ComoFunciona.tsx` in the earlier session (checking DOM/computed styles when screenshots are unavailable).

- [ ] **Step 6: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: hero com foto de fundo Unsplash + showpiece 3D do tenis"
```

---

### Task 7: Showcase.tsx — photo integration

**Files:**
- Modify: `components/sections/Showcase.tsx`

- [ ] **Step 1: Add the import**

In `components/sections/Showcase.tsx`, add after `import { motion } from 'framer-motion'`:

```tsx
import Image from 'next/image'
```

- [ ] **Step 2: Add the photo as a third grid element**

The current grid is `grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-center` with two children (text side, mockup side). Change it to a 3-column grid on desktop with the photo between text and mockup. Replace the outer grid div's opening tag and insert the photo block between the two existing `motion.div`/text blocks:

```tsx
        <div className="grid md:grid-cols-[0.8fr_0.7fr_1fr] gap-10 items-center">
```

Then, immediately after the closing `</div>` of the text side block (the one containing the `span`, `h2`, `p`, and `ul`) and before the `{/* Mockup side */}` comment, insert:

```tsx
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.46, ease: 'easeOut', delay: 0.1 }}
            className="hidden md:block relative rounded-2xl overflow-hidden aspect-[3/4]"
          >
            <Image
              src="https://images.unsplash.com/photo-1480179087180-d9f0ec044897"
              alt="Corredora consultando o celular durante o treino"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </motion.div>
```

(Hidden below `md` — on mobile the section keeps its current 2-block stacked layout, since the 3-column grid only applies at `md:`.)

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: exit code 0.

- [ ] **Step 4: Verify layout doesn't break on mobile**

Start the dev server, resize the Browser pane to the `mobile` preset, load `/#showcase`, and confirm via `get_page_text`/`read_page` that the section still renders the bullet list and mockup without layout overflow (the photo `motion.div` has `hidden md:block`, so it should not render/occupy space below `768px`).

- [ ] **Step 5: Commit**

```bash
git add components/sections/Showcase.tsx
git commit -m "feat: foto Unsplash na secao Showcase (desktop)"
```

---

### Task 8: Navbar.tsx — GSAP refactor + mobile menu

**Files:**
- Modify: `components/sections/Navbar.tsx` (full rewrite)

**Interfaces:**
- Consumes: `gsap`, `useGSAP` (already dependencies since the `ComoFunciona.tsx` refactor).
- Produces: no new exports beyond the existing default `Navbar` component — same public usage (`<Navbar />` in `app/page.tsx`, unchanged).

This task replaces the whole file. The previous version used Framer Motion (`motion`, `AnimatePresence`, `layoutId`) for the active-section pill and the floating CTA, and inline CSS `transition` for the solid/hidden header states, with no mobile navigation at all. This version drives all of that through GSAP (consistent with `ComoFunciona.tsx`) and adds a fullscreen mobile menu.

- [ ] **Step 1: Replace the whole file**

Replace all of `components/sections/Navbar.tsx` with:

```tsx
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
```

Note the CTA button `bg-accent text-text-dark ... rounded-md` gained `hidden md:inline-flex` — on mobile it's replaced by the hamburger + the same CTA repeated inside the fullscreen panel, avoiding two competing CTAs in a cramped top bar.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: exit code 0. Watch specifically for "Module not found" on `framer-motion` imports removed from this file — there should be none left, since this file no longer imports `motion`/`AnimatePresence`.

- [ ] **Step 3: Verify desktop nav behavior via dev server**

Start the dev server, load `/`, and via `javascript_tool`:

```js
(() => {
  const header = document.querySelector('header')
  const before = getComputedStyle(header).backgroundColor
  window.dispatchEvent(new Event('scroll'))
  return JSON.stringify({ before })
})()
```

Confirm no console errors after load and after scrolling (use `read_console_messages`).

- [ ] **Step 4: Verify mobile menu via dev server**

Resize the Browser pane to the `mobile` preset. Use `find`/`computer` to click the hamburger button (`aria-label="Abrir menu"`). Confirm via `read_page` that `#mobile-menu-panel` becomes visible with the 4 links, then click a link and confirm the panel closes (`aria-label` on the button switches back to `"Abrir menu"`).

- [ ] **Step 5: Commit**

```bash
git add components/sections/Navbar.tsx
git commit -m "feat: nav desktop via GSAP + menu mobile hamburguer novo"
```

---

### Task 9: Final verification and push

**Files:** none (verification only)

- [ ] **Step 1: Full production build**

Run: `npm run build`
Expected: exit code 0, no warnings about missing image domains, no TypeScript errors.

- [ ] **Step 2: Full grep sanity check**

Run: `grep -rn "218,255,0\|DAFF00" components/ app/`
Expected: no output.

- [ ] **Step 3: Visual pass on dev server**

Start the dev server (`gojohnny-ai-landing` launch config), load `/`, and take a screenshot (or, if the Browser pane's screenshot capture is unavailable as it was in the previous session, fall back to `get_page_text` + `read_console_messages` + targeted `javascript_tool` computed-style checks). Confirm:
- Hero shows the background photo + orange accent CTA + 3D showpiece (desktop) or SVG fallback (mobile, via `resize_window` preset `mobile`).
- Showcase shows the new photo on desktop, hidden on mobile.
- Nav: shrink-on-scroll, active pill, mobile hamburger menu all functional.
- No console errors, no failed network requests (`read_network_requests`, filter for 4xx/5xx, especially on the Unsplash image URLs).

- [ ] **Step 4: Push**

```bash
git push origin master
```

Confirm the user wants this pushed before running — this repeats the same confirmation step taken for the earlier `ComoFunciona.tsx` push (production branch, no auto-deploy configured, so this only updates GitHub, not the live site — mention that to the user, same as last time).
