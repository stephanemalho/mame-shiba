import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqPresentation } from "@/lib/faq-data"
import { Heart, Leaf, Star, Users } from "lucide-react"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"

const pageImage = "/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg"

export const metadata: Metadata = {
    title: pageMetadata.presentation.title,
    description: pageMetadata.presentation.description,
    keywords: pageMetadata.presentation.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.presentation.title,
        description: pageMetadata.presentation.description,
        url: `${siteConfig.siteUrl}/presentation-elevage`,
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
        title: pageMetadata.presentation.title,
        description: pageMetadata.presentation.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/presentation-elevage`,
    },
}

export default function PresentationPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Présentation", url: siteConfig.pages.presentation },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqPresentation))
    const lastMod = returnLastmod(siteConfig.pages.presentation)

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
                        <h1 className="text-xl md:text-3xl font-bold">{pageContent.presentation.h1}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {pageContent.presentation.description}
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Badge variant="secondary" className="w-fit">
                                    <Heart className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Notre philosophie
                                </Badge>
                                <h2 className="text-xl md:text-2xl font-bold">
                                    Faire naître des Mameshiba bien dans leur tête
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Notre travail commence bien avant la naissance : choix des lignées, respect du rythme
                                    des reproducteurs, suivi sanitaire et attention constante à l’équilibre émotionnel.
                                    Chaque chiot Mameshiba bénéficie d’un départ progressif, calme et structuré.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Les petits grandissent dans des espaces pensés pour un chien primitif de petit format :
                                    repères stables, manipulations mesurées, découvertes guidées et socialisation adaptée.
                                    L’objectif est de former un Mameshiba confiant, propre, bien codé et prêt à créer
                                    un lien solide avec sa future famille.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden">
                                <Image
                                    src="/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg"
                                    alt="Chiot mameshiba blanc dans un decor inspire du Japon"
                                    fill
                                    className="object-cover"
                                    priority
                                    fetchPriority="high"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    quality={75}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Nos valeurs</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <Heart className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Santé & stabilité</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Contrôles vétérinaires réguliers, sélection raisonnée et environnement sain pour construire
                                        des chiens équilibrés et robustes.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <Leaf className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Socialisation respectueuse</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Stimulation douce, observation fine et découvertes progressives pour respecter la sensibilité
                                        du Mameshiba sans le surstimuler.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center bg-muted/80">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                            <Users className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Transparence</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Échanges clairs, conseils honnêtes et accompagnement réel avant, pendant et après l’adoption.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden md:order-2">
                                <Image
                                    src="/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg"
                                    alt="Aurelie avec un mameshiba dans l univers de l elevage"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    quality={75}
                                />
                            </div>
                            <div className="space-y-6 md:order-1">
                                <Badge variant="secondary" className="w-fit">
                                    <Star className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Notre approche
                                </Badge>
                                <h2 className="text-xl md:text-2xl font-bold">
                                    Une approche douce, cohérente et exigeante
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Le Mameshiba n’est pas un petit chien banal : il est observateur, intelligent,
                                    parfois indépendant et très sensible à la cohérence humaine. Notre approche tient
                                    compte de ce tempérament particulier à chaque étape.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">
                                            Reproducteurs choisis pour le type, la santé, la stabilité émotionnelle et la traçabilité
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">
                                            Socialisation progressive, sans brutalité ni sursollicitation inutile
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                        <p className="text-sm">
                                            Conseils d’intégration, lecture du langage canin et suivi après le départ
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="/femelles-reproductrices"
                                    className="flex items-center bg-primary h-10 text-white hover:bg-primary/80 px-4 font-semibold dark:text-[#5b3a1a] rounded-md w-fit"
                                >
                                    Voir nos reproducteurs
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold">Notre histoire</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" aria-hidden="true" />
                            <h3 className="text-2xl font-bold">
                                Un élevage familial au cœur du Jura, à deux pas de Saint-Amour
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre histoire s’est naturellement orientée vers le Mameshiba à travers notre passion pour
                                les chiens primitifs et la culture japonaise. Installées dans le Jura, nous avons voulu
                                construire un élevage à taille humaine, dans un cadre calme, propice à l’observation et
                                au respect du rythme de chaque chien.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nos reproducteurs sont arrivés du Japon au printemps 2022, avec une exigence forte sur la qualité
                                des lignées d’origine. Dans une race encore rare en France, ce choix est central : il nous permet
                                de travailler avec sérieux sur le type, le caractère et la cohérence générale de nos chiens.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre objectif n’est pas de produire vite, mais de faire naître des Mameshiba harmonieux,
                                expressifs, propres, bien socialisés et capables de s’intégrer sereinement à la vie de famille
                                tout en respectant leur nature de petit primitif.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Les chiens vivent à nos côtés, avec des espaces sécurisés et des moments de détente en extérieur
                                pour nourrir leur curiosité. Les familles repartent avec un accompagnement concret, des conseils
                                pratiques, des nouvelles régulières et un vrai suivi après le départ.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Nos engagements</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Bien-être animal</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Rythmes respectés, moments de calme, sorties adaptées et environnement cohérent pour des
                                        Mameshiba sereins et curieux.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Suivi vétérinaire</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Suivi sanitaire complet, identification, vaccination, vermifuge, antiparasitaires, tests ADN
                                        des parents et conseils de santé transmis au moment du départ.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Sélection raisonnée</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Portées réfléchies, reproducteurs choisis avec exigence et priorité donnée à la qualité
                                        plutôt qu’à la quantité.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/80">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Accompagnement</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Conseils personnalisés, préparation à l’accueil, lecture du caractère du chiot
                                        et disponibilité pour vous accompagner à chaque étape.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ élevage et Mameshiba"
                        description="Nos réponses sur l’élevage, le caractère du Mameshiba et la manière dont nous préparons nos chiots."
                        items={faqPresentation}
                    />

                    <section className="text-center space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold">
                            Envie de découvrir notre univers Mameshiba ?
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Réservez une visite ou suivez l’ouverture des réservations pour nos prochaines portées.
                        </p>
                        <div className="flex flex-col mt-12 sm:flex-row gap-8 justify-center h-10 items-center">
                            <Link
                                href="/chiots-disponibles"
                                className="flex items-center min-h-12 bg-primary text-white hover:bg-primary/80 px-4 font-semibold dark:text-[#5b3a1a] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Voir nos portées
                            </Link>
                            <Link
                                href="/contact"
                                className="flex cursor-pointer h-full hover:underline text-sm text-muted-foreground justify-center items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
                            >
                                Programmer une visite
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
