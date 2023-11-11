import "./App.css";
import Lap from "./Components/Lap/Lap";
import StopWatch from "./Components/StopWatch/Stop-watch";
function App() {
  return (
    <>
      {" "}
      <div className="app">
        <StopWatch />
        <Lap />
      </div>
    </>
  );
}

export default App;
