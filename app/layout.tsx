import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin panel |Lernen",
  description: "An LMS Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
      {/* <Sidebar/> */}

      {/* //   className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // > */}
      <main className="flex-1 p-6">

        {children}
      </main>

      </body>
    </html>
  );
}
