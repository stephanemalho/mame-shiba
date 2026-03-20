export type AdultDog = {
    name: string
    title: string
    color: string
    origin: string
    lineage?: string
    size: string
    temperament: string
    health: string[]
    images: string[]
}

export const dogs: AdultDog[] = [
    {
        name: "Ichiro",
        title: "Shota Go dit ICHIRO - Mâle Mameshiba",
        color: "Rouge / Red",
        origin: "Importé du Japon",
        lineage: "Lignée de champion, petit-fils et fils de KC-Champion Kairyuu Go Prosperity Dogs",
        size: "30 cm au garrot • 6,1 kg",
        temperament:
            "Avenant, doux, sensible, câlin, curieux, loyal et extrêmement intelligent. Ichiro est un chien de grande prestance, élégant, avec un regard profond et une vraie présence dans la meute.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark",
            "Confirmé - Kennel Club of Japan",
        ],
        images: [
            "/pages/homePage/ISHIRO-mame-shiba-kawaii-shiba.jpeg",
            "/pages/homePage/mame-shiba-good-caractere.jpg",
        ],
    },
    {
        name: "Yuzu",
        title: "YUZU - Femelle Mameshiba",
        color: "Rouge / Red",
        origin: "Importée du Japon",
        lineage: "Excellente lignée japonaise",
        size: "29,5 cm au garrot • 4,8 kg",
        temperament:
            "Curieuse, intelligente, malicieuse, joyeuse, active et pleine de vie. Yuzu est sélective dans ses affinités, mais lorsqu’on gagne son respect et son cœur, elle devient absolument adorable et très proche de l’humain.",
        health: [
            "Rotules 0/0",
            "Confirmée - Kennel Club of Japan",
        ],
        images: [
            "/pages/homePage/little-mame-shiba-red-white.jpeg",
            "/pages/homePage/mame-shiba-for-modern-life.jpeg",
        ],
    },
    {
        name: "Sakura",
        title: "SAKURA - Femelle Mameshiba",
        color: "Crème",
        origin: "Importée du Japon",
        lineage: "Excellente lignée japonaise",
        size: "28,5 cm au garrot • 4,7 kg",
        temperament:
            "Douce, élégante, sage, intelligente et loyale. Sakura est une femelle très observatrice, sociable et avenante, qui aime les câlins et l’attention. C’est une excellente maman et une véritable force tranquille.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark",
            "Confirmée - Kennel Club of Japan",
        ],
        images: [
            "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg",
            "/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg",
        ],
    },
    {
        name: "Kawaii",
        title: "KAWAII - Femelle Mameshiba",
        color: "Red",
        origin: "Née en Europe, parents importés du Japon",
        lineage: "Excellente lignée 100% japonaise",
        size: "25 cm au garrot • 3,8 kg",
        temperament:
            "Posée, calme, zen et réfléchie. Kawaii réclame juste ce qu’il faut de contact, communique beaucoup par le regard et sait parfaitement trouver sa place au sein de la meute. Discrète, bien codée et très adaptable, elle possède aussi un excellent rappel.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark",
            "Confirmée - Kennel Club of Japan",
            "Pedigree DWKC",
        ],
        images: [
            "/moshi.webp",
            "/assets/authors/aurelie-moshi.webp",
        ],
    },
    {
        name: "Natsuko",
        title: "NATSUKO dit NATSU - Mâle Mameshiba",
        color: "Noire et feu",
        origin: "Né en Europe, parents importés du Japon",
        lineage: "Excellente lignée 100% japonaise, lignée CH KCJ Kairyuu Go",
        size: "29 cm au garrot • 5,6 kg",
        temperament:
            "Très câlin, sociable, extraverti, joyeux et intéressé par l’humain. Natsu aime les balades et se montre à l’aise dans des environnements variés. C’est un petit ourson zen, stable et sans impulsivité.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques",
            "Pedigree - Kennel Club of Japan",
        ],
        images: [
            "/pages/homePage/mame-shiba-for-modern-life.jpeg",
            "/pages/homePage/mame-shiba-decor-champs-de-lavande.jpg",
        ],
    },
    {
        name: "Tori",
        title: "KAWAII MAMESHIBA TORI - Femelle Mameshiba",
        color: "Red",
        origin: "Née à l’élevage",
        lineage: "Excellente lignée 100% japonaise",
        size: "25 cm au garrot • 4,5 kg",
        temperament:
            "Fille d’Ichiro et Kawaii, Tori a le physique de son père et le comportement de sa mère. Très douce, sociable, vive et enjouée, elle s’intègre facilement à la meute et garde une vraie âme de chiot éternel.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark",
            "Indemne de maladies génétiques",
            "Pedigree - Kennel Club of Japan",
            "Pedigree - DWKC",
        ],
        images: [
            "/pages/homePage/mame-shiba-decor-champs-de-lavande.jpg",
            "/pages/homePage/little-mame-shiba-red-white.jpeg",
        ],
    },
    {
        name: "Yu-Xi",
        title: "YU-XI dite KIMI - Femelle Mameshiba",
        color: "Red",
        origin: "Origine Japon, née à l’élevage",
        lineage: "Fille de Kawaii et Ichiro, excellente lignée 100% japonaise",
        size: "25 cm au garrot • 3 kg",
        temperament:
            "Kimi est un vrai pot de colle ambulant. Proche de l’humain, sociable et paisible, elle aime la compagnie des personnes comme celle des autres chiens, tout en appréciant beaucoup sa tranquillité. Petite par la taille, grande par la personnalité.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark",
            "Indemne de maladies génétiques",
            "Confirmée - Kennel Club of Japan",
        ],
        images: [
            "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg",
            "/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg",
        ],
    },
    {
        name: "Yumi",
        title: "KAWAII MAMESHIBA YUMI - Femelle Mameshiba",
        color: "Red",
        origin: "Née à l’élevage",
        lineage: "Excellente lignée 100% japonaise",
        size: "28 cm au garrot • 5,5 kg",
        temperament:
            "Fille d’Ichiro et Sakura, Yumi possède le physique de sa mère dans une jolie couleur fauve. Très sociable, à l’écoute, facile à éduquer et interactive, elle s’intègre facilement à la meute et reflète très bien notre sélection.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark",
            "Indemne de maladies génétiques",
            "Pedigree - Kennel Club of Japan",
        ],
        images: [
            "/mame-shiba-in-a-sakura-tree.jpg",
            "/pages/homePage/mame-shiba-puppy-blanc-white.jpeg",
        ],
    },
    {
        name: "Waru",
        title: "HAIYU WARU - Mâle Mameshiba",
        color: "Red",
        origin: "Origine Japon",
        lineage: "Excellente lignée 100% japonaise",
        size: "27 cm au garrot • 4,5 kg",
        temperament:
            "Waru a marqué l’histoire du Mameshiba au Japon avant d’arriver chez nous. Solitaire, observateur, sensible et doux, il préfère souvent profiter de sa tranquillité en retrait du groupe.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark",
            "Indemne de maladies génétiques",
            "Confirmé - Kennel Club of Japan",
        ],
        images: [
            "/pages/homePage/mame-shiba-good-caractere.jpg",
            "/pages/homePage/mame-shiba-for-modern-life.jpeg",
        ],
    },
]
