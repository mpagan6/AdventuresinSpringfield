import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import scenes from './scenes.json';

class App extends Component {
  constructor(){
    super();

       this.state = {
      scene_num : 0
    }
  }

  nextScene = (s) => {
   
    this.setState({scene_num : s});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Game</h1>
        </header>

        <p>{this.state.name}</p>

        <p>{scenes[this.state.scene_num].text}</p>

        <img src={scenes[this.state.scene_num].image} width="300" height="300" />

        {scenes[this.state.scene_num].options.map((op, i) => 
          <div key={i}>
            <button onClick={() => this.nextScene(op.send_to)}>{op.text}</button>
            <br />
          </div>
        )}
        

        <br /><br /><br /><br />
      </div>
    );
  }
}

export default App;
