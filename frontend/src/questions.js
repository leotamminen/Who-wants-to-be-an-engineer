// Hard coded questions. Still only 1 per difficulty
const questions = [
  {
    question:
      "In computer architecture, what is the role of the Central Processing Unit (CPU) within a computer system?",
    answers: [
      { text: "To store and manage data", correct: false },
      {
        text: "To perform calculations and execute instructions",
        correct: true,
      },
      {
        text: "To control the flow of data between components",
        correct: false,
      },
      {
        text: "To provide a user interface for interacting with the computer",
        correct: false,
      },
    ],
    difficulty: 1,
  },
  {
    question:
      "What is the primary function of a compiler in the process of creating software?",
    answers: [
      { text: "Detect and fix errors in the code", correct: false },
      { text: "Document the functionality of the program", correct: false },
      { text: "Compress the size of the final program", correct: false },
      { text: "Translate high-level code into machine code", correct: true },
    ],
    difficulty: 2,
  },
  {
    question: "What is the main purpose of a firewall in a computer network?",
    answers: [
      { text: "To improve internet browsing speed", correct: false },
      {
        text: "To control and filter incoming and outgoing traffic",
        correct: true,
      },
      { text: "To store user data and files", correct: false },
      { text: "To display visual information on the screen", correct: false },
    ],
    difficulty: 3,
  },
  {
    question:
      "What is the purpose of a Domain Name System (DNS) in the internet?",
    answers: [
      { text: "To encrypt communication between devices", correct: false },
      { text: "To translate domain names into IP addresses", correct: true },
      { text: "To store and manage user accounts", correct: false },
      { text: "To display search results in a web browser", correct: false },
    ],
    difficulty: 4,
  },
  {
    question:
      "What is the primary function of a web server in a computer network?",
    answers: [
      { text: "To filter incoming and outgoing traffic", correct: false },
      { text: "To store and manage website content", correct: true },
      { text: "To browse the internet and access web pages", correct: false },
      { text: "To protect against cyberattacks and malware", correct: false },
    ],
    difficulty: 5,
  },
  {
    question:
      "In fluid mechanics, what parameter represents the resistance of a fluid to shearing forces?",
    answers: [
      { text: "Density", correct: false },
      { text: "Viscosity", correct: true },
      { text: "Pressure", correct: false },
      { text: "Surface tension", correct: false },
    ],
    difficulty: 6,
  },
  {
    question:
      "During a tensile strength test, a cylindrical metal rod is subjected to a gradually increasing axial load. What property of the material determines the amount of elongation the rod experiences before failure?",
    answers: [
      { text: "Young's Modulus", correct: false },
      { text: "Poisson's Ratio", correct: false },
      { text: "Ultimate Tensile Strength", correct: false },
      { text: "Ductility", correct: true },
    ],
    difficulty: 7,
  },
  {
    question:
      "When designing a control system for a machine, what is the primary function of feedback control?",
    answers: [
      {
        text: "To pre-program a sequence of actions for the machine",
        correct: false,
      },
      {
        text: "To continuously monitor the machine's output and adjust inputs accordingly",
        correct: true,
      },
      {
        text: "To increase the power output of the machine's actuators",
        correct: false,
      },
      {
        text: "To simplify the overall design of the control system",
        correct: false,
      },
    ],
    difficulty: 8,
  },
  {
    question: "What is the main function of a culvert in civil engineering?",
    answers: [
      {
        text: "To support and distribute the weight of a bridge",
        correct: false,
      },
      {
        text: "To allow water to flow under a road or other structure",
        correct: true,
      },
      {
        text: "To provide additional support for a building foundation",
        correct: false,
      },
      {
        text: "To create a sound barrier along a busy highway",
        correct: false,
      },
    ],
    difficulty: 9,
  },
  {
    question:
      "In a Geographic Information System (GIS), what type of data represents the spatial features of geographic elements?",
    answers: [
      { text: "Attribute data (descriptive information)", correct: false },
      { text: "Metadata (information about the data itself)", correct: false },
      { text: "Spatial data (locations and shapes)", correct: true },
      {
        text: "Imagery data (aerial or satellite photographs)",
        correct: false,
      },
    ],
    difficulty: 10,
  },
  {
    question:
      "What is the primary function of a transformer in an electrical power grid?",
    answers: [
      {
        text: "To convert alternating current (AC) to direct current (DC)",
        correct: false,
      },
      {
        text: "To transmit electricity over long distances with minimal energy loss",
        correct: false,
      },
      { text: "To store electrical energy for later use", correct: false },
      {
        text: "To regulate the voltage of electricity for different applications",
        correct: true,
      },
    ],
    difficulty: 11,
  },
  {
    question:
      "What is the primary benefit of using digital twins in the manufacturing process?",
    answers: [
      {
        text: "Improved safety by simulating potential hazards before implementation",
        correct: false,
      },
      {
        text: "Elimination of the need for physical prototypes",
        correct: false,
      },
      {
        text: "Reduced production costs through optimized processes",
        correct: true,
      },
      {
        text: "Easier replacement of malfunctioning equipment with readily available parts",
        correct: false,
      },
    ],
    difficulty: 12,
  },
  {
    question:
      "During the design phase of a new product, what is the main advantage of using computer-aided design (CAD) software?",
    answers: [
      {
        text: "Easier collaboration and communication between design teams",
        correct: false,
      },
      {
        text: "Automatic generation of manufacturing instructions for the product",
        correct: false,
      },
      {
        text: "Reduced cost of materials used in the final product",
        correct: false,
      },
      {
        text: "Reduced need for manual drafting and improved design accuracy",
        correct: true,
      },
    ],
    difficulty: 13,
  },
  {
    question: "What is the primary function of a clutch in a car's drivetrain?",
    answers: [
      {
        text: "To increase the torque delivered to the wheels",
        correct: false,
      },
      { text: "To change gears within the transmission", correct: false },
      {
        text: "To smoothly engage and disengage the engine from the transmission",
        correct: true,
      },
      {
        text: "To deliver power from the engine to the differential",
        correct: false,
      },
    ],
    difficulty: 14,
  },
  {
    question: "Which of the following is NOT an programming language?",
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
    difficulty: 15,
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
  { id: 1, amount: "1 cr" },
  { id: 2, amount: "5 cr" },
  { id: 3, amount: "20 cr" },
  { id: 4, amount: "40 cr" },
  { id: 5, amount: "60 cr" },
  { id: 6, amount: "80 cr" },
  { id: 7, amount: "100 cr" },
  { id: 8, amount: "125 cr" },
  { id: 9, amount: "150 cr" },
  { id: 10, amount: "180 cr" },
  { id: 11, amount: "200 cr" },
  { id: 12, amount: "220 cr" },
  { id: 13, amount: "245 cr" },
  { id: 14, amount: "270 cr" },
  { id: 15, amount: "300 cr" },
].reverse();

// works with the backend
module.exports = { prizeSums, questions, studyPoints };
