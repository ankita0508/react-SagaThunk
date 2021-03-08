import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { increment } from "./store/actions/counter-action";
import { decrementAsync } from "./store/middlewares/thunk";

function App(props) {
  return (
    <div>
      <h1>Count {props.cnt}</h1>
      <button onClick={props.toIncrement}>Increment</button>
      <button onClick={props.toDecrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cnt: state.count.counter
  };
};

const mapDispatchToProps = dispatch => ({
  toIncrement: () => {
    dispatch(increment(1));
  },
  toDecrement: () => {
    dispatch(decrementAsync(1));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
