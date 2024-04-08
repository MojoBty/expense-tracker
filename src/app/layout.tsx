import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.scss";

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses and income",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased bg-[#f2f3f4]",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
