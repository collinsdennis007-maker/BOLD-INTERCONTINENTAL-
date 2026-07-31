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
   <section className="relative min-h-screen overflow-hidden">

  {/* Background Image */}
  <img
    src={luxuryBank}
    alt="Luxury Bank"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Luxury Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-900/60 via-black/30 to-white/10"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex min-h-screen items-center px-6 md:px-12 lg:px-20">

    <div className="grid w-full gap-16 lg:grid-cols-2 items-center">

      {/* Left Side */}
      <div>

        <p className="uppercase tracking-[8px] font-bold text-pink-300">
          BOLD INTERCONTINENTAL
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
          Banking
          <br />
          <span className="text-pink-400">
            Without Borders
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg md:text-xl text-white/90">
          Premium international banking built for global citizens.
          Private wealth. Global payments. Intelligent finance.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">

          <button
            onClick={() => setPage("Payments")}
            className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-8 py-4 font-bold text-white shadow-2xl transition duration-300 hover:scale-105"
          >
            Send Money
          </button>

          <button
            onClick={() => setPage("Cards")}
            className="rounded-2xl border border-white/30 bg-white/15 px-8 py-4 font-bold text-white backdrop-blur-xl transition duration-300 hover:bg-white/25"
          >
            Premium Cards
          </button>

        </div>

      </div>

      {/* Floating Balance Card */}
      <div className="flex justify-center lg:justify-end">

        <div className="w-full max-w-md rounded-[40px] border border-white/20 bg-white/15 p-8 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,.45)]">

          <p className="uppercase tracking-[5px] text-pink-100">
            Total Balance
          </p>

          <h2 className="mt-6 text-5xl font-black text-white">
            ${balance.toLocaleString()}
          </h2>

          <div className="mt-12 flex justify-between items-center">

            <div>

              <p className="text-sm text-pink-100">
                Account
              </p>

              <h3 className="font-bold text-white">
                **** 9302
              </h3>

            </div>

            <div className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-2 text-sm font-bold text-white shadow-lg">
              PRIVATE
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Premium Stats */}
  <div className="absolute bottom-8 left-1/2 w-[95%] -translate-x-1/2">

    <div className="grid gap-4 md:grid-cols-4">

      <div className="rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur-2xl">
        <h3 className="text-3xl font-black text-pink-300">180+</h3>
        <p className="mt-2 text-white">Countries</p>
      </div>

      <div className="rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur-2xl">
        <h3 className="text-3xl font-black text-pink-300">24/7</h3>
        <p className="mt-2 text-white">Private Concierge</p>
      </div>

      <div className="rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur-2xl">
        <h3 className="text-3xl font-black text-pink-300">$12B+</h3>
        <p className="mt-2 text-white">Assets Managed</p>
      </div>

      <div className="rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur-2xl">
        <h3 className="text-3xl font-black text-pink-300">150K+</h3>
        <p className="mt-2 text-white">Premium Clients</p>
      </div>

    </div>

  </div>

</section>
  
         
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