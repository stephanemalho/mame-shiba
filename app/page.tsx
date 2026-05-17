import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import { Heart, MapPin, PawPrint, Route } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { isBlogEnabled } from "@/lib/blog-visibility"
import { puppies } from "@/app/chiots-disponibles/puppies"
import { getPuppyUrl } from "@/app/chiots-disponibles/puppy-seo"
import { InternalLinksSection, type InternalLinkItem } from "@/components/InternalLinksSection"

import { shibaBenefits } from "@/components/content/home/shiba/shibaBenefits"

const homeInternalLinks: InternalLinkItem[] = [
  {
    href: "/mameshiba",
    title: "Comprendre le Mameshiba",
    description: "Origines japonaises, format miniature, tempérament et points clés avant d'envisager une adoption.",
  },
  {
    href: "/mame-shiba-prix",
    title: "Prix du Mameshiba",
    description: "Repères de tarif, rareté de la race, sélection des lignées et accompagnement inclus à l'élevage.",
  },
  {
    href: "/presentation-elevage",
    title: "Présentation de l'élevage",
    description: "Notre histoire, notre philosophie et la manière dont nous travaillons avec les lignées japonaises.",
  },
  {
    href: "/presentation-eleveuses",
    title: "Les éleveuses",
    description: "Découvrir Aurélie et Marine, leur parcours, leur approche et leur rôle auprès des chiots.",
  },
  {
    href: "/nos-chiens",
    title: "Nos chiens reproducteurs",
    description: "Relier les portées aux adultes de l'élevage, avec leurs origines, caractères et pédigrées.",
  },
  {
    href: "/chiots-disponibles",
    title: "Chiots disponibles",
    description: "Consulter les chiots Mameshiba actuellement présentés, leur statut et leurs informations d'adoption.",
  },
  {
    href: "/adoption/reussir-son-adoption",
    title: "Réussir son adoption",
    description: "Préparer l'arrivée du chiot, le trajet, les premières semaines et les bons repères à la maison.",
  },
  {
    href: "/bien-etre-animal",
    title: "Bien-être animal",
    description: "Voir les conditions de vie, la socialisation, les espaces et le suivi quotidien des chiens.",
  },
  {
    href: "/contact",
    title: "Contact adoption",
    description: "Présenter votre projet, poser vos questions et échanger avec l'élevage avant une réservation.",
  },
]

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: buildOpenGraph({
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.siteUrl,
    images: [
      {
        url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
        alt: siteConfig.ogImageAlt,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        type: "image/webp",
      },
    ],
  }),
  twitter: buildTwitter({
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    imageUrl: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  }),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
}

