import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termos de Uso — GoJohnny AI',
  description: 'Termos de uso do GoJohnny AI.',
}

export default function TermosPage() {
  return (
    <main className="bg-[#0D0D0D] text-[#F4F2EE] min-h-screen py-24">
      <div className="max-w-[800px] mx-auto px-5">
        <Link
          href="/"
          className="inline-block text-[#DAFF00] text-sm font-mono mb-8 hover:underline"
        >
          ← Voltar
        </Link>
        <h1 className="font-display font-bold text-4xl mb-6 text-[#F4F2EE]">Termos de Uso</h1>
        <p className="text-[#6B6B6B] text-sm font-mono mb-8">
          Última atualização: Julho de 2026 — versão provisória (pendência pré-lançamento)
        </p>
        <div className="space-y-6 text-[#B8B8B8] leading-relaxed">
          <p>
            O GoJohnny AI é um serviço de coach de corrida via inteligência artificial entregue pelo
            WhatsApp, desenvolvido e operado pela equipe GoJohnny AI.
          </p>
          <p>
            Ao entrar na lista de espera, você concorda que seus dados (nome e WhatsApp) serão
            usados para comunicação relacionada ao produto. Não há compromisso de compra ou
            assinatura nesta etapa.
          </p>
          <p>
            O serviço é oferecido sem garantia de resultado específico. Recomendamos consultar um
            profissional de saúde antes de iniciar qualquer programa de treinamento físico.
          </p>
          <p className="text-[#6B6B6B] text-sm italic">
            Esta é uma versão provisória dos termos de uso. Uma versão completa e revisada por
            advogado será publicada antes do lançamento oficial do produto.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block mt-10 bg-[#DAFF00] text-[#0D0D0D] font-display font-bold text-sm px-6 py-3 rounded-lg hover:scale-[1.02] transition-transform"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  )
}
