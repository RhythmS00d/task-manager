import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//components import
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Task Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-primary w-2/3 mx-auto container"}>
        <main className="rounded-md flex flex-col">
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
}
