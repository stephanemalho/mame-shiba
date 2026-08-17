"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

type ConsentState = "accepted" | "denied" | "unknown"

export default function GoogleTagsConsent() {
  const [consent, setConsent] = useState<ConsentState>("unknown")

  useEffect(() => {
    const readConsent = () => {
      try {
        const stored = localStorage.getItem("cookie_consent")
        if (stored === "accepted" || stored === "denied") {
          setConsent(stored)
          return
        }
      } catch {}
      setConsent("unknown")
    }

    readConsent()
    window.addEventListener("cookie-consent-updated", readConsent)
    return () => window.removeEventListener("cookie-consent-updated", readConsent)
  }, [])

  if (consent !== "accepted" || !GA_ID) return null

  return (
    <>
      <Script id="google-tag-consent-granted" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            analytics_storage: 'granted'
          });
        `}
      </Script>
      <Script
        id="google-tag-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
