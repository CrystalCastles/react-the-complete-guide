import React, { Component } from 'react';
import './App.css';

const ValidationComponent = (props) => {
  let message;
  if(props.textLength > 5) {
    message = "Text long enough";
  } else {
    message = "Text too short";
  }
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

const CharComponent = (props) => {
  let style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <div onClick={props.click} style={style}>
      {props.chars}
    </div>
  )
}

class App extends Component {
  state = {
    text: ''
  }

  textChangeHandler = (event) => {
    this.setState({
      text:event.target.value
    });
  }

  charRemoveHandler = (index) => {
    const splitText = this.state.text.split('');
    splitText.splice(index, 1);
    let rejoinedText = splitText.join('');
    this.setState({
      text: rejoinedText
    });
  }

  render() {
    const charBox = this.state.text.split('').map((char, index) => {
      return <CharComponent
        key={index}
        click={() => this.charRemoveHandler(index)}
        chars={char}/>
    })
    return (
      <div className="App">
        <input onChange={this.textChangeHandler} type="text" value={this.state.text}></input>
        <p>{this.state.text}</p>
        <ValidationComponent textLength={this.state.text.length}/>
        {charBox}
      </div>
    );
  }
}

export default App;
