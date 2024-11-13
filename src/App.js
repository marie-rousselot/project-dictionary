import logo from "./codingpro_logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunrise"/>
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by{" "}
            <a
              href="https://portfolio-project-marie-codingpro.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Marie Rousselot
            </a>
            , is open-sourced on{" "}
            <a
              href="https://github.com/marie-rousselot/project-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionary-app-codingpro.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

