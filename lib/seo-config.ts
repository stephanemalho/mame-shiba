import { createLastmodGetter } from "./lastmod";
import { pageContent } from "./page-content";

/**
 * ============================================================
 * CONFIGURATION SEO & LÉGALE — Kawaii Shiba
 * ============================================================
 * Source de vérité unique pour :
 * - SEO
 * - Métadonnées
 * - Mentions légales
 * - Sitemap
 */

/* -------------------------------------------------------------------------- */
/*  CANONICAL NAME (UNE SEULE SOURCE DE VÉRITÉ)                                */
/* -------------------------------------------------------------------------- */

const CANONICAL_NAME = "Kawaii Shiba";

export const seoLastmod = "2026-04-04";

/* -------------------------------------------------------------------------- */
/*  SITE CONFIG                                                                */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
    /* ----------------------------- Identité --------------------------------- */
    name: CANONICAL_NAME,
    author: CANONICAL_NAME,
    locale: "fr-FR",

    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kawaii-shiba.com",

    /* ------------------------------ SEO Global -------------------------------- */
    title: "Élevage de Mame Shiba en France | Kawaii Shiba",
    description:
        "Kawaii Shiba est un élevage spécialisé en Mame Shiba en France. Nos chiens sont importés du Japon et élevés avec soin pour proposer des chiots bien socialisés, équilibrés et issus de lignées rigoureusement sélectionnées.",
    keywords: [
        "élevage mame shiba",
        "mame shiba france",
        "chiot mame shiba",
        "mame shiba japonais",
        "élevage shiba inu",
        "adopter mame shiba",
        "elevage de chien japonais"
    ],

    /* ------------------------------ Contact ---------------------------------- */
    contact: {
        email: "elevagemameshiba@gmail.com",
        phone: "+33689758031",
        phoneFormatted: "06 89 75 80 31"
    },

    /* ---------------------------- Données légales ----------------------------- */
    legal: {
        legalName: "ELEVAGE ROYAL",
        tradeName: CANONICAL_NAME,
        legalForm: "GAEC (Groupement Agricole d'Exploitation en Commun)",
        siren: "917907016",
        siret: "91790701600013",
        apeCode: "01.49Z",
        activity: "Élevage d'autres animaux",
        foundingDate: "2022-06-15",
        address: {
            city: "Dommartin-lès-Cuiseaux",
            postalCode: "71480",
            country: "France"
        }
    },

    /* ----------------------- Localisation (marketing) ------------------------- elevagemameshiba@gmail.com */
    location: {
        region: "Bourgogne-Franche-Comté",
        department: "Saône-et-Loire (71)",
        nearbyCity: "Saint-Amour (39)"
    },

    /* ------------------------------ Horaires ---------------------------------- */
    businessHours: [
        { day: "Monday", open: "09:00", close: "18:00" },
        { day: "Tuesday", open: "09:00", close: "18:00" },
        { day: "Wednesday", open: "09:00", close: "18:00" },
        { day: "Thursday", open: "09:00", close: "18:00" },
        { day: "Friday", open: "09:00", close: "18:00" },
        { day: "Saturday", open: "09:00", close: "18:00" },
        { day: "Sunday", closed: true }
    ],

    /* ------------------------------ OpenGraph --------------------------------- */
    ogImage: "/mame-shiba-in-a-sakura-tree.jpg",
    ogImageAlt:
        "Mame shiba femelle de Kawaii Shiba sur un arbre en fleurs de cerisier",
    ogImageWidth: 2560,
    ogImageHeight: 1707,

    socialLinks: {
        instagram: "https://www.instagram.com/kawaiimameshiba/"
    },

    /* ------------------------------- Pages ------------------------------------ */
    pages: {
        home: "/",
        shiba: "/mameshiba",
        mameshibaPrice: "/mame-shiba-prix",
        adoptionGuide: "/adoption/reussir-son-adoption",
        puppies: "/chiots-disponibles",
        reproductors: "/nos-chiens",
        presentation: "/presentation-elevage",
        eleveuses: "/presentation-eleveuses",
        wellness: "/bien-etre-animal",
        contact: "/contact",
        legalNotice: "/mentions-legales",
        terms: "/conditions-generales",
        privacy: "/politique-de-confidentialite"
    }
};

type SocialImageAsset = {
    width: number;
    height: number;
    type: string;
};

