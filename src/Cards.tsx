import React from "react";

export default function Cards() {
  return (
    <section className="space-y-8">

      <h1 className="text-4xl font-black">
        Premium Cards
      </h1>

      <p className="text-slate-500">
        Choose the perfect BOLD INTERCONTINENTAL card for your lifestyle.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="rounded-[32px] bg-gradient-to-r from-pink-600 to-fuchsia-600 p-8 text-white shadow-2xl">
          <p className="opacity-80">BOLD Platinum</p>

          <h2 className="mt-8 text-3xl font-black">
            **** **** **** 4839
          </h2>

          <p className="mt-10">Unlimited Spending</p>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-xl">
          <p className="text-slate-500">BOLD Signature</p>

          <h2 className="mt-8 text-3xl font-black">
            Travel Benefits
          </h2>

          <p className="mt-10">
            Airport lounge access and premium rewards.
          </p>
        </div>

        <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl">
          <p className="text-pink-300">BOLD Private</p>

          <h2 className="mt-8 text-3xl font-black">
            Invitation Only
          </h2>

          <p className="mt-10">
            Dedicated relationship manager and concierge service.
          </p>
        </div>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold">
          Card Controls
        </h2>

        <div className="mt-6 flex flex-wrap gap-4">

          <button className="rounded-xl bg-pink-600 px-6 py-3 text-white">
            Freeze Card
          </button>

          <button className="rounded-xl border border-pink-600 px-6 py-3 text-pink-600">
            Change PIN
          </button>

          <button className="rounded-xl border border-pink-600 px-6 py-3 text-pink-600">
            View Transactions
          </button>

        </div>

      </div>

    </section>
  );
}