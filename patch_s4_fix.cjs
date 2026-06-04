const fs = require('fs');

let code = fs.readFileSync('src/components/Scene4Solution.tsx', 'utf8');

code = code.replace(/\\nimport \{ useI18n \}.*/g, '');
code = code.replace(/export function Scene4Solution\(\) \\{\\n  const \\{ t \\} = useI18n\(\);/g, 'export function Scene4Solution() {');
code = code.replace(/import \{ Check, Zap,.*?\} from "lucide-react";/, (m) => m + '\nimport { useI18n } from "../lib/i18n";');
code = code.replace(/export function Scene4Solution\(\) \{/, 'export function Scene4Solution() {\n  const { t } = useI18n();');

fs.writeFileSync('src/components/Scene4Solution.tsx', code);
