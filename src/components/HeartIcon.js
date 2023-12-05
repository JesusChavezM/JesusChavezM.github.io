import React, { useState, useEffect } from 'react';

const HeartIcon = ({ isFavorito, onClick }) => {
  const [favoritos, setFavoritos] = useState([]);

  // Cargar favoritos desde el Local Storage al montar el componente
  useEffect(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    if (storedFavoritos) {
      setFavoritos(JSON.parse(storedFavoritos));
    }
  }, []);

  const handleFavoritoClick = () => {
    const updatedFavoritos = isFavorito
      ? favoritos.filter((favorito) => favorito !== 'leccion1') // Puedes cambiar 'leccion1' por la identificación única de la lección
      : [...favoritos, 'leccion1'];

    // Actualizar el estado y guardar en el Local Storage
    setFavoritos(updatedFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(updatedFavoritos));

    // Llamar a la función onClick para manejar cambios en el componente Leccion1
    onClick();
  };

  return (
    <div
      className="favorito-container"
      onClick={handleFavoritoClick}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        margin: '0',
        padding: '0',
      }}
    >
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill={isFavorito ? 'red' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: '0', padding: '0', border: 'none', background: 'none' }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default HeartIcon;
