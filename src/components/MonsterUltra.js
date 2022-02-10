import React from "react";

function MonsterUltra() {
  return (
    <>
      <div className="monster-description animation-container">
        <div className="brand-banner">
          <img
            src="/media/monster-ultra/zero-ultra.webp"
            alt="monster"
            className="banner-img"
          />
        </div>
        <div className="description">
          <p>
            Algunas personas son dificiles de complacer y en cuanto consiguen lo
            que quieren, siempre desean algo más. Nuestros atletas y Monster
            Girls™ no son la excepción... últimamente nos han enviado algunas
            indirectas.
          </p>
          <p>
            Nos han estado pidiendo una nueva bebida Monster® menos dulce, baja
            en calorías, de sabor más ligero, pero con todo el poder de nuestra
            mezcla Monster®.
          </p>
          <p>
            Ahora... el blanco es el nuevo negro ¡No nos contuvimos! Monster
            Energy Zero Ultra®
          </p>
          <p>
            <b>Unleash The Ultra Beast!</b>
          </p>
        </div>
      </div>
      <div className="monster-type  animation-container">
        <div id="zero-ultra" className="active-drink">
          <img src="/media/monster-ultra/zero-ultra-drink.webp" alt="monster" />
        </div>
      </div>
    </>
  );
}

export default MonsterUltra;
