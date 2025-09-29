"use client";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";

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
    "I am a motivated college student eager to start my career in technology. I am passionate about learning, improving my skills, and contributing to real-world projects. Currently seeking job opportunities to gain hands-on experience and grow professionally.",
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
        "Developed a multi-tenant marketplace platform with features such as product listings, user authentication, and position-based access. Built using Spring Boot and Vue.js.",
    },
    {
      duration: "2023 - 2024",
      position: "Club Member",
      company: "Embedded Programming Class",
      description:
        "Participated in club activities focused on embedded systems. Learned low-level programming concepts, teamwork, and project collaboration.",
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
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
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
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
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
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
