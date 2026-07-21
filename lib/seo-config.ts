import { createLastmodGetter } from "./lastmod";
import { responsiveImages } from "./responsive-images";

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

    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kawaii-shiba.com",

    /* ------------------------------ SEO Global -------------------------------- */
    title: "Élevage de Mameshiba en France | Kawaii Shiba",
    description:
        "Kawaii Shiba est un élevage spécialisé en Mameshiba en France. Nos chiens sont importés du Japon et élevés avec soin pour proposer des chiots bien socialisés, équilibrés et issus de lignées rigoureusement sélectionnées.",
    keywords: [
        "élevage Mameshiba",
        "Mameshiba France",
        "chiot Mameshiba",
        "Mameshiba japonais",
        "élevage shiba inu",
        "adopter Mameshiba",
        "élevage de chien japonais"
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
            streetAddress: "800 chemin de la Liambe",
            city: "Dommartin-lès-Cuiseaux",
            postalCode: "71480",
            country: "FR",
            countryName: "France"
        }
    },

    /* ----------------------- Localisation (marketing) ------------------------- elevagemameshiba@gmail.com */
    location: {
        region: "Bourgogne-Franche-Comté",
        department: "Saône-et-Loire",
        departmentCode: "71",
        nearbyCity: "Dommartin-lès-Cuiseaux, Saône-et-Loire (71)"
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
        "Mameshiba femelle de Kawaii Shiba sur un arbre en fleurs de cerisier",
    ogImageWidth: 2560,
    ogImageHeight: 1707,

    socialLinks: {
        facebook: "https://www.facebook.com/people/Elevage-Mameshiba-Kawaii-Shiba/100088811580709",
        instagram: "https://www.instagram.com/kawaiimameshiba/",
        tiktok: "https://www.tiktok.com/@kawaiimameshiba",
        youtube: "https://www.youtube.com/@Elevagekawaiimameshiba"
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
        gallery: "/galerie",
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
    [responsiveImages.cloeEleveuseAvecMameshibaEtShiba.metadata.src]: {
        width: responsiveImages.cloeEleveuseAvecMameshibaEtShiba.metadata.width,
        height: responsiveImages.cloeEleveuseAvecMameshibaEtShiba.metadata.height,
        type: responsiveImages.cloeEleveuseAvecMameshibaEtShiba.metadata.type
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
    "/pages/les-eleveuses/marine-aurelie-et-clea-avec-trois-mame-shiba-de-elevage-kawaii.jpeg":
        {
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
                  const width = image.width ?? resolvedImage.width;
                  const height = image.height ?? resolvedImage.height;
                  const type = image.type ?? resolvedImage.type;

                  return {
                      url: resolvedImage.url,
                      ...(width ? { width } : {}),
                      ...(height ? { height } : {}),
                      alt: image.alt ?? siteConfig.ogImageAlt,
                      ...(type ? { type } : {})
                  };
              })
            : (() => {
                  const resolvedImage = resolveSocialImage(siteConfig.ogImage);

                  return [
                      {
                          url: resolvedImage.url,
                          width: resolvedImage.width ?? siteConfig.ogImageWidth,
                          height:
                              resolvedImage.height ?? siteConfig.ogImageHeight,
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
    images?: string[];
};

export const buildTwitter = ({
    title,
    description,
    imageUrl,
    images
}: TwitterParams) => ({
    card: "summary_large_image",
    title,
    description,
    images: (images && images.length > 0
        ? images
        : [
              imageUrl
                  ? imageUrl
                  : new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()
          ]
    ).map((image) => resolveSocialImage(image).url)
});

/* -------------------------------------------------------------------------- */
/*  MÉTADONNÉES PAR PAGE                                                       */
/* -------------------------------------------------------------------------- */

export const pageMetadata = {
    home: {
        title: "Élevage de Shiba Inu Mameshiba : le plus petit Shiba du monde",
        description:
            "Élevage de Mameshiba en France, le Shiba Inu de petite taille issu de lignées japonaises. Chiots Mameshiba élevés avec soin, socialisés et accompagnés avant adoption.",

        keywords: [
            "élevage de mameshiba",
            "chiots mameshiba rares en France",
            "élevage de petit shiba à taille humaine",
            "chiots shiba bien socialisés",
            "Mameshiba roux",
            "Mameshiba noir",
            "Mameshiba blanc",
            "adopter un chien japonais",
            "Kawaii Shiba",
            "élevage de Mameshiba en France",
            "adopter un Mameshiba en France"
        ]
    },

    shiba: {
        title: "Mameshiba : Le vrai Shiba Inu nain | Kawaii Shiba",
        description:
            "Découvrez le Mameshiba, le Shiba Inu de petite taille, star du Japon. Apprenez tout sur son origine, sa taille, son caractère et comment il se différencie du Shiba Inu classique.",
        keywords: [
            "mame shiba",
            "Mameshiba",
            "taille du mameshiba",
            "différence shiba inu mameshiba",
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
        title: "Adoptez un chiot Mameshiba chez Kawaii Shiba",
        description:
            "Découvrez nos Shiba Inu Mameshiba disponibles à l'adoption : des petits Shiba japonais élevés avec soin, issus de lignées rigoureusement sélectionnées et prêts à rejoindre leur nouvelle famille.",
        keywords: [
            "chiots mameshiba",
            "mameshiba disponible",
            "réservation chiot mameshiba",
            "portée mameshiba",
            "élevage mameshiba france",
            "acheter un mameshiba",
            "inscription portée mameshiba"
        ]
    },

    mameshibaPrice: {
        title: "Prix de nos Mameshiba en 2026 chez Kawaii Shiba",
        description:
            "4 500 € pour un mâle et 5 000 € pour une femelle : cette page détaille les tarifs et les conditions de réservation.",
        keywords: [
            "prix Mameshiba",
            "prix mameshiba élevage",
            "tarif Mameshiba",
            "prix mameshiba kawaii shiba",
            "prix chiot mameshiba",
            "prix mâle mameshiba",
            "prix femelle mameshiba",
            "kawaii shiba prix"
        ]
    },

    adoptionGuide: {
        title: "Réussir l'adoption de son Mameshiba avec les conseils Kawaii Shiba",
        description:
            "Guide pratique pour réussir l'adoption d'un chiot Mameshiba : trajet du départ, arrivée à la maison, premières nuits, propreté, solitude et repères essentiels.",
        keywords: [
            "adoption Mameshiba",
            "accueil chiot mameshiba",
            "premiers jours chiot mameshiba",
            "trajet adoption chiot",
            "propreté chiot mameshiba",
            "chiot mame shiba inu",
            "guide adoption Mameshiba"
        ]
    },

    reproductors: {
        title: "Nos adultes reproducteurs Mameshiba",
        description:
            "Les chiens présentés ici constituent le cœur de notre élevage Kawaii Shiba. Chacun participe à la construction de notre sélection, avec une attention particulière portée au type, à la santé, au caractère et à la cohérence des lignées japonaises.",
        keywords: [
            "mameshiba japon",
            "nos chiens mameshiba",
            "adultes reproducteurs mameshiba",
            "lignées japonaises mameshiba",
            "tests génétiques shiba inu",
            "caractère mameshiba"
        ]
    },

    presentation: {
        title: "L'élevage Kawaii Shiba Mameshiba",
        description:
            "Élevage spécialisé Mameshiba à Dommartin-lès-Cuiseaux (71) : sélection raisonnée, lignées japonaises, santé suivie et chiots élevés avec une vraie attention portée à l'équilibre émotionnel.",
        keywords: [
            "élevage mameshiba",
            "élevage shiba japonais",
            "sélection rigoureuse mameshiba",
            "accompagnement adoptant",
            "éthique élevage",
            "trouver bon élevage mameshiba",
            "élevage chiots avec mère"
        ]
    },
    eleveuses: {
        title: "L'équipe de Kawaii Shiba",
        description:
            "Nous sommes Aurélie, Marine et Jérôme. Cette page raconte notre parcours, notre vision de l’élevage et la manière dont nous accompagnons les familles autour du Mameshiba, avec exigence, sensibilité et transparence.",
        keywords: [
            "éleveuses mameshiba",
            "éleveur mameshiba",
            "équipe élevage mameshiba",
            "aurélie mameshiba",
            "marine mameshiba",
            "jérôme mameshiba",
            "présentation éleveuses",
            "approche holistique élevage"
        ]
    },

    wellness: {
        title: "La vie en élevage",
        description:
            "Voici comment vivent nos Mameshiba reproducteurs et nos chiots au sein de notre élevage",
        keywords: [
            "conditions de vie des chiots en élevage",
            "élevage professionnel responsable",
            "bien-être et socialisation des chiots",
            "chiots élevés avec leur mère",
            "suivi vétérinaire dès la naissance",
            "respect du développement du chiot",
            "environnement sain pour chiots",
            "élevage mameshiba",
            "vie en élevage mameshiba",
            "socialisation mameshiba"
        ]
    },

    gallery: {
        title: "Galerie Mameshiba : photos et vidéos | Kawaii Shiba",
        description:
            "Découvrez notre sélection de photos préférées des Mameshiba de Kawaii Shiba et les trois dernières vidéos publiées automatiquement sur notre chaîne YouTube.",
        keywords: [
            "galerie Mameshiba",
            "photos Mameshiba",
            "vidéos Mameshiba",
            "élevage Mameshiba en photos",
            "YouTube Mameshiba",
            "Kawaii Shiba"
        ]
    },

    contact: {
        title: "Contact & visites",
        description:
            "Parlons de votre projet d'adoption. Les visites se font uniquement sur rendez-vous pour respecter le rythme des chiots.",
        keywords: [
            "contact élevage kawaii shiba",
            "visite élevage",
            "rendez-vous",
            "adoption mameshiba",
            "informations chiot",
            "réservation chiot",
            "questions élevage mameshiba",
            "prendre contact avec élevage mameshiba"
        ]
    },

    legalNotice: {
        title: "Mentions légales",
        description:
            "Informations réglementaires de l'élevage Kawaii Shiba et cadre juridique d'utilisation du site.",
        keywords: [
            "mentions légales",
            "informations légales",
            "siren",
            "siret",
            "éditeur du site"
        ]
    },

    terms: {
        title: "Termes et conditions d'utilisation",
        description:
            "Règles d'usage du site Kawaii Shiba, informations précontractuelles et responsabilités de chacune des parties.",
        keywords: [
            "conditions générales",
            "conditions d'utilisation",
            "CGU",
            "responsabilité",
            "propriété intellectuelle"
        ]
    },

    privacy: {
        title: "Politique de confidentialité",
        description:
            "Comment Kawaii Shiba collecte, utilise et protège vos données personnelles dans le respect du RGPD.",
        keywords: [
            "RGPD",
            "confidentialité",
            "données personnelles",
            "cookies",
            "droits des utilisateurs"
        ]
    },
    blog: {
        title: "Tout savoir sur le Shiba Inu et le Mameshiba | Blog de Kawaii Shiba",
        description:
            "Articles complets sur le comportement, les comparatifs, la vie quotidienne et les conseils d'adoption pour les Shiba Inu et les Mameshiba, rédigés par les éleveuses de Kawaii Shiba.",
        keywords: [
            "blog Mameshiba",
            "blog shiba inu",
            "shiba inu caractère",
            "Mameshiba adoption",
            "chien japonais",
            "comparatif shiba akita",
            "shiba appartement",
            "première adoption shiba"
        ]
    }
};

/* -------------------------------------------------------------------------- */
/*  SITEMAP                                                                    */
/* -------------------------------------------------------------------------- */

export const sitemapPages = [
    {
        url: "/",
        changefreq: "monthly",
        priority: 1.0,
        lastmod: "2026-07-09"
    },
    {
        url: "/chiots-disponibles",
        changefreq: "weekly",
        priority: 0.95,
        lastmod: "2026-07-21"
    },
    {
        url: "/mameshiba",
        changefreq: "monthly",
        priority: 0.9,
        lastmod: "2026-07-09"
    },
    {
        url: "/nos-chiens",
        changefreq: "monthly",
        priority: 0.85,
        lastmod: "2026-07-09"
    },
    {
        url: "/adoption/reussir-son-adoption",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-07-09"
    },
    {
        url: "/mame-shiba-prix",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-07-09"
    },
    {
        url: "/presentation-elevage",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-07-09"
    },
    {
        url: "/presentation-eleveuses",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-07-09"
    },
    {
        url: "/bien-etre-animal",
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2026-07-09"
    },
    {
        url: "/galerie",
        changefreq: "weekly",
        priority: 0.75,
        lastmod: "2026-07-21"
    },
    {
        url: "/contact",
        changefreq: "monthly",
        priority: 0.8,
        lastmod: "2026-07-09"
    },
    {
        url: "/mentions-legales",
        changefreq: "yearly",
        priority: 0.2,
        lastmod: seoLastmod
    },
    {
        url: "/conditions-generales",
        changefreq: "yearly",
        priority: 0.2,
        lastmod: seoLastmod
    },
    {
        url: "/politique-de-confidentialite",
        changefreq: "yearly",
        priority: 0.2,
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
