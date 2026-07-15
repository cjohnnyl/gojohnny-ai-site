import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade — GoJohnny AI',
  description:
    'Política de privacidade do GoJohnny AI em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
}

export default function PrivacidadePage() {
  return (
    <main className="bg-[#0D0D0D] text-[#F4F2EE] min-h-screen py-24">
      <div className="max-w-[800px] mx-auto px-5">
        <Link
          href="/"
          className="inline-block text-[#FF5A1F] text-sm font-mono mb-8 hover:underline"
        >
          ← Voltar
        </Link>

        <h1 className="font-display font-bold text-4xl mb-3 text-[#F4F2EE]">
          Política de Privacidade
        </h1>
        <p className="text-[#6B6B6B] text-sm font-mono mb-12">
          Última atualização: julho de 2026 &mdash; versão 1.0
        </p>

        <div className="space-y-10 text-[#B8B8B8] leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              1. Quem somos (Controlador de dados)
            </h2>
            <p>
              O <strong className="text-[#F4F2EE]">GoJohnny AI</strong> é um serviço de coaching de
              corrida via inteligência artificial entregue pelo WhatsApp, operado pela equipe
              GoJohnny AI (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;). Para fins da Lei Geral de
              Proteção de Dados (LGPD — Lei nº 13.709/2018), somos o Controlador dos seus dados
              pessoais.
            </p>
            <p className="mt-3">
              Contato do responsável pelo tratamento:{' '}
              <a href="mailto:privacidade@gojohnny.ai" className="text-[#FF5A1F] hover:underline">
                privacidade@gojohnny.ai
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              2. Quais dados coletamos
            </h2>
            <p className="mb-3">
              Coletamos apenas os dados necessários para a prestação do serviço:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#F4F2EE]">Nome</strong> — fornecido no formulário de lista
                de espera.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Número de WhatsApp</strong> — fornecido no
                formulário de lista de espera e usado como canal de comunicação do serviço.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Dados de treinamento físico</strong> — após a
                ativação do serviço, você nos informa via WhatsApp informações como ritmo, distância,
                frequência de treinos, histórico de lesões e objetivos de corrida. Esses dados se
                enquadram na categoria de{' '}
                <strong className="text-[#F4F2EE]">dados de saúde</strong> e são tratados com
                proteção reforçada (art. 11 da LGPD).
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Dados de uso do serviço</strong> — logs de
                conversas no WhatsApp para personalização e melhoria do coaching, armazenados de
                forma segura.
              </li>
            </ul>
            <p className="mt-3 text-[#777] text-sm">
              Não coletamos integrações com aplicativos de corrida externos (ex.: Strava) na fase
              atual do produto.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              3. Para que usamos seus dados (Finalidade e base legal)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="text-left py-2 pr-4 text-[#F4F2EE] font-mono font-semibold">Finalidade</th>
                    <th className="text-left py-2 pr-4 text-[#F4F2EE] font-mono font-semibold">Base legal (LGPD)</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-[#1E1E1E]">
                    <td className="py-3 pr-4">Notificar sobre abertura de vagas (lista de espera)</td>
                    <td className="py-3">Consentimento (art. 7º, I)</td>
                  </tr>
                  <tr className="border-b border-[#1E1E1E]">
                    <td className="py-3 pr-4">Personalizar planos de corrida via IA</td>
                    <td className="py-3">Execução de contrato (art. 7º, V)</td>
                  </tr>
                  <tr className="border-b border-[#1E1E1E]">
                    <td className="py-3 pr-4">Tratamento de dados de saúde para coaching</td>
                    <td className="py-3">Consentimento específico para dados sensíveis (art. 11, I)</td>
                  </tr>
                  <tr className="border-b border-[#1E1E1E]">
                    <td className="py-3 pr-4">Cobrança e gestão da assinatura</td>
                    <td className="py-3">Execução de contrato (art. 7º, V)</td>
                  </tr>
                  <tr className="border-b border-[#1E1E1E]">
                    <td className="py-3 pr-4">Melhoria dos modelos de IA</td>
                    <td className="py-3">Legítimo interesse (art. 7º, IX), com dados pseudoanonimizados</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Cumprimento de obrigações legais</td>
                    <td className="py-3">Obrigação legal (art. 7º, II)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              4. Compartilhamento de dados
            </h2>
            <p className="mb-3">
              Não vendemos, não alugamos e não comercializamos seus dados pessoais. Compartilhamos
              apenas com os seguintes prestadores de serviço necessários para operar o GoJohnny AI:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#F4F2EE]">Meta Platforms (WhatsApp)</strong> — canal de
                comunicação do serviço. Sujeito à política de privacidade da Meta.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Supabase</strong> — banco de dados e
                infraestrutura de armazenamento seguro (servidores com certificação SOC 2).
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Processadores de pagamento</strong> — para
                gestão de assinaturas (a ser definido antes do lançamento), sujeitos a seus próprios
                termos de privacidade.
              </li>
            </ul>
            <p className="mt-3">
              Todos os parceiros são obrigados contratualmente a tratar seus dados de acordo com a
              LGPD e com nossas instruções.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              5. Transferência internacional de dados
            </h2>
            <p>
              Alguns de nossos prestadores de serviço (Meta/WhatsApp, Supabase) possuem servidores
              nos Estados Unidos. A transferência de dados para esses países ocorre com base nas
              cláusulas contratuais padrão adotadas pelos prestadores, garantindo nível de proteção
              equivalente ao exigido pela LGPD (art. 33).
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              6. Por quanto tempo guardamos seus dados
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Dados da lista de espera: até você solicitar exclusão ou até 24 meses após o
                cadastro, o que ocorrer primeiro.
              </li>
              <li>
                Dados de assinatura ativa: enquanto a assinatura estiver vigente, mais 5 anos após
                o encerramento (obrigação fiscal e legal).
              </li>
              <li>
                Dados de treino e conversas: enquanto a assinatura estiver ativa. Após cancelamento,
                serão excluídos em até 90 dias, salvo retenção legal.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              7. Seus direitos como titular (LGPD, art. 18)
            </h2>
            <p className="mb-3">
              Você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#F4F2EE]">Acesso</strong> — saber quais dados temos sobre
                você.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Correção</strong> — solicitar a atualização de
                dados incompletos, inexatos ou desatualizados.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Exclusão</strong> — pedir a eliminação dos seus
                dados (quando não houver obrigação legal de retenção).
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Portabilidade</strong> — receber seus dados em
                formato estruturado.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Revogação do consentimento</strong> — a qualquer
                momento, sem custo.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Oposição</strong> — se discordar do tratamento
                baseado em legítimo interesse.
              </li>
              <li>
                <strong className="text-[#F4F2EE]">Informação sobre compartilhamento</strong> —
                saber com quem seus dados são compartilhados.
              </li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer direito, envie e-mail para{' '}
              <a href="mailto:privacidade@gojohnny.ai" className="text-[#FF5A1F] hover:underline">
                privacidade@gojohnny.ai
              </a>{' '}
              com o assunto &ldquo;Direitos LGPD&rdquo;. Responderemos em até 15 dias úteis.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              8. Segurança dos dados
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
              autorizado, perda, alteração ou divulgação indevida. Isso inclui criptografia em
              trânsito (HTTPS/TLS), controle de acesso restrito e banco de dados com criptografia em
              repouso. Em caso de incidente de segurança que possa gerar risco ou dano a você,
              notificaremos a ANPD e os titulares afetados nos prazos legais.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              9. Cookies e rastreamento
            </h2>
            <p>
              O site institucional do GoJohnny AI utiliza cookies técnicos essenciais para
              funcionamento. Não utilizamos cookies de rastreamento para fins publicitários de
              terceiros. O formulário de lista de espera pode armazenar dados no banco de dados
              Supabase, conforme descrito nesta política.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              10. Dados de menores
            </h2>
            <p>
              O GoJohnny AI é destinado exclusivamente a pessoas com 18 anos ou mais. Não coletamos
              intencionalmente dados de menores de idade. Se identificarmos cadastro de menor,
              excluiremos os dados imediatamente.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              11. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta política periodicamente. Quando o fizermos, atualizaremos a
              data no topo deste documento. Alterações relevantes serão comunicadas a você via
              WhatsApp ou e-mail com antecedência razoável.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              12. Contato e reclamações
            </h2>
            <p>
              Para dúvidas, solicitações ou reclamações sobre o tratamento dos seus dados:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                E-mail:{' '}
                <a
                  href="mailto:privacidade@gojohnny.ai"
                  className="text-[#FF5A1F] hover:underline"
                >
                  privacidade@gojohnny.ai
                </a>
              </li>
            </ul>
            <p className="mt-3">
              Você também tem o direito de apresentar reclamação à Autoridade Nacional de Proteção
              de Dados (ANPD) em{' '}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5A1F] hover:underline"
              >
                www.gov.br/anpd
              </a>
              .
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-block bg-[#FF5A1F] text-[#0D0D0D] font-display font-bold text-sm px-6 py-3 rounded-lg hover:scale-[1.02] transition-transform text-center"
          >
            Voltar para o início
          </Link>
          <Link
            href="/termos"
            className="inline-block border border-[#333] text-[#B8B8B8] font-display text-sm px-6 py-3 rounded-lg hover:border-[#555] transition-colors text-center"
          >
            Ver Termos de Uso
          </Link>
        </div>
      </div>
    </main>
  )
}
