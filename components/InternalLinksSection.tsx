import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionTitleIcon } from "@/components/section-title-icon"
import { siteConfig } from "@/lib/seo-config"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

export type InternalLinkItem = {
    href: string
    title: string
    description: string
    image?: string
    imageAlt?: string
}

const internalLinkImagesByHref: Record<string, string> = {
    "/": siteConfig.ogImage,
    "/mameshiba": "/pages/homePage/mame-shiba-for-modern-life.jpeg",
    "/mame-shiba-prix": "/pages/image-all-shiba/mameshiba-exterieur-profil-01.webp",
    "/presentation-elevage": "/pages/homePage/mame-shiba-good-caractere.jpg",
    "/presentation-eleveuses": "/pages/les-eleveuses/marine-aurelie-et-clea-avec-trois-mame-shiba-de-elevage-kawaii.jpeg",
    "/nos-chiens": "/pages/reproducteurs/YUMI-femelle-mame-shiba-couleur-feu.webp",
    "/chiots-disponibles": "/pages/puppies/mameshiba-blanc-hotaru-1.jpg",
    "/adoption/reussir-son-adoption": "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg",
    "/bien-etre-animal": "/locaux.webp",
    "/galerie": "/pages/image-all-shiba/mameshiba-jardin-course-03.webp",
    "/contact": siteConfig.ogImage,
    "/blog": siteConfig.ogImage,
    "/blog/mame-shiba": siteConfig.ogImage,
}

function getInternalLinkImage(item: InternalLinkItem) {
    const hrefWithoutAnchor = item.href.split("#")[0]?.split("?")[0] || item.href

    return item.image ?? internalLinkImagesByHref[hrefWithoutAnchor] ?? siteConfig.ogImage
}

type InternalLinksSectionProps = {
    title: string
    description?: string
    items: InternalLinkItem[]
    className?: string
}

export function InternalLinksSection({
    title,
    description,
    items,
    className,
}: InternalLinksSectionProps) {
    const isThreeItems = items.length === 3

    return (
        <section className={cn("space-y-8", className)}>
            <div className="text-center space-y-3">
                <div className="flex items-center gap-3 justify-center">
                    <SectionTitleIcon icon={Search} />
                    <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                </div>
                {description ? (
                    <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
                ) : null}
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div
                className={cn(
                    "grid gap-4",
                    isThreeItems ? "md:mx-auto md:max-w-5xl md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4"
                )}
            >
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <Card className="h-full border-muted bg-muted/35 transition-colors group-hover:border-primary/35 group-hover:bg-muted/55">
                            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-primary/15 bg-background shadow-sm ring-4 ring-background transition-transform group-hover:scale-105">
                                    <Image
                                        src={getInternalLinkImage(item)}
                                        alt={item.imageAlt ?? `Image de la page ${item.title}`}
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                        quality={60}
                                    />
                                </span>
                                <div className="min-w-0 pt-1">
                                    <CardTitle className="text-lg leading-snug group-hover:text-primary">
                                        {item.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}
