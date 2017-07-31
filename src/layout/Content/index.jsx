import React from 'react';
import { Split, Box } from 'grommet';
import Sets from '../../components/Sets/'

const Content = (props) => {
  return (
    <Split priority='left' flex='left'>
      <Box
        justify='center'
        align='center'
        pad='medium' />
      <Box
        justify='end'
        align='start'
        pad='medium'>
        <Sets />
      </Box>
    </Split>
  )
}

export default Content;
