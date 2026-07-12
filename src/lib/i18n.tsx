import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LanguageCode = 'pt' | 'es' | 'en' | 'fr' | 'de' | 'pl' | 'uk' | 'ru' | 'nl' | 'sv' | 'no';

export const flags: Record<LanguageCode, string> = {
  pt: '🇵🇹',
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  pl: '🇵🇱',
  uk: '🇺🇦',
  ru: '🇷🇺',
  nl: '🇳🇱',
  sv: '🇸🇪',
  no: '🇳🇴'
};

interface Translation {
  hero: {
    tagline: string;
    chip1: string;
    chip2: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    micro: string;
    badge_lux?: string;
    wa?: string;
  };
  s2: {
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
  };
  s3: {
    title1: string;
    title2: string;
    title3: string;
    sub: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
  };
    s4: {
    tag: string;
    title1: string;
    title2: string;
    sub2: string;
    b1: string;
    b2: string;
    b3: string;
    b4: string;
    b5: string;
    b6: string;
    choose: string;
    c1_name: string;
    c1_price: string;
    c1_desc: string;
    includes: string;
    c1_i1: string;
    c1_i2: string;
    c1_i3: string;
    c1_i4: string;
    c1_i5: string;
    c1_i6: string;
    c1_i7: string;
    c1_i8: string;
    c1_note: string;
    c1_btn: string;
    c2_name: string;
    c2_price: string;
    c2_desc: string;
    c2_i1: string;
    c2_i2: string;
    c2_i3: string;
    c2_i4: string;
    c2_i5: string;
    c2_i6: string;
    c2_i7: string;
    c2_i8: string;
    c2_i9: string;
    c2_i10: string;
    c2_i11: string;
    c2_note: string;
    c2_btn: string;
    also_title: string;
    a1: string;
    a2: string;
    a3: string;
    a4: string;
    a5: string;
    a6: string;
    a7: string;
    a_top: string;
    a_bottom: string;
    close_title: string;
    disclaimer: string;
    wa?: string;
  };
    s5: {
    title_new: string;
    sub_new: string;
    desc1_new: string;
    desc2_new: string;
    p_new: string;
    tag_new: string;
  };
  s6: {
    title: string;
    sub: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
  };
    s7: {
    title_new: string;
    sub_new: string;
    desc_new: string;
    btn_new: string;
    note_new: string;
    micro_new: string;
    wa?: string;
  };
  selector: {
    label: string;
    hint: string;
  };
  s8: {
    label: string;
    title: string;
    sub: string;
    c1_t: string;
    c1_d: string;
    c2_t: string;
    c2_d: string;
    c3_t: string;
    c3_d: string;
    badge: string;
    badge_s: string;
    stat1?: string;
    stat2?: string;
  };
  s9: {
    label: string;
    title: string;
    sub: string;
    t1_n: string;
    t1_p: string;
    t1_d: string;
    t2_n: string;
    t2_p: string;
    t2_d: string;
    t3_n: string;
    t3_p: string;
    t3_d: string;
    t4_n: string;
    t4_p: string;
    t4_d: string;
  };
  footer: {
    text: string;
  };
  privateHomes: {
    title1: string;
    title_highlight: string;
    highlight2: string;
    sub: string;
    micro: string;
    cards: { title: string; desc: string; }[];
    cta_title: string;
    btn: string;
    cta_micro: string;
    wa_msg?: string;
  };
  gallery: {
    title1: string;
    title2: string;
    sub: string;
    items: {
      title: string;
      caption: string;
    }[];
    before: string;
    after: string;
    cta: string;
    btn: string;
    micro: string;
    wa?: string;
  };
}

