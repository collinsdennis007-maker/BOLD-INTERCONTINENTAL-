import React from "react";

const notifications = [
  {
    title: "Salary Received",
    time: "Today • 09:30",
    status: "success",
  },
  {
    title: "International Transfer Completed",
    time: "Yesterday • 18:15",
    status: "success",
  },
  {
    title: "Security Check Completed",
    time: "Yesterday • 14:40",
    status: "info",
  },
  {
    title: "New Login Detected",
    time: "2 days ago",
    status: "warning",
  },
];

export default function Notifications() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-4xl font-black">
          Notifications
        </h1>

        <p className="mt-2 text-slate-500">
          Stay informed about everything happening on your account.
        </p>
      </div>

      <div className="space-y-4">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="rounded-3xl bg-white p-6 shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-1 text-slate-500">
                  {item.time}
                </p>

              </div>

            <div
  className={`h-4 w-4 rounded-full ${
    item.status === "success"
      ? "bg-green-500"
      : item.status === "warning"
      ? "bg-yellow-500"
      : "bg-red-500"
  <div
  className={`h-4 w-4 rounded-full ${
    item.status === "success"
      ? "bg-green-500"
      : item.status === "warning"
      ? "bg-yellow-500"
      : "bg-red-500"
  }`}
></div>