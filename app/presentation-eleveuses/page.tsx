import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { faqEleveuses } from "@/lib/faq-data"

const pageImage = "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg"

const eleveusesInternalLinks: InternalLinkItem[] = [
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
]

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
                alt: "Aurélie avec un chiot mameshiba",
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
  {/* @TODO modifier LES IMAGES DE AURELIE ET MARINE */}
    const aurelieGallery = [
        {
            src: "/assets/authors/aurelie-magnetisme-past-work.jpeg",
            alt: "Aurélie dans son premier univers professionnel",
            className: "col-span-6 md:col-span-3 row-span-6 md:row-span-6",
        },
        {
            src: "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg",
            alt: "Aurélie avec un chiot mameshiba",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/aurelie-and-puppies-and-children.jpeg",
            alt: "Aurélie avec des chiots et des enfants dans l’herbe",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/aurelie-and-pomsky-see-view.jpeg",
            alt: "Aurélie en promenade au bord de l’eau avec un chien",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/aurelie-and-pomsky-on-a-bike.jpeg",
            alt: "Aurélie en sortie avec un chien",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/aurelie-and-pomsky-walking-street.jpeg",
            alt: "Aurélie en balade avec un chien",
            className: "col-span-6 md:col-span-6 row-span-6 md:row-span-6",
        },
    ]

    const marineGallery = [
        {
            src: "/assets/authors/marine-walking-dogs.jpeg",
            alt: "Marine en promenade avec les chiens",
            className: "col-span-6 md:col-span-3 row-span-6 md:row-span-6",
        },
        {
            src: "/assets/authors/portrait-aurelie-and-pomsky.jpeg",
            alt: "Portrait au contact d’un chien de l’élevage",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/marine-in-a-chair-with-pomsky.jpeg",
            alt: "Marine avec un chiot sur une chaise",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/marine-and-a-new-puppy.jpeg",
            alt: "Marine avec un jeune chiot",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/marine-and-pomsky-in-grass.jpeg",
            alt: "Marine avec un chien dans le jardin",
            className: "col-span-3 md:col-span-3 row-span-3",
        },
        {
            src: "/assets/authors/marine-and-a-puppy-pomsky-in-sofa.jpeg",
            alt: "Marine avec un chiot sur le canapé",
            className: "col-span-6 md:col-span-6 row-span-6 md:row-span-6",
        },
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
                        <h1 className="text-xl md:text-3xl font-bold">{pageContent.eleveuses.h1}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.eleveuses.description}
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-2xl font-bold">Qui sommes-nous ?</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" aria-hidden="true" />
                        </div>

                        <div className="space-y-12">
                            <article id="aurelie" className="grid md:grid-cols-2 gap-12 items-start scroll-mt-28">
                                <div className="grid grid-cols-6 auto-rows-[70px] sm:auto-rows-[90px] md:auto-rows-[105px] lg:auto-rows-[118px] gap-3">
                                    {aurelieGallery.map((image, index) => (
                                        <div
                                            key={`${image.src}-${index}`}
                                            className={`relative overflow-hidden rounded-xl ${image.className}`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 768px) 40vw, 90vw"
                                                className="object-cover"
                                                priority={index === 0}
                                                loading={index === 0 ? "eager" : "lazy"}
                                                fetchPriority={index === 0 ? "high" : "auto"}
                                                quality={50}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        Une lecture fine du lien humain-chien
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Aurélie - 34 ans</h3>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            Lorsque je ne suis pas avec mes chiens, j’exerce aussi comme hypnothérapeute et
                                            magnétiseuse. Ce lien entre l’humain, ses émotions et l’animal fait partie de mon regard
                                            depuis des années.
                                        </p>
                                        <p>
                                            Mon chemin m’a menée vers le comportement animal avant de m’ouvrir encore davantage à la
                                            compréhension de l’humain. Dans l’élevage, cela change beaucoup de choses : j’observe
                                            autant le chiot que la famille, parce qu’une adoption réussie repose sur une vraie
                                            cohérence entre les deux.
                                        </p>
                                        <p>
                                            Le Mameshiba est un chien sensible, intelligent, très expressif et parfois plus subtil
                                            qu’il n’y paraît. Il ne supporte pas bien la brutalité ni l’incohérence. Cette race me
                                            touche justement pour cela : elle oblige à être juste, calme, présente et lucide.
                                        </p>
                                        <p>
                                            Mon approche est profondément holistique. J’accorde beaucoup d’importance à la qualité du
                                            lien, à la sécurité émotionnelle du chiot, à son observation quotidienne et à ce qu’il
                                            révèle dans la relation avec son futur humain.
                                        </p>
                                        <h4 className="text-lg font-semibold text-foreground">Une passion pour les chiens primitifs</h4>
                                        <p>
                                            Ma fascination pour les chiens au tempérament fort et noble remonte à l’enfance. Avec le
                                            temps, cette attirance s’est affinée vers les chiens primitifs et, plus tard, vers la
                                            culture japonaise. Le Mameshiba a représenté une évidence : toute la dignité du Shiba Inu,
                                            dans un petit format, avec une présence incroyable.
                                        </p>
                                        <p>
                                            Accueillir cette race dans notre vie a transformé notre élevage. Aujourd’hui, j’accompagne
                                            chaque famille avec beaucoup d’investissement, autant dans les moments joyeux que dans les
                                            phases plus délicates d’adaptation et d’apprentissage.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            <article id="marine" className="grid md:grid-cols-2 gap-12 items-start scroll-mt-28">
                                <div className="grid grid-cols-6 auto-rows-[70px] sm:auto-rows-[90px] md:auto-rows-[105px] lg:auto-rows-[118px] gap-3 md:order-2">
                                    {marineGallery.map((image, index) => (
                                        <div
                                            key={`${image.src}-${index}`}
                                            className={`relative overflow-hidden rounded-xl ${image.className}`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 768px) 40vw, 90vw"
                                                className="object-cover"
                                                loading="lazy"
                                                fetchPriority="auto"
                                                quality={50}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        Le cadre, la rigueur et le quotidien de l’élevage
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Marine - 32 ans</h3>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            À la base, j’étais plutôt une grande amoureuse des chats. C’est au fil des années, au
                                            contact de l’élevage et des chiens, que j’ai découvert la relation très particulière que
                                            le chien peut construire avec l’humain.
                                        </p>
                                        <p>
                                            Mon parcours en école de commerce puis dans un univers professionnel très exigeant m’a
                                            donné un vrai goût pour l’organisation, l’anticipation et la rigueur. Aujourd’hui, cette
                                            partie de moi est un atout concret pour la vie de l’élevage.
                                        </p>
                                        <p>
                                            Je veille beaucoup à tout ce qui fait le quotidien réel des chiens : l’hygiène, la
                                            stabilité des routines, l’observation des groupes, la sécurité, les mises bas, la
                                            récupération des mères et le bon développement des chiots.
                                        </p>
                                        <p>
                                            Le Mameshiba demande un environnement lisible, propre et cohérent. C’est une race qui
                                            peut être très sensible à l’ambiance et aux variations autour d’elle. J’aime justement
                                            apporter ce cadre calme, régulier et rassurant.
                                        </p>
                                        <p>
                                            Même si je suis naturellement plus discrète dans la relation avec les adoptants, je prends
                                            beaucoup de plaisir à vous accueillir, à vous présenter nos chiens et à partager ce qui
                                            fait la singularité de notre élevage.
                                        </p>
                                        <p>
                                            Avec Aurélie, nous formons un duo complémentaire : elle porte une lecture très fine du
                                            comportement et du lien, tandis que je veille à la structure, à la logistique et à la
                                            constance du cadre. C’est cet équilibre qui fait aussi la force de Kawaii Shiba.
                                        </p>
                                    </div>
                                </div>
                            </article>
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

                                    <div className="flex md:justify-end">
                                        <Link
                                            href="/blog/mame-shiba"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            Découvrir le blog Mameshiba
                                        </Link>
                                    </div>
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
