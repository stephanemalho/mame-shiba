export type PuppyParentProfile = {
    role: "Mère" | "Père"
    name: string
    image?: string
    description: string
    href?: string
}

export const puppyParentProfilesByLabel: Record<string, PuppyParentProfile[]> = {
    "Parents : YUMI & NATSU": [
        {
            role: "Mère",
            name: "Yumi",
            image: "/pages/reproducteurs/yumi-mame-shiba-kawaii-shiba-portrait.webp",
            description: "Femelle Mameshiba red",
            href: "/nos-chiens#yumi",
        },
        {
            role: "Père",
            name: "Natsu",
            image: "/pages/reproducteurs/natsuko-dit-natsu-mame-shiba-kawaii-shiba-portrait.webp",
            description: "Mâle Mameshiba noir et feu",
            href: "/nos-chiens#natsuko",
        },
    ],
    "Parents : KARASUKI & WARU": [
        {
            role: "Mère",
            name: "Karasuki",
            image: "/pages/reproducteurs/Karasuki.webp",
            description: "Femelle Mameshiba confirmée KCJ",
            href: "/nos-chiens#karasuki",
        },
        {
            role: "Père",
            name: "Waru",
            image: "/pages/reproducteurs/waru-mame-shiba-kawaii-shiba-portrait.webp",
            description: "Mâle Mameshiba origine Japon",
            href: "/nos-chiens#waru",
        },
    ],
    "Parents : SOBO & WARU": [
        {
            role: "Mère",
            name: "Sobo",
            description: "Fiche parent bientôt disponible",
        },
        {
            role: "Père",
            name: "Waru",
            image: "/pages/reproducteurs/waru-mame-shiba-kawaii-shiba-portrait.webp",
            description: "Mâle Mameshiba origine Japon",
            href: "/nos-chiens#waru",
        },
    ],
}

export function getPuppyParentProfiles(parentLabel: string) {
    return puppyParentProfilesByLabel[parentLabel] ?? []
}
