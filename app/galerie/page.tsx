import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, ImageIcon, Play, Youtube } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    buildOpenGraph,
    buildTwitter,
    pageMetadata,
    returnLastmod,
    siteConfig,
} from "@/lib/seo-config"
import {
    galleryImageItems,
    getLatestYouTubeVideos,
    type GalleryImageItem,
    type SocialGalleryItem,
    youtubeChannelUrl,
} from "@/lib/social-gallery"
import { generateBreadcrumbSchema, generateCollectionPageSchema } from "@/lib/schema-generators"

const galleryOgImage = "/pages/image-all-shiba/mameshiba-jardin-ensemble-01.webp"

export const revalidate = 21600

export const metadata: Metadata = {
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
    keywords: pageMetadata.gallery.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.gallery.title,
        description: pageMetadata.gallery.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.gallery}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${galleryOgImage}`,
                alt: "Mameshiba réunis dans le jardin de l'élevage Kawaii Shiba",
                width: 1300,
                height: 866,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.gallery.title,
        description: pageMetadata.gallery.description,
        imageUrl: `${siteConfig.siteUrl}${galleryOgImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.gallery}`,
    },
}

function formatPublishedAt(value?: string) {
    if (!value) {
        return null
    }

    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(value))
}

function getImageEncodingFormat(src: string) {
    const extension = src.split(".").at(-1)?.toLowerCase()

    if (extension === "jpg" || extension === "jpeg") {
        return "image/jpeg"
    }

    if (extension === "avif") {
        return "image/avif"
    }

    return "image/webp"
}

function PhotoGallerySection({ items }: { items: GalleryImageItem[] }) {
    return (
        <section id="galerie-photos" className="scroll-mt-28 space-y-6">
            <div className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                    Photos de l&apos;élevage
                </Badge>
                <h2 className="text-xl font-semibold leading-tight md:text-2xl">
                    Nos Mameshiba dans leur environnement
                </h2>
                <p className="max-w-3xl text-muted-foreground">
                    Une sélection de nos images préférées, choisies pour la beauté du cadre,
                    l&apos;expression de nos Mameshiba et les souvenirs qu&apos;elles racontent.
                </p>
            </div>

            <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
                {items.map((item) => (
                    <figure
                        key={item.id}
                        className="mb-4 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-primary/10 bg-background shadow-[0_16px_48px_rgba(66,40,18,0.08)]"
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="h-auto w-full bg-muted"
                        />
                        <figcaption className="space-y-2 border-t border-primary/10 p-5">
                            <p className="text-lg font-semibold leading-snug">{item.title}</p>
                            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                                {item.summary}
                            </p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}

function VideoCard({ item }: { item: SocialGalleryItem }) {
    const publishedAt = formatPublishedAt(item.publishedAt)

    return (
        <Card className="overflow-hidden border-primary/10 bg-background/90 p-0 shadow-[0_14px_40px_rgba(66,40,18,0.06)]">
            <CardContent className="p-0">
                <figure className="flex h-full flex-col">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                        <Image
                            src={item.thumbnailSrc}
                            alt={item.thumbnailAlt}
                            fill
                            unoptimized
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-white shadow-lg">
                                <Play className="ml-1 h-6 w-6 fill-current" />
                            </span>
                        </div>
                    </div>
                    <figcaption className="space-y-4 p-5">
                        {publishedAt ? (
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary/80">
                                {publishedAt}
                            </p>
                        ) : null}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {item.summary}
                            </p>
                        </div>
                        <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                        >
                            Voir la vidéo
                            <Play className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </figcaption>
                </figure>
            </CardContent>
        </Card>
    )
}

function YouTubeSection({ items }: { items: SocialGalleryItem[] }) {
    return (
        <section id="galerie-youtube" className="scroll-mt-28 space-y-6">
            <div className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                    YouTube
                </Badge>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold leading-tight md:text-2xl">
                            Les trois dernières vidéos de l&apos;élevage
                        </h2>
                        <p className="max-w-3xl text-muted-foreground">
                            Cette sélection se met à jour automatiquement depuis notre chaîne YouTube
                            pour montrer les publications les plus récentes.
                        </p>
                    </div>
                    <Link
                        href={youtubeChannelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                        Ouvrir la chaîne YouTube
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {items.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                        <VideoCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <Card className="border-primary/10 bg-primary/5">
                    <CardContent className="px-6 py-6">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Les vidéos n&apos;ont pas pu être récupérées automatiquement pour le moment.
                            Vous pouvez ouvrir directement la chaîne YouTube avec le bouton ci-dessus.
                        </p>
                    </CardContent>
                </Card>
            )}
        </section>
    )
}

export default async function GaleriePage() {
    const youtubeVideos = await getLatestYouTubeVideos(3)
    const lastMod = returnLastmod(siteConfig.pages.gallery)
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: siteConfig.pages.home },
        { name: "Galerie", url: siteConfig.pages.gallery },
    ])
    const collectionSchema = generateCollectionPageSchema({
        name: pageMetadata.gallery.title,
        description: pageMetadata.gallery.description,
        url: siteConfig.pages.gallery,
        images: galleryImageItems.map((item) => ({
            url: item.src,
            name: item.title,
            caption: item.alt,
            encodingFormat: getImageEncodingFormat(item.src),
        })),
    })

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto space-y-14 px-4">
                    <section className="space-y-6 text-center">
                        <Badge variant="secondary" className="mx-auto w-fit">
                            Galerie photos et vidéos
                        </Badge>
                        <h1 className="text-xl font-bold md:text-3xl">
                            Galerie Kawaii Shiba : nos Mameshiba en photos et en vidéos
                        </h1>
                        <p className="mx-auto max-w-3xl text-muted-foreground">
                            Découvrez notre sélection de photos préférées des Mameshiba de l&apos;élevage :
                            portraits, expressions et instants que nous aimons particulièrement,
                            accompagnés de nos dernières vidéos YouTube.
                        </p>
                        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
                            Contenu mis à jour le {lastMod}
                        </p>
                        <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
                    </section>

                    <section aria-labelledby="adoptants-gallery-title">
                        <Card className="border-primary/15 bg-primary/5 shadow-[0_14px_40px_rgba(66,40,18,0.06)]">
                            <CardContent className="grid gap-6 px-6 py-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-8">
                                <div className="space-y-3">
                                    <Badge variant="secondary" className="w-fit">
                                        Familles adoptantes
                                    </Badge>
                                    <h2 id="adoptants-gallery-title" className="text-xl font-semibold leading-tight md:text-2xl">
                                        Votre Mameshiba dans notre galerie
                                    </h2>
                                    <p className="max-w-3xl text-muted-foreground">
                                        Vous avez adopté un Mameshiba chez Kawaii Shiba et souhaitez
                                        partager une belle photo de votre compagnon ? Envoyez-la-nous :
                                        sa publication dans cette galerie est gratuite, après validation
                                        par notre équipe.
                                    </p>
                                    <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
                                        La photo doit être de bonne qualité, présenter un cadrage adapté,
                                        ne montrer aucune scène susceptible de heurter la sensibilité du
                                        public et pouvoir être publiée avec l&apos;accord de son auteur et des
                                        personnes éventuellement reconnaissables. Kawaii Shiba reste libre
                                        de sélectionner ou de refuser une image afin de préserver la
                                        cohérence de la galerie.
                                    </p>
                                </div>
                                <Button asChild size="lg" className="w-full md:w-auto">
                                    <Link href={siteConfig.pages.contact}>
                                        Proposer une photo
                                        <ArrowRight aria-hidden="true" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="grid gap-4 md:grid-cols-2">
                        <Link href="#galerie-photos" className="block h-full">
                            <Card className="h-full border-primary/10 bg-primary/5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(66,40,18,0.08)]">
                                <CardContent className="flex h-full px-6 py-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold">Galerie photos</p>
                                            <ImageIcon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Notre sélection de portraits et de photos préférées de nos Mameshiba.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="#galerie-youtube" className="block h-full">
                            <Card className="h-full border-primary/10 bg-primary/5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_rgba(66,40,18,0.08)]">
                                <CardContent className="flex h-full px-6 py-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold">YouTube</p>
                                            <Youtube className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Les trois dernières vidéos de la chaîne Kawaii Mameshiba.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </section>

                    <PhotoGallerySection items={galleryImageItems} />
                    <YouTubeSection items={youtubeVideos} />
                </div>
            </div>
        </>
    )
}
