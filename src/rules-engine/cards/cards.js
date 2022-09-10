const nameMap = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  queen: 12,
  king: 13
}

const imageMap = {
  acespades: 'sa',
  twospades: 's2',
  threespades: 's3',
  fourspades: 's4',
  fivespades: 's5',
  sixspades: 's6',
  sevenspades: 's7',
  eightspades: 's8',
  ninespades: 's9',
  tenspades: 's10',
  jackspades: 'sj',
  queenspades: 'sq',
  kingspades: 'sk',

  acehearts: 'ha',
  twohearts: 'h2',
  threehearts: 'h3',
  fourhearts: 'h4',
  fivehearts: 'h5',
  sixhearts: 'h6',
  sevenhearts: 'h7',
  eighthearts: 'h8',
  ninehearts: 'h9',
  tenhearts: 'h10',
  jackhearts: 'hj',
  queenhearts: 'hq',
  kinghearts: 'hk',

  acediamonds: 'da',
  twodiamonds: 'd2',
  threediamonds: 'd3',
  fourdiamonds: 'd4',
  fivediamonds: 'd5',
  sixdiamonds: 'd6',
  sevendiamonds: 'd7',
  eightdiamonds: 'd8',
  ninediamonds: 'd9',
  tendiamonds: 'd10',
  jackdiamonds: 'dj',
  queendiamonds: 'dq',
  kingdiamonds: 'dk',

  aceclubs: 'ca',
  twoclubs: 'c2',
  threeclubs: 'c3',
  fourclubs: 'c4',
  fiveclubs: 'c5',
  sixclubs: 'c6',
  sevenclubs: 'c7',
  eightclubs: 'c8',
  nineclubs: 'c9',
  tenclubs: 'c10',
  jackclubs: 'cj',
  queenclubs: 'cq',
  kingclubs: 'ck'
}

const suits = ['spades', 'clubs', 'diamonds', 'hearts']

const names = [
  'ace',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king'
]

// Durstenfield shuffle:
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffleDeck (deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }

  return deck
}

function createDeck () {
  let deck = []

  suits.forEach(suit => {
    names.forEach(name => {
      deck.push({
        name: `${name} of ${suit}`,
        value: nameMap[name],
        image: imageMap[name + suit]
      })
    })
  })

  return shuffleDeck(deck)
}

export default createDeck()
