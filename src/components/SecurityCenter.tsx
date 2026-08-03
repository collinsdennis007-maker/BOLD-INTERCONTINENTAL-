export default function SecurityCenter() {
  const items = [
    {
      title: "Two-Factor Authentication",
      status: "Enabled",
      color: "text-green-600",
    },
    {
      title: "Biometric Login",
      status: "Active",
      color: "text-green-600",
    },
    {
      title: "Last Login",
      status: "London • Today 09:42",
      color: "text-slate-600",
    },
    {
      title: "Fraud Monitoring",
      status: "Protected",
      color: "text-green-600",
    },
  ];

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-xl">
      <h2 className="mb-8 text-2xl font-bold">
        Security Center
      </h2>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-5"
          >
            <span className="font-semibold">
              {item.title}
            </span>

            <span className={`font-bold ${item.color}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}