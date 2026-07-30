import React from "react";

const statements = [
  {
    date: "29 Jul 2026",
    description: "Salary Payment",
    amount: "+$3,800",
  },
  {
    date: "28 Jul 2026",
    description: "Amazon Purchase",
    amount: "-$120",
  },
  {
    date: "27 Jul 2026",
    description: "Netflix Subscription",
    amount: "-$19",
  },
  {
    date: "25 Jul 2026",
    description: "International Transfer",
    amount: "-$650",
  },
];

export default function Statements() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-4xl font-black">
          Account Statements
        </h1>

        <p className="mt-2 text-slate-500">
          Review your recent account activity.
        </p>
      </div>

      <div className="rounded-3xl bg-white shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-pink-600 text-white">

            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-right">Amount</th>
            </tr>

          </thead>

          <tbody>

            {statements.map((item, index) => (

              <tr
                key={index}
                className="border-b"
              >
                <td className="p-4">{item.date}</td>

                <td className="p-4">{item.description}</td>

                <td
                  className={`p-4 text-right font-bold ${
                    item.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.amount}
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}