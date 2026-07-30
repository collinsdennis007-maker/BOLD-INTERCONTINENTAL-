import React from "react";

export default function Profile() {
  return (
    <section className="space-y-8">

      <div className="rounded-3xl bg-white p-10 shadow-xl">

        <div className="flex flex-col items-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-600 text-5xl font-black text-white">
            B
          </div>

          <h1 className="mt-6 text-4xl font-black">
            BOLD Customer
          </h1>

          <p className="text-slate-500">
            Premium Private Banking Member
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-xl font-bold">
            Personal Information
          </h2>

          <div className="mt-6 space-y-4">

            <p><strong>Email:</strong> customer@boldbank.com</p>

            <p><strong>Country:</strong> Nigeria</p>

            <p><strong>Account Type:</strong> Platinum</p>

          </div>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-xl font-bold">
            Membership
          </h2>

          <div className="mt-6 space-y-4">

            <p>✔ Private Banking</p>

            <p>✔ Wealth Management</p>

            <p>✔ Priority Support</p>

          </div>

        </div>

      </div>

    </section>
  );
}