import React from 'react';
import {View} from 'react-native';

const Divider = ({height = 1, color = '#C7C7C7', style}) => {
  return (
    <View
      style={{
        borderBottomWidth: height,
        borderBottomColor: color,
        // width,
        ...style,
      }}
    />
  );
};

export default Divider;
