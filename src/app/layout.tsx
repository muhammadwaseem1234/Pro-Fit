import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro-Fit",
  description: "This is a product of Pro-fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthLayoutChecker>
          {children}
        </AuthLayoutChecker>
      </body>
    </html>
  );
}

function AuthLayoutChecker({ children }: { children: React.ReactNode }) {
  // This will be rendered on the client side where we can check the pathname
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup');

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAuthRoute && <Footer />}
    </>
  );
}