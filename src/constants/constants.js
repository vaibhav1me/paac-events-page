import { lec1, lec2, lec3, lec10, lec4, lec9, ws1, ws2, ws3, ws4, ws5, quiz1, quiz2, quiz3 } from "../assets";

export const quizzes = [
  {
    id: 1,
    title: "Astrophotography Competition",
    image: quiz1,
    deadline: "16 April 2023",
    venue: "online",
  },
  {
    id: 2,
    title: "Nerdigram '23",
    image: quiz2,
    deadline: "19 March 2023, 3:00 p.m.",
    venue: "L2 103",
  },
  {
    id: 3,
    title: "Nerdigram '22",
    image: quiz3,
    deadline: "10 April 2022, 4:15 p.m.",
    venue: "LHC 002",
  },
];

export const workshops = [
    {
        id: 1,
        title: "Screening: The Imitation Game",
        image: ws1,
        date: "19 March 2023, 5:30 p.m.",
        venue: "APJAKB-103"
    },
    {
        id: 2,
        title: "Telescope Handling & Astrophotography Workshop",
        image: ws2,
        date: "15 March 2023, 6:00 p.m.",
        venue: "APJAKB-103"
    },
    {
        id: 3,
        title: "Telescope Handling Workshop",
        image: ws3,
        date: "2nd Nov 2022",
        venue: "Stargazing Terrace, SAC"
    },
    {
        id: 4,
        title: "Screening: Einstein and Eddington",
        image: ws4,
        date: "10 April 2022, 6:45 p.m.",
        venue: "LHC-002"
    },
    {
        id: 5,
        title: "Telescope Handling and Stargazing session",
        image: ws5,
        date: "8-9 April 2022, 11 p.m.",
        venue: "RJB - 8th, SB - 9th"
    },
]

export const lectures = [
  {
    id: 1,
    title: "The Galileo Projecy",
    image: lec1,
    date: "21 March 2023, 5:15 p.m.",
    venue: "APJAKB-103"
  },
  {
    id: 2,
    title: "Summation of Divergent Series",
    image: lec2,
    date: "20 March 2023, 7:45 p.m.",
    venue: "APJAKB-103"
  },
  {
    id: 3,
    title: "Special Relativity",
    image: lec3,
    date: "18 March 2023, 9:00 p.m.",
    venue: "Stargazing Terrace"
  },
  {
    id: 4,
    title: "Challenging the Cosmological Standard Model",
    image: lec4,
    date: "14 March 2023, 6:14 p.m.",
    venue: "APJAKB-004"
  },
  {
    id: 9,
    title: "Revealing Hidden particles & Forces",
    image: lec9,
    date: "14 April 2022, 6:00 p.m.",
    venue: "LHC-002"
  },
  {
    id: 10,
    title: "Elementary Particles: Strange Mass Ratio",
    image: lec10,
    date: "7 April 2022, 6:00 p.m.",
    venue: "LHC-002"
  }
]
