import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import ColorPicker from "./components/ColorPicker";
import Leccion1 from "./components/Leccion1";
import Leccion2 from "./components/Leccion2";
import Leccion3 from "./components/Leccion3";
import Leccion4 from "./components/Leccion4";
import Leccion5 from "./components/Leccion5";

import "./App.css";
import logo from "./images/logo.png";
import BoxText from "./components/Box-text";

const leccionesData = [
  { id: "leccion1", component: <Leccion1 />, title: "Lección 1" },
  { id: "leccion2", component: <Leccion2 />, title: "Lección 2" },
  { id: "leccion3", component: <Leccion3 />, title: "Lección 3" },
  { id: "leccion4", component: <Leccion4 />, title: "Lección 4" },
  { id: "leccion5", component: <Leccion5 />, title: "Lección 5" },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [favoritos, setFavoritos] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(true); // Nuevo estado

  useEffect(() => {
    const favoritosGuardados =
      JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Mostrar el ColorPicker solo si se selecciona la página "home"
    setShowColorPicker(page === "home");
  };

  const handleToggleFavorito = (leccionId) => {
    if (favoritos.includes(leccionId)) {
      setFavoritos(favoritos.filter((id) => id !== leccionId));
    } else {
      setFavoritos([...favoritos, leccionId]);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  };

  const handleLogoClick = () => {
    setShowColorPicker(true);
    setCurrentPage("home");
  };

  return (
    <div>
      <Link
        to="/"
        onClick={handleLogoClick}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <header className="app-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="app-logo" />
            <h1>Colors</h1>
          </div>
        </header>
      </Link>

      <div className="app-container">
        {showColorPicker && <ColorPicker />}
        {showColorPicker && <BoxText text="Haga click en las lecciones ->" />}
        {leccionesData.map((leccion) => (
          <div key={leccion.id}>
            {currentPage === leccion.id &&
              React.cloneElement(leccion.component, {
                isFavorito: favoritos.includes(leccion.id),
                onClickFavorito: () => handleToggleFavorito(leccion.id),
              })}
          </div>
        ))}
      </div>

      <div>
        <Navbar setPage={handlePageChange} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default App;
