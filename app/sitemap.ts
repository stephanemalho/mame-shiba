import type { MetadataRoute } from "next";

import { blog } from "@/constants/blog/blog";
import { puppies } from "@/app/chiots-disponibles/puppies";
import { getPuppyLastModified, getPuppyListSeoImageSources, getPuppySeoImageSources, getPuppyUrl } from "@/app/chiots-disponibles/puppy-seo";
import { isBlogEnabled } from "@/lib/blog-visibility";
import { seoLastmod, siteConfig, sitemapPages } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.siteUrl;
    const toUrl = (path: string) => new URL(path, baseUrl).toString();

    const visiblePuppies = puppies.filter((puppy) => !puppy.isAdopted);
    const puppyListImageUrls = getPuppyListSeoImageSources(visiblePuppies, 20).map(toUrl);

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
        priority: page.priority,
        ...(page.url === siteConfig.pages.puppies && puppyListImageUrls.length > 0
            ? { images: puppyListImageUrls }
            : {})
    }));

    const blogEntries: MetadataRoute.Sitemap = isBlogEnabled
        ? [
              {
                  url: toUrl("/blog/mame-shiba"),
                  changeFrequency: "weekly",
                  priority: 0.8,
                  lastModified: seoLastmod
              },
              ...blog.themes.map(
                  (theme): MetadataRoute.Sitemap[number] => ({
                      url: toUrl(`/blog/mame-shiba/${theme.slug}`),
                      changeFrequency: "monthly",
                      priority: 0.6,
                      lastModified: seoLastmod
                  })
              ),
              ...blog.posts.map(
                  (post): MetadataRoute.Sitemap[number] => ({
                      url: toUrl(`/blog/${post.slug}`),
                      lastModified: seoLastmod,
                      changeFrequency: "monthly",
                      priority: 0.7
                  })
              )
          ]
        : [];

    const puppyEntries: MetadataRoute.Sitemap = puppies.map((puppy) => ({
        url: toUrl(getPuppyUrl(puppy)),
        lastModified: getPuppyLastModified(puppy) ?? seoLastmod,
        changeFrequency: "weekly",
        priority: puppy.isReserved || puppy.isAdopted ? 0.65 : 0.85,
        images: puppy.images.flatMap((image) =>
            getPuppySeoImageSources(image).map(toUrl)
        ),
    }));

    return [
        ...staticPages,
        ...puppyEntries,
        ...blogEntries
    ];
}
