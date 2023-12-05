// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import svgImage from "../images/icon/L1.svg";
import svgImage2 from "../images/icon/L2.svg";
import svgImage3 from "../images/icon/L3.svg";
import svgImage4 from "../images/icon/L4.svg";
import svgImage5 from "../images/icon/L5.svg";

const Navbar = ({ setPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    menuBtnChange();
  };

  const menuBtnChange = () => {
    const closeBtn = document.querySelector("#btn");
    if (isOpen) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };

  const handlePageClick = (page) => {
    setPage(page);
    setIsOpen(false); 
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo-details">
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 72 72"
            id="Logo"
            className="logo"
          >
            <path
              d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"
              transform="translate(-50%, -50%)"
            ></path>
          </svg>
        </i>
      </div>
      <ul className="nav-list">
        <li className={currentPage === "leccion1" ? "selected" : ""}>
          <Link to="/leccion1" onClick={() => handlePageClick("leccion1")}>
            <i className="bx bx-user">
              <img className="icon" src={svgImage} alt="Lección 1" />
            </i>
            <span className="links_name">1ra. Lección</span>
          </Link>
        </li>
        <li className={currentPage === "leccion2" ? "selected" : ""}>
          <Link to="/leccion2" onClick={() => handlePageClick("leccion2")}>
            <i className="bx bx-user">
              <img className="icon" src={svgImage2} alt="Lección 2" />
            </i>
            <span className="links_name">2da. Lección</span>
          </Link>
        </li>
        <li className={currentPage === "leccion3" ? "selected" : ""}>
          <Link to="/leccion3" onClick={() => handlePageClick("leccion3")}>
            <i className="bx bx-user">
              <img className="icon" src={svgImage3} alt="Lección 3" />
            </i>
            <span className="links_name">3ra. Lección</span>
          </Link>
        </li>
        <li className={currentPage === "leccion4" ? "selected" : ""}>
          <Link to="/leccion4" onClick={() => handlePageClick("leccion4")}>
            <i className="bx bx-user">
              <img className="icon" src={svgImage4} alt="Lección 4" />
            </i>
            <span className="links_name">4ta Lección</span>
          </Link>
        </li>
        <li className={currentPage === "leccion5" ? "selected" : ""}>
          <Link to="/leccion5" onClick={() => handlePageClick("leccion5")}>
            <i className="bx bx-user">
              <img className="icon" src={svgImage5} alt="Lección 5" />
            </i>
            <span className="links_name">5ta. Lección</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
