import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termos de Uso — GoJohnny AI',
  description:
    'Termos de uso do GoJohnny AI — serviço de coaching de corrida via inteligência artificial entregue pelo WhatsApp.',
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

        <h1 className="font-display font-bold text-4xl mb-3 text-[#F4F2EE]">
          Termos de Uso
        </h1>
        <p className="text-[#6B6B6B] text-sm font-mono mb-12">
          Última atualização: julho de 2026 &mdash; versão 1.0
        </p>

        <div className="space-y-10 text-[#B8B8B8] leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao acessar o site do <strong className="text-[#F4F2EE]">GoJohnny AI</strong>, entrar
              na lista de espera ou utilizar qualquer funcionalidade do serviço, você declara que
              leu, compreendeu e concorda com estes Termos de Uso e com a nossa{' '}
              <Link href="/privacidade" className="text-[#DAFF00] hover:underline">
                Política de Privacidade
              </Link>
              . Se não concordar, não utilize o serviço.
            </p>
            <p className="mt-3">
              O GoJohnny AI é destinado exclusivamente a pessoas com 18 anos ou mais,
              residentes no Brasil.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              2. Descrição do serviço
            </h2>
            <p className="mb-3">
              O GoJohnny AI é um serviço de coaching de corrida entregue via WhatsApp,
              com base em inteligência artificial. O serviço inclui:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Elaboração de planos de treino personalizados por IA com base nos dados fornecidos pelo usuário.</li>
              <li>Acompanhamento de check-ins de treino via WhatsApp.</li>
              <li>Ajuste adaptativo dos planos conforme evolução e feedback do usuário.</li>
              <li>Orientação sobre corrida, ritmo, volume e periodização.</li>
            </ul>
            <p className="mt-3">
              O serviço <strong className="text-[#F4F2EE]">não</strong> inclui atendimento
              presencial, avaliação física, diagnóstico médico, nutricional ou fisioterapêutico.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              3. Natureza do serviço — não é conselho médico
            </h2>
            <p className="mb-3">
              O GoJohnny AI é um serviço de <strong className="text-[#F4F2EE]">coaching
              esportivo baseado em IA</strong> e <strong className="text-[#F4F2EE]">não
              substitui</strong> a avaliação ou o acompanhamento de profissionais de saúde,
              incluindo médicos, fisioterapeutas, nutricionistas ou educadores físicos.
            </p>
            <p className="mb-3">
              As recomendações geradas pelo sistema são de caráter informativo e orientativo.
              Antes de iniciar qualquer programa de treinamento, especialmente se você tiver
              histórico de lesões, doenças cardiovasculares, diabetes, hipertensão ou qualquer
              outra condição de saúde, <strong className="text-[#F4F2EE]">consulte um
              profissional de saúde habilitado</strong>.
            </p>
            <p>
              A equipe GoJohnny AI não se responsabiliza por quaisquer danos, lesões ou
              consequências à saúde decorrentes da aplicação das orientações de treinamento
              sem acompanhamento médico adequado.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              4. Ausência de garantia de resultados
            </h2>
            <p className="mb-3">
              O GoJohnny AI não garante resultados específicos de desempenho esportivo,
              perda de peso, melhora de condicionamento físico ou qualquer outro objetivo
              individual. Os resultados dependem de múltiplos fatores fora do controle do
              serviço, incluindo genética, aderência ao plano, descanso, alimentação, condições
              de saúde e outros.
            </p>
            <p>
              Depoimentos e exemplos apresentados no site são meramente ilustrativos e não
              representam garantia de resultados iguais ou similares.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              5. Lista de espera
            </h2>
            <p className="mb-3">
              Ao cadastrar seu nome e número de WhatsApp na lista de espera:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Você autoriza o GoJohnny AI a entrar em contato via WhatsApp para informar sobre abertura de vagas e novidades do produto.</li>
              <li>O cadastro na lista de espera é gratuito e não implica nenhum compromisso de compra ou assinatura.</li>
              <li>Você pode solicitar sua remoção da lista a qualquer momento enviando e-mail para <a href="mailto:privacidade@gojohnny.ai" className="text-[#DAFF00] hover:underline">privacidade@gojohnny.ai</a>.</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              6. Assinatura e pagamento
            </h2>
            <p className="mb-3">
              Após o lançamento, o acesso ao serviço será condicionado ao pagamento de
              assinatura mensal. As condições específicas de preço, planos, renovação e
              cancelamento serão detalhadas antes da cobrança, na etapa de ativação da conta.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A assinatura é recorrente e será renovada automaticamente no período informado, salvo cancelamento pelo usuário.</li>
              <li>O cancelamento pode ser solicitado a qualquer momento e terá efeito ao final do período já pago.</li>
              <li>Reembolsos serão avaliados caso a caso, conforme o Código de Defesa do Consumidor (Lei nº 8.078/1990), incluindo o direito de arrependimento de 7 dias para compras realizadas pela internet.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              7. Obrigações do usuário
            </h2>
            <p className="mb-3">Ao utilizar o GoJohnny AI, você se compromete a:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fornecer informações verídicas sobre seu condicionamento físico, objetivos e histórico de saúde.</li>
              <li>Não compartilhar o acesso ao serviço com terceiros.</li>
              <li>Não utilizar o serviço para fins ilícitos ou contrários a estes termos.</li>
              <li>Não tentar reverter engenharia, copiar, reproduzir ou redistribuir qualquer parte do serviço ou dos planos gerados.</li>
              <li>Comunicar ao serviço quaisquer alterações relevantes de saúde que possam afetar a segurança do treinamento.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              8. Limitações de responsabilidade
            </h2>
            <p className="mb-3">
              Na extensão máxima permitida pela legislação aplicável, o GoJohnny AI não será
              responsável por:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lesões, danos à saúde ou outros prejuízos físicos decorrentes da prática de exercícios.</li>
              <li>Interrupção temporária do serviço por manutenção, falha técnica ou força maior.</li>
              <li>Decisões tomadas pelo usuário com base nas recomendações da IA, em detrimento de orientação profissional.</li>
              <li>Perda de dados decorrente de falha no WhatsApp ou em plataformas de terceiros.</li>
              <li>Danos indiretos, emergentes ou lucros cessantes.</li>
            </ul>
            <p className="mt-3">
              Nossa responsabilidade total perante o usuário, em qualquer hipótese, fica
              limitada ao valor pago pelo usuário nos últimos 3 meses de assinatura.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              9. Propriedade intelectual
            </h2>
            <p>
              Todo o conteúdo do site e do serviço — incluindo logotipos, textos, design,
              algoritmos e planos de treinamento gerados — é de propriedade do GoJohnny AI
              ou de seus licenciadores e está protegido por leis de propriedade intelectual.
              O usuário recebe uma licença limitada, pessoal e intransferível para uso do
              serviço conforme estes termos.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              10. Uso de inteligência artificial
            </h2>
            <p className="mb-3">
              Os planos de treinamento e recomendações são gerados por modelos de inteligência
              artificial. Embora o sistema seja desenvolvido com base em princípios de
              treinamento esportivo, a IA pode cometer erros ou gerar recomendações inadequadas
              para situações individuais específicas.
            </p>
            <p>
              O usuário é responsável por avaliar as recomendações com senso crítico e buscar
              opinião profissional sempre que houver dúvida sobre a adequação de um exercício
              ao seu estado de saúde.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              11. Suspensão e encerramento
            </h2>
            <p>
              O GoJohnny AI reserva-se o direito de suspender ou encerrar o acesso de usuários
              que violem estes termos, pratiquem abuso do serviço ou adotem conduta prejudicial
              à plataforma ou a outros usuários, sem obrigação de reembolso quando a violação
              for comprovada.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              12. Alterações nos termos
            </h2>
            <p>
              Podemos atualizar estes Termos de Uso periodicamente. Alterações relevantes
              serão comunicadas com antecedência razoável via WhatsApp ou e-mail. O uso
              continuado do serviço após a data de vigência das alterações constitui
              aceitação dos novos termos.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              13. Lei aplicável e foro
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer
              controvérsia decorrente destes termos será submetida ao foro da comarca de
              São Paulo/SP, com renúncia a qualquer outro, por mais privilegiado que seja,
              salvo casos em que a legislação consumerista determine foro diferente em favor
              do consumidor.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="font-display font-bold text-[#F4F2EE] text-xl mb-3">
              14. Contato
            </h2>
            <p>Para dúvidas sobre estes Termos de Uso, entre em contato:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                E-mail:{' '}
                <a href="mailto:contato@gojohnny.ai" className="text-[#DAFF00] hover:underline">
                  contato@gojohnny.ai
                </a>
              </li>
            </ul>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-block bg-[#DAFF00] text-[#0D0D0D] font-display font-bold text-sm px-6 py-3 rounded-lg hover:scale-[1.02] transition-transform text-center"
          >
            Voltar para o início
          </Link>
          <Link
            href="/privacidade"
            className="inline-block border border-[#333] text-[#B8B8B8] font-display text-sm px-6 py-3 rounded-lg hover:border-[#555] transition-colors text-center"
          >
            Ver Política de Privacidade
          </Link>
        </div>
      </div>
    </main>
  )
}
