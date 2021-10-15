import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MonsterDescription from "./MonsterDescription";

function MonsterOriginal() {
  const monsterState = useSelector((state) => state.monsterInfo);
  const [monster, setMonster] = useState("");
  const dispatch = useDispatch();

  const handleClick = (monsterDrink) => (e) => {
    e.preventDefault();
    let monster_energy = document.getElementById("monster-energy");
    let monster_44 = document.getElementById("monster-44");
    let monster_lo = document.getElementById("monster-lo-carbs");
    let monster_zero = document.getElementById("monster-zero");

    if (monsterDrink === "monster-original") {
      dispatch({
        type: "SET_MONSTER_INFO",
        payload: {
          cover: "/media/monster-energy/monster-energy-brand.png",
          description: [
            `¡Prueba una de las bebidas mas extremas del planeta, Monster
    Energy®!`,
            `Es una mezcla brutal con una combinación ideal de ingredientes con
    las proporciones exactas para darles el Monster® buzz que tanto les
    gusta a nuestros fans de México. Monster® tiene un sabor intenso
    pero suave.`,
            `Les encanta a los atletas, surfistas, músicos, skaters, riders,
    geeks y hipsters... entonces a ti seguro te encantará.`,
            `Unleash The Beast`,
          ],
        },
      });

      monster_energy.classList.add("active-drink");
      monster_energy.classList.remove("inactive");
      monster_44.classList.remove("active-drink");
      monster_44.classList.add("inactive");
      monster_lo.classList.remove("active-drink");
      monster_lo.classList.add("inactive");
      monster_zero.classList.remove("active-drink");
      monster_zero.classList.add("inactive");
    } else if (monsterDrink === "monster-44") {
      dispatch({
        type: "SET_MONSTER_INFO",
        payload: {
          cover: "/media/monster-energy/monster-44.png",
          description: [
            `Cuando eres Lewis Hamilton, cuatro veces campeón mundial de F1, la vida se mueve a 15,000RPM y 320 KM/HR, recorrer un mundo en milisegundos necesita una bebida que le siga el paso.`,
            `Ligero, dulce y refrescante, con un final acelerado, "44", te separará del resto y te hará llevar la delantera.`,
            `LH44`,
          ],
        },
      });

      monster_energy.classList.remove("active-drink");
      monster_energy.classList.add("inactive");
      monster_44.classList.add("active-drink");
      monster_44.classList.remove("inactive");
      monster_lo.classList.remove("active-drink");
      monster_lo.classList.add("inactive");
      monster_zero.classList.remove("active-drink");
      monster_zero.classList.add("inactive");
    } else if (monsterDrink === "monster-lo") {
      dispatch({
        type: "SET_MONSTER_INFO",
        payload: {
          cover: "/media/monster-energy/monster-lo-carbs.png",
          description: [
            `Prueba una de las bebidas más extremas del planeta, Monster Energy!®`,
            `Ahora con bajas calorías, sin sacrificar el sabor... eso es Lo-Carb Monster Energy!®`,
            `Les encanta a los atletas, surfistas, músicos, skaters, riders, geeks, y hipsters... entonces a ti seguro te encantará.`,
            `Lo Carb`,
          ],
        },
      });

      monster_energy.classList.remove("active-drink");
      monster_energy.classList.add("inactive");
      monster_44.classList.remove("active-drink");
      monster_44.classList.add("inactive");
      monster_lo.classList.add("active-drink");
      monster_lo.classList.remove("inactive");
      monster_zero.classList.remove("active-drink");
      monster_zero.classList.add("inactive");
    } else if (monsterDrink === "monster-zero") {
      dispatch({
        type: "SET_MONSTER_INFO",
        payload: {
          cover: "/media/monster-energy/monster-absolutely-zero.png",
          description: [
            `Por años, gente ha bombardeado nuestro email pidiendo un Monster® con menos calorías. Ya lo tenemos... pero esta no es cualquier bebida!`,
            `Ahora, Absolutely Zero, con una composición de energía re-formulada, un nuevo sistema de endulzante, y después de miles de intentos fracasados, ¡Por fin lo perfeccionamos! `,
            `Sin azúcar pero con el mismo Monster® buzz...`,
            `Absolutely Guaranteed!`,
          ],
        },
      });

      monster_energy.classList.remove("active-drink");
      monster_energy.classList.add("inactive");
      monster_44.classList.remove("active-drink");
      monster_44.classList.add("inactive");
      monster_lo.classList.remove("active-drink");
      monster_lo.classList.add("inactive");
      monster_zero.classList.add("active-drink");
      monster_zero.classList.remove("inactive");
    }
  };

  useEffect(() => {
    setMonster(monsterState);
  }, [monsterState]);

  return (
    <>
      <div className="monster-description animation-container">
        <div className="brand-banner  animation-container">
          <img src={monster.cover} alt="monster" className="banner-img" />
        </div>
        <div className="description  animation-container">
          <MonsterDescription content={monster.description} />
        </div>
      </div>
      <div className="monster-type  animation-container">
        <div
          id="monster-energy"
          className="active-drink"
          onClick={handleClick("monster-original")}
        >
          <img
            src="/media/monster-energy/monster-energy-drink.png"
            alt="monster"
          />
        </div>
        <div
          id="monster-44"
          className="inactive"
          onClick={handleClick("monster-44")}
        >
          <img src="/media/monster-energy/monster-44-drink.png" alt="monster" />
        </div>
        <div
          id="monster-lo-carbs"
          className="inactive"
          onClick={handleClick("monster-lo")}
        >
          <img
            src="/media/monster-energy/monster-lo-carbs-drink.png"
            alt="monster"
          />
        </div>
        <div
          id="monster-zero"
          className="inactive"
          onClick={handleClick("monster-zero")}
        >
          <img
            src="/media/monster-energy/monster-absolutely-zero-drink.png"
            alt="monster"
          />
        </div>
      </div>
    </>
  );
}

export default MonsterOriginal;
