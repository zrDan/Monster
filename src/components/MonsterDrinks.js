import React, { useEffect } from "react";
import MonsterOriginal from "./MonsterOriginal";
import MonsterUltra from "./MonsterUltra";
import MonsterJuice from "./MonsterJuice";
import "./style/monsterDrinks.css";
import { useSelector } from "react-redux";

function MonsterDrinks() {
  const categoryState = useSelector((state) => state.category);

  function monsterContaierType() {
    if (categoryState === "original") {
      return <MonsterOriginal />;
    } else if (categoryState === "ultra") {
      return <MonsterUltra />;
    } else {
      return <MonsterJuice />;
    }
  }

  useEffect(() => {
    monsterContaierType();
  }, [categoryState]);

  return (
    <section>
      <div className="monster-container">
        <div id="monster-container" className="monster-presentation">
          {monsterContaierType()}
        </div>
      </div>
    </section>
  );
}

export default MonsterDrinks;