const socialImageAssets: Record<string, SocialImageAsset> = {
    "/mame-shiba-in-a-sakura-tree.jpg": {
        width: 2560,
        height: 1707,
        type: "image/jpeg"
    },
    "/locaux.webp": {
        width: 2048,
        height: 1536,
        type: "image/webp"
    },
    "/pages/homePage/mame-shiba-for-modern-life.jpeg": {
        width: 2560,
        height: 1709,
        type: "image/jpeg"
    },
    "/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg": {
        width: 1320,
        height: 1908,
        type: "image/jpeg"
    },
    "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg": {
        width: 1320,
        height: 866,
        type: "image/jpeg"
    },
    "/pages/homePage/mame-shiba-good-caractere.jpg": {
        width: 2560,
        height: 1707,
        type: "image/jpeg"
    },
    "/pages/homePage/little-mame-shiba-red-white.jpeg": {
        width: 2560,
        height: 1708,
        type: "image/jpeg"
    },
    "/pages/homePage/SHIBA-INU-ET-MAMESHIBA-300x261.jpeg": {
        width: 300,
        height: 261,
        type: "image/jpeg"
    },
    "/pages/mame-shiba-prix/trois-mame-shiba-bebe.jpg": {
        width: 1600,
        height: 1066,
        type: "image/jpeg"
    },
    "/pages/mame-shiba-prix/deux-mame-shiba-chiots-blanc-et-un-noir.jpeg": {
        width: 2560,
        height: 1707,
        type: "image/jpeg"
    },
    "/pages/reproducteurs/ISHIRO-mame-shiba-kawaii-shiba.webp": {
        width: 683,
        height: 1024,
        type: "image/webp"
    },
    "/pages/reproducteurs/YUMI-femelle-mame-shiba-couleur-feu.webp": {
        width: 2560,
        height: 1709,
        type: "image/webp"
    },
    "/pages/reproducteurs/kawaii-sur-un-champ-de-fleurs-jaunes.webp": {
        width: 3127,
        height: 2087,
        type: "image/webp"
    },
    "/pages/les-eleveuses/marine-aurelie-et-clea-avec-trois-mame-shiba-de-elevage-kawaii.jpeg": {
        width: 3301,
        height: 2203,
        type: "image/jpeg"
    },
    "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg": {
        width: 1708,
        height: 2560,
        type: "image/jpeg"
    },
    "/assets/blog/Kaito-et-Yushi-en-appartement.jpg": {
        width: 1600,
        height: 1200,
        type: "image/jpeg"
    }
};

const mimeTypeByExtension: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
    svg: "image/svg+xml"
};

const getSiteRelativeImagePath = (urlOrPath: string) => {
    if (urlOrPath.startsWith("/")) {
        return urlOrPath;
    }

    try {
        const parsedUrl = new URL(urlOrPath);
        if (parsedUrl.origin === siteConfig.siteUrl) {
            return parsedUrl.pathname;
        }
    } catch {
        return undefined;
    }

    return undefined;
};

const inferMimeType = (urlOrPath: string) => {
    const withoutQuery = urlOrPath.split("?")[0] ?? urlOrPath;
    const extension = withoutQuery.split(".").pop()?.toLowerCase();

    return extension ? mimeTypeByExtension[extension] : undefined;
};

export const resolveSocialImage = (urlOrPath: string) => {
    const siteRelativePath = getSiteRelativeImagePath(urlOrPath);
    const asset =
        (siteRelativePath ? socialImageAssets[siteRelativePath] : undefined) ??
        undefined;

    return {
        url: siteRelativePath
            ? new URL(siteRelativePath, siteConfig.siteUrl).toString()
            : urlOrPath,
        ...(asset?.width ? { width: asset.width } : {}),
        ...(asset?.height ? { height: asset.height } : {}),
        ...(asset?.type || inferMimeType(urlOrPath)
            ? { type: asset?.type ?? inferMimeType(urlOrPath) }
            : {})
    };
};

type OpenGraphParams = {
    title: string;
    description: string;
    url: string;
    type?: "website" | "article";
    images?: Array<{
        url: string;
        alt?: string;
        width?: number;
        height?: number;
        type?: string;
    }>;
    publishedTime?: string;
    authors?: string[];
};

