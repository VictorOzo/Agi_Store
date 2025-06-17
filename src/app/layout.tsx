import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Agi by Agi store",
  description: "Online store for Agi products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
