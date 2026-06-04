import { motion } from "motion/react";
import { MessageSquare, CalendarCheck, Sparkles, Image as ImageIcon } from "lucide-react";
import { useI18n } from "../lib/i18n";

export function Scene6Process() {
  const { t } = useI18n();

  const steps = [
    { number: "01", icon: MessageSquare, text: t.s6.step1 },
    { number: "02", icon: CalendarCheck, text: t.s6.step2 },
    { number: "03", icon: Sparkles, text: t.s6.step3 },
    { number: "04", icon: ImageIcon, text: t.s6.step4 },
  ];

  return (
    <section className="relative flex flex-col justify-center pt-8 pb-16 sm:pb-20 lg:pt-16 lg:pb-32 z-10 w-full overflow-hidden">
      {/* Seamless blend from dark scene above */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#050807] via-slate-50 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center pt-4 sm:pt-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 px-2"
        >
          {t.s6.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-14 text-xl font-medium tracking-tight text-slate-500"
        >
          {t.s6.sub}
        </motion.p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:gap-8 md:grid-cols-4 relative">
          {/* Continuous flow line for mobile */}
          <div className="absolute left-10 md:hidden top-10 bottom-10 w-[2px] bg-slate-200">
             <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full bg-brand-500"
             />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="relative flex flex-row items-center md:flex-col group"
            >
              {/* Step connector (desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-1/2 w-full hidden md:block z-0">
                  <div className="h-[2px] w-full bg-slate-200" />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    className="h-[2px] origin-left bg-brand-500 absolute top-0 left-0 w-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
              )}
              
              <div className="relative mb-0 md:mb-8 mr-6 md:mr-0 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl glass-panel shadow-md border-white/80 text-brand-600 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]">
                <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white shadow-lg">
                  {step.number}
                </span>
                <step.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-[17px] sm:text-lg font-semibold tracking-tight text-slate-800 text-left md:text-center md:px-2 leading-tight">{step.text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
