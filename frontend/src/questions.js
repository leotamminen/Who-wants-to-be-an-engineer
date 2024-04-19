// First test questions. Only 1 per difficulty at this point
const questions = [
  {
    // id: 1,
    question: "Milloin on elokuu?",
    answers: [
      {
        text: "Syyskuun jälkeen",
        correct: false,
      },
      {
        text: "Lokakuuta ennen",
        correct: true,
      },
      {
        text: "Kesä- ja heinäkuun välissä",
        correct: false,
      },
      {
        text: "Ennen heinäkuuta",
        correct: false,
      },
    ],
  },
  {
    // id: 2,
    question: "Mikä on maailman suurin (ei korkein) vuoristo?",
    answers: [
      {
        text: "Atlasvuoret",
        correct: false,
      },
      {
        text: "Pyreneet",
        correct: false,
      },
      {
        text: "Andit",
        correct: true,
      },
      {
        text: "Uralvuoristo",
        correct: false,
      },
    ],
  },
  {
    // id: 3,
    question: "Mistä Martti Ahtisaari sai Nobel-palkinnon?",
    answers: [
      {
        text: "Presidenttiydestä",
        correct: false,
      },
      {
        text: "Tieteestä",
        correct: false,
      },
      {
        text: "Rauhasta",
        correct: true,
      },
      {
        text: "Hyväntekeväisyydestä",
        correct: false,
      },
    ],
  },
  {
    // id: 4,
    question: "Mikä seuraavista EI ole ohjelmointikieli?",
    answers: [
      {
        text: "Cython",
        correct: false,
      },
      {
        text: "Python",
        correct: false,
      },
      {
        text: "Dython",
        correct: true,
      },
      {
        text: "Jython",
        correct: false,
      },
    ],
  },
  {
    // id: 5,
    question: "Millä ohjelmointikielellä tämä ohjelma on tehty?",
    answers: [
      {
        text: "Python, MongoDB Atlas, MySQL ja HTML",
        correct: false,
      },
      {
        text: "JavaScript, CSS ja HTML",
        correct: true,
      },
      {
        text: "React, Javascript, HTML ja CSS",
        correct: true,
      },
      {
        text: "Python, Django ja Flask",
        correct: false,
      },
    ],
  },
  {
    // id: 6,
    question: "Kenen kuva oli viimeisessä 20 markan setelissä?",
    answers: [
      {
        text: "Aleksis Kiven",
        correct: false,
      },
      {
        text: "Väinö Linnan",
        correct: true,
      },
      {
        text: "Paavo Nurmen",
        correct: false,
      },
      {
        text: "Urho Kekkosen",
        correct: false,
      },
    ],
  },
  {
    // id: 7,
    question: "Montako tuhatta on miljoona?",
    answers: [
      {
        text: "Yksi",
        correct: false,
      },
      {
        text: "Kymmenen",
        correct: false,
      },
      {
        text: "Sata",
        correct: false,
      },
      {
        text: "Tuhat",
        correct: true,
      },
    ],
  },
  {
    // id: 8,
    question: "Millä nimellä muusikko Petri Tiili tunnetaan paremmin?",
    answers: [
      {
        text: "Neumann",
        correct: false,
      },
      {
        text: "Pelle Miljoona",
        correct: true,
      },
      {
        text: "Paleface",
        correct: false,
      },
      {
        text: "Andy McCoy",
        correct: false,
      },
    ],
  },
  {
    // id: 9,
    question: "Minkä lajin legendaarisia nimiä on Kareem Abdul-Jabbar?",
    answers: [
      {
        text: "Koripallon",
        correct: true,
      },
      {
        text: "Baseballin",
        correct: false,
      },
      {
        text: "Golfin",
        correct: false,
      },
      {
        text: "Nyrkkeilyn",
        correct: false,
      },
    ],
  },
  {
    // id: 10,
    question: "Mikä on Ruotsin pääkaupunki?",
    answers: [
      {
        text: "Tuklehtinen",
        correct: false,
      },
      {
        text: "Tuklinga",
        correct: false,
      },
      {
        text: "Tuklinnonmaa",
        correct: false,
      },
      {
        text: "Tukholma",
        correct: true,
      },
    ],
  },
  {
    // id: 11,
    question: "Missä kaupungissa sijaitsee kuuluisa Yyterin hiekkaranta?",
    answers: [
      {
        text: "Lahdessa",
        correct: false,
      },
      {
        text: "Kemissä",
        correct: false,
      },
      {
        text: "Porissa",
        correct: true,
      },
      {
        text: "Tampereella",
        correct: false,
      },
    ],
  },
  {
    // id: 12,
    question:
      "Kuka on kirjoittanut historiallisen romaanin Sinuhe Egyptiläinen?",
    answers: [
      {
        text: "Volter Kilpi",
        correct: false,
      },
      {
        text: "Katri Vala",
        correct: false,
      },
      {
        text: "Mika Waltari",
        correct: true,
      },
      {
        text: "Frans Emil Sillanpää",
        correct: false,
      },
    ],
  },
  {
    // id: 13,
    question:
      "Kuka on maalannut Teuvan kirkon alttaritaulun Kymmenen neitsyttä?",
    answers: [
      {
        text: "Tove Jansson",
        correct: true,
      },
      {
        text: "Outi Heiskanen",
        correct: false,
      },
      {
        text: "Hugo Simberg",
        correct: false,
      },
      {
        text: "Helene Schjerfbeck",
        correct: false,
      },
    ],
  },
  {
    // id: 14,
    question: "Minkä eläimen tieteellinen nimi on Canis lupus?",
    answers: [
      {
        text: "Hirvi",
        correct: false,
      },
      {
        text: "Ilves",
        correct: false,
      },
      {
        text: "Kettu",
        correct: false,
      },
      {
        text: "Susi",
        correct: true,
      },
    ],
  },
  {
    // id: 15,
    question:
      "Missä paikassa Auric Goldfinger suunnittelee räjäyttävänsä ydinpommin elokuvassa 007 ja kultasormi?",
    answers: [
      {
        text: "Fort Knox",
        correct: true,
      },
      {
        text: "Pentagon",
        correct: false,
      },
      {
        text: "Buckinghamin palatsi",
        correct: false,
      },
      {
        text: "Sydneyn oopperatalo",
        correct: false,
      },
    ],
  },
];

