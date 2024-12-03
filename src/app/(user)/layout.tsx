import type { Metadata } from "next";
import "../../styles/globals.css";
import "../../styles/typography.css";

import {
  inter,
  montserrat,
  poppins,
  atkinsonHyperlegible,
} from "../../styles/fonts";
import { Navbar } from "../components/layout/navbar/navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable} ${atkinsonHyperlegible.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}