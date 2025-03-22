import { NextRequest, NextResponse } from "next/server";

// Define los idiomas soportados
const locales = ["en", "es"];

export function middleware(req: NextRequest) {
  // Obtiene el pathname (ruta) sin el dominio
  const { pathname } = req.nextUrl;

  // Si ya tiene un idioma en la URL, lo dejamos pasar
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`));
  if (hasLocale || pathname === "/") {
    return NextResponse.next();
  }

  // Redireccionamos al idioma por defecto "en"
  const locale = "en";
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

// Configurar las rutas donde se aplica el middleware
export const config = {
  matcher: "/((?!_next|favicon.ico|public|api).*)",
};
