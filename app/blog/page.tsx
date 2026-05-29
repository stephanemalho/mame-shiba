import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

import { isBlogEnabled } from "@/lib/blog-visibility";
import { buildOpenGraph, buildTwitter, pageMetadata, siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: pageMetadata.blog.title,
    description: pageMetadata.blog.description,
    keywords: pageMetadata.blog.keywords,
    alternates: {
        canonical: new URL("/blog/mame-shiba", siteConfig.siteUrl).toString(),
    },
    openGraph: buildOpenGraph({
        title: pageMetadata.blog.title,
        description: pageMetadata.blog.description,
        url: new URL("/blog/mame-shiba", siteConfig.siteUrl).toString(),
        type: "website",
        images: [
            {
                url: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
                alt: siteConfig.ogImageAlt,
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.blog.title,
        description: pageMetadata.blog.description,
        imageUrl: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
    }),
};

export default function BlogPage() {
    if (!isBlogEnabled) {
        notFound();
    }

    permanentRedirect("/blog/mame-shiba");
}
