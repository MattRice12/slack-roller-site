import React from "react";

const StaticRoller = ({ rollHandler }) => {
  const handleRoll = () => {
    rollHandler(2, 6);
  };

  return (
    <div>
      <h2>2d6</h2>
      <button className="roll-button" onClick={handleRoll}>
        Roll
      </button>
    </div>
  );
};

export default StaticRoller;
