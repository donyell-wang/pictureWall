import React, { Component } from 'react';
import Frame from '../components/Frame/'
import Draggable from 'react-draggable';
import { App } from 'grommet';
import MyHeader from './MyHeader';
import Content from './Content';

class MainLayout extends Component {
  render () {
    return (
      <App>
        <MyHeader />
        <Content />
      </App>
    );
  }
}

export default MainLayout;