export const buildOpenGraph = ({
    title,
    description,
    url,
    type = "website",
    images,
    publishedTime,
    authors
}: OpenGraphParams) => ({
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type,
    ...(type === "article" && publishedTime ? { publishedTime } : {}),
    ...(type === "article" && authors ? { authors } : {}),
    images:
        images && images.length > 0
            ? images.map((image) => {
                  const resolvedImage = resolveSocialImage(image.url);

                  return {
                      url: resolvedImage.url,
                      width: resolvedImage.width ?? siteConfig.ogImageWidth,
                      height: resolvedImage.height ?? siteConfig.ogImageHeight,
                      alt: image.alt ?? siteConfig.ogImageAlt,
                      type: resolvedImage.type,
                  };
              })
            : (() => {
                  const resolvedImage = resolveSocialImage(siteConfig.ogImage);

                  return [
                      {
                          url: resolvedImage.url,
                          width: resolvedImage.width ?? siteConfig.ogImageWidth,
                          height: resolvedImage.height ?? siteConfig.ogImageHeight,
                          alt: siteConfig.ogImageAlt,
                          type: resolvedImage.type
                      }
                  ];
              })()
});

type TwitterParams = {
    title: string;
    description: string;
    imageUrl?: string;
};

export const buildTwitter = ({
    title,
    description,
    imageUrl
}: TwitterParams) => ({
    card: "summary_large_image",
    title,
    description,
    images: [
        resolveSocialImage(
            imageUrl
                ? imageUrl
                : new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()
        ).url
    ]
});

/* -------------------------------------------------------------------------- */
/*  MÉTADONNÉES PAR PAGE                                                       */
/* -------------------------------------------------------------------------- */

export const pageMetadata = {
    home: {
        title: "Élevage de chiots Mame Shiba nées en France | Kawaii Shiba",
        description:
            "Kawaii Shiba est un élevage spécialisé en Mame Shiba. Nos chiens sont importés du Japon et élevés avec soin pour proposer des chiots bien socialisés, équilibrés et issus de lignées rigoureusement sélectionnées.",
        keywords: [
            "élevage de mameshiba responsable",
            "chiots mameshiba rares en France",
            "élevage de petit shiba à taille humaine",
            "chiots shiba bien socialisés",
            "mame shiba roux",
            "mame shiba noir",
            "mame shiba blanc",
            "adopter un chien japonais",
            "Kawaii Shiba",
            "élevage de mame shiba en France",
            "adopter un mame shiba en France"
        ]
    },

    shiba: {
        title: pageContent.shiba.h1,
        description: pageContent.shiba.description,
        keywords: [
            "mameshiba",
            "mame shiba",
            "taille du mameshiba",
            "difference shiba inu mameshiba",
            "origine du mameshiba",
            "standard du mameshiba",
            "kcj mameshiba",
            "vrai mameshiba",
            "adopter un mameshiba",
            "chien ressemblant à un renard",
            "chiens japonais"
        ]
    },

    puppies: {
        title: pageContent.puppies.h1,
        description: pageContent.puppies.description,
        keywords: [
            "chiots mameshiba",
            "mameshiba disponible",
            "reservation chiot mameshiba",
            "portee mameshiba",
            "elevage mameshiba france",
            "acheter un mameshiba",
            "inscription portee mameshiba"
        ]
    },

    mameshibaPrice: {
        title: "Prix de nos Mameshiba | Kawaii Shiba",
        description:
            "Découvrez les prix de nos Mameshiba à l’élevage Kawaii Shiba : 4 500 € pour un mâle et 5 000 € pour une femelle, avec sélection sérieuse et accompagnement.",
        keywords: [
            "prix mame shiba",
            "prix mameshiba elevage",
            "tarif mame shiba",
            "prix mameshiba kawaii shiba",
            "prix chiot mameshiba",
            "prix male mameshiba",
            "prix femelle mameshiba",
            "kawaii shiba prix"
        ]
    },

    adoptionGuide: {
        title: "Réussir l’adoption de son chiot Mame Shiba | Kawaii Shiba",
        description:
            "Guide pratique pour réussir l’adoption d’un chiot Mame Shiba : trajet du départ, arrivée à la maison, premières nuits, propreté, solitude et repères essentiels.",
        keywords: [
            "adoption mame shiba",
            "accueil chiot mameshiba",
            "premiers jours chiot mameshiba",
            "trajet adoption chiot",
            "proprete chiot mameshiba",
            "solitude chiot shiba",
            "guide adoption mame shiba"
        ]
    },

    reproductors: {
        title: pageContent.reproductors.h1,
        description: pageContent.reproductors.description,
        keywords: [
            "mameshiba japon",
            "nos chiens mameshiba",
            "adultes reproducteurs mameshiba",
            "lignées japonaises mameshiba",
            "tests genetiques shiba inu",
            "caractere mameshiba"
        ]
    },

    presentation: {
        title: pageContent.presentation.h1,
        description: pageContent.presentation.description,
        keywords: [
            "elevage mameshiba",
            "elevage shiba japonais",
            "selection rigoureuse mameshiba",
            "accompagnement adoptant",
            "ethique elevage",
            "trouver bon elevage mameshiba",
            "elevage chiots avec mere"
        ]
    },
    eleveuses: {
        title: pageContent.eleveuses.h1,
        description: pageContent.eleveuses.description,
        keywords: [
            "eleveuses mameshiba",
            "equipe elevage mameshiba",
            "aurélie mameshiba",
            "marine mameshiba",
            "presentation eleveuses",
            "approche holistique elevage"
        ]
    },

    wellness: {
        title: pageContent.wellness.h1,
        description: pageContent.wellness.description,
        keywords: [
            "conditions de vie des chiots en élevage",
            "élevage familial responsable",
            "bien-être et socialisation des chiots",
            "chiots élevés avec leur mère",
            "suivi vétérinaire dès la naissance",
            "respect du développement du chiot",
            "environnement sain pour chiots",
            "elevage mameshiba",
            "vie en elevage mameshiba",
            "socialisation mameshiba"
        ]
    },

    contact: {
        title: pageContent.contact.h1,
        description: pageContent.contact.description,
        keywords: [
            "contact elevage kawaii shiba",
            "visite elevage",
            "rendez-vous",
            "adoption mameshiba",
            "informations chiot",
            "reservation chiot",
            "questions elevage mameshiba",
            "prendre contact avec elevage mameshiba"
        ]
    },

    legalNotice: {
        title: pageContent.legalNotice.h1,
        description: pageContent.legalNotice.description,
        keywords: [
            "mentions legales",
            "informations legales",
            "siren",
            "siret",
            "editeur du site"
        ]
    },

    terms: {
        title: pageContent.terms.h1,
        description: pageContent.terms.description,
        keywords: [
            "conditions generales",
            "conditions dutilisation",
            "CGU",
            "responsabilite",
            "propriete intellectuelle"
        ]
    },

    privacy: {
        title: pageContent.privacy.h1,
        description: pageContent.privacy.description,
        keywords: [
            "RGPD",
            "confidentialite",
            "donnees personnelles",
            "cookies",
            "droits des utilisateurs"
        ]
    },
    blog: {
        title: "Blog Mame Shiba | Shiba Inu, comportement et adoption",
        description:
            "Articles sur le Shiba Inu et le Mame Shiba : comportement, comparatifs, vie quotidienne et conseils d'adoption.",
        keywords: [
            "blog mame shiba",
            "blog shiba inu",
            "shiba inu caractere",
            "mame shiba adoption",
            "chien japonais",
            "comparatif shiba akita",
            "shiba appartement",
            "premiere adoption shiba"
        ]
    }
};

