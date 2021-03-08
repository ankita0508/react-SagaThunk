import { decrement } from "../actions/counter-action";

export const decrementAsync = value => {
  return dispatch => {
    setTimeout(() => {
      dispatch(decrement(value));
    }, 1000);
  };
};
