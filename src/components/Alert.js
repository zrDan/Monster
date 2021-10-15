import React from "react";
import "./style/alert.css";

function Alert() {
  function handleClick() {
    let container = document.getElementById("alert-container");
    container.classList.add("accept");
  }

  return (
    <div id="alert-container" className="alertContainer">
      <div className="disclaimer">
        <div className="alert-header">¡¡¡ importante !!!</div>
        <div className="alert-body">
          <div className="alert-content">
            <p>
              El contenido de esta pagina es un rediseño de la sección de
              bebidas de Monster Energy.
            </p>
            <p>
              Los links en esta pagina te redigiran al contenido original de
              Monster Energy.
            </p>
          </div>
          <div className="alert-button">
            <button onClick={handleClick}>aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
