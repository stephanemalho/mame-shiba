import mameSize from "@/public/pages/homePage/SHIBA-INU-ET-MAMESHIBA-300x261.jpeg";
import nihonMame from "@/public/pages/homePage/mame-shiba-puppy-blanc-white.jpeg";
import redMame from "@/public/pages/homePage/ushiro-paris.jpg";
import primitifDog from "@/public/pages/homePage/mame-shiba-decor-champs-de-lavande.jpg";
import shibaExpressive from "@/public/pages/homePage/mame-shiba-courant-dans-herbe.jpg";
import shibaPolyvalent from "@/public/pages/homePage/mame-shiba-for-modern-life.jpeg";
import { StaticImageData } from "next/image";

type BenefitCard = {
    title: string;
    text: string;
    image: StaticImageData;
    alt: string;
};

export const shibaBenefits: BenefitCard[] = [
    {
        title: "Une taille miniature, un vrai Shiba Inu",
        text: "Le Mameshiba est un Shiba Inu miniature. Le standard du KCJ situe sa taille autour de 25 à 32 cm au garrot pour les femelles et 25 à 34 cm pour les mâles, tout en conservant l’allure et l’équilibre du Shiba Inu.",
        image: mameSize,
        alt: "Un mameshiba se tenant debout sur l'herbe"
    },
    {
        title: "Un nom japonais plein de sens",
        text: "« Mame » signifie haricot et « Shiba » signifie chien. Au Japon, cette expression évoque un petit chien adorable, à la fois compact et plein de caractère.",
        image: nihonMame,
        alt: "Deux chiots mameshiba blottis l'un contre l'autre"
    },
    {
        title: "Une race encore rare en Europe",
        text: "Le Mameshiba reste extrêmement rare en Europe. Sa reconnaissance par le KCJ en 2008 souligne la volonté de préserver un type miniature fidèle au Shiba Inu d’origine.",
        image: shibaPolyvalent,
        alt: "Mameshiba mouillé après une baignade, regard vif"
    },
    {
        title: "Un primitif de noble origine",
        text: "Issu du Shiba Inu, chien primitif japonais, le Mameshiba conserve une allure noble et agile. Le Shiba était autrefois utilisé pour la chasse aux petits gibiers, et demeure un trésor national au Japon.",
        image: primitifDog,
        alt: "Mameshiba regardant l'objectif avec beaucoup de caractère"
    },
    {
        title: "Un caractère vif et équilibré",
        text: "Curieux, intelligent et fidèle, le Mameshiba aime la stimulation mentale et les balades régulières. Chaque chien garde sa personnalité : certains sont très proches, d’autres plus indépendants.",
        image: shibaExpressive,
        alt: "Mameshiba attentif dans l'herbe, regard expressif"
    },
    {
        title: "Un petit compagnon de la vie moderne",
        text: "Sa petite taille et son intelligence en font un excellent chien de compagnie, capable de s’adapter à la vie en appartement à condition d’être bien socialisé dès le plus jeune âge.",
        image: redMame,
        alt: "Mameshiba actif en extérieur sur l'herbe verte"
    }
];
