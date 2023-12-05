import React, { useState } from "react";
import BoxText from "./Box-text";
import HeartIcon from "./HeartIcon";
import "../styles/Lecciones.css";

import Tema1 from "../images/L4-T1-T.png";
import T1text1 from "../images/L4-T1-1.png";
import Tema2 from "../images/L4-T2-T.png";
import T2text1 from "../images/L4-T2-1.png";
import T2text2 from "../images/L4-T2-2.png";
import Tema3 from "../images/L4-T3-T.png";
import T3text1 from "../images/L4-T3-1.png";
import T3text2 from "../images/L4-T3-2.png";
import T3text3 from "../images/L4-T3-3.png";

const Leccion4 = ({ isFavorito, onClickFavorito }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: Tema1,
      text: [],
    },
    {
      image: T1text1,
      text: [
        "Las proporciones son elementos clave en el diseño, afectando la armonía y la legibilidad.",
      ],
    },
    {
      image: T1text1,
      text: [
        "Establecer proporciones adecuadas contribuye a la estética general del proyecto.",
      ],
    },
    {
      image: Tema2,
      text: [],
    },
    {
      image: T2text1,
      text: [
        "La regla 60-30-10 sugiere asignar el 60% al color dominante, 30% al secundario y 10% al acento.",
      ],
    },
    {
      image: T2text2,
      text: [
        "Proporciones clásicas como 80-15-5 también se aplican, proporcionando equilibrio y jerarquía.",
      ],
    },
    {
      image: Tema3,
      text: [],
    },
    {
      image: T3text1,
      text: [
        "Un ejemplo práctico sería asignar el 60% de un póster al color de fondo principal, el 30% a ilustraciones secundarias y el 10% a detalles acentuados.",
      ],
    },
    {
      image: T3text1,
      text: [
        "Estas proporciones garantizan una presentación visualmente atractiva y efectiva.",
      ],
    },
    {
      image: T3text2,
      text: [
        "En un sitio web, asignar el 60% al área principal de contenido, el 30% a elementos secundarios y el 10% a llamadas a la acción destaca información crítica.",
      ],
    },
    {
      image: T3text2,
      text: [
        "Garantiza que los visitantes encuentren la información esencial fácilmente.",
      ],
    },
    {
      image: T3text3,
      text: [
        "En diseño para redes sociales, se puede aplicar una proporción 70-20-10 para destacar la imagen principal, subtítulos y elementos de interacción.",
      ],
    },
    {
      image: T3text3,
      text: [
        "La adaptación cuidadosa de proporciones mejora la comunicación visual en diversos contextos.",
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
        leccionId="leccion4"
      />
      </div>
    </div>
  );
};

export default Leccion4;
