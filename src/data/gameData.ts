import { Scene } from "../types";

export const scenes: Scene[] = [
  {
    id: "start",
    title: "Benvenuto in Italia!",
    description:
      "Sei appena arrivato a Roma. È una bella giornata di sole. Cosa vuoi fare?",
    image: "/images/rome.jpg",
    vocabulary: [
      { italian: "benvenuto", english: "welcome" },
      { italian: "bella giornata", english: "beautiful day" },
      { italian: "sole", english: "sun" },
    ],
    choices: [
      {
        text: "Andare al caffè",
        nextSceneId: "cafe",
        vocabularyHint: "andare = to go",
      },
      {
        text: "Visitare il Colosseo",
        nextSceneId: "colosseum",
        vocabularyHint: "visitare = to visit",
      },
      {
        text: "Cercare l'hotel",
        nextSceneId: "hotel",
        vocabularyHint: "cercare = to look for",
      },
    ],
  },
  {
    id: "cafe",
    title: "Al Caffè",
    description:
      'Sei al caffè "La Dolce Vita". Il cameriere ti chiede: "Cosa desidera ordinare?"',
    image: "/images/cafe.jpg",
    vocabulary: [
      { italian: "caffè", english: "coffee shop/café" },
      { italian: "cameriere", english: "waiter" },
      { italian: "ordinare", english: "to order" },
    ],
    grammar: {
      explanation:
        'In Italian, "Cosa desidera?" is a formal way to ask "What would you like?"',
      examples: [
        { italian: "Cosa desidera?", english: "What would you like?" },
        {
          italian: "Cosa desideri?",
          english: "What would you like? (informal)",
        },
      ],
    },
    choices: [
      {
        text: "Un caffè, per favore",
        nextSceneId: "cafe_coffee",
        vocabularyHint: "per favore = please",
      },
      {
        text: "Una pizza, per favore",
        nextSceneId: "cafe_pizza",
        vocabularyHint: "una pizza = a pizza",
      },
      {
        text: "Un bicchiere d'acqua, per favore",
        nextSceneId: "cafe_water",
        vocabularyHint: "un bicchiere d'acqua = a glass of water",
      },
    ],
    items: ["menu"],
  },
  {
    id: "cafe_coffee",
    title: "Un Caffè Italiano",
    description:
      'Il cameriere ti porta un espresso. "Ecco il suo caffè. Desidera qualcos\'altro?"',
    image: "/images/coffee.jpg",
    vocabulary: [
      { italian: "ecco", english: "here is/here are" },
      { italian: "qualcos'altro", english: "something else" },
    ],
    choices: [
      {
        text: "No, grazie. Il conto, per favore",
        nextSceneId: "cafe_bill",
        vocabularyHint: "il conto = the bill",
      },
      {
        text: "Sì, un cornetto",
        nextSceneId: "cafe_cornetto",
        vocabularyHint: "cornetto = croissant",
      },
      {
        text: "Tornare fuori",
        nextSceneId: "start",
        vocabularyHint: "tornare = to return",
      },
    ],
  },
  {
    id: "cafe_bill",
    title: "Il Conto",
    description: 'Il cameriere porta il conto. "Sono cinque euro."',
    image: "/images/cafe_bill.jpg",
    vocabulary: [
      { italian: "sono", english: "it is/they are" },
      { italian: "euro", english: "euro" },
    ],
    choices: [
      {
        text: "Ecco dieci euro. Tenga il resto",
        nextSceneId: "start",
        vocabularyHint: "tenga il resto = keep the change",
      },
      {
        text: "Ha il POS? Vorrei pagare con la carta",
        nextSceneId: "start",
        vocabularyHint: "pagare con la carta = pay with card",
      },
    ],
  },
  {
    id: "cafe_cornetto",
    title: "Un Cornetto",
    description:
      'Il cameriere ti porta un cornetto. "Ecco il suo cornetto. Buon appetito!"',
    image: "/images/cafe_cornetto.jpg",
    vocabulary: [
      { italian: "cornetto", english: "croissant" },
      { italian: "buon appetito", english: "enjoy your meal" },
    ],
    choices: [
      {
        text: "Grazie! È delizioso",
        nextSceneId: "cafe_bill",
        vocabularyHint: "delizioso = delicious",
      },
      {
        text: "Grazie! Posso avere anche un bicchiere d'acqua?",
        nextSceneId: "cafe_water",
        vocabularyHint: "posso avere = can I have",
      },
    ],
  },
  {
    id: "cafe_water",
    title: "Un Bicchiere d'Acqua",
    description:
      'Il cameriere ti porta un bicchiere d\'acqua. "Ecco la sua acqua. Desidera altro?"',
    image: "/images/cafe_water.jpg",
    vocabulary: [
      { italian: "bicchiere", english: "glass" },
      { italian: "acqua", english: "water" },
    ],
    choices: [
      {
        text: "No, grazie. Il conto, per favore",
        nextSceneId: "cafe_bill",
        vocabularyHint: "il conto = the bill",
      },
      {
        text: "Sì, un caffè per favore",
        nextSceneId: "cafe_coffee",
        vocabularyHint: "caffè = coffee",
      },
      {
        text: "Tornare fuori",
        nextSceneId: "start",
        vocabularyHint: "tornare = to return",
      },
    ],
  },
  {
    id: "colosseum",
    title: "Il Colosseo",
    description:
      "Sei davanti al Colosseo. È enorme! C'è una lunga fila per entrare.",
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "davanti a", english: "in front of" },
      { italian: "enorme", english: "huge" },
      { italian: "fila", english: "line/queue" },
      { italian: "entrare", english: "to enter" },
    ],
    choices: [
      {
        text: "Fare la fila",
        nextSceneId: "colosseum_queue",
        vocabularyHint: "fare la fila = to queue",
      },
      {
        text: "Comprare un biglietto online",
        nextSceneId: "colosseum_ticket",
        vocabularyHint: "comprare = to buy, biglietto = ticket",
      },
      {
        text: "Tornare in centro",
        nextSceneId: "start",
        vocabularyHint: "tornare = to return, centro = center/downtown",
      },
    ],
  },
  {
    id: "colosseum_queue",
    title: "In Fila",
    description: "Sei in fila da mezz'ora. Finalmente è il tuo turno!",
    image: "/images/colosseum_queue.jpg",
    vocabulary: [
      { italian: "mezz'ora", english: "half an hour" },
      { italian: "finalmente", english: "finally" },
      { italian: "turno", english: "turn" },
    ],
    choices: [
      {
        text: "Comprare il biglietto",
        nextSceneId: "colosseum_inside",
        vocabularyHint: "comprare = to buy",
      },
      {
        text: "Chiedere informazioni sulla visita guidata",
        nextSceneId: "colosseum_guided_tour",
        vocabularyHint: "visita guidata = guided tour",
      },
    ],
  },
  {
    id: "colosseum_ticket",
    title: "Biglietto Online",
    description: "Hai comprato un biglietto online. Puoi saltare la fila!",
    image: "/images/colosseum_ticket.jpg",
    vocabulary: [
      { italian: "saltare", english: "to skip" },
      { italian: "biglietto", english: "ticket" },
    ],
    choices: [
      {
        text: "Entrare nel Colosseo",
        nextSceneId: "colosseum_inside",
        vocabularyHint: "entrare = to enter",
      },
      {
        text: "Tornare in centro",
        nextSceneId: "start",
        vocabularyHint: "tornare = to return",
      },
    ],
    items: ["colosseum_ticket"],
  },
  {
    id: "colosseum_inside",
    title: "Dentro il Colosseo",
    description:
      "Sei dentro il Colosseo. È impressionante! Puoi vedere l'arena dove combattevano i gladiatori.",
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "impressionante", english: "impressive" },
      { italian: "arena", english: "arena" },
      { italian: "gladiatori", english: "gladiators" },
      { italian: "combattere", english: "to fight" },
    ],
    choices: [
      {
        text: "Fare delle foto",
        nextSceneId: "colosseum_photos",
        vocabularyHint: "fare delle foto = to take pictures",
      },
      {
        text: "Leggere le informazioni storiche",
        nextSceneId: "colosseum_history",
        vocabularyHint:
          "leggere = to read, informazioni storiche = historical information",
      },
      {
        text: "Uscire e tornare in centro",
        nextSceneId: "start",
        vocabularyHint: "uscire = to exit",
      },
    ],
  },
  {
    id: "colosseum_guided_tour",
    title: "Visita Guidata",
    description:
      'La guida dice: "Benvenuti al Colosseo, uno dei monumenti più famosi di Roma."',
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "guida", english: "guide" },
      { italian: "monumento", english: "monument" },
      { italian: "famoso", english: "famous" },
    ],
    choices: [
      {
        text: "Seguire la guida",
        nextSceneId: "colosseum_inside",
        vocabularyHint: "seguire = to follow",
      },
      {
        text: "Fare una domanda sulla storia",
        nextSceneId: "colosseum_history",
        vocabularyHint: "domanda = question, storia = history",
      },
    ],
  },
  {
    id: "colosseum_photos",
    title: "Foto al Colosseo",
    description:
      "Hai fatto delle belle foto del Colosseo. Vuoi condividerle sui social media?",
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "belle foto", english: "beautiful pictures" },
      { italian: "condividere", english: "to share" },
      { italian: "social media", english: "social media" },
    ],
    choices: [
      {
        text: "Sì, condividere le foto",
        nextSceneId: "start",
        vocabularyHint: "condividere = to share",
      },
      {
        text: "No, continuare la visita",
        nextSceneId: "colosseum_history",
        vocabularyHint: "continuare = to continue, visita = visit",
      },
      {
        text: "Uscire e tornare in centro",
        nextSceneId: "start",
        vocabularyHint: "uscire = to exit",
      },
    ],
  },
  {
    id: "colosseum_history",
    title: "Storia del Colosseo",
    description:
      "Leggi che il Colosseo fu costruito tra il 70 e l'80 d.C. sotto l'imperatore Vespasiano.",
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "costruito", english: "built" },
      { italian: "imperatore", english: "emperor" },
      { italian: "d.C. (dopo Cristo)", english: "AD (Anno Domini)" },
    ],
    choices: [
      {
        text: "Interessante! Continuare la visita",
        nextSceneId: "colosseum_photos",
        vocabularyHint: "interessante = interesting",
      },
      {
        text: "Uscire e tornare in centro",
        nextSceneId: "start",
        vocabularyHint: "uscire = to exit",
      },
    ],
  },
  {
    id: "hotel",
    title: "L'Hotel",
    description:
      'Sei arrivato all\'hotel. La receptionist ti saluta: "Buongiorno, ha una prenotazione?"',
    image: "/images/hotel.jpg",
    vocabulary: [
      { italian: "buongiorno", english: "good morning/good day" },
      { italian: "prenotazione", english: "reservation" },
    ],
    grammar: {
      explanation:
        'In Italian, "ha" is the formal form of "you have" (third person singular of the verb "avere")',
      examples: [
        {
          italian: "Ha una prenotazione?",
          english: "Do you have a reservation? (formal)",
        },
        {
          italian: "Hai una prenotazione?",
          english: "Do you have a reservation? (informal)",
        },
      ],
    },
    choices: [
      {
        text: "Sì, ho una prenotazione a nome Rossi",
        nextSceneId: "hotel_checkin",
        vocabularyHint: "ho = I have, a nome = under the name",
      },
      {
        text: "No, avete camere disponibili?",
        nextSceneId: "hotel_availability",
        vocabularyHint:
          "avete = you have (plural), camere disponibili = available rooms",
      },
      {
        text: "Scusi, ho sbagliato hotel",
        nextSceneId: "start",
        vocabularyHint: "scusi = excuse me, ho sbagliato = I made a mistake",
      },
    ],
  },
  {
    id: "hotel_checkin",
    title: "Check-in",
    description:
      'La receptionist controlla al computer. "Sì, abbiamo la sua prenotazione. Ha un documento d\'identità?"',
    image: "/images/hotel_reception.jpg",
    vocabulary: [
      { italian: "documento d'identità", english: "ID document" },
      { italian: "abbiamo", english: "we have" },
    ],
    choices: [
      {
        text: "Ecco il mio passaporto",
        nextSceneId: "hotel_room",
        vocabularyHint: "ecco = here is, passaporto = passport",
      },
      {
        text: "Ho solo la patente",
        nextSceneId: "hotel_room",
        vocabularyHint: "solo = only, patente = driver's license",
      },
      {
        text: "Oh no! Ho dimenticato i documenti",
        nextSceneId: "start",
        vocabularyHint: "ho dimenticato = I forgot",
      },
    ],
    items: ["hotel_key"],
  },
  {
    id: "hotel_availability",
    title: "Camere Disponibili",
    description:
      'La receptionist controlla al computer. "Sì, abbiamo una camera singola disponibile per tre notti."',
    image: "/images/hotel_reception.jpg",
    vocabulary: [
      { italian: "camera singola", english: "single room" },
      { italian: "disponibile", english: "available" },
      { italian: "notte", english: "night" },
    ],
    choices: [
      {
        text: "Perfetto, la prendo",
        nextSceneId: "hotel_checkin",
        vocabularyHint: "perfetto = perfect, prendo = I'll take it",
      },
      {
        text: "Quanto costa?",
        nextSceneId: "hotel_price",
        vocabularyHint: "quanto costa = how much does it cost",
      },
      {
        text: "No grazie, cercherò un altro hotel",
        nextSceneId: "start",
        vocabularyHint: "cercherò = I will look for",
      },
    ],
  },
  {
    id: "hotel_price",
    title: "Il Prezzo",
    description:
      'La receptionist risponde: "Sono 80 euro a notte, colazione inclusa."',
    image: "/images/hotel_reception.jpg",
    vocabulary: [
      { italian: "prezzo", english: "price" },
      { italian: "a notte", english: "per night" },
      { italian: "colazione", english: "breakfast" },
      { italian: "inclusa", english: "included" },
    ],
    choices: [
      {
        text: "Va bene, la prendo",
        nextSceneId: "hotel_checkin",
        vocabularyHint: "va bene = it's okay",
      },
      {
        text: "È un po' caro. Avete qualcosa di più economico?",
        nextSceneId: "hotel_cheaper",
        vocabularyHint: "caro = expensive, economico = cheap",
      },
      {
        text: "No grazie, cercherò un altro hotel",
        nextSceneId: "start",
        vocabularyHint: "cercherò = I will look for",
      },
    ],
  },
  {
    id: "hotel_cheaper",
    title: "Opzione Economica",
    description:
      'La receptionist dice: "Abbiamo una camera più piccola senza vista per 60 euro a notte."',
    image: "/images/hotel_reception.jpg",
    vocabulary: [
      { italian: "piccola", english: "small" },
      { italian: "senza", english: "without" },
      { italian: "vista", english: "view" },
    ],
    choices: [
      {
        text: "Perfetto, prendo questa",
        nextSceneId: "hotel_checkin",
        vocabularyHint: "questa = this one",
      },
      {
        text: "No grazie, cercherò un altro hotel",
        nextSceneId: "start",
        vocabularyHint: "cercherò = I will look for",
      },
    ],
  },
  {
    id: "hotel_room",
    title: "La Camera d'Hotel",
    description:
      "Sei nella tua camera d'hotel. È confortevole e ha una bella vista sulla città.",
    image: "/images/hotel_room.jpg",
    vocabulary: [
      { italian: "camera", english: "room" },
      { italian: "confortevole", english: "comfortable" },
      { italian: "vista sulla città", english: "view of the city" },
    ],
    choices: [
      {
        text: "Riposare un po'",
        nextSceneId: "hotel_rest",
        vocabularyHint: "riposare = to rest",
      },
      {
        text: "Fare una doccia",
        nextSceneId: "hotel_shower",
        vocabularyHint: "fare una doccia = to take a shower",
      },
      {
        text: "Uscire e esplorare la città",
        nextSceneId: "start",
        vocabularyHint: "uscire = to go out, esplorare = to explore",
      },
    ],
  },
  {
    id: "hotel_rest",
    title: "Riposo in Hotel",
    description: "Ti sei riposato e ti senti meglio. Cosa vuoi fare ora?",
    image: "/images/hotel_room.jpg",
    vocabulary: [
      { italian: "riposato", english: "rested" },
      { italian: "sentirsi", english: "to feel" },
      { italian: "meglio", english: "better" },
      { italian: "ora", english: "now" },
    ],
    choices: [
      {
        text: "Fare una doccia",
        nextSceneId: "hotel_shower",
        vocabularyHint: "fare una doccia = to take a shower",
      },
      {
        text: "Uscire e esplorare la città",
        nextSceneId: "start",
        vocabularyHint: "uscire = to go out, esplorare = to explore",
      },
    ],
  },
  {
    id: "hotel_shower",
    title: "Doccia in Hotel",
    description:
      "Hai fatto una doccia rinfrescante. Ti senti pulito e pronto per nuove avventure.",
    image: "/images/hotel_room.jpg",
    vocabulary: [
      { italian: "doccia", english: "shower" },
      { italian: "rinfrescante", english: "refreshing" },
      { italian: "pulito", english: "clean" },
      { italian: "pronto", english: "ready" },
      { italian: "avventure", english: "adventures" },
    ],
    choices: [
      {
        text: "Riposare un po'",
        nextSceneId: "hotel_rest",
        vocabularyHint: "riposare = to rest",
      },
      {
        text: "Uscire e esplorare la città",
        nextSceneId: "start",
        vocabularyHint: "uscire = to go out, esplorare = to explore",
      },
    ],
  },
];

export const initialGameState = {
  currentSceneId: "start",
  inventory: [],
  learnedVocabulary: [],
  visitedScenes: [],
};
