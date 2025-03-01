import { Scene, Story } from '../../types';

// Define all scenes for Marco's story
const marcoScenes: Scene[] = [
  {
    id: 'start',
    title: 'Marco si trasferisce a Roma',
    description:
      "È il tuo primo giorno a Roma. Ti sei appena trasferito dall'Inghilterra per un nuovo lavoro. Hai 28 anni e vuoi imparare l'italiano. Il tuo appartamento è piccolo ma carino. Cosa vuoi fare oggi?",
    image: '/images/rome-apartment.webp',
    vocabulary: [
      { italian: 'trasferirsi', english: 'to move (oneself)' },
      { italian: 'primo giorno', english: 'first day' },
      { italian: 'lavoro', english: 'job/work' },
      { italian: 'appartamento', english: 'apartment' },
      { italian: 'piccolo', english: 'small' },
      { italian: 'carino', english: 'cute/nice' },
    ],
    choices: [
      {
        text: 'Esplorare il quartiere',
        nextSceneId: 'neighborhood',
        vocabularyHint: 'esplorare = to explore, quartiere = neighborhood',
      },
      {
        text: 'Andare al supermercato',
        nextSceneId: 'supermarket',
        vocabularyHint: 'andare = to go, supermercato = supermarket',
      },
      {
        text: 'Chiamare il tuo capo',
        nextSceneId: 'call_boss',
        vocabularyHint: 'chiamare = to call, capo = boss',
      },
    ],
  },
  {
    id: 'neighborhood',
    title: 'Il Quartiere Testaccio',
    description:
      'Esci per esplorare il quartiere. Testaccio è un quartiere storico e autentico di Roma. Vedi molti ristoranti, caffè, e un mercato. Una signora anziana ti saluta: "Buongiorno, sei nuovo qui?"',
    image: '/images/testaccio.webp',
    vocabulary: [
      { italian: 'quartiere', english: 'neighborhood' },
      { italian: 'storico', english: 'historic' },
      { italian: 'autentico', english: 'authentic' },
      { italian: 'mercato', english: 'market' },
      { italian: 'signora anziana', english: 'elderly lady' },
      { italian: 'salutare', english: 'to greet' },
      { italian: 'nuovo', english: 'new' },
    ],
    grammar: {
      explanation:
        'In Italian, "sei nuovo qui?" is a way to ask "are you new here?"',
      examples: [
        {
          italian: 'Sei nuovo qui?',
          english: 'Are you new here?',
        },
        {
          italian: 'Sì, mi sono trasferito ieri.',
          english: 'Yes, I moved here yesterday.',
        },
      ],
    },
    choices: [
      {
        text: 'Rispondere: "Sì, mi sono trasferito ieri."',
        nextSceneId: 'talk_neighbor',
        vocabularyHint: 'rispondere = to answer, ieri = yesterday',
      },
      {
        text: 'Andare al mercato',
        nextSceneId: 'market',
        vocabularyHint: 'andare = to go, mercato = market',
      },
      {
        text: 'Cercare un caffè',
        nextSceneId: 'cafe',
        vocabularyHint: 'cercare = to look for, caffè = coffee shop',
      },
    ],
  },
  {
    id: 'talk_neighbor',
    title: 'La Tua Vicina',
    description:
      'La signora sorride. "Benvenuto! Mi chiamo Sofia. Sono la tua vicina. Se hai bisogno di aiuto, sono nell\'appartamento 3B." Ti dà un piccolo sacchetto. "Questi sono biscotti fatti in casa. Un regalo di benvenuto."',
    image: '/images/neighbor.webp',
    vocabulary: [
      { italian: 'vicina', english: 'neighbor (female)' },
      { italian: 'aiuto', english: 'help' },
      { italian: 'appartamento', english: 'apartment' },
      { italian: 'sacchetto', english: 'small bag' },
      { italian: 'biscotti', english: 'cookies' },
      { italian: 'fatti in casa', english: 'homemade' },
      { italian: 'regalo', english: 'gift' },
      { italian: 'benvenuto', english: 'welcome' },
    ],
    items: ['biscotti'],
    choices: [
      {
        text: 'Ringraziare Sofia',
        nextSceneId: 'thank_neighbor',
        vocabularyHint: 'ringraziare = to thank',
      },
      {
        text: 'Chiedere informazioni sul quartiere',
        nextSceneId: 'ask_neighborhood',
        vocabularyHint: 'chiedere = to ask, informazioni = information',
      },
      {
        text: 'Salutare e continuare a esplorare',
        nextSceneId: 'continue_exploring',
        vocabularyHint: 'salutare = to say goodbye, continuare = to continue',
      },
    ],
  },
  {
    id: 'supermarket',
    title: 'Al Supermercato',
    description:
      "Entri nel supermercato 'Carrefour Express'. È piccolo ma ha tutto il necessario. Hai bisogno di comprare del cibo per la tua nuova casa. Un commesso ti chiede: 'Posso aiutarla?'",
    image: '/images/supermarket.webp',
    vocabulary: [
      { italian: 'supermercato', english: 'supermarket' },
      { italian: 'entrare', english: 'to enter' },
      { italian: 'necessario', english: 'necessary/needed' },
      { italian: 'comprare', english: 'to buy' },
      { italian: 'cibo', english: 'food' },
      { italian: 'commesso', english: 'shop assistant' },
      { italian: 'aiutare', english: 'to help' },
    ],
    grammar: {
      explanation:
        'In Italian, "Posso aiutarla?" is a formal way to ask "Can I help you?"',
      examples: [
        {
          italian: 'Posso aiutarla?',
          english: 'Can I help you? (formal)',
        },
        {
          italian: 'Posso aiutarti?',
          english: 'Can I help you? (informal)',
        },
      ],
    },
    choices: [
      {
        text: 'Sì, cerco il pane.',
        nextSceneId: 'bread_section',
        vocabularyHint: 'cercare = to look for, pane = bread',
      },
      {
        text: 'No, grazie. Sto solo guardando.',
        nextSceneId: 'browsing_supermarket',
        vocabularyHint: 'guardare = to look/watch, solo = just/only',
      },
      {
        text: 'Dove sono i prodotti italiani tipici?',
        nextSceneId: 'italian_products',
        vocabularyHint: 'dove = where, prodotti = products, tipici = typical',
      },
    ],
  },
  {
    id: 'call_boss',
    title: 'Chiamare il Capo',
    description:
      'Chiami il tuo nuovo capo, Paolo Rossi. "Pronto, Marco! Benvenuto a Roma. Sei pronto per iniziare lunedì? L\'ufficio è in Via del Corso, 25. Iniziamo alle 9:00."',
    image: '/images/phone-call.webp',
    vocabulary: [
      { italian: 'chiamare', english: 'to call' },
      { italian: 'capo', english: 'boss' },
      { italian: 'pronto', english: 'ready/hello (on phone)' },
      { italian: 'iniziare', english: 'to start/begin' },
      { italian: 'lunedì', english: 'Monday' },
      { italian: 'ufficio', english: 'office' },
      { italian: 'via', english: 'street' },
    ],
    choices: [
      {
        text: 'Sì, sono molto emozionato di iniziare!',
        nextSceneId: 'excited_work',
        vocabularyHint: 'emozionato = excited',
      },
      {
        text: 'A che ora finisce il lavoro?',
        nextSceneId: 'work_hours',
        vocabularyHint: 'finire = to finish, ora = hour/time',
      },
      {
        text: "C'è un dress code?",
        nextSceneId: 'dress_code',
        vocabularyHint: 'dress code = codice di abbigliamento',
      },
    ],
  },
  // Additional scenes would be added here...
];

// Define Marco's story
export const marcoStory: Story = {
  id: 'marco-rome',
  title: 'Marco a Roma',
  description:
    "Segui Marco mentre si trasferisce a Roma per un nuovo lavoro. Impara l'italiano di base attraverso situazioni quotidiane come fare la spesa, conoscere i vicini e iniziare un nuovo lavoro.",
  coverImage: '/images/marco-cover.webp',
  languageLevel: 'A1',
  scenes: marcoScenes,
  initialGameState: {
    storyId: 'marco-rome',
    currentSceneId: 'start',
    inventory: [],
    learnedVocabulary: [],
    visitedScenes: [],
  },
};
