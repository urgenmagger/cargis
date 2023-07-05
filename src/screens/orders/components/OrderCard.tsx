import React, {FC, memo, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {StatusBack} from '../../../utils/types';
import {useNavigation} from '@react-navigation/native';
import {RootStackList, Screens} from '../../../navigation';
import CollapsibleButton from '../../../legos/CollapsibleButton';
import {Collapsible} from '../../../legos';

interface Props {
  orderId?: string;
  orderNumber: number | null;
  status: string | null;
  createDt: string;
  isDetails?: boolean;
  address?: string;
}

const OrderCard: FC<Props> = ({
  address,
  orderNumber,
  status,
  createDt,
  orderId,
  isDetails = false,
}) => {
  const navigation = useNavigation<RootStackList>();
  const [toggleState, setToggleState] = useState(false);
  console.log('urgen address', address);

  const handleGoDetails = () => {
    navigation.navigate(Screens.OrderDetails, {orderId});
  };

  const handlerCollapse = () => {
    setToggleState(!toggleState);
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
            <View style={styles.collapsable}>
              <CollapsibleButton top={toggleState} onPress={handlerCollapse} />
            </View>
          </View>
          <View>
            <Text>{`От ${createDt}`}</Text>
          </View>
        </View>
      </View>
      <Collapsible open={toggleState}>
        <View style={styles.headerContent}>
          <Text style={styles.customerText}>Маршрут перевозки</Text>
          <Text style={styles.customerText}>{address}</Text>
        </View>
        {!isDetails && (
          <TouchableOpacity style={styles.buttonMore} onPress={handleGoDetails}>
            <Text style={styles.buttonMoreText}>Подробнее</Text>
          </TouchableOpacity>
        )}
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
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
  collapsable: {
    marginLeft: 'auto',
  },
  buttonMore: {
    borderWidth: 1,
    marginTop: 200,
    marginBottom: 20,
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
  },
  headerContent: {
    height: 40,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  customerText: {
    fontSize: 14,
    color: '#8FA0A8',
    textAlign: 'left',
  },
});

export default memo(OrderCard);
