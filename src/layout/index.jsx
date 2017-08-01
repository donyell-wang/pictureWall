import React, { Component } from 'react';
import Frame from '../components/Frame/'
import Draggable from 'react-draggable';
import { App } from 'grommet';
import Content from './Content';

class MainLayout extends Component {
  render () {
    return (
      <App>
        <Content />
      </App>
    );
  }
}

export default MainLayout;
