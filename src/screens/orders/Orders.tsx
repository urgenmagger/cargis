import React, {FC, useCallback, useEffect, useState} from 'react';
import useSWRInfinite from 'swr/infinite';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';

import {
  TOKEN,
  URL_ROOT,
  URL_PAUSE,
  URL_ACTIVE,
  URL_COMPLETED,
  URL_ALL_ORDERS,
} from '../../utils/constants';
import {OrdersData} from '../../utils/types';
import OrderCard from './components/OrderCard';
import ButtonList from './components/ButtonList';
import {getFormatDate} from '../../utils/formats';

export const Orders: FC = () => {
  const [url, setUrl] = useState(URL_ALL_ORDERS);
  const fetcher = useCallback(async (url_fetch: string) => {
    const response = await fetch(url_fetch, {
      headers: {
        Authorization: TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка загрузки данных');
    }

    const data = await response.json();
    return data;
  }, []);

  const getKey = useCallback(
    (pageIndex: number, previousPageData: OrdersData | null) => {
      if (previousPageData && !previousPageData.orders.length) {
        return null; // Reach the end
      }

      return `${URL_ROOT}?page=${pageIndex}${url}`;
    },
    [url],
  );

  const {data, error, size, setSize} = useSWRInfinite<OrdersData>(
    getKey,
    fetcher,
  );

  //single flat array of orders
  const orders = data ? data.flatMap(pageData => pageData.orders) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');

  const isRefreshing = size === 1 && isLoadingMore;

  const onRefresh = useCallback(() => {
    setSize(1);
  }, []);

  const loadMoreItem = useCallback(() => {
    setSize(size + 1);
  }, [size]);

  const renderItem = useCallback(({item, index}) => {
    console.log('urgen item', JSON.stringify(item, null, 3));
    return (
      <OrderCard
        key={`${item?.id}_${index}`}
        orderNumber={item?.order_number}
        status={item?.status_1c}
        createDt={getFormatDate(item?.create_dt)}
        orderId={item?.id}
      />
    );
  }, []);

  const handleButtonClick = (id: number) => {
    if (id === 1) {
      setUrl(URL_ALL_ORDERS);
    }
    if (id === 2) {
      setUrl(URL_ACTIVE);
    }
    if (id === 3) {
      setUrl(URL_PAUSE);
    }
    if (id === 4) {
      setUrl(URL_COMPLETED);
    }
    setSize(1);
  };

  useEffect(() => {
    setSize(1);
  }, []);

  if (error) {
    return <Text>Произошла ошибка: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonList onButtonClick={handleButtonClick} />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={orders}
          onEndReached={loadMoreItem}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
          onEndReachedThreshold={0.1}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item?.id}_${index}`}
        />
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
  contentContainer: {},
});
