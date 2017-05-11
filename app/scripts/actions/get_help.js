import api from "../api.js";

export default function getHelp() {
  return function(dispatch) {
    $.ajax({
      type: "GET",
      url: "https://slack-die-roller.herokuapp.com/helpdw",
      dataType: "json"
    }).then(() => {
      console.log(response);
    });
  };
}
