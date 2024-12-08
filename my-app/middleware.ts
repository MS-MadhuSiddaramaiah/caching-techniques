import { NextResponse } from 'next/server'
import { geolocation } from "@vercel/functions";
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const country = geolocation(request)?.country || 'Unknown'
  response.headers.set('x-vercel-ip-country', country)
  return response
}

export const config = {
  matcher: '/:path*',
}

