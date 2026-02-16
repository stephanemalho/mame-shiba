import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/author/:path*",
                destination: "/",
                permanent: true
            },
            {
                source: "/actualite",
                destination: "/blog/mame-shiba",
                permanent: true
            },
            {
                source: "/pourquoi-le-pomsky",
                destination: "/le-mame-shiba",
                permanent: true
            },
            {
                source: "/quelle-est-la-taille-dun-pomsky",
                destination: "/le-mame-shiba",
                permanent: true
            },
            {
                source: "/category/pomsky",
                destination: "/le-mame-shiba",
                permanent: true
            },
            {
                source: "/category/galerie-photos-videos",
                destination: "/chiots-disponibles",
                permanent: true
            },
            {
                source: "/category/blog/page/:path*",
                destination: "/blog/mame-shiba",
                permanent: true
            },
            {
                source: "/videos-tiktok-royalpomsky",
                destination: "/chiots-disponibles",
                permanent: true
            },
            {
                source: "/galerie",
                destination: "/chiots-disponibles",
                permanent: true
            },
            {
                source: "/blog",
                destination: "/blog/mame-shiba",
                permanent: true
            },
            {
                source: "/le-husky-siberian",
                destination: "/blog/husky/caracteristique/le-husky-siberian",
                permanent: true
            },
            {
                source: "/le-spitz-nain",
                destination: "/blog/spitz/caracteristique/le-spitz-nain",
                permanent: true
            },
            {
                source: "/category/blog",
                destination: "/blog/mame-shiba",
                permanent: true
            },
            {
                source: "/pomsky-prix-guide-complet-pour-comprendre-le-cout-dadoption-et-dentretien",
                destination:
                    "/blog/mame-shiba/prix/pomsky-prix-guide-complet-pour-comprendre-le-cout-dadoption-et-dentretien",
                permanent: true
            },
            {
                source: "/quelle-est-lhistoire-du-pomsky-les-origines-du-chien-pomsky",
                destination:
                    "/blog/mame-shiba/origine/quelle-est-lhistoire-du-pomsky-les-origines-du-chien-pomsky",
                permanent: true
            },
            {
                source: "/le-pomsky-blanc-une-race-de-chien-au-look-irresistible",
                destination:
                    "/blog/mame-shiba/apparence/le-pomsky-blanc-une-race-de-chien-au-look-irresistible",
                permanent: true
            },
            {
                source: "/pomsky-f1-f2-f3-cest-quoi",
                destination:
                    "/blog/mame-shiba/genetique/pomsky-f1-f2-f3-cest-quoi",
                permanent: true
            },
            {
                source: "/a-quoi-sert-test-adn-chien",
                destination:
                    "/blog/mame-shiba/genetique/a-quoi-sert-test-adn-chien",
                permanent: true
            },
            {
                source: "/tout-savoir-sur-le-pomsky-toy-race-caracteristiques-et-conseils",
                destination:
                    "/blog/mame-shiba/caracteristique/tout-savoir-sur-le-pomsky-toy-race-caracteristiques-et-conseils",
                permanent: true
            },
            {
                source: "/decouvrez-le-pomsky-nain-un-adorable-compagnon-a-quatre-pattes",
                destination:
                    "/blog/mame-shiba/caracteristique/decouvrez-le-pomsky-nain-un-adorable-compagnon-a-quatre-pattes",
                permanent: true
            },
            {
                source: "/duree-de-vie-du-pomsky-guide-complet-pour-prolonger-la-sante-de-votre-chien",
                destination:
                    "/blog/mame-shiba/sante/duree-de-vie-du-pomsky-guide-complet-pour-prolonger-la-sante-de-votre-chien",
                permanent: true
            },
            {
                source: "/le-pomsky-adulte-tout-ce-que-vous-devez-savoir-sur-cette-race-unique",
                destination:
                    "/blog/mame-shiba/caracteristique/le-pomsky-adulte-tout-ce-que-vous-devez-savoir-sur-cette-race-unique",
                permanent: true
            },
            {
                source: "/pomsky-noir-aux-yeux-bleus-decouvrez-ce-magnifique-chien-au-regard-envoutant",
                destination:
                    "/blog/mame-shiba/apparence/pomsky-noir-aux-yeux-bleus-decouvrez-ce-magnifique-chien-au-regard-envoutant",
                permanent: true
            },
            {
                source: "/pomsky-beige-aux-yeux-bleus-decouverte-de-cette-incroyable-variete-de-chien",
                destination:
                    "/blog/mame-shiba/apparence/pomsky-beige-aux-yeux-bleus-decouverte-de-cette-incroyable-variete-de-chien",
                permanent: true
            },
            {
                source: "/pomsky-blanc-et-yeux-bleus-immersion-dans-lunivers-de-cette-race-captivante",
                destination:
                    "/blog/mame-shiba/apparence/pomsky-blanc-et-yeux-bleus-immersion-dans-lunivers-de-cette-race-captivante",
                permanent: true
            },
            {
                source: "/le-chien-pomsky-une-race-hybride-qui-fait-fondre-les-coeurs",
                destination:
                    "/blog/mame-shiba/caracteristique/le-chien-pomsky-une-race-hybride-qui-fait-fondre-les-coeurs",
                permanent: true
            },
            {
                source: "/le-pomsky-renard-decouvrez-ce-chien-au-look-de-petit-renard",
                destination:
                    "/blog/mame-shiba/apparence/le-pomsky-renard-decouvrez-ce-chien-au-look-de-petit-renard",
                permanent: true
            },
            {
                source: "/page-facebook",
                destination: "/",
                permanent: true
            },
            {
                source: "/pomsky-a-vendre-comment-choisir-le-bon-eleveur-et-le-chiot-parfait-pour-vous",
                destination:
                    "/blog/mame-shiba/prix/pomsky-a-vendre-comment-choisir-le-bon-eleveur-et-le-chiot-parfait-pour-vous",
                permanent: true
            },
            {
                source: "/2020",
                destination: "/",
                permanent: true
            },
            {
                source: "/2020/:path*",
                destination: "/",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
