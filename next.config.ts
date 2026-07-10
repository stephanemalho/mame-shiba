import type { NextConfig } from "next";

const isBlogEnabled = process.env.NEXT_PUBLIC_ENABLE_BLOG !== "false";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        qualities: [60, 70, 75, 80, 85, 88, 90]
    },
    async headers() {
        return [
            {
                source: "/:path*\\.(jpg|jpeg|png|webp|avif|gif|svg|ico)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable"
                    }
                ]
            }
        ];
    },
    async redirects() {
        return [
            {
                source: "/le-mame-shiba",
                destination: "/mameshiba",
                permanent: true
            },
            {
                source: "/le-shiba-inu/",
                destination: isBlogEnabled
                    ? "/blog/mame-shiba/sante/le-shiba-inu-caractere-sante-alimentation-prix"
                    : "/mameshiba",
                permanent: true
            },
            {
                source: "/le-shiba-inu",
                destination: isBlogEnabled
                    ? "/blog/mame-shiba/sante/le-shiba-inu-caractere-sante-alimentation-prix"
                    : "/mameshiba",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
