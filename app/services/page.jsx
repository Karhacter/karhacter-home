"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and scalable web applications using modern technologies such as React, Next.js, Spring Boot, and TailwindCSS.",
    href: "#",
  },
  {
    num: "02",
    title: "Android Development",
    description:
      "Creating Android apps with Java/Kotlin and integrating APIs for real-world use cases. Experienced with Retrofit, RecyclerView, and Firebase.",
    href: "#",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Designing clean and user-friendly interfaces with attention to usability and aesthetics. Skilled in turning ideas into interactive prototypes.",
    href: "#",
  },
  {
    num: "04",
    title: "Game Development",
    description:
      "Exploring game development concepts using frameworks like Unity and JavaScript game libraries. Passionate about combining storytelling, design, and interactivity.",
    href: "#",
  },
];

//  Todo : fix UI to make 6 or more services like SEO, Problem SKill , some thing like that
const Services = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden py-12 xl:py-10">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="container mx-auto">
        <div className="mb-10 text-center xl:text-left">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-sky-300/90">
            Services
          </p>
          <h1 className="h2">What I Can Build For You</h1>
          <p className="mt-3 max-w-[700px] text-white/60 mx-auto xl:mx-0">
            End-to-end digital product support from idea to polished
            implementation, focused on usability, performance, and modern
            interfaces.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            return (
              <div
                className="group flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="h-[60px] w-[60px] rounded-full border border-white/15 bg-white/10 transition-all duration-500 flex justify-center items-center group-hover:border-sky-300/50 group-hover:bg-sky-400 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[30px] xl:text-[34px] font-bold leading-tight text-white group-hover:text-sky-400 transition-all duration-500">
                  {service.title}
                </h2>
                {/* des */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
