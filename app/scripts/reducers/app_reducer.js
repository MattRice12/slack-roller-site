export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      text: ""
    };
  }

  switch (action.type) {
    case "ROLL_DIE":
      return Object.assign({}, state, { text: action.text });
  }

  console.log("Unhandled State!");
  return state;
}
