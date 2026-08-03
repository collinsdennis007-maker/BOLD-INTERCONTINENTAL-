const transactions = [
  {
    name: "Apple Store",
    date: "Today",
    amount: "-$799.00",
    status: "Completed",
    color: "text-red-500",
  },
  {
    name: "Salary Deposit",
    date: "Yesterday",
    amount: "+$3,800.00",
    status: "Received",
    color: "text-green-600",
  },
  {
    name: "International Transfer",
    date: "2 Days Ago",
    amount: "-€2,450.00",
    status: "Completed",
    color: "text-red-500",
  },
  {
    name: "Amazon",
    date: "3 Days Ago",
    amount: "-$129.99",
    status: "Completed",
    color: "text-red-500",
  },
];

export default function RecentTransactions() {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-8">
        Recent Transactions
      </h2>

      <div className="space-y-5">
        {transactions.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-5 hover:bg-slate-50 transition"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </div>

            <div className="text-right">
              <p className={`font-bold ${item.color}`}>
                {item.amount}
              </p>

              <p className="text-xs text-green-600">
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}