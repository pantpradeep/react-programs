import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
class Footer extends React.Component {
   constructor(){
      super();

      this.state ={
         data:['test']
      }
      this.setStateHandler = this.setStateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   setStateHandler(){
      var item="push item "
      var myarray=this.state.data.slice();
      myarray.push(item);
      this.setState({data:myarray})
   }
   findDomNodeHandler(){
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = '#f00';
   }
   render() {
      return (
         <div>
            <h1>Footer Section</h1>
            <button onClick ={this.setStateHandler}>Push</button>
            <h4>{this.state.data}</h4>
            <button onClick ={this.findDomNodeHandler}>Change color</button>
            <div id="myDiv">Node Manipulation</div>
         </div>
      );
   }
} 

export default Footer;