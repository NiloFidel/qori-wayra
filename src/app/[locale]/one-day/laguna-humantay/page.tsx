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
    generalTitle: "Tour a la Laguna Humantay (Full Day)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Descubre la magia de la Laguna Humantay, un lago de aguas turquesas enclavado en la Cordillera Vilcabamba. Disfruta de una caminata en la naturaleza andina y maravíllate con las impresionantes vistas de montañas nevadas.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día Único: Cusco - Laguna Humantay - Cusco",
          steps: [
            { iconType: "bus", text: "Salida desde Cusco en bus" },
            { iconType: "walk", text: "Caminata por senderos andinos" },
            { iconType: "lake", text: "Llegada a la Laguna Humantay" },
            { iconType: "lunch", text: "Almuerzo en ruta" },
            { iconType: "bus", text: "Regreso a Cusco en bus" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario Completo",
        text: (
          <>
            <p>El tour inicia temprano en Cusco, donde un vehículo te recogerá para trasladarte al inicio de la caminata. Durante el trayecto, disfrutarás de paisajes andinos únicos.</p>
            <p>La caminata te llevará a través de senderos rodeados de vegetación, hasta llegar a la imponente Laguna Humantay, famosa por sus aguas turquesas y su entorno montañoso. Después de disfrutar de este mágico lugar y tomarte un tiempo para fotos, iniciarás el regreso a Cusco.</p>
          </>
        ),
        services: [
          "Transporte redondo",
          "Guía profesional bilingüe",
          "Almuerzo buffet",
          "Entrada al área natural",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Propinas", "Bebidas adicionales"],
    recommendations: [
      "Llevar ropa cómoda y abrigada",
      "Calzado adecuado para trekking",
      "Protector solar y agua",
      "Cámara fotográfica",
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $120",
      quote: "Más información",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Laguna Humantay Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Experience the magic of Laguna Humantay, a turquoise lake nestled in the Vilcabamba Range. Enjoy a day of trekking through the Andean wilderness and be captivated by the breathtaking snowy mountain views.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Single Day: Cusco - Laguna Humantay - Cusco",
          steps: [
            { iconType: "bus", text: "Departure from Cusco by bus" },
            { iconType: "walk", text: "Trek through Andean trails" },
            { iconType: "lake", text: "Arrival at Laguna Humantay" },
            { iconType: "lunch", text: "Lunch on route" },
            { iconType: "bus", text: "Return to Cusco by bus" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Full Day Itinerary",
        text: (
          <>
            <p>The tour begins early in Cusco with a pickup that takes you to the trailhead. Along the way, you will enjoy unique Andean landscapes.</p>
            <p>The trek leads you through scenic trails until you reach the magnificent Laguna Humantay, known for its turquoise waters and stunning mountainous backdrop. After spending time taking in the views and photos, you will head back to Cusco.</p>
          </>
        ),
        services: [
          "Round-trip transportation",
          "Professional bilingual guide",
          "Buffet lunch",
          "Entrance fee to the natural area",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Tips", "Additional beverages"],
    recommendations: [
      "Wear comfortable and warm clothing",
      "Use proper trekking shoes",
      "Bring sunscreen and water",
      "Carry a camera",
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $120",
      quote: "More Information",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function LagunaHumantay({ params }: { params: Promise<{ locale: "es" | "en" }> }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale || "es";
  const content = { ...translations[locale], ...globalImages };

  return <ComponentePrincipal {...content} />;
}
