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
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900 flex flex-col overflow-x-hidden bg-white">
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
      </div>
      <FloatingWhatsApp />
    </main>
  );
}

