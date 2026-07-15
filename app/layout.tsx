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
        {/* #region debug-point A:pre-hydration-dom */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{const u="http://127.0.0.1:7777/event",s="hero-hydration-mismatch",p=(m,d)=>fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:s,runId:"pre-fix",hypothesisId:"A",location:"app/layout.tsx:head",msg:m,data:d,ts:Date.now()})}).catch(()=>{}),sample=()=>Array.from(document.querySelectorAll("[data-trae-ref]")).slice(0,5).map((n)=>({tag:n.tagName,ref:n.getAttribute("data-trae-ref"),cls:n.className||""}));p("[DEBUG] head-script-init",{readyState:document.readyState,traeRefCount:document.querySelectorAll("[data-trae-ref]").length,sample:sample()});new MutationObserver(()=>{const c=document.querySelectorAll("[data-trae-ref]").length;if(c){p("[DEBUG] trae-ref-detected-before-hydration",{readyState:document.readyState,traeRefCount:c,sample:sample()})}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:["data-trae-ref"]});document.addEventListener("DOMContentLoaded",()=>p("[DEBUG] dom-content-loaded",{readyState:document.readyState,traeRefCount:document.querySelectorAll("[data-trae-ref]").length,sample:sample()}),{once:true});})();`,
          }}
        />
        {/* #endregion */}
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
