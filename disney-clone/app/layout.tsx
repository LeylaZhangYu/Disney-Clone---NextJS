import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

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
      <body className="bg-white dark:bg-black">
        <Header />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          </ThemeProvider>
        {children}
      </body>
    </html>
  );
}
