import { RadarChartComponent } from "../Chart/Chartcomponent";

const Skills = () => {
  return (
    <div className="h-auto py-12 bg-gray-900">
      <h1 className="text-3xl font-semibold text-center text-green-400 mb-8">
        Skills
      </h1>
      <div className="flex justify-center items-center">
        <RadarChartComponent />
      </div>
    </div>
  );
};

export default Skills;
