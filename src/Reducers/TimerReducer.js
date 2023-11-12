export const actionTypes = {
  START: "START",
  STOP: "STOP",
  TICK: "TICK",
  RESET: "RESET",
};
export const timerReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.START:
      return { ...state, isRunning: true };
    case actionTypes.TICK:
      const newElapsedTime = state.elapsedTime + 1;
      return { ...state, elapsedTime: newElapsedTime };
    case actionTypes.STOP:
      return { ...state, isRunning: false };
    case actionTypes.RESET:
      return {
        isRunning: false,
        elapsedTime: 0,
      };
    default:
      break;
  }
};
