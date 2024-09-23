import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from './context/AuthContext';

export const metadata: Metadata = {
  title: "Welcome to LearnerX - E-Learning Platform",
  description: "LearnerX Platform provides you with various courses on web development and web designing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-helvetica">
        <div className="px-8 md:px-24 pb-12">
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
