
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
        <footer>
          This project was coded by <a href="https://www.marlenalvarado.com" target="_blank" rel="noreferrer">Marlen Alvarado</a> and is {""}
          <a rel="noreferrer"
          href="https://github.com/mmonter41912/weather-react"
          target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
      
    </div>
  )
}
