import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonList from './components/ButtonList';

export const Requests = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonList />
        <View style={styles.contentContainer}>{/* Other content */}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
  },

  buttonContainer: {
    paddingTop: 10,
    height: 72,
    backgroundColor: 'white',
  },
  contentContainer: {
    marginHorizontal: 'auto',
    width: '100%',
    maxWidth: 400,
  },
});
