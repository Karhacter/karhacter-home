import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FiArrowRight, FiCode, FiLayers, FiZap } from "react-icons/fi";

const Home = () => {
  const highlights = [
    {
      icon: <FiCode className="text-xl text-sky-400" />,
      title: "ASP.NET Core API Design",
      detail: "Building secure and maintainable backend services.",
    },
    {
      icon: <FiLayers className="text-xl text-sky-400" />,
      title: "Clean Architecture",
      detail: "Separation of concerns for scalable fullstack systems.",
    },
    {
      icon: <FiZap className="text-xl text-sky-400" />,
      title: "Performance + Reliability",
      detail: "Optimized queries, stable APIs, and responsive UI delivery.",
    },
  ];

  const stack = [
    "ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "SQL Server",
    "Next.js",
  ];

  return (
    <section className="relative h-full overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container mx-auto h-full py-8 xl:py-12">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-16">
          <div className="text-center xl:text-left order-2 xl:order-none max-w-[640px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-sm uppercase tracking-[0.2em] text-sky-300">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              ASP.NET Core Developer
            </span>
            <h1 className="h1 mb-6 mt-5">
              Hi, I&apos;m <span className="text-sky-400">Karhacter</span>
            </h1>
            <p className="max-w-[560px] mb-8 text-white/80">
              ASP.NET Core-focused developer skilled in building secure backend
              services and practical fullstack applications. Passionate about
              clean architecture, REST APIs, and delivering reliable user
              experiences from database to interface.
            </p>
            <div className="mb-10 flex flex-wrap justify-center xl:justify-start gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-sky-400/70 text-sky-300 hover:bg-sky-400 hover:text-primary"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Button
                size="lg"
                className="uppercase flex items-center gap-2 bg-sky-500 text-primary hover:bg-sky-400"
              >
                <span>View My Work</span>
                <FiArrowRight className="text-lg" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerSytles="flex gap-6"
                  iconStyles="w-9 h-9 border border-sky-400 rounded-full flex justify-center items-center text-sky-400 text-base hover:bg-sky-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-sm"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="mb-1 text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 xl:order-none mb-2 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
