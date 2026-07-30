import React from "react";

type DashboardProps = {
  balance: number;
  setPage: (page: string) => void;
};

export default function Dashboard({
  balance,
  setPage,
}: DashboardProps) {
  return (
    <section className="space-y-8">

      <div className="rounded-[40px] bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 p-10 text-white shadow-2xl">

        <p className="text-lg opacity-90">
          Welcome Back
        </p>

        <h1 className="mt-2 text-5xl font-black">
          ${balance.toLocaleString()}
        </h1>

        <p className="mt-3 text-pink-100">
          Available Balance
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-4">

        <button
          onClick={() => setPage("Payments")}
          className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition"
        >
          💸
          <h3 className="mt-4 font-bold">
            Send Money
          </h3>
        </button>

        <button
          onClick={() => setPage("Wallet")}
          className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition"
        >
          👛
          <h3 className="mt-4 font-bold">
            Wallet
          </h3>
        </button>

        <button
          onClick={() => setPage("Cards")}
          className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition"
        >
          💳
          <h3 className="mt-4 font-bold">
            Cards
          </h3>
        </button>

        <button
          onClick={() => setPage("AI Assistant")}
          className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition"
        >
          🤖
          <h3 className="mt-4 font-bold">
            AI Concierge
          </h3>
        </button>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

        <div className="mt-6 space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>Salary</span>
            <span className="text-green-600">+$3,800</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Netflix</span>
            <span className="text-red-500">-$19</span>
          </div>

          <div className="flex justify-between">
            <span>Amazon</span>
            <span className="text-red-500">-$120</span>
          </div>

        </div>

      </div>

    </section>
  );
}