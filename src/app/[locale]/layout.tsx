import { ReactNode } from "react";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale?: string }; // ❌ NO es una promesa, quitamos `Promise`
}) {
  return <>{children}</>; // Solo devuelve el contenido sin modificar <html>
}
