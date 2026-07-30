import React from "react";

type HeroProps = {
  setPage: (page: string) => void;
};

export default function Hero({ setPage }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(135deg,#fff7fb 0%,#ffe4ef 35%,#ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-8 pt-32 pb-20">

        <div>
          <span className="inline-block rounded-full bg-pink-100 px-5 py-2 text-pink-600 font-semibold">
            BOLD INTERCONTINENTAL PRIVATE BANK
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">
            Banking
            <br />
            Without
            <br />
            Borders.
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Experience luxury private banking powered by intelligent
            technology, global wealth management and secure digital finance.
          </p>

          <div className="mt-10 flex gap-5">
            <button
              onClick={() => setPage("Dashboard")}
              className="rounded-full bg-pink-600 px-8 py-4 text-white font-bold shadow-xl"
            >
              Open Dashboard
            </button>

            <button
              className="rounded-full border border-pink-500 px-8 py-4 text-pink-600 font-bold"
            >
              Explore Services
            </button>
          </div>
        </div>

        <div className="relative">

          <div className="rounded-[40px] bg-white shadow-2xl p-8">

            <div className="h-64 rounded-3xl bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white p-8">

              <p className="text-lg">
                BOLD Platinum
              </p>

              <h2 className="mt-10 text-3xl font-black">
                **** 4839
              </h2>

              <p className="mt-8">
                Global Private Banking
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-pink-50 p-5">
                <p className="text-sm text-slate-500">
                  Balance
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  $25,480
                </h3>
              </div>

              <div className="rounded-2xl bg-pink-50 p-5">
                <p className="text-sm text-slate-500">
                  Investments
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  $84,920
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}