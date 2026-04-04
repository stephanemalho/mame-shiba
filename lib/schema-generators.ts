// Générateurs de schémas JSON-LD pour SEO structuré
import { siteConfig } from "./seo-config";

/**
 * Schéma Organization pour l'élevage Kawaii Shiba
 * Utilisé notamment sur la page d'accueil
 */
export function generateOrganizationSchema() {
    const legal = siteConfig.legal;
    const address = legal.address;
    const identifiers = [
        {
            "@type": "PropertyValue",
            propertyID: "SIREN",
            value: legal.siren
        },
        {
            "@type": "PropertyValue",
            propertyID: "SIRET",
            value: legal.siret
        },
        {
            "@type": "PropertyValue",
            propertyID: "APE",
            value: legal.apeCode
        }
    ];
    const sameAs = siteConfig.socialLinks
        ? Object.values(siteConfig.socialLinks).filter(Boolean)
        : [];

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}#organization`,
        name: legal.tradeName || siteConfig.name,
        alternateName: legal.legalName,
        legalName: legal.legalName,
        url: siteConfig.siteUrl,
        logo: {
            "@type": "ImageObject",
            url: `${siteConfig.siteUrl}/icon.png`
        },
        description: siteConfig.description,
        email: `mailto:${siteConfig.contact.email}`,
        telephone: siteConfig.contact.phone,
        foundingDate: legal.foundingDate,
        industry: legal.activity,
        areaServed: "FR",
        identifier: identifiers,
        address: {
            "@type": "PostalAddress",
            addressLocality: address.city,
            postalCode: address.postalCode,
            addressCountry: address.country
        },
        additionalProperty: [
            {
                "@type": "PropertyValue",
                name: "Forme juridique",
                value: legal.legalForm
            }
        ],
        sameAs
    };
}

/**
 * Schéma LocalBusiness pour la page Contact
 * Informations sur le lieu de visite et horaires
 */
export function generateLocalBusinessSchema() {
    const legal = siteConfig.legal;
    const address = legal.address;
    const coordinates = (
        legal as {
            address?: {
                coordinates?: { latitude?: number; longitude?: number };
            };
        }
    ).address?.coordinates;
    const openingHoursSpecification = siteConfig.businessHours
        .filter((hours) => hours.open && hours.close)
        .map((hours) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: hours.day,
            opens: hours.open,
            closes: hours.close
        }));

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteConfig.siteUrl}#localbusiness`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        image: [`${siteConfig.siteUrl}${siteConfig.ogImage}`],
        logo: `${siteConfig.siteUrl}/icon.png`,
        foundingDate: legal.foundingDate,
        sameAs: Object.values(siteConfig.socialLinks ?? {}).filter(Boolean),
        areaServed: {
            "@type": "AdministrativeArea",
            name: `${siteConfig.location.region}, ${legal.address.country}`
        },
        parentOrganization: {
            "@id": `${siteConfig.siteUrl}#organization`
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: address.city,
            postalCode: address.postalCode,
            addressCountry: address.country,
            ...(siteConfig.location?.region
                ? { addressRegion: siteConfig.location.region }
                : {})
        },
        ...(coordinates?.latitude != null && coordinates?.longitude != null
            ? {
                  geo: {
                      "@type": "GeoCoordinates",
                      latitude: coordinates.latitude,
                      longitude: coordinates.longitude
                  }
              }
            : {}),
        openingHoursSpecification,
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.phone,
            areaServed: ["FR"],
            availableLanguage: ["fr"]
        },
        currenciesAccepted: "EUR",
        priceRange: "4500€-5000€"
    };
}

/**
 * Schéma ContactPoint pour la page Contact
 */
export function generateContactPointSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        "@id": `${siteConfig.siteUrl}#contactpoint`,
        contactType: "Customer Service",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        url: siteConfig.siteUrl,
        areaServed: ["FR"],
        availableLanguage: ["fr"]
    };
}

/**
 * Schéma FAQPage pour les sections FAQ
 * @param faqs - Array of {question: string, answer: string}
 */
export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };
}

/**
 * Schéma Product/Breeder pour les chiots (page Nos chiots)
 * @param puppy - Données du chiot
 */
export function generatePuppySchema(puppy: {
    name: string;
    description: string;
    color: string;
    size: string;
    image: string;
    price?: number;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: puppy.name,
        description: puppy.description,
        image: `${siteConfig.siteUrl}${puppy.image}`,
        brand: {
            "@type": "Brand",
            name: siteConfig.name
        },
        manufacturer: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl
        },
        offers: puppy.price
            ? {
                  "@type": "Offer",
                  url: `${siteConfig.siteUrl}/contact`,
                  priceCurrency: "EUR",
                  price: puppy.price.toString()
              }
            : undefined
    };
}

/**
 * Schéma ItemList pour la page Nos chiots
 * @param puppies - Array de chiots
 */
export function generatePuppyListSchema(
    puppies: Array<{
        name: string;
        description: string;
        color: string;
        size: string;
        image: string;
    }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Chiots Mame Shiba disponibles",
        description:
            "Liste des chiots Mame Shiba de l'élevage Kawaii Shiba disponibles à l'adoption.",
        numberOfItems: puppies.length,
        itemListElement: puppies.map((puppy, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: puppy.name,
            url: `${siteConfig.siteUrl}/chiots-disponibles`,
            image: `${siteConfig.siteUrl}${puppy.image}`
        }))
    };
}

/**
 * Schéma Person pour les reproducteurs (page Nos reproducteurs)
 * @param dog - Données du chien reproducteur
 */
export function generateReproductorSchema(dog: {
    name: string;
    description: string;
    color: string;
    size: string;
    image: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: dog.name,
        description: dog.description,
        image: `${siteConfig.siteUrl}${dog.image}`,
        affiliation: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl
        }
    };
}

/**
 * Schéma Breadcrumb pour la navigation
 * @param breadcrumbs - Array of {name: string, url: string}
 */
export function generateBreadcrumbSchema(
    breadcrumbs: Array<{ name: string; url: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `${siteConfig.siteUrl}${crumb.url}`
        }))
    };
}

/**
 * Schéma WebSite pour les moteurs de recherche
 */
export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}#website`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
        inLanguage: "fr-FR",
        publisher: {
            "@id": `${siteConfig.siteUrl}#organization`
        }
    };
}

export function generateCollectionPageSchema(params: {
    name: string;
    description: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: params.name,
        description: params.description,
        url: params.url,
        inLanguage: "fr-FR",
        isPartOf: {
            "@id": `${siteConfig.siteUrl}#website`
        },
        publisher: {
            "@id": `${siteConfig.siteUrl}#organization`
        }
    };
}

export function generateBlogPostingSchema(params: {
    headline: string;
    description: string;
    url: string;
    image?: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    authorImage?: string;
    keywords?: string[];
    articleSection?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: params.headline,
        description: params.description,
        mainEntityOfPage: params.url,
        url: params.url,
        inLanguage: "fr-FR",
        ...(params.image ? { image: [params.image] } : {}),
        datePublished: params.datePublished,
        dateModified: params.dateModified,
        author: {
            "@type": "Person",
            name: params.authorName,
            ...(params.authorImage ? { image: params.authorImage } : {})
        },
        publisher: {
            "@id": `${siteConfig.siteUrl}#organization`
        },
        ...(params.keywords?.length ? { keywords: params.keywords.join(", ") } : {}),
        ...(params.articleSection ? { articleSection: params.articleSection } : {})
    };
}
