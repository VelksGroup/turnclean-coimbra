const fs = require('fs');

let code = fs.readFileSync('src/components/Scene4Solution.tsx', 'utf8');

// Inject useI18n
if (!code.includes('useI18n')) {
  code = code.replace(/import \{ Check, Zap,.*?\} from "lucide-react";/, (m) => m + '\\nimport { useI18n } from "../lib/i18n";');
}

// Inject const { t } = useI18n();
code = code.replace(/export function Scene4Solution\(\) \{/, 'export function Scene4Solution() {\\n  const { t } = useI18n();');

const reps = {
  '"Menos estrés",\\n    "Menos retrasos",\\n    "Menos quejas",\\n    "Más control",\\n    "Más rapidez",\\n    "Más tranquilidad"':
    't.s4.b1,\\n    t.s4.b2,\\n    t.s4.b3,\\n    t.s4.b4,\\n    t.s4.b5,\\n    t.s4.b6',
  'Lo que ganas al contratar': '{t.s4.tag}',
  'Elige una solución.': '{t.s4.title1}',
  '>No solo limpieza.<': '>{t.s4.title2}<',
  'Tu huésped recibe el apartamento listo. Tú recibes menos estrés, menos fallos y más control.': '{t.s4.sub2}',
  '>Elige tu paquete<': '>{t.s4.choose}<',
  '>SOLO READY<': '>{t.s4.c1_name}<',
  '>Desde 59€<': '>{t.s4.c1_price}<',
  'Para cambios normales y apartamentos pequeños.': '{t.s4.c1_desc}',
  '>Incluye:<': '>{t.s4.includes}<',
  '>Limpieza turística completa<': '>{t.s4.c1_i1}<',
  '>Cocina, baño, suelos y superficies<': '>{t.s4.c1_i2}<',
  '>Preparación visible del apartamento<': '>{t.s4.c1_i3}<',
  '>Revisión rápida antes del huésped<': '>{t.s4.c1_i4}<',
  '>Organización básica del espacio<': '>{t.s4.c1_i5}<',
  '>Retirada básica de basura<': '>{t.s4.c1_i6}<',
  '>Aviso si algo está fuera de lugar<': '>{t.s4.c1_i7}<',
  '>Fotos de confirmación si necesario<': '>{t.s4.c1_i8}<',
  'El apartamento queda limpio, ordenado y listo para recibir.': '{t.s4.c1_note}',
  '>Quiero esta opción<': '>{t.s4.c1_btn}<',

  'DUO EXPRESS': '{t.s4.c2_name}',
  '>Desde 89€<': '>{t.s4.c2_price}<',
  'Para urgencias, cambios el mismo día y apartamentos con más carga.': '{t.s4.c2_desc}',
  '>Equipo de 2 profesionales<': '>{t.s4.c2_i1}<',
  '>Limpieza turística acelerada<': '>{t.s4.c2_i2}<',
  '>Cocina, baños, suelos y superficies<': '>{t.s4.c2_i3}<',
  '>Preparación completa del apartamento<': '>{t.s4.c2_i4}<',
  '>Revisión detallada antes del check-in<': '>{t.s4.c2_i5}<',
  '>Control visual del estado del inmueble<': '>{t.s4.c2_i6}<',
  '>Apoyo para check-in / check-out<': '>{t.s4.c2_i9}<',
  '>Entrega de llaves si necesario<': '>{t.s4.c2_i10}<',
  '>Mejor respuesta para horarios ajustados<': '>{t.s4.c2_i11}<',
  'Más velocidad. Más control. Menos riesgo antes del próximo huésped.': '{t.s4.c2_note}',
  '>Quiero prioridad<': '>{t.s4.c2_btn}<',

  'También disponible:': '{t.s4.also_title}',
  'Limpieza profunda': '{t.s4.a1}',
  'Limpieza post-obra': '{t.s4.a2}',
  'Servicio fuera de horario': '{t.s4.a3}',
  'Urgencias el mismo día': '{t.s4.a4}',
  '>Apoyo puntual o colaboración fija<': '>{t.s4.a5}<',
  'Si necesitas que el apartamento quede listo de verdad, aquí se resuelve.': '{t.s4.close_title}',
  'Promoción de lanzamiento sujeta a tamaño del inmueble y nivel de servicio.': '{t.s4.disclaimer}',
};

for (const [key, val] of Object.entries(reps)) {
  code = code.replace(key, val);
}

fs.writeFileSync('src/components/Scene4Solution.tsx', code);
console.log('done Scene4');
