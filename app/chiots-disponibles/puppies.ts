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
const defaultPuppyFormUrl = "https://forms.gle/myGmQAj5Kim6UnVx8";
const soboWaruFormUrl = defaultPuppyFormUrl;
const sakuraWaruFormUrl = defaultPuppyFormUrl;
const lowerPrice = 4000;
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
const sakuraBirthDate = "Né le 25 mai 2026";
const sakuraBirthDateIso = "2026-05-25";
const sakuraAvailableDate = "Disponible le 20 juillet 2026";
const sakuraAvailableDateIso = "2026-07-20";
const puppyImageVersion = "20260709";

function withPuppyImageVersion(src: string) {
    return `${src}?v=${puppyImageVersion}`;
}

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
        src: withPuppyImageVersion(`/pages/puppies/${folderName}/webp/${assetName}-desktop.webp`),
        thumbSrc: withPuppyImageVersion(`/pages/puppies/${folderName}/webp/${assetName}-mobile.webp`),
        sourceSrc: `/pages/puppies/${folderName}/jpeg/${assetName}-desktop.jpeg`,
        alt: `${name}, chiot Mameshiba de l'élevage Kawaii Shiba - photo ${index + 1}`
    };
}

function responsivePuppyImages(name: string, folderName: string, assetNames: string[], startIndex = 0): PuppyImage[] {
    return assetNames.map((assetName, index) => responsivePuppyImage(name, folderName, assetName, startIndex + index));
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
        updatedAt: "2026-06-20",
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
        pedigree: "Kennel Club of Japan",
        isReserved: true
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
            "shiba-mameshiba-kenshi-1.jpeg",
            "shiba-mameshiba-kenshi-2.jpeg",
            "shiba-mameshiba-kenshi-3.jpeg"
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
        updatedAt: "2026-06-20",
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
        pedigree: "Kennel Club of Japan",
        isReserved: true
    },
    {
        name: "KENSHIRO",
        coat: "Mameshiba",
        color: "Blanc",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimé à 3 à 4,5 kg adulte",
        parents: "Parents : KARASUKI & WARU",
        readyDate: karasukiAvailableDate,
        age: karasukiBirthDate,
        birthDate: karasukiBirthDateIso,
        availableFrom: karasukiAvailableDateIso,
        updatedAt: "2026-07-21",
        description:
            "Kenshiro est un mâle Mameshiba blanc issu de Karasuki et Waru. Son évolution est suivie à l'élevage afin de confirmer son gabarit, son tempérament et son type.",
        highlights: [
            "Mâle",
            "Blanc",
            "Portée Karasuki & Waru",
            "Lignée japonaise"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("KENSHIRO", "mameshiba-blanc-fauve-kenshiro", [
                "mameshiba-male-fauve-kenshiro-1",
                "mameshiba-male-fauve-kenshiro-2",
                "mameshiba-male-fauve-kenshiro-3",
                "mameshiba-male-fauve-kenshiro-4",
                "mameshiba-blanc-fauve-kenshiro-1",
                "mameshiba-blanc-fauve-kenshiro-2",
                "mameshiba-blanc-fauve-kenshiro-3",
                "mameshiba-blanc-fauve-kenshiro"
            ]),
            ...puppyImages("KENSHIRO", [
                "kenshiro-mameshiba-1-6semaine.jpeg",
                "kenshiro-mameshiba-2-6semaine.jpeg",
                "kenshiro-mameshiba-3-6semaine.jpeg"
            ], 8)
        ],
        thumbnailImage: responsivePuppyImage("KENSHIRO", "mameshiba-blanc-fauve-kenshiro", "mameshiba-male-fauve-kenshiro-1", 0),
        linkTo: karasukiWaruFormUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
        isReserved: true
    },
    {
        name: "MITSUKI",
        coat: "Mameshiba",
        color: "Feu",
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
            "Mitsuki est une femelle Mameshiba feu de la portée Karasuki et Waru. Elle possède un pédigrée Kennel Club of Japan et nous suivons son développement avec attention. Mitsuki est actuellement réservée.",
        highlights: [
            "Femelle",
            "Feu",
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
        color: "Blanc",
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
            "Airisu est une femelle Mameshiba blanche issue de Karasuki et Waru. Son profil sera précisé au fil des prochaines semaines avec de nouvelles photos, vidéos et observations. Airisu est actuellement réservée.",
        highlights: [
            "Femelle",
            "Blanc",
            "Réservée",
            "Portée Karasuki & Waru"
        ],
        health: defaultHealth,
        images: [
            responsivePuppyImage("Airisu", "mameshiba-blanche-airisu", "mameshiba-blanche-airisu-1", 0),
            {
                src: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-1-desktop.webp",
                thumbSrc: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-1-mobile.webp",
                sourceSrc: "/pages/puppies/mameshiba-blanc-fauve/jpeg/mameshiba-blanc-fauve-1-desktop.jpeg",
                alt: "Airisu, chiot Mameshiba de l'élevage Kawaii Shiba - photo 1"
            },
            {
                src: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-2-desktop.webp",
                thumbSrc: "/pages/puppies/mameshiba-blanc-fauve/webp/mameshiba-blanc-fauve-2-mobile.webp",
                sourceSrc: "/pages/puppies/mameshiba-blanc-fauve/jpeg/mameshiba-blanc-fauve-2-desktop.jpeg",
                alt: "Airisu, chiot Mameshiba de l'élevage Kawaii Shiba - photo 2"
            },
            ...puppyImages("Airisu", [
                "airisu-mameshiba-2-6semaine.jpeg",
                "airisu-mameshiba-3-6semaine.jpeg",
                "airisu-mameshiba-4-6semaine.jpeg"
            ])
        ],
        thumbnailImage: puppyImage("Airisu", "airisu-mameshiba-2-6semaine.jpeg", 0),
        linkTo: karasukiWaruFormUrl,
        isReserved: true,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "KAITO",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SAKURA & WARU",
        readyDate: sakuraAvailableDate,
        age: sakuraBirthDate,
        birthDate: sakuraBirthDateIso,
        availableFrom: sakuraAvailableDateIso,
        updatedAt: "2026-07-21",
        description:
            "Kaito est un mâle Mameshiba fauve issu de Sakura et Waru. Sa croissance est suivie à l'élevage afin de préciser son gabarit, son type et son tempérament.",
        highlights: [
            "Mâle",
            "Fauve",
            "Portée Sakura & Waru",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("KAITO", "mameshiba-fauve-kaito", [
                "mameshiba-male-fauve-kaito-1",
                "mameshiba-male-fauve-kaito-2",
                "mameshiba-male-fauve-kaito-3",
                "mameshiba-male-fauve-kaito-4",
                "mameshiba-fauve-kaito-1"
            ]),
            ...responsivePuppyImages("KAITO", "mameshiba-fauve-kaito", [
                "mameshiba-fauve-kaito-2",
                "mameshiba-fauve-kaito-3",
                "mameshiba-fauve-kaito-4",
                "mameshiba-fauve-kaito-5"
            ], 5)
        ],
        thumbnailImage: responsivePuppyImage("KAITO", "mameshiba-fauve-kaito", "mameshiba-male-fauve-kaito-1", 0),
        linkTo: sakuraWaruFormUrl,
        price: lowerPrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "SAKU",
        coat: "Mameshiba",
        color: "Blanche",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SAKURA & WARU",
        readyDate: sakuraAvailableDate,
        age: sakuraBirthDate,
        birthDate: sakuraBirthDateIso,
        availableFrom: sakuraAvailableDateIso,
        updatedAt: "2026-07-21",
        description:
            "Saku est une femelle Mameshiba blanche issue de Sakura et Waru. Son évolution sera suivie avec attention à l'élevage au fil des prochaines semaines.",
        highlights: [
            "Femelle",
            "Blanche",
            "Portée Sakura & Waru",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("SAKU", "mameshiba-blanche-saku", [
                "mameshiba-femelle-blanche-saku-1",
                "mameshiba-femelle-blanche-saku-2",
                "mameshiba-femelle-blanche-saku-3",
                "mameshiba-blanche-saku-1"
            ]),
            ...responsivePuppyImages("SAKU", "mameshiba-blanche-saku", [
                "mameshiba-blanche-saku-2",
                "mameshiba-blanche-saku-3",
                "mameshiba-blanche-saku-4"
            ], 4)
        ],
        thumbnailImage: responsivePuppyImage("SAKU", "mameshiba-blanche-saku", "mameshiba-femelle-blanche-saku-1", 0),
        linkTo: sakuraWaruFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
        isReserved: true
    },
    {
        name: "YUKI",
        coat: "Mameshiba",
        color: "Blanche",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SAKURA & WARU",
        readyDate: sakuraAvailableDate,
        age: sakuraBirthDate,
        birthDate: sakuraBirthDateIso,
        availableFrom: sakuraAvailableDateIso,
        updatedAt: "2026-07-21",
        description:
            "Yuki est une femelle Mameshiba blanche issue de Sakura et Waru. Son poids adulte est en cours d'estimation et son évolution sera suivie avec attention à l'élevage.",
        highlights: [
            "Femelle",
            "Blanche",
            "Portée Sakura & Waru",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("YUKI", "mameshiba-blanche-yuki", [
                "mameshiba-femelle-blanche-yuki-1",
                "mameshiba-femelle-blanche-yuki-2",
                "mameshiba-femelle-blanche-yuki-3",
                "mameshiba-femelle-blanche-yuki-4",
                "mameshiba-femelle-blanche-yuki-5"
            ]),
            ...responsivePuppyImages("YUKI", "mameshiba-blanche-yuki", [
                "mameshiba-blanche-yuki-1",
                "mameshiba-blanche-yuki-2",
                "mameshiba-blanche-yuki-3",
                "mameshiba-blanche-yuki-4",
                "mameshiba-blanche-yuki-5"
            ], 5)
        ],
        thumbnailImage: responsivePuppyImage("YUKI", "mameshiba-blanche-yuki", "mameshiba-femelle-blanche-yuki-1", 0),
        linkTo: sakuraWaruFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan"
    },
    {
        name: "NEKO",
        coat: "Mameshiba",
        color: "Blanche",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Estimée à 3-5 kg adulte",
        parents: "Parents : SAKURA & WARU",
        readyDate: sakuraAvailableDate,
        age: sakuraBirthDate,
        birthDate: sakuraBirthDateIso,
        availableFrom: sakuraAvailableDateIso,
        updatedAt: "2026-07-21",
        description:
            "Neko est une femelle Mameshiba blanche issue de SAKURA et WARU. Son poids adulte est estimé entre 3 et 5 kg et son évolution sera suivie avec attention à l'élevage.",
        highlights: [
            "Femelle",
            "Blanche",
            "Estimée à 3-5 kg adulte",
            "Portée SAKURA & WARU"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("NEKO", "mameshiba-blanche-neko", [
                "mameshiba-femelle-blanche-neko-1",
                "mameshiba-femelle-blanche-neko-2",
                "mameshiba-femelle-blanche-neko-3",
                "mameshiba-femelle-blanche-neko-4",
                "mameshiba-blanche-neko-1"
            ]),
            ...responsivePuppyImages("NEKO", "mameshiba-blanche-neko", [
                "mameshiba-blanche-neko-2",
                "mameshiba-blanche-neko-3",
                "mameshiba-blanche-neko-4",
                "mameshiba-blanche-neko-5"
            ], 5)
        ],
        thumbnailImage: responsivePuppyImage("NEKO", "mameshiba-blanche-neko", "mameshiba-femelle-blanche-neko-1", 0),
        linkTo: soboWaruFormUrl,
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
        updatedAt: "2026-07-21",
        description:
            "Maneki est une femelle Mameshiba fauve issue de Sobo et Waru. Son poids adulte est estimé autour de 3 kg et son évolution sera suivie avec attention à l'élevage.",
        highlights: [
            "Femelle",
            "Fauve",
            "Estimée à 3 kg adulte",
            "Portée Sobo & Waru"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("MANEKI", "mameshiba-fauve-maneki", [
                "mameshiba-femelle-fauve-maneki-1",
                "mameshiba-femelle-fauve-maneki-2",
                "mameshiba-fauve-maneki-1",
                "mameshiba-fauve-maneki-2"
            ]),
            ...responsivePuppyImages("MANEKI", "mameshiba-fauve-maneki", [
                "mameshiba-fauve-maneki-3",
                "mameshiba-fauve-maneki-4"
            ], 4)
        ],
        thumbnailImage: responsivePuppyImage("MANEKI", "mameshiba-fauve-maneki", "mameshiba-femelle-fauve-maneki-1", 0),
        linkTo: soboWaruFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
        isReserved: true
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
        updatedAt: "2026-07-21",
        description:
            "Yoshi est une femelle Mameshiba noir et feu issue de Sobo et Waru. Elle est présentée avec les chiots disponibles de la portée et son évolution sera suivie avec attention.",
        highlights: [
            "Femelle",
            "Noir et feu",
            "Portée Sobo & Waru",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: [
            ...responsivePuppyImages("YOSHI", "mameshiba-noir-feu-yoshi", [
                "mameshiba-femelle-noir-feu-yoshi-1",
                "mameshiba-femelle-noir-feu-yoshi-2",
                "mameshiba-noir-feu-yoshi-3",
                "mameshiba-noir-feu-yoshi-4",
                "mameshiba-noir-feu-yoshi-5"
            ]),
            ...responsivePuppyImages("YOSHI", "mameshiba-noir-feu-yoshi", [
                "mameshiba-noir-feu-yoshi-6",
                "mameshiba-noir-feu-yoshi-7"
            ], 5)
        ],
        thumbnailImage: responsivePuppyImage("YOSHI", "mameshiba-noir-feu-yoshi", "mameshiba-femelle-noir-feu-yoshi-1", 0),
        linkTo: soboWaruFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes,
        pedigree: "Kennel Club of Japan",
        isReserved: true
    },
    {
        name: "OKAMI",
        coat: "Mameshiba",
        color: "Blanc crème",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : HOSHI & NATSU",
        readyDate: "Date de disponibilité à confirmer",
        age: "Né le 5 juillet 2026",
        birthDate: "2026-07-05",
        updatedAt: "2026-08-17",
        description:
            "Okami est un mâle Mameshiba blanc crème issu de Hoshi et Natsu. Son évolution et son gabarit sont suivis avec attention à l'élevage.",
        highlights: [
            "Mâle",
            "Blanc crème",
            "Portée Hoshi & Natsu",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: responsivePuppyImages("OKAMI", "mameshiba-blanc-okami", [
            "mameshiba-blanc-okami-1",
            "mameshiba-blanc-okami-2",
            "mameshiba-blanc-okami-3",
            "mameshiba-blanc-okami-4"
        ]),
        thumbnailImage: responsivePuppyImage("OKAMI", "mameshiba-blanc-okami", "mameshiba-blanc-okami-1", 0),
        linkTo: defaultPuppyFormUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes
    },
    {
        name: "BOTAN",
        coat: "Mameshiba",
        color: "Blanc crème",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SATU & NATSU",
        readyDate: "Date de disponibilité à confirmer",
        age: "Née le 17 juin 2026",
        birthDate: "2026-06-17",
        updatedAt: "2026-08-17",
        description:
            "Botan est une femelle Mameshiba blanc crème issue de Satu et Natsu. Son évolution et son gabarit sont suivis avec attention à l'élevage.",
        highlights: [
            "Femelle",
            "Blanc crème",
            "Portée Satu & Natsu",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: responsivePuppyImages("BOTAN", "mameshiba-blanc-botan", [
            "mameshiba-blanc-botan-1",
            "mameshiba-blanc-botan-2",
            "mameshiba-blanc-botan-3",
            "mameshiba-blanc-botan-4",
            "mameshiba-blanc-botan-5"
        ]),
        thumbnailImage: responsivePuppyImage("BOTAN", "mameshiba-blanc-botan", "mameshiba-blanc-botan-1", 0),
        linkTo: defaultPuppyFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes
    },
    {
        name: "BUNJI",
        coat: "Mameshiba",
        color: "Blanc crème",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : SATU & NATSU",
        readyDate: "Date de disponibilité à confirmer",
        age: "Née le 17 juin 2026",
        birthDate: "2026-06-17",
        updatedAt: "2026-08-17",
        description:
            "Bunji est une femelle Mameshiba blanc crème issue de Satu et Natsu. Son évolution et son gabarit sont suivis avec attention à l'élevage.",
        highlights: [
            "Femelle",
            "Blanc crème",
            "Portée Satu & Natsu",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: responsivePuppyImages("BUNJI", "mameshiba-blanc-bunji", [
            "mameshiba-blanc-bunji-1",
            "mameshiba-blanc-bunji-2",
            "mameshiba-blanc-bunji-3",
            "mameshiba-blanc-bunji-4"
        ]),
        thumbnailImage: responsivePuppyImage("BUNJI", "mameshiba-blanc-bunji", "mameshiba-blanc-bunji-1", 0),
        linkTo: defaultPuppyFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes
    },
    {
        name: "KIN",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Femelle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KAWAII & NATSU",
        readyDate: "Date de disponibilité à confirmer",
        age: "Née le 11 juillet 2026",
        birthDate: "2026-07-11",
        updatedAt: "2026-08-17",
        description:
            "Kin est une femelle Mameshiba fauve issue de Kawaii et Natsu. Son évolution et son gabarit sont suivis avec attention à l'élevage.",
        highlights: [
            "Femelle",
            "Fauve",
            "Portée Kawaii & Natsu",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: responsivePuppyImages("KIN", "mameshiba-fauve-kin", [
            "mameshiba-fauve-kin-1",
            "mameshiba-fauve-kin-2",
            "mameshiba-fauve-kin-3",
            "mameshiba-fauve-kin-4",
            "mameshiba-fauve-kin-5"
        ]),
        thumbnailImage: responsivePuppyImage("KIN", "mameshiba-fauve-kin", "mameshiba-fauve-kin-1", 0),
        linkTo: defaultPuppyFormUrl,
        price: femalePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes
    },
    {
        name: "KO",
        coat: "Mameshiba",
        color: "Fauve",
        sexe: "Mâle",
        size: "Petit format Mameshiba",
        ruler: "Lignée japonaise",
        weight: "Poids adulte en cours d'estimation",
        parents: "Parents : KAWAII & NATSU",
        readyDate: "Date de disponibilité à confirmer",
        age: "Né le 11 juillet 2026",
        birthDate: "2026-07-11",
        updatedAt: "2026-08-17",
        description:
            "Ko est un mâle Mameshiba fauve issu de Kawaii et Natsu. Son évolution et son gabarit sont suivis avec attention à l'élevage.",
        highlights: [
            "Mâle",
            "Fauve",
            "Portée Kawaii & Natsu",
            "Disponible à la réservation"
        ],
        health: defaultHealth,
        images: responsivePuppyImages("KO", "mameshiba-fauve-ko", [
            "mameshiba-fauve-ko-1",
            "mameshiba-fauve-ko-2",
            "mameshiba-fauve-ko-3"
        ]),
        thumbnailImage: responsivePuppyImage("KO", "mameshiba-fauve-ko", "mameshiba-fauve-ko-1", 0),
        linkTo: defaultPuppyFormUrl,
        price: malePrice,
        priceCurrency: "EUR",
        priceIncludes: defaultPriceIncludes
    }
].sort((leftPuppy, rightPuppy) =>
    Number(Boolean(leftPuppy.isReserved)) - Number(Boolean(rightPuppy.isReserved))
);
