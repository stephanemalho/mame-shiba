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

const mameshibaPriceOgJpg = "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg"

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
                alt: "Chiot Mame Shiba de l elevage Kawaii Shiba",
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
    { label: "Fourchette Kawaii Shiba", price: "3 800 € à 4 500 €" },
    { label: "Réservations", price: "ouvertes" },
    { label: "Prochaine portée", price: "très bientôt" },
]

const priceCategories = [
    {
        category: "Réservation sur portée à venir",
        profile: "accompagnement en amont, projet réfléchi et étude du mode de vie",
        lineage: "sélection Kawaii Shiba",
        price: "3 800 € à 4 500 €",
        availability: "Oui",
    },
    {
        category: "Chiot Mame Shiba de compagnie",
        profile: "petit format harmonieux, tempérament suivi, sélection sérieuse, morphologie parfaite",
        lineage: "origines japonaises travaillées",
        price: "à partir de 4 200 €",
        availability: "Selon la portée",
    },
    {
        category: "Profils les plus recherchés",
        profile: "combinaison d'excellence, couleur très rare, morphologie parfaite, sexe ou expression très convoitée",
        lineage: "sélection exigeante",
        price: "haut de fourchette",
        availability: "Très limité",
    },
]

const priceFactors = [
    {
        title: "1. La rareté du Mame Shiba en France",
        text: "Le Mame Shiba reste un chien très rare. Les portées sont souvent petites et les sujets réellement cohérents avec le type recherché sont peu nombreux. Cette rareté influence naturellement le prix d’un chiot bien sélectionné.",
    },
    {
        title: "2. La qualité des origines et des lignées",
        text: "Le prix dépend aussi du travail réalisé autour des lignées japonaises, de la cohérence du type, du petit format recherché et de la vision d’élevage sur plusieurs générations. On ne parle pas seulement d’un chiot mignon, mais d’un vrai travail de sélection.",
    },
    {
        title: "3. La santé et la transparence",
        text: "Un élevage sérieux investit dans le suivi des reproducteurs, la traçabilité des origines, les tests utiles et une sélection rigoureuse pour éviter les profils approximatifs. Le tarif reflète aussi ce niveau d’exigence et de sécurité pour les familles.",
    },
    {
        title: "4. Le temps consacré à la socialisation",
        text: "Le Mame Shiba est un petit chien sensible, fin et intelligent. Son équilibre dépend énormément de la qualité des premières semaines, du calme de son environnement, des manipulations douces et de l’accompagnement mis en place avant son départ.",
    },
    {
        title: "5. L’accompagnement avant et après l’adoption",
        text: "Le prix comprend aussi le temps passé à échanger avec les familles, à comprendre leur projet, à orienter le choix du chiot et à accompagner les débuts de la relation. Une adoption réussie commence bien avant le départ du chiot.",
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
        title: "Le plus petit n’est pas toujours le meilleur choix",
        text: "Pour un Mame Shiba, la cohérence du type, la santé et l’équilibre émotionnel comptent davantage qu’une simple recherche du plus petit gabarit possible.",
    },
    {
        title: "Le caractère mérite autant d’attention que le physique",
        text: "Un chiot bien dans ses pattes, sensible sans être débordé, curieux et capable de s’adapter à votre foyer sera toujours un meilleur choix qu’un profil sélectionné uniquement sur l’apparence.",
    },
    {
        title: "L’origine doit rester lisible et sérieuse",
        text: "Dans une race encore rare et parfois source de confusion, il est essentiel de s’intéresser à la traçabilité des lignées, à la qualité de l’élevage et à la cohérence globale du projet.",
    },
]

