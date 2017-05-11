import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import rollDie from "../actions/roll_die.js";
import getHelp from "../actions/get_help.js";
import Roller from "./roller.js";
import RecentRolls from "./recent_rolls.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);

    this.rollDie = this.rollDie.bind(this);
    this.getHelp = this.getHelp.bind(this);
  }

  rollDie(number, die) {
    this.props.dispatch(rollDie(number, die));
  }

  getHelp(e) {
    this.props.dispatch(getHelp());
  }

  render() {
    return (
      <main>
        <section className="roller-app">
          <Roller rollDie={this.rollDie} text={this.props.text} />
          <RecentRolls recentRolls={this.props.recentRolls} />
        </section>
      </main>
    );
  }
}

export default connect(state => state)(AppRoot);
