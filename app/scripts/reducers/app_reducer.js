export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      text: "",
      recentRolls: []
    };
  }

  switch (action.type) {
    case "ROLL_DIE":
      var newRecentRolls = state.recentRolls.slice();
      newRecentRolls.push(action.text);
      return Object.assign({}, state, {
        text: action.text,
        recentRolls: newRecentRolls
      });
  }

  console.log("Unhandled State!");
  return state;
}
