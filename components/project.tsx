"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { RiYoutubeLine, RiGitBranchFill } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  detail,
  demo,
  source,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const refDialog = useRef<HTMLDialogElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        onClick={() => {
          refDialog?.current?.showModal();
        }}
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden cursor-pointer sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-7 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-6 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 py-2">
            <motion.a
              className=" flex items-center bg-gradient-to-r from-red-800 to-red-600 text-white rounded-lg  px-6 py-2 mt-4 gap-1 dark:from-red-900 dark:to-red-700 dark:text-black"
              whileHover={{ scale: 1.2 }}
              href={demo}
              target="_blank"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Demo
              <RiYoutubeLine />
            </motion.a>
            {source && (
              <motion.a
                className=" flex items-center bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg  px-6 py-2 mt-4 gap-1"
                whileHover={{ scale: 1.2 }}
                href={source}
                target="_blank"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Source
                <RiGitBranchFill />
              </motion.a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl[0]}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>

      <dialog
        ref={refDialog}
        id="dialog"
        className="dark:bg-slate-500/10 dark:hover:bg-slate-700/30 dark:text-white"
      >
        <button
          onClick={() => {
            refDialog?.current?.close();
          }}
          aria-label="close"
          className="x"
        >
          ❌
        </button>
        <div className="w-full h-full ">
          <div className="flex justify-center w-full h-[40%] rounded-lg ease-in-out duration-200">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {imageUrl.map((url, idx) => (
                <SwiperSlide key={idx} className="justify-center">
                  <div className="flex w-full h-full items-center justify-center">
                    <Image
                      src={url}
                      alt="Project I worked on"
                      quality={95}
                      className="w-auto h-full rounded shadow-2xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="pt-4 h-[50%]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="mt-2 px-4 h-full overflow-auto leading-relaxed text-gray-700 dark:text-white/70">
              {detail}
            </div>
          </div>
          {/* <div className="card-footer"></div> */}
        </div>
      </dialog>
    </motion.div>
  );
}
