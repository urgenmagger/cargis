import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {OrderDetails, Orders} from '../screens';

export enum Screens {
  Orders = 'Requests',
  OrderDetails = 'RequestDetails',
}

export type RootStackList = {
  [Screens.Orders]: undefined;
  [Screens.OrderDetails]: undefined;
};

export type RootStackListProps = NativeStackNavigationProp<RootStackList>;

const Stack = createNativeStackNavigator<RootStackList>();

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Orders}
          component={Orders}
          options={{
            title: 'Заявки на перевозки',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={Screens.OrderDetails}
          component={OrderDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
