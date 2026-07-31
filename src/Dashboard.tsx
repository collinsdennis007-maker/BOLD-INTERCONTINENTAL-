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
  <div className="min-h-screen bg-red-600 flex items-center justify-center text-white text-5xl font-bold">
    THIS IS THE DASHBOARD
  </div>
);

      {/* Background */}
      <img
        src={luxuryBank}
        alt="Luxury Bank"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-pink-900/40 to-black/40" />

      {/* Hero */}
      <div className="relative z-10 flex min-h-screen items-center px-6 py-16 md:px-12 lg:px-20">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[8px] font-bold text-pink-300">
              BOLD INTERCONTINENTAL
            </p>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
              Banking
              <br />
              <span className="text-pink-400">
                Without Borders
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              Premium international banking designed for global citizens.
              Secure payments, luxury private banking and intelligent
              financial services all in one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button
                onClick={() => setPage("Payments")}
                className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-8 py-4 font-bold text-white shadow-2xl transition hover:scale-105"
              >
                Send Money
              </button>

              <button
                onClick={() => setPage("Cards")}
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Premium Cards
              </button>

            </div>

          </div>

          {/* Balance Card */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-md rounded-[40px] border border-white/20 bg-white/15 p-8 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

              <p className="uppercase tracking-[5px] text-pink-100">
                Total Balance
              </p>

              <h2 className="mt-6 text-5xl font-black text-white">
                ${balance.toLocaleString()}
              </h2>

              <div className="mt-10 flex items-center justify-between">

                <div>

                  <p className="text-sm text-pink-100">
                    Account
                  </p>

                  <h3 className="font-bold text-white">
                    **** 9302
                  </h3>

                </div>

                <div className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-2 text-sm font-bold text-white">
                  PRIVATE
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
            {/* Premium Statistics */}

      <div className="relative z-10 -mt-20 px-6 pb-12 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/20 bg-white/15 p-8 backdrop-blur-2xl shadow-2xl">

              <h3 className="text-4xl font-black text-pink-300">
                180+
              </h3>

              <p className="mt-3 text-white/90">
                Countries Supported
              </p>

            </div>

            <div className="rounded-3xl border border-white/20 bg-white/15 p-8 backdrop-blur-2xl shadow-2xl">

              <h3 className="text-4xl font-black text-pink-300">
                24/7
              </h3>

              <p className="mt-3 text-white/90">
                Private Concierge
              </p>

            </div>

            <div className="rounded-3xl border border-white/20 bg-white/15 p-8 backdrop-blur-2xl shadow-2xl">

              <h3 className="text-4xl font-black text-pink-300">
                $12B+
              </h3>

              <p className="mt-3 text-white/90">
                Assets Managed
              </p>

            </div>

            <div className="rounded-3xl border border-white/20 bg-white/15 p-8 backdrop-blur-2xl shadow-2xl">

              <h3 className="text-4xl font-black text-pink-300">
                150K+
              </h3>

              <p className="mt-3 text-white/90">
                Premium Clients
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Dashboard Content */}

      <div className="bg-[#faf7fb] rounded-t-[50px] relative z-20 pt-16 pb-20">

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

          <div className="grid gap-8 lg:grid-cols-2">
                      {/* Recent Activity */}

            <div className="rounded-[32px] bg-white p-8 shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-900">
                Recent Activity
              </h2>

              <div className="mt-8 space-y-6">

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                  <div>
                    <p className="font-semibold">Salary Deposit</p>
                    <p className="text-sm text-slate-500">
                      Today • 09:45
                    </p>
                  </div>

                  <span className="font-bold text-green-600">
                    +$3,800
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                  <div>
                    <p className="font-semibold">Apple Store</p>
                    <p className="text-sm text-slate-500">
                      Yesterday
                    </p>
                  </div>

                  <span className="font-bold text-red-500">
                    -$799
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                  <div>
                    <p className="font-semibold">Netflix</p>
                    <p className="text-sm text-slate-500">
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

            <div className="rounded-[32px] bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 p-8 text-white shadow-2xl">

              <h2 className="text-3xl font-bold">
                AI Private Banker
              </h2>

              <p className="mt-6 text-white/90 leading-8">
                Your intelligent banking assistant is available
                24/7 for transfers, investments, financial advice,
                and premium account support.
              </p>

              <button
                onClick={() => setPage("AI Assistant")}
                className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-pink-600 shadow-xl transition hover:scale-105"
              >
                Talk to AI Banker
              </button>

            </div>

          </div>
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* Quick Actions */}

            <div className="rounded-[32px] bg-white p-8 shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-900">
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

                  <p className="mt-2 text-sm text-slate-600">
                    Transfer funds worldwide.
                  </p>
                </button>

                <button
                  onClick={() => setPage("Wallet")}
                  className="rounded-2xl bg-slate-50 p-6 text-left transition hover:bg-slate-100"
                >
                  <h3 className="font-bold">
                    Wallet
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    View your balances.
                  </p>
                </button>

                <button
                  onClick={() => setPage("Cards")}
                  className="rounded-2xl bg-slate-50 p-6 text-left transition hover:bg-slate-100"
                >
                  <h3 className="font-bold">
                    My Cards
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Manage premium cards.
                  </p>
                </button>

                <button
                  onClick={() => setPage("Statements")}
                  className="rounded-2xl bg-slate-50 p-6 text-left transition hover:bg-slate-100"
                >
                  <h3 className="font-bold">
                    Statements
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Download account reports.
                  </p>
                </button>

              </div>

            </div>

            {/* Premium Card */}

            <div className="rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 text-white shadow-2xl">

              <p className="uppercase tracking-[6px] text-pink-300">
                BOLD INTERCONTINENTAL
              </p>

              <div className="mt-16 text-3xl tracking-[5px] font-semibold">
                **** **** **** 9302
              </div>

              <div className="mt-10 flex items-center justify-between">

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
                    12/31
                  </h3>

                </div>

              </div>

            </div>

          </div>
                    <div className="mt-10 rounded-[36px] bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 p-10 text-white shadow-2xl">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              <div>

                <h2 className="text-4xl font-black">
                  Private Wealth Management
                </h2>

                <p className="mt-6 max-w-xl text-white/90 leading-8">
                  Grow and protect your wealth with personalized investment
                  strategies, international banking, and dedicated relationship
                  managers available around the clock.
                </p>

              </div>

              <div className="grid grid-cols-3 gap-6 text-center">

                <div>

                  <h3 className="text-4xl font-black">
                    $12B+
                  </h3>

                  <p className="mt-2 text-white/80">
                    Assets
                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-black">
                    180+
                  </h3>

                  <p className="mt-2 text-white/80">
                    Countries
                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-black">
                    AAA
                  </h3>

                  <p className="mt-2 text-white/80">
                    Security
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}