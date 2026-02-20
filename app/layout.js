import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StepUP",
  description:
    "A beautiful walking tracker that helps you stay active, monitor your health, and build lasting habits.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "StepUP",
    description:
      "A beautiful walking tracker that helps you stay active, monitor your health, and build lasting habits.",
    type: "website",
    images: [
      {
        url: "/og-graph.jpg",
        width: 1200,
        height: 630,
        alt: "StepUP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StepUP",
    description:
      "A beautiful walking tracker that helps you stay active, monitor your health, and build lasting habits.",
    images: ["/og-graph.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="relative min-h-screen bg-white overflow-hidden border-x border-zinc-200/60 max-w-[1440px] mx-auto flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
