import type { MetadataRoute } from "next";

import { blog } from "@/constants/blog/blog";
import { puppies } from "@/app/chiots-disponibles/puppies";
import { getPuppyLastModified, getPuppyListSeoImageSources, getPuppySeoImageSources, getPuppyUrl } from "@/app/chiots-disponibles/puppy-seo";
import { isBlogEnabled } from "@/lib/blog-visibility";
import { seoLastmod, siteConfig, sitemapPages } from "@/lib/seo-config";
import { galleryImageItems } from "@/lib/social-gallery";

const staticPageImages: Record<string, string[]> = {
    "/": [
        "/pages/mameshiba-desktop.jpg",
        "/pages/homePage/mame-shiba-in-a-sakura-tree/webp/mame-shiba-in-a-sakura-tree-desktop.webp",
        "/pages/homePage/cloe-eleveuse-avec-mameshiba-et-shiba/webp/cloe-eleveuse-avec-mameshiba-et-shiba-desktop.webp",
    ],
    "/mameshiba": [
        "/pages/homePage/mame-shiba-for-modern-life.jpeg",
        "/pages/homePage/shiba-vs-mameshiba/webp/shiba-vs-mameshiba-desktop.webp",
        "/pages/le-mame-shiba/chiot-mameshiba-noir-et-blanc-male/webp/chiot-mameshiba-noir-et-blanc-male-desktop.webp",
    ],
    "/nos-chiens": [
        "/pages/reproducteurs/YUMI-femelle-mame-shiba-couleur-feu.webp",
        "/pages/reproducteurs/yumi-mame-shiba-kawaii-shiba-portrait.webp",
        "/pages/reproducteurs/waru-mame-shiba-kawaii-shiba-portrait.webp",
    ],
    "/presentation-elevage": [
        "/pages/homePage/mame-shiba-good-caractere.jpg",
        "/pages/image-all-shiba/jardin-cloture-elevage-horizontal.webp",
        "/pages/image-all-shiba/mameshiba-parmi-les-branches.webp",
    ],
    "/presentation-eleveuses": [
        "/pages/les-eleveuses/marine-aurelie-et-clea-avec-trois-mame-shiba-de-elevage-kawaii.jpeg",
        "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg",
        "/assets/authors/marine-walking-dogs.jpeg",
    ],
    "/mame-shiba-prix": [
        "/pages/image-all-shiba/mameshiba-exterieur-profil-01.webp",
        "/pages/image-all-shiba/visuel-texte-mameshiba-elevage-kawaii.webp",
        "/pages/mame-shiba-prix/trois-mame-shiba-bebe.jpg",
    ],
    "/galerie": galleryImageItems.map((item) => item.src),
};

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.siteUrl;
    const toUrl = (path: string) => new URL(path, baseUrl).toString();

    const visiblePuppies = puppies.filter((puppy) => !puppy.isReserved && !puppy.isAdopted);
    const puppyListImageUrls = getPuppyListSeoImageSources(visiblePuppies, 20).map(toUrl);

    const staticPages: MetadataRoute.Sitemap = sitemapPages.map((page) => {
        const pageImageUrls = staticPageImages[page.url]?.map(toUrl) ?? [];
        const images = page.url === siteConfig.pages.puppies
            ? puppyListImageUrls
            : pageImageUrls;

        return {
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
            ...(images.length > 0 ? { images } : {})
        };
    });

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

    const puppyEntries: MetadataRoute.Sitemap = visiblePuppies.map((puppy) => ({
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
