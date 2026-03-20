import type { MetadataRoute } from "next";

import { blog } from "@/constants/blog/blog";
import { siteConfig, sitemapPages } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.siteUrl;
    const toUrl = (path: string) => new URL(path, baseUrl).toString();

    const staticPages: MetadataRoute.Sitemap = sitemapPages.map((page) => ({
        url: toUrl(page.url),
        lastModified: page.lastmod,
        changeFrequency: page.changefreq as
            | "always"
            | "hourly"
            | "daily"
            | "weekly"
            | "monthly"
            | "yearly"
            | "never",
        priority: page.priority
    }));

    const blogListEntry: MetadataRoute.Sitemap[number] = {
        url: toUrl("/blog/mame-shiba"),
        changeFrequency: "weekly",
        priority: 0.8,
        lastModified: "2026-03-20"
    };

    const blogThemeEntries: MetadataRoute.Sitemap = blog.themes.map(
        (theme): MetadataRoute.Sitemap[number] => ({
            url: toUrl(`/blog/mame-shiba/${theme.slug}`),
            changeFrequency: "monthly",
            priority: 0.6,
            lastModified: "2026-03-20"
        })
    );

    const blogPostEntries: MetadataRoute.Sitemap = blog.posts.map(
        (post): MetadataRoute.Sitemap[number] => ({
            url: toUrl(`/blog/${post.slug}`),
            lastModified: post.date,
            changeFrequency: "monthly",
            priority: 0.7
        })
    );

    return [
        ...staticPages,
        blogListEntry,
        ...blogThemeEntries,
        ...blogPostEntries
    ];
}
