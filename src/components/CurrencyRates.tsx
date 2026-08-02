import { useEffect, useState } from "react";

type Rates = {
  EUR: number;
  GBP: number;
  CHF: number;
  AED: number;
  JPY: number;
  CAD: number;
  AUD: number;
};

export default function CurrencyRates() {
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setRates({
          EUR: data.rates.EUR,
          GBP: data.rates.GBP,
          CHF: data.rates.CHF,
          AED: data.rates.AED,
          JPY: data.rates.JPY,
          CAD: data.rates.CAD,
          AUD: data.rates.AUD,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch exchange rates:", error);
      });
  }, []);

  if (!rates) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-xl">
        Loading exchange rates...
      </div>
    );
  }
    return (
      <div className="rounded-3xl bg-white p-8 shadow-xl">
        Loading exchange rates...
      </div>
    );
  }

  const currencies = Object.entries(rates);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">
        Live Exchange Rates (USD)
      </h2>

      <div className="space-y-4">
        {currencies.map(([code, value]) => (
          <div
            key={code}
            className="flex justify-between rounded-xl bg-slate-50 p-4"
          >
            <span className="font-semibold">{code}</span>
            <span>{value.toFixed(4)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}