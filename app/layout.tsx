import type React from "react"
import type { Metadata } from "next"
import CookieConsent from "../components/cookie-consent"
import AnalyticsConsent from "../components/analytics-consent"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { buildOpenGraph, buildTwitter, siteConfig } from "@/lib/seo-config"
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema-generators"
import { Questrial } from "next/font/google"

const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

const iconVersion = "v2"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  icons: {
    icon: [
      { url: `/favicon.ico?${iconVersion}`, type: "image/x-icon", sizes: "any" },
      { url: `/icon.png?${iconVersion}`, type: "image/png", sizes: "512x512" },
    ],
    shortcut: [
      { url: `/favicon.ico?${iconVersion}`, type: "image/x-icon" },
    ],
    apple: [
      { url: `/apple-touch-icon.png?${iconVersion}`, type: "image/png", sizes: "512x512" },
    ],
  },

  // Open Graph
  openGraph: buildOpenGraph({
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    images: [
      {
        url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
        alt: siteConfig.ogImageAlt,
      },
    ],
  }),

  // Twitter Card
  twitter: buildTwitter({
    title: siteConfig.title,
    description: siteConfig.description,
    imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  }),

  // Autres métadonnées
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  other: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Analytics will be injected by the client cookie consent manager */}

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={questrial.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main id="main-content" className="px-4 sm:px-6 lg:px-8 flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <CookieConsent />
          <AnalyticsConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
