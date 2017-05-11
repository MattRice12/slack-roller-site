import React from "react";

class StaticRoller extends React.Component {
  constructor(props) {
    super(props);

    this.rollHandler = this.rollHandler.bind(this);
  }

  rollHandler() {
    this.props.rollHandler(2, 6);
  }

  render() {
    return (
      <div>
        <h2>2d6</h2>
        <button onClick={this.rollHandler}>Roll</button>
      </div>
    );
  }
}

export default StaticRoller;
