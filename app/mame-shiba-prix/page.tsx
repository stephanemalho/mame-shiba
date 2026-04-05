import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FAQSection, type FAQItem } from "@/components/faq"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig, sitemapPages } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { Banknote, Heart, NotebookText, PawPrint, ShieldCheck, Sprout } from "lucide-react"

const mameshibaPriceOgJpg = "/pages/image-all-shiba/mameshiba-exterieur-profil-01.webp"

export const metadata: Metadata = {
    title: pageMetadata.mameshibaPrice.title,
    description: pageMetadata.mameshibaPrice.description,
    keywords: pageMetadata.mameshibaPrice.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.mameshibaPrice.title,
        description: pageMetadata.mameshibaPrice.description,
        url: `${siteConfig.siteUrl}${siteConfig.pages.mameshibaPrice}`,
        images: [
            {
                url: `${siteConfig.siteUrl}${mameshibaPriceOgJpg}`,
                alt: "Chiot Mameshiba de l elevage Kawaii Shiba",
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.mameshibaPrice.title,
        description: pageMetadata.mameshibaPrice.description,
        imageUrl: `${siteConfig.siteUrl}${mameshibaPriceOgJpg}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}${siteConfig.pages.mameshibaPrice}`,
    },
}

const quickPrices = [
    { label: "Mâle Mameshiba", price: "4 500 €" },
    { label: "Femelle Mameshiba", price: "5 000 €" },
    { label: "Réservations", price: "sur demande" },
]

const priceCategories = [
    {
        category: "Mâle Mameshiba",
        profile: "chiot de compagnie issu de notre sélection, suivi avec sérieux et élevé pour une vie de famille équilibrée",
        lineage: "sélection Kawaii Shiba",
        price: "4 500 €",
        availability: "Selon les portées",
    },
    {
        category: "Femelle Mameshiba",
        profile: "chiot de compagnie issu de notre sélection, avec le même niveau d’exigence sur le type, le caractère et le suivi",
        lineage: "sélection Kawaii Shiba",
        price: "5 000 €",
        availability: "Selon les portées",
    },
    {
        category: "Réservation",
        profile: "échange préalable, présentation du projet, étude du mode de vie et accompagnement avant la naissance ou avant le départ",
        lineage: "approche personnalisée",
        price: "sur demande",
        availability: "Oui",
    },
]

const priceFactors = [
    {
        title: "1. Une sélection exigeante des lignées",
        text: "Nos tarifs reflètent d’abord le travail de sélection réalisé autour de nos reproducteurs. Nous cherchons un Mameshiba cohérent, bien construit, équilibré et fidèle au type que nous souhaitons préserver à l’élevage.",
    },
    {
        title: "2. Des portées rares et suivies de près",
        text: "Nos portées restent limitées et chaque chiot bénéficie d’une attention quotidienne. Le prix tient compte du temps réellement consacré à la portée, du rythme de nos chiens adultes et de notre volonté de ne pas produire vite.",
    },
    {
        title: "3. La santé, le cadre de vie et la transparence",
        text: "Nos prix incluent aussi le soin porté au suivi des adultes, au quotidien des chiots, à la qualité de leur environnement et à la lisibilité de notre travail. Nous préférons une démarche claire à des promesses commerciales floues.",
    },
    {
        title: "4. Une socialisation sérieuse",
        text: "Le Mameshiba est un petit chien fin, sensible et intelligent. Nous attachons beaucoup d’importance à la qualité des premières semaines, à la stabilité émotionnelle et aux manipulations adaptées avant le départ.",
    },
    {
        title: "5. Un accompagnement d’élevage, pas une simple vente",
        text: "Nous prenons le temps d’échanger avec chaque famille, de comprendre le projet d’adoption et d’accompagner le départ du chiot. Le prix comprend aussi cette disponibilité et cette exigence dans le suivi.",
    },
]

const includedItems = [
    "la sélection attentive des adultes qui composent notre programme d’élevage",
    "des mariages pensés pour préserver le type, la santé et le caractère",
    "le suivi quotidien de la portée dès les premiers jours",
    "le temps consacré à la présence humaine et à la socialisation progressive",
    "un cadre de vie stable, propre et adapté au développement du chiot",
    "les premiers soins et le suivi de base avant le départ",
    "les documents remis au moment de l’adoption",
    "des conseils personnalisés pour préparer l’arrivée à la maison",
    "un accompagnement sérieux pour poser des bases sereines dès le début",
]

const categoryGuides = [
    {
        title: "Le prix ne remplace jamais la compatibilité",
        text: "Le bon chiot n’est pas simplement celui qui vous plaît sur photo. Le plus important reste la cohérence entre son tempérament, votre mode de vie et le sérieux du travail mené à l’élevage.",
    },
    {
        title: "Le caractère compte autant que le physique",
        text: "Chez un Mameshiba, nous regardons autant l’équilibre émotionnel, la sensibilité et la qualité de la socialisation que l’esthétique du chiot.",
    },
    {
        title: "Le tarif s’apprécie dans l’ensemble du projet",
        text: "Un prix ne se lit pas isolément. Il faut regarder les lignées, la qualité de vie des chiens, la vision d’élevage, la transparence et l’accompagnement proposé autour du chiot.",
    },
]

const faqMameshibaPrice: FAQItem[] = [
    {
        question: "Quel est le prix d’un Mameshiba chez Kawaii Shiba ?",
        answer: (
            <p>
                Chez Kawaii Shiba, le prix de nos chiots Mameshiba est actuellement de 4 500 € pour un mâle et de 5 000 € pour une femelle.
            </p>
        ),
    },
    {
        question: "Pourquoi le prix d’une femelle est-il plus élevé ?",
        answer: (
            <p>
                Le prix d’une femelle est fixé à 5 000 € dans notre élevage. Cette différence s’inscrit dans notre politique tarifaire actuelle et dans la gestion globale de notre sélection.
            </p>
        ),
    },
    {
        question: "Que comprend le prix d’un chiot Mameshiba ?",
        answer: (
            <p>
                Le prix ne correspond pas seulement au chiot le jour de son départ. Il comprend aussi tout le travail réalisé avant : sélection des adultes, suivi de la portée, soins, socialisation, préparation du chiot et échanges avec sa future famille.
            </p>
        ),
    },
    {
        question: "Le prix varie-t-il selon le sexe du chiot ?",
        answer: (
            <p>
                Oui. Dans notre élevage, le tarif actuel est de 4 500 € pour un mâle et de 5 000 € pour une femelle.
            </p>
        ),
    },
    {
        question: "Peut-on réserver même s’il n’y a pas encore de chiot affiché ?",
        answer: (
            <p>
                Oui. Lorsque tous les chiots sont déjà réservés ou qu’une portée arrive très bientôt, nous pouvons échanger avec les familles en amont afin de mieux comprendre leur projet et d’ouvrir les réservations de manière cohérente.
            </p>
        ),
    },
]

export default function MameshibaPricePage() {
    const pageLastModValue = sitemapPages.find((page) => page.url === siteConfig.pages.mameshibaPrice)?.lastmod
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Prix de nos Mameshiba", url: siteConfig.pages.mameshibaPrice },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqMameshibaPrice))
    const lastMod = returnLastmod(siteConfig.pages.mameshibaPrice)

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
                <div className="container mx-auto space-y-16">
                    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Prix de nos Mameshiba
                            </Badge>
                            <h1 className="text-2xl font-bold md:text-4xl">
                                Prix de nos Mameshiba à l’élevage Kawaii Shiba
                            </h1>
                            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                                Chez Kawaii Shiba, nous souhaitons afficher nos tarifs de manière simple et lisible. Le prix de nos chiots Mameshiba est actuellement fixé à 4 500 € pour un mâle et 5 000 € pour une femelle.
                            </p>
                            <p className="max-w-3xl leading-relaxed text-muted-foreground">
                                Cette page présente nos prix à l’élevage, ce qu’ils reflètent dans notre travail et la manière dont nous accompagnons les familles avant toute réservation.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={siteConfig.pages.puppies}
                                    className="inline-flex w-fit rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                                >
                                    Voir les réservations en cours
                                </Link>
                                <Link
                                    href={siteConfig.pages.contact}
                                    className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                    Nous contacter
                                </Link>
                            </div>
                        </div>

                        <div className="relative h-80 overflow-hidden rounded-2xl bg-muted lg:h-[30rem]">
                            <Image
                                src={mameshibaPriceOgJpg}
                                alt="Chiot Mameshiba de Kawaii Shiba"
                                fill
                                priority
                                fetchPriority="high"
                                className="object-cover"
                                sizes="(min-width: 1024px) 40vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" aria-hidden="true" />
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Nos tarifs à l’élevage</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Nos chiots Mameshiba sont proposés à 4 500 € pour un mâle et 5 000 € pour une femelle. Nous avons fait le choix d’un affichage clair pour que les familles puissent se projeter sereinement.
                            </p>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Au-delà du tarif affiché, ces prix reflètent notre sélection, le temps consacré aux chiots, la qualité de vie proposée à l’élevage et l’accompagnement autour de chaque adoption.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {quickPrices.map((item) => (
                                <Card key={item.label} className="border-primary/15 bg-primary/5">
                                    <CardHeader className="space-y-3">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Banknote className="h-4 w-4" aria-hidden="true" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                        <p className="text-2xl font-bold text-foreground">{item.price}</p>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Comment se présentent nos prix ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Voici la manière dont nous présentons nos tarifs à l’élevage aujourd’hui, avec une lecture simple par profil et par mode de réservation.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-2xl border bg-muted/35">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm">
                                    <thead className="bg-background/80">
                                        <tr className="border-b">
                                            <th className="px-5 py-4 font-semibold">Profil</th>
                                            <th className="px-5 py-4 font-semibold">Description</th>
                                            <th className="px-5 py-4 font-semibold">Approche d’élevage</th>
                                            <th className="px-5 py-4 font-semibold">Tarif</th>
                                            <th className="px-5 py-4 font-semibold">Chez Kawaii Shiba</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {priceCategories.map((item) => (
                                            <tr key={item.category} className="border-b last:border-b-0">
                                                <td className="px-5 py-4 font-semibold text-foreground">{item.category}</td>
                                                <td className="px-5 py-4 text-muted-foreground">{item.profile}</td>
                                                <td className="px-5 py-4 text-muted-foreground">{item.lineage}</td>
                                                <td className="px-5 py-4 font-medium text-primary">{item.price}</td>
                                                <td className="px-5 py-4 text-muted-foreground">{item.availability}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <Card className="bg-muted/45">
                            <CardContent className="space-y-3 p-6 text-sm leading-relaxed text-muted-foreground md:p-8">
                                <p>
                                    Chez nous, le prix ne vise pas à nourrir un discours commercial flou. Il correspond à notre politique tarifaire actuelle et à une vision d’élevage centrée sur la sélection, la cohérence du type, l’équilibre du chiot et la qualité de vie qui lui est offerte.
                                </p>
                                <p>
                                    Nous préférons une page simple, lisible et honnête : des tarifs affichés clairement, puis des explications sur ce qu’ils recouvrent dans notre travail quotidien.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Ce que reflètent nos prix à l’élevage</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Nos tarifs ne sont pas pensés comme un simple chiffre. Ils reflètent l’ensemble du travail d’élevage réalisé autour de chaque portée et le niveau d’exigence que nous souhaitons maintenir chez Kawaii Shiba.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {priceFactors.map((factor) => (
                                <Card key={factor.title} className="bg-muted/40">
                                    <CardHeader>
                                        <h3 className="text-lg font-semibold">{factor.title}</h3>
                                    </CardHeader>
                                    <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                        {factor.text}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 rounded-2xl bg-muted/35 p-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Que comprennent nos prix ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Adopter un chiot chez nous ne consiste pas seulement à réserver un chien. Le tarif comprend tout le travail invisible réalisé en amont pour vous confier un chiot préparé, entouré et accompagné de manière responsable.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <Card className="bg-background/85">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <NotebookText className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Ce que nos tarifs incluent notamment</h3>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                                        {includedItems.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden bg-background/85">
                                <div className="relative min-h-72">
                                    <Image
                                        src="/pages/mame-shiba-prix/deux-mame-shiba-chiots-blanc-et-un-noir.jpeg"
                                        alt="Mameshiba adulte de l elevage Kawaii Shiba"
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 30vw, 100vw"
                                    />
                                </div>
                                <CardContent className="space-y-3 p-6 text-sm leading-relaxed text-muted-foreground">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Heart className="h-4 w-4" aria-hidden="true" />
                                        <span className="font-medium">Bloc de réassurance</span>
                                    </div>
                                    <p>
                                        Un chiot bien né, bien entouré et bien préparé ne se résume jamais à une étiquette. La valeur de notre travail se joue aussi dans tout ce qui ne se voit pas immédiatement : le temps, l’exigence, la patience et la cohérence du projet d’élevage.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                            <div className="relative h-80 overflow-hidden rounded-2xl bg-muted lg:h-120">
                                <Image
                                    src="/pages/mame-shiba-prix/trois-mame-shiba-bebe.jpg"
                                    alt="Mameshiba adulte chez Kawaii Shiba"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 35vw, 100vw"
                                />
                            </div>
                            <div className="space-y-4">
                                <Badge variant="secondary" className="w-fit">
                                    Bien choisir
                                </Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Comment bien lire le prix d’un chiot chez nous ?</h2>
                                <p className="leading-relaxed text-muted-foreground">
                                    Le bon choix ne consiste pas à regarder seulement un montant. Un projet d’adoption réussi repose surtout sur la compatibilité entre le chiot, votre mode de vie et la qualité réelle du travail mené par l’élevage.
                                </p>
                                <p className="leading-relaxed text-muted-foreground">
                                    Nous vous encourageons à lire nos prix comme un repère clair, puis à regarder l’ensemble : origine, sélection, cadre de vie, socialisation, accompagnement et sérieux de la relation construite avant le départ du chiot.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {categoryGuides.map((item) => (
                                <Card key={item.title} className="bg-muted/40">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <h3 className="font-semibold">{item.title}</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-sm leading-relaxed text-muted-foreground">
                                        {item.text}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <Card className="border-primary/15 bg-primary/5">
                            <CardContent className="space-y-4 p-6 md:p-8">
                                <div className="flex items-center gap-2 text-primary">
                                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                                    <span className="text-sm font-medium">Mieux comprendre la race</span>
                                </div>
                                <h2 className="text-xl font-bold md:text-2xl">Vous souhaitez mieux connaître la race avant de réserver ?</h2>
                                <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                    Avant une réservation, il est utile de bien comprendre ce qu’est réellement un Mameshiba, son origine, son standard, sa rareté et les points de vigilance à connaître avant toute adoption.
                                </p>
                                <Link
                                    href={siteConfig.pages.shiba}
                                    className="inline-flex rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                    Découvrir le Mameshiba
                                </Link>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-6">
                        <Card className="bg-muted/45">
                            <CardContent className="space-y-5 p-6 md:p-8 lg:p-10">
                                <div className="flex items-center gap-2 text-primary">
                                    <Sprout className="h-4 w-4" aria-hidden="true" />
                                    <span className="text-sm font-medium">Projet d’adoption</span>
                                </div>
                                <h2 className="text-xl font-bold md:text-2xl">Découvrir nos prochaines disponibilités</h2>
                                <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                    Vous pouvez consulter la page dédiée ou nous contacter pour échanger sur votre projet d’adoption, les réservations en cours et les prochaines disponibilités de l’élevage.
                                </p>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href={siteConfig.pages.puppies}
                                        className="inline-flex w-fit rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                                    >
                                        Voir les réservations
                                    </Link>
                                    <Link
                                        href={siteConfig.pages.contact}
                                        className="inline-flex w-fit rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                    >
                                        Nous contacter
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <FAQSection
                        title="Questions fréquentes sur nos prix Mameshiba"
                        description="Les réponses essentielles sur nos tarifs à l’élevage, ce qu’ils recouvrent et la manière dont nous accompagnons les réservations."
                        items={faqMameshibaPrice}
                    />

                    {pageLastModValue ? (
                        <div className="text-right text-xs text-muted-foreground">
                            Dernière mise à jour : {lastMod}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}
