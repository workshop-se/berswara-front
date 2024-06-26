import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import Background from '@/ui/Background';

import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

const font = Sen({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berswara : Satu Swara Sangat Berarti",
  description: "Website Forum dan Edukasi Pemilu",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header/>
        <Background>
          {children}
        </Background>
        <Footer />
      </body>
    </html>
  );
}
