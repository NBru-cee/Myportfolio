import {
      mobile,
      web,
      javascript,
      typescript,
      html,
      css,
      reactjs,
      redux,
      tailwind,
      git,
      evolve,
      dishies,
      sacris,
      hexakomb,
      portfolio,
      threejs,
      hiking,
} from "../assets";

export const navLinks = [
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
];

const services = [
      {
            title: "Web Developer",
            icon: web,
      },
      {
            title: "React Native Developer",
            icon: mobile,
      },
];

const technologies = [
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
            name: "Three JS",
            icon: threejs,
      },
      {
            name: "git",
            icon: git,
      },
];

const experiences = [
      {
            title: "React.js Developer",
            company_name: "Evolve",
            icon: evolve,
            iconBg: "#383E56",
            date: "March 2020 - April 2021",
            points: [
                  "Developing a good looking, responsive web for the company showing what they do.",
                  "Using industries best practices to make the product efficient",
                  "Learning to work in teams",
            ],
      },

      {
            title: "Web Developer",
            company_name: "Hexakomb",
            icon: hexakomb,
            iconBg: "#383E56",
            date: "Jan 2022 - Jan 2023",
            points: [
                  "Developing and maintaining web applications using React.js and other related technologies.",
                  "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                  "Implementing responsive design and ensuring cross-browser compatibility.",
                  "Participating in code reviews and providing constructive feedback to other developers.",
            ],
      },
      {
            title: "React  & Tailwind Developer",
            company_name: "Sacris",
            icon: sacris,
            iconBg: "#383E56",
            date: "Jan 2022 - Jan 2023",
            points: [
                  "Developing and maintaining web applications using React.js and Tailwind Css.",
                  "Collaborating with cross-functional teams to create high-quality products.",
                  "Implementing responsive design and ensuring cross-browser compatibility.",
            ],
      },
];

const projects = [
      {
            id: "1",
            name: "Dishies",
            description:
                  "This website is for dishes restaurant and food delivery company. It helps people to see what they have in their kitchen and what people can order from the website.",
            tags: [
                  {
                        name: "react",
                        color: "blue-text-gradient",
                  },
                  {
                        name: "material ui",
                        color: "green-text-gradient",
                  },
                  {
                        name: "tailwind",
                        color: "pink-text-gradient",
                  },
            ],
            image: dishies,
            source_code_link: "https://github.com/NBru-cee/react-dishies",
            live_demo: "https://dishies.netlify.app/ ",
      },
      {
            id: "2",
            name: "Hiking",
            description:
                  "This website if for the people who love camping but may get lost in the park so we supply help to them.",
            tags: [
                  {
                        name: "react",
                        color: "blue-text-gradient",
                  },
                  {
                        name: "restapi",
                        color: "green-text-gradient",
                  },
                  {
                        name: "tailwindcss",
                        color: "pink-text-gradient",
                  },
            ],
            image: hiking,
            source_code_link: "https://github.com/NBru-cee/hiking ",
            live_demo: ":https://bruce-highking.netlify.app",
      },
      {
            id: "3",
            name: "React Three portfolio",
            description: "My developer portfolio",
            tags: [
                  {
                        name: "react",
                        color: "blue-text-gradient",
                  },
                  {
                        name: "react-three-fiber",
                        color: "green-text-gradient",
                  },
                  {
                        name: "tailwindcss",
                        color: "pink-text-gradient",
                  },
            ],
            image: portfolio,
            source_code_link: "https://github.com/NBru-cee/3dportfolio",
            live_demo: "https://bruce-portfolio.netlify.app/",
      },
];

export { services, technologies, experiences, projects };
