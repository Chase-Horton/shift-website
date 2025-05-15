import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Shift Auto Society",
  description: "A country club for cars.",
};

const openSans = Open_Sans({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${openSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
