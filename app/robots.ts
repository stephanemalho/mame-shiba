import { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api", "/wp-admin", "/wp-content", "/wp-includes"]
            }
        ],
        sitemap: new URL("/sitemap.xml", siteConfig.siteUrl).toString()
    };
}
