import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {Status} from '../../../utils/types';

interface Props {
  onButtonClick?: (id: number) => void;
}

const ButtonList: FC<Props> = ({onButtonClick}) => {
  const [active, setActive] = useState(1);

  const buttonData = [
    {id: 1, label: Status.ALL},
    {id: 2, label: Status.ACTIVE},
    {id: 3, label: Status.PAUSED},
    {id: 4, label: Status.COMPLETED},
  ];

  const handleButtonClick = (id: number) => {
    if (onButtonClick) {
      setActive(id);
      onButtonClick(id);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      {buttonData.map(button => (
        <TouchableOpacity
          key={button.id}
          style={[styles.button, button.id === active && styles.activeButton]}
          onPress={() => handleButtonClick(button.id)}>
          <Text
            style={[
              styles.buttonText,
              button.id === active && styles.activeButtonText,
            ]}>
            {button.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    borderColor: '#E9EDEF',
  },
  buttonText: {
    fontSize: 16,
    color: '#637A86',
    textAlign: 'center',
  },
  activeButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    borderColor: '#0C48A1',
  },
  activeButtonText: {
    color: '#0C48A1',
  },
});

export default ButtonList;
