import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "My own project following the youtube course by Sonny Songha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-">
        <Header />
        {children}
      </body>
    </html>
  );
}
