import React, { Component } from 'react';
import './App.css';
import scenes from './scenes.json';
import Simpsons from './simpsonsaudio.mp4';
import welcome from './cloudbg.jpg';

class App extends Component {
  constructor(){
    super();

  
    this.state = {
      scene_num : 0
    }

    this.audio = new Audio(Simpsons);
  }
  componentDidMount = () => {
    this.audio.play();
  }
// component on mount put code for sound on page load, then call on the sound


  nextScene = (s) => {
    //in this function change scene_num in state to whatever gets passed in
    //then check if it works by clicking the buttons
    this.setState({scene_num : s});
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
        <h1 className="App-title"> Adventures in Springfield</h1>
        <img src={welcome}  height= '640' width= '1080'  /> 
        </header>

        <p>{this.state.name}</p>

        <p>{scenes[this.state.scene_num].text}</p>

        <img src={scenes[this.state.scene_num].image} width="400" height="400" />

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
