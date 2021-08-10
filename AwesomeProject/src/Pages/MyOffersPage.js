import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import context from '../context/context';

export default function MyOffersPage() {
  const contextFunctions = useContext(context);

  return (
    <View>
      <Text>My Offers</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
