import { FC } from "react";
import image1 from "@/assets/images/project-1.png";
import image2 from "@/assets/images/project-2.png";
import image3 from "@/assets/images/project-3.png";
import image4 from "@/assets/images/project-4.png";
// import image5 from "@/assets/images/project-5.png";
import image6 from "@/assets/images/project-6.png";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Talent First",
    image: image1,
    url: "https://rahayudesign.com/",
  },
  {
    name: "UFit",
    image: image3,
    url: "https://rahayudesign.com/",
  },
  {
    name: "Tarkov Tracker",
    image: image4,
    url: "https://tarkovtracker.ca/",
  },
  {
    name: "TenFlix",
    image: image6,
    url: "https://tenflix.grubhtml.com/",
  },
  {
    name: "Amazon Clone",
    image: image2,
    url: "",
  },
];

const Projects: FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image, url }) => (
            <a
              href={url}
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project"
            >
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300"></div>
              <div className="relative">
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} image`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                  <div className="sm:group-hover/project:pl-3 md:group-hover/project:pl-4 lg:group-hover/project:pl-8 transition-all duration-700">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                  </div>
                  <div className="relative">
                    <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10">
                      <Image
                        src={image}
                        alt={`${name} image`}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="sm:group-hover/project:pr-3 md:group-hover/project:pr-4 lg:group-hover/project:pr-8 transition-all duration-700">
                    <div className="size-6 overflow-hidden">
                      <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
