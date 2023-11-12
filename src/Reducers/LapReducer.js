export const actionTypes = {
  ADD_LAP: "ADD_LAP",
  RESET: "RESET",
};
export const lapReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_LAP:
      return [...state, action.payload];
    case actionTypes.RESET:
      return [];
    default:
      break;
  }
};
