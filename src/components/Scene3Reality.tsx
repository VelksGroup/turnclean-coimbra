import { motion, useScroll, useTransform } from "motion/react";
import { LogOut, Brush, CheckCircle, LogIn } from "lucide-react";
import { useRef } from "react";
import { useI18n } from "../lib/i18n";

export function Scene3Reality() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const { t } = useI18n();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const steps = [
    { icon: LogOut, text: t.s3.step1, time: "11:00" },
    { icon: Brush, text: t.s3.step2, time: "11:30" },
    { icon: CheckCircle, text: t.s3.step3, time: "14:30", highlight: true },
    { icon: LogIn, text: t.s3.step4, time: "16:00" },
  ];

  return (
    <section ref={containerRef} className="relative flex flex-col justify-center overflow-hidden py-16 sm:py-24 lg:py-32 text-white">
      {/* Seamless gradient from white to dark green */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-brand-950 to-brand-950" />
      
      {/* Parallax background light wrap */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      >
        <div className="absolute top-0 right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_60%)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.15)_0%,transparent_60%)] rounded-full blur-3xl" />
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6 sm:px-8 mt-4 sm:mt-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg"
          >
            {t.s3.title1} <br />
            {t.s3.title2} <br />
            <span className="text-brand-400">{t.s3.title3}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl font-medium tracking-tight text-brand-100/80"
          >
            {t.s3.sub}
          </motion.p>
        </div>

        {/* Timeline Flow */}
        <div className="relative mx-auto max-w-5xl">
          {/* Glowing connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-brand-800 md:left-1/2 md:-ml-[1px] md:h-[2px] md:w-full md:top-12 md:bottom-auto">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="md:hidden w-full bg-gradient-to-b from-brand-500 via-brand-400 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.5)]"
             />
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="hidden md:block h-full bg-gradient-to-r from-brand-500 via-brand-400 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.5)]"
             />
          </div>
          
          <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-row items-center md:flex-col group"
              >
                {/* Mobile time display */}
                <div className="md:hidden w-24 shrink-0 text-right pr-8">
                  <span className="font-mono text-base font-medium tracking-widest text-brand-300 drop-shadow-md">
                    {step.time}
                  </span>
                </div>
                
                <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-brand-700/50 backdrop-blur-md bg-brand-900/80 text-white md:mb-8 transition-transform duration-300 group-hover:scale-110 ${step.highlight ? 'bg-brand-500 text-brand-950 border-brand-400 glow-accent shadow-[0_0_30px_rgba(16,185,129,0.5)]' : ''}`}>
                  <step.icon size={28} strokeWidth={2} />
                  {step.highlight && (
                    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                  )}
                </div>
                
                <div className="pl-6 md:pl-0 md:text-center w-full">
                  {/* Desktop time display */}
                  <div className="hidden font-mono text-sm font-medium tracking-widest text-brand-300 md:block mb-3 drop-shadow-md">
                    {step.time}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-brand-300 transition-colors">{step.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
