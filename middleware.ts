import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./src/app/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Si la URL ya tiene un locale válido, no hacer nada
  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  if (pathnameHasLocale) return NextResponse.next();

  // Redirigir al idioma por defecto
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
