import React from "react";

export default function Security() {
  return (
    <section className="space-y-8">

      <h1 className="text-4xl font-black">
        Security Center
      </h1>

      <p className="text-slate-500">
        Protect your account with advanced security tools.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold">
            🔐 Two-Factor Authentication
          </h2>

          <p className="mt-4 text-slate-600">
            Add an extra layer of protection to your account.
          </p>

          <button className="mt-6 rounded-xl bg-pink-600 px-6 py-3 text-white">
            Enable
          </button>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold">
            🛡 Login Activity
          </h2>

          <p className="mt-4 text-slate-600">
            Review recent sign-ins and connected devices.
          </p>

          <button className="mt-6 rounded-xl border border-pink-600 px-6 py-3 text-pink-600">
            View Activity
          </button>
        </div>

      </div>

      <div className="rounded-3xl bg-pink-50 p-8">
        <h2 className="text-2xl font-bold">
          Security Status
        </h2>

        <p className="mt-4 text-green-600 font-semibold">
          ✔ Your account is currently secure.
        </p>
      </div>

    </section>
  );
}