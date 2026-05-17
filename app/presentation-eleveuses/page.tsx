import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { filterBlogLinks, isBlogEnabled } from "@/lib/blog-visibility"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { faqEleveuses } from "@/lib/faq-data"

const pageImage = "/pages/les-eleveuses/marine-aurelie-et-clea-avec-trois-mame-shiba-de-elevage-kawaii.jpeg"

const eleveusesInternalLinks: InternalLinkItem[] = filterBlogLinks([
    {
        href: "/presentation-elevage",
        title: "Découvrir l’élevage",
        description: "Comprendre l’environnement, la philosophie et les engagements de Kawaii Shiba.",
    },
    {
        href: "/nos-chiens",
        title: "Voir nos reproducteurs",
        description: "Mettre des chiens et des lignées concrètes derrière notre travail quotidien.",
    },
    {
        href: "/blog/mame-shiba",
        title: "Lire le blog Mameshiba",
        description: "Retrouver nos articles de fond sur la race, le tempérament et l’adoption.",
    },
    {
        href: "/contact",
        title: "Parler de votre projet",
        description: "Échanger directement avec nous pour préparer une rencontre ou une réservation.",
    },
])

export const metadata: Metadata = {
    title: pageMetadata.eleveuses.title,
    description: pageMetadata.eleveuses.description,
    keywords: pageMetadata.eleveuses.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.eleveuses.title,
        description: pageMetadata.eleveuses.description,
        url: `${siteConfig.siteUrl}/presentation-eleveuses`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Aurélie avec un chiot Mameshiba",
                width: 1200,
                height: 630,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.eleveuses.title,
        description: pageMetadata.eleveuses.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/presentation-eleveuses`,
    },
}

export default function PresentationEleveusesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Les éleveuses", url: siteConfig.pages.eleveuses },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqEleveuses))
    const lastMod = returnLastmod(siteConfig.pages.eleveuses)
  {/* @TODO modifier les images d'Aurélie et Marine */}
    const aurelieGallery = [
        {
            src: "/assets/authors/aurelie-magnetisme-past-work.jpeg",
            alt: "Aurélie dans son premier univers professionnel",
            className: "col-span-6 md:col-span-3 row-span-6 md:row-span-6",
        },
        {
            src: "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg",
            alt: "Aurélie avec un chiot Mameshiba",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/pages/les-eleveuses/aurelie-avec-ses-collegues-et-les-mame-shiba.jpeg",
            alt: "Aurélie, ses collègues de l’élevage et les Mameshiba",
            className: "col-span-3 md:col-span-3 row-span-3",
        }
    ]

    const marineGallery = [
        {
            src: "/assets/authors/marine-walking-dogs.jpeg",
            alt: "Marine en promenade avec les chiens",
            className: "col-span-6 md:col-span-3 row-span-6 md:row-span-6",
        },
        {
            src: "/pages/les-eleveuses/marine-et-les-shiba.jpg",
            alt: "Les Mameshiba de Marine dans un restaurant",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/pages/les-eleveuses/marine-a-paris.jpg",
            alt: "Marine avec un Mameshiba à Paris",
            className: "col-span-3 md:col-span-3 row-span-3",
        }
    ]

    const aurelieHighlights = [
        "Lecture du comportement",
        "Lien humain-chien",
        "Accompagnement des familles",
    ]

    const marineHighlights = [
        "Organisation du quotidien",
        "Hygiène et routines",
        "Stabilité du cadre",
    ]

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
                <div className="container mx-auto">
                    <section className="text-center space-y-6 mb-16">
                        <h1 className="text-xl md:text-3xl font-bold">Les éleveuses de Kawaii Shiba</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Nous sommes Aurélie et Marine. Cette page raconte notre parcours, notre vision de l’élevage et la manière dont nous accompagnons les familles autour du Mameshiba, avec exigence, sensibilité et transparence.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-2xl font-bold">Qui sommes-nous ?</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" aria-hidden="true" />
                        </div>

                        <div className="grid gap-8">
                            <Card id="aurelie" className="scroll-mt-28 overflow-hidden border-primary/10 bg-muted/25">
                                <CardContent className="p-5 md:p-6 lg:p-8">
                                    <article className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start xl:grid-cols-[240px_1fr]">
                                        <div className="grid max-w-sm grid-cols-[1fr_88px] gap-3 lg:max-w-none lg:grid-cols-1">
                                            <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-muted lg:aspect-square">
                                                <Image
                                                    src={aurelieGallery[0].src}
                                                    alt={aurelieGallery[0].alt}
                                                    fill
                                                    sizes="(min-width: 1280px) 240px, (min-width: 1024px) 220px, 70vw"
                                                    className="object-cover"
                                                    priority
                                                    fetchPriority="high"
                                                    quality={70}
                                                />
                                            </div>
                                            <div className="grid grid-rows-2 gap-3 lg:grid-cols-2 lg:grid-rows-1">
                                                {aurelieGallery.slice(1).map((image) => (
                                                    <div key={image.src} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            sizes="120px"
                                                            className="object-cover"
                                                            loading="lazy"
                                                            quality={60}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-5">
                                            <div className="space-y-3">
                                                <Badge variant="secondary" className="w-fit">
                                                    Une lecture fine du lien humain-chien
                                                </Badge>
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-bold">Aurélie</h3>
                                                    <p className="text-sm font-medium text-primary">Comportement, relation et accompagnement des familles</p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {aurelieHighlights.map((item) => (
                                                        <Badge key={item} variant="outline">
                                                            {item}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid gap-4 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                                                <p>
                                                    Lorsque je ne suis pas avec mes chiens, j’exerce aussi comme hypnothérapeute et
                                                    magnétiseuse. Ce lien entre l’humain, ses émotions et l’animal fait partie de mon regard
                                                    depuis des années.
                                                </p>
                                                <p>
                                                    Mon chemin m’a menée vers le comportement animal avant de m’ouvrir encore davantage à la
                                                    compréhension de l’humain. Dans l’élevage, cela change beaucoup de choses : j’observe
                                                    autant le chiot que la famille.
                                                </p>
                                                <p>
                                                    Le Mameshiba est un chien sensible, intelligent, très expressif et parfois plus subtil
                                                    qu’il n’y paraît. Il oblige à être juste, calme, présente et lucide.
                                                </p>
                                                <p>
                                                    Aujourd’hui, j’accompagne chaque famille avec beaucoup d’investissement, autant dans les
                                                    moments joyeux que dans les phases plus délicates d’adaptation et d’apprentissage.
                                                </p>
                                            </div>

                                            <div className="rounded-lg border border-primary/10 bg-background/80 p-4">
                                                <h4 className="font-semibold text-foreground">Une passion pour les chiens primitifs</h4>
                                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                    Ma fascination pour les chiens au tempérament fort et noble remonte à l’enfance. Avec le
                                                    temps, cette attirance s’est affinée vers les chiens primitifs et la culture japonaise.
                                                    Le Mameshiba a représenté une évidence : toute la dignité du Shiba Inu dans un petit format.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </CardContent>
                            </Card>

                            <Card id="marine" className="scroll-mt-28 overflow-hidden border-primary/10 bg-muted/25">
                                <CardContent className="p-5 md:p-6 lg:p-8">
                                    <article className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-start xl:grid-cols-[1fr_240px]">
                                        <div className="grid max-w-sm grid-cols-[1fr_88px] gap-3 lg:order-2 lg:max-w-none lg:grid-cols-1">
                                            <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-muted lg:aspect-square">
                                                <Image
                                                    src={marineGallery[0].src}
                                                    alt={marineGallery[0].alt}
                                                    fill
                                                    sizes="(min-width: 1280px) 240px, (min-width: 1024px) 220px, 70vw"
                                                    className="object-cover"
                                                    loading="lazy"
                                                    quality={70}
                                                />
                                            </div>
                                            <div className="grid grid-rows-2 gap-3 lg:grid-cols-2 lg:grid-rows-1">
                                                {marineGallery.slice(1).map((image) => (
                                                    <div key={image.src} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            sizes="120px"
                                                            className="object-cover"
                                                            loading="lazy"
                                                            quality={60}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-5 lg:order-1">
                                            <div className="space-y-3">
                                                <Badge variant="secondary" className="w-fit">
                                                    Le cadre, la rigueur et le quotidien de l’élevage
                                                </Badge>
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-bold">Marine</h3>
                                                    <p className="text-sm font-medium text-primary">Organisation, routines et équilibre du groupe</p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {marineHighlights.map((item) => (
                                                        <Badge key={item} variant="outline">
                                                            {item}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid gap-4 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                                                <p>
                                                    À la base, j’étais plutôt une grande amoureuse des chats. C’est au contact de l’élevage
                                                    et des chiens que j’ai découvert la relation très particulière que le chien peut construire
                                                    avec l’humain.
                                                </p>
                                                <p>
                                                    Mon parcours en école de commerce puis dans un univers professionnel exigeant m’a donné
                                                    un vrai goût pour l’organisation, l’anticipation et la rigueur.
                                                </p>
                                                <p>
                                                    Je veille à tout ce qui fait le quotidien réel des chiens : l’hygiène, les routines,
                                                    l’observation des groupes, la sécurité, les mises bas et le développement des chiots.
                                                </p>
                                                <p>
                                                    Avec Aurélie, nous formons un duo complémentaire : elle porte une lecture fine du
                                                    comportement et du lien, tandis que je veille à la structure et à la constance du cadre.
                                                </p>
                                            </div>

                                            <div className="rounded-lg border border-primary/10 bg-background/80 p-4">
                                                <h4 className="font-semibold text-foreground">Un cadre lisible pour les chiens</h4>
                                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                    Le Mameshiba demande un environnement propre, régulier et cohérent. J’aime apporter ce
                                                    cadre calme et rassurant, autant pour les chiens que pour les familles qui viennent nous rencontrer.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16">
                        <Card className="bg-muted/30">
                            <CardContent className="p-8 md:p-10">
                                <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
                                    <div className="space-y-4">
                                        <h2 className="text-xl md:text-2xl font-bold">
                                            Les articles d’Aurélie et Marine sur le Mameshiba
                                        </h2>
                                        <h3 className="text-base md:text-xl font-semibold">
                                            Élevage de Mameshiba : expérience terrain, conseils sincères et adoption responsable.
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            À travers nos articles, nous partageons une vision concrète de l’élevage : la sélection
                                            des lignées, la socialisation des chiots, la santé, le tempérament du Mameshiba et les
                                            repères utiles avant d’accueillir un chiot.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Le but est simple : proposer un contenu fiable, pédagogique et honnête, nourri par notre
                                            expérience quotidienne auprès des chiens et des familles.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Objectif : informer, rassurer et vous aider à mieux comprendre ce petit chien primitif,
                                            rare, sensible et absolument unique.
                                        </p>
                                        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                                            <Link
                                                href="/mameshiba"
                                                className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            >
                                                Comprendre le Mameshiba
                                            </Link>
                                            <Link
                                                href="/adoption/reussir-son-adoption"
                                                className="inline-flex items-center justify-center rounded-md border border-primary/30 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            >
                                                Préparer son adoption
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:justify-self-end lg:justify-self-stretch">
                                        <div className="relative w-full overflow-hidden rounded-2xl">
                                            <div className="relative aspect-4/5 lg:aspect-4/3">
                                                <Image
                                                    src="/pages/homePage/ISHIRO-mame-shiba-kawaii-shiba.jpeg"
                                                    alt="Mameshiba gris et blanc en portrait"
                                                    fill
                                                    sizes="(min-width: 1024px) 360px, 100vw"
                                                    className="object-cover"
                                                    quality={75}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {isBlogEnabled ? (
                                        <div className="flex md:justify-end">
                                            <Link
                                                href="/blog/mame-shiba"
                                                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            >
                                                Découvrir le blog Mameshiba
                                            </Link>
                                        </div>
                                    ) : null}
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <InternalLinksSection
                        title="Pour mieux nous situer dans l’ensemble du site"
                        description="Ces pages relient notre parcours à notre travail concret en élevage, à nos chiens et à l’accompagnement des familles."
                        items={eleveusesInternalLinks}
                        className="mb-16"
                    />

                    <FAQSection
                        title="FAQ sur notre vision et notre parcours"
                        description="Quelques réponses aux questions fréquentes sur notre approche du Mameshiba et de l’élevage."
                        items={faqEleveuses}
                    />

                    <section className="text-center space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold">Envie d’échanger avec nous ?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Parlons de votre projet et voyons ensemble si le Mameshiba correspond vraiment à votre mode de vie.
                        </p>
                        <div className="flex flex-col mt-10 sm:flex-row gap-8 justify-center h-10 items-center">
                            <Link
                                href="/contact"
                                className="flex min-h-12 items-center rounded-md bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Contacter Aurélie et Marine
                            </Link>
                            <Link
                                href="/chiots-disponibles"
                                className="flex cursor-pointer h-full hover:underline text-sm text-muted-foreground justify-center items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
                            >
                                Voir nos portées
                            </Link>
                        </div>
                        <div className="text-right text-xs text-muted-foreground mt-20">
                            Dernière mise à jour : {lastMod}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
