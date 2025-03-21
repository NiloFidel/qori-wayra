"use client";

import React from "react";
import ComponentePrincipal from "../../../components/utils/principal/principal";
import img1 from "../../../../../public/images/ValleVIP/Pisac-donde-crece-y-florece-todo.jpg";
import img2 from "../../../../../public/images/ValleVIP/ollantaytambo-cusco-peru.jpg";
import img3 from "../../../../../public/images/ValleVIP/moray.jpg";
import img4 from "../../../../../public/images/ValleVIP/SALINERAS-DE-MARAS.jpeg";
import img5 from "../../../../../public/images/ValleVIP/iglesia-chinchero-full.jpg";

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
  // Usamos una imagen de mapa genérica, puede ser ajustada según el destino
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
    generalTitle: "Tour Místico 4 en 1",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Embárcate en un tour místico que recorre cuatro destinos emblemáticos: Morada de los Dioses, Parque de los Duendes, Humedal de Huasao y Bosque de los End. Vive una experiencia única en la que se combinan la espiritualidad y la naturaleza ancestral.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Tour Místico 4 en 1",
          steps: [
            { iconType: "bus", text: "Traslado desde Cusco" },
            { iconType: "walk", text: "Visita a la Morada de los Dioses" },
            { iconType: "walk", text: "Recorrido por el Parque de los Duendes" },
            { iconType: "walk", text: "Exploración del Humedal de Huasao" },
            { iconType: "walk", text: "Descubrimiento del Bosque de los End" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour",
        text: (
          <>
            <p>El tour inicia con el traslado desde Cusco. Llegamos a la <strong>Morada de los Dioses</strong>, un lugar lleno de misticismo y leyendas ancestrales. Luego, visitamos el <strong>Parque de los Duendes</strong>, donde la magia de la naturaleza se combina con el folclore local. Continuamos hacia el <strong>Humedal de Huasao</strong>, un ecosistema único que alberga una gran diversidad de flora y fauna, y finalizamos en el <strong>Bosque de los End</strong>, un remanso de paz y belleza natural.</p>
            <p>El tour ofrece una inmersión en la cultura y la naturaleza de la región, complementado con la guía de un experto local que te explicará cada uno de estos fascinantes lugares.</p>
          </>
        ),
        services: [
          "Traslado desde Cusco",
          "Guía profesional bilingüe",
          "Entrada a los sitios místicos",
          "Degustación de gastronomía local",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Fácil",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Boleto Turístico Parcial", "Alimentación adicional", "Propinas"],
    recommendations: [
      "Usar ropa cómoda y abrigada",
      "Llevar protector solar, agua y snacks",
      "Calzado adecuado para caminar",
    ],
    groupServices: {
      daysAndNights: "1D/0N",
      price: "USD $180",
      quote: "Tour Místico 4 en 1",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Mystical 4-in-1 Tour",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Embark on a mystical tour covering four iconic destinations: The Abode of the Gods, the Enchanted Park, the Huasao Wetland, and the Forest of the End. Experience a unique journey that blends spirituality with ancient natural wonders.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Mystical 4-in-1 Tour",
          steps: [
            { iconType: "bus", text: "Transfer from Cusco" },
            { iconType: "walk", text: "Visit to the Abode of the Gods" },
            { iconType: "walk", text: "Tour of the Enchanted Park" },
            { iconType: "walk", text: "Exploration of the Huasao Wetland" },
            { iconType: "walk", text: "Discovery of the Forest of the End" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour Itinerary",
        text: (
          <>
            <p>The tour starts with a transfer from Cusco. We arrive at the <strong>Abode of the Gods</strong>, a place filled with mysticism and ancient legends. Next, we visit the <strong>Enchanted Park</strong>, where nature’s magic blends with local folklore. We then explore the unique <strong>Huasao Wetland</strong>, home to diverse flora and fauna, and finally, we discover the <strong>Forest of the End</strong>, a sanctuary of tranquility and natural beauty.</p>
            <p>This tour provides an immersive experience into the region’s culture and nature, guided by a local expert who shares the rich history behind each site.</p>
          </>
        ),
        services: [
          "Transfer from Cusco",
          "Professional bilingual guide",
          "Entrance fees to the mystical sites",
          "Local culinary tasting",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Easy",
    },
    includedServices: "Included Services:",
    notIncluded: ["Partial Tourist Ticket", "Additional Meals", "Tips"],
    recommendations: [
      "Wear comfortable and warm clothing",
      "Bring sunscreen, water, and snacks",
      "Wear proper walking shoes",
    ],
    groupServices: {
      daysAndNights: "1D/0N",
      price: "USD $180",
      quote: "Mystical 4-in-1 Tour",
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
