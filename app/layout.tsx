import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to LearnerX - E-Learning Platform",
  description: "LearnerX Platform provides you the various courses web development, web desinging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="px-8 md:px-24 pb-12">
        <Header/>
        {children}
        <Footer/>
      </div>
      </body>
    </html>
  );
}
