import type { MetadataRoute } from "next";

import { blog } from "@/constants/blog/blog";
import { seoLastmod, siteConfig, sitemapPages } from "@/lib/seo-config";

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
        lastModified: seoLastmod
    };

    const blogThemeEntries: MetadataRoute.Sitemap = blog.themes.map(
        (theme): MetadataRoute.Sitemap[number] => ({
            url: toUrl(`/blog/mame-shiba/${theme.slug}`),
            changeFrequency: "monthly",
            priority: 0.6,
            lastModified: seoLastmod
        })
    );

    const blogPostEntries: MetadataRoute.Sitemap = blog.posts.map(
        (post): MetadataRoute.Sitemap[number] => ({
            url: toUrl(`/blog/${post.slug}`),
            lastModified: seoLastmod,
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
