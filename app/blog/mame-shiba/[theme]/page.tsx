import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogList from "@/app/blog/_components/BlogList";
import { blog } from "@/constants/blog/blog";
import { buildOpenGraph, pageMetadata, siteConfig } from "@/lib/seo-config";

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
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()],
        },
    };
}

export default async function MameShibaThemePage({ params }: MameShibaThemePageProps) {
    const resolvedParams = await params;
    const theme = decodeURIComponent(resolvedParams.theme);
    const isValidTheme = blog.themes.some((item) => item.slug === theme);

    if (!isValidTheme) {
        notFound();
    }

    return <BlogList base="mame-shiba" theme={theme} />;
}