const translations: Record<LanguageCode, Translation> = {
  es: {
    hero: {
      tagline: "Limpieza turística · llaves · check-in",
      chip1: "Luxemburgo · PT/ES/FR",
      chip2: "Mañana · tarde · noche · fuera de horario",
      title1: "Tu apartamento no puede fallar en",
      title2: "temporada alta.",
      subtitle: "Limpieza, preparación y apoyo operativo para alojamientos turísticos en Coimbra.",
      cta: "Proteger mi apartamento por WhatsApp",
      micro: "Respuesta directa. Sin formularios. Sin pérdida de tiempo.",
      badge_lux: "13 años en Luxemburgo",
      wa: "Hola, quiero proteger mi apartamento turístico en Coimbra."
    },
    s2: {
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
    s3: {
      title1: "Check-out por la mañana.",
      title2: "Check-in por la tarde.",
      title3: "Cero margen.",
      sub: "Cuando el tiempo aprieta, el apartamento tiene que estar listo. Sin excusas.",
      step1: "Salida del huésped",
      step2: "Limpieza",
      step3: "Revisión",
      step4: "Entrada del nuevo huésped"
    },
    s4: {
      tag: "Lo que ganas al contratar",
      title1: "Elige una solución.",
      title2: "No solo limpieza.",
      sub2: "Tu huésped recibe el apartamento listo. Tú recibes menos estrés, menos fallos y más control.",
      b1: "Menos estrés",
      b2: "Menos retrasos",
      b3: "Menos quejas",
      b4: "Más control",
      b5: "Más rapidez",
      b6: "Más tranquilidad",
      choose: "Elige tu paquete",
      c1_name: "SOLO READY",
      c1_price: "Desde 39€",
      c1_desc: "Para cambios normales y apartamentos pequeños.",
      includes: "Incluye:",
      c1_i1: "Limpieza turística completa",
      c1_i2: "Cocina, baño, suelos y superficies",
      c1_i3: "Preparación visible del apartamento",
      c1_i4: "Revisión rápida antes del huésped",
      c1_i5: "Organización básica del espacio",
      c1_i6: "Retirada básica de basura",
      c1_i7: "Aviso si algo está fuera de lugar",
      c1_i8: "Fotos de confirmación si necesario",
      c1_note: "El apartamento queda limpio, ordenado y listo para recibir.",
      c1_btn: "Quiero esta opción",
      c2_name: "DUO EXPRESS",
      c2_price: "Desde 69€",
      c2_desc: "Para urgencias, cambios el mismo día y apartamentos con más carga.",
      c2_i1: "Equipo de 2 profesionales",
      c2_i2: "Limpieza turística acelerada",
      c2_i3: "Cocina, baños, suelos y superficies",
      c2_i4: "Preparación completa del apartamento",
      c2_i5: "Revisión detallada antes del check-in",
      c2_i6: "Control visual del estado del inmueble",
      c2_i7: "Retirada total de basura",
      c2_i8: "Fotos de confirmación si necesario",
      c2_i9: "Apoyo para check-in / check-out",
      c2_i10: "Entrega de llaves si necesario",
      c2_i11: "Mejor respuesta para horarios ajustados",
      c2_note: "Más velocidad. Más control. Menos riesgo antes del próximo huésped.",
      c2_btn: "Quiero prioridad",
      also_title: "También disponible:",
      a1: "Apartamentos turísticos",
      a2: "Viviendas particulares",
      a3: "Cafeterías y restaurantes",
      a4: "Limpieza profunda",
      a5: "Limpieza post-obra",
      a6: "Servicio fuera de horario",
      a7: "Urgencias el mismo día",
      a_top: "No trabajamos solo con alojamientos turísticos.",
      a_bottom: "También ayudamos viviendas, cafeterías, restaurantes y negocios locales en Coimbra.",
      close_title: "Si necesitas que el apartamento quede listo de verdad, aquí se resuelve.",
      disclaimer: "El próximo huésped no espera. Tu operación tampoco debería fallar.",
      wa: "Hola, quiero contratar un plan de limpieza para mi apartamento en Coimbra."
    },
    s5: {
      title_new: "13 años de estándar Luxemburgo.",
      sub_new: "Uno de los mercados más exigentes de Europa en limpieza.",
      desc1_new: "Casas privadas. Oficinas. Post-obra. Industrial.",
      desc2_new: "Sin improvisación.",
      p_new: "Ahora ese nivel entra en tu apartamento.",
      tag_new: "Rápido. Discreto. Preciso."
    },
    s6: {
      title: "Simple. Directo. Sin fricción.",
      sub: "Menos llamadas. Más solución.",
      step1: "Envías WhatsApp",
      step2: "Confirmamos zona y horario",
      step3: "Se realiza el servicio",
      step4: "Recibes confirmación y fotos"
    },
    s7: {
      title_new: "Menos excusas. Más control.",
      sub_new: "Tu huésped llega. El apartamento tiene que estar listo.",
      desc_new: "Si no quieres problemas, resuélvelo ahora.",
      btn_new: "Quiero resolverlo ya",
      note_new: "Respuesta rápida por WhatsApp.",
      micro_new: "Cuando el huésped entra, ya no hay margen.",
      wa: "Hola, me interesa asegurar la limpieza de mi apartamento en Coimbra."
    },
    selector: {
      label: "Selecciona tu idioma",
      hint: "Desliza para ver más idiomas"
    },
    s8: {
      label: "ATENCIÓN DIRECTA",
      title: "Servicio local. Estándar internacional.",
      sub: "Atendemos viviendas particulares, apartamentos turísticos y necesidades puntuales en Coimbra y Alrededores.",
      c1_t: "Respuesta rápida",
      c1_d: "Contacto directo por WhatsApp sin formularios.",
      c2_t: "Presupuesto claro",
      c2_d: "Precios transparentes y servicio adaptado a cada vivienda.",
      c3_t: "Experiencia internacional",
      c3_d: "Proyecto impulsado desde Luxemburgo y operando localmente en Coimbra y Alrededores.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Visión europea. Atención local.",
      stat1: "Años de experiencia",
      stat2: "Propiedades gestionadas"
    },
    s9: {
      label: "Testimonios",
      title: "Propietarios que confían en nosotros.",
      sub: "Apartamentos y viviendas gestionadas con los más altos estándares.",
      t1_n: "Carlos R.",
      t1_p: "Apartamento Turístico · Coimbra Centro",
      t1_d: "La tranquilidad de tener el check-in garantizado. Siempre dejan todo perfecto antes de la llegada de mis huéspedes. Una atención local excelente.",
      t2_n: "María F.",
      t2_p: "Vivienda Familiar · Aveiro",
      t2_d: "Como vivo fuera de Portugal, necesito a alguien de absoluta confianza para mi casa de verano. Su nivel de limpieza y profesionalidad es increíble.",
      t3_n: "Jens N.",
      t3_p: "Chalet Vacacional · Águeda",
      t3_d: "El servicio Duo Express es exactamente lo que necesitaba para los cambios de última hora. Rápidos, ordenados y con mucha experiencia.",
      t4_n: "Laura S.",
      t4_p: "Bungalow Vacacional · Anadia",
      t4_d: "Me quitaron un peso de encima inmenso. El nivel de detalle en cada habitación es digno de un hotel de lujo. 100% recomendados."
    },
    footer: {
      text: "Operación local en Coimbra. Inspirado por estándares europeos desde Luxemburgo."
    },
    privateHomes: {
      title1: "No solo apartamentos turísticos.",
      title_highlight: "También casas que ya no pueden esperar.",
      highlight2: "Si la casa te está venciendo, aquí se resuelve.",
      sub: "Para personas mayores, viudas, hogares exigentes o viviendas que necesitan una limpieza seria de verdad.",
      micro: "Orden real. Limpieza profunda. Ayuda puntual en Coimbra.",
      cards: [
        { title: "Casa limpia. Sin desgaste.", desc: "Cocina, baño, suelos, polvo y orden bajo control." },
        { title: "Apoyo para personas mayores", desc: "Si mantener la casa ya pesa demasiado, entramos nosotros." },
        { title: "Limpieza profunda real", desc: "No tapamos el problema. Lo resolvemos." },
        { title: "Servicio puntual o regular", desc: "Una vez, cada semana o cuando haga falta." }
      ],
      cta_title: "No esperes a que la casa empeore.",
      btn: "Pedir ayuda por WhatsApp",
      cta_micro: "Respuesta rápida. Atención discreta. Solución inmediata.",
      wa_msg: "Hola, necesito pedir ayuda sobre limpieza para una casa en Coimbra."
    },
  gallery: {
      title1: "El cambio se nota",
      title2: "antes del check-in.",
      sub: "De usado a listo. De problema a control. Así debe verse un apartamento antes de recibir al próximo huésped.",
      items: [
        {
          title: "Cocina lista antes del check-in",
          caption: "De uso real a espacio limpio, ordenado y preparado."
        },
        {
          title: "Baño limpio. Huésped tranquilo.",
          caption: "Espejo, lavabo, encimera y detalles bajo control antes de recibir."
        },
        {
          title: "Limpieza profunda visible.",
          caption: "Cuando el estado exige más, el resultado tiene que verse."
        }
      ],
      before: "ANTES",
      after: "DESPUÉS",
      cta: "¿Quieres este nivel antes del próximo huésped?",
      btn: "Pedir disponibilidad por WhatsApp",
      micro: "Respuesta rápida. Coordinación directa. Sin pérdida de tiempo.",
      wa: "Hola, necesito información sobre limpieza de apartamentos turísticos en Coimbra."
    
    }},
  pt: {
    hero: {
      tagline: "Limpeza turística · chaves · check-in",
      chip1: "Luxemburgo · PT/ES/FR",
      chip2: "Manhã · tarde · noite · fora de horário",
      title1: "O teu apartamento não pode falhar na",
      title2: "alta temporada.",
      subtitle: "Limpeza, preparação e apoio operacional para alojamentos turísticos em Coimbra.",
      cta: "Proteger o meu apartamento pelo WhatsApp",
      micro: "Resposta direta. Sem formulários. Sem perda de tempo.",
      badge_lux: "13 anos no Luxemburgo",
      wa: "Olá, quero proteger o meu apartamento turístico em Coimbra."
    },
    s2: {
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
    s3: {
      title1: "Check-out de manhã.",
      title2: "Check-in à tarde.",
      title3: "Margem zero.",
      sub: "Quando o tempo aperta, o apartamento tem que estar pronto. Sem desculpas.",
      step1: "Saída do hóspede",
      step2: "Limpeza",
      step3: "Revisão",
      step4: "Entrada do novo hóspede"
    },
    s4: {
      tag: "O que ganhas ao contratar",
      title1: "Escolhe uma solução.",
      title2: "Não apenas limpeza.",
      sub2: "O teu hóspede recebe o apartamento pronto. Tu recebes menos stress, menos falhas e mais controlo.",
      b1: "Menos stress",
      b2: "Menos atrasos",
      b3: "Menos queixas",
      b4: "Mais controlo",
      b5: "Mais rapidez",
      b6: "Mais tranquilidade",
      choose: "Escolhe o teu pacote",
      c1_name: "SOLO READY",
      c1_price: "Desde 39€",
      c1_desc: "Para mudanças normais e pequenos apartamentos.",
      includes: "Inclui:",
      c1_i1: "Limpeza turística completa",
      c1_i2: "Cozinha, casa de banho, chãos e superfícies",
      c1_i3: "Preparação visível do apartamento",
      c1_i4: "Revisão rápida antes do hóspede",
      c1_i5: "Organização básica do espaço",
      c1_i6: "Recolha básica do lixo",
      c1_i7: "Aviso se algo estiver fora do lugar",
      c1_i8: "Fotos de confirmação se necessário",
      c1_note: "O apartamento fica limpo, arrumado e pronto para receber.",
      c1_btn: "Quero esta opção",
      c2_name: "DUO EXPRESS",
      c2_price: "Desde 69€",
      c2_desc: "Para urgências, mudanças no próprio dia e apartamentos com maior carga.",
      c2_i1: "Equipa de 2 profissionais",
      c2_i2: "Limpeza turística acelerada",
      c2_i3: "Cozinha, casas de banho, chãos e superfícies",
      c2_i4: "Preparação completa do apartamento",
      c2_i5: "Revisão detalhada antes do check-in",
      c2_i6: "Controlo visual do estado do imóvel",
      c2_i7: "Recolha total do lixo",
      c2_i8: "Fotos de confirmação se necessário",
      c2_i9: "Apoio para check-in / check-out",
      c2_i10: "Entrega de chaves se necessário",
      c2_i11: "Melhor resposta para horários apertados",
      c2_note: "Mais velocidade. Mais controlo. Menor risco antes do próximo hóspede.",
      c2_btn: "Quero prioridade",
      also_title: "Também disponível:",
      a1: "Apartamentos turísticos",
      a2: "Habitações particulares",
      a3: "Cafetarias e restaurantes",
      a4: "Limpeza profunda",
      a5: "Limpeza pós-obra",
      a6: "Serviço fora de horas",
      a7: "Urgências no mesmo dia",
      a_top: "Não trabalhamos apenas com alojamentos turísticos.",
      a_bottom: "Também ajudamos casas, cafetarias, restaurantes e negócios locais em Coimbra.",
      close_title: "Se precisas que o apartamento fique verdadeiramente pronto, resolve aqui.",
      disclaimer: "Promoção de lançamento sujeita a tamanho do imóvel e nível de serviço.",
      wa: "Olá, quero contratar um plano de limpeza para o meu apartamento em Coimbra."
    },
    s5: {
      title_new: "13 anos de padrão Luxemburgo.",
      sub_new: "Um dos mercados com mais exigências na Europa em limpeza.",
      desc1_new: "Casas privadas. Escritórios. Pós-obra. Industrial.",
      desc2_new: "Sem improvisação.",
      p_new: "Agora esse nível entra no teu apartamento.",
      tag_new: "Rápido. Discreto. Preciso."
    },
    s6: {
      title: "Simples. Direto. Sem fricção.",
      sub: "Menos chamadas. Mais solução.",
      step1: "Envias WhatsApp",
      step2: "Confirmamos zona e horário",
      step3: "Realizamos o serviço",
      step4: "Recebes confirmação e fotos"
    },
    s7: {
      title_new: "Menos desculpas. Mais controlo.",
      sub_new: "O hóspede chega. O apartamento tem de estar pronto.",
      desc_new: "Se não queres problemas, resolve agora.",
      btn_new: "Quero resolver já",
      note_new: "Resposta rápida pelo WhatsApp.",
      micro_new: "Quando o hóspede entra, já não há margem.",
      wa: "Olá, estou interessado em garantir a limpeza do meu apartamento em Coimbra."
    },
    selector: {
      label: "Selecione o seu idioma",
      hint: "Deslize para ver mais idiomas"
    },
    s8: {
      label: "ATENDIMENTO DIRETO",
      title: "Serviço local. Padrão internacional.",
      sub: "Atendemos habitações particulares, apartamentos turísticos e necessidades pontuais em Coimbra e arredores.",
      c1_t: "Resposta rápida",
      c1_d: "Contacto direto pelo WhatsApp sem formulários.",
      c2_t: "Orçamento claro",
      c2_d: "Preços transparentes e serviço adaptado a cada habitação.",
      c3_t: "Experiência internacional",
      c3_d: "Projeto impulsionado desde o Luxemburgo e a operar localmente em Coimbra e arredores.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Visão europeia. Atendimento local.",
      stat1: "Anos de experiência",
      stat2: "Propriedades geridas"
    },
    s9: {
      label: "Testemunhos",
      title: "Proprietários que confiam em nós.",
      sub: "Apartamentos e habitações geridas com os mais altos padrões.",
      t1_n: "Carlos R.",
      t1_p: "Apartamento Turístico · Centro de Coimbra",
      t1_d: "A tranquilidade de ter o check-in garantido. Deixam sempre tudo perfeito antes da chegada dos meus hóspedes. Um excelente atendimento local.",
      t2_n: "María F.",
      t2_p: "Habitação Familiar · Aveiro",
      t2_d: "Como vivo fora de Portugal, preciso de alguém de absoluta confiança para a minha casa de verão. O seu nível de limpeza é incrível.",
      t3_n: "Jens N.",
      t3_p: "Moradia de Férias · Águeda",
      t3_d: "O serviço Duo Express é exatamente o que eu precisava. Rápidos, organizados e muito experientes.",
      t4_n: "Laura S.",
      t4_p: "Bungalow Turístico · Anadia",
      t4_d: "Tiraram-me um enorme peso das costas. O nível de detalhe em cada quarto é digno de um hotel de luxo."
    },
    footer: {
      text: "Operação local em Coimbra. Inspirado por padrões europeus a partir do Luxemburgo."
    },
    privateHomes: {
      title1: "Não apenas apartamentos turísticos.",
      title_highlight: "Também casas que já não podem esperar.",
      highlight2: "Se a casa está a vencer-te, aqui resolvemos.",
      sub: "Para pessoas idosas, viúvas, lares exigentes ou casas que precisam de uma limpeza a sério.",
      micro: "Ordem real. Limpeza profunda. Ajuda pontual em Coimbra.",
      cards: [
        { title: "Casa limpa. Sem problemas.", desc: "Cozinha, casa de banho, chão, pó e ordem sob controlo." },
        { title: "Apoio a idosos", desc: "Se manter a casa pesa demasiado, nós ajudamos." },
        { title: "Limpeza profunda real", desc: "Não tapamos o problema. Nós resolvemos." },
        { title: "Serviço pontual ou regular", desc: "Uma vez, semanalmente ou quando for preciso." }
      ],
      cta_title: "Não esperes que a casa piore.",
      btn: "Pedir ajuda pelo WhatsApp",
      cta_micro: "Resposta rápida. Atenção discreta. Solução imediata.",
      wa_msg: "Olá, preciso de ajuda com a limpeza de uma casa em Coimbra."
    },
  gallery: {
      title1: "A mudança nota-se",
      title2: "antes do check-in.",
      sub: "De usado a pronto. De problema a controlo. É assim que um apartamento deve estar antes de receber o próximo hóspede.",
      items: [
        {
          title: "Cozinha pronta antes do check-in",
          caption: "De uso real a espaço limpo, ordenado e preparado."
        },
        {
          title: "Casa de banho limpa. Hóspede tranquilo.",
          caption: "Espelho, lavatório, bancada e detalhes sob controlo."
        },
        {
          title: "Limpeza profunda visível.",
          caption: "Quando o estado exige mais, o resultado tem que se ver."
        }
      ],
      before: "ANTES",
      after: "DEPOIS",
      cta: "Queres este nível antes do próximo hóspede?",
      btn: "Pedir disponibilidade pelo WhatsApp",
      micro: "Resposta rápida. Coordenação direta. Sem perda de tempo.",
      wa: "Olá, preciso de informações sobre a limpeza de apartamentos turísticos em Coimbra."
    
    }},
  en: {
    hero: {
      tagline: "Tourist cleaning · keys · check-in",
      chip1: "Luxembourg · PT/ES/FR",
      chip2: "Morning · afternoon · night · out of hours",
      title1: "Your apartment cannot fail in",
      title2: "high season.",
      subtitle: "Cleaning, preparation and operational support for tourist rentals in Coimbra.",
      cta: "Protect my apartment on WhatsApp",
      micro: "Direct reply. No forms. No wasted time.",
      badge_lux: "13 years in Luxembourg",
      wa: "Hello, I want to protect my tourist apartment in Coimbra."
    },
    s2: {
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
    s3: {
      title1: "Morning check-out.",
      title2: "Afternoon check-in.",
      title3: "Zero margin.",
      sub: "When time is tight, the apartment must be ready. No excuses.",
      step1: "Guest check-out",
      step2: "Cleaning",
      step3: "Inspection",
      step4: "New guest check-in"
    },
    s4: {
      tag: "What you gain by hiring",
      title1: "Choose a solution.",
      title2: "Not just cleaning.",
      sub2: "Your guest receives a ready apartment. You receive less stress, fewer failures, and more control.",
      b1: "Less stress",
      b2: "Fewer delays",
      b3: "Fewer complaints",
      b4: "More control",
      b5: "More speed",
      b6: "More peace of mind",
      choose: "Choose your package",
      c1_name: "SOLO READY",
      c1_price: "From 39€",
      c1_desc: "For normal turnovers and small apartments.",
      includes: "Includes:",
      c1_i1: "Complete tourist cleaning",
      c1_i2: "Kitchen, bathroom, floors, and surfaces",
      c1_i3: "Visible preparation of the apartment",
      c1_i4: "Quick check before the guest",
      c1_i5: "Basic organization of the space",
      c1_i6: "Basic garbage removal",
      c1_i7: "Notice if something is out of place",
      c1_i8: "Confirmation photos if necessary",
      c1_note: "The apartment is clean, tidy, and ready to receive.",
      c1_btn: "I want this option",
      c2_name: "DUO EXPRESS",
      c2_price: "From 69€",
      c2_desc: "For emergencies, same-day turnovers, and heavier workload apartments.",
      c2_i1: "Team of 2 professionals",
      c2_i2: "Accelerated tourist cleaning",
      c2_i3: "Kitchen, bathrooms, floors, and surfaces",
      c2_i4: "Complete preparation of the apartment",
      c2_i5: "Detailed check before check-in",
      c2_i6: "Visual control of the property's condition",
      c2_i7: "Complete garbage removal",
      c2_i8: "Confirmation photos if necessary",
      c2_i9: "Support for check-in / check-out",
      c2_i10: "Key delivery if necessary",
      c2_i11: "Better response for tight schedules",
      c2_note: "More speed. More control. Less risk before the next guest.",
      c2_btn: "I want priority",
      also_title: "Also available:",
      a1: "Tourist apartments",
      a2: "Private homes",
      a3: "Cafes & restaurants",
      a4: "Deep cleaning",
      a5: "Post-construction cleaning",
      a6: "Out of hours service",
      a7: "Same-day emergencies",
      a_top: "We don't just work with tourist accommodations.",
      a_bottom: "We also help homes, cafes, restaurants, and local businesses in Coimbra.",
      close_title: "If you need the apartment to be truly ready, it is resolved here.",
      disclaimer: "Launch promotion subject to property size and service level.",
      wa: "Hello, I want to hire a cleaning plan for my tourist apartment in Coimbra."
    },
    s5: {
      title_new: "13 years of Luxembourg standard.",
      sub_new: "One of the most demanding cleaning markets in Europe.",
      desc1_new: "Private homes. Offices. Post-renovation. Industrial.",
      desc2_new: "No improvisation.",
      p_new: "Now that level enters your apartment.",
      tag_new: "Fast. Discreet. Precise."
    },
    s6: {
      title: "Simple. Direct. Frictionless.",
      sub: "Fewer calls. More solutions.",
      step1: "Send a WhatsApp",
      step2: "We confirm area and time",
      step3: "Service is performed",
      step4: "You receive confirmation and photos"
    },
    s7: {
      title_new: "Fewer excuses. More control.",
      sub_new: "Your guest arrives. The apartment has to be ready.",
      desc_new: "If you don't want problems, resolve it now.",
      btn_new: "I want to solve it now",
      note_new: "Fast response via WhatsApp.",
      micro_new: "When the guest enters, there is no margin.",
      wa: "Hello, I am interested in securing the cleaning of my apartment in Coimbra."
    },
    selector: {
      label: "Select your language",
      hint: "Swipe to see more languages"
    },
    s8: {
      label: "DIRECT ASSISTANCE",
      title: "Local service. International standard.",
      sub: "We serve private homes, holiday apartments and specific needs in Coimbra and surroundings.",
      c1_t: "Fast response",
      c1_d: "Direct contact via WhatsApp with no forms.",
      c2_t: "Clear pricing",
      c2_d: "Transparent prices and service adapted to each home.",
      c3_t: "International experience",
      c3_d: "Project driven from Luxembourg and operating locally in Coimbra and Surroundings.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "European vision. Local care.",
      stat1: "Years of experience",
      stat2: "Managed properties"
    },
    s9: {
      label: "Testimonials",
      title: "Owners who trust us.",
      sub: "Apartments and homes managed to the highest standards.",
      t1_n: "Carlos R.",
      t1_p: "Tourist Apartment · Coimbra Center",
      t1_d: "The peace of mind of having guaranteed check-ins. They always leave everything perfect before my guests arrive. Excellent local service.",
      t2_n: "María F.",
      t2_p: "Family Home · Aveiro",
      t2_d: "Since I live outside Portugal, I need someone I can fully trust for my summer house. Their cleaning level is incredible.",
      t3_n: "Jens N.",
      t3_p: "Holiday Villa · Águeda",
      t3_d: "The Duo Express service is exactly what I needed for last-minute turnovers. Fast, tidy, and very experienced.",
      t4_n: "Laura S.",
      t4_p: "Holiday Bungalow · Anadia",
      t4_d: "They took a huge weight off my shoulders. The attention to detail in every room is worthy of a luxury hotel."
    },
    footer: {
      text: "Local operation in Coimbra. Inspired by European standards from Luxembourg."
    },
    privateHomes: {
      title1: "Not just tourist apartments.",
      title_highlight: "Also homes that can no longer wait.",
      highlight2: "If the house is overwhelming you, we solve it here.",
      sub: "For the elderly, widows, demanding households, or homes that need a truly serious cleaning.",
      micro: "Real order. Deep cleaning. Timely help in Coimbra.",
      cards: [
        { title: "Clean home. No stress.", desc: "Kitchen, bathroom, floors, dust, and order under control." },
        { title: "Support for seniors", desc: "If maintaining the house is too heavy, we step in." },
        { title: "Real deep cleaning", desc: "We do not cover up the problem. We solve it." },
        { title: "Punctual or regular service", desc: "Once, every week, or whenever needed." }
      ],
      cta_title: "Don't wait for the house to get worse.",
      btn: "Ask for help on WhatsApp",
      cta_micro: "Quick response. Discreet attention. Immediate solution.",
      wa_msg: "Hello, I need help with cleaning a house in Coimbra."
    },
  gallery: {
      title1: "The change is noticed",
      title2: "before check-in.",
      sub: "From used to ready. From problem to control. This is how an apartment should look before receiving the next guest.",
      items: [
        {
          title: "Kitchen ready before check-in",
          caption: "From real use to a clean, tidy, and prepared space."
        },
        {
          title: "Clean bathroom. Calm guest.",
          caption: "Mirror, sink, countertop, and details under control."
        },
        {
          title: "Visible deep cleaning.",
          caption: "When the state demands more, the result must be visible."
        }
      ],
      before: "BEFORE",
      after: "AFTER",
      cta: "Do you want this level before the next guest?",
      btn: "Request availability via WhatsApp",
      micro: "Fast response. Direct coordination. No wasting time.",
      wa: "Hello, I need information about tourist apartment cleaning in Coimbra."
    
    }},
  fr: {
    hero: {
      tagline: "Nettoyage touristique · clés · check-in",
      chip1: "Luxembourg · PT/ES/FR",
      chip2: "Matin · après-midi · nuit · hors horaires",
      title1: "Votre appartement ne peut pas échouer en",
      title2: "haute saison.",
      subtitle: "Nettoyage, préparation et soutien opérationnel pour logements touristiques à Coimbra.",
      cta: "Protéger mon appartement sur WhatsApp",
      micro: "Réponse directe. Sans formulaire. Sans perte de temps.",
      badge_lux: "13 ans au Luxembourg",
      wa: "Bonjour, je veux protéger mon appartement touristique à Coimbra."
    },
    s2: {
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
    s3: {
      title1: "Check-out le matin.",
      title2: "Check-in l’après-midi.",
      title3: "Zéro marge.",
      sub: "Quand le temps presse, l'appartement doit être prêt. Sans excuses.",
      step1: "Départ du voyageur",
      step2: "Nettoyage",
      step3: "Inspection",
      step4: "Arrivée du nouveau voyageur"
    },
    s4: {
      tag: "Ce que vous gagnez en engageant",
      title1: "Choisissez une solution.",
      title2: "Pas seulement le nettoyage.",
      sub2: "Votre invité reçoit l'appartement prêt. Vous recevez moins de stress, moins d'échecs et plus de contrôle.",
      b1: "Moins de stress",
      b2: "Moins de retards",
      b3: "Moins de plaintes",
      b4: "Plus de contrôle",
      b5: "Plus de rapidité",
      b6: "Plus de tranquillité",
      choose: "Choisissez votre forfait",
      c1_name: "SOLO READY",
      c1_price: "Dès 39€",
      c1_desc: "Pour les changements normaux et les petits appartements.",
      includes: "Comprend :",
      c1_i1: "Nettoyage touristique complet",
      c1_i2: "Cuisine, salle de bain, sols et surfaces",
      c1_i3: "Préparation visible de l'appartement",
      c1_i4: "Vérification rapide avant l'invité",
      c1_i5: "Organisation de base de l'espace",
      c1_i6: "Retrait de base des déchets",
      c1_i7: "Avis si quelque chose n'est pas à sa place",
      c1_i8: "Photos de confirmation si nécessaire",
      c1_note: "L'appartement est propre, rangé et prêt à recevoir.",
      c1_btn: "Je veux cette option",
      c2_name: "DUO EXPRESS",
      c2_price: "Dès 69€",
      c2_desc: "Pour les urgences, changements le jour même et appartements à forte charge.",
      c2_i1: "Équipe de 2 professionnels",
      c2_i2: "Nettoyage touristique accéléré",
      c2_i3: "Cuisine, salles de bain, sols et surfaces",
      c2_i4: "Préparation complète de l'appartement",
      c2_i5: "Vérification détaillée avant le check-in",
      c2_i6: "Contrôle visuel de l'état de la propriété",
      c2_i7: "Retrait complet des déchets",
      c2_i8: "Photos de confirmation si nécessaire",
      c2_i9: "Soutien pour check-in / check-out",
      c2_i10: "Remise des clés si nécessaire",
      c2_i11: "Meilleure réponse pour horaires serrés",
      c2_note: "Plus de vitesse. Plus de contrôle. Moins de risque avant le prochain invité.",
      c2_btn: "Je veux la priorité",
      also_title: "Également disponible :",
      a1: "Appartements touristiques",
      a2: "Maisons privées",
      a3: "Cafés et restaurants",
      a4: "Nettoyage en profondeur",
      a5: "Nettoyage de fin de chantier",
      a6: "Service en dehors des heures d'ouverture",
      a7: "Urgences le jour même",
      a_top: "Nous ne travaillons pas uniquement avec les hébergements touristiques.",
      a_bottom: "Nous aidons également les maisons privées, les cafés, les restaurants et les commerces locaux à Coimbra.",
      close_title: "Si vous avez besoin que l'appartement soit vraiment prêt, résolvez-le ici.",
      disclaimer: "Promotion de lancement soumise à la taille de la propriété et au niveau de service.",
      wa: "Bonjour, je souhaite engager un plan de nettoyage pour mon appartement à Coimbra."
    },
    s5: {
      title_new: "13 ans de standard luxembourgeois.",
      sub_new: "L'un des marchés du nettoyage les plus exigeants d'Europe.",
      desc1_new: "Maisons privées. Bureaux. Fin de chantier. Industriel.",
      desc2_new: "Pas d'improvisation.",
      p_new: "Maintenant ce niveau entre dans votre appartement.",
      tag_new: "Rapide. Discret. Précis."
    },
    s6: {
      title: "Simple. Direct. Sans friction.",
      sub: "Moins d'appels. Plus de solutions.",
      step1: "Vous envoyez un WhatsApp",
      step2: "Nous confirmons la zone et l'heure",
      step3: "Le service est effectué",
      step4: "Vous recevez la confirmation et les photos"
    },
    s7: {
      title_new: "Moins d'excuses. Plus de contrôle.",
      sub_new: "Votre invité arrive. L'appartement doit être prêt.",
      desc_new: "Si vous ne voulez pas de problèmes, réglez-le maintenant.",
      btn_new: "Je veux régler cela maintenant",
      note_new: "Réponse rapide via WhatsApp.",
      micro_new: "Quand le client entre, il n'y a plus de marge.",
      wa: "Bonjour, je suis intéressé pour garantir le nettoyage de mon appartement à Coimbra."
    },
    selector: {
      label: "Sélectionnez votre langue",
      hint: "Glissez pour voir plus"
    },
    s8: {
      label: "ASSISTANCE DIRECTE",
      title: "Service local. Standard international.",
      sub: "Nous intervenons dans les maisons privées, les appartements touristiques et selon vos besoins à Coimbra et ses environs.",
      c1_t: "Réponse rapide",
      c1_d: "Contact direct via WhatsApp sans formulaires.",
      c2_t: "Devis clair",
      c2_d: "Prix transparents et service adapté à chaque logement.",
      c3_t: "Expérience internationale",
      c3_d: "Projet propulsé depuis le Luxembourg et opérant localement à Coimbra et ses environs.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Vision européenne. Service local.",
      stat1: "Années d'expérience",
      stat2: "Propriétés gérées"
    },
    s9: {
      label: "Témoignages",
      title: "Les propriétaires qui nous font confiance.",
      sub: "Des appartements et des maisons gérés selon les normes les plus élevées.",
      t1_n: "Carlos R.",
      t1_p: "Appartement Touristique · Centre de Coimbra",
      t1_d: "La sérénité d'avoir un check-in garanti. Ils laissent toujours tout parfait avant l'arrivée de mes invités. Excellent service.",
      t2_n: "María F.",
      t2_p: "Maison de Famille · Aveiro",
      t2_d: "Comme je vis hors du Portugal, j'ai besoin de quelqu'un de confiance. Leur niveau de nettoyage est incroyable.",
      t3_n: "Jens N.",
      t3_p: "Villa de Vacances · Águeda",
      t3_d: "Le service Duo Express est exactement ce qu'il me fallait. Rapide, propre et avec beaucoup d'expérience.",
      t4_n: "Laura S.",
      t4_p: "Bungalow de Vacances · Anadia",
      t4_d: "Ils m'ont enlevé un énorme poids. L'attention aux détails est digne d'un hôtel de luxe."
    },
    footer: {
      text: "Opération locale à Coimbra. Inspiré par les normes européennes depuis le Luxembourg."
    },
    privateHomes: {
      title1: "Pas seulement des locations touristiques.",
      title_highlight: "Aussi des maisons qui ne peuvent plus attendre.",
      highlight2: "Si la maison vous dépasse, on s'en occupe ici.",
      sub: "Pour les personnes âgées, les foyers exigeants ou les maisons qui ont besoin d'un vrai grand nettoyage.",
      micro: "Ordre réel. Nettoyage en profondeur. Aide ponctuelle à Coimbra.",
      cards: [
        { title: "Maison propre. Sans effort.", desc: "Cuisine, salle de bain, sols, poussière et ordre sous contrôle." },
        { title: "Soutien aux personnes âgées", desc: "Si l'entretien de la maison devient trop lourd, nous intervenons." },
        { title: "Vrai nettoyage en profondeur", desc: "Nous ne cachons pas le problème. Nous le résolvons." },
        { title: "Service ponctuel ou régulier", desc: "Une fois, chaque semaine ou quand cela est nécessaire." }
      ],
      cta_title: "N'attendez pas que la maison se détériore.",
      btn: "Demander de l'aide sur WhatsApp",
      cta_micro: "Réponse rapide. Discrétion. Solution immédiate.",
      wa_msg: "Bonjour, j'ai besoin d'aide pour le nettoyage d'une maison à Coimbra."
    },
  gallery: {
      title1: "Le changement se remarque",
      title2: "avant le check-in.",
      sub: "D'utilisé à prêt. De problème à contrôle. Voici à quoi doit ressembler un appartement avant de recevoir le prochain client.",
      items: [
        {
          title: "Cuisine prête avant le check-in",
          caption: "De l'utilisation réelle à un espace propre, rangé et préparé."
        },
        {
          title: "Salle de bain propre. Client serein.",
          caption: "Miroir, lavabo, plan de travail et détails sous contrôle."
        },
        {
          title: "Nettoyage en profondeur visible.",
          caption: "Lorsque l'état exige plus, le résultat doit être visible."
        }
      ],
      before: "AVANT",
      after: "APRÈS",
      cta: "Voulez-vous ce niveau avant le prochain client ?",
      btn: "Demander la disponibilité sur WhatsApp",
      micro: "Réponse rapide. Coordination directe. Pas de perte de temps.",
      wa: "Bonjour, j'ai besoin d'informations sur le nettoyage d'appartements touristiques à Coimbra."
    
    }},
  de: {
    hero: {
      tagline: "Tourist. Reinigung · Schlüssel · Check-in",
      chip1: "Luxemburg · PT/ES/FR",
      chip2: "Morgen · Nachmittag · Nacht · außerhalb der Zeiten",
      title1: "Ihre Wohnung darf nicht scheitern in der",
      title2: "Hochsaison.",
      subtitle: "Reinigung, Vorbereitung und operative Unterstützung für Ferienwohnungen in Coimbra.",
      cta: "Meine Wohnung per WhatsApp schützen",
      micro: "Direkte Antwort. Keine Formulare. Kein Zeitverlust.",
      badge_lux: "13 Jahre in Luxemburg",
      wa: "Hallo, ich möchte meine Ferienwohnung in Coimbra schützen."
    },
    s2: {
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
    s3: {
      title1: "Check-out am Morgen.",
      title2: "Check-in am Nachmittag.",
      title3: "Null Spielraum.",
      sub: "Wenn die Zeit drängt, muss die Wohnung bereit sein. Keine Ausreden.",
      step1: "Abreise des Gastes",
      step2: "Reinigung",
      step3: "Inspektion",
      step4: "Ankunft des neuen Gastes"
    },
    s4: {
      tag: "Was Sie durch Beauftragung gewinnen",
      title1: "Wählen Sie eine Lösung.",
      title2: "Nicht nur Reinigung.",
      sub2: "Ihr Gast erhält ein fertiges Apartment. Sie erhalten weniger Stress, weniger Fehler und mehr Kontrolle.",
      b1: "Weniger Stress",
      b2: "Weniger Verzögerungen",
      b3: "Weniger Beschwerden",
      b4: "Mehr Kontrolle",
      b5: "Mehr Schnelligkeit",
      b6: "Mehr Sicherheit",
      choose: "Wählen Sie Ihr Paket",
      c1_name: "SOLO READY",
      c1_price: "Ab 39€",
      c1_desc: "Für normale Wechsel und kleine Wohnungen.",
      includes: "Beinhaltet:",
      c1_i1: "Komplette touristische Reinigung",
      c1_i2: "Küche, Bad, Böden und Oberflächen",
      c1_i3: "Sichtbare Vorbereitung der Wohnung",
      c1_i4: "Schnelle Überprüfung vor dem Gast",
      c1_i5: "Grundlegende Organisation des Raumes",
      c1_i6: "Grundlegende Müllentsorgung",
      c1_i7: "Hinweis, falls etwas fehlt",
      c1_i8: "Bestätigungsfotos, falls nötig",
      c1_note: "Die Wohnung ist sauber, ordentlich und empfangsbereit.",
      c1_btn: "Ich wähle diese Option",
      c2_name: "DUO EXPRESS",
      c2_price: "Ab 69€",
      c2_desc: "Für Notfälle, Wechsel am selben Tag und Wohnungen mit mehr Aufwand.",
      c2_i1: "Team aus 2 Fachkräften",
      c2_i2: "Beschleunigte touristische Reinigung",
      c2_i3: "Küche, Bäder, Böden und Oberflächen",
      c2_i4: "Komplette Vorbereitung der Wohnung",
      c2_i5: "Detaillierte Überprüfung vor dem Check-in",
      c2_i6: "Visuelle Kontrolle des Zustands",
      c2_i7: "Vollständige Müllentsorgung",
      c2_i8: "Bestätigungsfotos, falls nötig",
      c2_i9: "Unterstützung für Check-in / Check-out",
      c2_i10: "Schlüsselübergabe, falls nötig",
      c2_i11: "Bessere Reaktion auf enge Zeitpläne",
      c2_note: "Mehr Geschwindigkeit. Mehr Kontrolle. Weniger Risiko beim nächsten Gast.",
      c2_btn: "Ich möchte Priorität",
      also_title: "Auch verfügbar:",
      a1: "Ferienwohnungen",
      a2: "Privathaushalte",
      a3: "Cafés und Restaurants",
      a4: "Tiefenreinigung",
      a5: "Bauendreinigung",
      a6: "Außerhalb der Geschäftszeiten",
      a7: "Notfälle am selben Tag",
      a_top: "Wir arbeiten nicht nur mit Ferienunterkünften.",
      a_bottom: "Wir helfen auch Privathaushalten, Cafés, Restaurants und lokalen Geschäften in Coimbra.",
      close_title: "Wenn Sie möchten, dass die Wohnung wirklich bereit ist, klären Sie es hier.",
      disclaimer: "Einführungsangebot abhängig von der Größe der Immobilie.",
      wa: "Hallo, ich möchte einen Reinigungsplan für meine Ferienwohnung in Coimbra buchen."
    },
    s5: {
      title_new: "13 Jahre Luxemburger Standard.",
      sub_new: "Einer der anspruchsvollsten Reinigungsmärkte Europas.",
      desc1_new: "Privathäuser. Büros. Bauendreinigung. Industrie.",
      desc2_new: "Keine Improvisation.",
      p_new: "Jetzt kommt dieses Niveau in Ihre Wohnung.",
      tag_new: "Schnell. Diskret. Präzise."
    },
    s6: {
      title: "Einfach. Direkt. Reibungslos.",
      sub: "Weniger Anrufe. Mehr Lösungen.",
      step1: "WhatsApp senden",
      step2: "Wir bestätigen Bereich und Zeit",
      step3: "Service wird durchgeführt",
      step4: "Sie erhalten Bestätigung und Fotos"
    },
    s7: {
      title_new: "Weniger Ausreden. Mehr Kontrolle.",
      sub_new: "Ihr Gast kommt. Die Wohnung muss fertig sein.",
      desc_new: "Wenn Sie keine Probleme wollen, lösen Sie es jetzt.",
      btn_new: "Ich möchte es jetzt lösen",
      note_new: "Schnelle Antwort über WhatsApp.",
      micro_new: "Wenn der Gast eintritt, gibt es keinen Spielraum mehr.",
      wa: "Hallo, ich bin daran interessiert, die Reinigung meiner Wohnung in Coimbra zu sichern."
    },
    selector: {
      label: "Wähle deine Sprache",
      hint: "Wischen für mehr Sprachen"
    },
    s8: {
      label: "DIREKTE BETREUUNG",
      title: "Lokaler Service. Internationaler Standard.",
      sub: "Wir betreuen Privathäuser, Ferienwohnungen und besondere Anforderungen in Coimbra und Umgebung.",
      c1_t: "Schnelle Antwort",
      c1_d: "Direkter Kontakt per WhatsApp ohne Formulare.",
      c2_t: "Klarer Kostenvoranschlag",
      c2_d: "Transparente Preise und auf jedes Wohnhaus abgestimmter Service.",
      c3_t: "Internationale Erfahrung",
      c3_d: "Ein Projekt initiiert in Luxemburg mit lokaler Ausführung in Coimbra und Umgebung.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Europäische Vision. Lokale Betreuung.",
      stat1: "Jahre Erfahrung",
      stat2: "Verwaltete Immobilien"
    },
    s9: {
      label: "Erfahrungsberichte",
      title: "Eigentümer, die uns vertrauen.",
      sub: "Ferienwohnungen und Häuser, die nach den höchsten Standards betreut werden.",
      t1_n: "Carlos R.",
      t1_p: "Ferienwohnung · Coimbra Zentrum",
      t1_d: "Die Sicherheit, garantierte Check-ins zu haben. Sie hinterlassen alles immer perfekt vor der Ankunft meiner Gäste.",
      t2_n: "María F.",
      t2_p: "Familienhaus · Aveiro",
      t2_d: "Da ich außerhalb von Portugal lebe, brauche ich jemanden, dem ich vertrauen kann. Ihre Reinigungsqualität ist unglaublich.",
      t3_n: "Jens N.",
      t3_p: "Ferienhaus · Águeda",
      t3_d: "Der Duo Express Service ist genau das, was ich für Last-Minute-Wechsel brauchte. Schnell und perfekt.",
      t4_n: "Laura S.",
      t4_p: "Ferienbungalow · Anadia",
      t4_d: "Sie haben mir eine große Last abgenommen. Die Detailgenauigkeit entspricht einem Luxushotel."
    },
    footer: {
      text: "Lokaler Betrieb in Coimbra. Inspiriert von europäischen Standards aus Luxemburg."
    },
    privateHomes: {
      title1: "Nicht nur Ferienwohnungen.",
      title_highlight: "Auch Häuser, die nicht länger warten können.",
      highlight2: "Wenn Ihnen der Haushalt über den Kopf wächst, lösen wir das.",
      sub: "Für Senioren, anspruchsvolle Haushalte oder Wohnungen, die eine echte Tiefenreinigung benötigen.",
      micro: "Echte Ordnung. Tiefenreinigung. Pünktliche Hilfe in Coimbra.",
      cards: [
        { title: "Sauberes Haus. Ohne Aufwand.", desc: "Küche, Bad, Böden, Staub und Ordnung unter Kontrolle." },
        { title: "Unterstützung für Senioren", desc: "Wenn die Hausarbeit zu viel wird, greifen wir ein." },
        { title: "Echte Tiefenreinigung", desc: "Wir verdecken das Problem nicht. Wir lösen es." },
        { title: "Einmaliger oder regelmäßiger Service", desc: "Einmalig, wöchentlich oder nach Bedarf." }
      ],
      cta_title: "Warten Sie nicht, bis das Haus noch schlimmer wird.",
      btn: "Hilfe per WhatsApp anfordern",
      cta_micro: "Schnelle Antwort. Diskrete Hilfe. Sofortige Lösung.",
      wa_msg: "Hallo, ich brauche Hilfe bei der Reinigung eines Hauses in Coimbra."
    },
  gallery: {
      title1: "Die Veränderung ist sichtbar",
      title2: "vor dem Check-in.",
      sub: "Von gebraucht zu bereit. Vom Problem zur Kontrolle. So sollte eine Wohnung vor dem Empfang des nächsten Gastes aussehen.",
      items: [
        {
          title: "Küche bereit vor dem Check-in",
          caption: "Von der tatsächlichen Nutzung zu einem sauberen Raum."
        },
        {
          title: "Sauberes Bad. Ruhiger Gast.",
          caption: "Spiegel, Waschbecken, Arbeitsplatte und Details unter Kontrolle."
        },
        {
          title: "Sichtbare Tiefenreinigung.",
          caption: "Wenn der Zustand mehr erfordert, muss das Ergebnis sichtbar sein."
        }
      ],
      before: "VORHER",
      after: "NACHHER",
      cta: "Möchten Sie dieses Niveau vor dem nächsten Gast?",
      btn: "Verfügbarkeit per WhatsApp anfragen",
      micro: "Schnelle Antwort. Direkte Koordination. Kein Zeitverlust.",
      wa: "Hallo, ich benötige Informationen zur Reinigung von Ferienwohnungen in Coimbra."
    
    }},
  uk: {
    hero: {
      tagline: "Туристичне прибирання · ключі · check-in",
      chip1: "Люксембург · PT/ES/FR",
      chip2: "Ранок · день · ніч · поза графіком",
      title1: "Ваша квартира не може підвести у",
      title2: "високий сезон.",
      subtitle: "Прибирання, підготовка та оперативна підтримка туристичного житла в Коїмбрі.",
      cta: "Захистити мою квартиру через WhatsApp",
      micro: "Пряма відповідь. Без форм. Без втрати часу.",
      badge_lux: "13 років у Люксембурзі",
      wa: "Добрий день, я хочу захистити свої туристичні апартаменти в Коїмбрі."
    },
    s2: {
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
    s3: {
      title1: "Check-out вранці.",
      title2: "Check-in вдень.",
      title3: "Нульовий запас.",
      sub: "Коли час тисне, квартира має бути готова. Без виправдань.",
      step1: "Виїзд гостя",
      step2: "Прибирання",
      step3: "Перевірка",
      step4: "Заїзд нового гостя"
    },
    s4: {
      tag: "Що ви отримуєте",
      title1: "Оберіть рішення.",
      title2: "Не тільки прибирання.",
      sub2: "Ваш гість отримує готову квартиру. Ви отримуєте менше стресу, менше помилок і більше контролю.",
      b1: "Менше стресу",
      b2: "Менше затримок",
      b3: "Менше скарг",
      b4: "Більше контролю",
      b5: "Більше швидкості",
      b6: "Більше спокою",
      choose: "Оберіть пакет",
      c1_name: "SOLO READY",
      c1_price: "Від 39€",
      c1_desc: "Для звичайних змін та невеликих квартир.",
      includes: "Включає:",
      c1_i1: "Повне туристичне прибирання",
      c1_i2: "Кухня, ванна, підлога та поверхні",
      c1_i3: "Видима підготовка квартири",
      c1_i4: "Швидка перевірка перед гостем",
      c1_i5: "Базова організація простору",
      c1_i6: "Базовий вивіз сміття",
      c1_i7: "Повідомлення про недоліки",
      c1_i8: "Фото стану при потребі",
      c1_note: "Квартира чиста, охайна та готова приймати.",
      c1_btn: "Обираю цей варіант",
      c2_name: "DUO EXPRESS",
      c2_price: "Від 69€",
      c2_desc: "Для термінових змін і квартир з великим навантаженням.",
      c2_i1: "Команда з 2 спеціалістів",
      c2_i2: "Прискорене прибирання",
      c2_i3: "Кухня, ванні кімнати, підлога та поверхні",
      c2_i4: "Повна підготовка квартири",
      c2_i5: "Детальна перевірка перед заїздом",
      c2_i6: "Візуальний контроль стану",
      c2_i7: "Повне вивезення сміття",
      c2_i8: "Фото стану при потребі",
      c2_i9: "Підтримка check-in / check-out",
      c2_i10: "Передача ключів",
      c2_i11: "Краща реакція на щільні графіки",
      c2_note: "Більше швидкості. Море контролю. Менше ризиків.",
      c2_btn: "Хочу пріоритет",
      also_title: "Також доступно:",
      a1: "Туристичні апартаменти",
      a2: "Приватні будинки",
      a3: "Кафе та ресторани",
      a4: "Генеральне прибирання",
      a5: "Прибирання після ремонту",
      a6: "Обслуговування в неробочий час",
      a7: "Термінові виклики в той же день",
      a_top: "Ми працюємо не тільки з туристичним житлом.",
      a_bottom: "Ми також допомагаємо приватним будинкам, кафе, ресторанам та місцевому бізнесу в Коїмбрі.",
      close_title: "Якщо потрібно, щоб квартира справді була готова - ми допоможемо.",
      disclaimer: "Акційна пропозиція залежить від площі.",
      wa: "Добрий день, я хочу замовити план прибирання для своїх апартаментів у Коїмбрі."
    },
    s5: {
      title_new: "13 років стандарту Люксембургу.",
      sub_new: "Один із найсуворіших ринків.",
      desc1_new: "Приватні будинки. Офіси. Після ремонту.",
      desc2_new: "Жодних імпровізацій.",
      p_new: "Тепер цей рівень у вашій квартирі.",
      tag_new: "Швидко. Дискретно. Точно."
    },
    s6: {
      title: "Просто. Прямо. Без тертя.",
      sub: "Менше дзвінків. Більше рішень.",
      step1: "Надсилаєте WhatsApp",
      step2: "Ми підтверджуємо район та час",
      step3: "Послуга виконується",
      step4: "Ви отримуєте підтвердження та фото"
    },
    s7: {
      title_new: "Менше виправдань. Більше контролю.",
      sub_new: "Гість прибуває. Квартира має бути готова.",
      desc_new: "Якщо не хочете проблем, виріште це зараз.",
      btn_new: "Вирішити зараз",
      note_new: "Швидка відповідь через WhatsApp.",
      micro_new: "Остання перевірка перед гостем.",
      wa: "Добрий день, мене цікавить забезпечення прибирання моїх апартаментів у Коїмбрі."
    },
    selector: {
      label: "Оберіть мову",
      hint: "Проведіть для більшого"
    },
    s8: {
      label: "ПРЯМЕ ОБСЛУГОВУВАННЯ",
      title: "Місцевий сервіс. Міжнародний стандарт.",
      sub: "Ми обслуговуємо приватні будинки, туристичні апартаменти та точкові потреби в Коїмбрі та околицях.",
      c1_t: "Швидка відповідь",
      c1_d: "Прямий контакт через WhatsApp без форм.",
      c2_t: "Чіткі ціни",
      c2_d: "Прозорі ціни та сервіс, адаптований під кожне житло.",
      c3_t: "Міжнародний досвід",
      c3_d: "Проєкт із Люксембургу, що працює локально в Коїмбрі та околицях.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Європейське бачення. Місцева увага.",
      stat1: "Років досвіду",
      stat2: "Управління нерухомістю"
    },
    s9: {
      label: "Відгуки",
      title: "Власники, які нам довіряють.",
      sub: "Апартаменти та будинки, що управляються за найвищими стандартами.",
      t1_n: "Carlos R.",
      t1_p: "Апартаменти · Центр Коїмбри",
      t1_d: "Спокій гарантованого заселення. Вони завжди роблять усе ідеально перед приїздом моїх гостей.",
      t2_n: "María F.",
      t2_p: "Сімейний будинок · Aveiro",
      t2_d: "Оскільки я живу за межами Португалії, мені потрібна надійна людина. Їхній рівень прибирання дивовижний.",
      t3_n: "Jens N.",
      t3_p: "Вілла · Águeda",
      t3_d: "Послуга Duo Express – це саме те, що мені було потрібно для швидких змін.",
      t4_n: "Laura S.",
      t4_p: "Бунгало · Anadia",
      t4_d: "Вони зняли з моїх плечей величезний тягар. Увага до деталей гідна розкішного готелю."
    },
    footer: {
      text: "Місцева діяльність у Коїмбрі. Натхненно європейськими стандартами з Люксембургу."
    },
    privateHomes: {
      title1: "Не лише туристичні апартаменти.",
      title_highlight: "Але й будинки, які більше не можуть чекати.",
      highlight2: "Якщо будинок вас обтяжує, ми вирішуємо це тут.",
      sub: "Для літніх людей, вимогливих сімей або будинків, які справді потребують серйозного прибирання.",
      micro: "Справжній порядок. Глибоке прибирання. Вчасна допомога в Коїмбрі.",
      cards: [
        { title: "Чистий дім. Без стресу.", desc: "Кухня, ванна, підлога, пил та порядок під контролем." },
        { title: "Підтримка для літніх людей", desc: "Якщо догляд за будинком стає надто важким, ми допоможемо." },
        { title: "Справжнє глибоке прибирання", desc: "Ми не приховуємо проблему. Ми її вирішуємо." },
        { title: "Одноразово або постійно", desc: "Один раз, щотижня або за потребою." }
      ],
      cta_title: "Не чекайте, поки стан будинку погіршиться.",
      btn: "Попросити про допомогу в WhatsApp",
      cta_micro: "Швидка відповідь. Делікатний підхід. Негайне рішення.",
      wa_msg: "Привіт, мені потрібна допомога з прибиранням будинку в Коїмбрі."
    },
  gallery: {
      title1: "Зміни помітні",
      title2: "до check-in.",
      sub: "Від використаного до готового. Від проблеми до контролю.",
      items: [
        {
          title: "Кухня готова до check-in",
          caption: "Від реального використання до чистого простору."
        },
        {
          title: "Чиста ванна. Спокійний гість.",
          caption: "Дзеркало, раковина, стільниця та деталі під контролем."
        },
        {
          title: "Видиме глибоке прибирання.",
          caption: "Коли стан вимагає більшого, результат має бути видимим."
        }
      ],
      before: "ДО",
      after: "ПІСЛЯ",
      cta: "Хочете такий рівень перед наступним гостем?",
      btn: "Запитати доступність через WhatsApp",
      micro: "Швидка відповідь. Пряма координація. Без втрати часу.",
      wa: "Добрий день, мені потрібна інформація про прибирання туристичних апартаментів у Коїмбрі."
    
    }},
  ru: {
    hero: {
      tagline: "Туристическая уборка · ключи · check-in",
      chip1: "Люксембург · PT/ES/FR",
      chip2: "Утро · день · ночь · вне графика",
      title1: "Ваша квартира не может подвести в",
      title2: "высокий сезон.",
      subtitle: "Уборка, подготовка и оперативная поддержка туристического жилья в Коимбре.",
      cta: "Защитить мою квартиру через WhatsApp",
      micro: "Прямой ответ. Без форм. Без потери времени.",
      badge_lux: "13 лет в Люксембурге",
      wa: "Здравствуйте, я хочу защитить свои туристические апартаменты в Коимбре."
    },
    s2: {
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
    s3: {
      title1: "Check-out утром.",
      title2: "Check-in днём.",
      title3: "Нулевой запас.",
      sub: "Когда время поджимает, квартира должна быть готова. Без оправданий.",
      step1: "Выезд гостя",
      step2: "Уборка",
      step3: "Проверка",
      step4: "Заезд нового гостя"
    },
    s4: {
      tag: "Что вы получаете",
      title1: "Выберите решение.",
      title2: "Не только уборка.",
      sub2: "Ваш гость получает готовую квартиру. Вы получаете меньше стресса и больше контроля.",
      b1: "Меньше стресса",
      b2: "Меньше задержек",
      b3: "Меньше жалоб",
      b4: "Больше контроля",
      b5: "Больше скорости",
      b6: "Больше спокойствия",
      choose: "Выберите пакет",
      c1_name: "SOLO READY",
      c1_price: "От 39€",
      c1_desc: "Для стандартных смен и небольших квартир.",
      includes: "Включает:",
      c1_i1: "Полная туристическая уборка",
      c1_i2: "Кухня, ванные, полы и поверхности",
      c1_i3: "Видимая подготовка квартиры",
      c1_i4: "Быстрая проверка перед гостем",
      c1_i5: "Базовая организация пространства",
      c1_i6: "Вынос мусора",
      c1_i7: "Уведомление о недостатках",
      c1_i8: "Фото для подтверждения",
      c1_note: "Квартира чистая и готова к приему.",
      c1_btn: "Выбираю этот вариант",
      c2_name: "DUO EXPRESS",
      c2_price: "От 69€",
      c2_desc: "Для срочных смен и повышенных нагрузок.",
      c2_i1: "Команда из 2 специалистов",
      c2_i2: "Ускоренная туристическая уборка",
      c2_i3: "Кухня, ванные, полы и поверхности",
      c2_i4: "Полная подготовка",
      c2_i5: "Детальная проверка перед заездом",
      c2_i6: "Визуальный контроль состояния",
      c2_i7: "Полный вывоз мусора",
      c2_i8: "Фото для подтверждения",
      c2_i9: "Поддержка check-in / check-out",
      c2_i10: "Передача ключей",
      c2_i11: "Лучшая реакция на плотный график",
      c2_note: "Больше скорости. Контроль. Меньше рисков.",
      c2_btn: "Хочу в приоритете",
      also_title: "Также доступно:",
      a1: "Туристические апартаменты",
      a2: "Частные дома",
      a3: "Кафе и рестораны",
      a4: "Генеральная уборка",
      a5: "Уборка после ремонта",
      a6: "Обслуживание в нерабочее время",
      a7: "Срочные вызовы в тот же день",
      a_top: "Мы работаем не только с туристическим жильем.",
      a_bottom: "Мы также помогаем частным домам, кафе, ресторанам и местному бизнесу в Коимбре.",
      close_title: "Если квартира должна быть действительно готова, решайте это здесь.",
      disclaimer: "Промоакция зависит от площади.",
      wa: "Здравствуйте, я хочу заказать план уборки для своих апартаментов в Коимбре."
    },
    s5: {
      title_new: "13 лет стандарта Люксембурга.",
      sub_new: "Один из самых требовательных рынков.",
      desc1_new: "Частные дома. Офисы. После ремонта.",
      desc2_new: "Никакой импровизации.",
      p_new: "Теперь этот уровень в вашей квартире.",
      tag_new: "Быстро. Конфиденциально. Точно."
    },
    s6: {
      title: "Просто. Прямо. Без трения.",
      sub: "Меньше звонков. Больше решений.",
      step1: "Отправляете WhatsApp",
      step2: "Мы подтверждаем район и время",
      step3: "Услуга выполняется",
      step4: "Вы получаете подтверждение и фото"
    },
    s7: {
      title_new: "Меньше оправданий. Больше контроля.",
      sub_new: "Гость приезжает. Квартира должна быть готова.",
      desc_new: "Если не хотите проблем, решите это сейчас.",
      btn_new: "Решить сейчас",
      note_new: "Быстрый ответ в WhatsApp.",
      micro_new: "Последняя проверка перед гостем.",
      wa: "Здравствуйте, меня интересует обеспечение уборки моих апартаментов в Коимбре."
    },
    selector: {
      label: "Выберите ваш язык",
      hint: "Проведите для большего"
    },
    s8: {
      label: "ПРЯМОЕ ОБСЛУЖИВАНИЕ",
      title: "Местный сервис. Международный стандарт.",
      sub: "Мы обслуживаем частные дома, туристические апартаменты и точечные потребности в Коимбре и окрестностях.",
      c1_t: "Быстрый ответ",
      c1_d: "Прямой контакт через WhatsApp без форм.",
      c2_t: "Четкие сметы",
      c2_d: "Прозрачные цены и услуги, адаптированные для каждого дома.",
      c3_t: "Международный опыт",
      c3_d: "Проект из Люксембурга, локально работающий в Коимбре и округе.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Европейское видение. Местное внимание.",
      stat1: "Лет опыта",
      stat2: "Управление недвижимостью"
    },
    s9: {
      label: "Отзывы",
      title: "Владельцы, которые нам доверяют.",
      sub: "Апартаменты и дома, управляемые по самым высоким стандартам.",
      t1_n: "Carlos R.",
      t1_p: "Апартаменты · Центр Коимбры",
      t1_d: "Спокойствие гарантированного заселения. Они всегда делают всё идеально перед приездом моих гостей.",
      t2_n: "María F.",
      t2_p: "Семейный дом · Aveiro",
      t2_d: "Поскольку я живу не в Португалии, мне нужен надежный человек. Их уровень уборки потрясающий.",
      t3_n: "Jens N.",
      t3_p: "Вилла · Águeda",
      t3_d: "Услуга Duo Express — это именно то, что мне было нужно для быстрых смен гостей.",
      t4_n: "Laura S.",
      t4_p: "Бунгало · Anadia",
      t4_d: "Они сняли с меня огромный груз. Внимание к деталям достойно роскошного отеля."
    },
    footer: {
      text: "Местная деятельность в Коимбре. Вдохновлено европейскими стандартами из Люксембурга."
    },
    privateHomes: {
      title1: "Не только туристические апартаменты.",
      title_highlight: "Но и дома, которые больше не могут ждать.",
      highlight2: "Если дом вас утомляет, мы решаем это здесь.",
      sub: "Для пожилых людей, требовательных семей или домов, которым действительно нужна серьезная уборка.",
      micro: "Настоящий порядок. Глубокая уборка. Своевременная помощь в Коимбре.",
      cards: [
        { title: "Чистый дом. Без усилий.", desc: "Кухня, ванная, полы, пыль и порядок под контролем." },
        { title: "Поддержка для пожилых людей", desc: "Если уход за домом становится слишком тяжелым, мы поможем." },
        { title: "Настоящая глубокая уборка", desc: "Мы не скрываем проблему. Мы её решаем." },
        { title: "Разовая или регулярная", desc: "Один раз, каждую неделю или по необходимости." }
      ],
      cta_title: "Не ждите, пока дом станет еще хуже.",
      btn: "Попросить помощь в WhatsApp",
      cta_micro: "Быстрый ответ. Внимательное отношение. Немедленное решение.",
      wa_msg: "Здравствуйте, мне нужна помощь с уборкой дома в Коимбре."
    },
  gallery: {
      title1: "Изменения заметны",
      title2: "до check-in.",
      sub: "От использованного к готовому. От проблемы к контролю.",
      items: [
        {
          title: "Кухня готова к check-in",
          caption: "От реального использования к чистому пространству."
        },
        {
          title: "Чистая ванная. Спокойный гость.",
          caption: "Зеркало, раковина, столешница и детали под контролем."
        },
        {
          title: "Видимая глубокая уборка.",
          caption: "Когда состояние требует большего, результат должен быть видимым."
        }
      ],
      before: "ДО",
      after: "ПОСЛЕ",
      cta: "Хотите такой уровень перед следующим гостем?",
      btn: "Узнать доступность через WhatsApp",
      micro: "Быстрый ответ. Прямая координация. Без потери времени.",
      wa: "Здравстуйте, мне нужна информация об уборке туристических апартаментов в Коимбре."
    
    }},
  pl: {
    hero: {
      tagline: "Sprzątanie turystyczne · klucze · check-in",
      chip1: "Luksemburg · PT/ES/FR",
      chip2: "Rano · popołudnie · noc · poza godzinami",
      title1: "Twój apartament nie może zawieść w",
      title2: "sezonie letnim.",
      subtitle: "Sprzątanie, przygotowanie i wsparcie operacyjne dla wynajmu turystycznego w Coimbra.",
      cta: "Zabezpiecz mój apartament przez WhatsApp",
      micro: "Bezpośrednia odpowiedź. Bez formularzy. Bez straty czasu.",
      badge_lux: "13 lat w Luksemburgu",
      wa: "Dzień dobry, chcę zabezpieczyć mój apartament turystyczny w Coimbra."
    },
    s2: {
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
    s3: {
      title1: "Check-out rano.",
      title2: "Check-in po południu.",
      title3: "Zerowy margines.",
      sub: "Kiedy brakuje czasu, apartament musi być gotowy. Bez wymówek.",
      step1: "Wyjazd gościa",
      step2: "Sprzątanie",
      step3: "Inspekcja",
      step4: "Przyjazd nowego gościa"
    },
    s4: {
      tag: "Co zyskasz wynajmując",
      title1: "Wybierz rozwiązanie.",
      title2: "Nie tylko sprzątanie.",
      sub2: "Twój gość otrzymuje gotowy apartament. Ty masz mniej stresu, błędów i większą kontrolę.",
      b1: "Mniej stresu",
      b2: "Mniej opóźnień",
      b3: "Mniej skarg",
      b4: "Większa kontrola",
      b5: "Większa szybkość",
      b6: "Większy spokój",
      choose: "Wybierz swój pakiet",
      c1_name: "SOLO READY",
      c1_price: "Od 39€",
      c1_desc: "Dla standardowych zmian i małych apartamentów.",
      includes: "Obejmuje:",
      c1_i1: "Pełne sprzątanie turystyczne",
      c1_i2: "Kuchnia, łazienka, podłogi i powierzchnie",
      c1_i3: "Widoczne przygotowanie apartamentu",
      c1_i4: "Szybki przegląd przed gościem",
      c1_i5: "Podstawowa organizacja przestrzeni",
      c1_i6: "Podstawowe usuwanie odpadów",
      c1_i7: "Powiadomienie o brakach",
      c1_i8: "Zdjęcia powierdzające w razie potrzeby",
      c1_note: "Apartament jest czysty, schludny i gotowy.",
      c1_btn: "Wybieram tę opcję",
      c2_name: "DUO EXPRESS",
      c2_price: "Od 69€",
      c2_desc: "Dla pilnych zmian i większych obciążeń.",
      c2_i1: "Zespół 2 specjalistów",
      c2_i2: "Przyspieszone sprzątanie",
      c2_i3: "Kuchnia, łazienki, podłogi i powierzchnie",
      c2_i4: "Pełne przygotowanie",
      c2_i5: "Szczegółowy przegląd przed check-in",
      c2_i6: "Wizualna kontrola stanu",
      c2_i7: "Pełne usuwanie odpadów",
      c2_i8: "Zdjęcia potwierdzające w razie potrzeby",
      c2_i9: "Wsparcie check-in / check-out",
      c2_i10: "Przekazanie kluczy",
      c2_i11: "Lepsza reakcja dla napiętych harmonogramów",
      c2_note: "Większa szybkość. Kontrola. Mniejsze ryzyko.",
      c2_btn: "Chcę priorytet",
      also_title: "Dostępne również:",
      a1: "Apartamenty turystyczne",
      a2: "Domy prywatne",
      a3: "Kawiarnie i restauracje",
      a4: "Głębokie sprzątanie",
      a5: "Sprzątanie poremontowe",
      a6: "Obsługa poza godzinami pracy",
      a7: "Nagłe wypadki tego samego dnia",
      a_top: "Nie współpracujemy tylko z obiektami turystycznymi.",
      a_bottom: "Pomagamy również domom prywatnym, kawiarniom, restauracjom i lokalnym firmom w Coimbra.",
      close_title: "Jeśli potrzebujesz apartamentu naprawdę gotowego, rozwiąż to tutaj.",
      disclaimer: "Promocja wprowadzająca zależy od warunków lokalu.",
      wa: "Dzień dobry, chcę wynająć plan sprzątania dla mojego apartamentu w Coimbra."
    },
    s5: {
      title_new: "13 lat standardu w Luksemburgu.",
      sub_new: "Jeden z najbardziej wymagających rynków.",
      desc1_new: "Domy prywatne. Biura. Po remoncie.",
      desc2_new: "Żadnej improwizacji.",
      p_new: "Teraz ten poziom wkracza do twojego apartamentu.",
      tag_new: "Szybko. Dyskretnie. Precyzyjnie."
    },
    s6: {
      title: "Prosto. Bezpośrednio. Bez tarcia.",
      sub: "Mniej telefonów. Więcej rozwiązań.",
      step1: "Wysyłasz WhatsApp",
      step2: "Potwierdzamy strefę i czas",
      step3: "Usługa zostaje wykonana",
      step4: "Otrzymujesz potwierdzenie i zdjęcia"
    },
    s7: {
      title_new: "Mniej wymówek. Większa kontrola.",
      sub_new: "Gość przyjeżdża. Apartament musi być gotowy.",
      desc_new: "Jeśli nie chcesz problemów, rozwiąż to teraz.",
      btn_new: "Rozwiąż to teraz",
      note_new: "Szybka odpowiedź przez WhatsApp.",
      micro_new: "Ostatni check przed kolejnym gościem.",
      wa: "Dzień dobry, jestem zainteresowany/zainteresowana zapewnieniem sprzątania mojego apartamentu w Coimbra."
    },
    selector: {
      label: "Wybierz swój język",
      hint: "Przesuń, aby zobaczyć więcej"
    },
    s8: {
      label: "BEZPOŚREDNIA POMOC",
      title: "Usługa lokalna. Standard międzynarodowy.",
      sub: "Obsługujemy domy prywatne, apartamenty turystyczne i szczególne potrzeby w Coimbra i okolicach.",
      c1_t: "Szybka odpowiedź",
      c1_d: "Bezpośredni kontakt przez WhatsApp bez formularzy.",
      c2_t: "Jasna wycena",
      c2_d: "Przejrzyste ceny i usługi dostosowane do każdego domu.",
      c3_t: "Doświadczenie międzynarodowe",
      c3_d: "Projekt napędzany z Luksemburga, działający lokalnie w Coimbra i okolicach.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Europejska wizja. Lokalna opieka.",
      stat1: "Lata doświadczenia",
      stat2: "Zarządzane nieruchomości"
    },
    s9: {
      label: "Opinie",
      title: "Właściciele, którzy nam ufają.",
      sub: "Apartamenty i domy zarządzane według najwyższych standardów.",
      t1_n: "Carlos R.",
      t1_p: "Apartament Turystyczny · Centrum Coimbra",
      t1_d: "Spokój wynikający z gwarantowanych zameldowań. Zawsze zostawiają wszystko perfekcyjnie przed przyjazdem moich gości.",
      t2_n: "María F.",
      t2_p: "Dom Rodzinny · Aveiro",
      t2_d: "Ponieważ mieszkam poza Hiszpanią, potrzebuję kogoś zaufanego. Ich poziom sprzątania jest niesamowity.",
      t3_n: "Jens N.",
      t3_p: "Willa Wakacyjna · Águeda",
      t3_d: "Usługa Duo Express jest dokładnie tym, czego potrzebowałem do szybkich zmian.",
      t4_n: "Laura S.",
      t4_p: "Bungalow Wakacyjny · Anadia",
      t4_d: "Zdjęli mi z ramion ogromny ciężar. Dbałość o szczegóły godna luksusowego hotelu."
    },

    footer: {
      text: "Lokalna operacja w Coimbra. Zainspirowany europejskimi standardami z Luksemburga."
    },
    privateHomes: {
      title1: "Nie tylko apartamenty turystyczne.",
      title_highlight: "Również domy, które nie mogą już czekać.",
      highlight2: "Jeśli dom Cię przytłacza, rozwiązujemy to tutaj.",
      sub: "Dla seniorów, wymagających domowników lub mieszkań, które naprawdę potrzebują gruntównego sprzątania.",
      micro: "Prawdziwy porządek. Głębokie sprzątanie. Punktualna pomoc w Coimbra.",
      cards: [
        { title: "Czysty dom. Bez wysiłku.", desc: "Kuchnia, łazienka, podłogi, kurz i porządek pod kontrolą." },
        { title: "Wsparcie dla seniorów", desc: "Gdy utrzymanie domu staje się zbyt trudne, wkraczamy my." },
        { title: "Prawdziwe gruntowne sprzątanie", desc: "Nie ukrywamy problemu. Rozwiązujemy go." },
        { title: "Usługa jednorazowa lub regularna", desc: "Raz, co tydzień lub na żądanie." }
      ],
      cta_title: "Nie czekaj, aż w domu będzie gorzej.",
      btn: "Poproś o pomoc przez WhatsApp",
      cta_micro: "Szybka odpowiedź. Dyskretna pomoc. Natychmiastowe rozwiązanie.",
      wa_msg: "Cześć, potrzebuję pomocy w sprzątaniu domu w Coimbra."
    },
  gallery: {
      title1: "Zmianę widać",
      title2: "przed check-inem.",
      sub: "Od używanego po gotowy. Tak powinien wyglądać apartament przed przyjęciem gościa.",
      items: [
        {
          title: "Kuchnia gotowa przed check-in",
          caption: "Od rzeczywistego użytkowania po czystą, funkcjonalną przestrzeń."
        },
        {
          title: "Czysta łazienka. Spokojny gość.",
          caption: "Lustro, umywalka, blat i detale pod kontrolą."
        },
        {
          title: "Widoczne głębokie czyszczenie.",
          caption: "Gdy stan wymaga więcej, wynik musi być widoczny."
        }
      ],
      before: "PRZED",
      after: "PO",
      cta: "Chcesz takiego poziomu przed kolejnym gościem?",
      btn: "Zapytaj o dostępność na WhatsApp",
      micro: "Szybka odpowiedź. Bezpośrednia koordynacja. Bez straty czasu.",
      wa: "Dzień dobry, potrzebuję informacji o sprzątaniu apartamentów w Coimbra."
    
    }},
  nl: {
    hero: {
      tagline: "Toeristische schoonmaak · sleutels · check-in",
      chip1: "Luxemburg · PT/ES/FR",
      chip2: "Ochtend · middag · nacht · buiten kantooruren",
      title1: "Je appartement mag niet falen in het",
      title2: "hoogseizoen.",
      subtitle: "Schoonmaak, voorbereiding en operationele ondersteuning voor toeristische verhuur in Coimbra.",
      cta: "Bescherm mijn appartement via WhatsApp",
      micro: "Direct antwoord. Geen formulieren. Geen tijdverlies.",
      badge_lux: "13 jaar in Luxemburg",
      wa: "Hallo, ik wil mijn toeristenappartement in Coimbra beschermen."
    },
    s2: {
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
    s3: {
      title1: "Check-out in de ochtend.",
      title2: "Check-in in de middag.",
      title3: "Nul marge.",
      sub: "Als de tijd krap is, moet het appartement klaar zijn. Geen excuses.",
      step1: "Vertrek gast",
      step2: "Schoonmaak",
      step3: "Inspectie",
      step4: "Aankomst nieuwe gast"
    },
    s4: {
      tag: "Wat u wint door in te huren",
      title1: "Kies een oplossing.",
      title2: "Niet alleen schoonmaak.",
      sub2: "Uw gast krijgt een klaarstaand appartement. U krijgt minder stress en meer controle.",
      b1: "Minder stress",
      b2: "Minder vertragingen",
      b3: "Minder klachten",
      b4: "Meer controle",
      b5: "Meer snelheid",
      b6: "Meer rust",
      choose: "Kies uw pakket",
      c1_name: "SOLO READY",
      c1_price: "Vanaf 39€",
      c1_desc: "Voor normale wissels en kleine appartementen.",
      includes: "Inclusief:",
      c1_i1: "Volledige toeristische schoonmaak",
      c1_i2: "Keuken, badkamer, vloeren en oppervlakten",
      c1_i3: "Zichtbare voorbereiding van het appartement",
      c1_i4: "Snelle controle voor de gast arriveert",
      c1_i5: "Basisorganisatie van de ruimte",
      c1_i6: "Basisvuilnisverwijdering",
      c1_i7: "Melding als er iets mis is",
      c1_i8: "Bevestigingsfoto's indien nodig",
      c1_note: "Het appartement is schoon, netjes en klaar om te ontvangen.",
      c1_btn: "Ik wil deze optie",
      c2_name: "DUO EXPRESS",
      c2_price: "Vanaf 69€",
      c2_desc: "Voor noodgevallen, wissels op dezelfde dag en grotere appartementen.",
      c2_i1: "Team van 2 professionals",
      c2_i2: "Versnelde toeristische schoonmaak",
      c2_i3: "Keuken, badkamers, vloeren en oppervlakten",
      c2_i4: "Volledige voorbereiding",
      c2_i5: "Gedetailleerde controle voor check-in",
      c2_i6: "Visuele controle van de staat",
      c2_i7: "Volledige vuilnisverwijdering",
      c2_i8: "Bevestigingsfoto's indien nodig",
      c2_i9: "Ondersteuning voor check-in / check-out",
      c2_i10: "Sleuteloverdracht",
      c2_i11: "Betere respons voor strakke schema's",
      c2_note: "Meer snelheid. Meer controle. Minder risico.",
      c2_btn: "Ik wil prioriteit",
      also_title: "Ook beschikbaar:",
      a1: "Toeristische appartementen",
      a2: "Particuliere woningen",
      a3: "Cafés en restaurants",
      a4: "Dieptereiniging",
      a5: "Schoonmaak na verbouwing",
      a6: "Service buiten kantooruren",
      a7: "Spoedgevallen op dezelfde dag",
      a_top: "We werken niet alleen met toeristische accommodaties.",
      a_bottom: "We helpen ook particuliere woningen, cafés, restaurants en lokale bedrijven in Coimbra.",
      close_title: "Als uw appartement echt klaar moet zijn, regelt u het hier.",
      disclaimer: "Lanceringspromotie afhankelijk van grootte.",
      wa: "Hallo, ik wil een schoonmaakplan inhuren voor mijn appartement in Coimbra."
    },
    s5: {
      title_new: "13 jaar Luxemburgse standaard.",
      sub_new: "Een van de meest veeleisende markten.",
      desc1_new: "Particuliere huizen. Kantoren. Na verbouwing.",
      desc2_new: "Geen improvisatie.",
      p_new: "Nu komt dat niveau naar uw appartement.",
      tag_new: "Snel. Discreet. Precies."
    },
    s6: {
      title: "Simpel. Direct. Zonder wrijving.",
      sub: "Minder telefoontjes. Meer oplossingen.",
      step1: "Je stuurt een WhatsApp",
      step2: "Wij bevestigen zone en tijd",
      step3: "Service wordt uitgevoerd",
      step4: "Je ontvangt bevestiging en foto's"
    },
    s7: {
      title_new: "Minder smoesjes. Meer controle.",
      sub_new: "Uw gast arriveert. Het appartement moet klaar zijn.",
      desc_new: "Als u geen problemen wilt, los het dan nu op.",
      btn_new: "Nu oplossen",
      note_new: "Snelle reactie via WhatsApp.",
      micro_new: "Laatste controle voor de gast.",
      wa: "Hallo, ik ben geïnteresseerd in het beveiligen van de schoonmaak van mijn appartement in Coimbra."
    },
    selector: {
      label: "Selecteer uw taal",
      hint: "Veeg voor meer talen"
    },
    s8: {
      label: "DIRECTE SERVICE",
      title: "Lokale service. Internationale standaard.",
      sub: "We verzorgen particuliere woningen, toeristische appartementen en specifieke behoeften in Coimbra en omgeving.",
      c1_t: "Snelle reactie",
      c1_d: "Direct contact via WhatsApp zonder formulieren.",
      c2_t: "Duidelijke offerte",
      c2_d: "Transparante prijzen en service aangepast aan elke woning.",
      c3_t: "Internationale ervaring",
      c3_d: "Project gedreven vanuit Luxemburg en lokaal opererend in Coimbra en omgeving.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Europese visie. Lokale zorg.",
      stat1: "Jaren ervaring",
      stat2: "Beheerde eigendommen"
    },
    s9: {
      label: "Recensies",
      title: "Eigenaren die ons vertrouwen.",
      sub: "Appartementen en woningen beheerd volgens de hoogste normen.",
      t1_n: "Carlos R.",
      t1_p: "Toeristisch Appartement · Coimbra Centrum",
      t1_d: "De gemoedsrust van gegarandeerde check-ins. Ze laten altijd alles perfect achter voor mijn gasten.",
      t2_n: "María F.",
      t2_p: "Familiehuis · Aveiro",
      t2_d: "Omdat ik buiten Portugal woon, heb ik iemand nodig die ik kan vertrouwen. Hun schoonmaakniveau is ongelooflijk.",
      t3_n: "Jens N.",
      t3_p: "Vakantievilla · Águeda",
      t3_d: "De Duo Express service is precies wat ik nodig had voor last-minute wissels.",
      t4_n: "Laura S.",
      t4_p: "Vakantiebungalow · Anadia",
      t4_d: "Ze namen een enorme last van mijn schouders. De aandacht voor detail is een luxe hotel waardig."
    },
    footer: {
      text: "Lokale activiteit in Coimbra. Geïnspireerd op Europese normen vanuit Luxemburg."
    },
    privateHomes: {
      title1: "Niet alleen vakantieappartementen.",
      title_highlight: "Ook huizen die niet langer kunnen wachten.",
      highlight2: "Als het huishouden te veel wordt, lossen we het hier op.",
      sub: "Voor ouderen, veeleisende huishoudens of woningen die echt een serieuze schoonmaak nodig hebben.",
      micro: "Echte orde. Dieptereiniging. Tijdige hulp in Coimbra.",
      cards: [
        { title: "Schoon huis. Zonder moeite.", desc: "Keuken, badkamer, vloeren, stof en orde onder controle." },
        { title: "Hulp voor ouderen", desc: "Als het bijhouden van het huis te zwaar wordt, grijpen wij in." },
        { title: "Echte dieptereiniging", desc: "We verbergen het probleem niet. We lossen het op." },
        { title: "Eenmalige of regelmatige service", desc: "Eenmalig, wekelijks of wanneer het nodig is." }
      ],
      cta_title: "Wacht niet tot het huis verder achteruitgaat.",
      btn: "Vraag om hulp via WhatsApp",
      cta_micro: "Snel antwoord. Discrete hulp. Directe oplossing.",
      wa_msg: "Hallo, ik heb hulp nodig bij het schoonmaken van een huis in Coimbra."
    },
  gallery: {
      title1: "De verandering is zichtbaar",
      title2: "voor de check-in.",
      sub: "Van gebruikt naar klaar. Van probleem naar controle.",
      items: [
        {
          title: "Keuken klaar voor check-in",
          caption: "Van echt gebruik naar een schone en opgeruimde ruimte."
        },
        {
          title: "Schone badkamer. Rustige gast.",
          caption: "Spiegel, wastafel, aanrecht en details onder controle."
        },
        {
          title: "Zichtbare dieptereiniging.",
          caption: "Buitengewone resultaten voor veeleisende omstandigheden."
        }
      ],
      before: "VOOR",
      after: "NA",
      cta: "Wil je dit niveau voor de volgende gast?",
      btn: "Vraag beschikbaarheid via WhatsApp",
      micro: "Snel antwoord. Directe coördinatie. Geen tijdverlies.",
      wa: "Hallo, ik heb informatie nodig over toeristische schoonmaak in Coimbra."
    
    }},
  sv: {
    hero: {
      tagline: "Turiststädning · nycklar · incheckning",
      chip1: "Luxemburg · PT/ES/FR",
      chip2: "Morgon · eftermiddag · natt · utanför arbetstid",
      title1: "Din lägenhet får inte misslyckas under",
      title2: "högsäsong.",
      subtitle: "Städning, förberedelse och operativt stöd för turistuthyrning i Coimbra.",
      cta: "Skydda min lägenhet via WhatsApp",
      micro: "Direkt svar. Inga formulär. Ingen tidsförlust.",
      badge_lux: "13 år i Luxemburg",
      wa: "Hej, jag vill skydda min semesterlägenhet i Coimbra."
    },
    s2: {
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
    s3: {
      title1: "Utcheckning på morgonen.",
      title2: "Incheckning på eftermiddagen.",
      title3: "Noll marginal.",
      sub: "När tiden är knapp måste lägenheten vara klar. Inga ursäkter.",
      step1: "Gästens avresa",
      step2: "Städning",
      step3: "Inspektion",
      step4: "Ny gäst anländer"
    },
    s4: {
      tag: "Vad du tjänar",
      title1: "Välj en lösning.",
      title2: "Inte bara städning.",
      sub2: "Din gäst får en färdig lägenhet. Du får mindre stress och mer kontroll.",
      b1: "Mindre stress",
      b2: "Mindre förseningar",
      b3: "Mindre klagomål",
      b4: "Mer kontroll",
      b5: "Mer snabbhet",
      b6: "Mer lugn",
      choose: "Välj ditt paket",
      c1_name: "SOLO READY",
      c1_price: "Från 39€",
      c1_desc: "För normala byten och små lägenheter.",
      includes: "Inkluderar:",
      c1_i1: "Komplett turiststädning",
      c1_i2: "Kök, badrum, golv och ytor",
      c1_i3: "Synlig förberedelse",
      c1_i4: "Snabb kontroll innan gäst",
      c1_i5: "Grundläggande organisering",
      c1_i6: "Grundläggande sophantering",
      c1_i7: "Avisering om något saknas",
      c1_i8: "Bekräftelsebilder vid behov",
      c1_note: "Lägenheten är ren och redo.",
      c1_btn: "Jag vill ha det här valet",
      c2_name: "DUO EXPRESS",
      c2_price: "Från 69€",
      c2_desc: "För brådskande byten och högre belastning.",
      c2_i1: "Team av 2 specialister",
      c2_i2: "Accelererad städning",
      c2_i3: "Kök, badrum, golv och ytor",
      c2_i4: "Full förberedelse",
      c2_i5: "Detaljerad kontroll innan incheckning",
      c2_i6: "Visuell kontroll av skicket",
      c2_i7: "Fullständig sophantering",
      c2_i8: "Bekräftelsebilder vid behov",
      c2_i9: "Stöd för in/utcheckning",
      c2_i10: "Nyckelöverlämning",
      c2_i11: "Bättre för tajta tidsscheman",
      c2_note: "Mer hastighet. Mer kontroll.",
      c2_btn: "Jag vill ha prioritet",
      also_title: "Finns också:",
      a1: "Semesterlägenheter",
      a2: "Privata hem",
      a3: "Kaféer och restauranger",
      a4: "Djuprengöring",
      a5: "Byggstädning",
      a6: "Service utanför arbetstid",
      a7: "Akutfall samma dag",
      a_top: "Vi arbetar inte bara med turistboenden.",
      a_bottom: "Vi hjälper även privata hem, kaféer, restauranger och lokala företag i Coimbra.",
      close_title: "Lös det här om lägenheten måste vara helt redo.",
      disclaimer: "Lanseringserbjudande beroende på storlek.",
      wa: "Hej, jag vill anlita en städplan för min lägenhet i Coimbra."
    },
    s5: {
      title_new: "13 år av Luxemburg-standard.",
      sub_new: "En av de mest krävande marknaderna.",
      desc1_new: "Privata hem. Kontor. Efter renovering.",
      desc2_new: "Ingen improvisation.",
      p_new: "Nu kommer den nivån till din lägenhet.",
      tag_new: "Snabbt. Diskret. Precist."
    },
    s6: {
      title: "Enkelt. Direkt. Friktionsfritt.",
      sub: "Färre samtal. Fler lösningar.",
      step1: "Skicka en WhatsApp",
      step2: "Vi bekräftar område och tid",
      step3: "Tjänsten utförs",
      step4: "Du får bekräftelse och bilder"
    },
    s7: {
      title_new: "Färre ursäkter. Mer kontroll.",
      sub_new: "Din gäst anländer. Lägenheten måste vara klar.",
      desc_new: "Om du inte vill ha problem, lös det nu.",
      btn_new: "Lös det nu",
      note_new: "Snabbt svar via WhatsApp.",
      micro_new: "Sista kollen innan gästen.",
      wa: "Hej, jag är intresserad av att säkra städningen av min lägenhet i Coimbra."
    },
    selector: {
      label: "Välj ditt språk",
      hint: "Svep för att se fler språk"
    },
    s8: {
      label: "DIREKTSERVICE",
      title: "Lokal service. Internationell standard.",
      sub: "Vi sköter privata hem, semesterlägenheter och tillfälliga behov i Coimbra med omnejd.",
      c1_t: "Snabbt svar",
      c1_d: "Direktkontakt via WhatsApp utan formulär.",
      c2_t: "Tydlig offert",
      c2_d: "Transparenta priser och tjänster anpassade till varje hem.",
      c3_t: "Internationell erfarenhet",
      c3_d: "Projekt drivs från Luxemburg och verkar lokalt i Coimbra med omnejd.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Europeisk vision. Lokal omsorg.",
      stat1: "Års erfarenhet",
      stat2: "Förvaltade fastigheter"
    },
    s9: {
      label: "Omdömen",
      title: "Ägare som litar på oss.",
      sub: "Lägenheter och hem som sköts med högsta standard.",
      t1_n: "Carlos R.",
      t1_p: "Semesterlägenhet · Coimbra Centrum",
      t1_d: "Tryggheten med garanterade check-ins. De lämnar alltid allt perfekt före gästernas ankomst.",
      t2_n: "María F.",
      t2_p: "Familjehus · Aveiro",
      t2_d: "Eftersom jag bor utanför Portugal behöver jag någon jag kan lita på. Deras städnivå är otrolig.",
      t3_n: "Jens N.",
      t3_p: "Semestervilla · Águeda",
      t3_d: "Duo Express-tjänsten är exakt vad jag behövde för sista minuten-byten.",
      t4_n: "Laura S.",
      t4_p: "Semesterbungalow · Anadia",
      t4_d: "De tog en enorm börda från mina axlar. Uppmärksamheten på detaljer är värdig ett lyxhotell."
    },
    footer: {
      text: "Lokal verksamhet i Coimbra. Inspirerad av europeiska standarder från Luxemburg."
    },
    privateHomes: {
      title1: "Inte bara semesterbostäder.",
      title_highlight: "Även hem som inte kan vänta längre.",
      highlight2: "Om hemmet känns överväldigande löser vi det åt dig.",
      sub: "För äldre, krävande hushåll eller hem som verkligen behöver en seriös städning.",
      micro: "Verklig ordning. Djupstädning. Snabb hjälp i Coimbra.",
      cards: [
        { title: "Rent hem. Utan besvär.", desc: "Kök, badrum, golv, damm och ordning under kontroll." },
        { title: "Stöd för äldre", desc: "När det blir för tungt att sköta hemmet rycker vi in." },
        { title: "Verklig djupstädning", desc: "Vi gömmer inte problemet. Vi löser det." },
        { title: "Enstaka eller regelbunden tjänst", desc: "En gång, varje vecka eller närhelst det behövs." }
      ],
      cta_title: "Vänta inte tills hemmet är ännu smutsigare.",
      btn: "Be om hjälp via WhatsApp",
      cta_micro: "Snabbt svar. Diskret hjälp. Omedelbar lösning.",
      wa_msg: "Hej, jag behöver hjälp med städning av ett hem i Coimbra."
    },
  gallery: {
      title1: "Förändringen syns",
      title2: "före incheckning.",
      sub: "Från använd till redo. Från problem till under kontroll.",
      items: [
        {
          title: "Kök redo före incheckning",
          caption: "Från verklig användning till ett rent och prydligt utrymme."
        },
        {
          title: "Rent badrum. Lugn gäst.",
          caption: "Spegel, handfat, bänkskiva och detaljer under kontroll."
        },
        {
          title: "Synlig djuprengöring.",
          caption: "När tillståndet kräver mer måste resultatet synas."
        }
      ],
      before: "FÖRE",
      after: "EFTER",
      cta: "Vill du ha den här nivån före nästa gäst?",
      btn: "Fråga om tillgänglighet på WhatsApp",
      micro: "Snabbt svar. Direkt samordning. Ingen tidsförlust.",
      wa: "Hej, jag behöver information om städning av semesterbostäder i Coimbra."
    
    }},
  no: {
    hero: {
      tagline: "Turistrengjøring · nøkler · innsjekking",
      chip1: "Luxembourg · PT/ES/FR",
      chip2: "Morgen · ettermiddag · natt · utenom arbeidstid",
      title1: "Leiligheten din kan ikke svikte i",
      title2: "høysesongen.",
      subtitle: "Rengjøring, forberedelse og operativ støtte for turistutleie i Coimbra.",
      cta: "Sikre leiligheten min via WhatsApp",
      micro: "Direkte svar. Ingen skjemaer. Ingen bortkastet tid.",
      badge_lux: "13 år i Luxembourg",
      wa: "Hei, jeg vil beskytte ferieleiligheten min i Coimbra."
    },
    s2: {
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
    },
    s3: {
      title1: "Utsjekk om morgenen.",
      title2: "Innsjekk om ettermiddagen.",
      title3: "Null margin.",
      sub: "Når tiden er knapp, må leiligheten være klar. Ingen unnskyldninger.",
      step1: "Gjestens avreise",
      step2: "Rengjøring",
      step3: "Inspeksjon",
      step4: "Ny gjest ankommer"
    },
    s4: {
      tag: "Hva du tjener",
      title1: "Velg en løsning.",
      title2: "Ikke bare rengjøring.",
      sub2: "Din gjest får en ferdig leilighet. Du får mindre stress og mer kontroll.",
      b1: "Mindre stress",
      b2: "Mindre forsinkelser",
      b3: "Mindre klager",
      b4: "Mer kontroll",
      b5: "Mer hurtighet",
      b6: "Mer ro",
      choose: "Velg pakken din",
      c1_name: "SOLO READY",
      c1_price: "Fra 39€",
      c1_desc: "For normale bytter og små leiligheter.",
      includes: "Inkluderer:",
      c1_i1: "Komplett turistrengjøring",
      c1_i2: "Kjøkken, bad, gulv og flater",
      c1_i3: "Synlig forberedelse",
      c1_i4: "Rask sjekk før gjest",
      c1_i5: "Grunnleggende organisering",
      c1_i6: "Grunnleggende avfallshåndtering",
      c1_i7: "Varsel om mangler",
      c1_i8: "Bekreftelsesbilder ved behov",
      c1_note: "Leiligheten er ren og klar.",
      c1_btn: "Jeg ønsker dette valget",
      c2_name: "DUO EXPRESS",
      c2_price: "Fra 69€",
      c2_desc: "For presserende bytter og høyere belastning.",
      c2_i1: "Team på 2 spesialister",
      c2_i2: "Akselerert rengjøring",
      c2_i3: "Kjøkken, bad, gulv og flater",
      c2_i4: "Full forberedelse",
      c2_i5: "Detaljert sjekk før innsjekking",
      c2_i6: "Visuell sjekk av tilstanden",
      c2_i7: "Fullstendig avfallshåndtering",
      c2_i8: "Bekreftelsesbilder ved behov",
      c2_i9: "Støtte for inn/utsjekking",
      c2_i10: "Nøkkeloverlevering",
      c2_i11: "Bedre for stramme tidsplaner",
      c2_note: "Mer hastighet. Mer kontroll.",
      c2_btn: "Jeg ønsker prioritet",
      also_title: "Finnes også:",
      a1: "Ferieleiligheter",
      a2: "Private hjem",
      a3: "Kafeer og restauranter",
      a4: "Dyp rengjøring",
      a5: "Byggvask",
      a6: "Service utenom arbeidstid",
      a7: "Akutte oppdrag samme dag",
      a_top: "Vi jobber ikke bare med ferieboliger.",
      a_bottom: "Vi hjelper også private hjem, kafeer, restauranter og lokale bedrifter i Coimbra.",
      close_title: "Løs det her hvis leiligheten må være helt klar.",
      disclaimer: "Lanseringstilbud avhengig av størrelse.",
      wa: "Hei, jeg vil bestille en renholdsplan for leiligheten min i Coimbra."
    },
    s5: {
      title_new: "13 år med Luxembourg-standard.",
      sub_new: "Et av de mest krevende markedene.",
      desc1_new: "Private hjem. Kontorer. Etter oppussing.",
      desc2_new: "Ingen improvisasjon.",
      p_new: "Nå kommer det nivået til din leilighet.",
      tag_new: "Raskt. Diskret. Presist."
    },
    s6: {
      title: "Enkelt. Direkte. Friksjonsfritt.",
      sub: "Færre anrop. Flere løsninger.",
      step1: "Send en WhatsApp",
      step2: "Vi bekrefter område og tid",
      step3: "Tjenesten utføres",
      step4: "Du mottar bekreftelse og bilder"
    },
    s7: {
      title_new: "Færre unnskyldninger. Mer kontroll.",
      sub_new: "Din gjest ankommer. Leiligheten må være klar.",
      desc_new: "Hvis du ikke vil ha problemer, løs det nå.",
      btn_new: "Løs det nå",
      note_new: "Raskt svar via WhatsApp.",
      micro_new: "Siste sjekk før gjesten.",
      wa: "Hei, jeg er interessert i å sikre renholdet av leiligheten min i Coimbra."
    },
    selector: {
      label: "Velg ditt språk",
      hint: "Sveip for å se flere språk"
    },
    s8: {
      label: "DIREKTE SERVICE",
      title: "Lokal service. Internasjonal standard.",
      sub: "Vi betjener private hjem, ferieleiligheter og behov i Coimbra og omegn.",
      c1_t: "Rask respons",
      c1_d: "Direkte kontakt via WhatsApp uten skjemaer.",
      c2_t: "Klar prising",
      c2_d: "Transparente priser og tjenester tilpasset hvert hjem.",
      c3_t: "Internasjonal erfaring",
      c3_d: "Prosjekt drevet fra Luxembourg, med lokal drift i Coimbra og omegn.",
      badge: "LUXEMBOURG × COIMBRA",
      badge_s: "Europeisk visjon. Lokal omtanke.",
      stat1: "Års erfaring",
      stat2: "Forvaltede eiendommer"
    },
    s9: {
      label: "Anmeldelser",
      title: "Eiere som stoler på oss.",
      sub: "Leiligheter og hjem administrert etter de høyeste standarder.",
      t1_n: "Carlos R.",
      t1_p: "Ferieleilighet · Coimbra Sentrum",
      t1_d: "Tryggheten med garanterte innsjekkinger. De forlater alltid alt perfekt før gjestene ankommer.",
      t2_n: "María F.",
      t2_p: "Familiehus · Aveiro",
      t2_d: "Siden jeg bor utenfor Spania, trenger jeg noen jeg kan stole på. Deres rengjøringsgode er utrolig.",
      t3_n: "Jens N.",
      t3_p: "Feriehytte · Águeda",
      t3_d: "Duo Express-tjenesten er akkurat det jeg trengte for i siste liten overføringer.",
      t4_n: "Laura S.",
      t4_p: "Feriebungalow · Anadia",
      t4_d: "De fjernet en enorm byrde fra skuldrene mine. Oppmerksomheten på detaljer er av hotell standard."
    },
    footer: {
      text: "Lokal virksomhet i Coimbra. Inspirert av europeiske standarder fra Luxembourg."
    },
    privateHomes: {
      title1: "Ikke bare ferieleiligheter.",
      title_highlight: "Men også hjem som ikke kan vente lenger.",
      highlight2: "Hvis huset byr på problemer, løser vi det.",
      sub: "For eldre, krevende husholdninger eller hjem som trenger en ordentlig rengjøring.",
      micro: "Virkelig orden. Dyp rengjøring. Hjelp pålitelig i Coimbra.",
      cards: [
        { title: "Rent hus. Uten anstrengelse.", desc: "Kjøkken, bad, gulv, støv og orden under kontroll." },
        { title: "Støtte for eldre", desc: "Når det blir for tungt å vedlikeholde huset, griper vi inn." },
        { title: "Faktisk dyprengjøring", desc: "Vi skjuler ikke problemet. Vi løser det." },
        { title: "Engangs eller regelmessig", desc: "En gang, hver uke, eller når det er nødvendig." }
      ],
      cta_title: "Ikke vent til huset blir enda verre.",
      btn: "Be om hjelp via WhatsApp",
      cta_micro: "Raskt svar. Diskret oppmerksomhet. Umiddelbar løsning.",
      wa_msg: "Hei, jeg trenger hjelp med rengjøring av et hus i Coimbra."
    },
  gallery: {
      title1: "Endringen merkes",
      title2: "før innsjekking.",
      sub: "Fra brukt til klar. Fra problem til under kontroll.",
      items: [
        {
          title: "Kjøkken klart før innsjekking",
          caption: "Fra reell bruk til et rent og ryddig rom."
        },
        {
          title: "Rent bad. Rolig gjest.",
          caption: "Speil, vask, benkeplate og detaljer under kontroll."
        },
        {
          title: "Synlig dyprengjøring.",
          caption: "Når tilstanden krever mer, må resultatet synes."
        }
      ],
      before: "FØR",
      after: "ETTER",
      cta: "Vil du ha dette nivået før neste gjest?",
      btn: "Be om tilgjengelighet på WhatsApp",
      micro: "Raskt svar. Direkte koordinering. Ingen tidsspille.",
      wa: "Hei, jeg trenger informasjon om rengjøring av ferieboliger i Coimbra."
    
    }}
};

interface I18nContextProps {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translation;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('site_lang') as LanguageCode;
    if (saved && flags[saved]) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
    localStorage.setItem('site_lang', lang);
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
