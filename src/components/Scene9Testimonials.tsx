import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useRef } from "react";

export function Scene9Testimonials() {
  const { t } = useI18n();
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { name: t.s9.t1_n, prop: t.s9.t1_p, desc: t.s9.t1_d },
    { name: t.s9.t2_n, prop: t.s9.t2_p, desc: t.s9.t2_d },
    { name: t.s9.t3_n, prop: t.s9.t3_p, desc: t.s9.t3_d },
    { name: t.s9.t4_n, prop: t.s9.t4_p, desc: t.s9.t4_d },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 lg:py-28 z-20 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.03)] border-t border-slate-100">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-[100px] pointer-events-none opacity-40 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-50/50 rounded-full blur-[80px] pointer-events-none opacity-50 -translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 mb-6 text-[12px] font-bold uppercase tracking-widest text-slate-500 shadow-sm border border-slate-200">
            {t.s9.label}
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
            {t.s9.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            {t.s9.sub}
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 w-full pl-4 sm:pl-6 lg:pl-[calc(50vw-600px+1rem)] xl:pl-[calc(50vw-600px+1.5rem)]">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-12 pt-4 pr-6 sm:pr-8 snap-x snap-mandatory hide-scrollbar"
        >
          {testimonials.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              key={index}
              className="snap-start shrink-0 w-[300px] sm:w-[380px] p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative group hover:shadow-[0_8px_30px_rgb(0,140,95,0.06)] hover:border-brand-50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 text-brand-100/50 group-hover:text-brand-100 transition-colors duration-300">
                <Quote className="w-10 h-10 transform rotate-180" />
              </div>
              
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <p className="text-[17px] text-slate-700 font-medium leading-relaxed mb-8">
                  "{item.desc}"
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-slate-100 mb-5" />
                <h4 className="text-[16px] font-bold text-slate-900 mb-1">
                  {item.name}
                </h4>
                <p className="text-[13px] font-medium text-brand-600">
                  {item.prop}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Spacer to allow the last item to scroll into clear view on wider screens */}
          <div className="shrink-0 w-4 sm:w-12 lg:w-[calc(50vw-600px)] pointer-events-none" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
