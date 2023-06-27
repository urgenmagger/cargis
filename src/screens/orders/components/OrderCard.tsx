import React, {FC, memo} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {StatusBack} from '../../../utils/types';
import {useNavigation} from '@react-navigation/native';
import {RootStackList, Screens} from '../../../navigation';

interface Props {
  orderId?: string;
  orderNumber: number | null;
  status: string | null;
  createDt: string;
  isDetails?: boolean;
}

const OrderCard: FC<Props> = ({
  orderNumber,
  status,
  createDt,
  orderId,
  isDetails = false,
}) => {
  const navigation = useNavigation<RootStackList>();
  const handleGoDetails = () => {
    navigation.navigate(Screens.OrderDetails, {orderId});
  };
  const checkNumber = () => {
    if (orderNumber === null) {
      return 'нет номера';
    }
    return orderNumber;
  };

  const getColorStatus = () => {
    if (status === StatusBack.ACTIVE) {
      return '#0C48A1';
    }
    if (status === StatusBack.COMPLETED) {
      return '#27C07D';
    }
    if (status === StatusBack.PAUSED) {
      return 'gray';
    }
    return 'gray';
  };

  const getStatusTitle = () => {
    if (status === StatusBack.ACTIVE) {
      return 'Активная';
    }
    if (status === StatusBack.COMPLETED) {
      return 'Выполнена';
    }
    if (status === StatusBack.PAUSED) {
      return 'На паузе';
    }
    return 'Нет статуса';
  };
  //or
  // const getStatusTitle = () => {
  //   const statusTitles: {[key: string]: string} = {
  //     [StatusBack.ACTIVE]: 'Активная',
  //     [StatusBack.COMPLETED]: 'Выполнена',
  //     [StatusBack.PAUSED]: 'На паузе',
  //   };

  //   return statusTitles[status_1c] || 'Нет статуса';
  // };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.title}>
          <View style={styles.titleTop}>
            <Text>{`Заявка № ${checkNumber()}`}</Text>
            <View style={styles.button}>
              <Text style={[styles.textStatus, {color: getColorStatus()}]}>
                {getStatusTitle()}
              </Text>
            </View>
          </View>
          <View>
            <Text>{`От ${createDt}`}</Text>
          </View>
        </View>
      </View>
      {!isDetails && (
        <TouchableOpacity style={styles.buttonMore} onPress={handleGoDetails}>
          <Text style={styles.buttonMoreText}>Подробнее</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 340,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  container: {
    backgroundColor: 'white,',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textStatus: {},
  titleTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#EDF1F2',
    borderColor: '#E9EDEF',
    borderRadius: 10,
    paddingVertical: 2,
    marginHorizontal: 5,
    marginLeft: 5,
  },
  buttonMore: {
    borderWidth: 1,
    marginTop: 200,
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    borderColor: '#E9EDEF',
  },
  buttonMoreText: {
    fontSize: 16,
    color: '#0C48A1',
    textAlign: 'center',
  },
  title: {
    backgroundColor: 'white',
    // flexDirection: 'row',
  },
});

export default memo(OrderCard);
