import type { ResponsiveImageAsset, ResponsiveImageSources } from "@/lib/responsive-images";
import { cn } from "@/lib/utils";

type ResponsivePictureProps = {
    asset: ResponsiveImageAsset;
    alt: string;
    sizes: string;
    className?: string;
    imageClassName?: string;
    loading?: "eager" | "lazy";
    fetchPriority?: "high" | "low" | "auto";
};

function srcSet(sources: ResponsiveImageSources) {
    return `${sources.mobile} 480w, ${sources.tablet} 768w, ${sources.desktop} 1200w`;
}

export function ResponsivePicture({
    asset,
    alt,
    sizes,
    className,
    imageClassName,
    loading = "lazy",
    fetchPriority,
}: ResponsivePictureProps) {
    return (
        <picture className={cn("block", className)}>
            <source type="image/webp" srcSet={srcSet(asset.webp)} sizes={sizes} />
            <img
                src={asset.jpeg.desktop}
                srcSet={srcSet(asset.jpeg)}
                sizes={sizes}
                alt={alt}
                loading={loading}
                decoding="async"
                fetchPriority={fetchPriority}
                className={cn("block h-auto w-full", imageClassName)}
            />
        </picture>
    );
}
