import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-dark pt-14 pb-8">
      <div className="max-w-site mx-auto px-5">
        <div className="flex flex-wrap justify-between items-start gap-6">
          {/* Brand */}
          <div>
            <a href="#hero" className="font-display font-bold text-xl text-text-light no-underline">
              GoJohnny<span className="text-accent">AI</span>
            </a>
            <p className="text-[#999] text-[13px] mt-2">Coach de corrida com IA. No WhatsApp.</p>
            <p className="text-[#777] text-[12px] max-w-[420px] mt-4 leading-relaxed">
              Seus dados (nome e WhatsApp) são usados só para te avisar sobre a lista de espera.
              Nunca compartilhados.{' '}
              <Link href="/privacidade" className="text-[#999] hover:text-accent transition-colors">
                Ver política de privacidade.
              </Link>
            </p>
          </div>

          {/* Links */}
          <ul className="list-none p-0 m-0 flex flex-wrap gap-5 text-[13px]">
            <li>
              <Link
                href="/privacidade"
                className="text-[#999] no-underline hover:text-accent transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                href="/termos"
                className="text-[#999] no-underline hover:text-accent transition-colors duration-200"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/gojohnnyai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] no-underline hover:text-accent transition-colors duration-200"
                aria-label="Instagram do GoJohnny AI"
              >
                @gojohnnyai
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-[12px] text-[#666] font-mono">
          © 2026 GoJohnny AI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
