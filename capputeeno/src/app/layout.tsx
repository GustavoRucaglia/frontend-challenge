import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "../compoents/header";
import { FilterContextProvider } from "../context/filter.context";

const saira = Saira({ 
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
        <Header/>
        {children}
        </FilterContextProvider>
        </body>
    </html>
  );
}
