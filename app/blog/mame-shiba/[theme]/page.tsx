import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogList from "@/app/blog/_components/BlogList";
import { blog } from "@/constants/blog/blog";
import { buildOpenGraph, buildTwitter, pageMetadata, siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateCollectionPageSchema } from "@/lib/schema-generators";

type MameShibaThemePageProps = {
    params: { theme: string } | Promise<{ theme: string }>;
};

export function generateStaticParams() {
    return blog.themes.map((theme) => ({ theme: theme.slug }));
}

export async function generateMetadata({
    params,
}: MameShibaThemePageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const theme = decodeURIComponent(resolvedParams.theme);
    const themeData = blog.themes.find((item) => item.slug === theme);

    if (!themeData) {
        return {
            title: pageMetadata.blog.title,
            description: pageMetadata.blog.description,
            alternates: {
                canonical: new URL("/blog/mame-shiba", siteConfig.siteUrl).toString(),
            },
        };
    }

    const title = `${themeData.label} | Blog Mame Shiba`;
    const description =
        themeData.description ?? pageMetadata.blog.description;
    const canonicalPath = `/blog/mame-shiba/${themeData.slug}`;

    return {
        title,
        description,
        keywords: pageMetadata.blog.keywords,
        alternates: {
            canonical: new URL(canonicalPath, siteConfig.siteUrl).toString(),
        },
        openGraph: buildOpenGraph({
            title,
            description,
            url: new URL(canonicalPath, siteConfig.siteUrl).toString(),
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
            title,
            description,
            imageUrl: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
        }),
    };
}

export default async function MameShibaThemePage({ params }: MameShibaThemePageProps) {
    const resolvedParams = await params;
    const theme = decodeURIComponent(resolvedParams.theme);
    const themeData = blog.themes.find((item) => item.slug === theme);

    if (!themeData) {
        notFound();
    }

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Blog Mame Shiba", url: "/blog/mame-shiba" },
        { name: themeData.label, url: `/blog/mame-shiba/${themeData.slug}` },
    ]);
    const collectionSchema = generateCollectionPageSchema({
        name: `${themeData.label} | Blog Mame Shiba`,
        description: themeData.description ?? pageMetadata.blog.description,
        url: new URL(`/blog/mame-shiba/${themeData.slug}`, siteConfig.siteUrl).toString(),
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
            <BlogList base="mame-shiba" theme={theme} />
        </>
    );
}
