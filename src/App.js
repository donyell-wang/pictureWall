import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import VectorWidget from './vector/VectorWidget.js';
import Draggable from 'react-draggable'; // Both at the same time

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Draggable  grid={[50, 50]} bounds="body">
          <div>
            <svg width={500} height={200} viewBox="0 0 1000 400" >
              <rect x={265} y={90} width={150} height={200} fill='#99cc33'
                stroke='#99cc33' fillOpacity={0.4} strokeWidth={4} />
            </svg>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;
