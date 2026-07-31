import React from "react";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({
  title,
  children,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="mx-auto max-w-7xl p-6 md:p-10">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-pink-600">
            {title}
          </h1>

          <p className="mt-2 text-slate-500">
            BOLD INTERCONTINENTAL • Premium Banking
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}