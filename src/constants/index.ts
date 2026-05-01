import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences: TExperience[] = [
  {
    title: "B.Tech in Computer Science & Engineering",
    companyName: "Bennett University",
    icon: starbucks, // Using placeholder icons
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Pursuing a degree in Computer Science with a focus on Full Stack Development and AI/ML.",
      "Maintaining a CGPA of 6.94 while working on multiple technical projects.",
      "Exploring advanced concepts in Data Structures, Algorithms, and Object-Oriented Programming.",
    ],
  },
  {
    title: "Intermediate (CBSE)",
    companyName: "The Doon Valley Public School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - May 2023",
    points: [
      "Completed senior secondary education with a focus on Science and Mathematics.",
      "Developed a strong analytical foundation and problem-solving skills.",
    ],
  },
  {
    title: "Matriculation (CBSE)",
    companyName: "The Doon Valley Public School",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2020 - July 2021",
    points: [
      "Achieved 91.2% in secondary education.",
      "Demonstrated excellence in academic and extracurricular activities.",
    ],
  },
];

const testimonials: TTestimonial[] = []; // Clearing testimonials or keeping them as placeholders? I'll keep them but maybe the user wants them gone. I'll keep 1 for layout.

const projects: TProject[] = [
  {
    name: "Zerodha Kite Clone",
    description:
      "A high-fidelity full-stack trading application featuring a real-time portfolio tracking dashboard, interactive stock watchlists, and backend trade simulations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Using placeholder image
    sourceCodeLink: "https://github.com/amanverma0001",
    liveDemoLink: "https://zerodha-trading-application.vercel.app/",
  },
  {
    name: "Ignite Fitness",
    description:
      "AI-Powered fitness application with a built-in Fitness Bot, real-time activity tracking, and social engagement features using Socket.io and Groq AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/amanverma0001",
    liveDemoLink: "https://fitness-training-app-self.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
