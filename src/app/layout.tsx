import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/Header";
import { findAuth } from "@/shared/service/auth";
import PageTitle from "@/shared/components/PageTitle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authMe = await findAuth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header authMe={authMe} />
        <PageTitle />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
