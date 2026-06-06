/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scene1Hero } from "./components/Scene1Hero";
import { Scene2Risk } from "./components/Scene2Risk";
import { ScenePrivateHomes } from "./components/ScenePrivateHomes";
import { Scene3Reality } from "./components/Scene3Reality";
import { Scene4Solution } from "./components/Scene4Solution";
import { SceneGallery } from "./components/SceneGallery";
import { Scene5Authority } from "./components/Scene5Authority";
import { Scene6Process } from "./components/Scene6Process";
import { Scene7Close } from "./components/Scene7Close";
import { Scene8Corporate } from "./components/Scene8Corporate";
import { Scene9Testimonials } from "./components/Scene9Testimonials";
import { Scene10Footer } from "./components/Scene10Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { motion, useScroll, useSpring } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-brand-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900 flex flex-col overflow-x-hidden bg-white">
      <ScrollProgress />
      {/* Cinematic Base */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="relative z-10 w-full flex flex-col items-stretch space-y-0">
        <Scene1Hero />
        <Scene2Risk />
        <ScenePrivateHomes />
        <Scene3Reality />
        <Scene4Solution />
        <SceneGallery />
        <Scene5Authority />
        <Scene6Process />
        <Scene7Close />
        <Scene8Corporate />
        <Scene9Testimonials />
        <Scene10Footer />
      </div>
      <FloatingWhatsApp />
    </main>
  );
}

