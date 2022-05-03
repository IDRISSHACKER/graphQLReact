import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Graphi from './components/Graphi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
      <div className="body">
        <div>
            <Graphi />
          </div>
          <Logo className="App-logo" />
      </div>
    </div>
  );
}

export default App;
