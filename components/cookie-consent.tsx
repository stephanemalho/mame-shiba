"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Cookie } from "lucide-react"

const GOOGLE_CONSENT_GRANTED = {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
} as const

const GOOGLE_CONSENT_DENIED = {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
} as const

export default function CookieConsent() {
    const [consent, setConsent] = useState<"accepted" | "denied" | "unknown">("unknown")
    const [open, setOpen] = useState(false)

    function updateGoogleConsent(granted: boolean) {
        try {
            const gtag = (window as any).gtag
            if (!gtag) return

            gtag("consent", "update", granted ? GOOGLE_CONSENT_GRANTED : GOOGLE_CONSENT_DENIED)
            gtag("set", "ads_data_redaction", !granted)
        } catch { }
    }

    useEffect(() => {
        try {
            const stored = localStorage.getItem("cookie_consent")
            if (stored === "accepted" || stored === "denied") {
                setConsent(stored)
                setOpen(false)
            } else {
                setConsent("unknown")
                setOpen(true)
            }
        } catch (e) {
            setConsent("unknown")
            setOpen(true)
        }
    }, [])

    function notifyConsentChange() {
        try {
            window.dispatchEvent(new Event("cookie-consent-updated"))
        } catch { }
    }

    function accept() {
        try {
            localStorage.setItem("cookie_consent", "accepted")
        } catch { }
        updateGoogleConsent(true)
        setConsent("accepted")
        setOpen(false)
        notifyConsentChange()
    }

    function clearGACookies() {
        try {
            // Best-effort remove common GA cookies
            const cookies = document.cookie.split(";")
            cookies.forEach((c) => {
                const name = c.split("=")[0].trim()
                if (/_ga|_gid|_gat|gac_/.test(name)) {
                    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${location.hostname}`
                }
            })
        } catch { }
    }

    function removeLegacyGAScripts() {
        try {
            const scripts = Array.from(document.querySelectorAll('script[data-cookie-consent^="ga"]'))
            scripts.forEach((s) => s.parentElement?.removeChild(s))
        } catch (e) {
            console.warn("cookie-consent: failed to remove legacy GA scripts", e)
        }
    }

    function decline() {
        try {
            localStorage.setItem("cookie_consent", "denied")
        } catch { }
        try {
            updateGoogleConsent(false)
            clearGACookies()
            removeLegacyGAScripts()
        } catch { }
        setConsent("denied")
        setOpen(false)
        notifyConsentChange()
    }

    // Google tags are loaded only after explicit consent.
    useEffect(() => {
        if (consent === "accepted") {
            updateGoogleConsent(true)
            removeLegacyGAScripts()
        } else if (consent === "denied") {
            updateGoogleConsent(false)
            removeLegacyGAScripts()
            clearGACookies()
        }
    }, [consent])

    return (
        <>
            {/* Google consent is updated here after the visitor makes a choice. */}

            {/* Banner/modal */}
            {open && (
                <div className="fixed w-full bottom-4 z-50 md:bottom-8">
                    <div className="max-w-4xl mx-auto h-40 bg-background/95 backdrop-blur border p-4 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                        <div className="flex-1 text-sm text-muted-foreground">
                            Nous utilisons des cookies pour améliorer votre expérience, mesurer l'audience et suivre nos campagnes.
                            Acceptez-vous les cookies d'analyse et publicitaires ?   <Button variant="ghost" onClick={decline} className="px-4 py-2 rounded-md">
                                Refuser
                            </Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button onClick={accept} className="bg-primary text-primary-foreground px-4 py-2 font-semibold">
                                Accepter
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Small manager button to change choice */}
            {consent !== "unknown" && (
                <button
                    aria-label="Gérer les cookies"
                    title="Gérer les cookies"
                    onClick={() => setOpen(true)}
                    className="fixed bottom-4 left-4 z-40 bg-background/60 text-primary border border-primary px-2 py-2 rounded-full text-sm shadow-md cursor-pointer hover:bg-accent transition"
                >
                    <Cookie />
                </button>
            )}
        </>
    )
}
