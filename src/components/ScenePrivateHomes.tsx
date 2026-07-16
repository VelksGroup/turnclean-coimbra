import React from "react";
import { motion } from "motion/react";
import { Home, Heart, Sparkles, CalendarSync } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function ScenePrivateHomes() {
  const { t: fullT } = useI18n();
  const t = fullT.privateHomes;
  
  const icons = [Home, Heart, Sparkles, CalendarSync];
  
  const cardsWithIcons = t.cards.map((card, idx) => ({
    ...card,
    icon: icons[idx]
  }));

  const handleWhatsApp = () => {
    const phone = "351962494484";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(t.wa_msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden bg-[#FAFAFA]">
      {/* Light subtle horizontal line / background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/80 to-brand-50/20 pointer-events-none" />
      
      {/* Premium subtle glow & lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-200/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-40 bg-brand-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-300/10 rounded-full blur-[60px] pointer-events-none" />

          <h2 className="relative z-10 text-[32px] sm:text-[42px] md:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            <span className="block mb-2">{t.title1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 drop-shadow-sm pb-1">
              {t.title_highlight}
            </span>
          </h2>
          <div className="mb-6 relative z-10">
             <p className="text-[21px] sm:text-[25px] font-extrabold text-slate-800 drop-shadow-sm tracking-tight">
               {t.highlight2}
             </p>
          </div>
          <p className="relative z-10 text-[17px] sm:text-[19px] font-medium text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.sub}
          </p>

          <div className="inline-block relative z-10">
            <div className="absolute inset-0 bg-brand-400/20 blur-[16px] rounded-full opacity-70" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 flex items-center gap-3 text-[14px] sm:text-[16px] font-bold text-brand-900 bg-white/95 backdrop-blur-xl px-7 py-3.5 rounded-full border border-brand-200/60 shadow-[0_8px_25px_-5px_rgba(10,140,95,0.15)]"
            >
               <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_12px_rgba(10,140,95,0.8)]" />
               <span className="tracking-tight">{t.micro}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-20 sm:mb-24 max-w-5xl xl:max-w-7xl mx-auto">
          {cardsWithIcons.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col p-8 sm:p-10 private-service-card"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex xl:flex-col items-start sm:items-center xl:items-start gap-4 xl:gap-5 mb-4 xl:mb-6">
                  <div className="flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 icon-box text-brand-600 transition-all duration-500 group-hover:scale-110 shrink-0 relative z-10">
                    <card.icon strokeWidth={2.5} size={24} className="xl:w-[26px] xl:h-[26px]" />
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] xl:text-[22px] font-extrabold text-slate-800 tracking-tight leading-[1.2]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[16px] sm:text-[17px] text-slate-500 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Premium Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative flex flex-col items-center z-10 bg-white/80 backdrop-blur-2xl border border-white p-10 sm:p-14 rounded-[2.5rem] shadow-[0_20px_70px_-15px_rgba(10,140,95,0.12)]">
            <h3 className="text-[26px] sm:text-[34px] font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              {t.cta_title}
            </h3>
            
            <button
              onClick={handleWhatsApp}
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 rounded-[1.25rem] bg-gradient-to-r from-brand-600 to-brand-500 text-white font-extrabold text-[17px] sm:text-[19px] tracking-wide overflow-hidden shadow-[0_12px_40px_-8px_rgba(10,140,95,0.6)] transition-all duration-300 hover:shadow-[0_15px_50px_-8px_rgba(10,140,95,0.7)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-95 mb-6 ring-1 ring-white/20 ring-offset-2 ring-offset-brand-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="relative z-10 drop-shadow-sm">{t.btn}</span>
            </button>
            
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/60 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse shadow-[0_0_8px_rgba(10,140,95,0.6)]" />
              <p className="text-[13px] sm:text-[15px] font-semibold text-slate-600 tracking-tight">
                {t.cta_micro}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
