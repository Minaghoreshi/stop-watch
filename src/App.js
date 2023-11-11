import "./App.css";
import Lap from "./Components/Lap/Lap";
import StopWatch from "./Components/StopWatch/Stop-watch";
import { LapProvider } from "./Contexts/LapContext";
import { TimerProvider } from "./Contexts/TimerContext";
function App() {
  return (
    <div className="app">
      <LapProvider>
        <TimerProvider>
          <StopWatch />
        </TimerProvider>
        <Lap />
      </LapProvider>
    </div>
  );
}

export default App;
