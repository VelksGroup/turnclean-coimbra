import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function Scene5Authority() {
  const { t } = useI18n();
  return (
    <section className="relative flex flex-col justify-center py-16 sm:py-20 lg:py-32 text-white overflow-hidden z-20 bg-[#050807]">
      {/* Seamless transition from white to dark */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-[#050807] to-transparent pointer-events-none z-10" />
      {/* Ambient background layers for more life */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Volumetric glow & depth */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,201,139,0.15)_0%,transparent_60%)] blur-[80px]" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,201,139,0.1)_0%,transparent_70%)] blur-[60px]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Luxembourg Flag - Standalone & Large */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.7, ease: "easeOut" }}
           className="mb-8 sm:mb-12 relative flex items-center justify-center group"
        >
          {/* Breathing aura around the flag */}
          <div className="absolute bg-brand-500/30 rounded-full animate-[pulse_3s_ease-in-out_infinite] blur-[50px] w-[180%] h-[180%] pointer-events-none" />
          
          <div className="relative flex flex-col h-14 w-20 sm:h-20 sm:w-32 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,201,139,0.4)] border shadow-brand-500/20 border-white/30 z-10 transition-transform group-hover:scale-105 duration-700">
             {/* Glossy overlay for realism */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/30 pointer-events-none z-20" />
             
             {/* Luxembourg Flag Colors */}
             <div className="h-1/3 bg-[#ED2939] w-full" />
             <div className="h-1/3 bg-white w-full" />
             <div className="h-1/3 bg-[#00A1DE] w-full" />
             
             {/* Inner edge highlight */}
             <div className="absolute inset-0 shadow-inner rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none z-30" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 sm:mb-6 text-[36px] sm:text-5xl md:text-[64px] leading-[1.05] font-extrabold tracking-tight text-white drop-shadow-2xl px-2"
        >
          {t.s5.title_new}
        </motion.h2>

        {/* Subtitle with Glowing Base/Strip */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="relative mb-10 sm:mb-12 w-full flex justify-center py-3"
        >
          {/* Luminous base behind subtitle */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[110%] sm:w-[90%] max-w-2xl bg-gradient-to-r from-transparent via-brand-500/20 to-transparent blur-[20px] pointer-events-none" />
          <div className="absolute inset-y-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-lg bg-gradient-to-r from-transparent via-brand-400/15 to-transparent blur-[10px] pointer-events-none" />

          <h3 className="relative z-10 text-[20px] sm:text-[26px] md:text-[30px] font-bold tracking-tight text-brand-300 drop-shadow-lg px-2 max-w-3xl leading-snug">
            {t.s5.sub_new}
          </h3>
        </motion.div>

        {/* Supporting text */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ delay: 0.4, duration: 0.6 }}
           className="mb-10 sm:mb-14 flex flex-col items-center gap-5 sm:gap-6 relative z-10"
        >
          <p className="text-[16px] sm:text-[19px] md:text-[21px] font-medium tracking-tight text-slate-300/90 max-w-2xl px-2 leading-relaxed">
            {t.s5.desc1_new} <br className="hidden sm:block" />
            <span className="text-white font-bold block mt-1.5 sm:mt-2 drop-shadow-md">{t.s5.desc2_new}</span>
          </p>
          <div className="w-10 h-[2px] bg-brand-500/60 rounded-full shadow-[0_0_15px_rgba(0,201,139,0.6)] my-1" />
          <p className="text-[18px] sm:text-[22px] md:text-[26px] font-extrabold tracking-tight text-white drop-shadow-lg leading-tight px-4">
            {t.s5.p_new}
          </p>
        </motion.div>

        {/* Final Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-flex items-center rounded-xl bg-[#091510] px-6 py-3.5 sm:px-8 sm:py-4 border border-brand-800/80 shadow-[0_4px_30px_rgba(0,201,139,0.2)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/15 to-transparent -translate-x-full group-hover:duration-1000 group-hover:translate-x-full transition-transform" />
          <span className="font-bold text-[14px] sm:text-[16px] uppercase tracking-wider text-white drop-shadow-md relative z-10 flex items-center gap-2.5">
            <ShieldCheck size={20} className="text-brand-400" strokeWidth={2.5} />
            {t.s5.tag_new}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
