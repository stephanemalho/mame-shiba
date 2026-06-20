import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import CookieConsent from "../components/cookie-consent"
import AnalyticsConsent from "../components/analytics-consent"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { siteConfig } from "@/lib/seo-config"
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema-generators"
import { Questrial } from "next/font/google"

const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

const iconVersion = "v2"
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18234888597"
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID
const googleTagIds = [googleAdsId, googleAnalyticsId].filter(
  (id, index, array): id is string => Boolean(id) && array.indexOf(id) === index
)

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
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
      { url: `/apple-icon.png?${iconVersion}`, type: "image/png", sizes: "512x512" },
    ],
  },

  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
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
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            var storedCookieConsent = null;
            try {
              storedCookieConsent = localStorage.getItem('cookie_consent');
            } catch (error) {}
            var hasGoogleConsent = storedCookieConsent === 'accepted';
            gtag('consent', 'default', {
              ad_storage: hasGoogleConsent ? 'granted' : 'denied',
              analytics_storage: hasGoogleConsent ? 'granted' : 'denied',
              ad_user_data: hasGoogleConsent ? 'granted' : 'denied',
              ad_personalization: hasGoogleConsent ? 'granted' : 'denied',
              wait_for_update: hasGoogleConsent ? 0 : 500
            });
            gtag('set', 'ads_data_redaction', !hasGoogleConsent);
          `}
        </Script>
        <Script
          id="google-tag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-config" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            ${googleTagIds.map((id) => `gtag('config', '${id}');`).join("\n")}
          `}
        </Script>

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
