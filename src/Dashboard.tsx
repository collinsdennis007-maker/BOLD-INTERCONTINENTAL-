import CurrencyRates from "./components/CurrencyRates";
import React from "react";
import { motion } from "framer-motion";
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
<nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-20">
  <div className="text-2xl font-black text-white">
    BOLD <span className="text-pink-400">INTERCONTINENTAL</span>
  </div>

  <div className="hidden gap-8 text-white md:flex">
    <button onClick={() => setPage("Dashboard")} className="hover:text-pink-400">
      Dashboard
    </button>

    <button onClick={() => setPage("Payments")} className="hover:text-pink-400">
      Payments
    </button>

    <button onClick={() => setPage("Cards")} className="hover:text-pink-400">
      Cards
    </button>

    <button onClick={() => setPage("Wallet")} className="hover:text-pink-400">
      Wallet
    </button>

    <button onClick={() => setPage("AI Assistant")} className="hover:text-pink-400">
      AI Banker
    </button>
  </div>

  <button
    className="rounded-full bg-pink-600 px-6 py-3 font-bold text-white hover:bg-pink-700"
  >
    Private Banking
  </button>
</nav>
<div className="relative z-20 px-6 lg:px-20">
  <p className="text-sm text-white/70">
    {new Date().toLocaleDateString()} •{" "}
    {new Date().toLocaleTimeString()}
  </p>
</div>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex min-h-screen items-center px-6 py-10 lg:px-20"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="font-bold uppercase tracking-[8px] text-pink-300">
              BOLD INTERCONTINENTAL
            </p>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
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

          {/* Balance Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[40px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-3xl">
            <p className="uppercase tracking-[5px] text-pink-100">
  Total Portfolio Value
</p>

              <h2 className="mt-6 text-5xl font-black text-white">
                ${balance.toLocaleString()}
              </h2>
<p className="mt-3 text-green-300 font-semibold">
  ▲ +8.42% this month
</p>

<p className="mt-1 text-sm text-white/70">
  Last updated just now
</p>
              <div className="mt-10 flex items-center justify-between">
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

          {[
            ["180+", "Countries Supported"],
            ["24/7", "Private Concierge"],
            ["$12B+", "Assets Managed"],
            ["150K+", "Premium Clients"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl"
            >
              <h3 className="text-4xl font-black text-pink-300">
                {value}
              </h3>

              <p className="mt-3 text-white">
                {label}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Multi Currency */}
      <div className="relative z-20 px-6 pb-16">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-8 text-3xl font-bold text-white">
            Global Currency Balances
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["USD", "$128,420"],
              ["EUR", "€84,315"],
              ["GBP", "£41,220"],
              ["CHF", "CHF 18,550"],
              ["AED", "AED 92,700"],
              ["CAD", "C$24,810"],
              ["AUD", "A$31,440"],
              ["JPY", "¥4,320,000"],
            ].map(([currency, amount]) => (

              <div
                key={currency}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-2xl"
              >
                <p className="text-sm uppercase tracking-[4px] text-pink-200">
                  {currency}
                </p>

                <h3 className="mt-4 text-3xl font-black text-white">
                  {amount}
                </h3>
              </div>

            ))}

          </div>

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

                {[
                  {
                    title: "Salary Deposit",
                    date: "Today",
                    amount: "+$3,800",
                    color: "text-green-600",
                  },
                  {
                    title: "Apple Store",
                    date: "Yesterday",
                    amount: "-$799",
                    color: "text-red-500",
                  },
                  {
                    title: "Netflix",
                    date: "Subscription",
                    amount: "-$19",
                    color: "text-red-500",
                  },
                  {
                    title: "International Transfer",
                    date: "2 days ago",
                    amount: "+€5,200",
                    color: "text-green-600",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex justify-between rounded-2xl bg-slate-50 p-5"
                  >
                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.date}
                      </p>
                    </div>

                    <span className={`font-bold ${item.color}`}>
                      {item.amount}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* AI Private Banker */}
            <div className="rounded-[32px] bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 p-8 text-white shadow-xl">

              <h2 className="text-3xl font-bold">
                AI Private Banker
              </h2>

              <p className="mt-6 leading-8 text-white/90">
                Your intelligent banking assistant is available 24/7 for
                payments, investments, budgeting, portfolio analysis,
                exchange rates and personalized financial guidance.
              </p>

              <button
                onClick={() => setPage("AI Assistant")}
                className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-pink-600 transition hover:scale-105"
              >
                Talk to AI Banker
              </button>

            </div>

          </div>
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
<div className="mt-10">
  <CurrencyRates />
</div>
            {/* Quick Actions */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-bold">
                Quick Actions
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <button
                  onClick={() => setPage("Payments")}
                  className="rounded-2xl bg-pink-50 p-6 text-left transition hover:bg-pink-100"
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
                  className="rounded-2xl bg-slate-50 p-6 text-left transition hover:bg-slate-100"
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
                  className="rounded-2xl bg-slate-50 p-6 text-left transition hover:bg-slate-100"
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
                  className="rounded-2xl bg-slate-50 p-6 text-left transition hover:bg-slate-100"
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

              <div className="mt-16 text-3xl font-semibold tracking-[6px]">
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

          {/* Wealth Management */}
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
                  <p className="mt-2 text-white/80">Assets</p>
                </div>

                <div>
                  <h3 className="text-4xl font-black">180+</h3>
                  <p className="mt-2 text-white/80">Countries</p>
                </div>

                <div>
                  <h3 className="text-4xl font-black">AAA</h3>
                  <p className="mt-2 text-white/80">Security</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}