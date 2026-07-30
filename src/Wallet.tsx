import React from "react";

export default function Wallet() {
  return (
    <section className="space-y-8">

      <h1 className="text-4xl font-black">
        Digital Wallet
      </h1>

      <p className="text-slate-500">
        Manage your balances across multiple currencies.
      </p>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-gradient-to-r from-pink-600 to-fuchsia-600 p-8 text-white shadow-xl">
          <p>US Dollar</p>
          <h2 className="mt-3 text-4xl font-black">$25,480</h2>
          <p className="mt-2 opacity-80">Primary Account</p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <p>Euro</p>
          <h2 className="mt-3 text-3xl font-black">€8,920</h2>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <p>British Pound</p>
          <h2 className="mt-3 text-3xl font-black">£6,150</h2>
        </div>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold">
          Currency Exchange
        </h2>

        <p className="mt-4 text-slate-600">
          Exchange between supported currencies instantly.
        </p>
      </div>

    </section>
  );
}