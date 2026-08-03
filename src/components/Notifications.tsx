export default function Notifications() {
  const notifications = [
    {
      title: "Salary Received",
      message: "$3,800 has been credited to your account.",
      time: "2 mins ago",
    },
    {
      title: "Card Purchase",
      message: "Apple Store • $799.00",
      time: "1 hour ago",
    },
    {
      title: "Security Alert",
      message: "New login detected from London.",
      time: "Today",
    },
    {
      title: "Investment Update",
      message: "Your portfolio increased by 8.42% this month.",
      time: "Today",
    },
  ];

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-xl">
      <h2 className="mb-8 text-2xl font-bold">
        Notifications
      </h2>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.title + item.time}
            className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-xs text-gray-500">
                {item.time}
              </span>
            </div>

            <p className="mt-2 text-gray-600">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}