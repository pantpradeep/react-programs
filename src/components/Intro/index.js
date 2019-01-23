import React from 'react';

class Newintro extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data : 'initial data'
    }
    this.updateState = this.updateState.bind(this);
  };
    updateState(e){
      this.setState({data: e.target.value});
    }
    render(){
      return(
      <Content myDataProp ={this.props.myDataProp} updateStateProp = {this.updateState}></Content> )
    }
  }


class Content extends React.Component{
  render(){
    return(
      <div>
        <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
        <h4>{this.props.myDataProp}</h4>
      </div>
    )
  }
}

export default Newintro;
