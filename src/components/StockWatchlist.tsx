import { useEffect, useState } from "react";

type Stock = {
  symbol: string;
  price: number;
  change: number;
};

export default function StockWatchlist() {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: "AAPL", price: 214.25, change: 1.52 },
    { symbol: "MSFT", price: 532.91, change: 0.87 },
    { symbol: "NVDA", price: 184.60, change: 2.43 },
    { symbol: "TSLA", price: 327.18, change: -1.18 },
    { symbol: "AMZN", price: 242.75, change: 0.64 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((stock) => ({
          ...stock,
          price: +(stock.price + (Math.random() - 0.5) * 2).toFixed(2),
          change: +(stock.change + (Math.random() - 0.5) * 0.3).toFixed(2),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">
        Global Market Watch
      </h2>

      <div className="space-y-4">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
          >
            <span className="font-bold">{stock.symbol}</span>

            <span>${stock.price.toFixed(2)}</span>

            <span
              className={
                stock.change >= 0
                  ? "font-bold text-green-600"
                  : "font-bold text-red-600"
              }
            >
              {stock.change >= 0 ? "+" : ""}
              {stock.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}