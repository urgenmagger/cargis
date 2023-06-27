import React from 'react';
import {Svg, Path} from 'react-native-svg';

const GoBackIcon = ({width, height, color}) => (
  <Svg width={width} height={height} viewBox="0 0 8 12" fill="none">
    <Path
      d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
      fill={color}
    />
  </Svg>
);

export default GoBackIcon;
