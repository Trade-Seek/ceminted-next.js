import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ceminted — Trade & Seek (Coming Soon)",
  description: "A system of meaningful connections. Trade more sustainably.",
  keywords: ["trading", "ceminted", "sustainability", "connections"],
  authors: [{ name: "Ceminted Team" }],
  openGraph: {
    title: "Ceminted — Trade & Seek",
    description: "A system of meaningful connections. Trade more sustainably.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
