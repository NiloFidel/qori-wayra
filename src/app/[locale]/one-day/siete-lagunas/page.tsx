"use client";

import React from "react";
import ComponentePrincipal from "../../../components/utils/principal/principal";
import img1 from "../../../../../public/images/CityTour/Fortaleza-de-Sacsayhuaman-Cusco-scaled.webp";
import img2 from "../../../../../public/images/CityTour//Qorikancha-Cusco.jpg";
import img3 from "../../../../../public/images/CityTour/tambomachay-cusco.jpg";
import img4 from "../../../../../public/images/CityTour/sitio-arqueologico-puca-pucara-full-scaled.jpg";
import img5 from "../../../../../public/images/CityTour/Bosque-de-Q´enqo-Cusco.jpg.jpg";

/* 🔹 Definir la Interfaz */
interface TranslationContent {
  generalTitle: string;
  tripOverview: {
    title: string;
    content: string;
  };
  itinerarySummary: {
    title: string;
    days: {
      title: string;
      steps: { iconType: string; text: string }[];
    }[];
  };
  itinerary: {
    title: string;
    text: React.ReactNode;
    services: string[];
  }[];
  additionalInfo: {
    title: string;
    physicalRating: string;
  };
  includedServices: string;
  notIncluded: string[];
  recommendations: string[];
  groupServices: {
    daysAndNights: string;
    price: string;
    quote: string;
    bookNow: string;
    tourForMe: string;
  };
}

/* 🔹 Imágenes globales */
const globalImages = {
    mapImage: "https://guru-almacen.s3.us-east-1.amazonaws.com/quechua/mapa.jpg",
  smallImages: [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
  ],
};

/* 🔹 Definir objeto de traducciones */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour 7 Lagunas (Full Day)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Disfruta de un recorrido de día completo por 7 lagunas de gran belleza, ubicado en un entorno natural único de los Andes. Experimenta paisajes impresionantes y descubre la riqueza de la biodiversidad andina.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario: 7 Lagunas",
          steps: [
            { iconType: "bus", text: "Recojo en el hotel en Cusco" },
            { iconType: "walk", text: "Traslado al inicio del tour" },
            { iconType: "lake", text: "Visita a la primera laguna" },
            { iconType: "lake", text: "Paradas en lagunas intermedias" },
            { iconType: "bus", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour 7 Lagunas",
        text: (
          <>
            <p>El tour inicia temprano en Cusco con el recojo en el hotel. Tras un corto traslado en vehículo, iniciamos nuestra caminata hacia las lagunas, atravesando senderos con vistas panorámicas y paisajes andinos.</p>
            <p>Durante la jornada, visitaremos siete lagunas, cada una con características únicas, donde podrás disfrutar de la tranquilidad del agua y el impresionante entorno natural.</p>
          </>
        ),
        services: ["Recojo en el hotel", "Transporte turístico", "Guía profesional bilingüe", "Almuerzo buffet"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja a Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Ingreso a lagunas (pago local)", "Gastos personales"],
    recommendations: [
      "Llevar ropa cómoda y abrigada",
      "Protector solar, gorra y agua",
      "Calzado adecuado para caminatas"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $120",
      quote: "Tour 7 Lagunas",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "7 Lagunas Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Enjoy a full-day tour through 7 stunning high-altitude lagoons in the Andes. Experience breathtaking landscapes and discover the rich Andean biodiversity.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Itinerary: 7 Lagoons",
          steps: [
            { iconType: "bus", text: "Hotel pickup in Cusco" },
            { iconType: "walk", text: "Transfer to tour starting point" },
            { iconType: "lake", text: "Visit the first lagoon" },
            { iconType: "lake", text: "Stops at intermediate lagoons" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "7 Lagoons Tour Itinerary",
        text: (
          <>
            <p>The tour begins early with hotel pickup in Cusco. After a short drive, we start our hike towards the lagoons, traversing scenic Andean trails.</p>
            <p>Throughout the day, you will visit seven unique lagoons where you can relax and admire the serene beauty of the high Andes.</p>
          </>
        ),
        services: ["Hotel pickup", "Tour transportation", "Professional bilingual guide", "Buffet lunch"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low to Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Local entrance fees", "Personal expenses"],
    recommendations: [
      "Wear comfortable, layered clothing",
      "Bring sunscreen, hat, and water",
      "Wear appropriate hiking shoes"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $120",
      quote: "7 Lagoons Tour",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function CaminoInca2D({ params }: { params: Promise<{ locale: "es" | "en" }> }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale || "es";
  const content = { ...translations[locale], ...globalImages };

  return <ComponentePrincipal {...content} />;
}
