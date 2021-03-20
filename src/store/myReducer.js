import { SET_LOADING, SET_ERROR } from "./actionTypes";
const initialValues = {
  isLoading: false,
  error: false,
  result: "pass",
};

const myReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default myReducer;
