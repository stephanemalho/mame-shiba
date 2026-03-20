import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/author/:path*",
                destination: "/",
                permanent: true
            },
            {
                source: "/le-mame-shiba",
                destination: "/mameshiba",
                permanent: true
            },
            {
                source: "/le-shiba-inu/",
                destination: "/blog/mame-shiba/sante/le-shiba-inu-caractere-sante-alimentation-prix",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
