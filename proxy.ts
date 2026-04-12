import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { isAllowedRequestPath, normalizePathname } from "@/lib/request-allowlist"

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

export function proxy(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname)

  if (isAllowedRequestPath(pathname)) {
    return NextResponse.next()
  }

  return createGoneResponse()
}

export const config = {
  matcher: "/:path*",
}
