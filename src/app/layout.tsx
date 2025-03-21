"use client";

import Navbar from "./components/base/navbar/navbar";
import Footer from "./components/base/footer/footer";
import Whapa from "./components/utils/contact/contact"
import { useParams } from "next/navigation";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useParams();
  // Forzamos que currentLocale sea "en" solo si locale es "en", de lo contrario "es"
  const currentLocale = locale === "en" ? "en" : "es";

  return (
    <html lang={currentLocale}>
      <body>
        <Navbar locale={currentLocale} />
        <main>{children}</main>
        <Whapa />
        <Footer locale={currentLocale} />
      </body>
    </html>
  );
}
