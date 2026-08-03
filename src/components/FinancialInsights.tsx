export default function FinancialInsights() {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-8">
        Financial Insights
      </h2>

      <div className="space-y-5">

        <div className="rounded-2xl bg-green-50 p-5 border border-green-200">
          <h3 className="font-bold text-green-700">
            Portfolio Growth
          </h3>
          <p className="mt-2 text-gray-600">
            Your investments have grown by <strong>8.42%</strong> this month.
          </p>
        </div>

        <div className="rounded-2xl bg-blue-50 p-5 border border-blue-200">
          <h3 className="font-bold text-blue-700">
            Spending Analysis
          </h3>
          <p className="mt-2 text-gray-600">
            Your spending is 12% lower than last month.
          </p>
        </div>

        <div className="rounded-2xl bg-purple-50 p-5 border border-purple-200">
          <h3 className="font-bold text-purple-700">
            Investment Opportunity
          </h3>
          <p className="mt-2 text-gray-600">
            Consider increasing exposure to global equity funds for long-term growth.
          </p>
        </div>

      </div>
    </div>
  );
}