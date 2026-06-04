import { motion } from "motion/react";
import { ArrowRight, AlertTriangle, ShieldAlert } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function Scene7Close() {
  const { t } = useI18n();
  const whatsappUrl = `https://wa.me/34602371714?text=${encodeURIComponent(t.s7.wa)}`;

  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-8 pb-32 sm:pt-12 sm:pb-40 lg:pt-20 lg:pb-48 z-20 bg-slate-50">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-slate-50 to-transparent pointer-events-none z-10" />
      {/* Tension glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-8 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30, scale: 0.98 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mx-auto flex w-full max-w-[600px] flex-col items-center rounded-3xl bg-white p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] sm:px-12 sm:py-9 border border-slate-100 relative overflow-hidden group z-20"
        >
          {/* Subtle tension glow */}
          <div className="absolute -top-[100px] -right-[100px] w-64 h-64 bg-red-50 rounded-full blur-[60px] opacity-60 pointer-events-none" />
          <div className="absolute -bottom-[100px] -left-[100px] w-64 h-64 bg-brand-50 rounded-full blur-[60px] opacity-60 pointer-events-none" />

          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1, duration: 0.6 }}
            className="mb-5 flex h-14 w-14 items-center justify-center rounded-[14px] bg-slate-900 text-white shadow-xl"
          >
            <ShieldAlert size={28} />
          </motion.div>

          <h2 className="mb-2 text-[32px] sm:text-[38px] font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            {t.s7.title_new}
          </h2>
          
          <h3 className="mb-5 text-[17px] sm:text-[19px] font-bold tracking-tight text-brand-600 leading-tight">
            {t.s7.sub_new}
          </h3>

          <div className="w-full h-px bg-slate-100 mb-5" />
          
          <p className="mb-6 text-[15px] sm:text-lg font-medium tracking-tight text-slate-600 max-w-sm">
            {t.s7.desc_new}
          </p>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-4 rounded-xl font-bold text-white bg-[#050807] hover:bg-slate-800 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.15)] text-[17px] mb-3"
          >
            {t.s7.btn_new}
          </a>

          <p className="text-[12px] font-semibold tracking-wide text-brand-600 uppercase">
            {t.s7.note_new}
          </p>
        </motion.div>

        {/* Final Microcopy Strip - The 'last pulse' */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative mt-8 z-10 group"
        >
          {/* Subtle pulse glow */}
          <div className="absolute inset-0 rounded-full bg-brand-400/20 blur-[14px] opacity-60 animate-pulse pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
          
          <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-brand-500/20 shadow-[0_4px_20px_-4px_rgba(10,140,95,0.15)] transition-all duration-300">
            <ShieldAlert className="w-4 h-4 text-brand-600 shrink-0" />
            <span className="text-[14px] sm:text-[15px] font-semibold tracking-tight text-slate-800">
              {t.s7.micro_new}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
