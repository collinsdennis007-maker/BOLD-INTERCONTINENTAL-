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

      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#8B005D] via-pink-600 to-fuchsia-700 p-10 text-white shadow-2xl">

        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10"></div>
        <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/5"></div>

        <div className="relative">

          <p className="text-sm uppercase tracking-[6px] text-pink-100">
            BOLD INTERCONTINENTAL
          </p>

          <h1 className="mt-8 text-5xl font-black">
            ${balance.toLocaleString()}
          </h1>

          <p className="mt-3 text-pink-100">
            Available Balance
          </p>

          <div className="mt-10 flex items-center justify-between">

            <div>
              <p className="text-xs text-pink-200">
                ACCOUNT
              </p>

              <h3 className="mt-1 font-bold">
                BOLD •••• 9302
              </h3>
            </div>

            <div className="rounded-full bg-white/20 px-5 py-2 backdrop-blur">
              PREMIUM
            </div>

          </div>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-4">

        <button
          onClick={() => setPage("Payments")}
          className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2"
        >
          <div className="text-4xl">💸</div>
          <h3 className="mt-4 font-bold">
            Transfer
          </h3>
        </button>

        <button
          onClick={() => setPage("Wallet")}
          className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2"
        >
          <div className="text-4xl">👛</div>
          <h3 className="mt-4 font-bold">
            Wallet
          </h3>
        </button>

        <button
          onClick={() => setPage("Cards")}
          className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2"
        >
          <div className="text-4xl">💳</div>
          <h3 className="mt-4 font-bold">
            Cards
          </h3>
        </button>

        <button
          onClick={() => setPage("AI Assistant")}
          className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2"
        >
          <div className="text-4xl">🤖</div>
          <h3 className="mt-4 font-bold">
            AI Banker
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
            <span className="text-green-600">
              +$3,800
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Netflix</span>
            <span className="text-red-500">
              -$19
            </span>
          </div>

          <div className="flex justify-between">
            <span>Amazon</span>
            <span className="text-red-500">
              -$120
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}