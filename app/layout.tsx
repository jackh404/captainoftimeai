import type { Metadata } from "next";
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
      <head></head>
      <body>{children}</body>
      <footer></footer>
    </html>
  );
}
