import React from "react";

export default function Stats() {
  const stats = [
    {
      number: "150K+",
      title: "Private Clients",
    },
    {
      number: "120+",
      title: "Countries Served",
    },
    {
      number: "$9.8B",
      title: "Assets Managed",
    },
    {
      number: "99.99%",
      title: "Secure Infrastructure",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-gradient-to-br from-pink-50 to-white p-10 shadow-lg text-center"
            >
              <h2 className="text-5xl font-black text-pink-600">
                {item.number}
              </h2>

              <p className="mt-4 text-slate-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}