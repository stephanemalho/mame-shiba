import { blog } from "@/constants/blog/blog";
import { isBlogEnabled } from "@/lib/blog-visibility";
import { publicAssetRoutes } from "@/lib/generated-public-asset-paths";
import { sitemapPages, siteConfig } from "@/lib/seo-config";

const EXTRA_STATIC_PAGE_ROUTES = ["/adoption"] as const;

const APP_METADATA_ROUTES = [
    "/robots.txt",
    "/sitemap.xml",
    "/favicon.ico",
    "/icon.png",
    "/apple-icon.png",
] as const;

const TECHNICAL_ROUTE_PREFIXES = [
    "/_next/",
    "/_vercel/",
    "/__nextjs_",
] as const;

const TECHNICAL_EXACT_ROUTES = [
    "/manifest.webmanifest",
    "/site.webmanifest",
    "/manifest.json",
    "/browserconfig.xml",
] as const;

const normalizeSlashes = (pathname: string) => pathname.replace(/\/{2,}/g, "/");

const decodePathname = (pathname: string) => {
    try {
        return decodeURI(pathname);
    } catch {
        return pathname;
    }
};

export const normalizePathname = (pathname: string): string => {
    const normalized = normalizeSlashes(decodePathname(pathname));

    if (normalized === "/") {
        return normalized;
    }

    const withoutTrailingSlash = normalized.replace(/\/+$/, "");

    return withoutTrailingSlash || "/";
};

const toPathSet = (paths: Iterable<string>): ReadonlySet<string> =>
    new Set(Array.from(paths, (path) => normalizePathname(path)));

const staticPageRoutes = [
    ...Object.values(siteConfig.pages),
    ...sitemapPages.map((page) => page.url),
    ...EXTRA_STATIC_PAGE_ROUTES,
] as const;

const blogRoutes = isBlogEnabled
    ? [
          "/blog",
          "/blog/mame-shiba",
          ...blog.themes.map((theme) => `/blog/mame-shiba/${theme.slug}`),
          ...blog.posts.map((post) => `/blog/${post.slug}`),
      ]
    : [];

const exactAllowedRoutes = [
    ...staticPageRoutes,
    ...blogRoutes,
    ...APP_METADATA_ROUTES,
    ...publicAssetRoutes,
    ...TECHNICAL_EXACT_ROUTES,
];

export const allowedExactPathnames = toPathSet(exactAllowedRoutes);

export const isAllowedRequestPath = (pathname: string): boolean => {
    const normalizedPathname = normalizePathname(pathname);

    if (allowedExactPathnames.has(normalizedPathname)) {
        return true;
    }

    if (
        TECHNICAL_ROUTE_PREFIXES.some((prefix) =>
            normalizedPathname.startsWith(prefix)
        )
    ) {
        return true;
    }

    return false;
};
