import {NextResponse} from 'next/server'
import acceptLanguage from 'accept-language'
import {fallbackLng, languages, cookieName} from './settings'

acceptLanguage.languages(languages)

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|favicon-16x16.png|sw.js).*)']
}

export async function middleware(req) {

    if (req.nextUrl.pathname.startsWith('/_next')) return NextResponse.next()
    let lng
    if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng

    const pathRegex = /^\/((?!api|_next\/static|_next\/images|assets|favicon.ico|sitemap.xml|favicon-16x16.png|apple-touch-icon.png|sw.js).*)$/;

    if (pathRegex.test(req.nextUrl.pathname)) {
        if (!languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`))) {
            return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
        }
    }

    const lngInReferer = languages.find((l) => req.nextUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
}