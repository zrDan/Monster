import React from "react";
// import Alert from "./Alert";
import NavBar from "./NavBar";
import MonsterCategory from "./MonsterCategory";
import MonsterDrinks from "./MonsterDrinks";

function App() {
  return (
    <>
      {/* <Alert /> */}
      <div className="App">
        <NavBar />
        <MonsterCategory />
        <MonsterDrinks />
      </div>
    </>
  );
}

export default App;
