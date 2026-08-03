import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 82000 },
  { month: "Feb", value: 86000 },
  { month: "Mar", value: 90000 },
  { month: "Apr", value: 96500 },
  { month: "May", value: 101000 },
  { month: "Jun", value: 108500 },
  { month: "Jul", value: 117000 },
  { month: "Aug", value: 128420 },
];

export default function PortfolioChart() {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">
        Portfolio Performance
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ec4899"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}