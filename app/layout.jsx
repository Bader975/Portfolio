
import "@/app/globals.css";
// import "@/styles/fonts.css"; // Check if this is needed or if Lusitana handles it. 
// Ideally we move fonts.css content to globals.css or keep it if it loads local fonts.
import { Inter } from 'next/font/google';
import Navbar from "@/components/layout/NavBar";
import Script from "next/script";

// Configure Inter with a variable to pass to Tailwind
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});


export const metadata = {
  title: "Bader's Mohammad Portfolio",
  description: "This is my portfolio website showcasing my work and skills",
  keywords: "portfolio, web development, design, next.js, animations",
  authors: [{ name: "Bader Alyami" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },
  verification: {
    google: "OQtDBl4loczi5G1TaxIPG9iKNkDrpy0cfg16wleS3Qc",
  },
  openGraph: {
    type: "website",
    url: "https://www.bader-alyami.com/",
    title: "Bader's Mohammad Portfolio",
    description: "This is my portfolio website showcasing my work and skills.",
    images: [{ url: "https://github.com/Bader975/NEXT-Auth/assets/80196102/d019df5c-5d9d-44c7-bf8d-63f95fb5bb83" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.bader-alyami.com/", // original property: twitter:url
    title: "Bader's Mohammad Portfolio",
    description: "This is my portfolio website showcasing my work and skills.",
    images: ["https://github.com/Bader975/NEXT-Auth/assets/80196102/d019df5c-5d9d-44c7-bf8d-63f95fb5bb83"],
    // domain property isn't directly in standard Next.js metadata type but handled via other fields usually.
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
        <body className="min-h-screen bg-background font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
            <Navbar />
            <main>
                {children}
            </main>
            
            {/* JSON-LD Schema */}
            <Script
                id="json-ld"
                strategy="beforeInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: `
                {
                    "@context": "https://schema.org/",
                    "@type": "CreativeWork",
                    "name": "Bader Mohammad Portfolio",
                    "alternateName": ["BM", "BADER", "Bader's Portfolio"],
                    "url": "https://www.bader-alyami.com",
                    "image": "https://www.bader-alyami.com/bm-logo-remove-bg.png"
                }
                `,
                }}
            />
        </body>
    </html>
  );
}
