import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Mahadi Hasan | Full Stack Developer",
  description: "Portfolio of Md. Mahadi Hasan, a Full Stack Web Developer and MERN Stack Developer building modern, scalable, and user-friendly web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 selection:bg-brand-blue/30 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
