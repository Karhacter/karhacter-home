import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Karhacter</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Lorem Puntimasd</p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
