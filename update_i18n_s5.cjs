const fs = require('fs');
const file = fs.readFileSync('src/lib/i18n.tsx', 'utf8');

const s2_replacements = {
  es: {
    title1: "Una mala limpieza",
    title2: "puede costar una reserva.",
    sub: "En temporada alta, un error pequeño se convierte en una mala reseña.",
    micro: "No arriesgues una reserva de 2.000€ por una limpieza mal preparada.",
    c1: "Check-in retrasado",
    c1_sub: "El huésped espera. La reseña baja.",
    c2: "Huésped insatisfecho",
    c2_sub: "Una foto suya puede destruir tu confianza.",
    c3: "Review negativa",
    c3_sub: "Menos estrellas. Menos reservas.",
    c4: "Dinero perdido",
    c4_sub: "El error pequeño se paga grande.",
    final: "El coste real no es limpiar. Es fallar."
  },
  pt: {
    title1: "Uma má limpeza",
    title2: "pode custar uma reserva.",
    sub: "Na época alta, um pequeno erro transforma-se numa má avaliação.",
    micro: "Não arrisques uma reserva de 2.000€ por uma limpeza mal preparada.",
    c1: "Check-in atrasado",
    c1_sub: "O hóspede espera. A avaliação desce.",
    c2: "Hóspede insatisfeito",
    c2_sub: "Uma foto dele pode destruir a tua confiança.",
    c3: "Review negativa",
    c3_sub: "Menos estrelas. Menos reservas.",
    c4: "Dinheiro perdido",
    c4_sub: "O pequeno erro paga-se caro.",
    final: "O custo real não é limpar. É falhar."
  },
  en: {
    title1: "A bad cleaning",
    title2: "can cost a booking.",
    sub: "In high season, a small mistake turns into a bad review.",
    micro: "Don't risk a €2,000 booking for a poorly prepared cleaning.",
    c1: "Delayed check-in",
    c1_sub: "The guest waits. The review drops.",
    c2: "Dissatisfied guest",
    c2_sub: "A single photo can destroy their trust.",
    c3: "Negative review",
    c3_sub: "Fewer stars. Fewer bookings.",
    c4: "Lost money",
    c4_sub: "A small mistake costs a lot.",
    final: "The real cost isn't cleaning. It's failing."
  },
  fr: {
    title1: "Un mauvais nettoyage",
    title2: "peut coûter une réservation.",
    sub: "En haute saison, la moindre erreur se transforme en un mauvais commentaire.",
    micro: "Ne risquez pas une réservation de 2 000 € pour un nettoyage mal préparé.",
    c1: "Check-in retardé",
    c1_sub: "Le client attend. La note baisse.",
    c2: "Client insatisfait",
    c2_sub: "Une seule de ses photos peut détruire votre réputation.",
    c3: "Avis négatif",
    c3_sub: "Moins d'étoiles. Moins de réservations.",
    c4: "Argent perdu",
    c4_sub: "La petite erreur coûte cher.",
    final: "Le vrai coût n'est pas de nettoyer. C'est d'échouer."
  },
  de: {
    title1: "Eine schlechte Reinigung",
    title2: "kann eine Buchung kosten.",
    sub: "In der Hochsaison wird ein kleiner Fehler zu einer schlechten Bewertung.",
    micro: "Riskieren Sie keine 2.000 €-Buchung für eine schlecht vorbereitete Reinigung.",
    c1: "Verspäteter Check-in",
    c1_sub: "Der Gast wartet. Die Bewertung sinkt.",
    c2: "Unzufriedener Gast",
    c2_sub: "Ein Foto von ihm kann Ihr Vertrauen zerstören.",
    c3: "Negative Bewertung",
    c3_sub: "Weniger Sterne. Weniger Buchungen.",
    c4: "Geldverlust",
    c4_sub: "Der kleine Fehler kostet viel.",
    final: "Die wahren Kosten sind nicht das Putzen. Es ist das Scheitern."
  },
  pl: {
    title1: "Złe sprzątanie",
    title2: "może kosztować rezerwację.",
    sub: "W sezonie mały błąd zamienia się w złą opinię.",
    micro: "Nie ryzykuj rezerwacji za 2000 € przez złe przygotowanie.",
    c1: "Opóźniony check-in",
    c1_sub: "Gość czeka. Ocena spada.",
    c2: "Niezadowolony gość",
    c2_sub: "Jedno jego zdjęcie może zniszczyć twoją reputację.",
    c3: "Negatywna opinia",
    c3_sub: "Mniej gwiazdek. Mniej rezerwacji.",
    c4: "Stracone pieniądze",
    c4_sub: "Mały błąd kosztuje dużo.",
    final: "Prawdziwym kosztem nie jest sprzątanie. Jest nim porażka."
  },
  uk: {
    title1: "Погане прибирання",
    title2: "може коштувати бронювання.",
    sub: "У високий сезон невелика помилка перетворюється на поганий відгук.",
    micro: "Не ризикуйте бронюванням на 2000 євро через погану підготовку.",
    c1: "Затриманий check-in",
    c1_sub: "Гість чекає. Оцінка падає.",
    c2: "Незадоволений гість",
    c2_sub: "Його фото може зруйнувати вашу довіру.",
    c3: "Негативний відгук",
    c3_sub: "Менше зірок. Менше бронювань.",
    c4: "Втрачені гроші",
    c4_sub: "Невелика помилка коштує дорого.",
    final: "Справжня ціна — це не прибирання. Це невдача."
  },
  ru: {
    title1: "Плохая уборка",
    title2: "может стоить бронирования.",
    sub: "В высокий сезон небольшая ошибка оборачивается плохим отзывом.",
    micro: "Не рискуйте бронированием на 2000 евро из-за плохой подготовки.",
    c1: "Задержанный check-in",
    c1_sub: "Гость ждет. Оценка падает.",
    c2: "Недовольный гость",
    c2_sub: "Его фото может разрушить ваше доверие.",
    c3: "Негативный отзыв",
    c3_sub: "Меньше звезд. Меньше бронирований.",
    c4: "Потерянные деньги",
    c4_sub: "Маленькая ошибка стоит дорого.",
    final: "Настоящая цена — это не уборка. Это провал."
  },
  nl: {
    title1: "Een slechte schoonmaak",
    title2: "kan een boeking kosten.",
    sub: "In het hoogseizoen wordt een kleine fout een slechte recensie.",
    micro: "Riskeer geen boeking van € 2.000 voor een slecht voorbereide schoonmaak.",
    c1: "Vertraagde check-in",
    c1_sub: "De gast wacht. De score daalt.",
    c2: "Ontevreden gast",
    c2_sub: "Een foto van hem kan uw vertrouwen vernietigen.",
    c3: "Negatieve review",
    c3_sub: "Minder sterren. Minder boekingen.",
    c4: "Verloren geld",
    c4_sub: "De kleine fout kost veel.",
    final: "De echte kosten zijn niet schoonmaken. Het is falen."
  },
  sv: {
    title1: "En dålig städning",
    title2: "kan kosta en bokning.",
    sub: "Under högsäsong blir ett litet fel en dålig recension.",
    micro: "Riskera inte en bokning på 2 000 € för en dåligt förberedd städning.",
    c1: "Försenad incheckning",
    c1_sub: "Gästen väntar. Betyget sjunker.",
    c2: "Missnöjd gäst",
    c2_sub: "Ett foto kan förstöra ditt förtroende.",
    c3: "Negativ recension",
    c3_sub: "Färre stjärnor. Färre bokningar.",
    c4: "Förlorade pengar",
    c4_sub: "Det lilla felet kostar mycket.",
    final: "Den verkliga kostnaden är inte att städa. Det är att misslyckas."
  },
  no: {
    title1: "En dårlig rengjøring",
    title2: "kan koste en bestilling.",
    sub: "I høysesongen blir en liten feil en dårlig anmeldelse.",
    micro: "Ikke risiker en bestilling på 2000 € for en dårlig forberedt rengjøring.",
    c1: "Forsinket innsjekking",
    c1_sub: "Gjesten venter. Rangeringen synker.",
    c2: "Misfornøyd gjest",
    c2_sub: "Et bilde fra dem kan ødelegge din troverdighet.",
    c3: "Negativ anmeldelse",
    c3_sub: "Færre stjerner. Færre bestillinger.",
    c4: "Tapte penger",
    c4_sub: "Den lille feilen koster mye.",
    final: "Den virkelige kostnaden er ikke å vaske. Det er å mislykkes."
  }
};

let newFile = file.replace(/s2:\s*\{[\s\S]*?c4:\s*string;\n\s*\};/, `s2: {
    title1: string;
    title2: string;
    sub: string;
    micro: string;
    c1: string;
    c1_sub: string;
    c2: string;
    c2_sub: string;
    c3: string;
    c3_sub: string;
    c4: string;
    c4_sub: string;
    final: string;
  };`);

for (const [lang, data] of Object.entries(s2_replacements)) {
  const regex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?)s2:\\s*\\{[\\s\\S]*?\\}\\s*,\\s*s3:`, '');
  newFile = newFile.replace(regex, `$1s2: {
      title1: "${data.title1}",
      title2: "${data.title2}",
      sub: "${data.sub}",
      micro: "${data.micro}",
      c1: "${data.c1}",
      c1_sub: "${data.c1_sub}",
      c2: "${data.c2}",
      c2_sub: "${data.c2_sub}",
      c3: "${data.c3}",
      c3_sub: "${data.c3_sub}",
      c4: "${data.c4}",
      c4_sub: "${data.c4_sub}",
      final: "${data.final}"
    },
    s3:`);
}

fs.writeFileSync('src/lib/i18n.tsx', newFile);
console.log('Successfully updated i18n.tsx s2 translations');
