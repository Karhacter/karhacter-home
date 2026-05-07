"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 20,
    text: "Projects Completed",
  },
  {
    num: 5,
    text: "Techonologies mastered",
  },
  {
    num: 113,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-10 pb-12 xl:pt-12 xl:pb-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            return (
              <div
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
                key={index}
              >
                <div className="flex items-center gap-3">
                  <p className="text-xl text-sky-400">&gt;=</p>
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl font-extrabold"
                  />
                </div>
                <p className="mt-2 leading-snug text-white/80">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