// all 15 available prizesums
const prizeSums = [
  { id: 1, amount: "100 €" },
  { id: 2, amount: "300 €" },
  { id: 3, amount: "500 €" },
  { id: 4, amount: "700 €" },
  { id: 5, amount: "1 000 €" },
  { id: 6, amount: "2 000 €" },
  { id: 7, amount: "3 000 €" },
  { id: 8, amount: "5 000 €" },
  { id: 9, amount: "7 000 €" },
  { id: 10, amount: "10 000 €" },
  { id: 11, amount: "15 000 €" },
  { id: 12, amount: "30 000 €" },
  { id: 13, amount: "60 000 €" },
  { id: 14, amount: "200 000 €" },
  { id: 15, amount: "1 000 000 €" },
].reverse();

const studyPoints = [
  { id: 1, amount: "1 op" },
  { id: 2, amount: "5 op" },
  { id: 3, amount: "20 op" },
  { id: 4, amount: "40 op" },
  { id: 5, amount: "60 op" },
  { id: 6, amount: "80 op" },
  { id: 7, amount: "100 op" },
  { id: 8, amount: "125 op" },
  { id: 9, amount: "150 op" },
  { id: 10, amount: "180 op" },
  { id: 11, amount: "200 op" },
  { id: 12, amount: "220 op" },
  { id: 13, amount: "245 op" },
  { id: 14, amount: "270 op" },
  { id: 15, amount: "300 op" },
].reverse();

// works with the backend
module.exports = { prizeSums, questions, studyPoints };
