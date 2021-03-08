export const increment = value => {
  return { type: "INC", payload: value };
};

export const decrement = value => {
  console.log(value);
  return { type: "DEC", payload: value };
};

export const incrementAsync = value => {
  return { type: "INC_ASYNC", payload: value };
};
