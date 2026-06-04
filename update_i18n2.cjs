const fs = require('fs');

const file = fs.readFileSync('src/lib/i18n.tsx', 'utf8');

const replacements = {
  es: {
    title1: "El cambio se nota",
    title2: "antes del check-in.",
    sub: "De usado a listo. De problema a control. Así debe verse un apartamento antes de recibir al próximo huésped.",
    items: [
      { title: "Cocina lista antes del check-in", caption: "Superficies limpias. Orden visible. Espacio preparado." },
      { title: "Baño limpio. Huésped tranquilo.", caption: "Espejo, lavabo, suelo y detalles bajo control." },
      { title: "Habitación preparada para recibir", caption: "Cama lista. Espacio ordenado. Primera impresión protegida." }
    ],
    before: "Antes",
    after: "Después",
    cta: "¿Quieres este nivel antes del próximo huésped?",
    btn: "Pedir disponibilidad por WhatsApp",
    micro: "Respuesta rápida. Coordinación directa. Sin pérdida de tiempo."
  },
  pt: {
    title1: "A mudança nota-se",
    title2: "antes do check-in.",
    sub: "De usado a pronto. De problema a controlo. É assim que um apartamento deve estar antes de receber o próximo hóspede.",
    items: [
      { title: "Cozinha pronta antes do check-in", caption: "Superfícies limpas. Ordem visível. Espaço preparado." },
      { title: "Casa de banho limpa. Hóspede tranquilo.", caption: "Espelho, lavatório, chão e detalhes sob controlo." },
      { title: "Quarto preparado para receber", caption: "Cama pronta. Espaço ordenado. Primeira impressão protegida." }
    ],
    before: "Antes",
    after: "Depois",
    cta: "Queres este nível antes do próximo hóspede?",
    btn: "Pedir disponibilidade pelo WhatsApp",
    micro: "Resposta rápida. Coordenação direta. Sem perda de tempo."
  },
  en: {
    title1: "The change is noticed",
    title2: "before check-in.",
    sub: "From used to ready. From problem to under control. This is how an apartment should look before receiving the next guest.",
    items: [
      { title: "Kitchen ready before check-in", caption: "Clean surfaces. Visible order. Prepared space." },
      { title: "Clean bathroom. Calm guest.", caption: "Mirror, sink, floor and details under control." },
      { title: "Room prepared to receive", caption: "Bed ready. Tidy space. First impression protected." }
    ],
    before: "Before",
    after: "After",
    cta: "Do you want this level before the next guest?",
    btn: "Request availability via WhatsApp",
    micro: "Fast response. Direct coordination. No wasting time."
  },
  fr: {
    title1: "Le changement se remarque",
    title2: "avant le check-in.",
    sub: "D'utilisé à prêt. De problème à sous contrôle. Voici à quoi doit ressembler un appartement avant de recevoir le prochain client.",
    items: [
      { title: "Cuisine prête avant le check-in", caption: "Surfaces propres. Ordre visible. Espace préparé." },
      { title: "Salle de bain propre. Client serein.", caption: "Miroir, lavabo, sol et détails sous contrôle." },
      { title: "Chambre préparée pour recevoir", caption: "Lit prêt. Espace ordonné. Première impression protégée." }
    ],
    before: "Avant",
    after: "Après",
    cta: "Voulez-vous ce niveau avant le prochain client ?",
    btn: "Demander la disponibilité sur WhatsApp",
    micro: "Réponse rapide. Coordination directe. Pas de perte de temps."
  },
  de: {
    title1: "Die Veränderung ist sichtbar",
    title2: "vor dem Check-in.",
    sub: "Von gebraucht zu bereit. Vom Problem zur Kontrolle. So sollte eine Wohnung vor dem Empfang des nächsten Gastes aussehen.",
    items: [
      { title: "Küche bereit vor dem Check-in", caption: "Saubere Oberflächen. Sichtbare Ordnung. Vorbereiteter Raum." },
      { title: "Sauberes Bad. Ruhiger Gast.", caption: "Spiegel, Waschbecken, Boden und Details unter Kontrolle." },
      { title: "Zimmer bereit zum Empfang", caption: "Bett bereit. Aufgeräumter Raum. Erster Eindruck geschützt." }
    ],
    before: "Vorher",
    after: "Nachher",
    cta: "Möchten Sie dieses Niveau vor dem nächsten Gast?",
    btn: "Verfügbarkeit per WhatsApp anfragen",
    micro: "Schnelle Antwort. Direkte Koordination. Kein Zeitverlust."
  },
  uk: {
    title1: "Зміни помітні",
    title2: "до check-in.",
    sub: "Від використаного до готового. Від проблеми до контролю. Так має виглядати квартира перед прийомом наступного гостя.",
    items: [
      { title: "Кухня готова до check-in", caption: "Чисті поверхні. Видимий порядок. Підготовлений простір." },
      { title: "Чиста ванна. Спокійний гість.", caption: "Дзеркало, раковина, підлога та деталі під контролем." },
      { title: "Кімната підготовлена до прийому", caption: "Ліжко готове. Охайний простір. Перше враження захищене." }
    ],
    before: "До",
    after: "Після",
    cta: "Хочете такий рівень перед наступним гостем?",
    btn: "Запитати доступність через WhatsApp",
    micro: "Швидка відповідь. Пряма координація. Без втрати часу."
  },
  ru: {
    title1: "Изменения заметны",
    title2: "до check-in.",
    sub: "От использованного к готовому. От проблемы к контролю. Так должна выглядеть квартира перед приездом следующего гостя.",
    items: [
      { title: "Кухня готова к check-in", caption: "Чистые поверхности. Видимый порядок. Подготовленное пространство." },
      { title: "Чистая ванная. Спокойный гость.", caption: "Зеркало, раковина, пол и детали под контролем." },
      { title: "Комната подготовлена к приему", caption: "Кровать готова. Опрятное пространство. Первое впечатление защищено." }
    ],
    before: "До",
    after: "После",
    cta: "Хотите такой уровень перед следующим гостем?",
    btn: "Узнать доступность через WhatsApp",
    micro: "Быстрый ответ. Прямая координация. Без потери времени."
  },
  pl: {
    title1: "Zmianę widać",
    title2: "przed check-inem.",
    sub: "Od używanego po gotowy. Od problemu po kontrolę. Tak powinien wyglądać apartament przed przyjęciem kolejnego gościa.",
    items: [
      { title: "Kuchnia gotowa przed check-in", caption: "Czyste powierzchnie. Widoczny porządek. Przygotowana przestrzeń." },
      { title: "Czysta łazienka. Spokojny gość.", caption: "Lustro, umywalka, podłoga i detale pod kontrolą." },
      { title: "Pokój przygotowany na przyjęcie", caption: "Łóżko gotowe. Uporządkowana przestrzeń. Pierwsze wrażenie chronione." }
    ],
    before: "Przed",
    after: "Po",
    cta: "Chcesz takiego poziomu przed kolejnym gościem?",
    btn: "Zapytaj o dostępność na WhatsApp",
    micro: "Szybka odpowiedź. Bezpośrednia koordynacja. Bez straty czasu."
  },
  nl: {
    title1: "De verandering is zichtbaar",
    title2: "voor de check-in.",
    sub: "Van gebruikt naar klaar. Van probleem naar controle. Zo moet een appartement eruitzien voordat de volgende gast aankomt.",
    items: [
      { title: "Keuken klaar voor check-in", caption: "Schone oppervlakken. Zichtbare orde. Voorbereide ruimte." },
      { title: "Schone badkamer. Rustige gast.", caption: "Spiegel, wastafel, vloer en details onder controle." },
      { title: "Kamer klaar om te ontvangen", caption: "Bed klaar. Opgeruimde ruimte. Eerste indruk beschermd." }
    ],
    before: "Voor",
    after: "Na",
    cta: "Wil je dit niveau voor de volgende gast?",
    btn: "Vraag beschikbaarheid via WhatsApp",
    micro: "Snel antwoord. Directe coördinatie. Geen tijdverlies."
  },
  sv: {
    title1: "Förändringen syns",
    title2: "före incheckning.",
    sub: "Från använd till redo. Från problem till under kontroll. Så här bör en lägenhet se ut innan nästa gäst anländer.",
    items: [
      { title: "Kök redo före incheckning", caption: "Rena ytor. Synlig ordning. Förberett utrymme." },
      { title: "Rent badrum. Lugn gäst.", caption: "Spegel, handfat, golv och detaljer under kontroll." },
      { title: "Rum förberett att ta emot", caption: "Sängen klar. Städat utrymme. Första intrycket säkrat." }
    ],
    before: "Före",
    after: "Efter",
    cta: "Vill du ha den här nivån före nästa gäst?",
    btn: "Fråga om tillgänglighet på WhatsApp",
    micro: "Snabbt svar. Direkt samordning. Ingen tidsförlust."
  },
  no: {
    title1: "Endringen merkes",
    title2: "før innsjekking.",
    sub: "Fra brukt til klar. Fra problem til under kontroll. Slik bør en leilighet se ut før neste gjest ankommer.",
    items: [
      { title: "Kjøkken klart før innsjekking", caption: "Rene overflater. Synlig orden. Forberedt rom." },
      { title: "Rent bad. Rolig gjest.", caption: "Speil, vask, gulv og detaljer under kontroll." },
      { title: "Rom forberedt på å ta imot", caption: "Sengen klar. Ryddig rom. Førsteinntrykket beskyttet." }
    ],
    before: "Før",
    after: "Etter",
    cta: "Vil du ha dette nivået før neste gjest?",
    btn: "Be om tilgjengelighet på WhatsApp",
    micro: "Raskt svar. Direkte koordinering. Ingen tidsspille."
  }
};

let newFile = file;

// Update each language
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

// Remove the obsolete "note" property from the default interface if it's still there
newFile = newFile.replace(/note:\s*string;\s*\n/g, "");

fs.writeFileSync('src/lib/i18n.tsx', newFile);
console.log('Successfully updated i18n.tsx');
