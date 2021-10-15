import React from "react";

function MonsterDescription({ content = [] }) {
  return (
    <>
      {content.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}

export default MonsterDescription;
