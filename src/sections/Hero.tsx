"use client";
import { FC, useEffect } from "react";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion } from "motion/react";
import { stagger } from "motion";
import CodeBlockDemo from "../components/CodeBlockDemo";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, [titleScope, titleAnimate]);
  return (
    <section className="container !max-w-full " id="home">
      <div
        className="md:grid md:grid-cols-12 md:h-screen items-stretch sticky top-0 overflow-hidden flex flex-col gap-8
"
      >
        <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center">
          <div className="">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
              ref={titleScope}
            >
              Creating modern digital experiences with engaging visuals and
              complete web solutions.
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>View My Work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.2,
                }}
              >
                <Button
                  variant="text"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-5 flex items-center justify-center">
          <CodeBlockDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
