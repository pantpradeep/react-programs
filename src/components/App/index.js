import React, { Component } from 'react';
import logo from '../../logo.svg';
import Newintro from '../Intro'
import Header from '../header'
import Footer from '../footer'
import './App.css'; 

/*const Intro = (props) => (
  <p className="test">edit and save to reload.{props.name}</p>
)
*/
class App extends Component {
  state = {
    series: []
  }
  render() {
    return (
      <div className="App">
       <Header/>
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
        <Newintro message="test"/>
        the length of series array - {this.state.series.length}
        <Footer/>
      </div>
    );
  }
}

export default App;
