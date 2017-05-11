import api from "../api.js";

export default function getHelp() {
  return function(dispatch) {
    $.ajax({
      type: "GET",
      url: api + "/helpdw",
      dataType: "json"
    }).then(() => {
      console.log(response);
    });
  };
}
