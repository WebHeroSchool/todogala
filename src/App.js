import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

const flag = true;
const count = 23;
import {count, lenght} from './number.js';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
            Общая длинна: {count*lenght}
          </div>

        <p style={{
          color: 'red'
        }}>
          Hello World!
        </p>
        <p>
          {count}
        </p>
        <p>
          {34}
        </p>
        <p> 
          {3 + 4}
        </p>
        <p>
          {flag && 'Flag is true'}</p>
        <p>
          {flag ? 'Flag is true' : 'Flag if false'}
        </p>
        <p>{undefined}, {null}, {false}, {true}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;