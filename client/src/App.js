import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/homePage.js';
import Carousel from './components/carouselComponent/index.js';
import Footer from './components/footer/index.js';
var homeStyles = {
  backgroundColor: 'blue',

}
class App extends Component {
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
      <div className="App">
        <div  className="jumbotron" style={homeStyles}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to sexy quilt bitches! Boo yaaaa</h2>
        </div>
        {this.state.users.map(user =>
        <div key={user.id}>
          {user.username}

        </div>)}
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App;
