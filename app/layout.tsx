import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ScrollProgress from "@/components/ui/scrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksandra Portfolio",
  description:
    "Explore my portfolio showcasing the art of Full Stack Development with a passion for Frontend wizardry. Witness a symphony of code, creativity, and functionality as I bring your digital dreams to life. Discover my web development expertise today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          overflowX: "hidden",
        }}
      >
        <ScrollProgress />
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
