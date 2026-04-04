import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqReproducteurs } from "@/lib/faq-data"
import { Dog, PawPrint, Ruler, ShieldCheck } from "lucide-react"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { pageContent } from "@/lib/page-content"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { dogs } from "./dogs"

const pageImage = "/pages/reproducteurs/YUMI-femelle-mame-shiba-couleur-feu.webp"

const reproductorsInternalLinks: InternalLinkItem[] = [
    {
        href: "/mameshiba",
        title: "Mieux comprendre la race",
        description: "Relier nos chiens adultes au standard, à l’histoire et au tempérament du Mameshiba.",
    },
    {
        href: "/bien-etre-animal",
        title: "Voir leur cadre de vie",
        description: "Découvrir le quotidien de la meute, la socialisation et l’environnement de l’élevage.",
    },
    {
        href: "/mame-shiba-prix",
        title: "Consulter nos prix",
        description: "Retrouver nos tarifs actuels pour les chiots issus de cette sélection.",
    },
    {
        href: "/contact",
        title: "Échanger avec nous",
        description: "Nous poser vos questions sur une lignée, un mariage ou un projet d’adoption.",
    },
]

export const metadata: Metadata = {
    title: pageMetadata.reproductors.title,
    description: pageMetadata.reproductors.description,
    keywords: pageMetadata.reproductors.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.reproductors.title,
        description: pageMetadata.reproductors.description,
        url: `${siteConfig.siteUrl}/nos-chiens`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Ichiro mameshiba de l elevage Kawaii Shiba",
                width: 1200,
                height: 630,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.reproductors.title,
        description: pageMetadata.reproductors.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/nos-chiens`,
    },
}

export default function NosChiensPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiens", url: siteConfig.pages.reproductors },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqReproducteurs))
    const lastMod = returnLastmod(siteConfig.pages.reproductors)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="py-16">
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1 className="text-xl md:text-3xl font-bold">{pageContent.reproductors.h1}</h1>
                        <h2 className="text-xl md:text-2xl">{pageContent.reproductors.subtitle}</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.reproductors.description}
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.reproductors.descriptionSecondary}
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    <div className="grid gap-10">
                        {dogs.map((dog, index) => (
                            <Card key={dog.name} className="overflow-hidden bg-muted/30">
                                <CardContent className="p-0">
                                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                        <div className={`relative min-h-80 min-w-0 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                            <ImageCarousel
                                                images={dog.images}
                                                alt={`Carrousel d'images de ${dog.name}`}
                                                priority={index === 0}
                                                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                            />
                                        </div>
                                        <div className={`p-8 space-y-4 flex flex-col justify-center min-w-0 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <Badge variant="secondary">
                                                    <PawPrint className="h-4 w-4 mr-1" />
                                                    {dog.color}
                                                </Badge>
                                                <Badge variant="outline">{dog.origin}</Badge>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">{dog.title}</h3>
                                                {dog.lineage && (
                                                    <p className="text-sm text-primary font-medium">{dog.lineage}</p>
                                                )}
                                                <p className="text-muted-foreground">{dog.temperament}</p>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Dog className="h-4 w-4 text-primary" />
                                                    <span>{dog.title}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Ruler className="min-h-4 min-w-4 text-primary" />
                                                    <span>{dog.size}</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold flex items-center gap-2">
                                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                                    Santé et confirmations
                                                </h4>
                                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                    {dog.health.map((healthItem) => (
                                                        <li key={healthItem}>{healthItem}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        <Link
                            href="/chiots-disponibles"
                            className="inline-block w-fit rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Découvrir nos chiots
                        </Link>
                    </div>

                    <InternalLinksSection
                        title="Continuer votre découverte de l’élevage"
                        description="Après les reproducteurs, voici les pages les plus utiles pour comprendre la race, le cadre de vie, les tarifs et les prochaines étapes."
                        items={reproductorsInternalLinks}
                        className="mt-16"
                    />

                    <FAQSection
                        title="FAQ sélection et lignées"
                        description="Santé, équilibre émotionnel, vie de meute et importance des lignées dans notre sélection Mameshiba."
                        items={faqReproducteurs}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
