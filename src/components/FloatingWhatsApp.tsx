import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function FloatingWhatsApp() {
  const { t } = useI18n();
  const whatsappUrl = `https://wa.me/34602371714?text=${encodeURIComponent(t.gallery.wa)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-[18px] right-[18px] z-50 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#050807] text-white shadow-[0_0_20px_rgba(0,201,139,0.45)] border border-white/10 hover:bg-[#07110d] hover:shadow-[0_0_30px_rgba(0,201,139,0.6)] active:scale-95 sm:bottom-8 sm:right-8 sm:h-auto sm:w-auto sm:px-6 sm:py-4 sm:gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,201,139,0.4)] animate-pulse pointer-events-none" />
      <MessageCircle size={30} fill="currentColor" className="relative z-10 sm:w-6 sm:h-6" />
      <span className="font-semibold tracking-tight hidden sm:inline text-lg relative z-10">WhatsApp</span>
    </motion.a>
  );
}
