import React from "react";

const features = [
  {
    title: "Private Banking",
    description:
      "Exclusive wealth management with dedicated relationship managers.",
    icon: "💎",
  },
  {
    title: "Global Transfers",
    description:
      "Send and receive money securely across more than 120 countries.",
    icon: "🌍",
  },
  {
    title: "AI Financial Concierge",
    description:
      "Personalized financial insights powered by intelligent technology.",
    icon: "🤖",
  },
  {
    title: "Investment Solutions",
    description:
      "Grow your portfolio with tailored investment opportunities.",
    icon: "📈",
  },
  {
    title: "Premium Security",
    description:
      "Advanced protection with biometric security and fraud monitoring.",
    icon: "🛡️",
  },
  {
    title: "Luxury Banking",
    description:
      "A premium digital banking experience designed for modern clients.",
    icon: "🏦",
  },
];

export default function Features() {
  return (
    <section className="bg-pink-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-slate-900">
            Premium Banking Services
          </h2>

          <p className="mt-5 text-xl text-slate-600">
            Everything you need to manage, protect and grow your wealth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}