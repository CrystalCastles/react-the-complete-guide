import React, { Component } from 'react';
import './App.css';
import {UserInput, UserOutput} from './User/User'

class App extends Component {
  state = {
    username: "realcooldude"
  }

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeNameHandler} userName={this.state.username}/>
        <UserOutput userName="cooldude"/>
        <UserOutput userName={this.state.username}/>
      </div>
    );
  }
}

export default App;
