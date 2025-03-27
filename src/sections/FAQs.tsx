"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "What specific services do you offer?",
    answer:
      "We specialize in developing full-stack applications, as well as crafting highly responsive, frontend-focused websites using clean, custom code. Our approach ensures optimal performance, scalability, and a tailored user experience that aligns with your brand’s unique vision and goals.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The time required to build a website is influenced by factors such as design complexity, functionality, and content development. We typically deliver smaller projects within two weeks and larger projects within three months.",
  },
  {
    question: "What is your development process like?",
    answer:
      "We take a hands-on approach, starting with detailed project planning, developing core features, and providing regular progress updates through live demonstrations on our own hosting platform to ensure the project aligns with your vision and requirements",
  },
  {
    question: "What other service do you offer?",
    answer:
      "We also offer website cloning, SEO optimization, error handling for existing projects, bug fixing, and reliable hosting services to ensure optimal performance and scalability.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we collaborate with clients worldwide and are flexible in accommodating different time zones for seamless communication and meetings. Our experience includes working with clients from Germany, Canada, the US, and of course, our home country, Bangladesh.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="section" id="faqs">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(faqIndex);
                }
              }}
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-700",
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:sm:pl-3 group-hover/faq:md:pl-4 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition-all duration-300 bg-stone-200",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden pl-3 md:pl-4 lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
