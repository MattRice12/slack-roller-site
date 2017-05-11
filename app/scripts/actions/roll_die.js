import api from "../api.js";

export default function rollDie() {
  return function(dispatch) {
    $.ajax({
      type: "POST",
      url: "https://slack-die-roller.herokuapp.com/roll",
      data: JSON.stringify({
        user_name: "mattrice",
        text: ""
      }),
      // contentType: "application/json",
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      }
    }).then(response => {
      console.log(response);
    });
  };
}
