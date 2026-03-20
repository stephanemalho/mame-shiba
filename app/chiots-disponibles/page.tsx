import type { Metadata } from "next"
import Link from "next/link"
import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import { Calendar, Dog, Heart, NotebookText, PawPrint, Phone, Mail, Sprout } from "lucide-react"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { puppies } from "./puppies"
import { Card, CardContent } from "@/components/ui/card"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
import { Badge } from "@/components/ui/badge"

const pageImage = "/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg"

export const metadata: Metadata = {
    title: pageMetadata.puppies.title,
    description: pageMetadata.puppies.description,
    keywords: pageMetadata.puppies.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        url: `${siteConfig.siteUrl}/chiots-disponibles`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Chiot mameshiba blanc dans un decor japonais",
                width: 1200,
                height: 630,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.puppies.title,
        description: pageMetadata.puppies.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/chiots-disponibles`,
    },
}

export default function NosChiotsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots))
    const lastMod = returnLastmod(siteConfig.pages.puppies)
    const availablePuppies = puppies.filter((puppy) => puppy.isAvailable !== false)
    const hasAvailablePuppies = availablePuppies.length > 0

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
                        <h1 className="text-xl md:text-3xl font-bold">{pageContent.puppies.h1}</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.puppies.description}
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.puppies.descriptionSecondary}
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    {hasAvailablePuppies ? (
                        <div className="grid gap-10 my-12">
                            {availablePuppies.map((puppy, index) => (
                                <Card key={puppy.name} className="overflow-hidden bg-muted/30">
                                    <CardContent className="p-0">
                                        <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                                            <div className={`relative min-h-80 lg:min-h-120 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                                <ImageCarousel
                                                    images={puppy.images}
                                                    alt={`Carrousel d'images du chiot ${puppy.name}`}
                                                    priority={index === 0}
                                                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                                />
                                            </div>
                                            <div className={`p-8 space-y-4 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">
                                                        <PawPrint className="h-4 w-4 mr-1" />
                                                        {puppy.coat}
                                                    </Badge>
                                                    <Badge variant="outline">{puppy.color}</Badge>
                                                </div>
                                                <div className="space-y-2">
                                                    <h2 className="text-2xl font-bold">{puppy.name}</h2>
                                                    <p className="text-muted-foreground">{puppy.description}</p>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Dog className="h-4 w-4 text-primary" />
                                                        <span>{puppy.sexe}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Heart className="h-4 w-4 text-primary" />
                                                        <span>{puppy.parents}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Calendar className="h-4 w-4 text-primary" />
                                                        <span>{puppy.readyDate}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <PawPrint className="h-4 w-4 text-primary" />
                                                        <span>{puppy.age}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {puppy.highlights.map((item) => (
                                                        <Badge key={item} variant="secondary">
                                                            {item}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 py-2 px-4 rounded-md"
                                                        href={puppy.linkTo}
                                                    >
                                                        Réserver une visite ou demander plus de photos / vidéos
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <section className="max-w-5xl mx-auto my-12 grid gap-8">
                            <Card className="bg-muted/30 border border-muted">
                                <CardContent className="p-8 md:p-10 space-y-6">
                                    <div className="flex items-start gap-3">
                                        <NotebookText className="h-6 w-6 text-primary" aria-hidden="true" />
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                                Aucun chiot disponible pour le moment
                                            </h2>
                                            <p className="text-muted-foreground mt-2">
                                                Tous nos Mameshiba sont actuellement adoptés, mais une nouvelle portée arrive très bientôt.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground">
                                        Les Mameshiba ont généralement un très petit nombre de chiots, ce qui explique leur rareté
                                        en Europe. Cette confidentialité fait aussi partie de la qualité de notre travail :
                                        chaque portée est réfléchie, suivie et accompagnée avec beaucoup d&apos;attention.
                                    </p>

                                    <div className="grid gap-3">
                                        {[
                                            "Portée à venir très prochainement",
                                            "Réservations déjà ouvertes pour les familles sérieuses",
                                            "Sélection attentive des futures familles adoptantes",
                                            "Accompagnement complet avant, pendant et après l’adoption",
                                        ].map((item) => (
                                            <div key={item} className="flex gap-4 items-center">
                                                <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                                    <NotebookText className="h-4 w-4" />
                                                </div>
                                                <p className="text-muted-foreground">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid gap-8 md:grid-cols-2">
                                <Card className="bg-muted/30 border border-muted">
                                    <CardContent className="p-8 md:p-10 space-y-6 text-left">
                                        <div className="flex items-start gap-3">
                                            <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                                            <div>
                                                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                                    Tarif d’un chiot Mameshiba
                                                </h2>
                                                <p className="text-muted-foreground mt-2">
                                                    Le tarif reflète la rareté de la race, la qualité des lignées et le niveau d’exigence
                                                    demandé pour travailler ce type de chien.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground">
                                            Le tarif de nos chiots Mameshiba évolue généralement entre <strong className="text-foreground">3 800 € et 4 500 €</strong>, selon le profil du chiot, la portée et les critères de sélection, toutes couleurs confondues.
                                        </p>
                                        <p className="text-muted-foreground">
                                            Nos chiots sont issus de lignées soigneusement sélectionnées, socialisés avec sérieux et élevés
                                            dans une optique de véritable chien de compagnie.
                                        </p>
                                        <Link
                                            href="/mame-shiba-prix"
                                            className="inline-flex w-fit rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            Comprendre notre fourchette de prix
                                        </Link>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/30 border border-muted">
                                    <CardContent className="p-8 md:p-10 space-y-6 text-left">
                                        <div className="flex items-start gap-3">
                                            <Sprout className="h-6 w-6 text-primary" aria-hidden="true" />
                                            <div>
                                                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                                    Réserver sur la prochaine portée
                                                </h2>
                                                <p className="text-muted-foreground mt-2">
                                                    Si vous êtes intéressé par un futur chiot, nous prenons le temps d’échanger avec vous
                                                    avant toute réservation.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground">
                                            Nous sélectionnons avec soin les futures familles adoptantes. Une présentation de votre
                                            projet et un entretien téléphonique sont donc à prévoir afin d’évaluer ensemble si le
                                            Mameshiba correspond bien à votre mode de vie.
                                        </p>

                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                                                <span>07 56 80 93 38</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                                                <span>elevagemameshiba@gmail.com</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                href="/contact"
                                                className="flex items-center justify-center bg-primary text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            >
                                                Nous contacter
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                    )}

                    <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left mt-12">
                        <div className="flex items-start gap-3">
                            <Sprout className="h-6 w-6 text-2xl text-primary" aria-hidden="true" />
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                    Des portées rares, pensées avec soin
                                </h2>
                                <p className="text-muted-foreground mt-2">
                                    Chez Kawaii Shiba, nous préférons attendre la bonne portée plutôt que produire vite.
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Chaque future portée est pensée avec sérieux, dans le respect du rythme de nos reproducteurs
                            et de la singularité du Mameshiba.
                        </p>
                        <div className="grid gap-3">
                            {[
                                "sélection rigoureuse des lignées,",
                                "suivi vétérinaire attentif,",
                                "respect du rythme naturel de nos reproducteurs,",
                                "accompagnement des familles avant, pendant et après l’adoption.",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-center">
                                    <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                                        <Sprout className="h-4 w-4" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/bien-etre-animal"
                            className="flex items-center bg-primary justify-center text-white hover:bg-primary/80 p-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Voir les conditions de vie des chiots
                        </Link>
                    </section>

                    <FAQSection
                        title="FAQ adoption et vie avec un Mameshiba"
                        description="Préparation des chiots, réservations, accompagnement et départ en famille : les réponses essentielles."
                        items={faqNosChiots}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
