import Skill from "../Skill/Skill.component";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="h-auto md:h-[50vh] py-12" data-aos="fade-down">
        <h1 className="text-4xl font-semibold text-center text-green-600 mb-6">
          Skills
        </h1>
        <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:items-start md:items-center mx-2 mt-0 md:mt-20">
          <div className="space-y-6 ">
            <Skill name="HTML" level="90" />
            <Skill name="CSS" level="75" />
            <Skill name="JavaScript" level="80" />
            <Skill name="TypeScript" level="70" />
          </div>
          <div className="space-y-6  mt-5">
            <Skill name="React" level="81" />
            <Skill name="Tailwind CSS" level="80" />
            <Skill name="NodeJS" level="60" />
            <Skill name="ExpressJS" level="60" />
          </div>
        </div>
      </div>
      <div className="divider divider-neutral"></div>
    </>
  );
};

export default Skills;
