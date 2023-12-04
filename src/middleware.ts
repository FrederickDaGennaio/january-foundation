export const runtime = 'experimental-edge'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { defaultLocale, locales } from './brand'

function getLocale(request: Request) {
  let header = request.headers.get('accept-language')!
  let languages = new Negotiator({
    headers: { 'accept-language': header },
  }).languages()
  let locale = match(languages, locales, defaultLocale)
  return 'en'
}

export function middleware(request: any) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|favicon|~).*)'],
}
