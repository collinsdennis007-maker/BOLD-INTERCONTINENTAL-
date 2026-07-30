import React, { useState } from "react";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");

  const askAI = () => {
    if (!question.trim()) {
      setReply("Please enter a question.");
      return;
    }

    setReply(
      "Your BOLD AI Concierge is analyzing your request. This feature will provide personalized financial insights in a future update."
    );
  };

  return (
    <section className="space-y-8">

      <h1 className="text-4xl font-black">
        AI Financial Concierge
      </h1>

      <p className="text-slate-500">
        Ask questions about your finances, spending, investments, or banking.
      </p>

      <div className="rounded-3xl bg-white p-8 shadow-xl">

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your AI Concierge..."
          className="h-40 w-full rounded-2xl border p-4"
        />

        <button
          onClick={askAI}
          className="mt-6 rounded-xl bg-gradient-to-r from-pink-600 to-fuchsia-600 px-8 py-4 font-bold text-white"
        >
          Ask AI
        </button>

        {reply && (
          <div className="mt-6 rounded-2xl bg-pink-50 p-6">
            {reply}
          </div>
        )}

      </div>

    </section>
  );
}