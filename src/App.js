import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Intro = (props) => (
  <p className="test">edit and save to reload.{props.name}</p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="test">Welcome</h2>
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
        </header>
        <Intro name="test"/>
      </div>
    );
  }
}

export default App;
