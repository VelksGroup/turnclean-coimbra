const fs = require('fs');
let code = fs.readFileSync('src/lib/i18n.tsx', 'utf8');

const extras = {
  es: {
    s4_wa: "Hola, necesito información sobre el paquete ",
    s7_wa: "Hola, necesito resolver la limpieza de mi apartamento urgente.",
    gal_wa: "Hola, necesito información sobre limpieza de apartamentos turísticos en Torrevieja.",
    hero_wa: "Hola, quiero proteger mi apartamento."
  },
  en: {
    s4_wa: "Hello, I need information about the package ",
    s7_wa: "Hello, I need to urgently resolve the cleaning of my apartment.",
    gal_wa: "Hello, I need information about tourist apartment cleaning in Torrevieja.",
    hero_wa: "Hello, I want to protect my apartment."
  },
  pt: {
    s4_wa: "Olá, preciso de informações sobre o pacote ",
    s7_wa: "Olá, preciso resolver com urgência a limpeza do meu apartamento.",
    gal_wa: "Olá, preciso de informações sobre a limpeza de apartamentos turísticos em Torrevieja.",
    hero_wa: "Olá, quero proteger o meu apartamento."
  },
  fr: {
    s4_wa: "Bonjour, j'ai besoin d'informations sur le forfait ",
    s7_wa: "Bonjour, je dois résoudre en urgence le nettoyage de mon appartement.",
    gal_wa: "Bonjour, j'ai besoin d'informations sur le nettoyage d'appartements touristiques à Torrevieja.",
    hero_wa: "Bonjour, je veux protéger mon appartement."
  },
  de: {
    s4_wa: "Hallo, ich benötige Informationen zum Paket ",
    s7_wa: "Hallo, ich muss die Reinigung meiner Wohnung dringend klären.",
    gal_wa: "Hallo, ich benötige Informationen zur Reinigung von Ferienwohnungen in Torrevieja.",
    hero_wa: "Hallo, ich möchte meine Wohnung absichern."
  },
  pl: {
    s4_wa: "Dzień dobry, potrzebuję informacji o pakiecie ",
    s7_wa: "Dzień dobry, muszę pilnie rozwiązać problem sprzątania mojego apartamentu.",
    gal_wa: "Dzień dobry, potrzebuję informacji o sprzątaniu apartamentów w Torrevieja.",
    hero_wa: "Dzień dobry, chcę zabezpieczyć mój apartament."
  },
  uk: {
    s4_wa: "Добрий день, мені потрібна інформація про пакет ",
    s7_wa: "Добрий день, мені потрібно терміново вирішити питання прибирання квартири.",
    gal_wa: "Добрий день, мені потрібна інформація про прибирання туристичних апартаментів у Торрев'єсі.",
    hero_wa: "Добрий день, хочу захистити свою квартиру."
  },
  ru: {
    s4_wa: "Здравстуйте, мне нужна информация о пакете ",
    s7_wa: "Здравстуйте, мне нужно срочно решить вопрос с уборкой квартиры.",
    gal_wa: "Здравстуйте, мне нужна информация об уборке туристических апартаментов в Торревьехе.",
    hero_wa: "Здравствуйте, хочу защитить свою квартиру."
  },
  nl: {
    s4_wa: "Hallo, ik heb informatie nodig over het pakket ",
    s7_wa: "Hallo, ik moet de schoonmaak van mijn appartement dringend regelen.",
    gal_wa: "Hallo, ik heb informatie nodig over toeristische schoonmaak in Torrevieja.",
    hero_wa: "Hallo, ik wil mijn appartement beschermen."
  },
  sv: {
    s4_wa: "Hej, jag behöver information om paketet ",
    s7_wa: "Hej, jag måste skyndsamt lösa städningen av min lägenhet.",
    gal_wa: "Hej, jag behöver information om städning av semesterbostäder i Torrevieja.",
    hero_wa: "Hej, jag vill skydda min lägenhet."
  },
  no: {
    s4_wa: "Hei, jeg trenger informasjon om pakken ",
    s7_wa: "Hei, jeg må snarest løse rengjøringen av leiligheten min.",
    gal_wa: "Hei, jeg trenger informasjon om rengjøring av ferieboliger i Torrevieja.",
    hero_wa: "Hei, jeg vil beskytte leiligheten min."
  }
};

code = code.replace(/badge_lux: string;/, 'badge_lux: string;\n    wa: string;');
code = code.replace(/disclaimer: string;/, 'disclaimer: string;\n    wa: string;');
code = code.replace(/micro_new: string;/, 'micro_new: string;\n    wa: string;');
code = code.replace(/micro: string;\n  \};/g, 'micro: string;\n    wa: string;\n  };');

for (const lang of Object.keys(extras)) {
  const trans = extras[lang];
  
  code = code.replace(
    new RegExp("(\\s*" + lang + ": \\{\\s*hero: \\{[\\s\\S]*?badge_lux: .*?)\\}(\\s*,\\s*s2: \\{)"),
    (m, b, a) => b + ',\n        wa: "' + trans.hero_wa + '"\n      }' + a
  );
  code = code.replace(
    new RegExp("(\\s*" + lang + ": \\{\\s*[\\s\\S]*?s4: \\{[\\s\\S]*?disclaimer: .*?)\\}(\\s*,\\s*s5: \\{)"),
    (m, b, a) => b + ',\n      wa: "' + trans.s4_wa + '"\n    }' + a
  );
  code = code.replace(
    new RegExp("(\\s*" + lang + ": \\{\\s*[\\s\\S]*?s7: \\{[\\s\\S]*?micro_new: .*?)\\}(\\s*,\\s*selector: \\{)"),
    (m, b, a) => b + ',\n      wa: "' + trans.s7_wa + '"\n    }' + a
  );
  code = code.replace(
    new RegExp("(\\s*" + lang + ": \\{\\s*[\\s\\S]*?gallery: \\{[\\s\\S]*?micro: \".*?\")(\\s*\\})"),
    (m, b, a) => b + ',\n      wa: "' + trans.gal_wa + '"\n    ' + a
  );
}

fs.writeFileSync('src/lib/i18n.tsx', code);
