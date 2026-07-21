import { siteConfig } from "@/lib/seo-config"

export const GALLERY_REVALIDATE_SECONDS = 21600

const YOUTUBE_CHANNEL_ID = "UCyAE-Bii633Lj1sfuFUGDpA"

export type SocialGalleryItem = {
    id: string
    title: string
    href: string
    thumbnailSrc: string
    thumbnailAlt: string
    summary: string
    publishedAt?: string
}

export type GalleryImageItem = {
    id: string
    src: string
    alt: string
    title: string
    summary: string
    width: number
    height: number
}

type YouTubeOEmbedResponse = {
    title?: string
    thumbnail_url?: string
}

type YouTubeFeedItem = {
    videoId: string
    publishedAt?: string
}

export const galleryImageItems: GalleryImageItem[] = [
    {
        id: "course-jardin",
        src: "/pages/image-all-shiba/mameshiba-jardin-course-03.webp",
        alt: "Mameshiba courant dans le jardin de l'élevage Kawaii Shiba",
        title: "De l'énergie au grand air",
        summary: "Nos Mameshiba profitent chaque jour des espaces extérieurs de l'élevage.",
        width: 1300,
        height: 757,
    },
    {
        id: "portrait-vertical",
        src: "/pages/image-all-shiba/mameshiba-portrait-vertical-02.webp",
        alt: "Chiot Mameshiba installé dans un sac de transport",
        title: "Prêt à découvrir",
        summary: "Nos chiots sont familiarisés progressivement avec des situations variées.",
        width: 1200,
        height: 1600,
    },
    {
        id: "ensemble-jardin",
        src: "/pages/image-all-shiba/mameshiba-jardin-ensemble-01.webp",
        alt: "Jeune Mameshiba roux assis dans le jardin de l'élevage",
        title: "La vie au jardin",
        summary: "Les espaces extérieurs permettent aux chiots d'observer et d'explorer à leur rythme.",
        width: 1300,
        height: 866,
    },
    {
        id: "structure-bois",
        src: "/pages/image-all-shiba/mameshiba-sur-structure-bois-01.webp",
        alt: "Mameshiba adulte allongé au calme dans la maison",
        title: "Se poser en confiance",
        summary: "L'apprentissage du calme accompagne aussi les moments de jeu et d'exploration.",
        width: 1300,
        height: 975,
    },
    {
        id: "portrait-exterieur",
        src: "/pages/image-all-shiba/mameshiba-exterieur-portrait-01.webp",
        alt: "Trois très jeunes chiots Mameshiba réunis à l'élevage",
        title: "Les premières semaines",
        summary: "Une période essentielle pendant laquelle chaque chiot grandit sous notre attention.",
        width: 1300,
        height: 866,
    },
    {
        id: "interieur",
        src: "/pages/image-all-shiba/mameshiba-interieur-textile-01.webp",
        alt: "Très jeune chiot Mameshiba blanc installé au calme",
        title: "Grandir au calme",
        summary: "Le repos et un environnement adapté font pleinement partie du quotidien.",
        width: 1300,
        height: 976,
    },
    {
        id: "promenade",
        src: "/pages/image-all-shiba/mameshiba-en-laisse-parc-01.webp",
        alt: "Mameshiba en promenade en laisse dans un parc",
        title: "Découvrir le monde",
        summary: "Les sorties progressives préparent les chiens à des environnements différents.",
        width: 600,
        height: 800,
    },
    {
        id: "branches",
        src: "/pages/image-all-shiba/mameshiba-parmi-les-branches.webp",
        alt: "Chiot Mameshiba photographié dans un décor coloré d'automne",
        title: "Des expériences variées",
        summary: "De nouveaux décors et objets nourrissent la curiosité des chiots en douceur.",
        width: 1067,
        height: 1600,
    },
    {
        id: "portrait-collier",
        src: "/pages/image-all-shiba/mameshiba-portrait-collier-01.webp",
        alt: "Gros plan sur un très jeune chiot Mameshiba au pelage sombre",
        title: "Chaque personnalité se dessine",
        summary: "Dès les premières semaines, chaque chiot révèle ses expressions singulières.",
        width: 1066,
        height: 1600,
    },
    {
        id: "jardin-ciel",
        src: "/pages/image-all-shiba/mameshiba-jardin-ciel-01.webp",
        alt: "Mameshiba dans le jardin sous un ciel dégagé",
        title: "Un cadre ouvert",
        summary: "Le jardin offre de l'espace pour jouer, observer et se dépenser.",
        width: 1300,
        height: 975,
    },
    {
        id: "ensemble-deux",
        src: "/pages/image-all-shiba/mameshiba-jardin-ensemble-02.webp",
        alt: "Jeune chiot Mameshiba roux assis dans l'herbe",
        title: "Grandir au grand air",
        summary: "Les sorties dans le jardin accompagnent les découvertes et les apprentissages.",
        width: 1300,
        height: 866,
    },
    {
        id: "archive-comparatif-japon",
        src: "/pages/homePage/SHIBA-INU-ET-MAMESHIBA-300x261.jpeg",
        alt: "Comparaison de taille entre un Shiba Inu adulte et un Mameshiba",
        title: "Shiba Inu et Mameshiba",
        summary: "Une ancienne image comparative utilisée pour illustrer leur différence de gabarit.",
        width: 300,
        height: 261,
    },
    {
        id: "archive-comparatif-elevage",
        src: "/pages/homePage/shiba-inu-vs-mameshiba-size-bottom.webp",
        alt: "Shiba Inu et Mameshiba côte à côte dans l'herbe",
        title: "Deux formats, un même type",
        summary: "Un Shiba Inu et un Mameshiba réunis pour visualiser leur différence de taille.",
        width: 1366,
        height: 1024,
    },
    {
        id: "archive-chiot-blanc-japon",
        src: "/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg",
        alt: "Chiot Mameshiba blanc dans un décor d'inspiration japonaise",
        title: "Un chiot blanc dans un décor japonais",
        summary: "L'une de nos anciennes images préférées, autrefois présentée sur la page d'accueil.",
        width: 1300,
        height: 1879,
    },
    {
        id: "archive-ushiro",
        src: "/pages/homePage/ushiro-paris.jpg",
        alt: "Ushiro, Mameshiba roux debout sur des rochers devant un pont japonais",
        title: "Ushiro",
        summary: "Un portrait en extérieur autrefois utilisé pour illustrer le Mameshiba sur la page d'accueil.",
        width: 1300,
        height: 1300,
    },
    {
        id: "archive-sakura",
        src: "/pages/le-mame-shiba/sakura-mame-shiba-kawaii-shiba-portrait-v2.webp",
        alt: "Sakura, Mameshiba blanche portant un harnais turquoise en extérieur",
        title: "Sakura",
        summary: "Un portrait en extérieur auparavant affiché sur la page consacrée au Mameshiba.",
        width: 900,
        height: 600,
    },
    {
        id: "archive-chiot-noir-feu",
        src: "/pages/le-mame-shiba/mame-shiba-puppy-blanc-white.jpeg",
        alt: "Chiot Mameshiba noir et feu dans un décor d'inspiration japonaise",
        title: "Un chiot noir et feu",
        summary: "Une ancienne photographie de présentation conservée pour son expression et son décor japonais.",
        width: 900,
        height: 590,
    },
    {
        id: "archive-yuzu",
        src: "/pages/le-mame-shiba/Yuzu-femelle-mame-shiba-couleur-feu.webp",
        alt: "Yuzu, femelle Mameshiba rousse debout dans la verdure",
        title: "Yuzu",
        summary: "Un portrait dans la verdure issu de l'ancienne sélection de la page Mameshiba.",
        width: 900,
        height: 601,
    },
]

