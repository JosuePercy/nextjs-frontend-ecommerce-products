import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "@/components/banner/Banner";
import Filters from "@/components/filters/Filters";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar/>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
