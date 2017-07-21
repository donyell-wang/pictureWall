import React, { PureComponent } from 'react';
import Draggable from 'react-draggable';

class Frame extends PureComponent {
  render() {
    const {width, height} = this.props;
    return (
      <Draggable  grid={[50, 50]} bounds="body">

        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <rect x={0} y={0} width={width} height={height} fill='#99cc33'
            stroke='#99cc33' fillOpacity={0.4} strokeWidth={4} />
        </svg>
      </Draggable>
    );
  }
}

Frame.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

export default Frame;
