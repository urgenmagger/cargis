import React from 'react';
import {View} from 'react-native';
import useSWR from 'swr';
import OrderCard from '../orders/components/OrderCard';
import Header from '../orderDetails/components/Header';
import {Collapsible} from '../../legos/Collapsable';

export const OrderDetails = ({route}) => {
  const {orderId} = route.params;
  const url = `https://admin-ct.cargis.pro/api/client/v1/orders/${orderId}`;

  const fetcher = async url => {
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer dZhzHlw8Flpsf8W9Duq4rsJ1UVT4dRlW',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch order details');
    }

    return response.json();
  };

  const {data, error} = useSWR(url, fetcher);

  if (error) {
    return console.log(error.message);
  }

  if (!data) {
    return console.log('...loading');
  }

  // Access the order details from the data object
  const order = data;
  console.log('urgen der =', order?.unloading_address);

  return (
    <>
      <View>
        <Header title={`Заявка № ${data?.id}`} />
        <OrderCard
          isDetails={true}
          orderNumber={data?.id}
          status={data?.status_1c}
          createDt={data?.create_dt}
          address={data?.unloading_address}
        />
      </View>
    </>
  );
};
