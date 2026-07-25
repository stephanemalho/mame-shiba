import { siteConfig } from "@/lib/seo-config"

export const GALLERY_REVALIDATE_SECONDS = 21600

const YOUTUBE_CHANNEL_ID = "UCyAE-Bii633Lj1sfuFUGDpA"

export type SocialGalleryItem = {
    id: string
    title: string
    href: string
    embedUrl: string
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

const historicalPuppyGalleryItems: GalleryImageItem[] = [
    {
        id: "archive-airisu-1",
        src: "/pages/puppies/shiba-inu-mameshiba-airisu-1.webp",
        alt: "Airisu, très jeune chiot Mameshiba blanc, allongée sur un tissu rose à motifs japonais",
        title: "Airisu, les premiers jours",
        summary: "Une photographie d'archive d'Airisu pendant ses toutes premières semaines à l'élevage.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-airisu-2",
        src: "/pages/puppies/shiba-inu-mameshiba-airisu-2.webp",
        alt: "Gros plan d'Airisu, chiot Mameshiba blanc reposant dans son nid rose",
        title: "Airisu au creux du nid",
        summary: "Un portrait tout en douceur conservé à son URL historique.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-airisu-3",
        src: "/pages/puppies/shiba-inu-mameshiba-airisu-3.webp",
        alt: "Airisu endormie dans une couverture rose décorée de motifs japonais",
        title: "Le sommeil d'Airisu",
        summary: "Un instant calme des premières semaines d'Airisu à l'élevage.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-airisu-4",
        src: "/pages/puppies/shiba-inu-mameshiba-airisu-4.webp",
        alt: "Airisu, très jeune Mameshiba blanc, tenue délicatement au-dessus de son nid rose",
        title: "Airisu en portrait",
        summary: "Une ancienne photographie verticale qui témoigne de ses premiers jours.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-akiro-1",
        src: "/pages/puppies/shiba-inu-mameshiba-akiro-1.webp",
        alt: "Akiro, très jeune chiot Mameshiba blanc, éveillé sur une couverture à motifs japonais",
        title: "Le regard d'Akiro",
        summary: "Akiro commence à observer son environnement pendant ses premières semaines.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-akiro-2",
        src: "/pages/puppies/shiba-inu-mameshiba-akiro-2.webp",
        alt: "Akiro, chiot Mameshiba blanc, se reposant sur une couverture grise à motifs",
        title: "Akiro au réveil",
        summary: "Un portrait vertical d'Akiro conservé parmi les souvenirs de l'élevage.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-akiro-3",
        src: "/pages/puppies/shiba-inu-mameshiba-akiro-3.webp",
        alt: "Akiro, très jeune Mameshiba blanc, allongé au calme dans son nid",
        title: "Akiro tout en douceur",
        summary: "Une image des premiers instants d'Akiro dans un environnement calme et familier.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-akiro-4",
        src: "/pages/puppies/shiba-inu-mameshiba-akiro-4.webp",
        alt: "Portrait d'Akiro, chiot Mameshiba blanc, installé sur une couverture japonaise",
        title: "Le portrait d'Akiro",
        summary: "Cette photographie d'archive complète les souvenirs de ses premières semaines.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-hotaru-1",
        src: "/pages/puppies/shiba-inu-mameshiba-hotaru-blanc-1.webp",
        alt: "Hotaru, très jeune chiot Mameshiba blanc, allongé sur une couverture à motifs",
        title: "Hotaru au calme",
        summary: "Un souvenir des premiers jours de Hotaru au sein de l'élevage.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-hotaru-2",
        src: "/pages/puppies/shiba-inu-mameshiba-hotaru-blanc-2.webp",
        alt: "Hotaru, chiot Mameshiba blanc, endormi dans son nid à motifs japonais",
        title: "Le repos de Hotaru",
        summary: "Une photographie verticale de Hotaru profondément endormi.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-hotaru-3",
        src: "/pages/puppies/shiba-inu-mameshiba-hotaru-blanc-3.webp",
        alt: "Gros plan de Hotaru, jeune Mameshiba blanc, reposant sur une couverture",
        title: "Hotaru en douceur",
        summary: "Un gros plan naturel conservé à l'URL utilisée lors de sa première publication.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-hotaru-4",
        src: "/pages/puppies/shiba-inu-mameshiba-hotaru-blanc-4.webp",
        alt: "Hotaru, très jeune chiot Mameshiba blanc, observant son environnement",
        title: "Les premiers regards de Hotaru",
        summary: "Un instant d'éveil photographié pendant les premières semaines de Hotaru.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-ikari-1",
        src: "/pages/puppies/shiba-inu-mameshiba-ikari-1.webp",
        alt: "Ikari, très jeune chiot Mameshiba blanc, assis sur une couverture à motifs",
        title: "Ikari dans son nid",
        summary: "Une photographie d'archive des premiers jours d'Ikari à l'élevage.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-ikari-2",
        src: "/pages/puppies/shiba-inu-mameshiba-ikari-2.webp",
        alt: "Ikari, chiot Mameshiba blanc, entouré de coussins sur un plaid gris",
        title: "Ikari bien entouré",
        summary: "Un moment de repos d'Ikari dans un environnement doux et rassurant.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-ikari-3",
        src: "/pages/puppies/shiba-inu-mameshiba-ikari-3.webp",
        alt: "Ikari, très jeune Mameshiba blanc, installé entre deux coussins",
        title: "Ikari confortablement installé",
        summary: "Une ancienne image verticale qui raconte ses toutes premières semaines.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-ikari-4",
        src: "/pages/puppies/shiba-inu-mameshiba-ikari-4.webp",
        alt: "Ikari, chiot Mameshiba blanc, endormi sur un plaid gris",
        title: "Le sommeil d'Ikari",
        summary: "Un portrait paisible d'Ikari conservé dans les archives de l'élevage.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-kenshiro-1",
        src: "/pages/puppies/shiba-inu-mameshiba-kenshiro-1.webp",
        alt: "Kenshiro, très jeune chiot Mameshiba blanc, reposant dans un nid rose",
        title: "Kenshiro, les premiers jours",
        summary: "Un souvenir de Kenshiro pendant ses premières semaines à l'élevage.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-mitsuki-1",
        src: "/pages/puppies/shiba-inu-mameshiba-mitsuki-1.webp",
        alt: "Mitsuki, très jeune chiot Mameshiba roux, allongé dans une couverture rose",
        title: "Mitsuki au creux du nid",
        summary: "Une photographie d'archive de Mitsuki dans son environnement des premiers jours.",
        width: 1500,
        height: 1000,
    },
    {
        id: "archive-mitsuki-2",
        src: "/pages/puppies/shiba-inu-mameshiba-mitsuki-2.webp",
        alt: "Mitsuki, chiot Mameshiba roux, tenue délicatement pour son portrait",
        title: "Le premier portrait de Mitsuki",
        summary: "Un portrait vertical qui permet de retrouver les expressions de Mitsuki tout petit.",
        width: 1500,
        height: 2250,
    },
    {
        id: "archive-mitsuki-3",
        src: "/pages/puppies/shiba-inu-mameshiba-mitsuki-3.webp",
        alt: "Gros plan de Mitsuki, très jeune Mameshiba roux, tenue dans une main",
        title: "Mitsuki tout petit",
        summary: "Un dernier souvenir des premières semaines de Mitsuki, conservé à son URL historique.",
        width: 1500,
        height: 2250,
    },
]

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
    ...historicalPuppyGalleryItems,
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
                    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
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
