import type { Metadata } from "next";

import BlogList from "@/app/blog/_components/BlogList";
import { buildOpenGraph, buildTwitter, pageMetadata, siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateCollectionPageSchema } from "@/lib/schema-generators";

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

export default function MameShibaBlogPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Blog Mame Shiba", url: "/blog/mame-shiba" },
    ]);
    const collectionSchema = generateCollectionPageSchema({
        name: pageMetadata.blog.title,
        description: pageMetadata.blog.description,
        url: new URL("/blog/mame-shiba", siteConfig.siteUrl).toString(),
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <BlogList base="mame-shiba" />
        </>
    );
}
