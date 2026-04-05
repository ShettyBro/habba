import {IMAGES} from "./assets/Images/index"

export const LINK={
  email:"acharyahabba@acharya.ac.in",
  insta:"https://www.instagram.com/acharyahabba?igsh=MXF2a3RkaGt4dHAx",
  youtube:"https://www.youtube.com",
  whatsapp:9999999999,
  mobile:9449890035
}

export const Apl=[
  {
    id: 1,
    name: "APL",
    image: IMAGES.APLREG,
    registrationLink: "https://register.acharyahabba.com/register-apl",
    button:"Register Now",
    message:"Only for Acharya Students"
  },
  {
    id: 2,
    name: "VTU",
    image: IMAGES.VTUREG,
    registrationLink: "https://vtufest2026.acharyahabba.com",
    button:"Register Now",
    message:"Only for VTU Students"
  },
  {
    id: 3,
    name: "HABBA EVENTS",
    image: IMAGES.ABTHB2,
    route: "/events",   // 👈 use route instead of external link
    button: "View Events",
    message: "Only for Acharya students"
  },
]

export const TEAM = {
    faculty: [
      {
        title: "Mr. B. Premnath Reddy",
        description: "Founder Chairman, Acharya Group",
        src: IMAGES.PREMNATH,
      },
      {
        title: "Mrs. Shalini Reddy",
        description: "Executive Director, Acharya",
        src: IMAGES.SHALINI,
      },
      {
        title: "Mr. Krishna Basani",
        description: "Managing Director, Acharya",
        src: IMAGES.KRISHNA,
      },
      {
        title: "Mr. Vishesh Chandrashekar",
        description: "Director, Acharya",
        src: IMAGES.VISESH,
      },
      {
        title: "Mr. Tejas K",
        description: "Assitant Director of Student Activities, Acharya",
        src: IMAGES.TEJAS,
      },
    ],
  
    technical: [
      {
        title: "Nitin Singh",
        description: "Tech Front-end Developer, AIGS",
        src: IMAGES.RANDOM,
      },
      {
        title: "Sudip",
        description: "Tech Full-Stack Developer, AIGS",
        src: IMAGES.RANDOM,
      },
      {
        title: "Rohit Reddy",
        description: "Tech Back-end Developer",
        src: IMAGES.RANDOM,
      },
    ],
  
    coordinator: [
      {
        title: "Priyanshu Dutta",
        description: "Habba Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Shivang",
        description: "Finance Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Shivam Garg Shukla",
        description: "Piston Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Kaarunya",
        description: "Adventure Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Dibyanshu Kumar",
        description: "Fine Arts(BANNA) Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Bhuvin Anil",
        description: "MUNSOC Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Mita Nagaraj",
        description: "UNDER25 Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Geo Abaraham",
        description: "Talkoholics Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Sanskriti Giri",
        description: "Sahitya Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Ayush Kaushik",
        description: "IED Cell Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Armaan",
        description: "Beta Chi Theta Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Surabhi",
        description: "Fashion Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Akshaya",
        description: "Nature Watch Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Sujata Dwivedy",
        description: "Acharya Film Forum Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Ashwin Kumar",
        description: "Gaming Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Rishik Raj",
        description: "Pratibimbah Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Rachan",
        description: "Acharya Kannada Vedike Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Mohith V",
        description: "Dance Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Aditya Sinha",
        description: "The Big O Head",
        src: IMAGES.RANDOM,
      },
      {
        title: "Truthikka V",
        description: "Zeta Eta Phi Head",
        src: IMAGES.RANDOM,
      },
    ],
  };
  


