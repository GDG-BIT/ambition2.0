import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ambition 2.0 - The Ultimate Hackathon Experience",
  description: "Join Ambition 2.0, a premier hackathon featuring multiple tracks including Game Development, Web Development, AI/ML, and Mobile App Development. Compete for amazing prizes and showcase your innovative solutions!",
  keywords: "hackathon, coding competition, game development, web development, AI, ML, mobile apps, programming contest, tech event",
  authors: [{ name: "Ambition Team" }],
  openGraph: {
    title: "Ambition 2.0 - The Ultimate Hackathon Experience",
    description: "Join Ambition 2.0, a premier hackathon featuring multiple tracks and amazing prizes. Register now!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambition 2.0 - The Ultimate Hackathon Experience",
    description: "Join Ambition 2.0, a premier hackathon featuring multiple tracks and amazing prizes. Register now!",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
