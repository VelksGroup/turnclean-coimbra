import { motion, useScroll, useTransform } from "motion/react";
import { AlertCircle, Clock, StarHalf, TrendingDown, AlertTriangle } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useRef } from "react";

export function Scene2Risk() {
  const { t } = useI18n();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y4 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const cards = [
    { icon: Clock, title: t.s2.c1, sub: t.s2.c1_sub, delay: 0.1, y: y1 },
    { icon: AlertCircle, title: t.s2.c2, sub: t.s2.c2_sub, delay: 0.2, y: y2, isAlert: true },
    { icon: StarHalf, title: t.s2.c3, sub: t.s2.c3_sub, delay: 0.3, y: y3 },
    { icon: TrendingDown, title: t.s2.c4, sub: t.s2.c4_sub, delay: 0.4, y: y4, isAlert: true },
  ];

  return (
    <section ref={containerRef} className="relative flex flex-col justify-center pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-20 lg:pb-32 z-10 w-full overflow-visible bg-slate-50/50">
      {/* Background Cinematic Glows */}
      <div className="absolute top-[40%] left-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-[60%] right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center relative z-20 mb-12 sm:mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-50 to-orange-50 text-red-600 px-4 py-1.5 rounded-full mb-8 shadow-[0_2px_15px_rgba(220,38,38,0.1)] border border-red-100/50"
          >
             <AlertTriangle className="w-3.5 h-3.5" strokeWidth={2.5} />
             <span className="text-[12px] font-bold tracking-widest uppercase">{t.s2.micro}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-4xl sm:text-5xl lg:text-[54px] leading-tight font-bold tracking-tight text-slate-900"
          >
            {t.s2.title1} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">{t.s2.title2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl font-medium tracking-tight text-slate-500 max-w-2xl mx-auto"
          >
            {t.s2.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full pb-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              style={{ y: card.y }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: card.delay, duration: 0.8, ease: "easeOut" }}
              className="group relative h-full flex"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40 rounded-[28px] opacity-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100/80 transition-all duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-b from-white to-white/90 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-200/50" />
              
              <div className={`relative flex flex-row lg:flex-col items-center lg:items-start p-6 sm:p-8 rounded-[24px] sm:rounded-[28px] bg-transparent transition-all duration-500 overflow-hidden w-full
                hover:-translate-y-1.5
              `}>
                <div className={`absolute -right-12 -top-12 w-40 h-40 rounded-full blur-[40px] opacity-0 transition-opacity duration-700 pointer-events-none
                  ${card.isAlert ? 'bg-red-400/20 group-hover:opacity-100' : 'bg-slate-400/15 group-hover:opacity-100'}
                `} />

                <div className={`mr-5 lg:mr-0 mb-0 lg:mb-6 shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-110 relative z-10
                  ${card.isAlert ? 'bg-red-50 text-red-600 group-hover:shadow-[0_0_25px_rgba(220,38,38,0.15)] group-hover:bg-red-100' : 'bg-slate-50 text-slate-700 group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(0,0,0,0.08)]'}
                `}>
                  <card.icon size={26} strokeWidth={2.5} className="group-hover:rotate-6 transition-transform duration-500" />
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] sm:text-[19px] font-bold tracking-tight text-slate-900 mb-1 lg:mb-2 leading-tight relative z-10 group-hover:text-black transition-colors">{card.title}</h3>
                  <p className="text-slate-500 text-[13px] sm:text-[14px] font-medium leading-relaxed relative z-10 group-hover:text-slate-600 transition-colors">{card.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="mt-6 sm:mt-10 text-center relative z-20"
        >
          <h4 className="text-[22px] sm:text-3xl font-extrabold tracking-tight text-slate-800">
            {t.s2.final}
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
