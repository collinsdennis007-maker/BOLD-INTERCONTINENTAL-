import React from "react";

type LoginProps = {
  setLoggedIn: (value: boolean) => void;
};

export default function Login({ setLoggedIn }: LoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-700 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-[40px] bg-white p-10 shadow-2xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-purple-700 text-5xl font-black text-white">
          B
        </div>

        <h1 className="mt-8 text-center text-4xl font-black text-pink-600">
          BOLD INTERCONTINENTAL
        </h1>

        <p className="mt-2 text-center text-slate-500">
          Private Banking Login
        </p>

        <input
          placeholder="Email Address"
          className="mt-8 w-full rounded-xl border p-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full rounded-xl border p-4"
        />

        <button
          onClick={() => setLoggedIn(true)}
          className="mt-8 w-full rounded-xl bg-pink-600 py-4 text-white font-bold"
        >
          Sign In
        </button>

      </div>

    </div>
  );
}