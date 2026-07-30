import React from "react";

export default function Settings() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-4xl font-black">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your BOLD INTERCONTINENTAL preferences.
        </p>
      </div>

      <div className="space-y-6">

        <div className="rounded-3xl bg-white p-8 shadow-lg flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl">
              Dark Mode
            </h2>
            <p className="text-slate-500">
              Switch between light and dark appearance.
            </p>
          </div>

          <button className="rounded-xl bg-pink-600 px-5 py-2 text-white">
            Coming Soon
          </button>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl">
              Notifications
            </h2>
            <p className="text-slate-500">
              Manage alerts and communication preferences.
            </p>
          </div>

          <button className="rounded-xl border border-pink-600 px-5 py-2 text-pink-600">
            Configure
          </button>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl">
              Privacy & Security
            </h2>
            <p className="text-slate-500">
              Review your security settings.
            </p>
          </div>

          <button className="rounded-xl border border-pink-600 px-5 py-2 text-pink-600">
            Open
          </button>
        </div>

      </div>

    </section>
  );
}