/* -------------------------------------------------------------------------- */
/*  SITEMAP                                                                    */
/* -------------------------------------------------------------------------- */

export const sitemapPages = [
    {
        url: "/",
        changefreq: "weekly",
        priority: 1.0,
        lastmod: seoLastmod
    },
    {
        url: "/mameshiba",
        changefreq: "monthly",
        priority: 0.75,
        lastmod: seoLastmod
    },
    {
        url: "/chiots-disponibles",
        changefreq: "weekly",
        priority: 0.9,
        lastmod: seoLastmod
    },
    {
        url: "/adoption/reussir-son-adoption",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: seoLastmod
    },
    {
        url: "/mame-shiba-prix",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: seoLastmod
    },
    {
        url: "/nos-chiens",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: seoLastmod
    },
    {
        url: "/presentation-elevage",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: seoLastmod
    },
    {
        url: "/presentation-eleveuses",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: seoLastmod
    },
    {
        url: "/bien-etre-animal",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: seoLastmod
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: seoLastmod
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: seoLastmod
    },
    {
        url: "/conditions-generales",
        changefreq: "yearly",
        priority: 0.6,
        lastmod: seoLastmod
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.7,
        lastmod: seoLastmod
    }
];

/* -------------------------------------------------------------------------- */
/*  LASTMOD                                                                    */
/* -------------------------------------------------------------------------- */

export const returnLastmod = createLastmodGetter(sitemapPages);

// Compat legacy (à supprimer plus tard)
export const retrunLastmod = returnLastmod;
export const getLastmod = returnLastmod;
