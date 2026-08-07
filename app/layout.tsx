import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superbae — Become the person you've always wanted to be",
  description:
    "Superbae is a year-long transformation journey for your body, mind, relationship, learning and wealth. Built on habits, driven by community, designed for real change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
