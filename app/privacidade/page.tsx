import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade — GoJohnny AI',
  description: 'Política de privacidade do GoJohnny AI.',
}

export default function PrivacidadePage() {
  return (
    <main className="bg-[#0D0D0D] text-[#F4F2EE] min-h-screen py-24">
      <div className="max-w-[800px] mx-auto px-5">
        <Link
          href="/"
          className="inline-block text-[#DAFF00] text-sm font-mono mb-8 hover:underline"
        >
          ← Voltar
        </Link>
        <h1 className="font-display font-bold text-4xl mb-6 text-[#F4F2EE]">
          Política de Privacidade
        </h1>
        <p className="text-[#6B6B6B] text-sm font-mono mb-8">
          Última atualização: Julho de 2026 — versão provisória (pendência pré-lançamento)
        </p>
        <div className="space-y-6 text-[#B8B8B8] leading-relaxed">
          <p>
            O GoJohnny AI coleta os seguintes dados pessoais via formulário de lista de espera:{' '}
            <strong className="text-[#F4F2EE]">nome</strong> e{' '}
            <strong className="text-[#F4F2EE]">número de WhatsApp</strong>.
          </p>
          <p>
            Esses dados são usados exclusivamente para notificar você sobre a abertura de vagas do
            GoJohnny AI. Não são compartilhados com terceiros, não são vendidos e não são usados
            para fins de marketing além do produto em questão.
          </p>
          <p>
            Os dados são armazenados de forma segura e você pode solicitar a exclusão a qualquer
            momento entrando em contato pelo e-mail{' '}
            <a
              href="mailto:contato@gojohnny.ai"
              className="text-[#DAFF00] hover:underline"
            >
              contato@gojohnny.ai
            </a>
            .
          </p>
          <p className="text-[#6B6B6B] text-sm italic">
            Esta é uma versão provisória da política de privacidade. Uma versão completa e revisada
            por advogado será publicada antes do lançamento oficial do produto.
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
