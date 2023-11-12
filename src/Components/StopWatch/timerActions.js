export const handleStart = (dispatch) => {
  dispatch({ type: "START" });
};
export const handleStop = (dispatch) => {
  dispatch({ type: "STOP" });
};
export const handleLap = (
  lastAddedTIme,
  timerState,
  lapDispatch,
  setLastAddedTime
) => {
  if (lastAddedTIme !== timerState.elapsedTime) {
    lapDispatch({ type: "ADD_LAP", payload: timerState.elapsedTime });
    setLastAddedTime(timerState.elapsedTime);
  }
};
