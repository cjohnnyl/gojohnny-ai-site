'use client'

import { FormEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const OBJETIVOS = [
  'Completar minha primeira corrida de rua',
  'Melhorar meu tempo (bater meu PR)',
  'Correr com mais consistência',
  'Me preparar para uma prova específica',
  'Emagrecer e ganhar condicionamento',
]

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11)
  if (digits.length > 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  } else if (digits.length > 2) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }
  return digits
}

function validatePhone(value: string): boolean {
  const digits = value.replace(/\D/g, '').replace(/^55/, '')
  return digits.length === 10 || digits.length === 11
}

export default function Formulario() {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [objetivo, setObjetivo] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (nome.trim().length < 2) {
      newErrors.nome = 'Digite seu nome (mínimo 2 letras).'
    }
    if (!validatePhone(whatsapp)) {
      newErrors.whatsapp =
        'Confere esse número de WhatsApp — parece que faltou ou sobrou algum dígito.'
    }
    if (!objetivo) {
      newErrors.objetivo = 'Escolhe uma opção da lista.'
    }
    return newErrors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setFormState('loading')

    const rawPhone = whatsapp.replace(/\D/g, '')

    const { error } = await supabase.from('leads').insert({
      nome: nome.trim(),
      whatsapp: rawPhone,
      objetivo,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      setFormState('error')
    } else {
      setFormState('success')
    }
  }

  const baseInputClass = `
    w-full px-4 py-[14px] rounded-[8px] border bg-[#161616] text-white
    font-body text-[15px] transition-[outline,border-color] duration-150
    focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-[1px]
    focus:border-accent placeholder:text-[#555]
  `

  return (
    <section id="formulario" className="bg-bg-dark py-24">
      <div className="max-w-site mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
          className="font-display font-bold text-text-light text-[clamp(28px,4vw,44px)] leading-[1.05] mb-4 text-center"
        >
          Seja um dos primeiros.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: 'easeOut', delay: 0.06 }}
          className="text-[#B8B8B8] text-lg text-center max-w-[520px] mx-auto mb-12 leading-relaxed"
        >
          GoJohnny está em fase de lançamento. Entre na lista — quando abrir vaga, a gente avisa no
          seu WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.48, ease: 'easeOut', delay: 0.12 }}
          className="max-w-[480px] mx-auto"
        >
          {formState === 'success' ? (
            <div
              className="text-center p-6 rounded-[10px] bg-[rgba(255,90,31,0.1)] text-accent text-[15px] leading-relaxed"
              role="alert"
            >
              Você está na lista. Fique de olho no WhatsApp — quando abrir vaga, você é um dos
              primeiros a saber.
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Nome */}
              <div className="mb-[18px]">
                <label
                  htmlFor="nome"
                  className="block font-mono text-[12px] text-[#ccc] mb-2 uppercase tracking-wider"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  autoComplete="name"
                  disabled={formState === 'loading'}
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? 'nome-error' : undefined}
                  className={`${baseInputClass} ${errors.nome ? 'border-error' : 'border-[#333]'}`}
                />
                {errors.nome && (
                  <p id="nome-error" className="text-error text-[12.5px] mt-1.5" role="alert">
                    {errors.nome}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div className="mb-[18px]">
                <label
                  htmlFor="whatsapp"
                  className="block font-mono text-[12px] text-[#ccc] mb-2 uppercase tracking-wider"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
                  placeholder="(11) 99999-9999"
                  autoComplete="tel"
                  inputMode="numeric"
                  disabled={formState === 'loading'}
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                  className={`${baseInputClass} ${errors.whatsapp ? 'border-error' : 'border-[#333]'}`}
                />
                {errors.whatsapp && (
                  <p id="whatsapp-error" className="text-error text-[12.5px] mt-1.5" role="alert">
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Objetivo */}
              <div className="mb-[18px]">
                <label
                  htmlFor="objetivo"
                  className="block font-mono text-[12px] text-[#ccc] mb-2 uppercase tracking-wider"
                >
                  Objetivo principal
                </label>
                <select
                  id="objetivo"
                  name="objetivo"
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value)}
                  disabled={formState === 'loading'}
                  aria-invalid={!!errors.objetivo}
                  aria-describedby={errors.objetivo ? 'objetivo-error' : undefined}
                  className={`${baseInputClass} ${errors.objetivo ? 'border-error' : 'border-[#333]'} cursor-pointer`}
                >
                  <option value="">Qual é o seu principal objetivo?</option>
                  {OBJETIVOS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.objetivo && (
                  <p id="objetivo-error" className="text-error text-[12.5px] mt-1.5" role="alert">
                    {errors.objetivo}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-accent text-text-dark
                  font-display font-bold text-base px-7 py-4 rounded-[8px] mt-2
                  shadow-[0_8px_24px_rgba(255,90,31,0.25)] hover:scale-[1.02]
                  hover:shadow-[0_12px_32px_rgba(255,90,31,0.4)]
                  transition-[transform,box-shadow] duration-220 cursor-pointer
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {formState === 'loading' ? 'Enviando...' : 'Entrar na lista de espera'}
              </button>

              <p className="text-center text-[12.5px] text-[#888] mt-3.5" aria-live="polite">
                Sem spam. Sem ligações. A gente avisa pelo WhatsApp quando abrir vaga.
              </p>

              {formState === 'error' && (
                <div
                  className="mt-4 text-center p-5 rounded-[10px] bg-[rgba(255,77,77,0.1)] text-error text-[14.5px]"
                  role="alert"
                >
                  Algo deu errado. Tente de novo ou manda mensagem pra gente no Instagram.
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
