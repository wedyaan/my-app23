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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Dashboard,
  Mass,
  smartSol,
  azlogo,
  azBran,
  fours,
  photograph,
  Nour,
  Adhan,
  // Razan,
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
    link: "https://docs.google.com/document/d/e/2PACX-1vSsZuNzdSgwAvo55J2mNvfjlIUJeGdbxlSVaDaIKxI7_C3UDoGSGmpaLhWfzPjDD2FsiqRISKXM9KZP/pub", 
  },
];

const services: TService[] = [
  {
    title: "Front End development",
    icon: web,
  },
  {
    title: "UI/UX designing",
    icon: mobile,
  },
  {
    title: "API Testing",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "App programmer",
    companyName: "Indorse",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      'Experience in designing and executing thorough API tests.',
     ' API Development and Integration.',
      'Ability to understand client requirements and propose effective API solutions.',
     ' Skilled in using Postman for efficient API testing and automation.',
     ' Skills in troubleshooting API errors and understanding HTTP status codes.',
     ' Knowledgeable in Swagger for clear API documentation and testing.',
    ],
  },
  {
    title: "Web Developer",
    companyName: "Sababa Foundation",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2022 - March 2023",
    points: [
     ' Optimized the website front-end for efficiency, scalability, and performance.',
     ' Optimized website performance for speed, and accessibility.',
     ' Regularly updated and patched software to maintain website security.',
     ' Conducted regular site maintenance, including backups and content updates.',
      
    ],
  },
  {
    title: "Programmer",
    companyName: "Freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "june 2022 - Present",
    points: [
     ' Built static frontend UI from the ground up using Next.js and Figma handover designs.',
    '  Explained technical concepts in a way that clients can understand.',
    '  Identified and resolved any technical issues that arise during development.',
    '  Develop responsive user interfaces for websites and applications.',
    ],
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "E-commerce",
    description:"",
     tags: [
      {
        name: "HTML-5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "React-JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://ecommerce-p-omega.vercel.app/",
  },
  {
    name: "Rwad Aqar",
    description:
"",    tags: [
  {
    name: "HTML-5",
    color: "blue-text-gradient",
  },
  {
    name: "CSS 3",
    color: "green-text-gradient",
  },
  {
    name: "JS",
    color: "pink-text-gradient",
  },
  {
    name: "Figma",
    color: "green-text-gradient",
  },
  
],
    image: jobit,
    sourceCodeLink: "https://wedyaan.github.io/rwad-aqar/",
  },
  {
    name: "sbabah",
    description:"",
    tags: [
      {
        name: "Woorpress",
        color: "blue-text-gradient",
      },
      
    ],
    image: tripguide,
    sourceCodeLink: "https://sbabah.com/",
  },
 

  {
    name: "Dashboard",
    description:
    "",    tags: [
      {
        name: "HTML-5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      
    ],
    image: Dashboard,
    sourceCodeLink: "https://gilded-brioche-dc35e1.netlify.app/",
  },
  {
    name: "Mass Media",
    description:
    "",    tags: [
      {
        name: "HTML-5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      
      
    ],
    image: Mass,
    sourceCodeLink: "https://marketingportfolio.netlify.app/",
  },
  {
    name: "Adhan Time ",
    description:
    "",    tags: [
      {
        name: "HTML-5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "React js",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
      
      
    ],
    image: Adhan,
    sourceCodeLink: "https://adhantime.netlify.app/",
  },
  {
    name: "Smart Soluation",
    description:
    "",    tags: [
      {
        name: "HTML-5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      
      
    ],
    image: smartSol,
    sourceCodeLink: "https://astonishing-cocada-087d82.netlify.app/",
  },
  {
    name: "AbdulAziz Bukhari Logo",
    description:
    "",    tags: [
      {
        name: "Adobe Illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "Canva",
        color: "green-text-gradient",
      },
    ],
    image: azlogo,
    sourceCodeLink: "https://www.canva.com/design/DAGgsHsScxQ/6QyNYHBbK6OKOze4OFgutw/view?utm_content=DAGgsHsScxQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6edec805bb",
  },
  {
    name: "AbdulAziz Bukhari Branding",
    description:
    "",    tags: [
      {
        name: "Adobe Illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "Canva",
        color: "green-text-gradient",
      },
    ],
    image: azBran,
    sourceCodeLink: "https://www.canva.com/design/DAGec3i00Jg/TUwK47Cwd1dCxPGbq85EEQ/view?utm_content=DAGec3i00Jg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h08b37707eb",
  },
  {
    name: "FourtySeven Logo",
    description:"",
        tags: [
      {
        name: "Adobe Illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "Canva",
        color: "green-text-gradient",
      },
    ],
    image: fours,
    sourceCodeLink: "https://www.canva.com/design/DAGgmh7zvoo/cV1KoZL9qAuU9kdEo6Ky7g/view?utm_content=DAGgmh7zvoo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h29afcde618",
  },
   {
    name: "Photographer Logo",
    description:
    "",    tags: [
      {
        name: "Adobe Illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "Canva",
        color: "green-text-gradient",
      },
    ],
    image: photograph,
    sourceCodeLink: "https://www.canva.com/design/DAGgmm2Gk3A/7WrOBObB7mXgC0aIkRTxsw/view?utm_content=DAGgmm2Gk3A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h62dc1c17e7",
  },
  
  {
    name: "Noor makeup Artist Logo",
    description:
    "",    tags: [
      {
        name: "Adobe Illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "Canva",
        color: "green-text-gradient",
      },
    ],
    image: Nour,
    sourceCodeLink: "https://www.canva.com/design/DAGgmoLd8S0/noOlI3nhltpvkvmgn_pAUA/view?utm_content=DAGgmoLd8S0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9951b15d60",
  },
  // {
  //   name: "Razan Event",
  //   description:"",
  //   tags: [
  //     {
  //       name: "wuilt",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: Razan,
  //   sourceCodeLink: "https://razanevent.com/",
  // },
 
  
];

export { services, technologies, experiences, testimonials, projects };
