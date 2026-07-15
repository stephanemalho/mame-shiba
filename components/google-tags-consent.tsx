"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18234888597"
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const GOOGLE_TAG_IDS = [GOOGLE_ADS_ID, GA_ID].filter(
  (id, index, array): id is string => Boolean(id) && array.indexOf(id) === index
)

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

  if (consent !== "accepted") return null

  return (
    <>
      <Script id="google-tag-consent-granted" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted'
          });
          gtag('set', 'ads_data_redaction', false);
        `}
      </Script>
      <Script
        id="google-tag-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          ${GOOGLE_TAG_IDS.map((id) => `gtag('config', '${id}');`).join("\n")}
        `}
      </Script>
    </>
  )
}
