
import logo from "./codingpro_logo.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <footer className="App-footer">
          <small>
            Coded by ""
            <a href="https://portfolio-project-marie-codingpro.netlify.app/">
              Marie Rousselot
            </a>
          </small>
          <main>
            <Dictionary />
          </main>
        </footer>
      </div>
    </div>
  );
}

export default App;
