import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[1000] bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1001] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col pointer-events-auto overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-100 shrink-0">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto text-slate-600 text-[15px] leading-relaxed prose prose-slate max-w-none">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function PrivacyPolicyContent() {
  return (
    <div className="space-y-6">
      <p><strong>Última atualização: {new Date().toLocaleDateString('pt-PT')}</strong></p>
      
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">1. O nosso compromisso</h3>
        <p>A Turnclean.pro está totalmente comprometida com a proteção e respeito pela tua privacidade, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD). Como prestadores de serviços locais em Coimbra, a nossa filosofia é simples: recolhemos apenas o estritamente necessário para prestar o nosso serviço. Não vendemos dados, não criamos perfis ocultos e não bombardeamos com marketing não solicitado.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Dados que recolhemos</h3>
        <p>Apenas recolhemos os dados fornecidos voluntariamente através dos nossos canais diretos (ex: WhatsApp, Email ou Telefone). Isto pode incluir:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Nome completo</li>
          <li>Contacto telefónico / Email</li>
          <li>Morada do imóvel para a prestação do serviço</li>
          <li>Informações específicas sobre o alojamento (ex: instruções de acesso, códigos).</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Como utilizamos os dados</h3>
        <p>Os teus dados são utilizados exclusivamente para:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Agendar, coordenar e executar os serviços de limpeza e manutenção;</li>
          <li>Comunicar atualizações, enviar orçamentos ou faturas;</li>
          <li>Gerir eventuais imprevistos logísticos relativos ao serviço.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Retenção e Segurança</h3>
        <p>Guardamos as informações estritamente pelo tempo necessário para a prestação dos serviços e para cumprimento das nossas obrigações legais (como emissão de faturas). Empregamos medidas de segurança adequadas para prevenir o acesso, perda ou alteração não autorizada dos teus dados.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">5. Os teus direitos (RGPD)</h3>
        <p>Tens o direito de solicitar o acesso, retificação ou apagamento dos teus dados pessoais a qualquer momento. Para exercer estes direitos, ou para qualquer dúvida relacionada com a privacidade, por favor contacta-nos através do email <strong>turnclean.support@gmail.com</strong>.</p>
      </div>
    </div>
  );
}

export function TermsConditionsContent() {
  return (
    <div className="space-y-6">
      <p><strong>Última atualização: {new Date().toLocaleDateString('pt-PT')}</strong></p>
      
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Objeto do Serviço</h3>
        <p>A Turnclean.pro fornece serviços profissionais de limpeza, preparação e suporte a alojamentos locais e casas particulares na região de Coimbra. Ao solicitar e agendar um serviço, o cliente concorda com os presentes termos.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Agendamentos e Comunicação</h3>
        <p>O agendamento de serviços é feito preferencialmente através de WhatsApp ou Email. Um serviço só é considerado confirmado após validação por parte da nossa equipa. Quaisquer detalhes importantes, como códigos de acesso ou estado particular do imóvel, devem ser comunicados antecipadamente.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Cancelamentos</h3>
        <p>Compreendemos que imprevistos acontecem. No entanto, o cancelamento ou reagendamento de uma limpeza deve ser comunicado com, pelo menos, <strong>24 horas de antecedência</strong> em relação ao horário marcado. Cancelamentos tardios poderão incorrer numa taxa de compensação equivalente a 50% do valor do serviço acordado.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Acessos e Condições do Imóvel</h3>
        <p>O cliente é responsável por garantir o livre acesso da nossa equipa ao imóvel à hora marcada (chaves funcionais, códigos corretos, ou presença no local). Atrasos superiores a 30 minutos por falta de acesso poderão ditar a anulação do serviço no dia e cobrança de taxa de deslocação.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">5. Isenção de Responsabilidade (Danos e Objetos de Valor)</h3>
        <p>A nossa equipa opera com o máximo rigor e cuidado. Contudo, não nos responsabilizamos por:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Danos decorrentes do desgaste natural, instalação incorreta, ou defeitos pré-existentes no imóvel ou mobiliário (ex: torneiras soltas, quadros mal fixados);</li>
          <li>Desaparecimento ou quebra de objetos de alto valor (ex: joias, dinheiro, dispositivos eletrónicos sensíveis) deixados fora de segurança durante o serviço.</li>
        </ul>
        <p className="mt-2">Qualquer dano que, comprovadamente, resulte de negligência direta da nossa equipa, deve ser reportado num prazo máximo de 24 horas após o final do serviço, para ser devidamente avaliado e resolvido.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">6. Pagamentos</h3>
        <p>Os pagamentos devem ser regularizados conforme acordado aquando da contratação (seja pontualmente por serviço ou com avença mensal). O não pagamento reiterado confere à Turnclean.pro o direito de suspender os serviços com efeito imediato.</p>
      </div>
    </div>
  );
}
