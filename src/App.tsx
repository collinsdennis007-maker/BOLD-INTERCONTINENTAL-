import React, { useState } from "react";

export default function App() {
  // ==========================
  // STATE
  // ==========================

  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("Home");
  const [balance, setBalance] = useState(25480);
  const [message, setMessage] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [cardFrozen, setCardFrozen] = useState(false);

  const [alerts, setAlerts] = useState([
    "Welcome to BOLD Banking",
    "Security check completed",
  ]);

  const [aiReply, setAiReply] = useState("");

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const [currency, setCurrency] = useState("USD");
  const [converted, setConverted] = useState(0);

  const [profileName, setProfileName] = useState("BOLD Customer");

  const [operationMessage, setOperationMessage] = useState("");

  const [receipt, setReceipt] = useState("");

  const [settings, setSettings] = useState("");

  // ==========================
  // CONSTANTS
  // ==========================

  const account = "BOLD-USD-849302";

  const nav = [
    "Home",
    "Dashboard",
    "Wallet",
    "Payments",
    "Cards",
    "AI Assistant",
    "Security",
    "Notifications 🔔",
    "Profile",
    "Statements",
    "Settings",
  ];

  const tx = [
    ["Salary", "+$3,800"],
    ["Netflix", "-$19"],
    ["Amazon", "-$120"],
  ];

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-[40px] bg-white p-10 shadow-2xl">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-purple-700 text-5xl text-white shadow-xl">
            B
          </div>

          <h1 className="mt-6 text-center text-4xl font-black text-pink-600">
            BOLD INTERCONTINENTAL
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back to BOLD INTERCONTINENTAL
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

          <div className="mt-3 text-right">
            <button className="text-sm font-medium text-pink-600 hover:underline">
              Forgot Password?
            </button>
          </div>

          <button
            onClick={() => setLoggedIn(true)}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105"
          >
            Sign In
          </button>

          <p className="mt-8 text-center text-sm text-gray-500">
            Secure Banking • Encrypted Connection • Version 2.0
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 text-slate-900">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl p-5 flex flex-wrap justify-between gap-4 shadow-lg">

        <div>
          <h1 className="text-3xl font-black text-pink-600">
            BOLD INTERCONTINENTAL
          </h1>
          <p className="text-sm text-slate-500">
            Premium Digital Banking
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {nav.map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`rounded-full px-4 py-2 ${
                page === n
                  ? "bg-pink-600 text-white"
                  : "bg-white shadow-md hover:shadow-xl transition-all duration-300"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-slate-500">Welcome</p>
            <p className="font-bold">{profileName}</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-lg font-bold text-white">
            B
          </div>
        </div>

      </header>

      <main className="p-6 md:p-10">

        {/* ================= WELCOME ================= */}

        {showWelcome && (
          <div className="mb-6 rounded-3xl bg-pink-50 p-6">
            <h2 className="text-2xl font-bold">
              Welcome to BOLD INTERCONTINENTAL
            </h2>
            <p className="mt-2">
              Your premium global digital banking experience.
            </p>
            <button
              onClick={() => setShowWelcome(false)}
              className="mt-4 rounded-full bg-pink-600 px-5 py-2 text-white"
            >
              Continue
            </button>
          </div>
        )}

        {/* ================= HOME ================= */}

        {page === "Home" && (
          <section className="rounded-3xl bg-white p-10 shadow-xl">
            <p className="font-bold text-pink-600">
              BOLD INTERCONTINENTAL BANK
            </p>

            <h2 className="mt-3 text-6xl font-black leading-tight">
              Banking Without Borders
            </h2>

            <p className="mt-3 text-2xl font-semibold text-pink-600">
              Trusted. Secure. International.
            </p>

            <p className="mt-4 text-xl">
              Premium USD digital banking designed for customers worldwide.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-pink-50 p-5">Global USD Account</div>
              <div className="rounded-2xl bg-pink-50 p-5">Smart Payments</div>
              <div className="rounded-2xl bg-pink-50 p-5">Secure Banking</div>
            </div>

            <button
              onClick={() => setPage("Dashboard")}
              className="mt-8 rounded-full bg-pink-600 px-8 py-4 text-white"
            >
              Open Dashboard
            </button>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-black text-pink-600">150K+</h3>
                <p className="mt-2 text-gray-600">Customers</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-black text-pink-600">120+</h3>
                <p className="mt-2 text-gray-600">Countries</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-black text-pink-600">$9.8B</h3>
                <p className="mt-2 text-gray-600">Processed</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-black text-pink-600">99.99%</h3>
                <p className="mt-2 text-gray-600">Uptime</p>
              </div>
            </div>

            <section className="mt-12">
              <h2 className="text-4xl font-black">
                Premium Banking Services
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <div className="text-5xl">🌍</div>
                  <h3 className="mt-4 text-2xl font-bold">Global Transfers</h3>
                  <p className="mt-3 text-gray-600">Send money worldwide in seconds.</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <div className="text-5xl">🛡️</div>
                  <h3 className="mt-4 text-2xl font-bold">Bank-Level Security</h3>
                  <p className="mt-3 text-gray-600">Multi-layer security for every transaction.</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <div className="text-5xl">🤖</div>
                  <h3 className="mt-4 text-2xl font-bold">AI Financial Coach</h3>
                  <p className="mt-3 text-gray-600">Smart insights to help manage your money.</p>
                </div>
              </div>
            </section>
          </section>
        )}

        {/* ==========================
            DASHBOARD
        ========================== */}

        {page === "Dashboard" && (
          <section>
            <h2 className="text-4xl font-bold">Welcome Back</h2>

            <div className="mt-6 rounded-3xl bg-pink-600 p-8 text-white shadow-xl">
              <p className="text-lg opacity-80">Available Balance</p>
              <h3 className="mt-2 text-6xl font-black tracking-tight">
                ${balance.toLocaleString()} USD
              </h3>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-white/20 p-4">🌍 Global Account</div>
                <div className="rounded-2xl bg-white/20 p-4">🔒 Secure Wallet</div>
                <div className="rounded-2xl bg-white/20 p-4">📈 Smart Finance</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <button
                onClick={() => setPage("Payments")}
                className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="text-4xl">💸</div>
                <h3 className="mt-3 text-xl font-bold">Send Money</h3>
                <p className="mt-2 text-gray-500">Transfer funds worldwide</p>
              </button>

              <button
                onClick={() => setPage("Wallet")}
                className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="text-4xl">👛</div>
                <h3 className="mt-3 text-xl font-bold">Wallet</h3>
                <p className="mt-2 text-gray-500">Manage your balances</p>
              </button>

              <button
                onClick={() => setPage("Cards")}
                className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="text-4xl">💳</div>
                <h3 className="mt-3 text-xl font-bold">Cards</h3>
                <p className="mt-2 text-gray-500">Control your virtual card</p>
              </button>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow">
              <h3 className="text-2xl font-bold">Account Details</h3>
              <p className="mt-2">Account Number: {account}</p>

              <h3 className="mt-6 text-2xl font-bold">Recent Transactions</h3>
              {tx.map((t) => (
                <p key={t[0]} className="mt-3">
                  {t[0]}
                  <span className="float-right">{t[1]}</span>
                </p>
              ))}

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-pink-50 p-5">
                  <p>Monthly Spending</p>
                  <strong className="text-3xl">$1,240</strong>
                  <p className="mt-2 text-sm text-gray-600">▲ 12% lower than last month</p>
                </div>
                <div className="rounded-2xl bg-pink-50 p-5">
                  <p>Savings Goal</p>
                  <strong className="text-3xl">72%</strong>
                  <p className="mt-2 text-sm text-gray-600">$7,200 of $10,000 saved</p>
                </div>
                <div className="rounded-2xl bg-pink-50 p-5">
                  <p>Financial Health</p>
                  <strong className="text-3xl text-green-600">Excellent</strong>
                  <p className="mt-2 text-sm text-gray-600">Credit score improving</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================
            WALLET
        ========================== */}

        {page === "Wallet" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">Global Wallet</h2>

            <p className="mt-5 text-3xl font-black">
              ${balance.toLocaleString()} USD
            </p>

            <select
              className="mt-4 rounded-xl border p-3"
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>

            <button
              onClick={() => setConverted(balance * 0.92)}
              className="mt-5 block rounded-full bg-pink-600 px-6 py-3 text-white"
            >
              Convert Currency
            </button>

            <p className="mt-4">
              {currency} Value: {converted.toFixed(2)}
            </p>

            <button
              onClick={() => {
                setBalance(balance + 500);
                setOperationMessage("Deposit successful");
              }}
              className="mt-6 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              Deposit $500
            </button>

            <button
              onClick={() => {
                setBalance(balance - 200);
                setOperationMessage("Withdrawal successful");
              }}
              className="ml-3 mt-5 rounded-full border px-6 py-3"
            >
              Withdraw $200
            </button>

            <p className="mt-4 text-green-600">{operationMessage}</p>
          </section>
        )}

        {/* ==========================
            PAYMENTS
        ========================== */}

        {page === "Payments" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">Global Payments</h2>

            <input
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Recipient"
              className="mt-5 block rounded-xl border p-3"
            />

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount USD"
              className="mt-3 block rounded-xl border p-3"
            />

            <button
              onClick={() => {
                setBalance(balance - Number(amount || 100));
                setMessage("Transfer Successful to " + recipient);
                setReceipt("Reference: BOLD-" + Date.now());
              }}
              className="mt-5 rounded-full bg-pink-600 px-6 py-3 text-white"
            >
              Send Transfer
            </button>

            <p className="mt-4 font-bold text-green-600">{message}</p>
            <p>{receipt}</p>
          </section>
        )}

        {/* ==========================
            CARDS
        ========================== */}

        {page === "Cards" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">BOLD Virtual Card</h2>

            <div className="mt-6 rounded-[32px] bg-gradient-to-br from-gray-900 via-purple-900 to-pink-700 p-8 text-white shadow-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] opacity-80">
                    BOLD INTERCONTINENTAL
                  </p>
                  <h3 className="mt-2 text-3xl font-black">Platinum</h3>
                </div>
                <div className="text-4xl">💳</div>
              </div>

              <div className="mt-10 text-yellow-300 text-5xl">▣</div>

              <p className="mt-8 text-2xl tracking-[0.35em]">
                •••• •••• •••• 4839
              </p>

              <div className="mt-8 flex justify-between">
                <div>
                  <p className="text-xs opacity-70">CARD HOLDER</p>
                  <p className="font-bold">{profileName}</p>
                </div>
                <div>
                  <p className="text-xs opacity-70">EXPIRES</p>
                  <p className="font-bold">12/30</p>
                </div>
              </div>
            </div>

            <p className="mt-4 font-bold">BOLD Platinum · **** 4839 · USD</p>

            <p className="mt-2 text-green-600 font-semibold">
              Card Status: {cardFrozen ? "Temporarily Locked 🔒" : "Ready for Payments ✅"}
            </p>

            <button
              onClick={() => setCardFrozen(!cardFrozen)}
              className="mt-5 rounded-full bg-pink-600 px-6 py-3 text-white"
            >
              {cardFrozen ? "Unfreeze Card" : "Freeze Card"}
            </button>
          </section>
        )}

        {/* ==========================
            AI ASSISTANT
        ========================== */}

        {page === "AI Assistant" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">BOLD AI Assistant</h2>
            <p className="mt-4">Your personal financial companion.</p>

            <div className="mt-6 rounded-2xl bg-pink-50 p-5">
              Insight: Your spending pattern is healthy.
            </div>

            <button
              onClick={() =>
                setAiReply(
                  "I recommend reviewing your monthly expenses and setting savings goals."
                )
              }
              className="mt-5 rounded-full bg-pink-600 px-6 py-3 text-white"
            >
              Ask BOLD AI
            </button>

            <p className="mt-4">{aiReply}</p>
          </section>
        )}

        {/* ==========================
            SECURITY
        ========================== */}

        {page === "Security" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">Security Center</h2>
            <p className="mt-4">2FA, login protection and account safety.</p>

            <button
              onClick={() =>
                setAlerts([...alerts, "New security verification completed"])
              }
              className="mt-5 rounded-full bg-pink-600 px-6 py-3 text-white"
            >
              Run Security Check
            </button>
          </section>
        )}

        {/* ==========================
            NOTIFICATIONS
        ========================== */}

        {page === "Notifications 🔔" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">Notifications</h2>
            {alerts.map((alert) => (
              <p key={alert} className="mt-3">
                {alert}
              </p>
            ))}
          </section>
        )}

        {/* ==========================
            PROFILE
        ========================== */}

        {page === "Profile" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">Customer Profile</h2>

            <input
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              className="mt-5 rounded-xl border p-3"
            />

            <p className="mt-4">Account: {account}</p>
            <p>Global USD Account</p>
          </section>
        )}

        {/* ==========================
            SETTINGS
        ========================== */}

        {page === "Settings" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">Account Settings</h2>

            <button
              onClick={() => setSettings("Biometric login enabled")}
              className="mt-5 rounded-full bg-pink-600 px-6 py-3 text-white"
            >
              Enable Biometric Security
            </button>

            <button
              onClick={() => setSettings("Notifications updated")}
              className="ml-3 mt-5 rounded-full border px-6 py-3"
            >
              Update Preferences
            </button>

            <p className="mt-4">{settings}</p>
          </section>
        )}

        {/* ==========================
            STATEMENTS
        ========================== */}

        {page === "Statements" && (
          <section className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-4xl font-bold">Statements</h2>
            <p className="mt-4">Monthly statements will be available here.</p>
          </section>
        )}

      </main>
    </div>
  );
}
