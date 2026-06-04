import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { MessageCircle, ChevronsLeftRight } from 'lucide-react';

const CARDS_DATA = [
  {
    type: 'compare',
    before: "/lavabo-antes.png",
    after: "/lavabo-despues.png", 
    sourceIndex: 1
  },
  {
    type: 'single',
    image: "/cocina-antes-despues.png",
    ratioClass: "aspect-square",
    sourceIndex: 0
  },
  {
    type: 'single',
    image: "/bano-profundo-antes-despues.png",
    ratioClass: "aspect-[3/4]",
    sourceIndex: 2
  }
];

function InteractiveCompare({ before, after, labelBefore, labelAfter, altBefore, altAfter }: { before: string; after: string; labelBefore: string; labelAfter: string; altBefore: string; altAfter: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - left, width));
    setSliderPosition((x / width) * 100);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden group select-none bg-slate-900 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      {/* After Image (Base) */}
      <img 
        src={after} 
        alt={altAfter} 
        loading="lazy"
        width="900"
        height="1200"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Label After */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-600 to-brand-500 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-[0.5rem] text-white text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] uppercase shadow-[0_5px_20px_-5px_rgba(10,140,95,0.6)] z-10 border border-brand-400/40">
        {labelAfter}
      </div>

      {/* Before Image (Cropped by clipPath) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-transform duration-1000 group-hover:scale-105 origin-left"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={before} 
          alt={altBefore} 
          loading="lazy"
          width="900"
          height="1200"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/15 mix-blend-multiply" />
        
        {/* Label Before */}
        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-[0.5rem] text-white/95 text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] uppercase border border-white/10 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.6)]">
          {labelBefore}
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* The Line */}
        <div className="absolute top-0 bottom-0 -ml-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(10,140,95,0.5)]"></div>
        
        {/* The Handle */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(10,140,95,0.4)] border border-brand-100 transition-transform duration-300 group-hover:scale-110">
          <div className="absolute inset-0 rounded-full bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ChevronsLeftRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600 relative z-10" />
        </div>
      </div>
      
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 m-0"
        aria-label="Image comparison slider"
      />
    </div>
  );
}

function SingleImage({ image, altText, ratioClass }: { image: string, altText: string, ratioClass: string }) {
  return (
    <div className={`relative w-full ${ratioClass} bg-slate-900 overflow-hidden group`}>
      <img 
        src={image} 
        alt={altText} 
        loading="lazy"
        width="1200"
        height={ratioClass === 'aspect-square' ? "1200" : "1600"}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-black/5 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 border border-white/10 pointer-events-none z-20" />
    </div>
  );
}

export function SceneGallery() {
  const { t } = useI18n();
  const whatsappUrl = `https://wa.me/34602371714?text=${encodeURIComponent(t.gallery.wa)}`;

  return (
    <section className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-36 lg:pb-44 bg-[#FAFAFA] overflow-hidden">
      {/* Refined Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/80 to-brand-50/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-overlay" />
      
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-brand-200/50 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-brand-400/10 blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[32px] sm:text-[42px] md:text-[48px] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
          >
            {t.gallery.title1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 drop-shadow-sm">
              {t.gallery.title2}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-[17px] sm:text-[20px] text-slate-600 font-semibold leading-relaxed max-w-2xl mx-auto px-2"
          >
            {t.gallery.sub}
          </motion.p>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {CARDS_DATA.map((card, index) => {
            const translation = t.gallery.items[card.sourceIndex];
            
            if (card.type === 'compare') {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * index, duration: 0.7, ease: "easeOut" }}
                  className="md:col-span-2 group relative bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(10,140,95,0.08)] border border-slate-100/80 hover:shadow-[0_30px_60px_-15px_rgba(10,140,95,0.18)] hover:border-brand-200/60 transition-all duration-500 overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-full md:w-[60%] shrink-0 relative z-10 p-2 sm:p-3">
                    <div className="w-full h-full photo-result-card">
                      <InteractiveCompare 
                        before={card.before!}
                        after={card.after!}
                        altBefore={t.gallery.before + " - " + translation.title}
                        altAfter={t.gallery.after + " - " + translation.title}
                        labelBefore={t.gallery.before}
                        labelAfter={t.gallery.after}
                      />
                    </div>
                  </div>
                  <div className="p-8 sm:p-12 flex-1 flex flex-col justify-center bg-transparent z-20 relative">
                    <div className="w-12 h-1 bg-brand-500 rounded-full mb-6 shadow-[0_0_15px_rgba(10,140,95,0.4)]" />
                    <h3 className="text-[22px] sm:text-[28px] font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                      {translation.title}
                    </h3>
                    <p className="text-slate-600 text-[16px] sm:text-[18px] leading-relaxed font-medium">
                      {translation.caption}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index, duration: 0.7, ease: "easeOut" }}
                className="group relative bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(10,140,95,0.06)] border border-slate-100/80 hover:shadow-[0_25px_50px_-15px_rgba(10,140,95,0.15)] hover:border-brand-200/60 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 p-2 sm:p-3">
                  <div className="w-full h-full photo-result-card z-10">
                    <SingleImage 
                      image={card.image!}
                      altText={translation.title}
                      ratioClass={card.ratioClass!}
                    />
                  </div>
                </div>
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-start bg-transparent z-20 relative">
                  <h3 className="text-[20px] sm:text-[24px] font-extrabold text-slate-900 mb-3 leading-tight tracking-tight">
                    {translation.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] sm:text-[17px] leading-relaxed font-medium">
                    {translation.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action / CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 sm:mt-28 relative max-w-4xl mx-auto text-center"
        >
          <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative flex flex-col items-center z-10 bg-white/80 backdrop-blur-2xl border border-white p-10 sm:p-14 rounded-[2.5rem] shadow-[0_20px_70px_-15px_rgba(10,140,95,0.12)]">
            <h3 className="text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              {t.gallery.cta}
            </h3>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 rounded-[1.25rem] bg-gradient-to-r from-brand-600 to-brand-500 text-white font-extrabold text-[17px] sm:text-[19px] tracking-wide overflow-hidden shadow-[0_12px_40px_-8px_rgba(10,140,95,0.6)] transition-all duration-300 hover:shadow-[0_15px_50px_-8px_rgba(10,140,95,0.7)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-95 mb-5 ring-1 ring-white/20 ring-offset-2 ring-offset-brand-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current relative z-10 shrink-0" />
              <span className="relative z-10 drop-shadow-sm">{t.gallery.btn}</span>
            </a>
            
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/60 shadow-sm">
              <div className="flex h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse shrink-0 shadow-[0_0_8px_rgba(10,140,95,0.6)]"></div>
              <span className="text-[13px] sm:text-[15px] font-semibold text-slate-600 tracking-tight">{t.gallery.micro}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


