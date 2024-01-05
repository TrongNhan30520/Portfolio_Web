"use client";

import React from "react";
import { block } from "million/react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const AboutBlock = block(function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I decided to pursue my passion for{" "}
        <span className="font-medium">programming</span> and graduated from
        university with a major in{" "}
        <span className="font-medium">information technology</span>. I am
        learning more about website programming to become a{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js and Nest.js</span>. I am
        also familiar with TypeScript and Tailwind CSS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my mouse. I have a
        passion for <span className="font-medium">traveling and exploring</span>
        . I also enjoy <span className="font-medium">learning new things</span>{" "}
        and participating in
        <span className="font-medium">community activities.</span>
      </p>
    </motion.section>
  );
});
export default AboutBlock;
