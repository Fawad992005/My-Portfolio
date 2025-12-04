import React from "react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "React Intern",
    company: "HZTech",
    duration: "June 2025 - September 2025",
    description:
      "Contributed to developing responsive web interfaces using React and TypeScript, and built interactive mobile screens in React Native. Implemented reusable UI components with Tailwind CSS, optimized application performance, and collaborated in feature development across multiple projects.",
  },
  {
    role: "Junior React Developer",
    company: "HZTech",
    duration: "September 2025 - Present",
    description:
      "Developing and maintaining production-level React and React Native applications. Built reusable components, integrated backend APIs, improved UI/UX experience, and implemented authentication using Firebase. Worked on real-time features, app performance optimization, and deployment for client projects.",
  },
];

const ExperienceComponent: React.FC = () => {
  return (
    <div className="px-8 md:px-20 py-12">
      <h1 className="text-4xl font-bold text-green-500 mb-10">
        Work Experience
      </h1>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-green-500 pl-6 py-3 hover:bg-gray-100/10 rounded-md transition-all cursor-pointer"
          >
            <h2 className="text-2xl font-semibold">{exp.role}</h2>
            <p className="text-lg text-green-400 font-medium">{exp.company}</p>
            <p className="text-sm opacity-70">{exp.duration}</p>
            <p className="mt-2 opacity-90">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
