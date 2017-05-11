import React from "react";

class CustomRoller extends React.Component {
  constructor(props) {
    super(props);

    this.rollHandler = this.rollHandler.bind(this);
  }

  rollHandler() {
    var number = this.refs.nbr.value;
    var die = this.refs.die.value;
    this.props.rollHandler(number, die);
  }

  render() {
    return (
      <div>
        <h2>Custom</h2>

        <div className="custom-block">
          <label htmlFor="Nbr">Nbr</label>
          <input type="number" id="Nbr" min="0" step="1" ref="nbr" />

          <br />

          <label htmlFor="Die">Die</label>
          <input type="number" id="Die" min="0" step="1" ref="die" />

          <br />
          <button onClick={this.rollHandler}>Roll</button>
        </div>
      </div>
    );
  }
}

export default CustomRoller;
