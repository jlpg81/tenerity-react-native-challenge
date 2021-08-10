import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyOffersList from '../components/MyOffersList';

import context from '../context/context';

export default function MyOffersPage() {
  const contextFunctions = useContext(context);

  return (
    <View>
      <Text style={styles.greeting}>
        Hello {contextFunctions.user}, here are your offers:
      </Text>
      <MyOffersList />
    </View>
  );
}

const styles = StyleSheet.create({
  greeting: {
    margin: 20,
    textAlign: 'center',
    fontSize: 22,
  },
});
