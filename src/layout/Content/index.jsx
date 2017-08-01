import React from 'react';
import { Split, Box } from 'grommet';
import Sets from '../../components/Sets/';
import MyHeader from './Header/'

const Content = (props) => {
  return (
    <Split priority='left' flex='left'>
      <Box
        justify='center'
        align='center'
        pad='medium' />
      <Box
        pad='none'
        justify='end'
        align='start'
        full='vertical'>
        <MyHeader />
        <Sets />
      </Box>
    </Split>
  )
}

export default Content;
