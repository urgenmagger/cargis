import React, {FC} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {CustomIcon} from './icons/CustomIcon';

interface Props {
  onPress(): void;
  text?: string;
}

const GoBackButton: FC<Props> = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <CustomIcon iconName="goBack" size={16} color="#0C48A1" />
      </View>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoBackButton;
