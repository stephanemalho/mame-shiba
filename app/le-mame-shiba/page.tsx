import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqMameShiba } from "@/lib/faq-data"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { Feather, Heart, History, PawPrint, Ruler, Scale, ScrollText, Sparkles } from "lucide-react"

const pageImage = "/pages/homePage/mame-shiba-for-modern-life.jpeg"

export const metadata: Metadata = {
    title: pageMetadata.pomsky.title,
    description: pageMetadata.pomsky.description,
    keywords: pageMetadata.pomsky.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.pomsky.title,
        description: pageMetadata.pomsky.description,
        url: `${siteConfig.siteUrl}/le-mame-shiba`,
        images: [
            {
                url: `${siteConfig.siteUrl}${pageImage}`,
                alt: "Mameshiba assis dans un decor doux et naturel",
                width: 1200,
                height: 630,
                type: "image/jpeg",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.pomsky.title,
        description: pageMetadata.pomsky.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/le-mame-shiba`,
    },
}

const sizes = [
    {
        title: pageContent.pomsky.h3toy,
        height: "Mâle : 38 à 41 cm • Femelle : 35 à 38 cm",
        frame: "Standard LOF du Shiba Inu",
        text: "Le Shiba Inu constitue la référence d'origine. Le Mameshiba en reprend le type, la noblesse et la structure générale, mais dans un format plus compact sélectionné au Japon.",
        image: "/pages/homePage/SHIBA-INU-ET-MAMESHIBA-300x261.jpeg",
        alt: "Comparatif entre un Shiba Inu et un Mameshiba",
    },
    {
        title: pageContent.pomsky.h3Miniature,
        height: "25 à 34 cm au garrot",
        frame: "Format compact et masculin",
        text: "Pour être enregistré comme Mameshiba, le chien doit avoir terminé sa croissance. La mesure officielle intervient à partir d'un an, avec validation du type et de la taille.",
        image: "/pages/homePage/little-mame-shiba-red-white.jpeg",
        alt: "Mameshiba roux et blanc assis dans l'herbe",
    },
    {
        title: pageContent.pomsky.h3Standard,
        height: "25 à 32 cm au garrot",
        frame: "Format compact et féminin",
        text: "La femelle Mameshiba conserve l'expression douce, les oreilles triangulaires, la queue portée sur le dos et l'allure vive typiques du Shiba Inu, dans un petit gabarit.",
        image: "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg",
        alt: "Jeune Mameshiba blanc dans un jardin",
    },
]

const historySteps = [
    {
        title: "Des petits Shiba déjà présents dans le Japon rural",
        description:
            "Bien avant que le nom Mameshiba ne soit popularisé, il existait déjà de très petits Shiba Inu élevés dans certaines régions japonaises. Ils partageaient les aptitudes de chasse et la rusticité des chiens primitifs du pays.",
        image: "/pages/homePage/mame-shiba-decor-champs-de-lavande.jpg",
        alt: "Mameshiba roux dans un decor floral",
    },
    {
        title: "Une sélection poursuivie à partir des années 1950",
        description:
            "Le travail de sélection s'est construit sur plusieurs générations à partir de Shiba Inu trop petits pour entrer dans le standard classique. L'objectif n'était pas de produire un chien fragile, mais de fixer un petit format cohérent et sain.",
        image: "/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg",
        alt: "Chiot Mameshiba blanc dans un univers japonais",
    },
    {
        title: "Un enregistrement encadré par le KCJ",
        description:
            "Le Kennel Club of Japan a donné un cadre plus officiel à la race et a commencé les enregistrements de Mameshiba en 2008. La reconnaissance du club s'appuie sur la mesure à l'âge adulte et sur la traçabilité généalogique.",
        image: "/pages/homePage/ISHIRO-mame-shiba-kawaii-shiba.jpeg",
        alt: "Mameshiba gris et blanc assis devant un fond clair",
    },
]

export default function MameShibaPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Le Mameshiba", url: siteConfig.pages.pomsky },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqMameShiba))
    const lastMod = returnLastmod(siteConfig.pages.pomsky)

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
                    <section className="grid gap-10 items-center mb-16 md:grid-cols-2">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Le Mameshiba
                            </Badge>
                            <h1 className="text-xl md:text-3xl font-bold">
                                {pageContent.pomsky.h1}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {pageContent.pomsky.description}
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Petit format, grand tempérament</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Origines japonaises et type primitif</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Feather className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>Race rare qui demande de vraies vérifications</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-72 rounded-lg overflow-hidden bg-black md:h-105">
                            <Image
                                src={pageImage}
                                alt="Mameshiba dans un decor naturel aux couleurs douces"
                                fill
                                className="object-cover"
                                priority
                                fetchPriority="high"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                quality={75}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" aria-hidden="true" />
                        </div>
                    </section>

                    <section className="mb-16 space-y-10">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">{pageContent.pomsky.h2}</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Le Mameshiba vient du Shiba Inu. Sa lecture commence donc par un comparatif simple des tailles
                                adultes, toujours exprimées au garrot.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {sizes.map((item) => (
                                <Card key={item.title} className="flex flex-col bg-muted/60 h-full overflow-hidden">
                                    <CardHeader>
                                        <div className="flex items-center justify-between gap-4">
                                            <CardTitle className="text-xl">{item.title}</CardTitle>
                                            <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-md mb-6 bg-black">
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                quality={75}
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span>{item.height}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span>{item.frame}</span>
                                        </div>
                                        <p className="leading-relaxed">{item.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-primary/2 border-primary/10">
                            <CardContent className="py-6 px-6 md:px-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold">Ce que retient le standard japonais</h3>
                                    <p className="text-muted-foreground max-w-3xl">
                                        Le Shiba Inu reste la base historique. Le Mameshiba est enregistré comme race distincte
                                        par le KCJ lorsqu’un sujet adulte présente le bon type, la bonne taille et une filiation
                                        documentée sur plusieurs générations.
                                    </p>
                                </div>
                                <div className="text-sm text-muted-foreground bg-background/60 border rounded-lg p-4 space-y-2 max-w-sm">
                                    <p className="font-semibold text-foreground">En résumé :</p>
                                    <ul className="list-disc ml-4 space-y-1">
                                        <li>Shiba Inu : 38 à 41 cm pour le mâle, 35 à 38 cm pour la femelle</li>
                                        <li>Mameshiba mâle : 25 à 34 cm</li>
                                        <li>Mameshiba femelle : 25 à 32 cm</li>
                                        <li>Confirmation et mesure à partir d’un an</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16 grid gap-8 items-center lg:grid-cols-2">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                Origines
                            </Badge>
                            <h2 className="text-xl md:text-2xl font-bold">{pageContent.pomsky.pomskyOrigin}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Le Mameshiba descend directement du Shiba Inu, race japonaise ancestrale reconnue au LOF pour sa
                                version standard. Le mot « mame » évoque la petite taille, mais il ne désigne pas simplement un
                                Shiba plus petit : il renvoie à un travail de sélection poursuivi au Japon sur plusieurs
                                décennies.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Dans le cadre présenté par le Kennel Club of Japan, un Mameshiba ne se définit pas seulement par
                                quelques centimètres de moins. Il doit aussi conserver le type du Shiba Inu et pouvoir être relié
                                à une lignée suivie sérieusement.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    icon: <History className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Héritier du Shiba Inu",
                                    text: "Même silhouette compacte, même queue portée sur le dos, mêmes oreilles dressées et même tempérament primitif.",
                                },
                                {
                                    icon: <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Référence KCJ",
                                    text: "Le Kennel Club of Japan est l'organisme généralement cité pour l'enregistrement officiel du Mameshiba.",
                                },
                                {
                                    icon: <Heart className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Mesure après croissance",
                                    text: "Le chien doit être adulte, mesuré par un juge officiel et confirmé avant de pouvoir être enregistré comme Mameshiba.",
                                },
                                {
                                    icon: <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Race très rare",
                                    text: "Le Mameshiba reste rare hors Japon, ce qui explique la présence de nombreuses annonces floues ou trompeuses.",
                                },
                            ].map((item) => (
                                <Card key={item.title} className="bg-muted/60 h-full">
                                    <CardHeader className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            {item.icon}
                                            <CardTitle className="text-base">{item.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="mb-16 space-y-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">Comment la race Mameshiba s’est construite</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Le Mameshiba n’est pas un effet de mode récent. Son histoire s’inscrit dans une sélection longue,
                                centrée sur la réduction du format tout en conservant l’identité du Shiba Inu.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {historySteps.map((step) => (
                                <Card key={step.title} className="bg-muted/60 h-full flex flex-col">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-xl">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-1">
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {step.description}
                                        </p>
                                        <div className="relative h-72 rounded-md overflow-hidden mt-auto">
                                            <Image
                                                src={step.image}
                                                alt={step.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                quality={75}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-muted/60">
                            <CardContent className="py-6 px-6 space-y-3 text-muted-foreground">
                                <p className="font-semibold text-foreground">Pourquoi la traçabilité est indispensable</p>
                                <p className="leading-relaxed">
                                    Un véritable Mameshiba doit pouvoir être relié à une lignée claire. Le pedigree KCJ mentionne
                                    normalement l’identité et la taille au garrot des parents et ancêtres Mameshiba sur plusieurs
                                    générations.
                                </p>
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>Confirmation à plus d’un an, une fois la croissance terminée</li>
                                    <li>Mesure officielle réalisée dans le cadre défini par le KCJ</li>
                                    <li>Traçabilité généalogique sur au moins trois générations</li>
                                    <li>Dans les élevages exigeants, test ADN pour exclure tout mélange d’autres races</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16 space-y-6">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">Standard, allure et couleurs</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                Le Mameshiba doit rester immédiatement identifiable comme un petit Shiba Inu : compact, agile,
                                bien construit, expressif, avec un double poil dense et une vraie présence.
                            </p>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                        </div>

                        <div className="grid gap-6 auto-rows-fr items-stretch md:grid-cols-2">
                            <Card className="bg-muted/60 flex flex-col h-full overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-xl">Le standard en bref</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-1 text-sm flex-col text-muted-foreground leading-relaxed space-y-3">
                                    <div className="mt-4 space-y-3">
                                        <p>
                                            La tête reste proportionnée au corps, avec un front assez large, des oreilles petites et
                                            triangulaires, des yeux foncés légèrement triangulaires et un museau solide.
                                        </p>
                                        <p>
                                            Le dos doit être droit, la poitrine bien descendue, les membres fermes et la queue épaisse,
                                            portée au-dessus du dos. Le mouvement doit rester léger, vif et élégant.
                                        </p>
                                    </div>
                                    <div className="relative mt-4 mx-auto w-full lg:w-2/3 flex-[0_0_50%] min-h-64 overflow-hidden rounded-md">
                                        <Image
                                            src="/pages/homePage/ISHIRO-mame-shiba-kawaii-shiba.jpeg"
                                            alt="Portrait d'un Mameshiba gris et blanc"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            quality={75}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/60 flex flex-col h-full overflow-hidden">
                                <CardHeader>
                                    <CardTitle className="text-xl">Robe et expression</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-1 text-sm flex-col text-muted-foreground leading-relaxed space-y-3">
                                    <div className="mt-4 space-y-3">
                                        <p>
                                            Les robes admises dans le standard présenté par le KCJ sont principalement le rouge, le noir,
                                            le sésame et le blanc. Le double poil doit être dense, avec un poil de couverture droit et un
                                            sous-poil fourni.
                                        </p>
                                        <p>
                                            Un Mameshiba ne doit pas seulement être petit : il doit rester harmonieux, alerte et sain.
                                            Une taille minuscule obtenue au détriment de la construction n’est pas un gage de qualité.
                                        </p>
                                    </div>
                                    <div className="relative mt-4 mx-auto w-full lg:w-2/3 flex-[0_0_50%] min-h-64 overflow-hidden rounded-md">
                                        <Image
                                            src="/pages/homePage/little-mame-shiba-red-white.jpeg"
                                            alt="Mameshiba roux et blanc assis dans un jardin"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            quality={75}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16 space-y-6 bg-muted/40 rounded-lg p-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">{pageContent.pomsky.googToKnow}</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Comme la race n’est pas reconnue au LOF et qu’elle reste très rare, l’achat d’un Mameshiba demande
                                davantage de vigilance qu’un simple coup de cœur sur photo.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="bg-background/70 flex flex-col">
                                <CardHeader>
                                    <CardTitle className="text-xl">Vérifier les documents</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                                    <p>
                                        Demandez toujours l’origine exacte des chiens, le pedigree, la logique de sélection et les
                                        justificatifs de filiation. Un simple « type Mame-Shiba » ne suffit pas.
                                    </p>
                                    <p>
                                        Un élevage sérieux doit pouvoir expliquer son travail de génération en génération, et pas
                                        seulement vendre un chiot plus petit que la moyenne.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-background/70">
                                <CardHeader>
                                    <CardTitle className="text-xl">Éviter les faux Mameshiba</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                                    <p>
                                        Beaucoup d’arnaques consistent à présenter de petits Shiba Inu comme des Mameshiba sans
                                        traçabilité réelle. Plus le chien est vendu comme « ultra miniature », plus la prudence doit
                                        augmenter.
                                    </p>
                                    <p>
                                        Une taille extrême peut aussi cacher des défauts de construction, de fertilité ou de santé.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="bg-background/70">
                                <CardHeader>
                                    <CardTitle className="text-xl">Vie quotidienne et entretien</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                                    <p>
                                        Le Mameshiba s’adapte bien à la vie moderne grâce à son format, mais il reste un chien vif,
                                        intelligent et primitif. Il a besoin de sorties, de cohérence et d’un vrai lien avec sa famille.
                                    </p>
                                    <p>
                                        Son entretien reste raisonnable hors mue, avec un brossage régulier et une attention classique
                                        portée aux oreilles, aux griffes et à la qualité de l’alimentation.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-background/70">
                                <CardHeader>
                                    <CardTitle className="text-xl">Référence historique au Japon</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3 flex flex-col flex-1">
                                    <div className="flex flex-col gap-2">
                                        <p>
                                            Parmi les élevages japonais les plus souvent cités dans l’histoire moderne du Mameshiba,
                                            Hozanso fait partie des références connues pour la qualité de son travail et son ancrage
                                            dans la race.
                                        </p>
                                        <p>
                                            Leur site peut aider à mieux comprendre la culture du Mameshiba au Japon, en complément de
                                            vos vérifications d’élevage.
                                        </p>
                                    </div>
                                    <Link
                                        href="https://mame-shiba.co.jp/en/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border w-fit border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:mt-auto"
                                    >
                                        Voir le site de Hozanso
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16 text-center space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold">Un vrai petit Shiba, pas juste un Shiba plus petit</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Le Mameshiba concentre l’allure, la propreté, la vivacité et la fidélité du Shiba Inu dans un format
                            plus compact. Ce qui fait sa valeur, ce n’est pas seulement sa taille, mais la qualité de la sélection
                            derrière lui.
                        </p>
                        <div className="flex flex-col gap-4 justify-center sm:flex-row">
                            <Link
                                href="/chiots-disponibles"
                                className="bg-primary text-white hover:bg-primary/80 px-6 py-3 rounded-md font-semibold dark:text-[#5b3a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Découvrir nos chiots
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Poser vos questions
                            </Link>
                        </div>
                    </section>

                    <FAQSection
                        title="FAQ sur le Mameshiba"
                        description="Origines, taille, reconnaissance et critères de sérieux : les réponses essentielles avant d’aller plus loin."
                        items={faqMameShiba}
                    />

                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
