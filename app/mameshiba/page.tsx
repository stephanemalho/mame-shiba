import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { filterBlogLinks } from "@/lib/blog-visibility"
import { faqMameShiba } from "@/lib/faq-data"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { Feather, Heart, History, PawPrint, Ruler, Scale, ScrollText, Sparkles } from "lucide-react"

const pageImage = "/pages/homePage/mame-shiba-for-modern-life.jpeg"

export const metadata: Metadata = {
    title: pageMetadata.shiba.title,
    description: pageMetadata.shiba.description,
    keywords: pageMetadata.shiba.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.shiba.title,
        description: pageMetadata.shiba.description,
        url: `${siteConfig.siteUrl}/mameshiba`,
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
        title: pageMetadata.shiba.title,
        description: pageMetadata.shiba.description,
        imageUrl: `${siteConfig.siteUrl}${pageImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/mameshiba`,
    },
}

const sizes = [
    {
        title: "Shiba Inu vs Mameshiba",
        height: "Mâle : 38 à 41 cm • Femelle : 35 à 38 cm",
        frame: "Standard LOF du Shiba Inu",
        text: "Le Shiba Inu constitue la référence d'origine. Le Mameshiba en reprend le type, la noblesse et la structure générale, mais dans un format plus compact sélectionné au Japon.",
        image: "/pages/homePage/SHIBA-INU-ET-MAMESHIBA-300x261.jpeg",
        alt: "Comparatif entre un Shiba Inu et un Mameshiba",
    },
    {
        title: "Mameshiba mâle",
        height: "25 à 34 cm au garrot",
        frame: "Format compact et masculin",
        text: "Pour être enregistré comme Mameshiba, le chien doit avoir terminé sa croissance. La mesure officielle intervient à partir d'un an, avec validation du type et de la taille.",
        image: "/pages/le-mame-shiba/ichiro-mame-shiba-kawaii-shiba-portrait-v2.webp",
        alt: "Mameshiba roux et blanc assis dans l'herbe",
    },
    {
        title: "Mameshiba femelle",
        height: "25 à 32 cm au garrot",
        frame: "Format compact et féminin",
        text: "La femelle Mameshiba conserve l'expression douce, les oreilles triangulaires, la queue portée sur le dos et l'allure vive typiques du Shiba Inu, dans un petit gabarit.",
        image: "/pages/le-mame-shiba/sakura-mame-shiba-kawaii-shiba-portrait-v2.webp",
        alt: "Jeune Mameshiba blanc dans un jardin",
    },
]

type HistoryStep = {
    title: string
    description: ReactNode
    image: string
    alt: string
}

const historyLinkClassName =
    "rounded-sm font-semibold text-primary underline decoration-primary/55 underline-offset-4 transition-colors hover:text-primary/85 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"

