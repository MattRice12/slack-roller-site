import React from "react";

const RecentRolls = ({ recentRolls }) => {
  let rollBlock = (
    <div className="recent-rolls-container">
      <h2>This keeps track of recent rolls</h2>
    </div>
  );
  if (recentRolls.length > 0) {
    rollBlock = (
      <ul className="recent-rolls-container">
        <h2>Recent Rolls:</h2>
        {recentRolls.reverse().map((roll, i) => {
          console.log("roll: ", roll);
          return (
            <li key={i}>
              {roll}
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div>
      {rollBlock}
    </div>
  );
};

export default RecentRolls;
