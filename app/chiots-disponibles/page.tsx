import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import {
    Banknote,
    Heart,
    Mail,
    NotebookText,
    PawPrint,
    Phone,
    Sprout,
} from "lucide-react"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { puppies } from "./puppies"
import {
    buildPuppyItemListStructuredData,
    formatPuppyPrice,
    getPuppyStatus,
    getPuppyStatusLabel,
    getPuppyUrl,
} from "./puppy-seo"
import { Card, CardContent } from "@/components/ui/card"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"
import { Badge } from "@/components/ui/badge"

const pageImage = "/pages/puppies/mameshiba-blanc-hotaru-1.jpg"

const puppiesInternalLinks: InternalLinkItem[] = [
    {
        href: "/nos-chiens",
        title: "Voir les parents et reproducteurs",
        description: "Relier les portées disponibles aux adultes qui composent notre sélection Mameshiba.",
    },
    {
        href: "/mame-shiba-prix",
        title: "Consulter nos prix à l'élevage",
        description: "Retrouver nos tarifs actuels et ce qu'ils recouvrent dans notre travail quotidien.",
    },
    {
        href: "/adoption/reussir-son-adoption",
        title: "Lire le guide adoption",
        description: "Préparer l'arrivée du chiot, le trajet du départ et les premières semaines à la maison.",
    },
    {
        href: "/contact",
        title: "Parler de votre projet",
        description: "Nous contacter pour vous présenter, poser vos questions et préparer une réservation.",
    },
]

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
                alt: "Chiot Mameshiba blanc disponible chez Kawaii Shiba",
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
    const visiblePuppies = puppies.filter((puppy) => !puppy.isAdopted)
    const puppyStructuredData = buildPuppyItemListStructuredData(visiblePuppies)
    const availablePuppiesCount = visiblePuppies.filter((puppy) => !puppy.isReserved).length
    const availablePuppiesTitle = availablePuppiesCount > 0
        ? `${availablePuppiesCount} chiot${availablePuppiesCount > 1 ? "s" : ""} disponible${availablePuppiesCount > 1 ? "s" : ""} à l'adoption`
        : "Aucun chiot disponible actuellement"
    const hasVisiblePuppies = visiblePuppies.length > 0

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(puppyStructuredData) }}
            />

            <div className="py-16">
                <div className="container mx-auto my-12">
                    <section className="text-center space-y-4 mb-12">
                        <h1 className="text-xl md:text-3xl font-bold">Nos chiots Mameshiba disponibles à l'adoption</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Découvrez les chiots Mameshiba actuellement présentés à l'élevage, issus de lignées japonaises sélectionnées avec soin. Chaque fiche rassemble les photos, les parents, le statut de réservation et les informations importantes pour préparer une adoption sérieuse.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Les portées de Mameshiba comptent peu de chiots. Nous échangeons donc avec chaque famille avant toute réservation afin de vérifier que le projet correspond bien au caractère et aux besoins de ce petit chien japonais.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
                    </section>

                    {hasVisiblePuppies ? (
                        <section className="my-12 rounded-3xl border border-primary/10 bg-muted/20 p-4 shadow-sm md:p-8">
                            <div className="mb-8 max-w-3xl space-y-3">
                                <Badge variant="secondary" className="w-fit">
                                    Chiots disponibles
                                </Badge>
                                <h2 className="text-2xl font-bold md:text-3xl">
                                    {availablePuppiesTitle}
                                </h2>
                                <p className="text-muted-foreground">
                                    Retrouvez ici les chiots actuellement présentés par l'élevage. Le compteur ne prend en compte que les chiots encore ouverts à la réservation : les chiots réservés restent affichés pour suivre la portée, mais ne sont pas comptabilisés comme disponibles.
                                </p>
                            </div>
                            <div className="grid gap-5">
                                {visiblePuppies.map((puppy, index) => {
                                    const puppyStatus = getPuppyStatus(puppy)
                                    const isReserved = puppyStatus === "reserved"
                                    const statusLabel = getPuppyStatusLabel(puppy)
                                    const puppyUrl = getPuppyUrl(puppy)
                                    const priceTextClass = isReserved ? "text-muted-foreground line-through" : "text-primary"
                                    const firstImage = puppy.thumbnailImage ?? puppy.images[0]

                                    return (
                                        <Card
                                            key={puppy.name}
                                            className={`relative overflow-hidden bg-background ${isReserved ? "border-2 border-green-600 ring-2 ring-green-600/20 ring-offset-2 ring-offset-background" : ""}`}
                                        >
                                            <CardContent className="p-5 md:p-6">
                                                <div className="grid gap-5 md:grid-cols-[112px_1fr_auto] md:items-center">
                                                    <Link
                                                        href={puppyUrl}
                                                        className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary/10 bg-muted shadow-sm transition-transform hover:scale-105 md:mx-0"
                                                        aria-label={`Voir la fiche détaillée de ${puppy.name}`}
                                                    >
                                                        {firstImage ? (
                                                            <Image
                                                                src={firstImage.src}
                                                                alt={firstImage.alt}
                                                                fill
                                                                className="object-cover"
                                                                sizes="112px"
                                                                priority={index === 0}
                                                            />
                                                        ) : null}
                                                    </Link>

                                                    <div className="min-w-0 space-y-3 text-center md:text-left">
                                                        <div className="space-y-1">
                                                            <h2 className="text-2xl font-bold">{puppy.name}</h2>
                                                            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                                                {puppy.description}
                                                            </p>
                                                        </div>

                                                        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                                                            <Badge variant="secondary">
                                                                <PawPrint className="mr-1 h-4 w-4" aria-hidden="true" />
                                                                {puppy.sexe}
                                                            </Badge>
                                                            <Badge variant="outline">{puppy.color}</Badge>
                                                            <Badge variant="secondary">{puppy.parents.replace("Parents : ", "")}</Badge>
                                                            {isReserved ? (
                                                                <Badge className="bg-green-700 text-white hover:bg-green-700">{statusLabel}</Badge>
                                                            ) : (
                                                                <Badge className="bg-primary text-primary-foreground hover:bg-primary">Disponible</Badge>
                                                            )}
                                                            {typeof puppy.price === "number" || puppy.priceLabel ? (
                                                                <Badge variant="outline" className={priceTextClass}>
                                                                    <Banknote className="mr-1 h-4 w-4" aria-hidden="true" />
                                                                    {typeof puppy.price === "number"
                                                                        ? formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR")
                                                                        : puppy.priceLabel}
                                                                </Badge>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-2 md:min-w-55">
                                                        <Link
                                                            href={puppyUrl}
                                                            className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                        >
                                                            Voir la fiche détaillée
                                                        </Link>
                                                        {isReserved ? (
                                                            <span className="cursor-not-allowed rounded-md border border-green-700 bg-green-50 px-4 py-2 text-center font-medium text-green-800">
                                                                {puppy.name} est {statusLabel.toLowerCase()}
                                                            </span>
                                                        ) : (
                                                            <a
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-xs hover:bg-primary/90"
                                                                href={puppy.linkTo}
                                                            >
                                                                Adopter {puppy.name}
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </section>
                    ) : (
                        <section className="max-w-5xl mx-auto my-12 grid gap-8">
                            <Card className="bg-muted/30 border border-muted">
                                <CardContent className="p-8 md:p-10 space-y-6">
                                    <div className="flex items-start gap-3">
                                        <NotebookText className="h-6 w-6 text-primary" aria-hidden="true" />
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                                Inscrivez-vous pour la prochaine portée de chiots Mameshiba
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Parlez-nous de votre projet d'adoption et rejoignez la liste d'attente pour être recontacté dès l'annonce de la prochaine portée.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        <Link
                                            href="https://forms.gle/myGmQAj5Kim6UnVx8"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            Rejoindre la liste d'attente
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
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
                            Chaque future portée est pensée avec sérieux, dans le respect du rythme de nos chiens reproducteurs
                            et de la singularité du Mameshiba.
                        </p>
                        <div className="grid gap-3">
                            {[
                                "sélection rigoureuse des lignées,",
                                "suivi vétérinaire attentif,",
                                "respect du rythme naturel de nos reproducteurs,",
                                "accompagnement des familles avant, pendant et après l'adoption.",
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
                            className="flex items-center justify-center rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Voir les conditions de vie des chiots
                        </Link>
                    </section>

                    <section className="mt-12 grid gap-6 md:grid-cols-3">
                        <figure className="space-y-3">
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <Image
                                    src="/pages/image-all-shiba/mameshiba-jardin-course-01.webp"
                                    alt="Mameshiba en mouvement dans le jardin de l'élevage"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    quality={75}
                                />
                            </div>
                            <figcaption className="text-sm leading-relaxed text-muted-foreground">
                                Des portées pensées avec soin visent des chiots vifs, équilibrés et à l'aise dans
                                leurs découvertes dès les premières semaines.
                            </figcaption>
                        </figure>

                        <figure className="space-y-3">
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <Image
                                    src="/pages/image-all-shiba/mameshiba-jardin-ensemble-01.webp"
                                    alt="Mameshiba évoluant dans l'environnement extérieur de l'élevage"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    quality={75}
                                />
                            </div>
                            <figcaption className="text-sm leading-relaxed text-muted-foreground">
                                Le travail autour des futures portées commence par un cadre de vie stable, de
                                l'observation et une attention constante portée à l'équilibre des chiens.
                            </figcaption>
                        </figure>

                        <figure className="space-y-3">
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <Image
                                    src="/pages/image-all-shiba/mameshiba-exterieur-profil-01.webp"
                                    alt="Portrait de Mameshiba en extérieur dans un moment calme"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    quality={75}
                                />
                            </div>
                            <figcaption className="text-sm leading-relaxed text-muted-foreground">
                                Attendre la bonne portée, c'est aussi respecter le rythme des reproducteurs et garder
                                une sélection cohérente, plutôt que produire vite.
                            </figcaption>
                        </figure>
                    </section>

                    <section className="mt-12 grid gap-8 md:grid-cols-2">
                        <Card className="bg-muted/30 border border-muted">
                            <CardContent className="p-8 md:p-10 space-y-6 text-left">
                                <div className="flex items-start gap-3">
                                    <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                            Tarif d'un chiot Mameshiba
                                        </h2>
                                        <p className="text-muted-foreground mt-2">
                                            Le tarif reflète la rareté de la race, la qualité des lignées et l'accompagnement proposé.
                                        </p>
                                    </div>
                                </div>

                                <p className="text-muted-foreground">
                                    Le prix de nos chiots Mameshiba est actuellement de <strong className="text-foreground">4 500 € pour un mâle</strong> et de <strong className="text-foreground">5 000 € pour une femelle</strong>.
                                </p>
                                <Link
                                    href="/mame-shiba-prix"
                                    className="inline-flex w-fit rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Comprendre le tarif d'un chiot
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/30 border border-muted">
                            <CardContent className="p-8 md:p-10 space-y-6 text-left">
                                <div className="flex items-start gap-3">
                                    <Sprout className="h-6 w-6 text-primary" aria-hidden="true" />
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                            Contactez nous
                                        </h2>
                                        <p className="text-muted-foreground mt-2">
                                            Nous prenons le temps d'échanger avec vous avant toute réservation.
                                        </p>
                                    </div>
                                </div>

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

                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Nous contacter
                                </Link>
                            </CardContent>
                        </Card>
                    </section>

                    <InternalLinksSection
                        title="Pages utiles avant de réserver"
                        description="Ces contenus vous aident à mieux comprendre les adultes, les tarifs, l'adoption et la prise de contact autour de nos portées."
                        items={puppiesInternalLinks}
                        className="mt-16"
                    />

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
