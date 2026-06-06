import { motion } from "motion/react";
import { MessageSquare, FileText, Globe } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { StatsCounter } from "./StatsCounter";

export function Scene8Corporate() {
  const { t } = useI18n();

  const features = [
    {
      icon: MessageSquare,
      title: t.s8.c1_t,
      desc: t.s8.c1_d,
    },
    {
      icon: FileText,
      title: t.s8.c2_t,
      desc: t.s8.c2_d,
    },
    {
      icon: Globe,
      title: t.s8.c3_t,
      desc: t.s8.c3_d,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28 z-20 border-t border-slate-100 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.03)]">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-50/50 rounded-[100%] blur-[80px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-100/30 rounded-[100%] blur-[100px] pointer-events-none opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[1200px]">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 mb-6 text-[12px] font-bold uppercase tracking-widest text-slate-500 shadow-sm border border-slate-200">
            {t.s8.label}
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
            {t.s8.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            {t.s8.sub}
          </p>
        </motion.div>

        {/* Dynamic Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-[48px] sm:text-[56px] font-black text-brand-600 tracking-tighter tabular-nums drop-shadow-sm leading-none mb-3">
              <StatsCounter end={13} suffix="+" duration={2500} />
            </span>
            <span className="text-[13px] sm:text-[15px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center">
              {t.s8.stat1}
            </span>
          </motion.div>
          
          <div className="w-16 h-[1px] sm:w-[1px] sm:h-16 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-[48px] sm:text-[56px] font-black text-brand-600 tracking-tighter tabular-nums drop-shadow-sm leading-none mb-3">
              <StatsCounter end={450} suffix="+" duration={2500} />
            </span>
            <span className="text-[13px] sm:text-[15px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center">
              {t.s8.stat2}
            </span>
          </motion.div>
        </div>

        {/* 3 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,140,95,0.08)] hover:border-brand-100 transition-all duration-300 group overflow-hidden"
            >
              {/* Inner subtle glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <item.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-[19px] font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] font-medium text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Premium Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative group cursor-default">
             {/* Vibrant animated glow */}
             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-400 via-emerald-300 to-brand-500 blur-[24px] opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
             
             {/* Premium Glassmorphic Container */}
             <div className="relative flex flex-col items-center justify-center px-10 py-6 rounded-2xl bg-[#0a0f16] border border-slate-800 shadow-[0_0_40px_rgba(0,140,95,0.15)] overflow-hidden">
               {/* Internal shimmer line */}
               <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer -skew-x-12" />
               
               <div className="flex items-start justify-center gap-3 sm:gap-5 w-full mb-4">
                 {/* Luxembourg */}
                 <div className="flex flex-col items-center">
                   <span className="text-[13px] sm:text-[17px] font-black tracking-[0.15em] sm:tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 drop-shadow-sm">
                     LUXEMBOURG
                   </span>
                   <span className="text-2xl drop-shadow-md mt-2">🇱🇺</span>
                 </div>
                 
                 {/* Separator */}
                 <span className="text-brand-400/80 font-black text-[13px] sm:text-[15px] mt-0.5">
                   ×
                 </span>
                 
                 {/* Torrevieja */}
                 <div className="flex flex-col items-center">
                   <span className="text-[13px] sm:text-[17px] font-black tracking-[0.15em] sm:tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 drop-shadow-sm">
                     TORREVIEJA
                   </span>
                   <span className="text-2xl drop-shadow-md mt-2">🇪🇸</span>
                 </div>
               </div>
               
               <div className="flex items-center gap-2">
                 <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-brand-500/50" />
                 <span className="text-[12px] sm:text-[13px] font-semibold text-brand-300 uppercase tracking-widest">
                   {t.s8.badge_s}
                 </span>
                 <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-brand-500/50" />
               </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
