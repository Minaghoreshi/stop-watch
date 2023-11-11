import { createContext, useReducer } from "react";
import { timerReducer } from "../Reducers/TimerReducer";

export const TimerContext = createContext();
export const TimerProvider = (props) => {
  const [timerState, timerStateDispatch] = useReducer(timerReducer, {
    isRunning: false,
    elapsedTime: 0,
  });
  return (
    <TimerContext.Provider value={{ timerState, timerStateDispatch }}>
      {props.children}
    </TimerContext.Provider>
  );
};
