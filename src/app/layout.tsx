import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CalendlyPrefetcher from "@/components/CalendlyPrefetcher";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CALENDLY_EMBED_URL } from "@/config/booking";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miu Media | Content-Powered Client Acquisition",
  description: "Digital marketing and brand design agency specializing in helping architects and interior designers attract high-value clients.",
  icons: {
    icon: [
      { url: "/miu-logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/miu-logo.png", type: "image/png" }],
    shortcut: "/miu-logo.png",
  },
  openGraph: {
    title: "Miu Media | Content-Powered Client Acquisition",
    description: "Digital marketing and brand design agency specializing in helping architects and interior designers attract high-value clients.",
    images: ["/miu-logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Calendly performance: preconnect eliminates DNS+TCP+TLS cold-start latency */}
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly-uploads.s3.amazonaws.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://api.calendly.com" />
        {/* Prefetch the Calendly page itself so the browser warms the resource */}
        <link rel="prefetch" href={CALENDLY_EMBED_URL} as="document" />
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-black text-[#F2F2F2] selection:bg-[#FF8500]/30 selection:text-white">
        <SmoothScroll>
          <CalendlyPrefetcher />
          {children}
        </SmoothScroll>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
