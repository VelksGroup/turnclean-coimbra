import { useI18n } from "../lib/i18n";
import { Phone, Mail } from "lucide-react";

export function Scene10Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-white/80 w-full overflow-hidden z-20 border-t border-brand-500/20 pt-16 pb-12 sm:pt-24 sm:pb-12 mt-12">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16 md:mb-24">
          
          {/* Logo & Short Text (Left aligned) */}
          <div className="flex flex-col items-start text-left">
            <img 
              src="/logo-keyclean-header.png" 
              alt="Torrevieja KeyClean"
              className="h-10 sm:h-12 w-auto object-contain opacity-90 drop-shadow-sm mb-6 sm:mb-8 hover:opacity-100 transition-opacity"
            />
            <p className="text-[14px] sm:text-[15px] font-medium text-slate-500 leading-relaxed max-w-[280px] sm:max-w-xs tracking-wide">
              {t.footer.text}
            </p>
          </div>

          {/* Contact (Right aligned on desktop) */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-4 sm:space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-1">
              Contact
            </span>
            <a 
              href="tel:+34602371714" 
              className="group flex flex-row-reverse md:flex-row items-center gap-3.5 text-[18px] sm:text-[22px] font-bold text-slate-800 hover:text-brand-600 transition-colors tracking-tight"
            >
              <span className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-brand-400/40"></span>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 border border-brand-200/50 shadow-[0_0_15px_rgba(0,161,111,0.2)] group-hover:bg-brand-100 transition-colors">
                  <Phone className="w-4 h-4 text-brand-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 fill-brand-600/20" />
                </span>
              </span>
              +34 602 37 17 14
            </a>
            <a 
              href="mailto:torreviejakeyclean@gmail.com" 
              className="group flex flex-row-reverse md:flex-row items-center gap-3.5 text-[15px] sm:text-[16px] font-medium text-slate-500 hover:text-brand-600 transition-colors tracking-wide"
            >
              <span className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-brand-400/40" style={{ animationDuration: '2s' }}></span>
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 border border-brand-200/50 shadow-[0_0_12px_rgba(0,161,111,0.2)] group-hover:bg-brand-100 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-600 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300 fill-brand-600/20" />
                </span>
              </span>
              torreviejakeyclean@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/60 pt-8 gap-4">
          <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400 text-center sm:text-left">
            Torrevieja KeyClean © 2026
          </p>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400/50"></span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
