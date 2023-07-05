import React, {FC} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {CustomIcon} from './icons/CustomIcon';

interface Props {
  onPress(): void;
  text?: string;
  top?: boolean;
}

const CollapsibleButton: FC<Props> = ({top, onPress, text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <CustomIcon
          iconName={top ? 'collapsableTop' : 'collapsableBottom'}
          size={30}
          color="#0C48A1"
        />
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
    width: 40,
    height: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CollapsibleButton;
