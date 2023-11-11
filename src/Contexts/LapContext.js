import { createContext, useReducer } from "react";
import { lapReducer } from "../Reducers/LapReducer";
export const LapContext = createContext();
export const LapProvider = (props) => {
  const [lapState, lapDispatch] = useReducer(lapReducer, []);
  return (
    <LapContext.Provider value={{ lapState, lapDispatch }}>
      {props.children}
    </LapContext.Provider>
  );
};