const faqMameshibaPrice: FAQItem[] = [
    {
        question: "Quel est le prix d’un Mame Shiba chez Kawaii Shiba ?",
        answer: (
            <p>
                Chez Kawaii Shiba, le prix d’un chiot Mame Shiba se situe actuellement entre 3 800 € et 4 500 € selon le profil du chiot, la portée, sa morphologie et les critères de sélection propres à notre élevage.
            </p>
        ),
    },
    {
        question: "Pourquoi le prix d’un Mame Shiba peut-il sembler élevé ?",
        answer: (
            <p>
                Le Mame Shiba est une race rare, avec peu de chiots par portée et un vrai travail de sélection en amont. Le prix reflète la qualité des origines, le suivi des adultes, la socialisation, le temps consacré au chiot et l’accompagnement des familles.
            </p>
        ),
    },
    {
        question: "Que comprend le prix d’un chiot Mame Shiba ?",
        answer: (
            <p>
                Le prix ne correspond pas seulement au chiot le jour de son départ. Il comprend aussi tout le travail réalisé avant : sélection des adultes, suivi de la portée, soins, socialisation, préparation du chiot et échanges avec sa future famille.
            </p>
        ),
    },
    {
        question: "Faut-il se méfier d’un Mame Shiba proposé beaucoup moins cher ?",
        answer: (
            <p>
                Oui, il est important de rester vigilant. Dans une race encore peu répandue, un tarif très bas doit vous pousser à vérifier sérieusement l’origine du chiot, la transparence de l’éleveur, la cohérence des lignées et la qualité réelle de la sélection.
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
        { name: "Prix du Mame Shiba", url: siteConfig.pages.mameshibaPrice },
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
                                Prix du Mame Shiba
                            </Badge>
                            <h1 className="text-2xl font-bold md:text-4xl">
                                Prix d’un Mame Shiba en France : fourchette, critères et repères avant adoption
                            </h1>
                            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                                Le prix d’un Mame Shiba en France peut varier selon la rareté de la portée, la qualité des origines, le travail de sélection, la socialisation et le sérieux de l’élevage. Chez Kawaii Shiba, nous faisons le choix d’une fourchette claire et assumée pour aider les familles à mieux comprendre ce qui se cache derrière le tarif d’un chiot.
                            </p>
                            <p className="max-w-3xl leading-relaxed text-muted-foreground">
                                À titre indicatif, nos chiots Mame Shiba se situent actuellement entre 3 800 € et 4 500 €. Cette page vous aide à comprendre pourquoi cette fourchette existe et quels points regarder avant de vous engager.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={siteConfig.pages.puppies}
                                    className="inline-flex w-fit rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
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
                                alt="Chiot Mame Shiba de Kawaii Shiba"
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
                            <h2 className="text-xl font-bold md:text-2xl">Combien coûte un Mame Shiba ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Chez Kawaii Shiba, la fourchette de prix actuellement pratiquée pour un chiot Mame Shiba se situe entre 3 800 € et 4 500 €. Le prix exact dépend du profil du chiot, de la portée et de la cohérence globale du projet d’adoption.
                            </p>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Plus qu’un simple prix affiché, cette fourchette reflète la rareté de la race, le travail de sélection en amont et l’investissement nécessaire pour proposer des chiots équilibrés, bien entourés et issus d’une démarche sérieuse.
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
                            <h2 className="text-xl font-bold md:text-2xl">Nos repères de prix pour le Mame Shiba</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Le Mame Shiba n’est pas une race de grande diffusion. Pour vous aider à mieux comprendre notre positionnement, voici les principaux repères que nous utilisons lorsque nous parlons de prix et de réservations.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-2xl border bg-muted/35">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm">
                                    <thead className="bg-background/80">
                                        <tr className="border-b">
                                            <th className="px-5 py-4 font-semibold">Repère</th>
                                            <th className="px-5 py-4 font-semibold">Profil</th>
                                            <th className="px-5 py-4 font-semibold">Origine et sélection</th>
                                            <th className="px-5 py-4 font-semibold">Fourchette indicative</th>
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
                                    Chez nous, le prix ne vise pas à vendre “le plus petit possible” ou à créer une rareté artificielle. Il reflète une recherche d’équilibre entre type, petit format harmonieux, caractère, santé, traçabilité des origines et qualité de vie donnée au chiot.
                                </p>
                                <p>
                                    Dans une race comme le Mame Shiba, il est essentiel de regarder l’ensemble du projet d’élevage et non un seul argument commercial. Le bon chiot est celui qui réunit cohérence, sérieux et compatibilité avec votre foyer.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold md:text-2xl">Pourquoi le prix d’un Mame Shiba peut-il varier ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Deux chiots issus d’une même race ne représentent pas toujours le même niveau de travail, de rareté ou de sélection. Pour le Mame Shiba, plusieurs critères expliquent les écarts que l’on peut observer d’un élevage à l’autre.
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
                            <h2 className="text-xl font-bold md:text-2xl">Que comprend le prix d’un chiot Mame Shiba chez Kawaii Shiba ?</h2>
                            <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                Adopter un chiot dans un élevage sérieux ne consiste pas seulement à réserver un chien. Le prix comprend tout le travail invisible réalisé en amont pour vous confier un chiot préparé, entouré et accompagné de manière responsable.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <Card className="bg-background/85">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <NotebookText className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <h3 className="font-semibold">Ce que le prix inclut notamment</h3>
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
                                        src="/pages/reproducteurs/SAKURA-white-mame-shiba-from-japan.jpg"
                                        alt="Mame Shiba adulte de l elevage Kawaii Shiba"
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
                                        Un chiot bien né, bien entouré et bien préparé ne se résume jamais à une étiquette de prix. La valeur d’un Mame Shiba sérieux se joue aussi dans tout ce qui ne se voit pas immédiatement : le temps, l’exigence, la patience et la cohérence du travail réalisé autour de lui.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                            <div className="relative h-80 overflow-hidden rounded-2xl bg-muted lg:h-[30rem]">
                                <Image
                                    src="/pages/reproducteurs/ISHIRO-mame-shiba-kawaii-shiba.jpeg"
                                    alt="Mame Shiba adulte chez Kawaii Shiba"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 35vw, 100vw"
                                />
                            </div>
                            <div className="space-y-4">
                                <Badge variant="secondary" className="w-fit">
                                    Bien choisir
                                </Badge>
                                <h2 className="text-xl font-bold md:text-2xl">Comment bien lire le prix d’un Mame Shiba ?</h2>
                                <p className="leading-relaxed text-muted-foreground">
                                    Le meilleur choix n’est pas forcément le moins cher, ni le plus petit, ni le plus rare en apparence. Un bon projet d’adoption repose surtout sur la compatibilité entre le chiot, votre mode de vie et la qualité du travail réalisé par l’élevage.
                                </p>
                                <p className="leading-relaxed text-muted-foreground">
                                    Dans une race encore confidentielle, mieux vaut prendre le temps de comprendre l’origine, la sélection et le tempérament du chiot plutôt que de décider uniquement sur un prix ou une promesse marketing.
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
                                <h2 className="text-xl font-bold md:text-2xl">Vous souhaitez aller plus loin avant de réserver ?</h2>
                                <p className="max-w-4xl leading-relaxed text-muted-foreground">
                                    Avant de comparer des prix, il est utile de bien comprendre ce qu’est réellement un Mame Shiba, son origine, son standard, sa rareté et les points de vigilance à connaître avant toute adoption.
                                </p>
                                <Link
                                    href={siteConfig.pages.shiba}
                                    className="inline-flex rounded-md border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                    Découvrir le Mame Shiba
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
                                    Tous nos chiots actuellement disponibles sont déjà réservés, mais une prochaine portée arrive très bientôt. Vous pouvez consulter la page dédiée ou nous contacter pour échanger sur votre projet et les réservations en cours.
                                </p>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href={siteConfig.pages.puppies}
                                        className="inline-flex w-fit rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/85 dark:text-[#5b3a1a]"
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
                        title="Questions fréquentes sur le prix du Mame Shiba"
                        description="Les réponses essentielles sur la fourchette de prix, ce qu’elle recouvre et les points de vigilance avant réservation."
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
