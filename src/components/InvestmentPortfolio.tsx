import { TrendingUp } from "lucide-react";

const assets = [
  { name: "US Equities", value: "$420,000", percent: 45 },
  { name: "European Stocks", value: "$210,000", percent: 22 },
  { name: "Private Equity", value: "$165,000", percent: 18 },
  { name: "Gold", value: "$85,000", percent: 9 },
  { name: "Cash", value: "$55,000", percent: 6 },
];

export default function InvestmentPortfolio() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Investment Portfolio
        </h2>

        <TrendingUp className="text-green-500" size={28} />
      </div>

      <div className="space-y-6">
        {assets.map((asset) => (
          <div key={asset.name}>
            <div className="mb-2 flex justify-between">
              <span className="font-semibold">{asset.name}</span>
              <span>{asset.value}</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                style={{ width: `${asset.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}