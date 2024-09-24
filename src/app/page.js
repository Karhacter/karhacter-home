"use client";

import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <main>
      <PageTransition delay={0.2}>
        <section className="h-full">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center xl:text-left">
                <span className="h2">
                  Hello, My nickname is <b className="text-accent">Karhacter</b>{" "}
                  <br />
                </span>
                <p className="text-center">
                  I'm a software engineer freelancer and I'm looking for some
                  interviews
                </p>

                <div className="mt-5">This is my adventure as engineer </div>
                <div className="mt-5 flex flex-col xl:flex-row items-center gap-8">
                  <Button size="lg" className="flex items-center gap-2">
                    <span>
                      My Portfolio <ChevronRightIcon />
                    </span>
                  </Button>
                </div>
              </div>
              <div>Photo</div>
            </div>
          </div>
        </section>
      </PageTransition>
    </main>
  );
}
