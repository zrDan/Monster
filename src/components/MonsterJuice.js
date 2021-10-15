import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MonsterDescription from "./MonsterDescription";

function MonsterJuice() {
  const monsterState = useSelector((state) => state.monsterInfo);
  const [monster, setMonster] = useState("");
  const dispatch = useDispatch();

  const handleClick = (monsterDrink) => (e) => {
    e.preventDefault();
    let monster_khaos = document.getElementById("khaos");
    let monster_mango = document.getElementById("mango-loco");
    let monster_punch = document.getElementById("pipeline-punch");

    if (monsterDrink === "monster-khaos") {
      dispatch({
        type: "SET_MONSTER_INFO",
        payload: {
          cover: "/media/monster-juice/khaos.png",
          description: [
            `Después de meses en el laboratorio, creamos Juice Monster.`,
            `Empezamos con nuestro sabor original de Monster, mezclamos una
      combinación brutal de jugos naturales y le inyectamos nuestra famosa
      mezcla.`,
            `It´s alive...`,
            `KHAOS un híbrido brutal de Jugo y Monster.`,
            `¡30% Jugo - 100% Monster!`,
            `ENERGY + JUGO`,
          ],
        },
      });

      monster_khaos.classList.add("active-drink");
      monster_khaos.classList.remove("inactive");
      monster_mango.classList.remove("active-drink");
      monster_mango.classList.add("inactive");
      monster_punch.classList.remove("active-drink");
      monster_punch.classList.add("inactive");
    } else if (monsterDrink === "monster-mango") {
      dispatch({
        type: "SET_MONSTER_INFO",
        payload: {
          cover: "/media/monster-juice/mango-loco.png",
          description: [
            `En víspera del 1 de noviembre año tras año, amigos y familiares se reúnen para celebrar el Día de Muertos.`,
            `Ofrendas llenas de misticismo, comida y bebidas atraen las almas de los difuntos para unirse a la celebración.`,
            `Mango Loco es una mezcla celestial de jugos exóticos que seguramente atraerá incluso al espíritu más obstinado.`,
            `ENERGIA QUE DA MIEDO`,
          ],
        },
      });

      monster_khaos.classList.remove("active-drink");
      monster_khaos.classList.add("inactive");
      monster_mango.classList.add("active-drink");
      monster_mango.classList.remove("inactive");
      monster_punch.classList.remove("active-drink");
      monster_punch.classList.add("inactive");
    } else if (monsterDrink === "monster-punch") {
      dispatch({
        type: "SET_MONSTER_INFO",
        payload: {
          cover: "/media/monster-juice/pipeline-puch.png",
          description: [
            `Banzai Pipeline es una de las olas más famosas del mundo localizada en la legendaria costa norte de la isla hawaiana de Oahu, cobra vida durante algunos meses de cada invierno.`,
            `En honor esta épica fuerza de la naturaleza, creamos Juice Monster Pipeline Punch. La mezcla perfecta de los mejores sabores que Hawái puede ofrecer: `,
            `maracuyá, naranja y guayaba combinados con nuestra famosa mezcla Monster.`,
            `BANZAI !`,
          ],
        },
      });

      monster_khaos.classList.remove("active-drink");
      monster_khaos.classList.add("inactive");
      monster_mango.classList.remove("active-drink");
      monster_mango.classList.add("inactive");
      monster_punch.classList.add("active-drink");
      monster_punch.classList.remove("inactive");
    }
  };

  useEffect(() => {
    setMonster(monsterState);
  }, [monsterState]);

  return (
    <>
      <div className="monster-description">
        <div className="brand-banner  animation-container">
          <img src={monster.cover} alt="monster" className="banner-img" />
        </div>
        <div className="description  animation-container">
          <MonsterDescription content={monster.description} />
        </div>
      </div>
      <div className="monster-type  animation-container">
        <div
          id="khaos"
          className="active-drink"
          onClick={handleClick("monster-khaos")}
        >
          <img src="/media/monster-juice/khaos-drink.png" alt="monster" />
        </div>
        <div
          id="mango-loco"
          className="inactive"
          onClick={handleClick("monster-mango")}
        >
          <img src="/media/monster-juice/mango-loco-drink.png" alt="monster" />
        </div>
        <div
          id="pipeline-punch"
          className="inactive"
          onClick={handleClick("monster-punch")}
        >
          <img
            src="/media/monster-juice/pipeline-punch-drink.png"
            alt="monster"
          />
        </div>
      </div>
    </>
  );
}

export default MonsterJuice;
