import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { FAQSection } from "@/components/faq"
import { faqNosChiots } from "@/lib/faq-data"
import {
    BadgeCheck,
    Banknote,
    Calendar,
    Dog,
    FileText,
    Heart,
    Mail,
    Mars,
    NotebookText,
    PawPrint,
    Phone,
    ShieldCheck,
    Sprout,
    Venus,
    Weight,
} from "lucide-react"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { puppies, type Puppy } from "./puppies"
import { Card, CardContent } from "@/components/ui/card"
import ImageCarousel from "@/components/client/carousel/ImageCarousel"
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

type PuppyParentProfile = {
    role: "Mère" | "Père"
    name: string
    image: string
    description: string
    href: string
}

const puppyParentProfilesByLabel: Record<string, PuppyParentProfile[]> = {
    "Parents : YUMI & NATSU": [
        {
            role: "Mère",
            name: "Yumi",
            image: "/pages/reproducteurs/yumi-mame-shiba-kawaii-shiba-portrait.webp",
            description: "Femelle Mameshiba red",
            href: "/nos-chiens",
        },
        {
            role: "Père",
            name: "Natsu",
            image: "/pages/reproducteurs/natsuko-dit-natsu-mame-shiba-kawaii-shiba-portrait.webp",
            description: "Mâle Mameshiba noir et feu",
            href: "/nos-chiens",
        },
    ],
    "Parents : KARASUKI & WARU": [
        {
            role: "Mère",
            name: "Karasuki",
            image: "/pages/reproducteurs/Karasuki.webp",
            description: "Femelle Mameshiba confirmée KCJ",
            href: "/nos-chiens",
        },
        {
            role: "Père",
            name: "Waru",
            image: "/pages/reproducteurs/waru-mame-shiba-kawaii-shiba-portrait.webp",
            description: "Mâle Mameshiba origine Japon",
            href: "/nos-chiens",
        },
    ],
}

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

function formatPuppyPrice(price: number, currency = "EUR") {
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(price)
}

function getPuppyAnchorId(name: string) {
    return name.trim().toLowerCase().replace(/\s+/g, "-")
}

function getPuppyStatus(puppy: Puppy) {
    if (puppy.isAdopted) return "adopted"
    if (puppy.isReserved) return "reserved"
    return "available"
}

function getPuppyParentProfiles(puppy: Puppy) {
    return puppyParentProfilesByLabel[puppy.parents] ?? []
}

function buildPuppyStructuredData() {
    const catalogItems = puppies.map((puppy, index) => {
        const status = getPuppyStatus(puppy)
        const url = `${siteConfig.siteUrl}/chiots-disponibles#${getPuppyAnchorId(puppy.name)}`
        const firstImage = puppy.images[0]?.src
        const availability = status === "available" ? "https://schema.org/InStock" : "https://schema.org/SoldOut"
        const offers = typeof puppy.price === "number"
            ? {
                "@type": "Offer",
                url: puppy.linkTo,
                availability,
                priceCurrency: puppy.priceCurrency ?? "EUR",
                price: puppy.price.toString(),
                ...(puppy.availableFrom ? { availabilityStarts: puppy.availableFrom } : {}),
                seller: {
                    "@type": "Organization",
                    name: siteConfig.name,
                    url: siteConfig.siteUrl,
                },
            }
            : puppy.priceMin && puppy.priceMax
                ? {
                    "@type": "AggregateOffer",
                    url: puppy.linkTo,
                    availability,
                    priceCurrency: puppy.priceCurrency ?? "EUR",
                    lowPrice: puppy.priceMin.toString(),
                    highPrice: puppy.priceMax.toString(),
                    offerCount: "1",
                    ...(puppy.availableFrom ? { availabilityStarts: puppy.availableFrom } : {}),
                    seller: {
                        "@type": "Organization",
                        name: siteConfig.name,
                        url: siteConfig.siteUrl,
                    },
                }
                : undefined

        return {
            "@type": "Product",
            "@id": `${url}-product`,
            name: `${puppy.name} - chiot Mameshiba`,
            description: puppy.description,
            url,
            image: puppy.images.map((image) => `${siteConfig.siteUrl}${image.src}`),
            brand: {
                "@type": "Brand",
                name: "Mameshiba",
            },
            manufacturer: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.siteUrl,
            },
            additionalProperty: [
                { "@type": "PropertyValue", name: "Race", value: puppy.coat },
                { "@type": "PropertyValue", name: "Couleur", value: puppy.color },
                { "@type": "PropertyValue", name: "Sexe", value: puppy.sexe },
                { "@type": "PropertyValue", name: "Parents", value: puppy.parents.replace("Parents : ", "") },
                { "@type": "PropertyValue", name: "Naissance", value: puppy.age },
                ...(puppy.birthDate ? [{ "@type": "PropertyValue", name: "Date de naissance", value: puppy.birthDate }] : []),
                ...(puppy.availableFrom ? [{ "@type": "PropertyValue", name: "Date de disponibilité", value: puppy.availableFrom }] : []),
                { "@type": "PropertyValue", name: "Pédigrée", value: puppy.pedigree ?? "Kennel Club of Japan" },
                { "@type": "PropertyValue", name: "Statut", value: status === "reserved" ? "Réservé" : "Disponible" },
            ],
            ...(offers ? { offers } : {}),
            position: index + 1,
            ...(firstImage ? { thumbnailUrl: `${siteConfig.siteUrl}${firstImage}` } : {}),
        }
    })

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemList",
                "@id": `${siteConfig.siteUrl}/chiots-disponibles#puppy-list`,
                name: "Chiots Mameshiba disponibles à l'adoption",
                description: "Liste des chiots Mameshiba disponibles ou réservés à l'élevage Kawaii Shiba.",
                numberOfItems: catalogItems.length,
                itemListElement: catalogItems.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    url: item.url,
                    item: {
                        "@id": item["@id"],
                    },
                })),
            },
            ...catalogItems,
        ],
    }
}

