"use client";

import Navbar from "./components/base/navbar/navbar";
import Footer from "./components/base/footer/footer";
import Whapa from "./components/utils/contact/contact"
import { ReactNode } from "react";
import "@/app/globals.css";

interface LayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body>
        <Navbar locale="es" />
        <main>{children}</main>
        <Whapa />
        <Footer locale="es" />
      </body>
    </html>
  );
}






