export type PuppyImage = {
    src: string;
    thumbSrc?: string;
    sourceSrc?: string;
    alt: string;
};

export type Puppy = {
    name: string;
    coat: string;
    color: string;
    sexe: string;
    weight: string;
    parents: string;
    readyDate: string;
    age: string;
    birthDate?: string;
    availableFrom?: string;
    /**
     * Date ISO de dernière mise à jour de la fiche chiot.
     * À modifier quand les photos, le statut, le prix ou les informations importantes changent.
     * Exemple : "2026-05-16"
     */
    updatedAt?: string;
    size: string;
    ruler: string;
    description: string;
    health?: string[];
    highlights: string[];
    images: PuppyImage[];
    thumbnailImage?: PuppyImage;
    linkTo: string;
    isReserved?: boolean;
    isAdopted?: boolean;
    /**
     * Redirection SEO optionnelle pour les fiches de chiots adoptés.
     * Exemple : redirectTo: "/chiots-disponibles/akiro"
     * À utiliser seulement si une ancienne fiche reçoit du trafic et doit pousser
     * vers un autre chiot disponible ou vers "/chiots-disponibles".
     */
    redirectTo?: string;
    price?: number;
    priceLabel?: string;
    priceMin?: number;
    priceMax?: number;
    priceCurrency?: string;
    priceIncludes?: string;
    priceValidUntil?: string;
    pedigree?: string;
};

const yumiNatsuFormUrl = "https://forms.gle/KQuUAmWPiB5kJKqU7";
const karasukiWaruFormUrl = "https://forms.gle/NcuaYa2peT3A7ky18";
const malePrice = 4500;
const femalePrice = 5000;
const defaultHealth = [
    "Suivi vétérinaire en cours",
    "Socialisation progressive à l'élevage"
];
const defaultPriceIncludes = `Tarif Kawaii Shiba : ${malePrice.toLocaleString("fr-FR")} € pour un mâle, ${femalePrice.toLocaleString("fr-FR")} € pour une femelle.`;
const yumiBirthDate = "Né le 30 avril 2026";
const yumiBirthDateIso = "2026-04-30";
const yumiAvailableDate = "Disponible le 1 juillet 2026";
const yumiAvailableDateIso = "2026-07-01";
const karasukiBirthDate = "Né le 6 mai 2026";
const karasukiBirthDateIso = "2026-05-06";
const karasukiAvailableDate = "Disponible le 7 juillet 2026";
const karasukiAvailableDateIso = "2026-07-07";

function toWebpFile(file: string) {
    return file.replace(/\.(jpe?g|png)$/i, ".webp");
}

function puppyImage(name: string, file: string, index = 0): PuppyImage {
    const webpFile = toWebpFile(file);
    return {
        src: `/pages/puppies/${webpFile}`,
        thumbSrc: `/pages/puppies/${webpFile.replace(".webp", "-thumb.webp")}`,
        sourceSrc: `/pages/puppies/${file}`,
        alt: `${name}, chiot Mameshiba de l'élevage Kawaii Shiba - photo ${index + 1}`
    };
}

function puppyImages(name: string, files: string[]): PuppyImage[] {
    return files.map((file, index) => puppyImage(name, file, index));
}

