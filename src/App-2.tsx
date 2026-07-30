import React, { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Wallet from "./components/Wallet";
import Payments from "./components/Payments";
import Cards from "./components/Cards";
import AIAssistant from "./components/AIAssistant";
import Security from "./components/Security";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Statements from "./components/Statements";
import Settings from "./components/Settings";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [page, setPage] = useState("Home");

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

      <Header page={page} setPage={setPage} nav={nav} />

      <main className="mx-auto max-w-7xl p-6">