export type PuppyImage = {
    src: string
    alt: string
}

export type Puppy = {
    name: string
    coat: string
    color: string
    sexe: string
    weight: string
    parents: string
    readyDate: string
    age: string
    size: string
    ruler: string
    description: string
    health?: string[]
    highlights: string[]
    images: PuppyImage[]
    linkTo: string
    isReserved?: boolean
    isAdopted?: boolean
    price?: number
    priceLabel?: string
    priceCurrency?: string
    priceIncludes?: string
    priceValidUntil?: string
    pedigree?: string
}

const formUrl = "https://forms.gle/myGmQAj5Kim6UnVx8"
const malePrice = 4500
const femalePrice = 5000
const defaultHealth = ["Suivi vétérinaire en cours", "Socialisation progressive à l'élevage"]
const defaultPriceIncludes =
    `Tarif Kawaii Shiba : ${malePrice.toLocaleString("fr-FR")} € pour un mâle, ${femalePrice.toLocaleString("fr-FR")} € pour une femelle.`
const priceToConfirmBySex = `${malePrice.toLocaleString("fr-FR")} € mâle / ${femalePrice.toLocaleString("fr-FR")} € femelle`

function puppyImages(name: string, files: string[]): PuppyImage[] {
    return files.map((file, index) => ({
        src: `/pages/puppies/${file}`,
        alt: `${name}, chiot Mameshiba de l'élevage Kawaii Shiba - photo ${index + 1}`,
    }))
}

export const puppies: Puppy[] = [
    {
        name: "HOTARU",
        coat: "Mameshiba",
        color: "Blanc",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : YUMI & NATSU",
        readyDate: "Disponible à la réservation",
        age: "Portée Yumi et Natsu",
        description:
            "Hotaru est un mâle Mameshiba blanc issu de Yumi et Natsu. Il possède un pédigrée Kennel Club of Japan et descend d'une lignée avec petit-fils de KC Champion.",
        highlights: ["Mâle", "Blanc", "Pédigrée Kennel Club of Japan", "Petit-fils KC Champion"],
        health: defaultHealth,
        images: puppyImages("HOTARU", [
            "mameshiba-blanc-hotaru-1.jpg",
            "mameshiba-blanc-hotaru-2.jpg",
            "mameshiba-blanc-hotaru-3.jpg",
            "mameshiba-blanc-hotaru-4.jpg",
        ]),
        linkTo: formUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "KENSHI",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : YUMI & NATSU",
        readyDate: "Réservé",
        age: "Portée Yumi et Natsu",
        description:
            "Kenshi est un mâle Mameshiba fauve issu de Yumi et Natsu. Il dispose d'un pédigrée Kennel Club of Japan et descend d'une lignée avec petit-fils de KC Champion. Kenshi est actuellement réservé.",
        highlights: ["Mâle", "Fauve", "Réservé", "Pédigrée Kennel Club of Japan"],
        health: defaultHealth,
        images: puppyImages("KENSHI", ["Kenshi-male-1.jpg"]),
        linkTo: formUrl,
        isReserved: true,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "AKIRO",
        coat: "Mameshiba",
        color: "Blanc",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : YUMI & NATSU",
        readyDate: "Disponible à la réservation",
        age: "Portée Yumi et Natsu",
        description:
            "Akiro est un mâle Mameshiba blanc issu de Yumi et Natsu. Son type lumineux, son expression douce et sa lignée japonaise sont suivis avec attention pendant sa croissance.",
        highlights: ["Mâle", "Blanc", "Lignée japonaise", "Disponible à la réservation"],
        health: defaultHealth,
        images: puppyImages("AKIRO", [
            "Akiro-mameshiba-blanc.jpg",
            "mameshiba-akiro-1.jpg",
            "mameshiba-akiro-blanc-2.jpg",
            "akiro-mameshiba-blanc-4.jpg",
        ]),
        linkTo: formUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "IKARI",
        coat: "Mameshiba",
        color: "Blanc",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : YUMI & NATSU",
        readyDate: "Disponible à la réservation",
        age: "Portée Yumi et Natsu",
        description:
            "Ikari est un mâle Mameshiba blanc issu de Yumi et Natsu. Il est présenté avec les chiots disponibles de la portée et pourra être suivi en photos et vidéos sur demande.",
        highlights: ["Mâle", "Blanc", "Lignée japonaise", "Disponible à la réservation"],
        health: defaultHealth,
        images: puppyImages("IKARI", ["ikari-male-mameshiba-3.jpg"]),
        linkTo: formUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "KENSHIRO",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Sexe à confirmer",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KARASUKI & WARU",
        readyDate: "Disponible à la réservation",
        age: "Portée Karasuki et Waru",
        description:
            "Kenshiro est un chiot Mameshiba issu de Karasuki et Waru. Son évolution est suivie à l'élevage afin de confirmer son gabarit, son tempérament et son type.",
        highlights: ["Portée Karasuki & Waru", "Lignée japonaise", "Suivi à l'élevage"],
        health: defaultHealth,
        images: puppyImages("KENSHIRO", [
            "kenshiro-mameshiba-1.jpg",
            "kenshiro-mameshiba-2.jpg",
            "kenshiro-mameshiba-3.jpg",
            "kenshiro-mameshiba-4.jpg",
        ]),
        linkTo: formUrl,
        priceLabel: priceToConfirmBySex,
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "MITSUKI",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Sexe à confirmer",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KARASUKI & WARU",
        readyDate: "Disponible à la réservation",
        age: "Portée Karasuki et Waru",
        description:
            "Mitsuki est un chiot Mameshiba de la portée Karasuki et Waru. Nous suivons son développement avec attention pour accompagner au mieux les familles intéressées.",
        highlights: ["Portée Karasuki & Waru", "Lignée japonaise", "Disponible à la réservation"],
        health: defaultHealth,
        images: puppyImages("MITSUKI", [
            "mitsuki-mameshiba-1.jpg",
            "mitsuki-mameshiba-2.jpg",
            "mitsuki-mameshiba-3.jpg",
        ]),
        linkTo: formUrl,
        priceLabel: priceToConfirmBySex,
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "ARISU",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Sexe à confirmer",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KARASUKI & WARU",
        readyDate: "Disponible à la réservation",
        age: "Portée Karasuki et Waru",
        description:
            "Arisu est un chiot Mameshiba issu de Karasuki et Waru. Son profil sera précisé au fil des prochaines semaines avec de nouvelles photos, vidéos et observations.",
        highlights: ["Portée Karasuki & Waru", "Lignée japonaise", "Disponible à la réservation"],
        health: defaultHealth,
        images: puppyImages("ARISU", [
            "airisu-mameshiba-1.jpg",
            "airisu-mameshiba-2.jpg",
            "airisu-mameshiba-3.jpg",
        ]),
        linkTo: formUrl,
        priceLabel: priceToConfirmBySex,
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
]
