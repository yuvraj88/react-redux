import { ADD } from "./actionTypes";
const initialState = {
  value: 20,
  myName: "yuvraj",
  school: "KV",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: state.value + action.value,
      };
    case "SUBTRACT":
      return {
        ...state,
        value: state.value - action.value,
      };
    case "MULTIPLY":
      return {
        ...state,
        value: state.value * action.value,
      };

    default:
      return state;
  }
};

export default reducer;
