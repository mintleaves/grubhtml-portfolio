"use client";

import React from "react";

import { CodeBlock } from "@/components/Code-block";

const CodeBlockDemo = () => {
  const AboutUsLanguage = `<div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
          A Glimpse Into Our Team
      </h2>
      <p className="text-lg mb-2">
          We're skilled Software Engineers proficient in the MERN stack, 
          with a solid foundation in Computer Science and Engineering. 
          Graduated in 2022, we have honed our expertise in Data Structures 
          and Algorithms.
      </p>
      <p className="text-lg mb-2">
          Our proven track record includes successful project completions 
          over the past two years, culminating in the launch of our 
          entrepreneurial venture, <strong>GrubHTML</strong>.
      </p>
      <p className="text-xl text-gray-400">
          We prioritize:
      </p>
      <ul className="px-4 py-5 text-center bg-[#121113] text-gray-400 rounded-md">
           <li>✅ Open Communication</li>
           <li>✅ 100% Satisfaction</li>
           <li>✅ Active Collaboration</li>
           <li>✅ Visual Refinements</li>
      </ul>
      <p className="text-xl text-gray-400">
          For our clients.
      </p>
  </div>
  `;
  const SkillsLanguage = `<div className="p-6 border rounded-lg">
    <h2 className="text-2xl font-bold mb-4">
        Our Skills
    </h2>
    <div className="mt-4">
        <h3 className="text-xl font-semibold">Frontend Skills</h3>
        <ul className="mt-2 px-6 py-4 rounded-md">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Framer Motion</li>
        </ul>
    </div>
    <div className="mt-6">
        <h3 className="text-xl font-semibold">Backend Skills</h3>
        <ul className="mt-2 px-6 py-4 rounded-md">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>Authentication & Authorization</li>
        </ul>
    </div>
</div>
`;
  return (
    <div className="w-full">
      <CodeBlock
        language="jsx"
        filename="DummyComponent.jsx"
        tabs={[
          {
            name: "AboutUs.html",
            code: AboutUsLanguage,
            language: "html",
            highlightLines: [3, 17],
          },
          {
            name: "Skills.html",
            code: SkillsLanguage,
            language: "html",
          },
        ]}
      />
    </div>
  );
};

export default CodeBlockDemo;
