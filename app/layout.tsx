import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circularStdBook = localFont({
  src: "./fonts/CircularStd-Book.otf",
  variable: "--font-CircularStd-Book",
  style: "normal",
  display: "swap",
});

const circularStdMedium = localFont({
  src: "./fonts/circular-std-medium-500.ttf",
  variable: "--font-CircularStd-Medium",
  style: "normal",
  display: "swap",
});

const circularStdBold = localFont({
  src: "./fonts/CircularStd-Bold.otf",
  variable: "--font-CircularStd-Bold",
  style: "normal",
  display: "swap",
});

const recoletaRegular = localFont({
  src: "./fonts/recoleta-regulardemo.otf",
  variable: "--font-recoleta-regular",
  style: "normal",
  display: "swap",
});

const recoletaAltBold = localFont({
  src: "./fonts/RecoletaAlt-Bold.ttf",
  variable: "--font-recoleta-alt-bold",
  style: "bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dutiful",
  description: "List and grow your business  with just few clicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${circularStdBook.variable} ${circularStdMedium.variable} 
            ${recoletaRegular.variable} ${recoletaAltBold.variable} 
            ${circularStdBold.variable} font-circular-std-book  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
