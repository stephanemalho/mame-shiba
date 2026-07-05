"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    isResponsiveImageAsset,
    type ResponsiveImageAsset,
    type ResponsiveImageSources,
} from "@/lib/responsive-images";

type CarouselImage = {
    src: string | ResponsiveImageAsset
    alt: string
}

type CarouselImageInput = string | ResponsiveImageAsset | CarouselImage

type ImageCarouselProps = {
    images: CarouselImageInput[]
    alt: string
    priority?: boolean
    sizes?: string
    quality?: number
    fit?: "cover" | "contain"
    containerClassName?: string
}

function responsiveSrcSet(sources: ResponsiveImageSources) {
    return `${sources.mobile} 480w, ${sources.tablet} 768w, ${sources.desktop} 1200w`;
}

function ImageCarousel({
    images,
    alt,
    priority = false,
    sizes,
    quality = 70,
    fit = "cover",
    containerClassName,
}: ImageCarouselProps) {
    const [index, setIndex] = useState(0)
    const resolvedImages = images.map((image) => (
        typeof image === "string" || isResponsiveImageAsset(image) ? { src: image, alt } : image
    ))
    const total = resolvedImages.length
    const isOneImage = total === 1
    const resolvedSizes = sizes ?? "(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
    const currentImage = resolvedImages[index]
    const currentImageSrc = typeof currentImage.src === "string"
        ? currentImage.src.startsWith("/") ? currentImage.src : `/${currentImage.src}`
        : null

    const prev = () => setIndex((i) => (i - 1 + total) % total)
    const next = () => setIndex((i) => (i + 1) % total)

    return (
        <div className={cn("relative h-72 md:h-full overflow-hidden rounded-lg bg-card/40 mx-4", fit === "contain" && "bg-muted/50", containerClassName)}>
            {isResponsiveImageAsset(currentImage.src) ? (
                <picture className="absolute inset-0 block h-full w-full">
                    <source type="image/webp" srcSet={responsiveSrcSet(currentImage.src.webp)} sizes={resolvedSizes} />
                    <img
                        src={currentImage.src.jpeg.desktop}
                        srcSet={responsiveSrcSet(currentImage.src.jpeg)}
                        sizes={resolvedSizes}
                        alt={currentImage.alt}
                        decoding="async"
                        fetchPriority={priority ? "high" : "auto"}
                        loading={priority ? "eager" : "lazy"}
                        className={cn(
                            "h-full w-full transition duration-300 p-2",
                            fit === "contain" ? "object-contain md:p-3" : "object-cover"
                        )}
                    />
                </picture>
            ) : (
                <Image
                    src={currentImageSrc ?? ""}
                    alt={currentImage.alt}
                    fill
                    className={cn(
                        "transition duration-300 p-2",
                        fit === "contain" ? "object-contain md:p-3" : "object-cover"
                    )}
                    sizes={resolvedSizes}
                    priority={priority}
                    fetchPriority={priority ? "high" : "auto"}
                    loading={priority ? "eager" : "lazy"}
                    quality={quality}
                />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/60 text-white">
                {index + 1}/{total}
            </div>
            {!isOneImage && (
                <>
                    <button
                        aria-label="Précédent"
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        aria-label="Suivant"
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-2 hover:bg-black/70 transition"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </>
            )}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {resolvedImages.map((_, i) => (
                    <span
                        key={i}
                        className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-white/60"}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel;