const historySteps: HistoryStep[] = [
    {
        title: "Des petits Shiba déjà présents dans le Japon rural",
        description: (
            <>
                Bien avant que le nom Mameshiba ne soit popularisé, il existait déjà de très petits Shiba Inu élevés dans
                certaines régions japonaises. Les{" "}
                <a
                    href="https://www.kcj.gr.jp/about_mameshiba.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={historyLinkClassName}
                >
                    repères donnés par le KCJ
                </a>{" "}
                et certains{" "}
                <a
                    href="https://mame-shiba.co.jp/blog/detail/20200314153700/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={historyLinkClassName}
                >
                    récits historiques japonais
                </a>{" "}
                décrivent déjà cette présence ancienne de petits sujets rustiques, proches du chien primitif du pays.
            </>
        ),
        image: "/pages/homePage/mame-shiba-decor-champs-de-lavande.jpg",
        alt: "Mameshiba roux dans un decor floral",
    },
    {
        title: "Une sélection poursuivie à partir des années 1950",
        description: (
            <>
                Le travail de sélection s'est construit sur plusieurs générations à partir de Shiba Inu trop petits pour
                entrer dans le standard classique. Les informations diffusées par le{" "}
                <a
                    href="https://www.kcj.gr.jp/about_mameshiba.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={historyLinkClassName}
                >
                    Kennel Club of Japan
                </a>{" "}
                et ce{" "}
                <a
                    href="https://www.mameshiba-729.com/blog/%E8%B1%86%E6%9F%B4%E3%81%AE%E7%8F%BE%E6%B3%81%E3%81%A8%E5%85%AC%E8%AA%8D%E3%81%AE%E7%B5%8C%E7%94%B1%E3%83%BB%E3%83%BB%E3%83%BB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={historyLinkClassName}
                >
                    retour détaillé sur la reconnaissance
                </a>{" "}
                rappellent que l'objectif n'était pas de produire un chien fragile, mais de fixer un petit format cohérent,
                harmonieux et sain.
            </>
        ),
        image: "/pages/le-mame-shiba/mame-shiba-puppy-blanc-white.jpeg",
        alt: "Chiot Mameshiba blanc dans un univers japonais",
    },
    {
        title: "Un enregistrement encadré par le KCJ",
        description: (
            <>
                Le Kennel Club of Japan a donné un cadre plus officiel à la race et a commencé les enregistrements de
                Mameshiba en 2008. La{" "}
                <a
                    href="https://www.kcj.gr.jp/about_mameshiba_touroku.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={historyLinkClassName}
                >
                    page d'enregistrement dédiée
                </a>
                , les{" "}
                <a
                    href="https://www.kcj.gr.jp/assets/pdf/application_list/application_touroku_standard.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={historyLinkClassName}
                >
                    conditions officielles en PDF
                </a>{" "}
                et la{" "}
                <a
                    href="https://www.kcj.gr.jp/application_list.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={historyLinkClassName}
                >
                    liste des formulaires KCJ
                </a>{" "}
                montrent que la reconnaissance s'appuie sur la mesure à l'âge adulte et sur une traçabilité généalogique
                rigoureuse.
            </>
        ),
        image: "/pages/le-mame-shiba/chiot-mameshiba.jpg",
        alt: "Chiots Mameshiba fauve et blanc assis devant un fond sombre",
    },
]

const mameshibaInternalLinks: InternalLinkItem[] = filterBlogLinks([
    {
        href: "/nos-chiens",
        title: "Voir nos chiens reproducteurs",
        description: "Découvrir les adultes qui portent notre sélection et leurs lignées.",
    },
    {
        href: "/bien-etre-animal",
        title: "Comprendre leur cadre de vie",
        description: "Voir comment nous socialisons les chiots et organisons le quotidien de l’élevage.",
    },
    {
        href: "/mame-shiba-prix",
        title: "Consulter nos prix à l’élevage",
        description: "Retrouver nos tarifs actuels et ce qu’ils recouvrent concrètement.",
    },
    {
        href: "/blog/mame-shiba",
        title: "Lire nos articles dédiés",
        description: "Approfondir la race, le comportement et l’adoption responsable du Mameshiba.",
    },
])

