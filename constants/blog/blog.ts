import { BlogContentType } from "./blogTypes";
import { akitaShibaMameComparisonPost } from "../posts/akitaShibaMameComparisonPost";
import { shibaApartmentPost } from "../posts/shibaApartmentPost";
import { shibaFirstDogPost } from "../posts/shibaFirstDogPost";
import { shibaOverviewPost } from "../posts/shibaOverviewPost";
import { shibaSociablePost } from "../posts/shibaSociablePost";

export const blog: BlogContentType = {
    hero: {
        title: "Articles utiles autour du Shiba Inu et du Mame Shiba",
        subtitle:
            "Comparatifs, comportement, vie quotidienne et repères d'adoption pour mieux comprendre les chiens japonais qui vous attirent.",
        cta: "Découvrir le Mame Shiba",
        linkTo: "/mameshiba",
        Icon: "paw",
        color: "orange"
    },
    articleLabels: {
        backToBlog: "Retour à la liste de blogs",
        contactAuthorTemplate: "Contacter {author}"
    },
    allCategory: {
        name: "Toutes les catégories",
        description:
            "Découvrez l'ensemble de nos articles autour du Shiba Inu, du Mame Shiba et de l'adoption responsable"
    },
    categories: [
        {
            id: "comparatifs-races",
            name: "Comparatifs de races",
            description:
                "Différences entre chiens japonais et repères avant adoption",
            slug: "comparatifs-races"
        },
        {
            id: "adoption-responsable",
            name: "Adoption responsable",
            description: "Questions à se poser avant de choisir son chien",
            slug: "adoption-responsable"
        },
        {
            id: "comportement",
            name: "Comportement",
            description: "Tempérament, sociabilité et relation au quotidien",
            slug: "comportement"
        },
        {
            id: "vie-quotidienne",
            name: "Vie quotidienne",
            description:
                "Appartement, rythme de vie et compatibilité avec le foyer",
            slug: "vie-quotidienne"
        }
    ],
    themes: [
        {
            slug: "caracteristique",
            label: "Caractère",
            description: "Tempérament, sociabilité et vie avec le chien"
        },
        {
            slug: "origine",
            label: "Origines & comparatifs",
            description:
                "Histoire, standards et différences entre chiens japonais"
        },
        {
            slug: "prix",
            label: "Adoption responsable",
            description: "Questions à se poser avant de choisir son chien"
        },
        {
            slug: "sante",
            label: "Vie quotidienne",
            description: "Appartement, environnement et équilibre au quotidien"
        }
    ],
    posts: [
        shibaOverviewPost,
        akitaShibaMameComparisonPost,
        shibaSociablePost,
        shibaApartmentPost,
        shibaFirstDogPost
    ],
    filterLabels: {
        all: "Tous les articles",
        search: "Rechercher",
        searchPlaceholder: "Rechercher un article...",
        noResults: "Aucun article ne correspond à votre recherche.",
        readMore: "Lire l'article",
        by: "Par",
        in: "dans"
    },
    seo: {
        title: "Blog Mame Shiba - Shiba Inu, comportement et adoption",
        description:
            "Découvrez nos articles dédiés au Shiba Inu et au Mame Shiba : comportement, comparatifs, vie quotidienne et repères d'adoption.",
        keywords: [
            "blog mame shiba",
            "blog shiba inu",
            "shiba inu caractère",
            "mame shiba informations",
            "adoption shiba inu",
            "comparatif chiens japonais",
            "questions avant adoption shiba"
        ]
    }
};
