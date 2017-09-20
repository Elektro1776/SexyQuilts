import React, { Component } from 'react';

var customStyle = {
  color: 'black',

}
class Home extends Component {
    constructor(props){
      super(props);
      this.state= {
        users:[]
      }
    }
    componentDidMount(){
      fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({
        users: users
      }))
    }
  render() {
    return (
      <div>
        <p style={customStyle}>Hello From component 2</p>
        <p style={customStyle}>Another P tag</p>
      </div>
    );
  }
}

export default Home;
