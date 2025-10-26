import type { Metadata } from "next";
import { Mona_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const mona_Sans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SuperSet",
  description: "AI powered platform for preparing aspiring techies for job-interviews at their dream companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mona_Sans.className} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
