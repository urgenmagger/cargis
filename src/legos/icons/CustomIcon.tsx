import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

import {CustomIconConstructorProps, CustomIconProps} from './helpers';

export const getIcons = ({
  size = 24,
  color = 'gray-700',
}: CustomIconConstructorProps = {}): Record<string, JSX.Element> => ({
  collapsableTop: (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 14L12 10L8 14"
        stroke="#BBC5CB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  ),
  collapsableBottom: (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 9.99999L12 14L16 9.99999"
        stroke="#BBC5CB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  ),
  goBack: (
    <Svg width={size} height={size} viewBox="0 0 8 12" fill="none">
      <Path
        d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
        fill={color}
      />
    </Svg>
  ),
});

export const CustomIcon: FC<CustomIconProps> = ({
  size = 24,
  iconName = 'airplaneTakingOff',
  color = 'gray-700',
}) => getIcons({size, color: color})[iconName];
