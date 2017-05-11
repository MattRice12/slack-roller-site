import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import rollDie from "../actions/roll_die.js";
import getHelp from "../actions/get_help.js";
import Roller from "./roller.js";
import RecentRolls from "./recent_rolls.js";

const AppRoot = ({ dispatch, text, recentRolls }) => {
  const handleRoll = (number, die) => {
    dispatch(rollDie(number, die));
  };

  const getHelp = e => {
    dispatch(getHelp());
  };

  return (
    <main>
      <section className="roller-app">
        <Roller rollDie={handleRoll} text={text} />
        <RecentRolls recentRolls={recentRolls} />
      </section>
    </main>
  );
};

export default connect(state => state)(AppRoot);
