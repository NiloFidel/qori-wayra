"use client";
import { ReactNode } from "react";
export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  let locale = params?.locale ?? "es";

  if (Array.isArray(locale)) {
    locale = locale[0];
  }

  return <>{children}</>;
}
