import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";
import Header from "./custom-comp/Header";

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feedback for CloudKinshuk.in",
  description: "Give your feedback to improve CloudKinshuk.in and the blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${vt323.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
