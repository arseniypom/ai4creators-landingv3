import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InstaGrow - Sell With Your Content",
  description:
    "Get scripts built for YOUR audience — not random ideas. Based on proven winners. Ready to film every week.",
  keywords: [
    "AI content creation",
    "Instagram reels",
    "sales scripts",
    "creator tools",
    "AI reels",
  ],
  authors: [{ name: "InstaGrow" }],
  openGraph: {
    title: "InstaGrow - Create Reels That Sell",
    description:
      "Get scripts built for YOUR audience — not random templates. Based on proven winners. Ready to film every week.",
    type: "website",
    locale: "en_US",
    siteName: "InstaGrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaGrow - Create Reels That Sell",
    description:
      "Get scripts built for YOUR audience — not random templates. Based on proven winners.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.variable}>
        {children}
      </body>
    </html>
  );
}
