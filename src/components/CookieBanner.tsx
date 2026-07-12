import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useI18n } from '../lib/i18n';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6 pointer-events-none flex justify-center"
        >
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-2xl max-w-4xl w-full pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-700/50">
            <div className="flex-1">
              <h4 className="text-[16px] font-semibold mb-1 text-slate-100">Valorizamos a tua privacidade</h4>
              <p className="text-[14px] text-slate-400 leading-relaxed">
                Utilizamos cookies estritamente necessários para o funcionamento do site e para melhorar a tua experiência. Não vendemos dados nem os partilhamos com terceiros.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-[14px] font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-[14px] font-semibold bg-brand-500 hover:bg-brand-400 text-white shadow-[0_4px_14px_rgba(0,161,111,0.3)] transition-all hover:-translate-y-0.5"
              >
                Aceitar Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
