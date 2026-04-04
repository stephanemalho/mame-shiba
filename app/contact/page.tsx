import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq"
import { faqContact } from "@/lib/faq-data"
import { Chrome, MapPin, Phone, Mail, Clock, PawPrint } from "lucide-react"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { pageContent } from "@/lib/page-content"
import { generateLocalBusinessSchema, generateContactPointSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import Image from "next/image"
import Link from "next/link"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"

export const metadata: Metadata = {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    keywords: pageMetadata.contact.keywords,
    openGraph: buildOpenGraph({
        title: pageMetadata.contact.title,
        description: pageMetadata.contact.description,
        url: `${siteConfig.siteUrl}/contact`,
        images: [
            {
                url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
                alt: siteConfig.ogImageAlt,
                width: siteConfig.ogImageWidth,
                height: siteConfig.ogImageHeight,
                type: "image/webp",
            },
        ],
    }),
    twitter: buildTwitter({
        title: pageMetadata.contact.title,
        description: pageMetadata.contact.description,
        imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    }),
    alternates: {
        canonical: `${siteConfig.siteUrl}/contact`,
    },
}

const contactInternalLinks: InternalLinkItem[] = [
    {
        href: "/chiots-disponibles",
        title: "Voir les chiots et réservations",
        description: "Consulter les disponibilités actuelles et l’état des prochaines portées.",
    },
    {
        href: "/adoption/reussir-son-adoption",
        title: "Préparer votre adoption",
        description: "Lire notre guide pratique avant un premier échange ou une future réservation.",
    },
    {
        href: "/mame-shiba-prix",
        title: "Consulter nos tarifs",
        description: "Retrouver les prix de nos Mameshiba à l’élevage et ce qu’ils recouvrent.",
    },
    {
        href: "/nos-chiens",
        title: "Découvrir nos adultes",
        description: "Mieux connaître les reproducteurs, leurs lignées et leur tempérament avant de nous contacter.",
    },
]

const contactItems = [
    {
        icon: MapPin,
        title: "Adresse",
        type: "address",
        content: "Jura (39) commune de SAINT AMOUR",
        secondaryLine: "visite sur rendez-vous."
    },
    {
        icon: Phone,
        title: "Téléphone",
        type: "tel",
        content: "+33 6 89 75 80 31",
        secondaryLine: "SMS ou WhatsApp pour réserver un créneau."
    },
    {
        icon: Mail,
        title: "Email",
        type: "email",
        content: "elevagemameshiba@gmail.com",
        secondaryLine: "Réponse sous 24h, vidéos envoyées sur demande."
    },
    {
        icon: Clock,
        title: "Horaires",
        type: "text",
        content: "Lun - Sam : 9h - 18h",
        secondaryLine: "Dimanche : visites vidéo uniquement."
    },
    {
        icon: Chrome,
        title: "Avis Google",
        type: "link",
        content: "Laisser un avis sur Google",
        href: "https://share.google/owpyAE3sBdFrFKSYN",
        secondaryLine: "Voir nos avis sur Google"
    }
]

const renderContactContent = (item: typeof contactItems[0]) => {
    switch (item.type) {
        case "email":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <a href={`mailto:${item.content}`} className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        case "tel":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <a href={`tel:${item.content.replace(/\s/g, "")}`} className="text-primary hover:underline text-sm">
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        case "address":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <address className="not-italic text-muted-foreground text-sm">
                        {item.content}
                        <br />
                        {item.secondaryLine}
                    </address>
                </div>
            )
        case "link":
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline text-sm"
                    >
                        {item.content}
                    </a>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
        default:
            return (
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                    <p className="text-muted-foreground text-sm">{item.secondaryLine}</p>
                </div>
            )
    }
}

export default function ContactPage() {
    // Schémas JSON-LD
    const localBusinessSchema = generateLocalBusinessSchema()
    const contactPointSchema = generateContactPointSchema()
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Contact", url: siteConfig.pages.contact },
    ])
    const faqSchema = generateFAQSchema(convertFAQsToSchema(faqContact))
    const lastMod = returnLastmod(siteConfig.pages.contact)

    return (
        <>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
            />
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
                    {/* Header */}
                    <section className="text-center space-y-4 mb-12">
                        <h1
                            className="text-xl md:text-3xl font-bold">{pageContent.contact.h1}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {pageContent.contact.description}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                {contactItems.map((item) => {
                                    const IconComponent = item.icon
                                    return (
                                        <div key={item.title} className="flex items-start space-x-3">
                                            <IconComponent className="h-5 w-5 text-primary mt-1" aria-hidden="true" />
                                            {renderContactContent(item)}
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/40">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-xl md:text-2xl font-semibold">Dites nous en plus sur votre projet avant de prendre rendez-vous</h2>
                                <p className="text-muted-foreground">
                                    Remplissez notre questionnaire de pré-visite pour que nous puissions mieux comprendre vos attentes et vous proposer le Mameshiba qui correspondra parfaitement à votre famille. <br /><span className="text-sm italic text-muted-foreground/80">(gratuit et sans engagement de votre part)</span>
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Visite en présentiel ou en visio possible</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Dossier d&apos;élevage envoyé avant la rencontre</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <PawPrint className="h-4 w-4 text-primary" aria-hidden="true" />
                                        <span className="text-sm text-muted-foreground">Réponse personnalisée sous 24h</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center flex-col lg:flex-row gap-3">
                                    <div className="relative w-40 aspect-square my-4">
                                        <Image
                                            src="/adobe-express-qr-code.png"
                                            alt="QR code pour contacter Kawaii Shiba"
                                            fill
                                            className="object-cover"
                                            sizes="160px"
                                            quality={80}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <Link target="_blank" href="https://forms.gle/myGmQAj5Kim6UnVx8" className="flex h-10 items-center rounded-md bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Remplir le questionnaire
                                        </Link>
                                        <span className="text-sm italic text-muted-foreground/80">Vous recevrez un exemplaire par mail</span>
                                    </div>
                                </div>
                                <Link
                                    href="/adoption/reussir-son-adoption"
                                    className="inline-flex rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Lire le guide adoption
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    <InternalLinksSection
                        title="Avant ou après nous avoir écrit"
                        description="Voici les pages les plus utiles pour mieux préparer votre prise de contact et situer votre projet d’adoption."
                        items={contactInternalLinks}
                        className="mt-16"
                    />

                    <FAQSection
                        title="FAQ avant de prendre contact"
                        description="Réponses rapides sur le caractère et la cohabitation du Mameshiba."
                        items={faqContact}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-6">
                        Dernière mise à jour : {lastMod}
                    </div>
                </div>
            </div>
        </>
    )
}
