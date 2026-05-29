import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import {
  SEO_BRAND_NAME,
  SEO_CANONICAL_URL,
  SEO_CATEGORY,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_LANGUAGE,
  SEO_LOCALE,
  SEO_OG_IMAGE,
  SEO_SHORT_DESCRIPTION,
  SEO_SITE_NAME,
  SEO_SITE_URL,
  SEO_THEME_COLOR,
  SEO_TITLE,
  SEO_TITLE_TEMPLATE,
} from "@/constants/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_SITE_URL),
  title: {
    default: SEO_TITLE,
    template: SEO_TITLE_TEMPLATE,
  },
  verification: {
    yandex: process.env.YANDEX_VERIFICATION,
  },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: SEO_BRAND_NAME,
  category: SEO_CATEGORY,
  classification: "Сертификация, декларирование и разрешительная документация",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SEO_CANONICAL_URL,
  },
  openGraph: {
    type: "website",
    locale: SEO_LOCALE,
    url: SEO_CANONICAL_URL,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    siteName: SEO_SITE_NAME,
    images: [
      {
        url: SEO_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SEO_SITE_NAME} — Open Graph`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_SHORT_DESCRIPTION,
    images: [SEO_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SEO_BRAND_NAME,
  },
  other: {
    "theme-color": SEO_THEME_COLOR,
    "color-scheme": "light",
    language: SEO_LANGUAGE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${manrope.className}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <CookieConsent privacyHref="/privacy" />
      </body>
    </html>
  );
}
