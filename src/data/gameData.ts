import { Scene } from "../types";

export const scenes: Scene[] = [
  {
    id: "start",
    title: "Benvenuto a Roma, Larry!",
    description:
      "Sei appena arrivato a Roma per vedere la partita del Brighton. Sei un po' nervoso ma eccitato. È una bella giornata di sole. Cosa vuoi fare?",
    image: "/images/rome.webp",
    vocabulary: [
      { italian: "benvenuto", english: "welcome" },
      { italian: "bella giornata", english: "beautiful day" },
      { italian: "nervoso", english: "nervous" },
      { italian: "eccitato", english: "excited" },
      { italian: "partita", english: "match" },
    ],
    choices: [
      {
        text: "Andare al bar per un drink",
        nextSceneId: "bar",
        vocabularyHint: "andare = to go, drink = bevanda",
      },
      {
        text: "Visitare lo Stadio Olimpico",
        nextSceneId: "stadium",
        vocabularyHint: "visitare = to visit, stadio = stadium",
      },
      {
        text: "Cercare l'hotel",
        nextSceneId: "hotel",
        vocabularyHint: "cercare = to look for",
      },
    ],
  },
  {
    id: "bar",
    title: "Al Bar",
    description:
      'Sei al bar "La Dolce Vita". Noti una bella barista. Ti sorride e chiede: "Cosa desidera ordinare, signore?"',
    image: "/images/cafe.webp",
    vocabulary: [
      { italian: "bar", english: "bar" },
      { italian: "barista", english: "bartender" },
      { italian: "bella", english: "beautiful" },
      { italian: "sorridere", english: "to smile" },
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
        text: "Un Negroni, per favore. E come ti chiami?",
        nextSceneId: "bar_flirt",
        vocabularyHint: "come ti chiami = what's your name",
      },
      {
        text: "Una birra, per favore. Tifosi del Brighton vengono qui?",
        nextSceneId: "bar_football",
        vocabularyHint: "tifosi = fans, vengono = come",
      },
      {
        text: "Solo un caffè, per favore",
        nextSceneId: "bar_coffee",
        vocabularyHint: "solo = just",
      },
    ],
    items: ["menu"],
  },
  {
    id: "bar_flirt",
    title: "Tentativo di Flirt",
    description:
      'La barista sorride educatamente. "Mi chiamo Giulia. Lei è qui in vacanza? Il Negroni sono 8 euro."',
    image: "/images/coffee.jpg",
    vocabulary: [
      { italian: "tentativo", english: "attempt" },
      { italian: "flirt", english: "flirting" },
      { italian: "educatamente", english: "politely" },
      { italian: "vacanza", english: "vacation" },
    ],
    choices: [
      {
        text: "Sì, sono qui per vedere il Brighton giocare. Ti piace il calcio?",
        nextSceneId: "bar_football",
        vocabularyHint: "calcio = football/soccer",
      },
      {
        text: "Ecco i soldi. Conosci un buon posto per mangiare?",
        nextSceneId: "bar_restaurant",
        vocabularyHint: "soldi = money, posto per mangiare = place to eat",
      },
      {
        text: "Grazie per il drink. Devo andare ora",
        nextSceneId: "start",
        vocabularyHint: "devo andare = I have to go",
      },
    ],
  },
  {
    id: "bar_football",
    title: "Parlando di Calcio",
    description:
      '"Ah, sei un tifoso del Brighton!" dice la barista. "Sì, molti tifosi inglesi vengono qui. La partita è domani allo Stadio Olimpico."',
    image: "/images/cafe_bill.jpg",
    vocabulary: [
      { italian: "tifoso", english: "fan" },
      { italian: "inglesi", english: "English people" },
      { italian: "domani", english: "tomorrow" },
      { italian: "stadio", english: "stadium" },
    ],
    choices: [
      {
        text: "Fantastico! Sai dove posso comprare i biglietti?",
        nextSceneId: "bar_tickets",
        vocabularyHint: "comprare i biglietti = buy tickets",
      },
      {
        text: "Grazie per l'informazione. Il conto, per favore",
        nextSceneId: "bar_bill",
        vocabularyHint: "informazione = information, conto = bill",
      },
    ],
  },
  {
    id: "bar_coffee",
    title: "Un Caffè Italiano",
    description:
      'La barista ti porta un espresso. "Ecco il suo caffè. È la sua prima volta a Roma?"',
    image: "/images/coffee.jpg",
    vocabulary: [
      { italian: "ecco", english: "here is/here are" },
      { italian: "prima volta", english: "first time" },
    ],
    choices: [
      {
        text: "Sì, sono qui per vedere il Brighton giocare domani",
        nextSceneId: "bar_football",
        vocabularyHint: "giocare = to play",
      },
      {
        text: "No, grazie. Il conto, per favore",
        nextSceneId: "bar_bill",
        vocabularyHint: "il conto = the bill",
      },
    ],
  },
  {
    id: "bar_restaurant",
    title: "Consigli sul Ristorante",
    description:
      "\"C'è un ottimo ristorante vicino allo stadio, si chiama 'Trattoria del Tifoso'. Molti tifosi inglesi vanno lì.\"",
    image: "/images/cafe_bill.jpg",
    vocabulary: [
      { italian: "consiglio", english: "advice" },
      { italian: "ristorante", english: "restaurant" },
      { italian: "vicino", english: "near" },
      { italian: "trattoria", english: "traditional restaurant" },
    ],
    choices: [
      {
        text: "Grazie mille! Ci andrò stasera",
        nextSceneId: "bar_bill",
        vocabularyHint: "grazie mille = thank you very much, stasera = tonight",
      },
      {
        text: "Potresti scrivere l'indirizzo?",
        nextSceneId: "bar_bill",
        vocabularyHint: "scrivere = to write, indirizzo = address",
      },
    ],
  },
  {
    id: "bar_tickets",
    title: "Informazioni sui Biglietti",
    description:
      '"Puoi comprare i biglietti online o allo stadio. Ma attenzione, i biglietti vendono velocemente per le partite internazionali!"',
    image: "/images/cafe_bill.jpg",
    vocabulary: [
      { italian: "attenzione", english: "attention/be careful" },
      { italian: "vendono", english: "they sell" },
      { italian: "velocemente", english: "quickly" },
      { italian: "partite internazionali", english: "international matches" },
    ],
    choices: [
      {
        text: "Grazie per il consiglio! Il conto, per favore",
        nextSceneId: "bar_bill",
        vocabularyHint: "consiglio = advice",
      },
      {
        text: "Conosci altri tifosi del Brighton qui?",
        nextSceneId: "bar_fans",
        vocabularyHint: "conoscere = to know",
      },
    ],
  },
  {
    id: "bar_fans",
    title: "Altri Tifosi",
    description:
      "\"Sì, c'è un gruppo di tifosi inglesi che si incontra al pub 'The Lion' vicino al Colosseo. Potresti trovare altri tifosi del Brighton lì.\"",
    image: "/images/cafe_bill.jpg",
    vocabulary: [
      { italian: "gruppo", english: "group" },
      { italian: "incontrarsi", english: "to meet up" },
      { italian: "pub", english: "pub" },
      { italian: "vicino al", english: "near the" },
      { italian: "trovare", english: "to find" },
    ],
    choices: [
      {
        text: "Fantastico! Andrò lì dopo. Il conto, per favore",
        nextSceneId: "bar_bill",
        vocabularyHint: "dopo = after",
      },
      {
        text: "Grazie per tutte le informazioni. Arrivederci!",
        nextSceneId: "start",
        vocabularyHint: "arrivederci = goodbye",
      },
    ],
  },
  {
    id: "bar_bill",
    title: "Il Conto",
    description: 'La barista porta il conto. "Sono dieci euro."',
    image: "/images/cafe_bill.jpg",
    vocabulary: [
      { italian: "sono", english: "it is/they are" },
      { italian: "euro", english: "euro" },
    ],
    choices: [
      {
        text: "Ecco quindici euro. Tenga il resto, sei stata molto gentile",
        nextSceneId: "start",
        vocabularyHint: "tenga il resto = keep the change, gentile = kind",
      },
      {
        text: "Posso pagare con la carta?",
        nextSceneId: "start",
        vocabularyHint: "pagare con la carta = pay with card",
      },
    ],
  },
  {
    id: "stadium",
    title: "Lo Stadio Olimpico",
    description:
      "Sei davanti allo Stadio Olimpico. È impressionante! Ci sono alcuni tifosi che scattano foto e venditori di souvenir.",
    image: "/images/colosseum.webp",
    vocabulary: [
      { italian: "stadio", english: "stadium" },
      { italian: "impressionante", english: "impressive" },
      { italian: "tifosi", english: "fans" },
      { italian: "scattare foto", english: "to take photos" },
      { italian: "venditori", english: "vendors" },
      { italian: "souvenir", english: "souvenirs" },
    ],
    choices: [
      {
        text: "Comprare un biglietto per la partita",
        nextSceneId: "stadium_ticket",
        vocabularyHint: "comprare = to buy, biglietto = ticket",
      },
      {
        text: "Parlare con altri tifosi",
        nextSceneId: "stadium_fans",
        vocabularyHint: "parlare = to talk",
      },
      {
        text: "Tornare in centro",
        nextSceneId: "start",
        vocabularyHint: "tornare = to return, centro = center/downtown",
      },
    ],
  },
  {
    id: "stadium_ticket",
    title: "Biglietto per la Partita",
    description:
      '"Buongiorno," dice il venditore. "Biglietti per Brighton contro Roma? Sono 70 euro per un posto buono."',
    image: "/images/colosseum_ticket.webp",
    vocabulary: [
      { italian: "venditore", english: "seller" },
      { italian: "contro", english: "versus/against" },
      { italian: "posto", english: "seat/place" },
      { italian: "buono", english: "good" },
    ],
    choices: [
      {
        text: "Sì, ne prendo uno. Ecco i soldi",
        nextSceneId: "stadium_bought",
        vocabularyHint: "ne prendo uno = I'll take one, ecco = here is/are",
      },
      {
        text: "È troppo caro. Posso avere uno sconto?",
        nextSceneId: "stadium_haggle",
        vocabularyHint: "troppo caro = too expensive, sconto = discount",
      },
      {
        text: "No grazie, ci penserò",
        nextSceneId: "stadium",
        vocabularyHint: "ci penserò = I'll think about it",
      },
    ],
    items: ["stadium_ticket"],
  },
  {
    id: "stadium_haggle",
    title: "Contrattare il Prezzo",
    description:
      'Il venditore sorride. "Per te, amico inglese, 60 euro. È il prezzo migliore che posso fare."',
    image: "/images/colosseum_ticket.webp",
    vocabulary: [
      { italian: "contrattare", english: "to haggle/negotiate" },
      { italian: "prezzo", english: "price" },
      { italian: "amico", english: "friend" },
      { italian: "migliore", english: "best" },
    ],
    choices: [
      {
        text: "Va bene, accetto. Ecco i soldi",
        nextSceneId: "stadium_bought",
        vocabularyHint: "va bene = okay, accetto = I accept",
      },
      {
        text: "No grazie, cercherò altrove",
        nextSceneId: "stadium",
        vocabularyHint: "cercherò altrove = I'll look elsewhere",
      },
    ],
  },
  {
    id: "stadium_bought",
    title: "Biglietto Acquistato",
    description:
      'Hai comprato un biglietto per la partita di domani. "Grazie e forza Brighton!" dici al venditore.',
    image: "/images/colosseum_ticket_in_hand.webp",
    vocabulary: [
      { italian: "acquistato", english: "purchased" },
      { italian: "domani", english: "tomorrow" },
      { italian: "forza", english: "go/come on (supporting)" },
    ],
    choices: [
      {
        text: "Parlare con altri tifosi",
        nextSceneId: "stadium_fans",
        vocabularyHint: "parlare = to talk",
      },
      {
        text: "Tornare in centro",
        nextSceneId: "start",
        vocabularyHint: "tornare = to return",
      },
    ],
  },
  {
    id: "stadium_fans",
    title: "Tifosi del Brighton",
    description:
      "Incontri un gruppo di tifosi del Brighton. Stanno cantando canzoni e bevendo birra. Ti invitano a unirti a loro.",
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "incontrare", english: "to meet" },
      { italian: "cantare", english: "to sing" },
      { italian: "canzoni", english: "songs" },
      { italian: "bere", english: "to drink" },
      { italian: "invitare", english: "to invite" },
      { italian: "unirsi", english: "to join" },
    ],
    choices: [
      {
        text: "Certo! Mi unisco a voi",
        nextSceneId: "stadium_party",
        vocabularyHint: "certo = sure, mi unisco = I'll join",
      },
      {
        text: "No grazie, devo andare al mio hotel",
        nextSceneId: "hotel",
        vocabularyHint: "devo andare = I have to go",
      },
    ],
  },
  {
    id: "stadium_party",
    title: "Festa con i Tifosi",
    description:
      '"Come ti chiami?" chiede uno dei tifosi. "Io sono Mike. È la tua prima volta a Roma per vedere il Brighton?"',
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "festa", english: "party" },
      { italian: "come ti chiami", english: "what's your name" },
      { italian: "prima volta", english: "first time" },
      { italian: "vedere", english: "to see/watch" },
    ],
    choices: [
      {
        text: "Mi chiamo Larry. Sì, è la mia prima volta. Siete qui spesso?",
        nextSceneId: "stadium_chat",
        vocabularyHint: "spesso = often",
      },
      {
        text: "Mi chiamo Larry. Avete già visto qualcosa della città?",
        nextSceneId: "stadium_chat",
        vocabularyHint: "già = already, qualcosa = something",
      },
    ],
  },
  {
    id: "stadium_chat",
    title: "Chiacchierando con i Tifosi",
    description:
      '"Veniamo a Roma ogni anno per la partita europea," dice Mike. "Conosci qualche parola in italiano? È utile per ordinare da bere!"',
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "chiacchierare", english: "to chat" },
      { italian: "ogni anno", english: "every year" },
      { italian: "parola", english: "word" },
      { italian: "utile", english: "useful" },
      { italian: "ordinare da bere", english: "to order drinks" },
    ],
    choices: [
      {
        text: "Sto imparando! 'Una birra, per favore' è tutto ciò che so",
        nextSceneId: "stadium_learn",
        vocabularyHint: "imparare = to learn, tutto ciò che = all that",
      },
      {
        text: "Non molto. Potete insegnarmi qualche frase utile?",
        nextSceneId: "stadium_learn",
        vocabularyHint: "insegnare = to teach, frase = phrase",
      },
    ],
  },
  {
    id: "stadium_learn",
    title: "Imparando l'Italiano",
    description:
      'Mike e i suoi amici ti insegnano alcune frasi utili in italiano. "Dov\'è il bagno?", "Un\'altra birra, per favore", "Forza Brighton!"',
    image: "/images/colosseum.jpg",
    vocabulary: [
      { italian: "imparare", english: "to learn" },
      { italian: "insegnare", english: "to teach" },
      { italian: "frasi utili", english: "useful phrases" },
      { italian: "dov'è", english: "where is" },
      { italian: "bagno", english: "bathroom" },
      { italian: "un'altra", english: "another" },
    ],
    choices: [
      {
        text: "Grazie! Ora devo andare al mio hotel",
        nextSceneId: "hotel",
        vocabularyHint: "ora = now",
      },
      {
        text: "Grazie! Ci vediamo alla partita domani?",
        nextSceneId: "start",
        vocabularyHint: "ci vediamo = see you",
      },
    ],
  },
  {
    id: "hotel",
    title: "L'Hotel",
    description:
      'Sei arrivato all\'hotel. La receptionist ti sorride: "Buongiorno, ha una prenotazione?"',
    image: "/images/hotel.webp",
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
        text: "Sì, ho una prenotazione a nome Larry",
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
        text: "La receptionist è molto carina... Posso invitarla a cena?",
        nextSceneId: "hotel_flirt",
        vocabularyHint: "carina = pretty, invitare a cena = invite to dinner",
      },
    ],
  },
  {
    id: "hotel_flirt",
    title: "Tentativo di Flirt",
    description:
      'La receptionist sorride educatamente. "Mi dispiace, signore, ma sono qui per lavorare. Posso aiutarla con una camera?"',
    image: "/images/hotel_reception.jpg",
    vocabulary: [
      { italian: "mi dispiace", english: "I'm sorry" },
      { italian: "signore", english: "sir" },
      { italian: "lavorare", english: "to work" },
      { italian: "aiutare", english: "to help" },
    ],
    choices: [
      {
        text: "Scusi, ha ragione. Ho una prenotazione a nome Larry",
        nextSceneId: "hotel_checkin",
        vocabularyHint: "scusi = excuse me, ha ragione = you're right",
      },
      {
        text: "Capisco. Avete camere disponibili?",
        nextSceneId: "hotel_availability",
        vocabularyHint: "capisco = I understand",
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
      "Sei nella tua camera d'hotel. È confortevole e hai una TV dove puoi guardare le notizie sportive sul Brighton.",
    image: "/images/hotel_room.jpg",
    vocabulary: [
      { italian: "camera", english: "room" },
      { italian: "confortevole", english: "comfortable" },
      { italian: "guardare", english: "to watch" },
      { italian: "notizie sportive", english: "sports news" },
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
    description:
      "Ti sei riposato e ti senti meglio. Sogni di incontrare belle ragazze italiane e della vittoria del Brighton domani.",
    image: "/images/hotel_room.jpg",
    vocabulary: [
      { italian: "riposato", english: "rested" },
      { italian: "sentirsi", english: "to feel" },
      { italian: "sognare", english: "to dream" },
      { italian: "vittoria", english: "victory" },
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
      "Hai fatto una doccia rinfrescante. Ti sei messo il tuo profumo migliore e la maglietta del Brighton. Sei pronto per conquistare Roma!",
    image: "/images/hotel_room.jpg",
    vocabulary: [
      { italian: "doccia", english: "shower" },
      { italian: "rinfrescante", english: "refreshing" },
      { italian: "profumo", english: "cologne/perfume" },
      { italian: "maglietta", english: "t-shirt" },
      { italian: "conquistare", english: "to conquer" },
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
