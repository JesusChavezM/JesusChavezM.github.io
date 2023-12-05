import React, { useState } from "react";
import BoxText from "./Box-text";
import HeartIcon from "./HeartIcon";
import "../styles/Lecciones.css";

import Tema1 from "../images/L3-T0-T.png";
import T1text1 from "../images/L3-T0-1.png";
import T1text2 from "../images/L3-T0-2.png";
import Tema2 from "../images/L3-T1-T.png";
import T2text1 from "../images/L3-T1-1.png";
import T2text2 from "../images/L3-T1-2.png";
import T2text3 from "../images/L3-T1-3.png";

const Leccion3 = ({ isFavorito, onClickFavorito }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: Tema1,
      text: [],
    },
    {
      image: T1text1,
      text: [
        "En esta lección, exploraremos el concepto clave de 'Contraste' en el diseño de colores. ",
      ],
    },
    {
      image: T1text2,
      text: [
        "El contraste es fundamental para captar la atención, establecer jerarquías visuales y mejorar la legibilidad. ",
      ],
    },
    {
      image: T1text2,
      text: [
        "Veamos los aspectos esenciales de este importante principio de diseño.",
      ],
    },
    {
      image: Tema2,
      text: [],
    },
    {
      image: T2text1,
      text: [
        "Contraste de Color: Destaca elementos y crea una separación visual clara.",
      ],
    },
    {
      image: T2text1,
      text: [
        "Este tipo de contraste se logra utilizando colores opuestos en la rueda, como el rojo y el verde.",
      ],
    },
    {
      image: T2text2,
      text: [
        "Contraste de Tono: Se refiere a la diferencia en claridad o oscuridad entre dos colores.",
      ],
    },
    {
      image: T2text2,
      text: [
        "Un ejemplo sería la combinación de amarillo claro con azul oscuro, resaltando la diferencia de tono.",
      ],
    },
    {
      image: T2text3,
      text: [
        "Contraste de Color en Texto: Elegir colores contrastantes para texto y fondo mejora la legibilidad.",
      ],
    },
    {
      image: T2text3,
      text: ["Por ejemplo, texto negro sobre fondo blanco o viceversa."],
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
          leccionId="leccion3"
        />
      </div>
    </div>
  );
};

export default Leccion3;
