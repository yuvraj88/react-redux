import React from "react";
import "./App.css";
import { connect } from "react-redux";
import NewComponent from "./NewComponent";
import { ADD } from "./store/actionTypes";

function App(props) {
  console.log();
  return (
    <div className="app">
      My Number: {props.values}
      {props.name}
      <br />
      <br />
      <button onClick={props.onAdd}>Increment</button>
      <br />
      <br />
      <button onClick={props.onSubtract}>Decrement</button>
      <br />
      <button onClick={props.onMultiply}>onMultiply</button>
      My New Compoonent
      <NewComponent />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    values: state.reducerOne.value,
    name: state.reducerOne.myName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({ type: ADD, value: 1 }),
    onSubtract: () => dispatch({ type: "SUBTRACT", value: 1 }),
    onMultiply: () => dispatch({ type: "MULTIPLY", value: 10 }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