export const EVENTS = [
  {
    name: "Adventure Club",
    image: IMAGES.ADVENTURE,
    registrationLink: "https://example.com/register",
    events: ["Body Building Competition","Kitchen Mayhem","Lagori","Tug Of War","Boxing","Buckshot Roulette","Heist Havoc","Mr. and Ms. Ethnic"],
  },
  {
    name: "Gaming Club",
    image: IMAGES.GAMING,
    registrationLink: "https://example.com/register",
    events: ["Free Fire","Gamer's Jam","BGMI","FC 25","Valorant","Edge Play"],
  },
  {
    name: "Prathibimbah Club",
    image: IMAGES.PRATHIBIMBHA,
    registrationLink: "https://example.com/register",
    events: ["Light Painting Workshop","Retro Reel Creation Contest","Photo Party","Theme Photography Contest","Click and AI"],
  },
  {
    name: "Sahitya Club",
    image: IMAGES.SAHITYA,
    registrationLink: "https://example.com/register",
    events: ["Kaun Banega Crorepati?","Bollywood Gala","Kavi Sangram","Standup Comedy"],
  },
  {
    name: "AFF Club",
    image: IMAGES.AFF,
    registrationLink: "https://example.com/register",
    events: ["Cine Quiz","Scene Revival","Dub It Right"],
  },
  {
    name: "IED Cell",
    image: IMAGES.IED,
    registrationLink: "https://example.com/register",
    events: ["Business Symposium","Bid and Build","Ideathon Day 1","Ideathon Day 2","Ideathon Day 3","Ideathon Day 4"],
  },
  {
    name: "TBO Club",
    image: IMAGES.TBO,
    registrationLink: "https://example.com/register",
    events: ["Mock IPL","Stupid Hackathon","Quiz"],
  },
  {
    name: "UNDER25",
    image: IMAGES.UNDER25,
    registrationLink: "https://example.com/register",
    events: ["UNDER25 Summit","Talent Hunt","Edge Play"],
  },
  {
    name: "ZEP Club",
    image: IMAGES.ZEP,
    registrationLink: "https://example.com/register",
    events: ["Watermelon Sugar","Pandigai","Tomatino Assassino"],
  },
  {
    name: "AKV Club",
    image: IMAGES.AKV,
    registrationLink: "https://example.com/register",
    events: ["Kannadiga Kannadathi","Retro Reel Creation Contest","Oggattinalli Obbattu","Katte Maathu"],
  },
  {
    name: "Piston Club",
    image: IMAGES.PISTON,
    registrationLink: "https://example.com/register",
    events: ["Simba Bike Rally","Simulator Racing","Soap Box"],
  },
  {
    name: "BCT Club",
    image: IMAGES.BCT,
    registrationLink: "https://example.com/register",
    events: ["Movie Screening (Horror)","Student of the Year Day 1","Student of the Year Day 2","Student of the Year Day 3","Soap Football","Escape Room","All Sports Golf"],
  },
  {
    name: "Fine Arts",
    image: IMAGES.FINEARTS,
    registrationLink: "https://example.com/register",
    events: ["Nature's Palette"],
  },
  {
    name: "Nature Watch",
    image: IMAGES.NATUREWATCH,
    registrationLink: "https://example.com/register",
    events: ["Habbathon","Escape the Wild","Nature's Palette"],
  },
  {
    name: "MUNSOC",
    image: IMAGES.MUNSOC,
    registrationLink: "https://example.com/register",
    events: ["Mock Parliament"],
  },
  {
    name: "Fashion Club",
    image: IMAGES.FASHION,
    registrationLink: "https://example.com/register",
    events: ["El Señor la Señorita"],
  },
  {
    name: "Dance Club",
    image: IMAGES.DANCE,
    registrationLink: "https://example.com/register",
    events: ["Hookstep Challenge","Solo Showdown"],
  },
  {
    name: "Centralized",
    image: IMAGES.CENTRALIZED,
    registrationLink: "https://example.com/register",
    events: ["Auto Expo","Me Stori","AeroXcelerate"],
  },
  {
    name: "All Clubs",
    image: IMAGES.ALL,
    registrationLink: "https://example.com/register",
    events: ["HABBA Job Fair"],
  }
]