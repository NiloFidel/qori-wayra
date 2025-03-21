"use client";

import React from "react";
import styles from "./entrada.module.css";
import { FaDollarSign, FaHeadset, FaUsers } from "react-icons/fa";

interface Feature {
  title: string;
  text: string;
  icon: React.ReactNode;
}

interface EntradaProps {
  generalTitle: string;
  mapImage: string;
  smallImages: string[];
  features?: Feature[];
}

export default function Entrada({
  generalTitle,
  mapImage,
  smallImages,
  features,
}: EntradaProps) {
  // Si no se pasan features, se usa el siguiente arreglo por defecto:
  const defaultFeatures: Feature[] = [
    { title: "Best Price Guarantee", text: "Extraordinary prices...", icon: <FaDollarSign /> },
    { title: "24/7 Customer Service", text: "Our travel specialists...", icon: <FaHeadset /> },
    { title: "Thousands of testimonials", text: "Our commitment...", icon: <FaUsers /> },
  ];

  const featuresToShow = features || defaultFeatures;

  return (
    <div className={styles.entradaContainer}>
      <h1>{generalTitle}</h1>
      {/* Sección superior: mosaico de imágenes */}
      <div className={styles.topImages}>
        {/* Columna izquierda: Mapa */}
        <div className={styles.mapContainer}>
          <img src={mapImage} alt="Mapa" className={styles.mapImage} />
        </div>
        {/* Columna derecha: Grid de 4 imágenes */}
        <div className={styles.rightGrid}>
          {smallImages.map((src, index) => (
            <div key={index} className={styles.smallImageWrapper}>
              <img src={src} alt={`Foto ${index + 1}`} className={styles.smallImage} />
            </div>
          ))}
        </div>
      </div>

      {/* Sección inferior: Tarjetas de features */}
      <div className={styles.featuresContainer}>
        {featuresToShow.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
