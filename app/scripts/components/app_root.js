import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import rollDie from "../actions/roll_die.js";
import getHelp from "../actions/get_help.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);

    this.rollDie = this.rollDie.bind(this);
    this.getHelp = this.getHelp.bind(this);
  }

  rollDie(e) {
    e.preventDefault();
    this.props.dispatch(rollDie());
  }

  getHelp(e) {
    e.preventDefault();
    this.props.dispatch(getHelp());
  }

  render() {
    return (
      <main>
        <section>
          <button onClick={this.rollDie}>Roll</button>
        </section>
      </main>
    );
  }
}

export default connect()(AppRoot);
