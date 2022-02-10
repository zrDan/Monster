import React from "react";
import "./style/navbar.css";

function NavBar() {
  return (
    <nav className="navigation">
      <div className="brand">
        <img src="/media/monster-energy/monster-energy.webp" alt="monster" />
      </div>
      <div className="navigation-options">
        <div>
          <a href="https://www.monsterenergy.com/mx/es_mx/news" target="blank">
            noticias
          </a>
        </div>
        <div>
          <a
            href="https://www.monsterenergy.com/mx/es_mx/products/monster-energy"
            target="blank"
          >
            productos
          </a>
        </div>
        <div>
          <a
            href="https://www.monsterenergy.com/mx/es_mx/promotions"
            target="blank"
          >
            promociones
          </a>
        </div>
        <div className="entertainment">
          entretenimiento
          <ul className="dropdown">
            <li>
              <a
                href="https://www.monsterenergy.com/mx/es_mx/sports/mxgp"
                target="blank"
              >
                deportes
              </a>
            </li>
            <li>
              <a
                href="https://www.monsterenergy.com/mx/es_mx/music"
                target="blank"
              >
                musica
              </a>
            </li>
            <li>
              <a
                href="https://www.monsterenergy.com/mx/es_mx/gaming"
                target="blank"
              >
                gaming
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="search">
        <div className="serachContainer">
          <div className="textInput">
            <input type="text" name="" id="" />
          </div>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
