import React, { useState } from "react";

export default function Payments() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <section className="space-y-8">

      <h1 className="text-4xl font-black">
        Send Money
      </h1>

      <p className="text-slate-500">
        Fast, secure and borderless international payments.
      </p>

      <div className="rounded-3xl bg-white p-8 shadow-xl">

        <label className="block font-semibold">
          Recipient
        </label>

        <input
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient Name"
          className="mt-2 w-full rounded-xl border p-4"
        />

        <label className="mt-6 block font-semibold">
          Amount
        </label>

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="$0.00"
          className="mt-2 w-full rounded-xl border p-4"
        />

        <button
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-pink-600 to-fuchsia-600 py-4 font-bold text-white shadow-lg"
        >
          Continue Transfer
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-pink-50 p-6">
          🌍
          <h3 className="mt-3 font-bold">
            International Transfers
          </h3>
        </div>

        <div className="rounded-3xl bg-pink-50 p-6">
          ⚡
          <h3 className="mt-3 font-bold">
            Instant Payments
          </h3>
        </div>

        <div className="rounded-3xl bg-pink-50 p-6">
          🔒
          <h3 className="mt-3 font-bold">
            Secure Transactions
          </h3>
        </div>

      </div>

    </section>
  );
}