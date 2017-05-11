import api from "../api.js";

export default function rollDie(number, die) {
  return function(dispatch) {
    $.ajax({
      type: "POST",
      url: "https://slack-die-roller.herokuapp.com/roll",
      data: JSON.stringify({
        user_name: "mattrice",
        text: `${number}d${die}`
      }),
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      }
    }).then(response => {
      dispatch({ type: "ROLL_DIE", text: response.text });
    });
  };
}
