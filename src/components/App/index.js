import React, { Component } from 'react';
import logo from '../../logo.svg';
import Newintro from '../Intro';
import Header from '../header';
import Footer from '../footer';
import './App.css'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Menu, {SubMenu, MenuItem} from 'rc-menu';

/*const Intro = (props) => (
  <p className="test">edit and save to reload.{props.name}</p>
)
*/
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel loop={ true } selected={ 0 } showArrows={ true } showNav={ true }>
                <div>
                    <img src="http://www.treelanstairs.com.au/img/slide/temp/7_1459343454_28227226_1366_500.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.treelanstairs.com.au/img/slide/temp/6_1459343432_93225689_1366_500.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.treelanstairs.com.au/img/slide/temp/5_1459343404_10249869_1366_500.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

class Menu1 extends Component {
    render() {
        return (
            <Menu>
              <MenuItem>1</MenuItem>
              <SubMenu title="2">
              <MenuItem>2-1</MenuItem>
              </SubMenu>
            </Menu>
        );
    }
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:
      [
        {
          "id":1,
          "name":"Foo",
          "age":"20"
        },

        {
          "id":2,
          "name":"Bar",
          "age":"20"
        },

        {
          "id":1,
          "name":"Baz",
          "age":"20"
        },
      ]
    }
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
        <Newintro myDataProp="test"/>
        dfg
        <Footer/>
        <DemoCarousel/>
        <Menu1/>
        <table>
          <tbody>
            {this.state.data.map((person,i) => <TableRow key = {i}
              data = {person} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}

export default App;
