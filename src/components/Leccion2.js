import React, { useState } from "react";
import BoxText from "./Box-text";
import HeartIcon from "./HeartIcon";
import "../styles/Lecciones.css";

import Tema1 from "../images/L2-T1-T.png";
import T1text1 from "../images/L2-T1-1.png";
import Tema2 from "../images/L2-T2-T.png";
import T2text1 from "../images/L2-T2-1.png";
import T2text2 from "../images/L2-T2-2.png";
import T2text3 from "../images/L2-T2-3.png";
import Tema3 from "../images/L2-T3-T.png";
import T3text1 from "../images/L2-T3-1.png";
import T3text2 from "../images/L2-T3-2.png";
import T3text3 from "../images/L2-T3-3.png";
import Tema4 from "../images/L2-T4-T.png";
import T4text1 from "../images/L2-T4-1.png";
import T4text2 from "../images/L2-T4-2.png";

const Leccion2 = ({ isFavorito, onClickFavorito }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: Tema1,
      text: [],
    },
    {
      image: T1text1,
      text: [
        "La rueda de colores clasifica los tonos según sus relaciones cromáticas, facilitando la elección de combinaciones armónicas y equilibradas.",
      ],
    },
    {
      image: T1text1,
      text: [
        "Organiza colores de manera circular, permitiendo una visualización intuitiva de sus conexiones.",
      ],
    },
    {
      image: Tema2,
      text: [],
    },
    {
      image: T2text1,
      text: ["Colores complementarios generan contrastes visuales fuertes."],
    },
    {
      image: T2text1,
      text: ["Es ideal para destacar elementos."],
    },
    {
      image: T2text2,
      text: [
        "Colores análogos proporcionan armonía visual al compartir tonalidades cercanas.",
      ],
    },
    {
      image: T2text3,
      text: [
        "Colores triádicos ofrecen equilibrio al distribuirse uniformemente en la rueda.",
      ],
    },
    {
      image: Tema3,
      text: [],
    },

    {
      image: T3text1,
      text: ["Harmonía monocromática"],
    },
    {
      image: T3text1,
      text: [
        "Utiliza diferentes tonalidades de un solo color para una apariencia cohesiva.",
      ],
    },
    {
      image: T3text2,
      text: ["Harmonía complementaria"],
    },
    {
      image: T3text2,
      text: ["Crea un contraste vibrante y llamativo."],
    },
    {
      image: T3text3,
      text: ["Harmonía análoga "],
    },
    {
      image: T3text3,
      text: ["Brinda suavidad y coherencia con colores cercanos en la rueda."],
    },
    {
      image: Tema4,
      text: [],
    },

    {
      image: T4text1,
      text: [
        "La inclusión de grises en la paleta de colores se hace para suavizar colores intensos",
      ],
    },
    {
      image: T4text1,
      text: ["Manteniendo la armonía visual."],
    },
    {
      image: T4text2,
      text: [
        "Los colores de acento son tonos vibrantes que se utilizan estratégicamente para resaltar áreas específicas en un diseño.",
      ],
    },
    {
      image: T4text2,
      text: [
        "Agregan dinamismo y énfasis visual, atrayendo la atención del espectador hacia elementos clave en la composición.",
      ],
    },
  ];

  const handleClick = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : 0
    );
  };

  return (
    <div className="leccion-wrapper">
      <div className="leccion-container" onClick={handleClick}>
        {steps[currentStep].text.length > 0 &&
          steps[currentStep].text.map((text, index) => (
            <BoxText key={index} text={text} />
          ))}
        <img src={steps[currentStep].image} alt={`Imagen ${currentStep + 1}`} />
      </div>
      <div className="heart-icon-container">
        <HeartIcon
          isFavorito={isFavorito}
          onClick={onClickFavorito}
          leccionId="leccion2"
        />
      </div>
    </div>
  );
};

export default Leccion2;
