import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
