import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Hello There!";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Welcome />
          <Box /> 
          <p>Something</p>
          <Ending />
         
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return(
      <h1 className="App-header">{welcome}</h1>
    )
  }
}

class Box extends Component {
  render() {
return(
  <div>
    <p className="firstLine"> This is a box? </p>
    <p className="firstLine"> This is a box also. </p>
  </div>

    )
  }
}

class Ending extends Component {
  render() {
    return (
      <div>
      <p className="footer"> The end.</p>
      </div>
    )
  }
}

export default App;
