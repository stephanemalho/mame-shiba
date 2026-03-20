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
        ];
    }
};

export default nextConfig;
