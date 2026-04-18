import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { faqBienEtre } from "@/lib/faq-data"
import { Calendar, MapPin, Bed, Utensils, Dumbbell, SpadeIcon as Spa, PawPrint, Dog } from "lucide-react"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import Link from "next/link"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"

const pageImage = "/locaux.webp"

const wellnessInternalLinks: InternalLinkItem[] = [
    {
        href: "/presentation-elevage",
        title: "Découvrir l’élevage",
        description: "Relier ce quotidien à notre philosophie, à notre sélection et à notre façon de travailler.",
    },
    {
        href: "/presentation-elevage#travail-educatif-elevage",
        title: "Voir le travail éducatif",
        description: "Retrouver le rappel, la propreté, la socialisation et la manipulation déjà travaillés à l’élevage.",
    },
    {
        href: "/adoption/reussir-son-adoption",
        title: "Préparer l’arrivée du chiot",
        description: "Anticiper les premiers jours à la maison après cette phase d’élevage et de socialisation.",
    },
    {
        href: "/chiots-disponibles",
        title: "Voir les prochaines portées",
        description: "Suivre les disponibilités et les réservations si vous souhaitez adopter chez nous.",
    },
    {
        href: "/contact",
        title: "Organiser une visite ou un échange",
        description: "Nous contacter pour parler de votre projet et découvrir l’élevage sur rendez-vous.",
    },
]

