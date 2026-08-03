import React, { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Wallet from "./Wallet";
import Payments from "./Payments";
import Cards from "./Cards";
import AIAssistant from "./AIAssistant";
import Security from "./Security";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Statements from "./Statements";
import Settings from "./Settings";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [page, setPage] = useState("Dashboard");

  const [balance] = useState(25480);

  const nav = [
    "Home",
    "Dashboard",
    "Wallet",
    "Payments",
    "Cards",
    "AI Assistant",
    "Security",
    "Notifications",
    "Profile",
    "Statements",
    "Settings",
  ];

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">

    <Header
  page={page}
  setPage={setPage}
  setLoggedIn={setLoggedIn}
/>

      <main className="mx-auto max-w-7xl p-6">

{page === "Home" && (
  <>
    <Hero setPage={setPage} />
    <Stats />
    <Features />
    <Footer />
  </>
)}

{page === "Dashboard" && (
  <Dashboard balance={balance} setPage={setPage} />
)}

{page === "Wallet" && (
  <Wallet />
)}

{page === "Payments" && (
  <Payments />
)}
{page === "Cards" && (
  <Cards />
)}

{page === "AI Assistant" && (
  <AIAssistant />
)}

{page === "Security" && (
  <Security />
)}

{page === "Notifications" && (
  <Notifications />
)}

{page === "Profile" && (
  <Profile />
)}

{page === "Statements" && (
  <Statements />
)}

{page === "Settings" && (
  <Settings />
)}
      </main>

    </div>
  );
}