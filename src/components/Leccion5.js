import React, { useState } from "react";
import BoxText from "./Box-text";
import HeartIcon from "./HeartIcon";
import "../styles/Lecciones.css";

import Tema1 from "../images/L5-T1-T.png";
import T1text1 from "../images/L5-T1-1.png";
import T1text2 from "../images/L5-T1-2.png";
import T1text3 from "../images/L5-T1-3.png";
import Tema2 from "../images/L5-T2-T.png";
import T2text1 from "../images/L5-T2-1.png";
import T2text2 from "../images/L5-T2-2.png";
import Tema3 from "../images/L5-T3-T.png";
import T3text1 from "../images/L5-T3-1.png";
import T3text2 from "../images/L5-T3-2.png";

const Leccion5 = ({ isFavorito, onClickFavorito }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: Tema1,
      text: [],
    },
    {
      image: T1text1,
      text: [
        "Un espacio de color es un modelo matemático que organiza y representa colores de manera sistemática",
      ],
    },
    {
      image: T1text1,
      text: [
        "Se basa en la capacidad del ojo para percibir distintas longitudes de onda de luz.",
      ],
    },
    {
      image: T1text2,
      text: [
        "Establece un estándar para la descripción precisa de colores, vital en diseño gráfico, fotografía y otras disciplinas visuales.",
      ],
    },
    {
      image: T1text2,
      text: [
        "Los valores dentro del espacio de color definen colores específicos mediante coordenadas, proporcionando un marco consistente para la interpretación visual.",
      ],
    },
    {
      image: T1text3,
      text: [
        "Diferentes espacios de color se adaptan a diversas aplicaciones, ya sea para visualización en pantalla, impresión o análisis perceptual.",
      ],
    },
    {
      image: T1text3,
      text: [
        "La elección del espacio de color afecta la reproducción y percepción del color en proyectos visuales, destacando la importancia de comprender sus características.",
      ],
    },
    {
      image: Tema2,
      text: [],
    },
    {
      image: T2text1,
      text: [
        "El modelo RGB se utiliza en pantalla, combinando rojo, verde y azul para producir una gama amplia de colores visibles en dispositivos electrónicos.",
      ],
    },
    {
      image: T2text2,
      text: [
        "En contraste, el modelo CMYK es esencial para impresión, utilizando cian, magenta, amarillo y negro para reproducir colores en medios físicos.",
      ],
    },
    {
      image: Tema3,
      text: [],
    },
    {
      image: T3text1,
      text: [
        "El modelo de color LAB es ampliamente utilizado para representar colores de manera perceptualmente uniforme, siendo útil en edición de imágenes y diseño de productos.",
      ],
    },
    {
      image: T3text2,
      text: [
        "El espacio de color HSL, basado en LAB, incorpora claridad y tono, proporcionando un enfoque más intuitivo para la selección de colores.",
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
          leccionId="leccion5"
        />
      </div>
    </div>
  );
};

export default Leccion5;