export default function MameShibaPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Le Mameshiba", url: siteConfig.pages.shiba },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqMameShiba))
    const lastMod = returnLastmod(siteConfig.pages.shiba)

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
                                Tout savoir sur le Mameshiba : Le plus petit Shiba du monde ! origines, tailles et critères d&apos;adoption, avant de se lancer.
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Le Mameshiba est issu du Shiba Inu, en format miniature ! Contrairement au Shiba Inu classique, souvent réputé pour son indépendance marquée, le Mameshiba présente généralement un tempérament plus souple et plus proche de l’humain, ce qui le rend globalement plus facile à éduquer.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Sa sélection sur plusieurs générations tend à favoriser des individus plus réceptifs, plus attentifs et plus enclins à coopérer, tout en conservant le physique primitif qui fait tout son charme.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                C'est un chien extrêmement rare.
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                    <span>petit format, tempérament facile à éduquer</span>
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
                            <h2 className="text-xl md:text-2xl font-bold">Tailles et repères du Mameshiba</h2>
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
                                        La race est sélectionnée au Japon depuis l’année 1950 par le
                                        Kennel club of Japan.
                                    </p>
                                    <p className="text-muted-foreground max-w-3xl">Le Mameshiba est enregistré comme race distincte par le KCJ lorsqu’un sujet adulte présente le bon type, la bonne taille et une filiation documentée sur plusieurs générations.
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
                            <h2 className="text-xl md:text-2xl font-bold">Pourquoi le Mameshiba a-t-il été créé ?</h2>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                                Origines et but de la création du Mameshiba
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Au Japon, l'urbanisation connaît une expansion fulgurante : entre 1930 et 1975, la population
                                des grandes villes est multipliée par dix.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Avant la Seconde Guerre mondiale, les villes japonaises étaient encore largement composées de
                                maisons traditionnelles, avec une densité de population relativement modérée. Après les
                                destructions massives liées à la guerre, le pays se reconstruit rapidement en adoptant un modèle
                                urbain inspiré des grandes métropoles occidentales.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Les habitations laissent alors place à des immeubles de plusieurs étages, les centres-villes se
                                densifient et les espaces verts deviennent plus rares. Dans ce nouveau mode de vie, les Japonais
                                conservent le besoin de partager leur quotidien avec un chien, mais les conditions changent.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Le Shiba Inu, initialement chien de chasse en milieu rural, est progressivement introduit en
                                ville comme chien de compagnie. Parallèlement, jusque dans les années 1960, peu de foyers
                                possèdent une voiture : les déplacements urbains se font surtout à vélo, puis via des transports
                                en commun plus adaptés à la vie citadine.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                C'est dans ce contexte que les éleveurs japonais commencent à sélectionner les plus petits
                                individus de Shiba Inu, avec un objectif clair : créer un chien capable de s'adapter
                                parfaitement à la vie urbaine moderne.
                            </p>
                            <div className="space-y-3 rounded-2xl border border-border/60 bg-muted/40 p-5">
                                <p className="font-semibold text-foreground">Le Mameshiba voit ainsi le jour :</p>
                                <ul className="list-disc ml-4 space-y-1 text-muted-foreground">
                                    <li>plus compact</li>
                                    <li>plus léger, souvent sous les 5 kg</li>
                                    <li>plus adapté aux petits espaces</li>
                                    <li>plus facile à transporter au quotidien</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    Tout en conservant l'élégance et l'âme du Shiba Inu.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    icon: <History className="h-4 w-4 text-primary" aria-hidden="true" />,
                                    title: "Héritier du Shiba Inu",
                                    text: "Silhouette plus fine, plus compacte, même queue portée sur le dos, même oreilles dressées et tempérament plus facile",
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
                                            src="/pages/le-mame-shiba/Yuzu-femelle-mame-shiba-couleur-feu.webp"
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
                                            src="/pages/le-mame-shiba/marine-aurelie-et-clea-avec-trois-mame-shiba-de-elevage-kawaii.jpeg"
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
                            <h2 className="text-xl md:text-2xl font-bold">Acheter un Mameshiba : les points essentiels</h2>
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
                                        justificatifs de filiation. Un simple « type Mameshiba » ne suffit pas.
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
                        <h2 className="text-xl md:text-2xl font-bold">Adopter un vrai Mameshiba : </h2>
                        <ul className="text-muted-foreground max-w-3xl mx-auto leading-relaxed list-disc text-left space-y-2 pl-6">
                            <li>Portées très petites : 1 à 3 chiots</li>
                            <li>Poids adulte miniature : 3 à 6 kg</li>
                            <li>Pedigree du Kennel Club of Japan</li>
                            <li>Tempérament facile à éduquer</li>
                            <li>3 couleurs : noir et feu / fauve / blanc crème</li>
                        </ul>
                        <div className="flex flex-col gap-4 justify-center sm:flex-row">
                            <Link
                                href="/chiots-disponibles"
                                className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Découvrir nos chiots
                            </Link>
                            <Link
                                href="/mame-shiba-prix"
                                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Comprendre le prix d&apos;un Mameshiba
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Poser vos questions
                            </Link>
                        </div>
                    </section>

                    <InternalLinksSection
                        title="À explorer aussi sur le site"
                        description="Pour aller plus loin après cette page, voici les contenus les plus utiles autour du Mameshiba, de l’élevage et d’une future adoption."
                        items={mameshibaInternalLinks}
                        className="mb-16"
                    />

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
