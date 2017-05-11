import React from "react";

class CustomRoller extends React.Component {
  constructor(props) {
    super(props);
    this.rollHandler = this.rollHandler.bind(this);
  }

  rollHandler() {
    var number = this.refs.nbr.value || 2;
    var die = this.refs.die.value || 6;
    this.props.rollHandler(number, die);
  }

  render() {
    return (
      <div>
        <h2>Click Dat Button</h2>

        <div className="custom-block">
          <div className="custom-input">
            <label htmlFor="Nbr">Nbr</label>
            <input type="number" id="Nbr" min="0" step="1" ref="nbr" />
          </div>

          <div className="custom-input">
            <label htmlFor="Die">Die</label>
            <input type="number" id="Die" min="0" step="1" ref="die" />
          </div>

          <div className="custom-input">
            <button className="roll-button" onClick={this.rollHandler}>
              Roll
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default CustomRoller;
