export type ResponsiveBreakpoint = "mobile" | "tablet" | "desktop";
export type ResponsiveFormat = "webp" | "jpeg";

export type ResponsiveImageSources = Record<ResponsiveBreakpoint, string>;

export type ResponsiveImageAsset = Record<ResponsiveFormat, ResponsiveImageSources> & {
    metadata: {
        src: string;
        width: number;
        height: number;
        type: "image/jpeg";
    };
};

function variants(basePath: string, fileBase: string, extension: ResponsiveFormat): ResponsiveImageSources {
    return {
        mobile: `${basePath}/${extension}/${fileBase}-mobile.${extension}`,
        tablet: `${basePath}/${extension}/${fileBase}-tablet.${extension}`,
        desktop: `${basePath}/${extension}/${fileBase}-desktop.${extension}`,
    };
}

function responsiveImageAsset(basePath: string, fileBase: string, width: number, height: number): ResponsiveImageAsset {
    return {
        webp: variants(basePath, fileBase, "webp"),
        jpeg: variants(basePath, fileBase, "jpeg"),
        metadata: {
            src: `${basePath}/jpeg/${fileBase}-desktop.jpeg`,
            width,
            height,
            type: "image/jpeg",
        },
    };
}

export const responsiveImages = {
    chiotMameshibaBlancAssis: responsiveImageAsset(
        "/pages/homePage/chiot-mameshiba-blanc-assis",
        "chiot-mameshiba-blanc-assis",
        1200,
        800
    ),
    cloeEleveuseAvecMameshibaEtShiba: responsiveImageAsset(
        "/pages/homePage/cloe-eleveuse-avec-mameshiba-et-shiba",
        "cloe-eleveuse-avec-mameshiba-et-shiba",
        1200,
        1799
    ),
    shibaVsMameshiba: responsiveImageAsset(
        "/pages/homePage/shiba-vs-mameshiba",
        "shiba-vs-mameshiba",
        1200,
        800
    ),
    chiotMameshibaNoirEtBlancMale: responsiveImageAsset(
        "/pages/le-mame-shiba/chiot-mameshiba-noir-et-blanc-male",
        "chiot-mameshiba-noir-et-blanc-male",
        1200,
        800
    ),
    mameshibaBlancTailleStandard: responsiveImageAsset(
        "/pages/le-mame-shiba/mameshiba-blanc-taille-standard",
        "mameshiba-blanc-taille-standard",
        1200,
        800
    ),
    mameshibaMarronJouantAvecDesSceaux: responsiveImageAsset(
        "/pages/adoption/mameshiba-marron-jouant-avec-des-sceaux",
        "mameshiba-marron-jouant-avec-des-sceaux",
        1200,
        800
    ),
    petitChiotMameJoueur: responsiveImageAsset(
        "/pages/conditions-de-vie/petit-chiot-mame-joueur",
        "petit-chiot-mame-joueur",
        1200,
        800
    ),
    mameshibaChiotBlancKawaiiShiba: responsiveImageAsset(
        "/pages/conditions-de-vie/mameshba-chiot-blanc-de-kawai-shiba",
        "mameshba-chiot-blanc-de-kawai-shiba",
        1200,
        800
    ),
    mameshibaFauveAvecBebeDauphinPeluche: responsiveImageAsset(
        "/pages/conditions-de-vie/mameshiba-fauve-avec-bebe-dauphin-peluche",
        "mameshiba-fauve-avec-bebe-dauphin-peluche",
        1200,
        800
    ),
} as const;

export function isResponsiveImageAsset(image: unknown): image is ResponsiveImageAsset {
    if (typeof image !== "object" || image === null) {
        return false;
    }

    const candidate = image as Partial<ResponsiveImageAsset>;

    return (
        typeof candidate.webp?.mobile === "string" &&
        typeof candidate.webp?.tablet === "string" &&
        typeof candidate.webp?.desktop === "string" &&
        typeof candidate.jpeg?.mobile === "string" &&
        typeof candidate.jpeg?.tablet === "string" &&
        typeof candidate.jpeg?.desktop === "string"
    );
}
