export type DogImage = {
    src: string;
    alt: string;
};

export type AdultDog = {
    name: string;
    title: string;
    color: string;
    origin: string;
    lineage?: string;
    size: string;
    temperament: string;
    health: string[];
    images: DogImage[];
};

export const dogs: AdultDog[] = [
    {
        name: "Ichiro",
        title: "Shota Go dit ICHIRO - Mâle Mameshiba",
        color: "Rouge / Red",
        origin: "Importé du Japon",
        lineage:
            "Lignée de champion, petit-fils et fils de KC-Champion Kairyuu Go Prosperity Dogs",
        size: "30 cm au garrot • 6,1 kg",
        temperament:
            "Avenant, doux, sensible, câlin, curieux, loyal et extrêmement intelligent. Ichiro est un chien de grande prestance, élégant, avec un regard profond et une vraie présence dans la meute.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/ichiro-mame-shiba-kawaii-shiba-portrait.webp",
                alt: "Portrait d'Ichiro, mâle Mameshiba de l'élevage Kawaii Shiba"
            },
            {
                src: "/pages/reproducteurs/ISHIRO-mame-shiba-kawaii-shiba.webp",
                alt: "Ichiro, mâle Mameshiba de l'élevage Kawaii Shiba"
            }
        ]
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
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/yuzu-mame-shiba-kawaii-shiba-portrait.webp",
                alt: "Portrait de Yuzu, femelle Mameshiba de l'élevage Kawaii Shiba"
            },
            {
                src: "/pages/reproducteurs/Yuzu-femelle-mame-shiba-couleur-feu.webp",
                alt: "Yuzu, femelle Mameshiba couleur feu"
            }
        ]
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
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/sakura-mame-shiba-kawaii-shiba-portrait.webp",
                alt: "Portrait de Sakura, femelle Mameshiba crème de l'élevage Kawaii Shiba"
            },
            {
                src: "/pages/reproducteurs/SAKURA-white-mame-shiba-from-japan.webp",
                alt: "Sakura, femelle Mameshiba crème importée du Japon"
            }
        ]
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
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/kawaii-de-nuit-sur-un-rocher.webp",
                alt: "Kawaii de nuit sur un rocher"
            },
            {
                src: "/pages/reproducteurs/kawaii-sur-un-champ-de-fleurs-jaunes.webp",
                alt: "Kawaii dans un champ de fleurs jaunes"
            },
            {
                src: "/pages/reproducteurs/KAWAII-femelle-mame-shiba-couleur-feu.webp",
                alt: "Kawaii, femelle Mameshiba couleur feu"
            }
        ]
    },
    {
        name: "Hina",
        title: "HINA - Femelle Mameshiba",
        color: "Non précisé",
        origin: "Née chez Kawaii Mameshiba",
        size: "28 cm au garrot • 4,5 kg",
        temperament:
            "Femelle née à l’élevage, Hina représente notre sélection maison avec un petit format certifié et confirmé au Kennel Club of Japan.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/Hina.webp",
                alt: "Hina, femelle Mameshiba née chez Kawaii Mameshiba"
            }
        ]
    },
    {
        name: "Karasuki",
        title: "KARASUKI - Femelle Mameshiba",
        color: "Non précisé",
        origin: "Née chez Kawaii Shiba",
        size: "27 cm au garrot • 4 kg",
        temperament:
            "Karasuki est une femelle Mameshiba née chez Kawaii Shiba, au petit gabarit, certifiée et confirmée au Kennel Club of Japan.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/Karasuki.webp",
                alt: "Karasuki, femelle Mameshiba née chez Kawaii Shiba"
            }
        ]
    },
    {
        name: "Kimi",
        title: "KIMI - Femelle Mameshiba",
        color: "Non précisé",
        origin: "Née chez Kawaii Mameshiba",
        size: "25 cm au garrot • 3,5 kg",
        temperament:
            "Kimi est une petite femelle Mameshiba née chez Kawaii Mameshiba, certifiée et confirmée, dans un format très compact fidèle à la sélection de l’élevage.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques"
        ],
        images: [
            {
                src: "/pages/reproducteurs/Kimi.webp",
                alt: "Kimi, femelle Mameshiba née chez Kawaii Mameshiba"
            }
        ]
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
        ],
        images: [
            {
                src: "/pages/reproducteurs/natsuko-dit-natsu-mame-shiba-kawaii-shiba-portrait.webp",
                alt: "Portrait de Natsuko dit Natsu, mâle Mameshiba noir et feu"
            },
            {
                src: "/pages/reproducteurs/NATSUKO-male-mame-shiba-noir-et-feu.webp",
                alt: "Natsuko dit Natsu, mâle Mameshiba noir et feu"
            }
        ]
    },
    {
        name: "Yumi",
        title: "YUMI - Femelle Mameshiba",
        color: "Red",
        origin: "Née à l’élevage",
        lineage: "Excellente lignée 100% japonaise",
        size: "28 cm au garrot • 5,5 kg",
        temperament:
            "Fille d’Ichiro et Sakura, Yumi possède le physique de sa mère dans une jolie couleur fauve. Très sociable, à l’écoute, facile à éduquer et interactive, elle s’intègre facilement à la meute et reflète très bien notre sélection.",
        health: [
            "Rotules 0/0",
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques",
        ],
        images: [
            {
                src: "/pages/reproducteurs/yumi-mame-shiba-kawaii-shiba-portrait.webp",
                alt: "Portrait de Yumi, femelle Mameshiba de l'élevage Kawaii Shiba"
            },
            {
                src: "/pages/reproducteurs/YUMI-femelle-mame-shiba-couleur-feu.webp",
                alt: "Yumi, femelle Mameshiba couleur feu"
            }
        ]
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
            "Test ADN Embark 100% Shiba Inu",
            "Indemne de maladies génétiques",
        ],
        images: [
            {
                src: "/pages/reproducteurs/waru-mame-shiba-kawaii-shiba-portrait.webp",
                alt: "Portrait de Waru, mâle Mameshiba de l'élevage Kawaii Shiba"
            },
            {
                src: "/pages/reproducteurs/WARU-male-mame-shiba-couleur-feu.webp",
                alt: "Waru, mâle Mameshiba couleur feu"
            }
        ]
    }
];
