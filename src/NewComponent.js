import React from "react";
import { connect } from "react-redux";
import { SET_LOADING, SET_ERROR } from "./store/actionTypes";
function NewComponent(props) {
  return (
    <div>
      <p>{props.school}</p>
      {props.isLoading && <h1>Loading....</h1>}
      {props.error && <h1>Error....</h1>}
      <br />
      <button onClick={props.setLoading}>Set Loading </button>
      <button onClick={props.setError}>Set Error </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    school: state.reducerOne.school,
    isLoading: state.reducerTwo.isLoading,
    error: state.reducerTwo.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: () => dispatch({ type: SET_LOADING }),
    setError: () => dispatch({ type: SET_ERROR }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);
