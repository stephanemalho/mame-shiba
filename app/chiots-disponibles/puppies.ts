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
    birthDate?: string
    availableFrom?: string
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
    priceMin?: number
    priceMax?: number
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
const yumiBirthDate = "Né le 30 avril 2026"
const yumiBirthDateIso = "2026-04-30"
const yumiAvailableDate = "Disponible le 1 juillet 2026"
const yumiAvailableDateIso = "2026-07-01"
const karasukiBirthDate = "Né le 6 mai 2026"
const karasukiBirthDateIso = "2026-05-06"
const karasukiAvailableDate = "Disponible le 7 juillet 2026"
const karasukiAvailableDateIso = "2026-07-07"

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
        readyDate: yumiAvailableDate,
        age: yumiBirthDate,
        birthDate: yumiBirthDateIso,
        availableFrom: yumiAvailableDateIso,
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
        readyDate: yumiAvailableDate,
        age: yumiBirthDate,
        birthDate: yumiBirthDateIso,
        availableFrom: yumiAvailableDateIso,
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
        readyDate: yumiAvailableDate,
        age: yumiBirthDate,
        birthDate: yumiBirthDateIso,
        availableFrom: yumiAvailableDateIso,
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
        readyDate: yumiAvailableDate,
        age: yumiBirthDate,
        birthDate: yumiBirthDateIso,
        availableFrom: yumiAvailableDateIso,
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
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KARASUKI & WARU",
        readyDate: karasukiAvailableDate,
        age: karasukiBirthDate,
        birthDate: karasukiBirthDateIso,
        availableFrom: karasukiAvailableDateIso,
        description:
            "Kenshiro est un mâle Mameshiba fauve issu de Karasuki et Waru. Son évolution est suivie à l'élevage afin de confirmer son gabarit, son tempérament et son type.",
        highlights: ["Mâle", "Fauve", "Portée Karasuki & Waru", "Lignée japonaise"],
        health: defaultHealth,
        images: puppyImages("KENSHIRO", [
            "kenshiro-mameshiba-1.jpg",
            "kenshiro-mameshiba-2.jpg",
            "kenshiro-mameshiba-3.jpg",
            "kenshiro-mameshiba-4.jpg",
        ]),
        linkTo: formUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "MITSUKI",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KARASUKI & WARU",
        readyDate: karasukiAvailableDate,
        age: karasukiBirthDate,
        birthDate: karasukiBirthDateIso,
        availableFrom: karasukiAvailableDateIso,
        description:
            "Mitsuki est une femelle Mameshiba fauve de la portée Karasuki et Waru. Elle possède un pédigrée Kennel Club of Japan et nous suivons son développement avec attention pour accompagner au mieux les familles intéressées.",
        highlights: ["Femelle", "Fauve", "Pédigrée KCJ", "Portée Karasuki & Waru"],
        health: defaultHealth,
        images: puppyImages("MITSUKI", [
            "mitsuki-mameshiba-1.jpg",
            "mitsuki-mameshiba-2.jpg",
            "mitsuki-mameshiba-3.jpg",
        ]),
        linkTo: formUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
    {
        name: "ARISU",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KARASUKI & WARU",
        readyDate: karasukiAvailableDate,
        age: karasukiBirthDate,
        birthDate: karasukiBirthDateIso,
        availableFrom: karasukiAvailableDateIso,
        description:
            "Arisu est une femelle Mameshiba fauve issue de Karasuki et Waru. Son profil sera précisé au fil des prochaines semaines avec de nouvelles photos, vidéos et observations.",
        highlights: ["Femelle", "Fauve", "Portée Karasuki & Waru", "Disponible à la réservation"],
        health: defaultHealth,
        images: puppyImages("ARISU", [
            "airisu-mameshiba-1.jpg",
            "airisu-mameshiba-2.jpg",
            "airisu-mameshiba-3.jpg",
        ]),
        linkTo: formUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
    },
]
