<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    <h1 className="text-xl font-black text-white">
      BOLD <span className="text-pink-400">INTERCONTINENTAL</span>
    </h1>

    <button
      onClick={() => setPage("Profile")}
      className="rounded-xl bg-pink-500 px-5 py-2 text-white font-bold"
    >
      My Account
    </button>
  </div>
</nav>
import { motion } from "framer-motion";
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
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
   <img
  src={luxuryBank}
  alt="Luxury Bank"
  className="absolute inset-0 h-full w-full object-cover object-top md:object-center"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-pink-900/50 to-black/60" />

      {/* Hero */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative z-10 flex min-h-screen items-center px-5 py-8 md:px-12 lg:px-20"
>
  <div className="grid w-full items-center gap-16 lg:grid-cols-2">

    {/* Left */}
<div>

      <p className="uppercase tracking-[8px] text-pink-300 font-bold">
        BOLD INTERCONTINENTAL
      </p>

      <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">
        Banking
        <br />
        <span className="text-pink-400">
          Without Borders
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
        Premium digital banking built for global citizens with luxury
        wealth management, international transfers and AI-powered
        financial assistance.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button
          onClick={() => setPage("Payments")}
          className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-8 py-4 font-bold text-white transition hover:scale-105"
        >
          Send Money
        </button>

        <button
          onClick={() => setPage("Cards")}
          className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl"
        >
          Premium Cards
        </button>

      </div>

    </div>

    {/* Balance Card */}<div className="absolute right-20 top-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

    <div className="flex justify-center lg:justify-end">

      <div className="w-full max-w-md rounded-[40px] border border-white/20 bg-white/10 p-8 backdrop-blur-3xl shadow-2xl">

        <p className="uppercase tracking-[5px] text-pink-100">
          Total Balance
        </p>

        <h2 className="mt-6 text-5xl font-black text-white">
          ${balance.toLocaleString()}
        </h2>

        <div className="mt-10 flex justify-between">

          <div>

            <p className="text-sm text-pink-100">
              Account
            </p>

            <h3 className="font-bold text-white">
              ****9302
            </h3>

          </div>

          <div className="rounded-full bg-pink-500 px-5 py-2 font-bold text-white">
            PRIVATE
          </div>

        </div>

      </div>

    </div>

  </div>

</motion.div>

{/* Statistics */}

<div className="relative z-10 -mt-16 px-6 pb-12">
  <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">

    ...
    four statistic cards
    ...

  </div>
</div>

{/* Main Dashboard */}

<div className="relative z-20 rounded-t-[50px] bg-[#faf7fb] py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Recent Activity */}

            <div className="rounded-[32px] bg-white p-8 shadow-xl">

              <h2 className="text-2xl font-bold">
                Recent Activity
              </h2>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between rounded-2xl bg-slate-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      Salary Deposit
                    </h3>

                    <p className="text-sm text-gray-500">
                      Today
                    </p>

                  </div>

                  <span className="font-bold text-green-600">
                    +$3,800
                  </span>

                </div>

                <div className="flex justify-between rounded-2xl bg-slate-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      Apple Store
                    </h3>

                    <p className="text-sm text-gray-500">
                      Yesterday
                    </p>

                  </div>

                  <span className="font-bold text-red-500">
                    -$799
                  </span>

                </div>

                <div className="flex justify-between rounded-2xl bg-slate-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      Netflix
                    </h3>

                    <p className="text-sm text-gray-500">
                      Subscription
                    </p>

                  </div>

                  <span className="font-bold text-red-500">
                    -$19
                  </span>

                </div>

              </div>

            </div>

            {/* AI Banker */}

            <div className="rounded-[32px] bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 p-8 text-white shadow-xl">

              <h2 className="text-3xl font-bold">
                AI Private Banker
              </h2>

              <p className="mt-6 leading-8 text-white/90">
                Your intelligent banking assistant is available 24/7 for
                payments, investments, budgeting and financial advice.
              </p>

              <button
                onClick={() => setPage("AI Assistant")}
                className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-pink-600"
              >
                Talk to AI Banker
              </button>

            </div>

          </div>
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* Quick Actions */}

            <div className="rounded-[32px] bg-white p-8 shadow-xl">

              <h2 className="text-2xl font-bold">
                Quick Actions
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <button
                  onClick={() => setPage("Payments")}
                  className="rounded-2xl bg-pink-50 p-6 text-left hover:bg-pink-100 transition"
                >
                  <h3 className="font-bold text-pink-600">
                    Send Money
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Transfer funds worldwide
                  </p>

                </button>

                <button
                  onClick={() => setPage("Wallet")}
                  className="rounded-2xl bg-slate-50 p-6 text-left hover:bg-slate-100 transition"
                >
                  <h3 className="font-bold">
                    Wallet
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    View balances
                  </p>

                </button>

                <button
                  onClick={() => setPage("Cards")}
                  className="rounded-2xl bg-slate-50 p-6 text-left hover:bg-slate-100 transition"
                >
                  <h3 className="font-bold">
                    Premium Cards
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Manage cards
                  </p>

                </button>

                <button
                  onClick={() => setPage("Statements")}
                  className="rounded-2xl bg-slate-50 p-6 text-left hover:bg-slate-100 transition"
                >
                  <h3 className="font-bold">
                    Statements
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Download reports
                  </p>

                </button>

              </div>

            </div>

            {/* Premium Card */}

            <div className="rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 text-white shadow-xl">

              <p className="uppercase tracking-[6px] text-pink-300">
                BOLD INTERCONTINENTAL
              </p>

              <div className="mt-16 text-3xl tracking-[6px] font-semibold">
                **** **** **** 9302
              </div>

              <div className="mt-10 flex justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    Card Holder
                  </p>

                  <h3 className="font-bold">
                    Premium Client
                  </h3>

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Expires
                  </p>

                  <h3 className="font-bold">
                    12 / 31
                  </h3>

                </div>

              </div>

            </div>

          </div>
                    <div className="mt-10 rounded-[36px] bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 p-10 text-white shadow-xl">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              <div>

                <h2 className="text-4xl font-black">
                  Private Wealth Management
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-white/90">
                  Grow and protect your wealth with personalized investment
                  strategies, international banking and dedicated relationship
                  managers available around the clock.
                </p>

              </div>

              <div className="grid grid-cols-3 gap-6 text-center">

                <div>

                  <h3 className="text-4xl font-black">$12B+</h3>

                  <p className="mt-2 text-white/80">
                    Assets
                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-black">180+</h3>

                  <p className="mt-2 text-white/80">
                    Countries
                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-black">AAA</h3>

                  <p className="mt-2 text-white/80">
                    Security
                  </p>

                </div>

              </div>

            </div>

          </div>

              </div> {/* max-w-7xl */}

      </div> {/* Main Dashboard */}

    </section>
  );
}