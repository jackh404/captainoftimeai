import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Captain of Time's AI",
  description: "I didn't feel like paying $20/month anymore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          Copyright © 2024 - All right reserved
        </footer>
      </body>
    </html>
  );
}
