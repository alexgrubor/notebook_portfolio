import airBnb from "./AirBNB.png";
import portfolio from "./Aleksandra_website.png";
import dciDrinks from "./dcidrinks.png";
import hangmanGame from "./Hangmangame.png";
import jobSearchApp from "./jobsearcapp.jpg";
import monopoly from "./monopoly.jpg";
import marketingAgency from "./MarketingAgency.png";
import realTimeEssen from "./RealtimeEssen.png";
import uno from "./Uno.png";
import weatherApp from "./weatherapp.png";
import EcomCSM from "./EcomCMS.png";
import EcomStore from "./Ecomstore.png";

export const projects = [
  {
    id: 2,
    name: "AirBnB",
    description:
      "A feature-rich Airbnb clone that replicates the renowned platform's functionality, enabling users to discover, book, and host accommodations seamlessly. Users can register and log in using their email or conveniently utilize Google sign-in through the NextAuth.js integration for a hassle-free experience.",
    image: airBnb,
    github: "https://github.com/alexgrubor/airbnb-clone",
    technologies: [
      "Next.js",
      "Prisma",
      "Next-auth",
      "Axios",
      "Typescript",
      "Zustand",
    ],
    tags: [
      "Full Stack",
      "Clone",
      "Authentication",
      "API Integration",
      "Front-end Development",
      "Back-end Development",
    ],
  },
  {
    id: 3,
    name: "DCI Drinks",
    description:
      "DCIDRINKS is a user-friendly frontend application designed to cater to cocktail enthusiasts. With this app, users can effortlessly explore an extensive collection of cocktail recipes. Its intuitive interface allows for easy searches by name, ingredients, or category, ensuring users can find the perfect drink recipe for any occasion. Each cocktail recipe is thoughtfully presented with a comprehensive list of ingredients, step-by-step instructions, and mouthwatering photos, making it a go-to resource for mixing up delicious cocktails at home",
    image: dciDrinks,
    github: "https://github.com/alexgrubor/DCIDRINKS",
    technologies: ["React", "React Router", "Axios", "CSS"],
    tags: ["Front-end Development", "API Integration", "React"],
  },
  {
    id: 4,
    name: "Hangman Game",
    description:
      "A fun and interactive hangman game that allows users to guess the name of a randomly selected movie. The game is designed to be responsive and mobile-friendly, providing a seamless user experience across all devices.",
    image: hangmanGame,
    github: "https://github.com/alexgrubor/hangman",
    technologies: ["Typescript", "React"],
    tags: ["Front-end Development", "Game", "React"],
  },
  {
    id: 5,
    name: "Job Search App",
    description:
      "A job search app that enables users to search for jobs by location and job title. Users can also save jobs to their favorites list and view them at any time.",
    image: jobSearchApp,
    github: "https://github.com/alexgrubor/jobsearchapp",
    technologies: ["ReactNative", "Expo", "Axios"],
    tags: ["App Development", "React Native"],
  },
  {
    id: 6,
    name: "Monopoly",
    description: "A digital version of the classic board game Monopoly.",
    image: monopoly,
    github: "",
    technologies: ["HTML", "CSS"],
  },
  {
    id: 7,
    name: "Marketing Agency",
    description: "A marketing agency landing page ",
    image: marketingAgency,
    github: "https://github.com/alexgrubor/Marketingagencysass",
    technologies: ["HTML", "SASS"],
    tags: ["Front-end Development", "HTML", "SASS"],
  },
  {
    id: 8,
    name: "Realtime Essen",
    description: "A real-time digital clock with Essen HBF as background",
    image: realTimeEssen,
    github: "https://github.com/alexgrubor/Essen",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Front-end Development", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    name: "Uno",
    description:
      "Immerse yourself in an exciting multiplayer online real-time game, accessible directly through your web browser. Sign in or log in to join the action-packed gaming community. Engage in real-time chat with fellow players while you play, fostering a dynamic and interactive gaming experience. Plus, compete for the top spot on the leaderboard to prove your gaming prowess. ",
    image: uno,
    github: "https://github.com/alexgrubor/UNO-GAME",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    tags: ["Full Stack", "Game", "React", "MongoDB", "Socket.io", "Aut"],
    url: 'https://uno-5dzs.onrender.com/'
  },
  {
    id: 10,
    name: "Weather App",
    description:
      "A weather app that allows users to search for weather information by city.",
    image: weatherApp,
    github: "https://github.com/alexgrubor/weather-app",
    technologies: ["JavaScript", "HTML", "CSS"],
    tags: ["Front-end Development", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 1,
    name: "Aleksandra Website",
    description:
      "An elegant and visually captivating portfolio website infused with a distinctly feminine aesthetic, designed to showcase creative work with a touch of grace and sophistication",
    image: portfolio,
    github: "https://github.com/alexgrubor/alexgrubor.github.io",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Portfolio", "HTML", "CSS", "responsive design", "web design"],
  },
  {
    id: 11,
    name: "E-commerce Store",
    description:
      "Welcome to the E-Commerce CMS Store Site repository! This is a feature-rich web application meticulously crafted to provide users with a seamless shopping experience. It boasts eye-catching billboards, a meticulously organized category system, and a carefully curated selection of featured products. Shoppers can effortlessly browse, add items to their cart, and securely complete their purchases, all in one place.",
    image: EcomStore,
    github: "https://github.com/alexgrubor/ecomstore_storesite",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Axios",
      "Shadcn-UI",
      "Zustand",
    ],
    tags: [
      "Full Stack",
      "E-commerce",
      "Next.js",
      "Tailwind",
      "Shadcn-UI",
      "Zustand",
    ],
    url: "https://ecomstore-storesite.vercel.app/",
  },
  {
    id: 12,
    name: "E-commerce CMS",
    description:
      "This project contains comprehensive documentation and code for a powerful Store CMS platform, offering store creation, billboard management, category and product handling, and API features for streamlined e-commerce operations.",
    image: EcomCSM,
    github: "https://github.com/alexgrubor/ecomstore_cms",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Axios",
      "Shadcn-UI",
      "Cloudinary",
      "Stripe",
      "Zustand",
      "Prisma",
      "Clerk",
    ],
    tags: [
      "Full Stack",
      "E-commerce",
      "Next.js",
      "CMS",
      "RESTAPI",
      "Shadcn-UI",
      "Cloudinary",
      "Stripe",
      "Zustand",
      "Prisma",
      "Clerk",
      "MySQL",
    ],
    url: "https://ecomstore-cms.vercel.app/",
  },
];