export const puppies: Puppy[] = [
    {
        name: "HOTARU",
        coat: "Mameshiba",
        color: "Blanc",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimé à 4-5 kg adulte",
        parents: "Parents : YUMI & NATSU",
        readyDate: yumiAvailableDate,
        age: yumiBirthDate,
        birthDate: yumiBirthDateIso,
        availableFrom: yumiAvailableDateIso,
        updatedAt: "2026-05-22",
        description:
            "Hotaru est un mâle Mameshiba blanc issu de Yumi et Natsu. Il possède un pédigrée Kennel Club of Japan et descend d'une lignée avec petit-fils de KC Champion.",
        highlights: [
            "Mâle",
            "Blanc",
            "Pédigrée Kennel Club of Japan",
            "Petit-fils KC Champion"
        ],
        health: defaultHealth,
        images: puppyImages("HOTARU", [
            "shiba-inu-mameshiba-hotaru-blanc-1.webp",
            "shiba-inu-mameshiba-hotaru-blanc-2.webp",
            "shiba-inu-mameshiba-hotaru-blanc-3.webp",
            "shiba-inu-mameshiba-hotaru-blanc-4.webp"
        ]),
        thumbnailImage: puppyImage("HOTARU", "shiba-inu-mameshiba-hotaru-blanc-2.webp", 1),
        linkTo: yumiNatsuFormUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
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
        updatedAt: "2026-05-22",
        description:
            "Kenshi est un mâle Mameshiba fauve issu de Yumi et Natsu. Il dispose d'un pédigrée Kennel Club of Japan et descend d'une lignée avec petit-fils de KC Champion. Kenshi est actuellement réservé.",
        highlights: [
            "Mâle",
            "Fauve",
            "Réservé",
            "Pédigrée Kennel Club of Japan"
        ],
        health: defaultHealth,
        images: puppyImages("KENSHI", [
            "shiba-mameshiba-kenshi-1.webp",
            "shiba-mameshiba-kenshi-2.webp",
            "shiba-mameshiba-kenshi-3.webp"
        ]),
        thumbnailImage: puppyImage("KENSHI", "shiba-mameshiba-kenshi-3.webp", 2),
        linkTo: yumiNatsuFormUrl,
        isReserved: true,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "AKIRO",
        coat: "Mameshiba",
        color: "Blanc",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimé à 4-5 kg adulte",
        parents: "Parents : YUMI & NATSU",
        readyDate: yumiAvailableDate,
        age: yumiBirthDate,
        birthDate: yumiBirthDateIso,
        availableFrom: yumiAvailableDateIso,
        updatedAt: "2026-05-22",
        description:
            "Akiro est un mâle Mameshiba blanc issu de Yumi et Natsu. Son type lumineux, son expression douce et sa lignée japonaise sont suivis avec attention pendant sa croissance.",
        highlights: [
            "Mâle",
            "Blanc",
            "Lignée japonaise",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: puppyImages("AKIRO", [
            "shiba-inu-mameshiba-akiro-1.webp",
            "shiba-inu-mameshiba-akiro-2.webp",
            "shiba-inu-mameshiba-akiro-3.webp",
            "shiba-inu-mameshiba-akiro-4.webp"
        ]),
        thumbnailImage: puppyImage("AKIRO", "shiba-inu-mameshiba-akiro-3.webp", 2),
        linkTo: yumiNatsuFormUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "IKARI",
        coat: "Mameshiba",
        color: "Blanc",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimé à 3.5/4.5 kg adulte",
        parents: "Parents : YUMI & NATSU",
        readyDate: yumiAvailableDate,
        age: yumiBirthDate,
        birthDate: yumiBirthDateIso,
        availableFrom: yumiAvailableDateIso,
        updatedAt: "2026-05-22",
        description:
            "Ikari est un mâle Mameshiba blanc issu de Yumi et Natsu. Il est présenté avec les chiots disponibles de la portée et pourra être suivi en photos et vidéos sur demande.",
        highlights: [
            "Mâle",
            "Blanc",
            "Lignée japonaise",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: puppyImages("IKARI", [
            "shiba-inu-mameshiba-ikari-1.webp",
            "shiba-inu-mameshiba-ikari-2.webp",
            "shiba-inu-mameshiba-ikari-3.webp",
            "shiba-inu-mameshiba-ikari-4.webp"
        ]),
        thumbnailImage: puppyImage("IKARI", "shiba-inu-mameshiba-ikari-4.webp", 3),
        linkTo: yumiNatsuFormUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "KENSHIRO",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimé à 3 à 4,5 kg adulte",
        parents: "Parents : KARASUKI & WARU",
        readyDate: karasukiAvailableDate,
        age: karasukiBirthDate,
        birthDate: karasukiBirthDateIso,
        availableFrom: karasukiAvailableDateIso,
        updatedAt: "2026-05-22",
        description:
            "Kenshiro est un mâle Mameshiba fauve issu de Karasuki et Waru. Son évolution est suivie à l'élevage afin de confirmer son gabarit, son tempérament et son type.",
        highlights: [
            "Mâle",
            "Fauve",
            "Portée Karasuki & Waru",
            "Lignée japonaise"
        ],
        health: defaultHealth,
        images: puppyImages("KENSHIRO", ["shiba-inu-mameshiba-kenshiro-1.webp"]),
        thumbnailImage: puppyImage("KENSHIRO", "shiba-inu-mameshiba-kenshiro-1.webp"),
        linkTo: karasukiWaruFormUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "MITSUKI",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimée à 4-5 kg adulte",
        parents: "Parents : KARASUKI & WARU",
        readyDate: karasukiAvailableDate,
        age: karasukiBirthDate,
        birthDate: karasukiBirthDateIso,
        availableFrom: karasukiAvailableDateIso,
        updatedAt: "2026-05-22",
        description:
            "Mitsuki est une femelle Mameshiba fauve de la portée Karasuki et Waru. Elle possède un pédigrée Kennel Club of Japan et nous suivons son développement avec attention. Mitsuki est actuellement réservée.",
        highlights: [
            "Femelle",
            "Fauve",
            "Réservée",
            "Pédigrée KCJ"
        ],
        health: defaultHealth,
        images: puppyImages("MITSUKI", [
            "shiba-inu-mameshiba-mitsuki-1.webp",
            "shiba-inu-mameshiba-mitsuki-2.webp",
            "shiba-inu-mameshiba-mitsuki-3.webp"
        ]),
        thumbnailImage: puppyImage("MITSUKI", "shiba-inu-mameshiba-mitsuki-1.webp"),
        linkTo: karasukiWaruFormUrl,
        isReserved: true,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "Airisu",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimée à 4-5 kg adulte",
        parents: "Parents : KARASUKI & WARU",
        readyDate: karasukiAvailableDate,
        age: karasukiBirthDate,
        birthDate: karasukiBirthDateIso,
        availableFrom: karasukiAvailableDateIso,
        updatedAt: "2026-05-22",
        description:
            "Airisu est une femelle Mameshiba fauve issue de Karasuki et Waru. Son profil sera précisé au fil des prochaines semaines avec de nouvelles photos, vidéos et observations. Airisu est actuellement réservée.",
        highlights: [
            "Femelle",
            "Fauve",
            "Réservée",
            "Portée Karasuki & Waru"
        ],
        health: defaultHealth,
        images: puppyImages("Airisu", [
            "shiba-inu-mameshiba-airisu-1.webp",
            "shiba-inu-mameshiba-airisu-2.webp",
            "shiba-inu-mameshiba-airisu-3.webp",
            "shiba-inu-mameshiba-airisu-4.webp"
        ]),
        thumbnailImage: puppyImage("Airisu", "shiba-inu-mameshiba-airisu-3.webp", 2),
        linkTo: karasukiWaruFormUrl,
        isReserved: true,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    }
];
