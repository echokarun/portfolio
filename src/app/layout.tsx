import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karun Rayamajhi | Frontend & DevOps Engineer",
  description:
    "Portfolio of Karun Rayamajhi — Frontend & DevOps Engineer based in Kathmandu, Nepal. Building production-grade web and mobile applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Karun Rayamajhi | Frontend & DevOps Engineer",
    description:
      "Frontend & DevOps Engineer building production-grade web and mobile apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karun Rayamajhi | Frontend & DevOps Engineer",
    description:
      "Frontend & DevOps Engineer building production-grade web and mobile apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.classList.add("light")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Animated gradient orb background */}
        <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="orb orb-purple" />
          <div className="orb orb-cyan" />
          <div className="orb orb-pink" />
          <div className="absolute inset-0 grid-overlay opacity-[0.025]" />
        </div>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
