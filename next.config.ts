import type { NextConfig } from "next";

const isBlogEnabled = process.env.NEXT_PUBLIC_ENABLE_BLOG !== "false";

const nextConfig: NextConfig = {
    images: {
        qualities: [70, 75, 80]
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
