import React from "react";
import CustomRoller from "./custom_roller.js";
import StaticRoller from "./static_roller.js";

class Roller extends React.Component {
  constructor(props) {
    super(props);

    this.rollHandler = this.rollHandler.bind(this);
  }

  rollHandler(number, die) {
    this.props.rollDie(number, die);
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="roller">
            <StaticRoller rollHandler={this.rollHandler} />
          </div>

          <div className="roller">
            <CustomRoller rollHandler={this.rollHandler} />
          </div>
        </div>

        <div className="content">
          <h2>{this.props.text}</h2>
        </div>

      </div>
    );
  }
}

export default Roller;
