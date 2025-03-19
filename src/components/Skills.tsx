import React from "react";
import Image from "next/image";

const skillsIcon = [
  { id: 1, iconName: "HTML", iconImage: "/icons/html.svg" },
  { id: 2, iconName: "CSS", iconImage: "/icons/css.svg" },
  { id: 3, iconName: "JavaScript", iconImage: "/icons/js.svg" },
  { id: 4, iconName: "MongoDB", iconImage: "/icons/mongo.svg" },
  { id: 5, iconName: "Express", iconImage: "/icons/express.svg" },
  { id: 6, iconName: "React", iconImage: "/icons/react.svg" },
  { id: 7, iconName: "Node.js", iconImage: "/icons/node-js.svg" },
  { id: 8, iconName: "Tailwind", iconImage: "/icons/tailwind.svg" },
  { id: 9, iconName: "Bootstrap", iconImage: "/icons/bootstrap.svg" },
  { id: 10, iconName: "Material UI", iconImage: "/icons/material-ui.svg" },
  { id: 11, iconName: "Figma", iconImage: "/icons/figma.svg" },
  { id: 12, iconName: "Blender", iconImage: "/icons/blender.svg" },
  { id: 13, iconName: "Next.js", iconImage: "/icons/next-js.svg" },
  { id: 14, iconName: "Framer", iconImage: "/icons/framer.svg" },
  { id: 15, iconName: "Spline", iconImage: "/icons/spline.png" },
];

const Skills = () => {
  return (
    <div className="p-10 md:p-16 lg:p-20 gap-2 md:gap-4 lg:gap-6 bg-white h-full flex flex-wrap justify-center items-center">
      {skillsIcon.map((skill) => (
        <div
          key={skill.id}
          className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 border border-stone-200 h-[80px] md:h-[110px] lg:h-[140px] w-[80px] md:w-[110px] lg:w-[140px]"
        >
          <div className="relative w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9">
            <Image
              src={skill.iconImage}
              alt={skill.iconName}
              fill
              className="object-contain"
            />
          </div>

          <span className="text-xs md:text-sm  font-extralight">{skill.iconName}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
