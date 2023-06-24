import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonList = () => {
  const buttonData = [
    {id: 1, label: 'Все'},
    {id: 2, label: 'Активные'},
    {id: 3, label: 'На паузе'},
    {id: 4, label: 'Завершенные'},
  ];

  return (
    <View style={styles.buttonContainer}>
      {buttonData.map(button => (
        <TouchableOpacity key={button.id} style={styles.button}>
          <Text style={styles.buttonText}>{button.label}</Text>
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
    borderColor: '#E9EDEF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#637A86',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonList;
