import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { isAllowedRequestPath, normalizePathname } from "@/lib/request-allowlist"

const LEGACY_HOSTNAME = "kawaii-shiba.com"
const CANONICAL_HOSTNAME = "www.kawaii-shiba.com"

const GONE_RESPONSE_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
} as const

function createGoneResponse() {
  return new NextResponse("Gone", {
    status: 410,
    headers: GONE_RESPONSE_HEADERS,
  })
}

function createCanonicalRedirect(request: NextRequest, pathname: string) {
  const canonicalUrl = request.nextUrl.clone()

  canonicalUrl.protocol = "https:"
  canonicalUrl.hostname = CANONICAL_HOSTNAME
  canonicalUrl.port = ""
  canonicalUrl.pathname = pathname

  return NextResponse.redirect(canonicalUrl, 308)
}

function getRequestHostname(request: NextRequest) {
  const host = request.headers.get("host") ?? request.nextUrl.hostname

  return host.split(":")[0].toLowerCase()
}

export function proxy(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname)

  if (!isAllowedRequestPath(pathname)) {
    return createGoneResponse()
  }

  if (getRequestHostname(request) === LEGACY_HOSTNAME) {
    return createCanonicalRedirect(request, pathname)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
