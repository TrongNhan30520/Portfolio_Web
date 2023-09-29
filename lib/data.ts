import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/images/corpcomment.png";
import rmtdevImg from "../public/images/rmtdev.png";
import wordanalyticsImg from "../public/images/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
