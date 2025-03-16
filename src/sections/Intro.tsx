"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={scope}>
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Offering animated visuals, UI/UX design, full-stack web development,
          domain hosting, and SEO, we create exceptional digital experiences.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
