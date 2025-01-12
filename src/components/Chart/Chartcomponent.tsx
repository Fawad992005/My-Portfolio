import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Tailwind CSS", desktop: 186 },
  { month: "CSS", desktop: 210 },
  { month: "Html5", desktop: 237 },
  { month: "JS", desktop: 273 },
  { month: "Reactjs", desktop: 260 },
  { month: "TS", desktop: 214 },
];

export function RadarChartComponent() {
  return (
    <div className="w-[100vw] mx-auto p-6 bg-gray-800 shadow-lg rounded-lg">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-green-400">
          Skills Proficiency Chart
        </h2>
      </div>
      {/* Responsive Chart Container */}
      <div className="w-full h-96">
        <ResponsiveContainer>
          <RadarChart data={chartData}>
            <PolarGrid stroke="#4B5563" />
            <PolarAngleAxis
              dataKey="month"
              tick={{ fill: "#D1D5DB", fontSize: 12 }}
            />
            <Radar
              name="Desktop"
              dataKey="desktop"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
