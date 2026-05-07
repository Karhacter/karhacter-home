"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Project 1",
    description:
      "A marketplace platform supporting multiple tenants, enabling vendors to manage products, orders, and customers independently within a shared system.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCss" },
      { name: "Typescript" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://multi-market-ecommerce.vercel.app/",
    github: "https://github.com/Karhacter/multi-market-ecommerce",
  },
  {
    num: "02",
    category: "FrontEnd",
    title: "Project 2",
    description:
      "A personal portfolio website showcasing skills, projects, and experiences, built with a clean UI and responsive design.",
    stack: [
      { name: "NextJS" },
      { name: "Tailwindcss" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/Karhacter/karhacter-home",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Project 3",
    description:
      "An e-commerce application for browsing, ordering, and managing fresh fruits, with features like cart, checkout, and product recommendations.",
    stack: [
      { name: "ReactJS" },
      { name: "Bootstrap" },
      { name: "ASP.NET" },
      { name: "SQL Server" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Karhacter/fruitshop-viewdemo",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="relative min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="container mx-auto ">
        <div className="mb-10 text-center xl:text-left">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-sky-300/90">
            Portfolio
          </p>
          <h1 className="h2">Selected Projects</h1>
          <p className="mt-3 max-w-[700px] text-white/60 mx-auto xl:mx-0">
            Real projects focused on practical business needs, responsive
            interfaces, and maintainable architecture.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-sky-400 transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* Description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-3 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-300"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}

                <Link href={project.live || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-sky-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-sky-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center rounded-2xl overflow-hidden border border-white/10 bg-[#1f1f26]">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none]"
                btnStyles="bg-sky-400 hover:bg-sky-400-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
