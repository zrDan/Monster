import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style/monsterCategory.css";

function MonsterCategory() {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);

  const handleClick = (categoryName) => (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_CATEGORY_STATE",
      payload: categoryName,
    });
  };

  function categorySelector() {
    let originalSection = document.getElementById("original");
    let ultraSection = document.getElementById("ultra");
    let juiceSection = document.getElementById("juice");

    if (categoryState === "original") {
      originalSection.classList.add("monster-original-active");
      ultraSection.classList.remove("monster-ultra-active");
      juiceSection.classList.remove("monster-juice-active");
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
    } else if (categoryState === "ultra") {
      originalSection.classList.remove("monster-original-active");
      ultraSection.classList.add("monster-ultra-active");
      juiceSection.classList.remove("monster-juice-active");
    } else {
      originalSection.classList.remove("monster-original-active");
      ultraSection.classList.remove("monster-ultra-active");
      juiceSection.classList.add("monster-juice-active");
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
    }
  }

  useEffect(() => {
    categorySelector();
  }, [categoryState]);

  return (
    <section>
      <div className="monster-category">
        <div
          id="ultra"
          className="category-option"
          onClick={handleClick("ultra")}
        >
          <img src="/media/monster-ultra/monster-ultra.png" alt="monster" />
        </div>
        <div
          id="original"
          className="category-option"
          onClick={handleClick("original")}
        >
          <img src="/media/monster-energy/monster-energy.png" alt="monster" />
        </div>
        <div
          id="juice"
          className="category-option"
          onClick={handleClick("juice")}
        >
          <img src="/media/monster-juice/monster-juice.png" alt="monster" />
        </div>
      </div>
    </section>
  );
}

export default MonsterCategory;
