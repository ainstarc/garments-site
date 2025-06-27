import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garments Studio",
  description: "Discover and shop unique garment designs directly from the creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-black`}
      >
        <header className="p-4 shadow">
          <h1 className="text-xl font-bold">Garments Studio</h1>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
