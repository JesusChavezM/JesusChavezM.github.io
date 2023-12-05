import React, { useState } from "react";
import BoxText from "./Box-text";
import HeartIcon from "./HeartIcon";
import "../styles/Lecciones.css";

import Tema1 from "../images/L1-T1-T.png";
import T1text1 from "../images/L1-T1-1.png";
import Tema2 from "../images/L1-T2-T.png";
import T2text1 from "../images/L1-T2-2.png";
import T2text2 from "../images/L1-T2-3.png";
import T2text3 from "../images/L1-T2-4.png";
import Tema3 from "../images/L1-T3-T.png";
import T3text1 from "../images/L1-T3-1.png";
import T3text2 from "../images/L1-T3-2.png";
import T3text3 from "../images/L1-T3-3.png";

const Leccion1 = ({ isFavorito, onClickFavorito }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: Tema1,
      text: [],
    },
    {
      image: T1text1,
      text: [
        "El color es una percepción visual derivada de la luz. En diseño, su comprensión es esencial para transmitir mensajes y emociones.",
      ],
    },
    {
      image: T1text1,
      text: [
        "La teoría del color nos permite entender cómo los colores interactúan y se combinan, facilitando la creación de diseños visualmente atractivos.",
      ],
    },
    {
      image: Tema2,
      text: [],
    },
    {
      image: T2text1,
      text: [
        "Hue: Es la propiedad que define el tipo de color, como rojo, verde o azul.",
      ],
    },
    {
      image: T2text2,
      text: [
        "Saturation: Indica la pureza del color, desde tonos apagados hasta colores vibrantes.",
      ],
    },
    {
      image: T2text3,
      text: [
        "Value: Representa la luminosidad del color, desde oscuro hasta claro.",
      ],
    },
    {
      image: Tema3,
      text: [],
    },
    {
      image: T3text1,
      text: [
        "RGB (Red, Green, Blue): Se basa en la combinación de luces para crear colores en pantalla.",
      ],
    },
    {
      image: T3text3,
      text: [
        "HSV (Hue, Saturation, Value): Proporciona una representación más intuitiva del color para diseñadores.",
      ],
    },
    {
      image: T3text2,
      text: [
        "CMYK (Cyan, Magenta, Yellow, Key/Black): Utilizado en impresión, mezcla colores sustractivamente.",
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
          leccionId="leccion1"
        />
      </div>
    </div>
  );
};

export default Leccion1;
