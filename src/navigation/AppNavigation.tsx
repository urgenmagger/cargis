import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RequestDetails, Requests} from '../screens';

enum Screens {
  Requests = 'Requests',
  RequestDetails = 'RequestDetails',
}

export type RootStackList = {
  [Screens.Requests]: undefined;
  [Screens.RequestDetails]: undefined;
};

export type RootStackListProps = NativeStackNavigationProp<RootStackList>;

const Stack = createNativeStackNavigator<RootStackList>();

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Requests}
          component={Requests}
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
          name={Screens.RequestDetails}
          component={RequestDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
