import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroCards from './components/HeroCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {(window.location.hash === '#home' || window.location.hash === '' || window.location.hash === '#') && (
        <HeroCards />
      )}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactttttt
        </a>
      </header>
    </div>
  );
}

export default App;
