import { MetadataRoute } from "next";

import { isBlogEnabled } from "@/lib/blog-visibility";
import { siteConfig } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api",
                    "/wp-admin",
                    "/wp-content",
                    "/wp-includes",
                    ...(isBlogEnabled ? [] : ["/blog", "/blog/"])
                ]
            }
        ],
        sitemap: new URL("/sitemap.xml", siteConfig.siteUrl).toString()
    };
}
