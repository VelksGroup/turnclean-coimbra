import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check, Zap, ShieldAlert, Sparkles, ChevronDown } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function Scene4Solution() {
  const { t } = useI18n();
  const whatsappUrl = `https://wa.me/34602371714?text=${encodeURIComponent(t.s4.wa)}`;
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTags = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const yAdd = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const benefits = [
    t.s4.b1,
    t.s4.b2,
    t.s4.b3,
    t.s4.b4,
    t.s4.b5,
    t.s4.b6
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 z-20 bg-slate-50">
      {/* Light Premium Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,white_50%,transparent_100%)] pointer-events-none" />
      <motion.div style={{ y: yGlow }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,161,111,0.04)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-8">
        <div className="mx-auto mb-14 sm:mb-20 max-w-4xl text-center relative z-20 flex flex-col items-center">
          
          {/* Etiqueta Premium: "LO QUE GANAS AL CONTRATAR" */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center justify-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-6 sm:mb-8 hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-brand-100/60" />
            <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent" />
            
            <Sparkles size={14} className="relative z-10 text-brand-500 drop-shadow-sm" />
            <span className="relative z-10 text-[10px] sm:text-[11px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-slate-600 uppercase">
              {t.s4.tag}
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 sm:mb-7 text-[38px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900"
          >
            {t.s4.title1} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 drop-shadow-sm pb-2">{t.s4.title2}</span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[17px] sm:text-lg md:text-xl font-medium tracking-tight text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            {t.s4.sub2}
          </motion.p>
        </div>

        {/* Benefícios Grid */}
        <motion.div 
          style={{ y: yTags }}
          className="mx-auto max-w-4xl mb-16 sm:mb-24 relative z-20 perspective-1000 px-2 sm:px-0"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {benefits.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 + (idx * 0.08), ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-4 sm:p-5 rounded-[20px] bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200/60 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-brand-50/0 via-brand-50/0 to-brand-50/0 group-hover:from-brand-50/40 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
                <div className="absolute inset-0 rounded-[20px] border border-brand-200/0 group-hover:border-brand-200/50 transition-colors duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,1)]" />

                <div className="relative shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-50 group-hover:bg-brand-50 border border-slate-100 transition-colors duration-300 shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
                   <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.08), type: "spring", stiffness: 200, damping: 10 }}
                   >
                     <Check size={18} strokeWidth={3} className="text-brand-300 group-hover:text-brand-500 transition-colors duration-300 group-hover:scale-110" />
                   </motion.div>
                </div>
                
                <span className="relative z-10 text-[14px] sm:text-[17px] font-bold text-slate-700 tracking-tight leading-tight sm:leading-none text-center sm:text-left group-hover:text-slate-900 transition-colors duration-300">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section connection visual to cards */}
        <div className="w-full flex justify-center mb-8 sm:mb-12 relative z-10 opacity-70 mt-4 sm:mt-0">
           <div className="flex flex-col items-center">
             <div className="w-[2px] h-12 bg-gradient-to-b from-brand-300/40 to-transparent rounded-full mb-3" />
             <span className="text-[10px] font-extrabold tracking-[0.25em] text-brand-500/80 uppercase">{t.s4.choose}</span>
             <ChevronDown size={14} className="text-brand-400 mt-1 mb-2 animate-bounce" />
           </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mx-auto max-w-5xl items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          {/* Card 1: SOLO READY */}
          <motion.div style={{ y: yCard1 }} className="flex flex-col">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="group relative flex flex-col h-full bg-white rounded-3xl p-6 sm:p-10 border border-brand-100/50 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,161,111,0.15)] transition-all duration-500 hover:-translate-y-1"
            >
            {/* Subtle glow border */}
            <div className="absolute inset-0 rounded-3xl border border-brand-200/40 pointer-events-none group-hover:border-brand-400/50 transition-colors duration-500" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-50/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex justify-between items-start mb-5 relative z-10">
              <div>
                <h3 className="text-[22px] font-black tracking-tight text-slate-900 mb-1">{t.s4.c1_name}</h3>
                <div className="text-4xl font-extrabold text-brand-600 tracking-tight">{t.s4.c1_price}</div>
              </div>
            </div>
            
            <p className="text-[15px] sm:text-[16px] text-slate-600 font-medium leading-relaxed mb-6 relative z-10 min-h-[48px]">
              {t.s4.c1_desc}
            </p>

            <div className="text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-4 relative z-10">{t.s4.includes}</div>
            
            <ul className="flex flex-col gap-3.5 mb-8 flex-grow relative z-10">
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i3}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i4}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i5}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i6}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i7}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-500 mt-0.5 shrink-0 drop-shadow-sm" strokeWidth={3} />
                <span className="text-slate-700 font-semibold leading-snug">{t.s4.c1_i8}</span>
              </li>
            </ul>

            <div className="mb-6 px-5 py-4 rounded-2xl bg-brand-50/50 border border-brand-100 shadow-[inset_0_2px_10px_rgba(0,161,111,0.02)] relative z-10">
              <span className="text-[14.5px] font-bold text-brand-800 leading-snug block">
                {t.s4.c1_note}
              </span>
            </div>

            <a 
              href={`${whatsappUrl}SOLO%20READY`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] relative z-10"
            >
              {t.s4.c1_btn}
            </a>
            </motion.div>
          </motion.div>

          {/* Card 2: {t.s4.c2_name} */}
          <motion.div style={{ y: yCard2 }} className="flex flex-col">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="group relative flex flex-col h-full bg-[#050B08] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,201,139,0.2)] hover:shadow-[0_25px_60px_-15px_rgba(0,201,139,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
            {/* Glowing borders and backgrounds */}
            <div className="absolute inset-0 rounded-3xl border border-brand-600/30 group-hover:border-brand-500/50 transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,201,139,0.05)] pointer-events-none" />
            
            {/* Volumetric light inside card */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500 rounded-full blur-[70px] opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700" />

            <div className="flex justify-between items-start mb-5 relative z-10">
              <div>
                <h3 className="text-[22px] font-black tracking-tight text-white mb-1 flex items-center gap-2">
                  {t.s4.c2_name}
                  <Zap size={22} className="text-brand-400 fill-brand-400 drop-shadow-[0_0_8px_rgba(0,201,139,0.5)]" />
                </h3>
                <div className="text-4xl font-extrabold text-brand-400 tracking-tight drop-shadow-[0_0_15px_rgba(0,201,139,0.2)]">{t.s4.c2_price}</div>
              </div>
            </div>
            
            <p className="text-[15px] sm:text-[16px] text-slate-300 font-medium leading-relaxed mb-6 relative z-10 min-h-[48px]">
              {t.s4.c2_desc}
            </p>

            <div className="text-[13px] font-bold text-brand-500 uppercase tracking-widest mb-4 relative z-10">{t.s4.includes}</div>

            <ul className="flex flex-col gap-3.5 mb-8 flex-grow relative z-10">
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i3}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i4}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i5}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i6}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i7}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i8}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i9}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-brand-400 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-slate-100 font-semibold leading-snug">{t.s4.c2_i10}</span>
              </li>
              <li className="flex items-start gap-3 mt-1 py-1 px-2 -mx-2 bg-brand-900/40 rounded-lg">
                <Check size={18} className="text-brand-300 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" strokeWidth={3} />
                <span className="text-brand-100 font-bold leading-snug">{t.s4.c2_i11}</span>
              </li>
            </ul>

            <div className="mb-6 px-5 py-4 rounded-2xl bg-gradient-to-r from-brand-900/60 to-brand-950/60 border border-brand-500/30 shadow-[0_0_15px_rgba(0,201,139,0.1)] relative z-10 flex gap-3">
              <ShieldAlert size={20} className="shrink-0 text-brand-400 drop-shadow-[0_0_5px_rgba(0,201,139,0.5)]" />
              <span className="text-[14px] sm:text-[14.5px] font-bold text-white leading-snug">
                {t.s4.c2_note}
              </span>
            </div>

            <a 
              href={`${whatsappUrl}DUO%20EXPRESS`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-4 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-[0_10px_25px_-5px_rgba(0,201,139,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(0,201,139,0.5)] relative z-10"
            >
              {t.s4.c2_btn}
            </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: yAdd }}
          className="mt-16 sm:mt-24 max-w-4xl mx-auto relative z-10 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full relative"
          >
          {/* Decorative subtle background for the entire bottom section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/10 to-transparent pointer-events-none rounded-3xl" />

          {/* Premium "También disponible" Card */}
          <div className="relative flex flex-col p-8 sm:p-12 rounded-[2rem] bg-white border border-slate-100 shadow-[0_20px_50px_-20px_rgba(10,140,95,0.08)] hover:shadow-[0_20px_50px_-20px_rgba(10,140,95,0.12)] transition-all duration-700 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
            
            <div className="flex flex-col w-full relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 rounded-full bg-brand-500 shadow-[0_0_12px_rgba(10,140,95,0.5)]" />
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                    {t.s4.also_title}
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 to-transparent flex-grow hidden sm:block ml-6" />
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
                {[t.s4.a1, t.s4.a2, t.s4.a3, t.s4.a4, t.s4.a5].map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-4 text-slate-700 font-semibold text-[15px] sm:text-base group/item ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-50 text-brand-600 shrink-0 mt-0.5 border border-brand-200/40 shadow-sm transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-brand-500 group-hover/item:text-white group-hover/item:border-brand-500 group-hover/item:shadow-[0_0_10px_rgba(10,140,95,0.3)]">
                      <Check size={14} strokeWidth={3} />
                    </div> 
                    <span className="leading-snug transition-colors duration-300 group-hover/item:text-slate-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Strong Closing Statement */}
          <div className="relative text-center mt-20 mb-14 px-4">
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-brand-300/20 blur-[50px] pointer-events-none rounded-full" />
             <p className="relative z-10 text-[24px] sm:text-[32px] md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto leading-[1.15]">
               {t.s4.close_title}
             </p>
          </div>
          
          {/* Premium Microcopy Chip / Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center pb-6 relative group"
          >
            {/* Subtle glow behind the chip */}
            <div className="absolute inset-0 bg-brand-400/15 blur-[16px] rounded-full pointer-events-none opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-500/20 shadow-[0_8px_30px_-6px_rgba(10,140,95,0.15)] transition-all duration-300 group-hover:shadow-[0_8px_35px_-6px_rgba(10,140,95,0.25)]">
               <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)] animate-pulse shrink-0" />
               <p className="text-[13px] sm:text-[14px] md:text-[15px] font-bold tracking-tight text-slate-800 text-center uppercase whitespace-normal sm:whitespace-nowrap leading-tight">
                 {t.s4.disclaimer}
               </p>
            </div>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

