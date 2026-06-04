const fs = require('fs');

const content = fs.readFileSync('src/lib/i18n.tsx', 'utf8');
const langs = ["es", "pt", "en", "fr", "de", "pl", "uk", "ru", "nl", "sv", "no"];

// Regex to find translation blocks
// It's brittle but might work.
