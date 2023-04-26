import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet} from 'react-native';

const PickerSelect = ({items, placeholder, onValueChange, value}) => {
  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      placeholder={placeholder}
      items={items}
      onValueChange={onValueChange}
      value={value}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    height: 60,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default PickerSelect;
