import React, { Component } from 'react';
import { Sidebar, Box, Accordion, AccordionPanel, Paragraph } from 'grommet';
import {Tiles,Tile} from 'grommet';
import Frame from '../Frame/'

class FrameSets extends Component {
  constructor (...arg) {
    super(...arg);
    this.state = {
    };
  }

  render () {
    return (
      <Tiles>
        <Tile>
          <Frame width={200} height={100}></Frame>
        </Tile>
        <Tile>

        </Tile>
        <Tile>

        </Tile>
        <Tile>

        </Tile>
      </Tiles>
    )
  }
}

export default FrameSets;
