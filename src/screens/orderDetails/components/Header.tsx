import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GoBackButton from '../../../legos/GoBack';
import {RootStackList} from '../../../navigation';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation<RootStackList>();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.container}>
        <GoBackButton onPress={() => handleGoBack()} />
        <Text>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingLeft: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
