import React, { Component } from 'react';
import Frame from '../components/Frame'
import Draggable from 'react-draggable';

class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>MyPictureWall</h2>
        </div>
        <div className="content">
            <Frame width={100} height={100} />
        </div>
      </div>
    );
  }
}

export default MainLayout;
