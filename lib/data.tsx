import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CL1 from "../public/images/claritas1.png";
import CL2 from "../public/images/claritas2.png";
import CL3 from "../public/images/claritas3.png";
import CL4 from "../public/images/claritas4.png";
import CL5 from "../public/images/claritas5.png";
import CL6 from "../public/images/claritas6.png";
import CL7 from "../public/images/claritas7.png";

import RS1 from "../public/images/rise1.png";
import RS2 from "../public/images/rise2.png";
import RS3 from "../public/images/rise3.png";
import RS4 from "../public/images/rise4.png";
import RS5 from "../public/images/rise5.png";

import PJ3 from "../public/images/portfolio3.png";
import PJ4 from "../public/images/portfolio4.png";
import PJ5 from "../public/images/portfolio5.png";
import PJ6 from "../public/images/portfolio6.png";
import PJ7 from "../public/images/portfolio7.png";

import AWS from "../public/icons/aws.svg";
import CSS from "../public/icons/css.svg";
import Git from "../public/icons/git.svg";
import HTML from "../public/icons/html.svg";
import Javascript from "../public/icons/javascipt.svg";
import MaterialUI from "../public/icons/material.svg";
import Mongodb from "../public/icons/mongodb.svg";
import Nestjs from "../public/icons/nestjs.svg";
import Nextjs from "../public/icons/nextjs.svg";
import Nodejs from "../public/icons/nodejs.svg";
import Reactjs from "../public/icons/react.svg";
import Redux from "../public/icons/redux.svg";
import Tailwind from "../public/icons/tailwind.svg";
import Typescript from "../public/icons/typescript.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
export const projectsData = [
  {
    title: "Claritas",
    description:
      " The website controls the quality of high-rise buildings by processing cross-sectional images of the building taken with a drone",
    tags: ["ReactJs", "Nest.js", "MySQL", "Tailwind", "AWS Service"],
    imageUrl: [CL1, CL2, CL3, CL4, CL5, CL6, CL7],
    detail: (
      <>
        <p className="">
          The website controls the quality of high-rise buildings by processing
          cross-sectional images of the building taken with a drone. Main
          functions: manage and assign user rights, manage buildings, annotate
          images, update repairs, export general reports and track actions on
          the website
        </p>
        <p className="">
          The Front-end uses: ReactJs, TailwindCss, Redux, React router and
          libraries that handle annotations on images(react-image-annotate) as
          well as export reports in world, excel, pdf formats( docx, react-csv,
          pdfmake ).
        </p>
        <p className="">
          The Back-end is completely built with Typescript and the NestJS
          framework. For databases, Postgres is used to store all data.
        </p>
        <p className="">Hosting services AWS amplify, AWS S3.</p>
        <p className="">The requirements I handled in the project:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "40px" }}>
          <li>Create user interface based on figma design.</li>
          <li>Research, use, and customize photo caption libraries.</li>
          <li>Collaborate with Back-end team to connect APIs and services.</li>
          <li>Optimize image upload time to AWS S3 service.</li>
          <li>Integrated security with JWT tokens and refresh tokens.</li>
          <li>Create export reports in word, excel and power point formats.</li>
          <li>
            Solves canvas drawing and cropping on both the front-end and
            back-end.
          </li>
          <li>
            Analyze and coordinate with the AI team to train and apply AI to
            automate image processing operations.
          </li>
        </ul>
      </>
    ),
    demo: "https://www.youtube.com/watch?v=Mi8yw0wz9AE",
    source: "",
  },
  {
    title: "Rise",
    description:
      "Website connecting jobs between KOL and parties wishing to cooperate",
    tags: ["React", "Tailwind", "Redux", "Directus"],
    imageUrl: [RS1, RS2, RS3, RS4, RS5],
    detail: (
      <>
        <p>
          Website connecting jobs between businesses, organizations and
          influencer (KOLs) on social networking platforms Instagram, Tiktok,
          Youtube,... Customers can post requests for cooperation and tasks to
          be performed. The influencer will handle those tasks and receive wage
          through the built-in virtual wallet. Websites allow the creation of
          electronic wallets and bank links to perform payment transactions.
        </p>
        <p>
          Front-end used: ReactJs, TailwindCSS, Redux and services like: Wallex,
          Directus, Jumio, Stripe, Rudder, Clevertap.{" "}
        </p>
        <p>
          I created interfaces related to business posting, performance
          interfaces, and completing influencer tasks.
        </p>
        <p>
          I integrated the Stripe payment service and Clevertap website
          interaction metrics tracking service into the project.
        </p>
      </>
    ),
    demo: "https://www.youtube.com/watch?v=Mi8yw0wz9AE",
    source: "",
  },
  {
    title: "Realtime Chat Application",
    description:
      "A personal web application for chatting. It supports real-time interaction and message saving",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: [PJ3],
    detail: (
      <>
        This is a Chat app with Live Chat and Group Chat, emojis & Reactions,
        built-in Gif support, Ability to edit and delete messages, dedicated
        commands, full responses, and more. I will use ReactJS on the front end,
        NodeJS on the back end and the whole conversation will be done Powered
        by Getstram.io
      </>
    ),
    demo: "https://www.youtube.com/watch?v=Mi8yw0wz9AE",
    source: "",
  },
] as const;

export const skillsData = [
  { name: "HTML", pic: HTML },
  { name: "CSS", pic: CSS },
  { name: "JavaScript", pic: Javascript },
  { name: "TypeScript", pic: Typescript },
  { name: "React", pic: Reactjs },
  { name: "Next.js", pic: Nextjs },
  { name: "Node.js", pic: Nodejs },
  { name: "Git", pic: Git },
  { name: "Tailwind", pic: Tailwind },
  { name: "MongoDB", pic: Mongodb },
  { name: "Redux", pic: Redux },
  { name: "NestJS", pic: Nestjs },
  { name: "AWS Service", pic: AWS },
  { name: "Material UI", pic: MaterialUI },
] as const;
