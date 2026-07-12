import { motion } from "motion/react";
import { ShieldCheck, Clock, MapPin, ArrowRight, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n, flags, LanguageCode } from "../lib/i18n";

export function Scene1Hero() {
  const { t, language, setLanguage } = useI18n();
  const whatsappUrl = `https://wa.me/351962494484?text=${encodeURIComponent(t.hero.wa)}`;

  return (
    <section className="relative min-h-[85svh] flex flex-col justify-center overflow-hidden bg-white pt-4 pb-6 sm:pt-14 sm:pb-12 lg:pt-20 lg:pb-24">
      {/* Top Header */}
      <div className="absolute top-0 left-0 w-full z-50 bg-white py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo / Brand container */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/logo-turnclean-header.png" 
              alt="Coimbra TurnClean" 
              fetchPriority="high"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>

          {/* Experience Badge */}
          <div className="flex-shrink-1 flex items-center justify-end overflow-hidden">
            <div className="lux-badge bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-sm transition-transform duration-500 hover:scale-105">
              <span className="text-[16px] leading-none shrink-0" title="Luxembourg">🇱🇺</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-wide truncate">{t.hero.badge_lux}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-8 flex flex-col items-center pt-[60px] sm:pt-[80px]">
        
        <motion.div
           initial={{ opacity: 0, y: 30, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="w-full flex flex-col items-center px-1 pb-2 sm:p-8 md:p-12 relative text-center"
        >
          {/* Compact Language Selector */}
          <div className="w-full max-w-[320px] sm:max-w-sm mx-auto mb-6 sm:mb-8 flex flex-col items-center">
            
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 uppercase mb-3 flex items-center gap-1.5">
              <Globe size={12} className="text-brand-500 opacity-80" />
              {t.selector.label}
            </span>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {(Object.entries(flags) as [LanguageCode, string][]).map(([code, flag]) => {
                const isActive = language === code;
                return (
                  <button
                    key={code}
                    onClick={() => setLanguage(code)}
                    className={`relative flex shrink-0 items-center justify-center rounded-lg text-[18px] sm:text-[20px] transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 ${
                      isActive 
                        ? 'opacity-100 scale-110 bg-white shadow-[0_2px_10px_rgba(0,161,111,0.15)] border border-brand-200 z-10' 
                        : 'opacity-60 hover:opacity-100 hover:bg-white hover:border-slate-200 border border-transparent grayscale-[0.2]'
                    }`}
                    title={code.toUpperCase()}
                  >
                    <span className="leading-none transform -translate-y-[0.5px]">{flag}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center w-full gap-2 opacity-80 mb-3 sm:mb-4">
             <div className="h-[1px] w-4 sm:w-8 bg-slate-300"></div>
             <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-slate-500 uppercase">{t.hero.tagline}</span>
             <div className="h-[1px] w-4 sm:w-8 bg-slate-300"></div>
          </div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 sm:mb-6 mt-0 font-bold tracking-tight text-slate-900 leading-[1.05] drop-shadow-sm max-w-4xl"
            style={{ fontSize: "clamp(34px, 10vw, 62px)" }}
          >
            {t.hero.title1} <br className="hidden md:block"/>
            <span className="relative whitespace-nowrap inline-block mt-0 sm:mt-1 lg:mt-0">
              <span className="absolute -inset-1 block translate-y-1 rounded-lg bg-brand-100/40 blur-lg sm:blur-xl"></span>
              <span className="relative text-brand-700">{t.hero.title2}</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 sm:mb-10 max-w-xl mx-auto text-[14.5px] sm:text-lg lg:text-xl font-medium tracking-tight text-slate-500 leading-snug sm:leading-relaxed px-2"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center w-full relative z-20 px-2"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-[320px] sm:max-w-sm items-center justify-center gap-2 sm:gap-3 rounded-full bg-brand-600 px-5 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-[17px] font-semibold text-white glow-button hover:bg-brand-700 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden relative shadow-lg mb-2.5 sm:mb-3"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              {t.hero.cta}
              <ArrowRight className="transition-transform group-hover:translate-x-1 shrink-0" size={16} />
            </a>
            <p className="mt-1 text-[11px] sm:text-[13px] font-medium tracking-tight text-slate-500 opacity-90 flex items-center justify-center gap-1.5 sm:gap-2 text-center leading-tight">
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shrink-0"></span>
              <span>{t.hero.micro}</span>
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
