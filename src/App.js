import logo from './logo.svg';
import './App.css';
import Aloha from './hello';

function App() {
  return (
    <div className="App">
    <h1>Exercise 19</h1>

    {/* this calls the Aloha functional component defined in hello.js */}
    <Aloha></Aloha>

      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
