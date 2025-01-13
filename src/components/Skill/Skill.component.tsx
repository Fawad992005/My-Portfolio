type SkillProps = {
  name: string;
  level: string;
};

const Skill: React.FC<SkillProps> = ({ name, level }) => (
  <div className="flex-col flex sm:items-center space-x-4 sm:flex-row">
    <span className="text-green-600 font-medium text-base">✓ {name}</span>
    <progress
      className="progress progress-success w-56 h-2 md:w-64"
      value={level}
      max="100"
    ></progress>
  </div>
);

export default Skill;
