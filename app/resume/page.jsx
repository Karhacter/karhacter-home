"use client";

import { FaJs, FaReact } from "react-icons/fa";

import {
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDotnet,
  SiMysql,
} from "react-icons/si";

// Info
const about = {
  title: "About me",
  description:
    "I am a motivated junior developer focused on building backend and fullstack applications with ASP.NET Core. I enjoy learning modern architecture patterns, improving code quality, and contributing to real-world products. Currently seeking opportunities to grow as an ASP.NET Core developer.",
  info: [
    {
      fieldName: "Name: ",
      fieldValue: "Trần Đức Khánh",
    },
    {
      fieldName: "Phone: ",
      fieldValue: "(+84) 378 173 109",
    },
    {
      fieldName: "Experience: ",
      fieldValue: "3+ Years ( In College )",
    },
    {
      fieldName: "Email: ",
      fieldValue: "khanhduc392@gmail.com",
    },
    {
      fieldName: "Freelance: ",
      fieldValue: "Looking for opportunities",
    },
    {
      fieldName: "Languages: ",
      fieldValue: "Vietnamese, English, Japanese (Beginner)",
    },
  ],
};

// Kinh nghiệm làm việc
const experience = {
  icon: "/assets/resume/bage.svg",
  title: "My experience",
  description:
    "  Although I don’t have formal work experience yet, I have gained valuable knowledge through side projects and technical clubs. These experiences helped me strengthen my problem-solving, teamwork, and practical coding skills",
  items: [
    {
      duration: "2025",
      position: "Participant – Euréka Science Research Competition",
      company: "School-level",
      description:
        "Presented a research project at the Euréka science competition and achieved 5th place out of 7 topics. Gained experience in research methodology, teamwork, and presenting technical ideas to an academic audience.",
    },
    {
      duration: "2024 - Present",
      position: "Side Project",
      company: "Personal Project",
      description:
        "Developed marketplace and management modules with authentication, role-based authorization, and REST APIs using ASP.NET Core. Focused on clean architecture, database design, and maintainable backend services.",
    },
    {
      duration: "2023 - 2024",
      position: "Club Member",
      company: "Embedded Programming Class",
      description:
        "Participated in club activities focused on embedded systems. Learned low-level programming concepts, teamwork, and project collaboration.",
    },
    {
      duration: "Mar 2026 - May 2026",
      position: "Intern",
      company: "FPT Telecom",
      description:
        "Developed a web application for managing Economic Learning (E-Learning) platform using ASP.NET Core and Angular.",
    },
    {
      duration: "May 2026 - Present",
      position: "Intern",
      company: "Co Khi Nguyen Viet - Ho Chi Minh City",
      description:
        "Developed a web application for managing Co Khi Nguyen Viet - Ho Chi Minh City using ASP.NET MVC",
    },
  ],
};

// Trường học
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My academic journey where I built a foundation in information technology, software development, and embedded systems, while actively participating in projects and clubs to apply theory into practice.",
  items: [
    {
      institution: "Industry and Trade College",
      degree: "Associate Degree in Information Technology",
      duration: "2023 - 2025",
    },
  ],
};

// vấn đề kỹ năng
const skills = {
  title: "MySkills",
  description:
    "A combination of technical and soft skills I have developed through college coursework, self-learning, and projects. Continuously improving my knowledge to stay updated with modern technologies.",
  skilllist: [
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiDotnet />,
      name: "ASP.NET",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
  ],
};

const achievements = {
  title: "Achievements",
  description:
    "Highlights from competitions and project outcomes that show progress, consistency, and practical impact.",
  items: [
    {
      year: "2025",
      title: "Eureka Science Competition",
      detail: "Ranked 5th place out of 7 school-level research topics.",
    },
    {
      year: "2024 - Present",
      title: "Marketplace Side Project",
      detail:
        "Completed core modules including authentication, tenant separation, and product management.",
    },
    {
      year: "2023 - Present",
      title: "Continuous Learning",
      detail:
        "Built and shipped multiple portfolio projects while improving frontend architecture and UI quality.",
    },
  ],
};

const goals = {
  title: "Career Goals",
  description:
    "My near-term roadmap as a junior developer focused on ASP.NET Core backend engineering and fullstack delivery.",
  items: [
    "Join a professional team as a Backend or Fullstack Developer using ASP.NET Core.",
    "Strengthen ASP.NET Core, Entity Framework Core, and RESTful API design.",
    "Build secure, scalable systems with authentication, authorization, and clean architecture.",
    "Contribute to real-world products with measurable performance and business impact.",
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <div className="mb-10 text-center xl:text-left">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-sky-300/90">
            Resume
          </p>
          <h1 className="h2">Experience, Skills, and Background</h1>
          <p className="mt-3 max-w-[760px] text-white/60 mx-auto xl:mx-0">
            A quick overview of my hands-on learning journey, projects, and
            technical strengths as an ASP.NET Core-oriented developer.
          </p>
        </div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="mx-auto flex h-fit w-fit min-w-[260px] flex-col gap-3 self-start rounded-2xl border border-white/10 bg-white/5 p-3 xl:mx-0 xl:self-start">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          className="rounded-xl border border-white/10 bg-white/5 py-6 px-8 flex flex-col justify-center items-center lg:items-start gap-2"
                          key={index}
                        >
                          <span className="text-sky-400">{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-sky-400"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <p className="text-white/60">{item.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="rounded-xl border border-white/10 bg-white/5 py-6 px-8 flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-sky-400">{item.duration}</span>
                          <h3>{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-sky-400"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider duration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] rounded-xl border border-white/10 bg-white/5 flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-sky-400 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold"> {about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg xl:text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="achievements"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{achievements.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {achievements.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {achievements.items.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-xl border border-white/10 bg-white/5 p-6"
                    >
                      <p className="mb-2 text-sm text-sky-400">{item.year}</p>
                      <h4 className="text-xl font-semibold">{item.title}</h4>
                      <p className="mt-2 text-white/60">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="goals" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{goals.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {goals.description}
                </p>
                <ul className="grid gap-4 max-w-[760px]">
                  {goals.items.map((goal, index) => (
                    <li
                      key={index}
                      className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/80"
                    >
                      <span className="mr-2 text-sky-400">0{index + 1}.</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