function parseYouTubeFeed(xml: string, limit: number): YouTubeFeedItem[] {
    return Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g))
        .flatMap((entryMatch): YouTubeFeedItem[] => {
            const entry = entryMatch[1]
            const videoId = entry.match(/<yt:videoId>([A-Za-z0-9_-]{11})<\/yt:videoId>/)?.[1]
            const publishedAt = entry.match(/<published>([^<]+)<\/published>/)?.[1]

            return videoId ? [{ videoId, ...(publishedAt ? { publishedAt } : {}) }] : []
        })
        .slice(0, limit)
}

async function getYouTubeOEmbed(videoId: string) {
    const oEmbedUrl = new URL("https://www.youtube.com/oembed")
    oEmbedUrl.searchParams.set("url", `https://www.youtube.com/watch?v=${videoId}`)
    oEmbedUrl.searchParams.set("format", "json")

    const response = await fetch(oEmbedUrl, {
        next: { revalidate: GALLERY_REVALIDATE_SECONDS },
    })

    if (!response.ok) {
        return null
    }

    return (await response.json()) as YouTubeOEmbedResponse
}

export async function getLatestYouTubeVideos(limit = 3): Promise<SocialGalleryItem[]> {
    try {
        const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`
        const response = await fetch(feedUrl, {
            next: { revalidate: GALLERY_REVALIDATE_SECONDS },
        })

        if (!response.ok) {
            return []
        }

        const feedItems = parseYouTubeFeed(await response.text(), limit)

        return await Promise.all(
            feedItems.map(async ({ videoId, publishedAt }, index) => {
                const oEmbed = await getYouTubeOEmbed(videoId)
                const title = oEmbed?.title || `Vidéo YouTube Kawaii Shiba ${index + 1}`

                return {
                    id: videoId,
                    title,
                    href: `https://www.youtube.com/shorts/${videoId}`,
                    thumbnailSrc:
                        oEmbed?.thumbnail_url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                    thumbnailAlt: `Aperçu de la vidéo YouTube Kawaii Shiba : ${title}`,
                    summary:
                        "Une vidéo publiée par Kawaii Shiba pour découvrir les Mameshiba, leurs activités et la vie quotidienne de l'élevage.",
                    publishedAt,
                } satisfies SocialGalleryItem
            }),
        )
    } catch {
        return []
    }
}

export const youtubeChannelUrl = siteConfig.socialLinks.youtube