export const metadata: Metadata = {
    title: pageMetadata.wellness.title,
    description: pageMetadata.wellness.description,
    keywords: pageMetadata.wellness.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        url: `${siteConfig.siteUrl}/bien-etre-animal`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Locaux et espaces de l elevage Kawaii Shiba",
                width: 1200,
                height: 630,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.wellness.title,
        description: pageMetadata.wellness.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/bien-etre-animal`,
    },
}

export default function SejoursPage() {
    // Schémas JSON-LD
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Bien-être animal", url: "/bien-etre-animal" },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqBienEtre))


    const lastMod = returnLastmod(siteConfig.pages.wellness)

    return (
        <>
            {/* JSON-LD Schemas */}
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
                        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/locaux.webp"
                                alt="Image d un des espaces de vie des chiens de l elevage"
                                fill
                                className="object-cover"
                                priority
                                fetchPriority="high"
                                sizes="(max-width: 768px) 100vw, 70vw"
                                quality={60}
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-white text-center space-y-4">
                                    <h1 className="text-xl md:text-3xl font-bold">La vie en élevage</h1>
                                    <div className="flex flex-col items-center justify-center space-x-4 p-2 md:flex-row">
                                        <Calendar className="h-5 w-5" aria-hidden="true" />
                                        <span className="md:text-lg">Prochaine portée prévue premier semestre 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Portée Info */}
                    <section className="text-center mb-16">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Voici comment vivent nos Mameshiba et nos chiots au sein de l’élevage Kawaii Shiba</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center text-muted-foreground mb-8 gap-6">
                            <div className="flex flex-col items-center justify-center md:flex-row">
                                <MapPin className="h-4 w-4" aria-hidden="true" />
                                <span className="ml-2">Dommartin-lès-Cuiseaux, Saône-et-Loire (71)</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2 md:flex-row">
                                <Dog className="h-4 w-4" />
                                {/* <span>6 chiots attendus</span> */}
                                <span className="ml-2">La nouvelle portée est déjà réservée <Link href="/contact" className="text-blue-700 underline hover:text-blue-500">(inscrivez-vous pour la prochaine)</Link></span>
                            </div>
                        </div>
                    </section>
                    {/* Nursery Sections */}
                    <div className="space-y-16">
                        {/* Nursery */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Bed className="h-4 w-4 mr-2" />
                                        Nursery intérieure
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Un cocon dès la naissance</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        La nursery intérieure est pensée comme un véritable cocon, calme et sécurisé, où chaque chiot peut évoluer dans les meilleures conditions dès ses premières heures de vie. La température, l’hygiène et l’ambiance sonore sont maîtrisées afin de limiter le stress et de favoriser un développement harmonieux, aussi bien physique qu’émotionnel.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Les chiots naissent dans une salle de mise bas tempérée, sous surveillance et avec une présence humaine continue. Nous assurons un suivi vétérinaire rapproché et des pesées quotidiennes.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Chez le Mameshiba, cette phase précoce est particulièrement importante : c’est un petit chien très sensible à son environnement. Cette présence humaine quotidienne lui permet de s’habituer en douceur aux manipulations, aux odeurs et aux bruits du quotidien, en posant les bases d’un chiot serein, observateur et confiant.
                                    </p>
                                </div>
                                <div className="relative h-80 md:h-122 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            "pages/conditions-de-vie/cocom-pour-chiots-mame-shiba.webp",
                                            "pages/conditions-de-vie/bebe-chiots-lit-douillet.webp",
                                            "pages/conditions-de-vie/salle-ambiante-pour-chiots.webp",
                                        ]}
                                        alt="Carrousel montrant les cocons et espaces de repos des chiots de l elevage"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                            </div>
                        </section>
                        {/* Espaces Intérieurs */}
                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-80 md:h-122 rounded-lg overflow-hidden md:order-2">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-sur-structure-bois-01.webp",
                                                alt: "Mameshiba en découverte sur une structure en bois",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-parmi-les-branches.webp",
                                                alt: "Mameshiba observant son environnement pendant une phase de découverte",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-jardin-course-02.webp",
                                                alt: "Mameshiba en mouvement pendant une séance de jeux d'éveil",
                                            },
                                        ]}
                                        alt="Carrousel d'images montrant les jeux et activités de nos chiots"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Spa className="h-4 w-4 mr-2" />
                                        Socialisation
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Jeux d&apos;éveil et découvertes</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Tunnels, textures, sons doux et rencontres quotidiennes : nous multiplions les expériences positives, tout en respectant le rythme propre au Mameshiba. L’idée n’est pas de surstimuler, mais d’aider chaque chiot à découvrir le monde avec curiosité, sécurité et stabilité.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Espaces Extérieurs */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Dumbbell className="h-4 w-4 mr-2" />
                                        Jardin sécurisé
                                    </Badge>
                                    <h3 className="text-xl md:text-2xl font-bold">Des sorties régulières en pleine nature, au service de l’équilibre du Mameshiba</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Chez Kawaii Shiba, le bien-être et l’équilibre de nos chiens et chiots sont une priorité quotidienne. Au-delà d’un environnement sécurisé à la maison, nous accordons une place essentielle aux sorties régulières en pleine nature, toujours encadrées.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Forêts, jardins, lacs, prairies et chemins de campagne font partie intégrante de leur quotidien. Ces promenades permettent aux adultes comme aux chiots de découvrir des environnements variés, de développer leur curiosité naturelle et de renforcer leur confiance face aux bruits du monde extérieur.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Les chiots bénéficient ainsi très tôt d’une socialisation progressive et positive : nouveaux sons, nouvelles odeurs, terrains différents, interactions avec leurs congénères et avec l’humain. Pour le Mameshiba, cette progressivité est essentielle car sa sensibilité demande des repères clairs et une vraie douceur dans l’apprentissage.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        À la maison, cet apprentissage est complété par un parc d’herbe clôturé, des jeux en extérieur et un apprentissage progressif de la propreté, toujours dans le respect du rythme de chaque chiot.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Notre engagement est simple : élever des Mameshiba bien dans leurs pattes, sociables, équilibrés et prêts à s’épanouir pleinement au sein de leur future famille.
                                    </p>
                                </div>
                                <div className="relative h-80 md:h-122 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/pages/image-all-shiba/jardin-cloture-elevage-horizontal.webp",
                                                alt: "Parc extérieur clôturé de l'élevage pour les sorties quotidiennes",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-en-laisse-herbe-01.webp",
                                                alt: "Mameshiba accompagné en longe pendant une sortie encadrée",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-jardin-ensemble-03.webp",
                                                alt: "Mameshiba évoluant dans un espace extérieur sécurisé de l'élevage",
                                            },
                                        ]}
                                        alt="Carrousel d images de chiots et d adultes jouant en plein air sous encadrement"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                            </div>
                        </section>
                        {/* Alimentation */}
                        <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-80 rounded-lg overflow-hidden md:order-2">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/pages/conditions-de-vie/nourrite-des-chiots-marque.webp",
                                                alt: "Alimentation remise au départ pour accompagner la transition du chiot",
                                            },
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-interieur-textile-01.webp",
                                                alt: "Mameshiba au calme dans un environnement intérieur soigné",
                                            },
                                        ]}
                                        alt="Carrousel d'images de l'alimentation et les soins des chiots et des chiens adultes reproducteurs"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                                <div className="space-y-6 md:order-1">
                                    <Badge variant="secondary" className="w-fit">
                                        <Utensils className="h-4 w-4 mr-2" />
                                        Alimentation
                                    </Badge>
                                    <h3
                                        className="text-xl md:text-2xl font-bold">Nutrition et soins adaptée</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Sevrage en douceur, alimentation de qualité et accompagnement précis pour respecter le petit format du Mameshiba et ses besoins digestifs. Un kit alimentaire de départ est remis le jour du départ pour faciliter la transition.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Chambres */}
                        {/* <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="secondary" className="w-fit">
                                        <Bed className="h-4 w-4 mr-2" />
                                        Temps calme
                                    </Badge>
                                    <h3
                                        className="text-xl md:text-2xl font-bold">Attente avec maman</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Espaces de repos et séparation progressive pour faciliter l’apprentissage du calme, l’autonomie et la gestion douce des séparations, tout en respectant le lien essentiel avec la mère.
                                    </p>
                                </div>
                                <div className="relative h-104 md:h-180 rounded-lg overflow-hidden">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/pages/image-all-shiba/mameshiba-interieur-textile-01.webp",
                                                alt: "Mameshiba au repos dans un espace intérieur calme et rassurant",
                                            },
                                            {
                                                src: "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg",
                                                alt: "Jeune chiot Mameshiba dans une ambiance calme et douce",
                                            },
                                        ]}
                                        alt="Carrousel d images des chiots avec leurs mamans et l eleveuse"
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                                        quality={60}
                                    />
                                </div>
                            </div>
                        </section> */}
                    </div>
                    {/* Programme Type */}
                    <section className="mt-16">
                        <div className="text-center mb-12">
                            <h2
                                className="text-xl md:text-2xl font-bold mb-4">Planning de socialisation</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Matin</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>8h :</strong> Pesée, soins et nettoyage de la nurserie
                                        </p>
                                        <p>
                                            <strong>9h :</strong> Jeux d&apos;éveil et manipulations douces
                                        </p>
                                        <p>
                                            <strong>10h :</strong> Sortie au jardin ou sur la terrasse
                                        </p>
                                        <p>
                                            <strong>11h :</strong> Séance d&apos;imprégnation sons, textures et repères
                                        </p>
                                        <p>
                                            <strong>12h :</strong> Sieste et repas de la mère
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle>Après-midi</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <p>
                                            <strong>13h :</strong> Repas des chiots et jeux calmes
                                        </p>
                                        <p>
                                            <strong>14h :</strong> Présentation de nouveaux objets et odeurs
                                        </p>
                                        <p>
                                            <strong>15h :</strong> Séances individuelles avec manipulation vétérinaire simulée
                                        </p>
                                        <p>
                                            <strong>16h30 :</strong> Visite des familles réservataires (sur rendez-vous)
                                        </p>
                                        <p>
                                            <strong>19h :</strong> Dernière sortie, câlins et mise au repos
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <InternalLinksSection
                        title="Liens utiles pour continuer la visite"
                        description="Après le quotidien des chiots et des adultes, voici les pages les plus utiles pour comprendre l’élevage, préparer l’adoption et suivre nos disponibilités."
                        items={wellnessInternalLinks}
                        className="mt-16"
                    />

                    <FAQSection
                        title="FAQ adoption et quotidien"
                        description="Tout ce qu’il faut savoir sur le quotidien en élevage, la socialisation et les besoins du Mameshiba."
                        items={faqBienEtre}
                    />
                    {/* Localisation */}
                    <section className="mt-16 text-center">
                        <h2
                            className="text-xl md:text-2xl font-bold mb-4">Visiter l&apos;élevage</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            Notre élevage se situe à Dommartin-lès-Cuiseaux, en Saône-et-Loire (71). Les visites se font exclusivement sur
                            rendez-vous pour préserver la tranquillité des chiots et des mamans.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-6 m-auto flex w-fit items-center justify-center rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >Contacter l&apos;élevage</Link>
                        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 text-muted-foreground">
                            <PawPrint className="h-5 w-5" aria-hidden="true" />
                            <span>Parking sur place et promenade à quelques minutes.</span>
                        </div>
                    </section>
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
