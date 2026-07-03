import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gojohnny-ai-site.vercel.app'
  ),
  title: 'GoJohnny AI — Coach de corrida com IA no WhatsApp | R$39,90/mês',
  description:
    'Plano semanal de corrida personalizado por IA, direto no WhatsApp. Sem app, sem humano, sem enrolação. R$39,90/mês. Entre na lista de espera.',
  keywords:
    'coach de corrida ia, treino de corrida whatsapp, plano de corrida personalizado, assessoria de corrida online, app de corrida com ia',
  openGraph: {
    title: 'GoJohnny AI — Coach de corrida com IA no WhatsApp | R$39,90/mês',
    description:
      'Plano semanal de corrida personalizado por IA, direto no WhatsApp. Sem app, sem humano, sem enrolação. R$39,90/mês. Entre na lista de espera.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoJohnny AI — Coach de corrida com IA no WhatsApp | R$39,90/mês',
    description:
      'Plano semanal de corrida personalizado por IA, direto no WhatsApp. Sem app, sem humano, sem enrolação. R$39,90/mês.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <body className="font-body bg-bg-dark text-text-dark overflow-x-hidden">{children}</body>
    </html>
  )
}