export default function HomePage() {
  // Schémas JSON-LD
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Accueil", url: "/" }])
  const faqSchema = generateFAQSchema(convertFAQsToSchema(faqHome))
  const lastMod = returnLastmod(siteConfig.pages.home)
  const availablePuppies = puppies.filter((puppy) => !puppy.isReserved && !puppy.isAdopted)
  const availablePuppiesCount = availablePuppies.length
  const availablePuppiesTitle = availablePuppiesCount > 0
    ? `${availablePuppiesCount} chiot${availablePuppiesCount > 1 ? "s" : ""} Mameshiba disponible${availablePuppiesCount > 1 ? "s" : ""} à l'adoption`
    : "Aucun chiot Mameshiba disponible à l'adoption actuellement"
  const founders = [
    {
      name: "Aurélie",
      image: "/assets/authors/aurélie-elevage-kawaii-shiba-et-chiot-mame.jpeg",
      description:
        "Aurélie est passionnée par les chiens de type primitif et la culture japonaise depuis toujours. Son coup de cœur pour le Mameshiba l'a conduite à mettre son expertise d'éducatrice comportementaliste au service d'un accompagnement doux et exigeant. Elle privilégie la socialisation, l'équilibre émotionnel et le lien humain-chien, avec une approche positive qui respecte l'identité sensible et indépendante du Mameshiba.",
      badges: [
        "diplômée éducateur canin comportementaliste",
        "Ancienne éducatrice comportementaliste",
        "8 ans d'expérience en élevage canin",
        "Certifiée en communication animale",
        "Spécialiste socialisation chiots",
      ],
    },
    {
      name: "Marine",
      image: "/pages/homePage/marine-de-kawaii-avec-un-chiot-mame.jpg",
      description:
        "Marine a rejoint l'aventure Mameshiba pour garantir un cadre stable et serein à chaque chien. Observatrice et méthodique, elle veille au bien-être quotidien, aux routines et à l'équilibre des groupes. Son exigence sur la propreté, la régularité des soins et l'organisation permet à chaque Mameshiba d'évoluer dans un environnement sain, apaisant et rassurant.",
      badges: [
        "4 ans d'expérience en élevage canin",
        "Protocoles d'hygiène rigoureux",
        "Suivi quotidien des chiots",
      ],
    },
  ]

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col">
        <section className="bg-background">
          <div
            className="overflow-hidden bg-[url('/pages/mameshiba-desktop.jpg')] bg-cover bg-center bg-no-repeat"
          >
            <div className="container relative mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <div className="mx-auto max-w-6xl space-y-5 md:space-y-6">
                <div className="mx-auto max-w-6xl rounded-xl border border-[#7a4a2f]/15 bg-[#fff8ef]/70 px-6 py-6 text-center text-[#57331f] shadow-[0_24px_90px_rgba(95,54,31,0.16)] md:rounded-4xl md:px-8">
                  <div className="mx-auto max-w-4xl">
                    <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-[#9a4a35]/20 bg-[#f7eadc]/85 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-[#7a4a2f]">
                      Kawaii Shiba
                    </div>
                    <h1 className="mt-4 text-3xl font-semibold tracking-[0.03em] text-[#57331f] md:text-4xl">
                      Élevage de Shiba Inu Mameshiba en France
                    </h1>
                    <p className="mt-3 text-base leading-relaxed text-[#6f4a34] md:text-lg">
                      Le Shiba miniature : la petite taille avec le côté mignon en plus.
                    </p>
                  </div>
                </div>

                <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[#57331f]/10 bg-white/70 shadow-[0_24px_90px_rgba(95,54,31,0.16)] backdrop-blur-sm md:rounded-4xl">
                  <div className="relative aspect-4/3 sm:aspect-16/11 md:aspect-16/8 lg:aspect-16/7">
                    <Image
                      src="/mame-shiba-in-a-sakura-tree.jpg"
                      alt="Mameshiba dans un décor inspiré du Japon"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1280px) 960px, (min-width: 1024px) 80vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 32px)"
                      quality={70}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#6b401f]/35 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                </div>

                <div className="mx-auto max-w-6xl rounded-xl border border-[#57331f]/10 bg-white/40 px-6 py-6 text-[#57331f] shadow-[0_28px_100px_rgba(62,35,21,0.28)] md:rounded-4xl md:px-8 md:py-8 lg:px-10">
                  <span className="text-sm font-medium uppercase tracking-[0.28em] text-[#57331f]">
                    Nous sommes parmi les premiers élevages de Mameshiba en France
                  </span>
                  <div className="mt-5 grid gap-6 lg:grid-cols-[1.5fr_0.75fr] lg:items-end">
                    <div className="space-y-4">
                      <p className="text-[#57331f] leading-relaxed md:text-lg">
                        Nos Mameshiba reproducteurs sont arrivés tout droit du Japon au printemps 2022, avec une exigence particulière envers leur éleveur d'origine pour garantir l'excellence des lignées importées
                      </p>
                    </div>
                    <div className="flex lg:justify-end">
                      <Link
                        href="/nos-chiens"
                        className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/50 px-6 py-3 text-sm font-semibold uppercase text-[#57331f] transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Découvrir nos reproducteurs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu centré */}
        {/* Présentation Mameshiba */}
        <section className="py-16 bg-muted/30 my-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center p-2">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Le Mameshiba
                </Badge>

                <h2 className="text-xl md:text-2xl font-bold">
                  Le Mameshiba, un Shiba Inu miniature d'origine japonaise
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  C'est un véritable Shiba Inu, mais de petite taille. Le mot
                  « mame » signifie haricot en japonais : une façon affectueuse de parler
                  d'un petit chien au charme intact. Rare en Europe, il s'inscrit dans une
                  sélection rigoureuse menée au Japon depuis des décennies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Le club de race japonais (KCJ) a officialisé le nom « Mameshiba » et
                  a débuté les enregistrements en 2008. Cette reconnaissance souligne
                  l'exigence autour de la généalogie et du type, afin de préserver un
                  Shiba Inu miniature fidèle à son héritage.
                </p>

                <div className="space-y-2">
                  <h3 className="font-semibold">Un petit primitif de noble origine</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Héritier direct du Shiba Inu, le Mameshiba conserve le tempérament
                    vif et l'allure noble des chiens primitifs japonais. Il est connu pour
                    sa curiosité, son intelligence et sa capacité à créer un lien profond,
                    tout en gardant une part d'indépendance.
                  </p>
                </div>

                <Link
                  href="/mameshiba"
                  className="inline-block rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Découvrir la race Mameshiba
                </Link>
              </div>

              <div className="relative w-full aspect-video md:h-200 h-125 md:aspect-4/5 overflow-hidden rounded-lg">
                <Image
                  src="/pages/homePage/white-puppy-meme-shiba-japan-bg.jpeg"
                  alt="Chiot Mameshiba blanc dans un décor japonais"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 50vw"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Pourquoi choisir un Mameshiba */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-xl md:text-2xl font-bold">
                Pourquoi choisir un Mameshiba ?
              </h2>

              <p className="text-muted-foreground max-w-3xl mx-auto">
                Petit chien au grand cœur, <strong>le Mameshiba</strong> est un
                Shiba Inu miniature réputé pour son intelligence vive, sa finesse de
                communication et son attachement discret mais profond à sa famille.
              </p>

              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {shibaBenefits.map((item) => (
                <Card key={item.title} className="overflow-hidden bg-muted/70 p-2">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                    />
                  </div>

                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {isBlogEnabled ? (
            <Link
              href="/blog/mame-shiba"
              className="flex my-12 m-auto w-fit rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              En savoir plus sur le Mameshiba
            </Link>
          ) : null}
        </section>
          <section className="py-12 my-8">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary/15 bg-card/80 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Un élevage accessible depuis toute la France</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      L'élevage Kawaii Shiba est situé en Bourgogne-Franche-Comté à la limite du JURA, dans la commune de Dommartin-lès-Cuiseaux (71), à 1h30 de Lyon, 2h de Genève et moins de 4h de Paris en voiture.
                    </p>
                    <div className="flex items-start gap-3 rounded-xl bg-primary/6 px-4 py-3 text-sm text-muted-foreground">
                      <Route className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>Nous sommes idéalement situés pour accueillir les familles de toute la France et des pays limitrophes qui souhaitent adopter un Mameshiba.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/15 bg-card/80 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Heart className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Une passion née des chiens primitifs et du Japon</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Notre passion absolue pour les chiens de type primitif, notre amour pour le voyage et notre adoration pour la culture japonaise nous ont menés tout droit jusqu'à un véritable coup de cœur : le Mameshiba.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Cette rencontre a façonné l'identité de Kawaii Shiba, avec une sélection portée par l'émotion, l'exigence et le respect du type japonais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Portées disponibles */}
        <section className="py-16 my-8">
          <div className="container mx-auto p-2">
            <div className="grid gap-8 rounded-2xl border border-primary/10 bg-muted/30 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-10">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <PawPrint className="mr-2 h-4 w-4" aria-hidden="true" />
                  Chiots à adopter
                </Badge>
                <h2 className="text-2xl font-bold md:text-3xl">
                  {availablePuppiesTitle}
                </h2>
              </div>
              <div className="space-y-5">
                {availablePuppies.length > 0 ? (
                  <div className="flex flex-wrap gap-4">
                    {availablePuppies.map((puppy) => {
                      const firstImage = puppy.images[0]

                      return (
                        <Link
                          key={puppy.name}
                          href={getPuppyUrl(puppy)}
                          className="group flex w-20 flex-col items-center gap-2 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          aria-label={`Voir la fiche de ${puppy.name}`}
                        >
                          <span className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/15 bg-background shadow-sm ring-4 ring-background transition-transform group-hover:scale-105">
                            {firstImage ? (
                              <Image
                                src={firstImage.src}
                                alt={firstImage.alt}
                                fill
                                className="object-cover"
                                sizes="64px"
                                quality={60}
                              />
                            ) : null}
                          </span>
                          <span className="max-w-full truncate text-xs font-semibold text-foreground group-hover:text-primary">
                            {puppy.name}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                ) : null}
                <p className="text-muted-foreground leading-relaxed">
                  La disponibilité des chiots est mise à jour depuis la liste officielle de l'élevage. Le nombre affiché exclut les chiots déjà réservés ou adoptés afin de donner une indication claire aux familles qui souhaitent adopter un Mameshiba.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sur la page dédiée, chaque fiche présente les photos, les parents, le statut de réservation, le pédigrée et les informations utiles pour préparer un projet d'adoption sérieux.
                </p>
                <Link
                  href="/chiots-disponibles"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Voir tous les shibas
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <InternalLinksSection
              title="Explorer l'élevage Kawaii Shiba"
              description="Retrouvez les pages essentielles pour comprendre le Mameshiba, découvrir notre élevage, consulter les chiots disponibles et préparer votre adoption."
              items={homeInternalLinks}
            />
          </div>
        </section>
        {/* éleveurs */}
        <section className="py-16 my-8 bg-muted/30">
          <div className="container mx-auto p-2">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-xl md:text-2xl font-bold">Les Éleveuses</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
                Derrière l'élevage se trouvent <strong>Aurélie et Marine</strong>, deux
                éleveuses passionnées par le bien-être animal et unies par un amour
                profond pour le Japon et le <strong>Mameshiba</strong>. Issues de parcours
                complémentaires dans l'éducation, le comportement et l'élevage canin,
                elles accordent une attention particulière à la socialisation, à
                l'équilibre émotionnel et au développement harmonieux de chaque chiot.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <Link
                  key={index}
                  href={`/presentation-eleveuses#${founder.name.toLowerCase()}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg"
                  aria-label={`Lire la présentation de ${founder.name}`}
                >
                  <article className="relative text-center bg-muted/70 rounded-lg overflow-hidden">
                    <div
                      className={`absolute top-4 right-4 items-end md:flex hidden flex-col gap-2 z-10`}
                    >
                      {founder.badges.map((badge, badgeIdx) => (
                        <Badge
                          key={badgeIdx}
                          variant="secondary"
                          className="text-[11px] shadow-sm p-2 backdrop-blur-sm bg-background/85"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="relative w-full aspect-square">
                      <Image
                        src={founder.image || "/home-founder-fallback.jpg"}
                        alt={`Photo d'${founder.name}, fondatrice de l'élevage`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={70}
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {founder.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="text-center space-y-4 my-12">
              <h3 className="text-xl md:text-2xl font-semibold">
                Vous souhaitez adopter un Mameshiba ?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Échangeons ensemble sur votre projet d'adoption et trouvons le Mameshiba qui correspond le mieux à votre mode de vie.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>
            <Link
              href="/contact"
              aria-label="Contacter les éleveuses pour un projet d'adoption de Mameshiba"
              className="flex my-12 m-auto w-fit rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contacter Aurélie et Marine
            </Link>
          </div>
        </section>
        <FAQSection
          title="FAQ Mameshiba en bref"
          description="Les points clés sur le Mameshiba en bref."
          items={faqHome}
        />
        <div className="container mx-auto text-right text-xs text-muted-foreground my-6">
          Dernière mise à jour : {lastMod}
        </div>
      </div>
    </>
  )
}
