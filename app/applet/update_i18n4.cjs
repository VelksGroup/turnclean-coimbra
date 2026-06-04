const fs = require('fs');

const file = fs.readFileSync('src/lib/i18n.tsx', 'utf8');

const replacements = {
  es: {
    title1: "El cambio se nota",
    title2: "antes del check-in.",
    sub: "De usado a listo. De problema a control. Así debe verse un apartamento antes de recibir al próximo huésped.",
    items: [
      { title: "Cocina lista antes del check-in", caption: "De uso real a espacio limpio, ordenado y preparado." },
      { title: "Baño limpio. Huésped tranquilo.", caption: "Espejo, lavabo, encimera y detalles bajo control antes de recibir." },
      { title: "Limpieza profunda visible.", caption: "Cuando el estado exige más, el resultado tiene que verse." }
    ],
    before: "ANTES",
    after: "DESPUÉS",
    cta: "¿Quieres este nivel antes del próximo huésped?",
    btn: "Pedir disponibilidad por WhatsApp",
    micro: "Respuesta rápida. Coordinación directa. Sin pérdida de tiempo."
  },
  pt: {
    title1: "A mudança nota-se",
    title2: "antes do check-in.",
    sub: "De usado a pronto. De problema a controlo. É assim que um apartamento deve estar antes de receber o próximo hóspede.",
    items: [
      { title: "Cozinha pronta antes do check-in", caption: "De uso real a espaço limpo, ordenado e preparado." },
      { title: "Casa de banho limpa. Hóspede tranquilo.", caption: "Espelho, lavatório, bancada e detalhes sob controlo." },
      { title: "Limpeza profunda visível.", caption: "Quando o estado exige mais, o resultado tem que se ver." }
    ],
    before: "ANTES",
    after: "DEPOIS",
    cta: "Queres este nível antes do próximo hóspede?",
    btn: "Pedir disponibilidade pelo WhatsApp",
    micro: "Resposta rápida. Coordenação direta. Sem perda de tempo."
  },
  en: {
    title1: "The change is noticed",
    title2: "before check-in.",
    sub: "From used to ready. From problem to control. This is how an apartment should look before receiving the next guest.",
    items: [
      { title: "Kitchen ready before check-in", caption: "From real use to a clean, tidy, and prepared space." },
      { title: "Clean bathroom. Calm guest.", caption: "Mirror, sink, countertop, and details under control." },
      { title: "Visible deep cleaning.", caption: "When the state demands more, the result must be visible." }
    ],
    before: "BEFORE",
    after: "AFTER",
    cta: "Do you want this level before the next guest?",
    btn: "Request availability via WhatsApp",
    micro: "Fast response. Direct coordination. No wasting time."
  },
  fr: {
    title1: "Le changement se remarque",
    title2: "avant le check-in.",
    sub: "D'utilisé à prêt. De problème à contrôle. Voici à quoi doit ressembler un appartement avant de recevoir le prochain client.",
    items: [
      { title: "Cuisine prête avant le check-in", caption: "De l'utilisation réelle à un espace propre, rangé et préparé." },
      { title: "Salle de bain propre. Client serein.", caption: "Miroir, lavabo, plan de travail et détails sous contrôle." },
      { title: "Nettoyage en profondeur visible.", caption: "Lorsque l'état exige plus, le résultat doit être visible." }
    ],
    before: "AVANT",
    after: "APRÈS",
    cta: "Voulez-vous ce niveau avant le prochain client ?",
    btn: "Demander la disponibilité sur WhatsApp",
    micro: "Réponse rapide. Coordination directe. Pas de perte de temps."
  },
  de: {
    title1: "Die Veränderung ist sichtbar",
    title2: "vor dem Check-in.",
    sub: "Von gebraucht zu bereit. Vom Problem zur Kontrolle. So sollte eine Wohnung vor dem Empfang des nächsten Gastes aussehen.",
    items: [
      { title: "Küche bereit vor dem Check-in", caption: "Von der tatsächlichen Nutzung zu einem sauberen Raum." },
      { title: "Sauberes Bad. Ruhiger Gast.", caption: "Spiegel, Waschbecken, Arbeitsplatte und Details unter Kontrolle." },
      { title: "Sichtbare Tiefenreinigung.", caption: "Wenn der Zustand mehr erfordert, muss das Ergebnis sichtbar sein." }
    ],
    before: "VORHER",
    after: "NACHHER",
    cta: "Möchten Sie dieses Niveau vor dem nächsten Gast?",
    btn: "Verfügbarkeit per WhatsApp anfragen",
    micro: "Schnelle Antwort. Direkte Koordination. Kein Zeitverlust."
  },
  uk: {
    title1: "Зміни помітні",
    title2: "до check-in.",
    sub: "Від використаного до готового. Від проблеми до контролю.",
    items: [
      { title: "Кухня готова до check-in", caption: "Від реального використання до чистого простору." },
      { title: "Чиста ванна. Спокійний гість.", caption: "Дзеркало, раковина, стільниця та деталі під контролем." },
      { title: "Видиме глибоке прибирання.", caption: "Коли стан вимагає більшого, результат має бути видимим." }
    ],
    before: "ДО",
    after: "ПІСЛЯ",
    cta: "Хочете такий рівень перед наступним гостем?",
    btn: "Запитати доступність через WhatsApp",
    micro: "Швидка відповідь. Пряма координація. Без втрати часу."
  },
  ru: {
    title1: "Изменения заметны",
    title2: "до check-in.",
    sub: "От использованного к готовому. От проблемы к контролю.",
    items: [
      { title: "Кухня готова к check-in", caption: "От реального использования к чистому пространству." },
      { title: "Чистая ванная. Спокойный гость.", caption: "Зеркало, раковина, столешница и детали под контролем." },
      { title: "Видимая глубокая уборка.", caption: "Когда состояние требует большего, результат должен быть видимым." }
    ],
    before: "ДО",
    after: "ПОСЛЕ",
    cta: "Хотите такой уровень перед следующим гостем?",
    btn: "Узнать доступность через WhatsApp",
    micro: "Быстрый ответ. Прямая координация. Без потери времени."
  },
  pl: {
    title1: "Zmianę widać",
    title2: "przed check-inem.",
    sub: "Od używanego po gotowy. Tak powinien wyglądać apartament przed przyjęciem gościa.",
    items: [
      { title: "Kuchnia gotowa przed check-in", caption: "Od rzeczywistego użytkowania po czystą, funkcjonalną przestrzeń." },
      { title: "Czysta łazienka. Spokojny gość.", caption: "Lustro, umywalka, blat i detale pod kontrolą." },
      { title: "Widoczne głębokie czyszczenie.", caption: "Gdy stan wymaga więcej, wynik musi być widoczny." }
    ],
    before: "PRZED",
    after: "PO",
    cta: "Chcesz takiego poziomu przed kolejnym gościem?",
    btn: "Zapytaj o dostępność na WhatsApp",
    micro: "Szybka odpowiedź. Bezpośrednia koordynacja. Bez straty czasu."
  },
  nl: {
    title1: "De verandering is zichtbaar",
    title2: "voor de check-in.",
    sub: "Van gebruikt naar klaar. Van probleem naar controle.",
    items: [
      { title: "Keuken klaar voor check-in", caption: "Van echt gebruik naar een schone en opgeruimde ruimte." },
      { title: "Schone badkamer. Rustige gast.", caption: "Spiegel, wastafel, aanrecht en details onder controle." },
      { title: "Zichtbare dieptereiniging.", caption: "Buitengewone resultaten voor veeleisende omstandigheden." }
    ],
    before: "VOOR",
    after: "NA",
    cta: "Wil je dit niveau voor de volgende gast?",
    btn: "Vraag beschikbaarheid via WhatsApp",
    micro: "Snel antwoord. Directe coördinatie. Geen tijdverlies."
  },
  sv: {
    title1: "Förändringen syns",
    title2: "före incheckning.",
    sub: "Från använd till redo. Från problem till under kontroll.",
    items: [
      { title: "Kök redo före incheckning", caption: "Från verklig användning till ett rent och prydligt utrymme." },
      { title: "Rent badrum. Lugn gäst.", caption: "Spegel, handfat, bänkskiva och detaljer under kontroll." },
      { title: "Synlig djuprengöring.", caption: "När tillståndet kräver mer måste resultatet synas." }
    ],
    before: "FÖRE",
    after: "EFTER",
    cta: "Vill du ha den här nivån före nästa gäst?",
    btn: "Fråga om tillgänglighet på WhatsApp",
    micro: "Snabbt svar. Direkt samordning. Ingen tidsförlust."
  },
  no: {
    title1: "Endringen merkes",
    title2: "før innsjekking.",
    sub: "Fra brukt til klar. Fra problem til under kontroll.",
    items: [
      { title: "Kjøkken klart før innsjekking", caption: "Fra reell bruk til et rent og ryddig rom." },
      { title: "Rent bad. Rolig gjest.", caption: "Speil, vask, benkeplate og detaljer under kontroll." },
      { title: "Synlig dyprengjøring.", caption: "Når tilstanden krever mer, må resultatet synes." }
    ],
    before: "FØR",
    after: "ETTER",
    cta: "Vil du ha dette nivået før neste gjest?",
    btn: "Be om tilgjengelighet på WhatsApp",
    micro: "Raskt svar. Direkte koordinering. Ingen tidsspille."
  }
};

let newFile = file;

for (const [lang, data] of Object.entries(replacements)) {
  const regex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?)gallery:\\s*\\{[\\s\\S]*?(?:micro:\\s*"[^"]*"|micro:\\s*'[^']*')[\\s\\S]*?\\}\\s*(?=\\}|,)`);
  newFile = newFile.replace(regex, `$1gallery: {
      title1: "${data.title1}",
      title2: "${data.title2}",
      sub: "${data.sub}",
      items: [
        {
          title: "${data.items[0].title}",
          caption: "${data.items[0].caption}"
        },
        {
          title: "${data.items[1].title}",
          caption: "${data.items[1].caption}"
        },
        {
          title: "${data.items[2].title}",
          caption: "${data.items[2].caption}"
        }
      ],
      before: "${data.before}",
      after: "${data.after}",
      cta: "${data.cta}",
      btn: "${data.btn}",
      micro: "${data.micro}"
    }`);
}

fs.writeFileSync('src/lib/i18n.tsx', newFile);
console.log('Successfully updated i18n.tsx copy');
