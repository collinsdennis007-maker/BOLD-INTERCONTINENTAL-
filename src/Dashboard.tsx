import React from "react";
import luxuryBank from "./assets/luxury-bank.jpg";

type DashboardProps = {
  balance: number;
  setPage: (page: string) => void;
};

export default function Dashboard({
  balance,
  setPage,
}: DashboardProps) {
  return (
    <section className="min-h-screen bg-[#faf7fb]">

      <div className="relative overflow-hidden rounded-[40px] mx-6 mt-6 shadow-2xl">

        <img
          src={luxuryBank}
          alt="Luxury Bank"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>

        <div className="relative z-10 p-10 md:p-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="uppercase tracking-[8px] text-pink-600 font-bold">
                BOLD INTERCONTINENTAL
              </p>

              <h1 className="mt-8 text-6xl font-black text-slate-900 leading-tight">
                Banking
                <br />
                <span className="text-pink-600">
                  Without Borders
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg text-slate-600">
                Experience world-class private banking with luxury
                digital services, global transfers, premium wealth
                management and exclusive financial solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button
                  onClick={() => setPage("Payments")}
                  className="rounded-2xl bg-pink-600 px-8 py-4 text-white font-bold shadow-xl transition hover:scale-105"
                >
                  Send Money
                </button>

                <button
                  onClick={() => setPage("Cards")}
                  className="rounded-2xl bg-white/70 backdrop-blur-xl px-8 py-4 font-bold shadow-xl"
                >
                  Premium Cards
                </button>

              </div>

            </div>

            <div className="flex justify-center">

              <div className="w-full max-w-md rounded-[36px] bg-white/20 backdrop-blur-2xl p-8 border border-white/30 shadow-2xl">

                <p className="text-white tracking-[5px] uppercase">
                  Total Balance
                </p>

                <h2 className="mt-6 text-5xl font-black text-white">
                  ${balance.toLocaleString()}
                </h2>

                <div className="mt-10 flex justify-between">

                  <div>

                    <p className="text-pink-100 text-sm">
                      Account
                    </p>

                    <h3 className="font-bold text-white">
                      **** 9302
                    </h3>

                  </div>

                  <div className="rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur">
                    PRIVATE
                  </div>

                </div>

              </div>

            </div>

          </div>
                      <div className="mt-16 grid gap-6 md:grid-cols-4">

              <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-6 shadow-xl">
                <h3 className="text-3xl font-black text-pink-600">
                  180+
                </h3>
                <p className="mt-2 text-slate-600">
                  Countries Supported
                </p>
              </div>

              <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-6 shadow-xl">
                <h3 className="text-3xl font-black text-pink-600">
                  24/7
                </h3>
                <p className="mt-2 text-slate-600">
                  Private Concierge
                </p>
              </div>

              <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-6 shadow-xl">
                <h3 className="text-3xl font-black text-pink-600">
                  $12B+
                </h3>
                <p className="mt-2 text-slate-600">
                  Assets Managed
                </p>
              </div>

              <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-6 shadow-xl">
                <h3 className="text-3xl font-black text-pink-600">
                  150K+
                </h3>
                <p className="mt-2 text-slate-600">
                  Premium Clients
                </p>
              </div>

            </div>

          </div>

          </div>
        
      <div className="mx-6 mt-10 grid gap-8 lg:grid-cols-2">

        <div className="rounded-[32px] bg-white p-8 shadow-2xl">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-8 space-y-6">

            <div className="flex justify-between">
              <span>Salary Deposit</span>
              <span className="font-bold text-green-600">
                +$3,800
              </span>
            </div>

            <div className="flex justify-between">
              <span>Apple Store</span>
              <span className="font-bold text-red-500">
                -$799
              </span>
            </div>

            <div className="flex justify-between">
              <span>Netflix</span>
              <span className="font-bold text-red-500">
                -$19
              </span>
            </div>

          </div>

        </div>

        <div className="rounded-[32px] bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 p-8 text-white shadow-2xl">

          <h2 className="text-2xl font-bold">
            Private Banking
          </h2>

          <p className="mt-5 opacity-90">
            Your relationship manager is available 24/7.
          </p>

          <button
            className="mt-8 rounded-2xl bg-white px-8 py-4 font-bold text-pink-600"
            onClick={() => setPage("AI Assistant")}
          >
            Talk to AI Banker
          </button>

        </div>

      </div>

    </section>
  );
}