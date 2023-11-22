import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PJ1 from "../public/images/portfolio1.png";
import PJ2 from "../public/images/portfolio2.png";
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
      "I worked as a front-end developer on this project for about 1 years. Clients are high-rise building quality management companies.",
    tags: ["ReactJs", "Nest.js", "MySQL", "Tailwind", "AWS Service"],
    imageUrl: PJ1,
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
          well as export reports in world, excel, pdf formats(docx,
          react-csv,pdfmake ).
        </p>
        <p className="">
          The Back-end is completely built with Typescript and the NestJS
          framework. For databases, Postgres is used to store all data.
        </p>
        <p className="">Hosting services AWS amplify, AWS S3.</p>
        <p className="">The requirements I handled in the project:</p>
        Create user interface based on figma design. Research, integrate and
        optimize image captioning support libraries. Collaborate with Back-end
        team to connect APIs and services. Improved image upload speed to AWS S3
        service. Secure handling with JWT token and refresh token. Handles
        exporting reports to word, excel and power point. Handles drawing and
        cropping of images use canvas in both the front-end and back-end.{" "}
        Collaborate with the AI team to train and apply AI to automate image
        processing operations
      </>
    ),
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: PJ2,
    detail:
      "I worked as a front-end developer on this startup project for about 1 years. Clients are high-rise building quality management companies.",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: PJ3,
    detail:
      "I worked as a front-end developer on this startup project for about 1 years. Clients are high-rise building quality management companies.",
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
