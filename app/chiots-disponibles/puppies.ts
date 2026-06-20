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
const soboWaruFormUrl = karasukiWaruFormUrl;
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
const soboBirthDate = "Né le 23 mai 2026";
const soboBirthDateIso = "2026-05-23";
const soboAvailableDate = "Disponible le 24 juillet 2026";
const soboAvailableDateIso = "2026-07-24";

function withoutImageExtension(file: string) {
    return file.replace(/\.(jpe?g|png|webp)$/i, "");
}

function puppyImage(name: string, sourceFile: string, index = 0): PuppyImage {
    const fileBase = withoutImageExtension(sourceFile);
    const webpFile = `${fileBase}.webp`;
    const thumbFile = `${fileBase}-thumb.webp`;

    return {
        src: `/pages/puppies/${webpFile}`,
        thumbSrc: `/pages/puppies/${thumbFile}`,
        sourceSrc: `/pages/puppies/${sourceFile}`,
        alt: `${name}, chiot Mameshiba de l'élevage Kawaii Shiba - photo ${index + 1}`
    };
}

function responsivePuppyImage(name: string, folderName: string, assetName: string, index = 0): PuppyImage {
    return {
        src: `/pages/puppies/${folderName}/webp/${assetName}-desktop.webp`,
        thumbSrc: `/pages/puppies/${folderName}/webp/${assetName}-mobile.webp`,
        sourceSrc: `/pages/puppies/${folderName}/webp/${assetName}-desktop.webp`,
        alt: `${name}, chiot Mameshiba de l'élevage Kawaii Shiba - photo ${index + 1}`
    };
}

function responsivePuppyImages(name: string, folderName: string, assetNames: string[]): PuppyImage[] {
    return assetNames.map((assetName, index) => responsivePuppyImage(name, folderName, assetName, index));
}

