import "./App.css";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div className="App">
      <div className="leftContainer">
        <h2>Pomodoro</h2>
        <p>
          The Pomodoro Technique is a time management method based on 25-minute
          stretches of focused work broken by five-minute breaks. Longer breaks,
          typically 15 to 30 minutes, are taken after four consecutive work
          intervals.
        </p>
        <p>This is a work in progress project!</p>
        <p>
          For my source of inspiration,{" "}
          <a href="https://www.tomodoro.co/" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          is the website I am trying to replicate.
        </p>
        <Pomodoro />
      </div>
      <div className="rightContainer">
        <h2>To-Do List</h2>
      </div>
    </div>
  );
}

export default App;
