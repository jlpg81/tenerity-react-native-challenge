import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Pages/HomePage';
import MyOffersPage from '../Pages/MyOffersPage';

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
        name="MyOffersPage"
        component={MyOffersPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
