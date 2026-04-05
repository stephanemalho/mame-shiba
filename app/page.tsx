import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq"
import { faqHome } from "@/lib/faq-data"
import Link from "next/link"
import type { Metadata } from "next"
import { buildOpenGraph, buildTwitter, pageMetadata, returnLastmod, siteConfig } from "@/lib/seo-config"
import { generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema-generators"
import { convertFAQsToSchema } from "@/lib/faq-utils"
import { isBlogEnabled } from "@/lib/blog-visibility"

import { pageContent } from "@/lib/page-content"
import { shibaBenefits } from "@/components/content/home/shiba/shibaBenefits"

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
        <section className="bg-accent-foreground">
          <div className="overflow-hidden bg-linear-to-b from-[#6a1820] via-[#3a1016] to-[#1a090d]">
            <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
              <div className="mx-auto max-w-6xl space-y-5 md:space-y-6">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#3a1117] shadow-[0_35px_120px_rgba(0,0,0,0.35)] md:rounded-4xl">
                  <Image
                    src="/pages/homePage/bandeau-presentation-kawaii-mameshiba.jpg"
                    alt="Bandeau de présentation Kawaii Shiba Mameshiba"
                    width={1260}
                    height={400}
                    priority
                    fetchPriority="high"
                    loading="eager"
                    sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 32px)"
                    className="block h-auto w-full"
                  />
                </div>

                <div className="mx-auto max-w-6xl rounded-xl border border-white/12 bg-[#47131b]/72 px-6 py-6 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-sm md:rounded-4xl md:px-8">
                  <div className="mx-auto max-w-4xl">
                    <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-white/80">
                      Kawaii Shiba
                    </div>
                    <h1 className="mt-4 text-3xl font-semibold tracking-[0.03em] text-white md:text-4xl">
                      Bienvenue dans notre élevage Kawaii - Shiba
                      MAMESHIBA
                    </h1>
                  </div>
                </div>

                <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-white/12 bg-[#3a1117]/55 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-sm md:rounded-4xl">
                  <div className="relative aspect-4/3 sm:aspect-16/11 md:aspect-16/8 lg:aspect-16/7">
                    <Image
                      src="/mame-shiba-in-a-sakura-tree.jpg"
                      alt="Mameshiba dans un décor inspiré du Japon"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1280px) 960px, (min-width: 1024px) 80vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 32px)"
                      quality={70}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2a0d12]/35 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                </div>

                <div className="mx-auto max-w-6xl rounded-xl border border-white/12 bg-[#2b0d13]/82 px-6 py-6 text-white shadow-[0_35px_120px_rgba(0,0,0,0.4)] backdrop-blur-md md:rounded-4xl md:px-8 md:py-8 lg:px-10">
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/72">
                    {pageContent.home.h1Subtitle}
                  </p>
                  <div className="mt-5 grid gap-6 lg:grid-cols-[1.5fr_0.75fr] lg:items-end">
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-white/88 md:text-lg">
                        {pageContent.home.description}
                      </p>
                      <p className="text-base leading-relaxed text-white/82 md:text-lg">
                        {pageContent.home.descriptionSecondary}
                      </p>
                      <p className="text-base leading-relaxed text-white/82 md:text-lg">
                        {pageContent.home.descriptionTertiary}
                      </p>
                    </div>
                    <div className="flex lg:justify-end">
                      <Link
                        href="/chiots-disponibles"
                        className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:rounded-full"
                      >
                        Voir les chiots Mameshiba disponibles
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
                  alt="Chiot Mameshiba blanc dans un décoe japonais"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 50vw"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portées disponibles */}
        {/* <section className="py-16 my-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold">Portées actuellement disponibles</h2>

            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Portée du 12 octobre 2025</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Île-de-France</span>
              </div>
            </div>

            <Link href="/chiots-disponibles" className="inline-block rounded-md bg-primary p-4 font-semibold text-primary-foreground hover:bg-primary/85">
              Voir les chiots disponibles
            </Link>
          </div>


        </div>
      </section> */}
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
