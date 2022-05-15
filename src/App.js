import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>weather lol</h1>

        <Weather />

        <footer>
          <a
            href="https://github.com/glitterb0mb/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code by Sarah Davis
          </a>
        </footer>
      </div>
    </div>
  );
}
