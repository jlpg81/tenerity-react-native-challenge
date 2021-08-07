import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Pages/HomePage';
import MyOffers from '../Pages/MyOffers';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyOffers"
        component={MyOffers}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
