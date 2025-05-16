import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Script from "next/script";

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
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-CZVX0BPCSE" strategy="afterInteractive"></Script>
    <Script id="google-analytics">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-CZVX0BPCSE');
      `}
    </Script>
      <body
        className={`antialiased ${openSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
