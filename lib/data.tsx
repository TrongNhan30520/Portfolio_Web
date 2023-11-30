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

import CA1 from "../public/images/chatapp1.png";
import CA2 from "../public/images/chatapp2.png";
import CA3 from "../public/images/chatapp3.png";
import CA4 from "../public/images/chatapp4.png";
import CA5 from "../public/images/chatapp5.png";

import PJ3 from "../public/images/portfolio3.png";
import PJ4 from "../public/images/portfolio4.png";
import PJ5 from "../public/images/portfolio5.png";
import PJ6 from "../public/images/portfolio6.png";

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
    title:
      "University student - Posts and Telecommunications Institute of Technology",
    location: "District 1, Ho Chi Minh City, Viet Nam",
    description: (
      <>
        I <span className="font-bold">graduated</span> from university after 4
        years with a degree in{" "}
        <span className="font-bold">Information Technology</span>. I{" "}
        <span className="font-bold">immediately </span>
        found a job as a <span className="italic">front-end developer</span> as
        a{" "}
        <span className="font-bold">
          senior university student in their fourth year
        </span>
        .
      </>
    ),
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Internship in Front-End Engineering - Scale Mind",
    location: "Remote - Ha Noi, Viet Nam",
    description: (
      <p>
        I gained valuable hands-on experience as an unpaid online{" "}
        <span className="font-bold">Front-End Developer intern</span> at Scale
        Mind tech team for <span className="italic">six months</span>.
        Collaborating remotely, I contributed to web development projects, honed
        my <span className="italic">debugging skills</span>, and embraced the
        challenges of virtual <span className="italic">teamwork</span>. This
        experience not only <span className="font-bold">deepened</span> my
        technical proficiency but also{" "}
        <span className="font-bold">enhanced</span> my{" "}
        <span className="italic">adaptability</span> and
        <span className="italic"> communication</span> in a dynamic professional
        setting.
      </p>
    ),
    icon: React.createElement(CgWorkAlt),
    date: "10/2021 - 4/2022",
  },
  {
    title: "Software Engineer - Axpara",
    location: "District 7, Ho Chi Minh City, Viet Nam",
    description: (
      <>
        My experience as a <span className="font-bold">Software Engineer</span>{" "}
        at <span className="italic">Axapara</span> has been both enriching and
        dynamic. Specializing in cutting-edge technologies, including{" "}
        <span className="font-bold">ReactJs, NestJs, NextJs</span> and{" "}
        <span className="font-bold">AWS micro services</span>, I played a
        pivotal role in crafting robust and responsive user interfaces.
        Collaborating within a forward-thinking team, I contributed to the
        seamless integration of these technologies, ensuring optimal user
        experiences across various projects. In this role, I{" "}
        <span className="font-bold">embrace</span> challenges and{" "}
        <span className="font-bold">continually expand</span> my skills,
        <span className="font-bold"> addressing</span> the complexities of
        modern web development and the many requirements of clients.{" "}
        <span className="font-bold">An outsourcing company</span> fosters
        adaptability and an eagerness to explore innovative solutions. I'm proud
        of my contribution to <span className="italic">Axapara's</span> success,
        leveraging these technologies to enhance user interfaces and
        contributing to the company's mission of providing cutting-edge
        solutions.
      </>
    ),
    icon: React.createElement(FaReact),
    date: "5/2022 - present",
  },
] as const;
export const projectsData = [
  {
    title: "Claritas",
    note: "Company project",
    url: "https://www.claritas.app",
    description:
      "The website controls the quality of high-rise buildings by processing cross-sectional images of the building taken with a drone",
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
    note: "Company project",
    url: "https://tagrise.com",
    description:
      "Website connecting jobs between KOL and parties wishing to cooperate",
    tags: ["React", "Tailwind", "Redux", "Directus"],
    imageUrl: [RS1, RS2, RS3, RS4, RS5],
    detail: (
      <>
        <p>
          The job-connecting platform seamlessly bridges businesses,
          organizations, and influencers (KOLs) on major social networking
          platforms such as Instagram, TikTok, and Youtube. With a user-friendly
          interface built on ReactJs and enhanced by TailwindCSS, users can
          effortlessly post cooperation requests and tasks. Leveraging Redux
          ensures a state-of-the-art management system for handling complex data
          and interactions.
        </p>
        <p>
          <span className="font-bold">Technological Foundation:</span> Powered
          by cutting-edge technologies, our platform incorporates ReactJs for a
          responsive and dynamic front-end. TailwindCSS adds a layer of
          aesthetic appeal and simplicity to the user interface. Redux
          facilitates efficient state management, ensuring seamless interactions
          across the platform. Wallex and Stripe enable secure and convenient
          payment transactions, while Directus ensures smooth content
          management. Jumio ensures robust identity verification, and Rudder and
          Clevertap enhance user analytics and engagement. The website provides
          a seamless experience, allowing the creation of electronic wallets and
          bank links for efficient payment processing, ensuring a smooth and
          secure platform for businesses, organizations, and influencers alike.
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
    note: "Personal project",
    url: "",
    description:
      "The web application for chatting. It supports real-time interaction and message saving",
    tags: ["React", "NodeJs", "GetStream.io"],
    imageUrl: [CA1, CA2, CA3, CA4, CA5],
    detail: (
      <>
        <p>
          This is a Real-Time Chat Website revolutionizes online communication
          with its core features. Engage in private conversations or lively
          group chats, express yourself using emoticons and message expressions,
          share images seamlessly, and stay connected by viewing real-time
          updates on the number of online users.
        </p>
        <p>
          <span className="font-bold">Technological Foundation:</span> <br />{" "}
          Powered by cutting-edge technologies, chat website stands on a robust
          technological foundation. React.js ensures a responsive and
          interactive front-end, providing a seamless user experience. Node.js
          drives the scalable back-end, handling real-time communication
          efficiently. Leveraging GetStream.io services enhances the platform's
          capabilities, offering secure and feature-rich real-time feeds.
          Together, React.js, Node.js, and GetStream.io create a dynamic and
          reliable environment for an immersive and expressive chat experience.
        </p>
      </>
    ),
    demo: "https://youtu.be/azaqAUB0sHI",
    source: "https://github.com/TrongNhan30520/realtime__chat",
  },
  {
    title: "E-commerce website",
    note: "Personal project",
    url: "",
    description: "An online sales website has 3 roles and full sales functions",
    tags: [
      "HTML/CSS",
      "Bootstrap",
      "Java Spring MVC",
      "JSP Servlet",
      "MS SQL Server",
    ],
    imageUrl: [PJ3],
    detail: (
      <>
        <p>
          The online sales website is developed using Java Spring MVC, JSP
          Servlet and Microsoft SQL Server technology, which is the final
          project of the web programming course. The project was carried out by
          a group of 3 people over a period of 1 and a half months.
        </p>
        <div>
          <span className="font-bold">
            Core Features: <br />
          </span>
          <ul style={{ listStyle: "disc", paddingLeft: "40px" }}>
            <li>User Authentication and Authorization</li>
            <li>Admin Panel</li>
            <li>Product Management</li>
            <li>User Management</li>
            <li>Order Management</li>
            <li>Shopping Cart</li>
            <li>Order Processing</li>
            <li>Payment Processing</li>
            <li>Send mail</li>
          </ul>
        </div>
        <span className="font-bold">Technological Foundation:</span> <br />{" "}
        <p>
          Java Spring MVC: Provides a modular and organized framework for
          developing scalable web applications. Facilitates the creation of a
          responsive and maintainable codebase.
        </p>{" "}
        <p>
          JSP Servlet: Enables the development of dynamic and data-driven web
          pages. Powerful server-side solutions for handling user requests and
          managing session data.
        </p>{" "}
        Microsoft SQL Server: Utilized as the relational database management
        system (RDBMS) for efficient data storage. Ensures data integrity,
        security, and seamless integration with Java Spring MVC.
      </>
    ),
    demo: "https://youtu.be/NWFURSV1kpc",
    source: "https://github.com/TrongNhan30520/WebBanDoChoi",
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
