import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const BLOCKED_PREFIXES = [
  "/wp-admin",
  "/wp-content",
  "/wp-includes",
]

const BLOCKED_PATHS = [
  "/wp-login.php",
  "/xmlrpc.php",
  "/add",
  "/product",
  "/products",
  "/shop",
]

const SAFE_TOP_LEVEL_SEGMENTS = new Set([
  "",
  "adoption",
  "bien-etre-animal",
  "blog",
  "chiots-disponibles",
  "conditions-generales",
  "contact",
  "mame-shiba-prix",
  "mameshiba",
  "mentions-legales",
  "nos-chiens",
  "politique-de-confidentialite",
  "presentation-elevage",
  "presentation-eleveuses",
])

function isNumeric(value: string) {
  return /^\d+$/.test(value)
}

function looksLikeInjectedCatalogPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length !== 2) {
    return false
  }

  const [slug, id] = segments

  if (!isNumeric(id)) {
    return false
  }

  if (SAFE_TOP_LEVEL_SEGMENTS.has(slug)) {
    return false
  }

  const hyphenCount = (slug.match(/-/g) ?? []).length
  const looksLikeProductSlug =
    slug.length >= 20 &&
    hyphenCount >= 3 &&
    /[A-Z]/.test(slug)

  return looksLikeProductSlug
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (BLOCKED_PATHS.includes(pathname)) {
    return new NextResponse("Gone", { status: 410 })
  }

  if (BLOCKED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return new NextResponse("Gone", { status: 410 })
  }

  if (looksLikeInjectedCatalogPath(pathname)) {
    return new NextResponse("Gone", { status: 410 })
  }

  if (pathname.endsWith(".php")) {
    return new NextResponse("Gone", { status: 410 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-touch-icon.png|robots.txt|sitemap.xml|.*\\..*).*)",
    "/wp-admin/:path*",
    "/wp-content/:path*",
    "/wp-includes/:path*",
    "/wp-login.php",
    "/xmlrpc.php",
    "/:path*.php",
  ],
}
