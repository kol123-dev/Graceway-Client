import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Graceway AGC Kitale",
  description:
    "Graceway AGC Kitale - A dynamic family church in the heart of Kenya. We exist to lift up the name of Jesus and share the gospel from one to many.",
  icons: {
    icon: "/uploads/graceway-logos/graceway-logo-whitebg.png",
    shortcut: "/uploads/graceway-logos/graceway-logo-whitebg.png",
    apple: "/uploads/graceway-logos/graceway-logo-whitebg.png",
  },
  metadataBase: new URL("https://www.gracewayagc.co.ke"),
  openGraph: {
    title: "Graceway AGC Kitale",
    description:
      "A dynamic family church dedicated to sharing the gospel and lifting up the name of Jesus.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gracewaycc",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} no-js`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/theme/adaptable/style488c.css" />
        <link rel="stylesheet" href="/theme-overrides.css" />
      </head>
      <body
        className="bg-white text-gray-900 flex flex-col min-h-screen font-sans"
        suppressHydrationWarning
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