export default function NosChiotsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos chiots", url: siteConfig.pages.puppies },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqNosChiots))
    const puppyStructuredData = buildPuppyStructuredData()
    const lastMod = returnLastmod(siteConfig.pages.puppies)
    const visiblePuppies = puppies.filter((puppy) => !puppy.isAdopted)
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
                        <section className="grid gap-10 my-12">
                            {visiblePuppies.map((puppy, index) => {
                                const puppyAnchorId = getPuppyAnchorId(puppy.name)
                                const puppyStatus = getPuppyStatus(puppy)
                                const isReserved = puppyStatus === "reserved"
                                const parentProfiles = getPuppyParentProfiles(puppy)
                                const priceTextClass = isReserved ? "text-muted-foreground line-through" : "text-primary"

                                return (
                                    <Card
                                        key={puppy.name}
                                        className={`relative overflow-hidden bg-muted/30 ${isReserved ? "border-2 border-green-600 ring-2 ring-green-600/25 ring-offset-2 ring-offset-background" : ""}`}
                                    >
                                        {isReserved ? (
                                            <div className="absolute right-4 top-4 z-20 rotate-6 rounded-md border-2 border-green-700 bg-green-100 px-4 py-1 text-sm font-extrabold uppercase tracking-wider text-green-800 shadow-[0_0_0_3px_#166534]">
                                                Réservé
                                            </div>
                                        ) : null}
                                        <CardContent className="p-0">
                                            <div className={`grid gap-0 lg:grid-cols-[minmax(320px,0.92fr)_minmax(520px,1.08fr)] ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                                                <div className={`relative min-h-80 lg:min-h-140 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                                    <ImageCarousel
                                                        images={puppy.images}
                                                        alt={`Photos du chiot Mameshiba ${puppy.name}`}
                                                        priority={index === 0}
                                                        sizes="(min-width: 1024px) 42vw, 100vw"
                                                    />
                                                </div>
                                                <div className={`min-w-0 space-y-5 p-6 md:p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <Badge variant="secondary">
                                                            <PawPrint className="h-4 w-4 mr-1" />
                                                            {puppy.coat}
                                                        </Badge>
                                                        <Badge variant="outline">{puppy.color}</Badge>
                                                        {isReserved ? (
                                                            <Badge className="bg-green-700 text-white hover:bg-green-700">Réservé</Badge>
                                                        ) : (
                                                            <Badge className="bg-primary text-primary-foreground hover:bg-primary">Disponible</Badge>
                                                        )}
                                                    </div>

                                                    <div className="space-y-2">
                                                        <h2 id={puppyAnchorId} className="scroll-mt-28 text-2xl font-bold">
                                                            {puppy.name}
                                                        </h2>
                                                        <p className="text-muted-foreground">{puppy.description}</p>
                                                    </div>

                                                    <dl className="overflow-hidden rounded-2xl border border-primary/10 bg-background/55 text-sm">
                                                        <div className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <Dog className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Sexe
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.sexe}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Parents
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.parents.replace("Parents : ", "")}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Pédigrée
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.pedigree ?? "Kennel Club of Japan"}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Disponibilité
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.readyDate}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Naissance
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.age}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <Weight className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Poids estimé
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.weight}</dd>
                                                        </div>
                                                        <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                            <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                Sélection
                                                            </dt>
                                                            <dd className="text-foreground sm:text-right">{puppy.ruler}</dd>
                                                        </div>
                                                        {typeof puppy.price === "number" || puppy.priceLabel ? (
                                                            <div className="grid gap-1 border-t border-primary/8 px-4 py-3 sm:grid-cols-[minmax(150px,0.7fr)_1fr] sm:items-center">
                                                                <dt className="flex items-center gap-2 font-semibold text-muted-foreground">
                                                                    <Banknote className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                    Prix
                                                                </dt>
                                                                <dd className={`sm:text-right ${priceTextClass}`}>
                                                                    <span className="block text-lg font-semibold">
                                                                        {typeof puppy.price === "number"
                                                                            ? formatPuppyPrice(puppy.price, puppy.priceCurrency ?? "EUR")
                                                                            : puppy.priceLabel}
                                                                    </span>
                                                                </dd>
                                                            </div>
                                                        ) : null}
                                                    </dl>

                                                    {parentProfiles.length > 0 ? (
                                                        <section className="space-y-3 rounded-2xl border border-primary/10 bg-background/45 p-4">
                                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/75">
                                                                Ses parents
                                                            </h3>
                                                            <div className="grid gap-3 sm:grid-cols-2">
                                                                {parentProfiles.map((parent) => {
                                                                    const ParentIcon = parent.role === "Mère" ? Venus : Mars
                                                                    const iconClassName = parent.role === "Mère" ? "text-rose-500" : "text-sky-500"

                                                                    return (
                                                                        <Link
                                                                            key={`${puppy.name}-${parent.role}-${parent.name}`}
                                                                            href={parent.href}
                                                                            className="group flex min-w-0 items-center gap-3 rounded-2xl border border-primary/12 bg-background/72 p-3 transition hover:border-primary/30 hover:bg-primary/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                                            aria-label={`Voir les reproducteurs, dont ${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                        >
                                                                            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary/15 bg-muted shadow-sm">
                                                                                <Image
                                                                                    src={parent.image}
                                                                                    alt={`${parent.name}, ${parent.role.toLowerCase()} de ${puppy.name}`}
                                                                                    fill
                                                                                    className="object-cover"
                                                                                    sizes="64px"
                                                                                />
                                                                            </span>
                                                                            <span className="min-w-0">
                                                                                <span className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                                                                                    <ParentIcon className={`h-4 w-4 ${iconClassName}`} aria-hidden="true" />
                                                                                    {parent.role}
                                                                                </span>
                                                                                <span className="block truncate text-lg font-bold text-foreground">
                                                                                    {parent.name}
                                                                                </span>
                                                                                <span className="block truncate text-xs text-muted-foreground">
                                                                                    {parent.description}
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    )
                                                                })}
                                                            </div>
                                                        </section>
                                                    ) : null}

                                                    <div className="space-y-2">
                                                        <h3 className="flex items-center gap-2 font-semibold">
                                                            <ShieldCheck className="h-4 w-4 text-primary" />
                                                            Suivi du chiot
                                                        </h3>
                                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                            {(puppy.health ?? []).map((healthItem) => (
                                                                <li key={healthItem}>{healthItem}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {puppy.highlights.map((item) => (
                                                            <Badge key={item} variant="secondary">
                                                                {item}
                                                            </Badge>
                                                        ))}
                                                    </div>

                                                    <div className="flex flex-col gap-3 sm:flex-row">
                                                        {isReserved ? (
                                                            <span className="cursor-not-allowed rounded-md border border-green-700 bg-green-50 px-4 py-2 text-center font-medium text-green-800">
                                                                {puppy.name} est réservé
                                                            </span>
                                                        ) : (
                                                            <>
                                                                <Link
                                                                    href="/contact"
                                                                    className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                                >
                                                                    Contacter l'élevage
                                                                </Link>
                                                                <a
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-xs hover:bg-primary/90"
                                                                    href={puppy.linkTo}
                                                                >
                                                                    Réserver une visite ou demander plus de photos / vidéos
                                                                </a>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </section>
                    ) : (
                        <section className="max-w-5xl mx-auto my-12 grid gap-8">
                            <Card className="bg-muted/30 border border-muted">
                                <CardContent className="p-8 md:p-10 space-y-6">
                                    <div className="flex items-start gap-3">
                                        <NotebookText className="h-6 w-6 text-primary" aria-hidden="true" />
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                                                Inscrivez vous pour la prochaine portée de chiots Mameshiba
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Parlez nous de votre projet d'adoption et rejoignez la liste d'attente pour être recontacté dès l'annonce de la prochaine portée.
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
                                    Voir nos prix à l'élevage
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
