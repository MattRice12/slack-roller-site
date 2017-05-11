import React from "react";
import CustomRoller from "./custom_roller.js";
import StaticRoller from "./static_roller.js";

const Roller = ({ text, rollDie }) => {
  const rollHandler = (number, die) => {
    rollDie(number, die);
  };

  return (
    <div className="roller-container">
      <div className="dice-block">
        <div className="roller">
          <StaticRoller rollHandler={rollHandler} />
        </div>

        <div className="roller">
          <CustomRoller rollHandler={rollHandler} />
        </div>
      </div>

      <div className="output-block">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Roller;
