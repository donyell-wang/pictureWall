import React, { Component } from 'react';
import { Sidebar, Box, Accordion, AccordionPanel, Paragraph } from 'grommet';

class Sets extends Component {
  constructor (...arg) {
    super(...arg);
    this.state = {
    };
  }

  render () {
    return (
      <Sidebar>
        <Box
          justify='start'>
          <Accordion>
            <AccordionPanel heading='First Title'>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Second Title'>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Third Title'>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
          </Accordion>
        </Box>
      </Sidebar>
    )
  }
}

export default Sets;
