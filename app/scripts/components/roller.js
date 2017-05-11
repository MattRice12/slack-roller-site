import React from "react";

class Roller extends React.Component {
  constructor(props) {
    super(props);

    this.rollHandler = this.rollHandler.bind(this);
  }

  rollHandler() {
    var number = this.refs.nbr.value;
    var die = this.refs.die.value;
    this.props.rollDie(number, die);
  }

  render() {
    return (
      <div>
        <label htmlFor="Nbr">Nbr</label>
        <input type="number" id="Nbr" min="0" step="1" ref="nbr" />

        <br />

        <label htmlFor="Die">Die</label>
        <input type="number" id="Die" min="0" step="1" ref="die" />

        <button onClick={this.rollHandler}>Roll</button>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default Roller;
