import { permanentRedirect } from "next/navigation"
import type { Metadata } from "next"

import { buildOpenGraph, buildTwitter, pageMetadata, siteConfig } from "@/lib/seo-config"

const pageImage = "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg"

export const metadata: Metadata = {
    title: pageMetadata.adoptionGuide.title,
    description: pageMetadata.adoptionGuide.description,
    keywords: pageMetadata.adoptionGuide.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.adoptionGuide.title,
        description: pageMetadata.adoptionGuide.description,
        url: `${siteConfig.siteUrl}/adoption`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Chiot Mameshiba accompagné pour réussir son adoption",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.adoptionGuide.title,
        description: pageMetadata.adoptionGuide.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/adoption/reussir-son-adoption`,
    },
}

export default function AdoptionPage() {
    permanentRedirect("/adoption/reussir-son-adoption")
}