function puppyImages(name: string, files: string[], startIndex = 0): PuppyImage[] {
    return files.map((file, index) => puppyImage(name, file, startIndex + index));
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
        updatedAt: "2026-05-29",
        description:
            "Hotaru est un mâle Mameshiba blanc issu de Yumi et Natsu. Il possède un pédigrée Kennel Club of Japan et descend d'une lignée avec petit-fils de KC Champion.",
        highlights: [
            "Mâle",
            "Blanc",
            "Pédigrée Kennel Club of Japan",
            "Petit-fils KC Champion"
        ],
        health: defaultHealth,
        images: [
            responsivePuppyImage("HOTARU", "mameshiba-hotaru-blanc-fauve", "mameshiba-hotaru-blanc-fauve", 0),
            ...puppyImages("HOTARU", [
                "shiba-inu-mameshiba-hotaru-blanc-2-6semaine.jpeg",
                "shiba-inu-mameshiba-hotaru-blanc-3-6semaine.jpeg",
            ], 1)
        ],
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
        updatedAt: "2026-05-29",
        description:
            "Akiro est un mâle Mameshiba blanc issu de Yumi et Natsu. Son type lumineux, son expression douce et sa lignée japonaise sont suivis avec attention pendant sa croissance.",
        highlights: [
            "Mâle",
            "Blanc",
            "Lignée japonaise",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: [
            responsivePuppyImage("AKIRO", "mameshiba-blanc-fauve-akiro", "mameshiba-blanc-fauve-akiro", 0),
            ...puppyImages("AKIRO", [
                "akiro-mameshiba-blanc-1-6semaine.jpeg",
                "akiro-mameshiba-blanc-2-6semaine.jpeg",
                "akiro-mameshiba-blanc-3-6semaine.jpeg",
                "akiro-mameshiba-blanc-4-6semaine.jpeg",
            ], 1)
        ],
        linkTo: yumiNatsuFormUrl,
        price: malePrice,
        isReserved: true,
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
        updatedAt: "2026-05-29",
        description:
            "Ikari est un mâle Mameshiba blanc issu de Yumi et Natsu. Il est présenté avec les chiots disponibles de la portée et pourra être suivi en photos et vidéos sur demande.",
        highlights: [
            "Mâle",
            "Blanc",
            "Lignée japonaise",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("IKARI", "mameshiba-male-blanc-fauve-ikari", [
                "mameshiba-male-blanc-fauve-ikari-1",
                "mameshiba-male-blanc-fauve-ikari-2",
                "mameshiba-male-blanc-fauve-ikari-3"
            ]),
            ...puppyImages("IKARI", [
                "ikari-male-mameshiba-1-6semaine.jpeg",
                "ikari-male-mameshiba-2-6semaine.jpeg",
            ], 3)
        ],
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
        updatedAt: "2026-05-29",
        description:
            "Kenshiro est un mâle Mameshiba fauve issu de Karasuki et Waru. Son évolution est suivie à l'élevage afin de confirmer son gabarit, son tempérament et son type.",
        highlights: [
            "Mâle",
            "Fauve",
            "Portée Karasuki & Waru",
            "Lignée japonaise"
        ],
        health: defaultHealth,
        images: [
            responsivePuppyImage("KENSHIRO", "mameshiba-blanc-fauve-kenshiro", "mameshiba-blanc-fauve-kenshiro", 0),
            ...puppyImages("KENSHIRO", [
                "kenshiro-mameshiba-1-6semaine.jpeg",
                "kenshiro-mameshiba-2-6semaine.jpeg",
                "kenshiro-mameshiba-3-6semaine.jpeg"
            ], 1)
        ],
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
        updatedAt: "2026-05-29",
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
            "shiba-inu-mameshiba-mitsuki-1-6semaine.jpeg",
            "shiba-inu-mameshiba-mitsuki-2-6semaine.jpeg",
            "shiba-inu-mameshiba-mitsuki-3-6semaine.jpeg"
        ]),
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
        updatedAt: "2026-05-29",
        description:
            "Airisu est une femelle Mameshiba fauve issue de Karasuki et Waru. Son profil sera précisé au fil des prochaines semaines avec de nouvelles photos, vidéos et observations. Airisu est actuellement réservée.",
        highlights: [
            "Femelle",
            "Fauve",
            "Réservée",
            "Portée Karasuki & Waru"
        ],
        health: defaultHealth,
        images: [
            {
                src: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-1-desktop.webp",
                thumbSrc: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-1-mobile.webp",
                sourceSrc: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-1-desktop.webp",
                alt: "Airisu, chiot Mameshiba de l'élevage Kawaii Shiba - photo 1"
            },
            {
                src: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-2-desktop.webp",
                thumbSrc: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-2-mobile.webp",
                sourceSrc: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-2-desktop.webp",
                alt: "Airisu, chiot Mameshiba de l'élevage Kawaii Shiba - photo 2"
            },
            ...puppyImages("Airisu", [
                "airisu-mameshiba-2-6semaine.jpeg",
                "airisu-mameshiba-3-6semaine.jpeg",
                "airisu-mameshiba-4-6semaine.jpeg"
            ])
        ],
        linkTo: karasukiWaruFormUrl,
        isReserved: true,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "MANEKI",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimée à 3 kg adulte",
        parents: "Parents : SOBO & WARU",
        readyDate: soboAvailableDate,
        age: soboBirthDate,
        birthDate: soboBirthDateIso,
        availableFrom: soboAvailableDateIso,
        updatedAt: "2026-06-20",
        description:
            "Maneki est une femelle Mameshiba fauve issue de Sobo et Waru. Son poids adulte est estimé autour de 3 kg et son évolution sera suivie avec attention à l'élevage.",
        highlights: [
            "Femelle",
            "Fauve",
            "Estimée à 3 kg adulte",
            "Portée Sobo & Waru"
        ],
        health: defaultHealth,
        images: responsivePuppyImages("MANEKI", "mameshiba-fauve-maneki", [
            "mameshiba-fauve-maneki-1",
            "mameshiba-fauve-maneki-2",
            "mameshiba-fauve-maneki-3",
            "mameshiba-fauve-maneki-4"
        ]),
        linkTo: soboWaruFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "YOSHI",
        coat: "Mameshiba",
        color: "Noir et feu",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimée à 4-5 kg adulte",
        parents: "Parents : SOBO & WARU",
        readyDate: soboAvailableDate,
        age: soboBirthDate,
        birthDate: soboBirthDateIso,
        availableFrom: soboAvailableDateIso,
        updatedAt: "2026-06-20",
        description:
            "Yoshi est une femelle Mameshiba noir et feu issue de Sobo et Waru. Elle est présentée avec les chiots disponibles de la portée et son évolution sera suivie avec attention.",
        highlights: [
            "Femelle",
            "Noir et feu",
            "Portée Sobo & Waru",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: responsivePuppyImages("YOSHI", "mameshiba-noir-feu-yoshi", [
            "mameshiba-noir-feu-yoshi-3",
            "mameshiba-noir-feu-yoshi-4",
            "mameshiba-noir-feu-yoshi-5",
            "mameshiba-noir-feu-yoshi-6",
            "mameshiba-noir-feu-yoshi-7"
        ]),
        linkTo: soboWaruFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    }
];
